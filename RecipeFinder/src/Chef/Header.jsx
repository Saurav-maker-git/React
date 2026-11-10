import chefIcon from "../assets/chef.png"
export default function Header({setCurrentPage,currentPage}){
    return(
        <div className="flex flex-row items-center shadow-sm justify-around border-b border-gray-400 gap-5 bg-yellow-50">
            <div className="w-fit flex flex-start items-center gap-6">
                <img 
                    src={chefIcon}
                    alt="chef Icon"
                    className="h-11 w-11 border rounded-xl border-gray-300"
                />
                <h1 className="font-bold">RecipeFinder</h1>
            </div>
            <div className="flex gap-10 text-sm">
                {/* Discover */}
                <span 
                    onClick={()=> setCurrentPage("discover")} 
                    className={`hover:font-bold cursor-pointer 
                        ${currentPage == "discover" ? "text-yellow-500 font-bold" : "text-black"}`}>Discover
                </span>

                {/* Recipe  */}
                <span 
                    onClick={()=> setCurrentPage("recipe")} 
                    className= {`hover:font-bold cursor-pointer ${currentPage=== "recipe" ? "text-yellow-500 font-bold" : "text-black"}`}>Recipes
                </span>

                {/* Meal plans */}
                <span onClick={()=> setCurrentPage("meal_plans")} 
                    className= {`hover:font-bold cursor-pointer ${currentPage == "meal_plans" ? "text-yellow-500 font-bold" : "text-black"}`}>Meal plans
                </span>
            </div>
            <div className="flex gap-10 text-sm items-center">
                <span onClick={()=> setCurrentPage("about")} 
                    className= {`hover:font-bold cursor-pointer ${currentPage == "about" ? "text-yellow-500 font-bold" : "text-black"}`}>About
                </span>
            </div>
        </div>
    )
}