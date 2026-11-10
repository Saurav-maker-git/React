import meal from "../assets/food.png"

export default function Marketing({ setCurrentPage }) {
    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mt-6 lg:mt-10 px-4 sm:px-8 max-w-7xl mx-auto">
            
            {/* Left Panel */}
            <div className="flex-1 flex flex-col px-4 sm:px-10 py-8 lg:py-20 gap-3 text-center lg:text-left">
                <span className="text-xs text-gray-900 font-semibold tracking-wide">FRESH IDEAS EVERYDAY</span>
                <div>
                    <h2 className="text-2xl sm:text-3xl text-gray-900 font-bold">A little inspiration.</h2>
                    <h2 className="text-2xl sm:text-3xl text-gray-900 font-bold">A lot flavour.</h2>
                </div>
               
                <p className="mt-3 text-gray-900 text-sm sm:text-base leading-relaxed">
                    Find your next "let's make that meal." Simple seasonal recipes for whatever's in your fridge—and on your mind.
                </p>

                <div className="flex flex-row w-full justify-center lg:justify-start gap-6 mt-8 sm:mt-[120px]">
                    <button 
                        type="button"
                        onClick={() => setCurrentPage("learn")} 
                        className="px-4 py-2.5 border border-gray-950 rounded-md bg-white font-semibold shadow-md cursor-pointer hover:scale-105 transition-transform text-sm sm:text-base"
                    >
                        Learn more
                    </button>
                    <button 
                        type="button"
                        onClick={() => setCurrentPage("recipe")} 
                        className="px-4 py-2.5 border border-gray-950 rounded-md bg-yellow-300 font-semibold shadow-md cursor-pointer hover:scale-105 transition-transform text-sm sm:text-base"
                    >
                        Get started
                    </button>
                </div>
            </div>

            {/* Right Panel */}
            <div className="relative flex-1 flex px-2 sm:px-12 justify-center lg:justify-end">
                <div className="relative w-full max-w-lg bg-white h-[350px] sm:h-[450px] shadow-md rounded-md rounded-tl-[60px] overflow-hidden group">
                    <img 
                        src={meal} 
                        alt="food img" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute w-fit left-1/2 -translate-x-1/2 group-hover:scale-105 transition-transform bottom-3 px-6 py-4 bg-yellow-50 flex flex-col border border-gray-400 rounded-md shadow text-center whitespace-nowrap">
                        <span className="text-xs font-semibold text-gray-600">ON THE TABLE TODAY</span>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Full vegetarian plate</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}