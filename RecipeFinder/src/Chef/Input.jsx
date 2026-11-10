import InputPic from "../assets/inputPic.jpg"
import searchIcon from "../assets/search.svg"

export default function InputForm({ setCurrentPage, storeInput, input, ingredientList, handleInput }) {

    let ingredientListHeading = ingredientList.length > 0 ? "Ingredients on hand:" : ""

    let displayIngredients = ingredientList.map((item, index) => (
        <li key={index} className="capitalize text-gray-800 font-medium">{item}</li>
    ))

    return (
        <div className="flex flex-col lg:flex-row gap-5 px-5 py-6 max-w-7xl mx-auto">
            
            {/* Left Panel */}
            <div className="flex flex-1 flex-col mt-[20px] sm:mt-[50px] px-2 sm:px-5">
                <form onSubmit={storeInput} className="flex flex-col gap-2">
                    <label htmlFor="inputIngredient" className="font-semibold text-lg text-gray-900">
                        Enter ingredients you have
                    </label>
                    
                    <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-10 items-start sm:items-center mt-3">
                        <div className="relative w-full sm:w-[400px]">
                            <img 
                                src={searchIcon} 
                                alt="search bar" 
                                className={`absolute h-4 w-4 left-3 top-1/2 -translate-y-1/2 transition-opacity 
                                    ${input.length === 0 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                            />
                            <input 
                                type="text" 
                                name="ingredients"
                                id="inputIngredient"
                                placeholder="eg. Rice"
                                value={input}
                                onChange={handleInput}
                                className="px-9 py-1 focus:outline-none focus:ring-1 border border-gray-500 rounded-md bg-white w-full"
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full sm:w-auto px-4 py-1.5 bg-yellow-300 text-gray-700 font-semibold border border-gray-400 rounded-md shadow hover:bg-yellow-400 cursor-pointer transition-colors"
                        >
                            Add Ingredient
                        </button>
                    </div>
                </form>

                {/* Ingredients List */}
                {ingredientList.length > 0 && (
                    <div className="px-2 mt-4">
                        <h4 className="font-semibold text-gray-800 mb-1">{ingredientListHeading}</h4>
                        <ul className="list-disc ml-5 space-y-1">
                            {displayIngredients}
                        </ul>
                    </div>
                )}

                {/* Get Recipe Banner */}
                {ingredientList.length > 2 && (
                    <div className="mt-8 sm:mt-[60px] w-full rounded-md flex justify-center items-center">
                        <div className="flex flex-col sm:flex-row bg-yellow-100 border border-yellow-300 rounded-md px-6 sm:px-10 py-6 sm:py-10 gap-6 sm:gap-10 items-center w-full justify-between">
                            <div className="flex flex-col sm:flex-row gap-2 text-gray-700 font-semibold text-center sm:text-left">
                                <p>Ready for recipe?</p>
                                <p>Let's figure out..</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setCurrentPage("meal_plans")}
                                className="px-4 py-2 text-gray-800 font-bold border border-gray-400 rounded-md bg-yellow-300 hover:bg-yellow-400 shadow cursor-pointer transition-colors whitespace-nowrap"
                            >
                                Get recipe
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Right Panel */}
            <div className="flex flex-1 mt-6 lg:mt-15 h-[300px] sm:h-[400px] rounded-md rounded-tl-[60px] overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <div className="relative flex cursor-pointer w-full h-full">
                    <img 
                        src={InputPic}
                        alt="Input Pic"
                        className="w-full h-full object-cover rounded-md rounded-tl-[60px]"
                    />
                    <div className="flex absolute bg-yellow-200 px-4 py-2 bottom-4 left-1/2 -translate-x-1/2 rounded-md hover:scale-105 transition-transform shadow whitespace-nowrap">
                        <h3 className="font-semibold text-sm sm:text-base text-gray-800">Full day meal preparation</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}