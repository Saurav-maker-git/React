import InputPic from "../assets/inputPic.jpg"
import searchIcon from "../assets/search.svg"
export default function InputForm({setCurrentPage, storeInput,input, ingredientList, handleInput}){

    let ingredientListLength = ingredientList.length > 0 ? "Ingredients on hand:": ""


    let displayIngredients = ingredientList.map(
        (item, index)=>(
            <li key={index}>{item}</li>
        )
    )
    return(
        <>  
            <div className="flex flex-row gap-5 px-5">
                <div className="flex flex-1 flex-col mt-[50px] px-5">
                    <form action= {storeInput} className="flex flex-col gap-2">
                        <label htmlFor="inputIngredient" className="font-semibold text-lg">
                            Enter ingredients you have
                        </label>
                        <div className="relative flex flex-row gap-10 items-center mt-3 ">
                            <img 
                                src= {searchIcon} 
                                alt="search bar" 
                                className={`absolute h-4 w-4 left-3 top-1/2 -translate-y-1/2 mr-[2px] 
                                    ${{input}.length === 0 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                            />
                            <input 
                                type="text" 
                                name="ingredients"
                                id="inputIngredient"
                                placeholder="eg. Rice"
                                value={input}
                                onChange={handleInput}
                                className="px-9 py-1 focus:outline-none focus:ring-1 
                                    border-gray-500 rounded-md bg-white w-[400px] "
                            />
                            <button 
                                type="submit"
                                className="px-3 py-1 bg-yellow-300 text-gray-600 font-semibold border border-gray-400 rounded-md shadow"
                                >Add Ingredient</button>
                        </div>

                    </form>
                    <div className="px-2 mt-2 gap-1">
                        {ingredientListLength}
                        {displayIngredients}
                    </div>
                    {/* Get recipe button */}
                    {
                        ingredientList.length > 2 && (
                            <div className="mt-[60px] w-full rounded-md flex justify-center items-center">
                                <div className="flex flex-row bg-yellow-100 rounded-md px-10 py-10 gap-10 items-center">
                                    <div className="flex gap-2 text-gray-500 font-semibold">
                                        <p>Ready for recipe?</p>
                                        <p>Let's figure out..</p>
                                    </div>
                                    <button
                                        onClick={()=>{setCurrentPage("meal_plans")}}
                                        className="px-3 py-1 text-gray-700 font-bold border border-gray-400 rounded-md bg-yellow-300">Get recipe
                                    </button>
                                </div>
                            </div>
                        )
                    }


                </div>
                {/* Right panel */}
                <div className="flex flex-1 mt-15 h-[400px] rounded-md rounded-tl-[60px] overflow-hidden shadow-xl hover:-translate-y-3">
                    <div className="relative flex cursor-pointer">
                        <img 
                            src={InputPic}
                            alt="Input Pic"
                            className=" w-full object-cover rounded-md rounded-tl-[60px] h-full "
                        />
                        <div className="flex absolute bg-yellow-200 px-3 py-2 bottom-3 left-1/2 -translate-x-1/2 rounded-md hover:scale-120 shadow ">
                            <h3 className="font-semibold">Full day meal preparation</h3>
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    )
}
