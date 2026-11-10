import chefIcon from "../assets/chef.png"

export default function Header({ setCurrentPage, currentPage }) {
    return (
        <header className="flex flex-col sm:flex-row items-center justify-between shadow-sm border-b border-gray-400 bg-yellow-50 px-4 sm:px-8 py-3 gap-3 sm:gap-4">
            
            {/* Logo & Title */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
                <img 
                    src={chefIcon}
                    alt="chef Icon"
                    className="h-10 w-10 sm:h-11 sm:w-11 border rounded-xl border-gray-300 object-cover"
                />
                <h1 className="font-bold text-lg sm:text-xl">RecipeFinder</h1>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-5 sm:gap-10 text-xs sm:text-sm font-medium w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-300/60">
                {/* Discover */}
                <span 
                    onClick={() => setCurrentPage("discover")} 
                    className={`hover:font-bold cursor-pointer transition-colors py-1
                        ${currentPage === "discover" ? "text-yellow-600 font-bold underline underline-offset-4" : "text-gray-700"}`}>
                    Discover
                </span>

                {/* Recipes */}
                <span 
                    onClick={() => setCurrentPage("recipe")} 
                    className={`hover:font-bold cursor-pointer transition-colors py-1
                        ${currentPage === "recipe" ? "text-yellow-600 font-bold underline underline-offset-4" : "text-gray-700"}`}>
                    Recipes
                </span>

                {/* Meal plans */}
                <span 
                    onClick={() => setCurrentPage("meal_plans")} 
                    className={`hover:font-bold cursor-pointer transition-colors py-1
                        ${currentPage === "meal_plans" ? "text-yellow-600 font-bold underline underline-offset-4" : "text-gray-700"}`}>
                    Meal plans
                </span>

                {/* About */}
                <span 
                    onClick={() => setCurrentPage("about")} 
                    className={`hover:font-bold cursor-pointer transition-colors py-1
                        ${currentPage === "about" ? "text-yellow-600 font-bold underline underline-offset-4" : "text-gray-700"}`}>
                    About
                </span>
            </div>

        </header>
    )
}