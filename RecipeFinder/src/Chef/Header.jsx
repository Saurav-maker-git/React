
import chefIcon from "../assets/chef.png";

export default function Header({ setCurrentPage, currentPage }) {
    const links = [
        ["Discover", "discover"],
        ["Recipes", "recipe"],
        ["Meal plans", "meal_plans"],
        ["About", "about"]
    ];

    return (
        <header className="w-full flex flex-col sm:flex-row
            items-center justify-between gap-3
            px-4 sm:px-6 lg:px-10 py-3
            bg-yellow-50 border-b border-gray-300 shadow-sm">

            {/* Logo */}
            <div className="flex items-center justify-center
                sm:justify-start gap-3 w-full sm:w-auto">

                <img
                    src={chefIcon}
                    alt="Recipe Finder chef logo"
                    className="h-10 w-10 sm:h-11 sm:w-11
                        rounded-xl border border-gray-300 object-cover"
                />

                <h1 className="font-bold text-lg sm:text-xl text-gray-900">
                    RecipeFinder
                </h1>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap items-center
                justify-center sm:justify-end
                gap-x-5 gap-y-2 sm:gap-x-7
                w-full sm:w-auto pt-2 sm:pt-0
                border-t sm:border-t-0 border-gray-300/60">

                {links.map(([label, page]) => (
                    <button
                        key={page}
                        type="button"
                        onClick={() => setCurrentPage(page)}
                        aria-current={currentPage === page ? "page" : undefined}
                        className={`text-xs sm:text-sm font-medium
                            whitespace-nowrap py-1 cursor-pointer
                            transition-colors
                            ${currentPage === page
                                ? "text-yellow-700 font-bold underline underline-offset-4"
                                : "text-gray-700 hover:text-yellow-700"
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </nav>
        </header>
    );
}
