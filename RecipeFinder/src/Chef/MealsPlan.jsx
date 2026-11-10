
import { useState, useEffect, useRef, useCallback } from "react";
import Markdown from "react-markdown";

export default function Meals({
    ingredientList,
    recipe,
    setRecipe,
    recipeSection
}) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const requestedIngredients = useRef("");

    const ingredientString = ingredientList.join(", ");

    const getRecipe = useCallback(async () => {
        if (!ingredientString.trim()) return;

        const apiKey = import.meta.env.VITE_GROQ_API_KEY;

        if (!apiKey) {
            setError("API key is missing. Please check your environment configuration.");
            return;
        }

        try {
            setIsLoading(true);
            setError("");

            const response = await fetch(
                "https://api.groq.com/openai/v1/chat/completions",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${apiKey.trim()}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        model: "openai/gpt-oss-20b",
                        messages: [
                            {
                                role: "system",
                                content: `You are an expert chef assistant.
                                Given a list of ingredients, provide an easy-to-follow recipe.
                                Format ingredients using bullet points and cooking steps
                                using numbered lists. Do not use markdown tables.
                                Include preparation time and cooking time.`
                            },
                            {
                                role: "user",
                                content: `Provide me a recipe from these ingredients: ${ingredientString}`
                            }
                        ]
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error?.message || "Failed to generate recipe."
                );
            }

            const generatedRecipe = data.choices?.[0]?.message?.content;

            if (!generatedRecipe) {
                throw new Error("The AI returned an empty recipe.");
            }

            setRecipe(generatedRecipe);

        } catch (err) {
            console.error("Recipe generation error:", err);
            setError(err.message || "Something went wrong. Please try again.");
            requestedIngredients.current = "";

        } finally {
            setIsLoading(false);
        }
    }, [ingredientString, setRecipe]);

    useEffect(() => {
        if (
            ingredientString &&
            !recipe &&
            requestedIngredients.current !== ingredientString
        ) {
            requestedIngredients.current = ingredientString;
            getRecipe();
        }
    }, [ingredientString, recipe, getRecipe]);

    function handleRetry() {
        requestedIngredients.current = ingredientString;
        getRecipe();
    }

    return (
        <section className="w-full max-w-4xl mx-auto
            px-4 sm:px-6 py-8 sm:py-10">

            <h1 className="text-2xl sm:text-3xl font-bold
                text-gray-800 mb-5">
                Your Meal Plan &amp; Recipe
            </h1>

            {/* Ingredients */}
            <div className="bg-yellow-50 border border-yellow-200
                p-4 sm:p-5 rounded-lg mb-6">

                <h3 className="font-semibold text-gray-800">
                    Ingredients you're cooking with:
                </h3>

                <p className="text-gray-600 capitalize mt-2
                    break-words leading-relaxed">
                    {ingredientString || "No ingredients added yet."}
                </p>
            </div>

            {/* Loading */}
            {isLoading && (
                <div className="text-gray-600 font-medium
                    animate-pulse mb-6 p-4 bg-gray-50 rounded-lg">
                    Chef AI is cooking up your recipe...
                </div>
            )}

            {/* Error */}
            {error && (
                <div className="bg-red-50 border border-red-200
                    rounded-lg p-4 mb-6">

                    <p className="text-red-700 text-sm break-words">
                        {error}
                    </p>

                    <button
                        type="button"
                        onClick={handleRetry}
                        disabled={isLoading}
                        className="mt-3 px-4 py-2 bg-yellow-300
                            rounded-md font-semibold text-sm
                            hover:bg-yellow-400 disabled:opacity-50
                            cursor-pointer"
                    >
                        Try again
                    </button>
                </div>
            )}

            {/* Generated Recipe */}
            {recipe && (
                <article
                    ref={recipeSection}
                    className="w-full min-w-0 scroll-mt-6
                        bg-white border border-gray-200
                        rounded-lg p-4 sm:p-6 shadow-md
                        prose prose-sm sm:prose-base
                        max-w-none text-gray-700
                        break-words
                        prose-headings:text-gray-900
                        prose-strong:text-gray-900
                        prose-li:marker:text-yellow-600"
                >
                    <Markdown>{recipe}</Markdown>
                </article>
            )}

            {/* Empty State */}
            {!ingredientList.length && (
                <div className="text-center bg-gray-50
                    border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-600">
                        Add some ingredients first to generate your recipe.
                    </p>
                </div>
            )}
        </section>
    );
}
