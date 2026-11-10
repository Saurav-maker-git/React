import Header from "./Chef/Header.jsx"
import Marketing from "./Chef/Marketing.jsx"
import InputForm from "./Chef/Input.jsx"
import Meals from "./Chef/MealsPlan.jsx"
import About from "./Chef/About.jsx"
import Learn from "./Chef/Learn.jsx"
import { useState, useRef, useEffect} from "react"
export default function App(){
    // For user input
    const[input, setInput] = useState("")
    // For storing recipe
    const [recipe, setRecipe] = useState("")
    // For scrolling 
    const recipeSection = useRef(null);
    // For storing user inputs
    const[ingredientList, setIngredientList] = useState([])
    const[currentPage, setCurrentPage] = useState("discover")

    useEffect(()=>{
      if(recipe){
        recipeSection.current.scrollIntoView({behaviour:"smooth"})
      }
    },[recipe])
    
    function handleInput(e){
        setInput(e.target.value) 
    }

    function storeInput(){
        setIngredientList(
            function(prevList){
                return [...prevList,input]
            }
        )
        setInput("")
    }

    function render(){
      if(currentPage === "discover"){
        return <Marketing setCurrentPage={setCurrentPage}/>
      }
      else if(currentPage === "recipe"){
        return <InputForm 
            setCurrentPage={setCurrentPage}
            storeInput={storeInput}
            handleInput={handleInput}
            ingredientList={ingredientList}
          />
      }
      else if(currentPage === "meal_plans"){
        return <Meals
            recipe = {recipe}
            setRecipe={setRecipe}
            ingredientList={ingredientList}
            recipeSection={recipeSection}
        />
      }
      else if(currentPage === "about"){
        return <About/>
      }
      else if(currentPage === "learn"){
        return <Learn/>
      }
    }
  return(
      <>
          <Header 
            setCurrentPage= {setCurrentPage}
            currentPage = {currentPage}
          />
          {
            render()
          }
         
      </>
  )
}