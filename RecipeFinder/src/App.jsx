import Header from "./Chef/Header.jsx"
import Marketing from "./Chef/Marketing.jsx"
import InputForm from "./Chef/Input.jsx"
import Meals from "./Chef/MealsPlan.jsx"
import About from "./Chef/About.jsx"
import Learn from "./Chef/Learn.jsx"
import { useState, useRef, useEffect } from "react"

export default function App() {
    const [input, setInput] = useState("")
    const [recipe, setRecipe] = useState("")
    const recipeSection = useRef(null)
    const [ingredientList, setIngredientList] = useState([])
    const [currentPage, setCurrentPage] = useState("discover")

    useEffect(() => {
        if (recipe && recipeSection.current) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipe])
    
    function handleInput(e) {
        setInput(e.target.value) 
    }

    function storeInput(e) {
        if (e && e.preventDefault) e.preventDefault()
        if (!input.trim()) return
        
        setIngredientList((prevList) => [...prevList, input.trim()])
        setInput("")
    }

    function render() {
        if (currentPage === "discover") {
            return <Marketing setCurrentPage={setCurrentPage} />
        } else if (currentPage === "recipe") {
            return (
                <InputForm 
                    setCurrentPage={setCurrentPage}
                    storeInput={storeInput}
                    input={input}
                    handleInput={handleInput}
                    ingredientList={ingredientList}
                />
            )
        } else if (currentPage === "meal_plans") {
            return (
                <Meals
                    recipe={recipe}
                    setRecipe={setRecipe}
                    ingredientList={ingredientList}
                    recipeSection={recipeSection}
                />
            )
        } else if (currentPage === "about") {
            return <About />
        } else if (currentPage === "learn") {
            return <Learn />
        }
    }

    return (
        <div>
            <Header 
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            <main>
                {render()}
            </main>
        </div>
    )
}