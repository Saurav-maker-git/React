
import Header from "./Chef/Header.jsx";
import Marketing from "./Chef/Marketing.jsx";
import InputForm from "./Chef/Input.jsx";
import Meals from "./Chef/MealsPlan.jsx";
import About from "./Chef/About.jsx";
import Learn from "./Chef/Learn.jsx";

import { useState, useRef, useEffect } from "react";

export default function App() {
    const [input, setInput] = useState("");
    const [recipe, setRecipe] = useState("");
    const [ingredientList, setIngredientList] = useState([]);
    const [currentPage, setCurrentPage] = useState("discover");

    const recipeSection = useRef(null);

    useEffect(() => {
        if (recipe && recipeSection.current) {
            recipeSection.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }, [recipe]);

    function handleInput(e) {
        setInput(e.target.value);
    }

    function storeInput(e) {
        e.preventDefault();

        const ingredient = input.trim();

        if (!ingredient) return;

        setIngredientList(prev => [...prev, ingredient]);
        setInput("");
        setRecipe("");
    }

    function renderPage() {
        switch (currentPage) {
            case "discover":
                return <Marketing setCurrentPage={setCurrentPage} />;

            case "recipe":
                return (
                    <InputForm
                        setCurrentPage={setCurrentPage}
                        storeInput={storeInput}
                        input={input}
                        handleInput={handleInput}
                        ingredientList={ingredientList}
                    />
                );

            case "meal_plans":
                return (
                    <Meals
                        recipe={recipe}
                        setRecipe={setRecipe}
                        ingredientList={ingredientList}
                        recipeSection={recipeSection}
                    />
                );

            case "about":
                return <About />;

            case "learn":
                return <Learn />;

            default:
                return <Marketing setCurrentPage={setCurrentPage} />;
        }
    }

    return (
        <div className="min-h-screen w-full overflow-x-clip bg-white">
            <Header
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />

            <main className="w-full min-w-0">
                {renderPage()}
            </main>
        </div>
    );
}
