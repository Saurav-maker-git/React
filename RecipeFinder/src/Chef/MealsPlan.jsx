import { useState, useEffect } from "react"
import Markdown from "react-markdown"

export default function Meals({ ingredientList, recipe, setRecipe, recipeSection }) {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (ingredientList.length > 0 && !recipe) {
            getRecipe()
        }
    }, [])

    async function getRecipe() {
        const ingredientString = ingredientList.join(", ")
        const apiKey = import.meta.env.VITE_GROQ_API_KEY

        if (!apiKey) {
            console.error("API key is missing in your .env file!")
            return
        }

        try {
            setIsLoading(true)

            const response = await fetch(
                "https://api.groq.com/openai/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${apiKey.trim()}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        model: "openai/gpt-oss-20b",
                        messages: [
                            {
                                role: "system",
                                content: "You are an expert chef assistant. Given a list of ingredients, provide an easy-to-follow recipe. Format the ingredients and steps using clean bullet points and numbered lists, NOT markdown tables."
                            },
                            {
                                role: "user",
                                content: `Provide me a recipe from these ingredients: ${ingredientString}`
                            }
                        ]
                    })  
                }
            )

            const data = await response.json()
            
            if (!response.ok) {
                throw new Error(data.error?.message || "Failed to fetch recipe")
            }

            if (data.choices && data.choices[0]) {
                setRecipe(data.choices[0].message.content)        
            }
        } catch (err) {
            console.error("Error fetching recipe:", err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Your Meal Plan &amp; Recipe</h1>
            
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-700">Ingredients you're cooking with:</h3>
                <p className="text-gray-600 capitalize mt-1">{ingredientList.join(", ")}</p>
            </div>

            {isLoading && (
                <p className="text-gray-500 font-medium animate-pulse mb-6">
                    Chef AI is cooking up your recipe...
                </p>
            )}

            {recipe && (
                <div
                    ref={recipeSection} 
                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-md prose max-w-none text-gray-700 leading-relaxed" 
                >
                    <Markdown>{recipe}</Markdown>
                </div>
            )}
        </div>
    )
}