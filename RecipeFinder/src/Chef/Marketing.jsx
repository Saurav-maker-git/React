
import meal from "../assets/food.png";

export default function Marketing({ setCurrentPage }) {
    return (
        <section className="w-full max-w-7xl mx-auto
            flex flex-col lg:flex-row
            gap-8 lg:gap-10
            px-4 sm:px-8 py-6 lg:py-10">

            {/* Left Panel */}
            <div className="flex-1 min-w-0 flex flex-col
                justify-center gap-3
                px-2 sm:px-6 lg:px-10 py-6 lg:py-12
                text-center lg:text-left">

                <span className="text-xs text-gray-900
                    font-semibold tracking-wide">
                    FRESH IDEAS EVERYDAY
                </span>

                <div>
                    <h2 className="text-2xl sm:text-3xl
                        text-gray-900 font-bold">
                        A little inspiration.
                    </h2>

                    <h2 className="text-2xl sm:text-3xl
                        text-gray-900 font-bold">
                        A lot flavour.
                    </h2>
                </div>

                <p className="mt-3 text-gray-700
                    text-sm sm:text-base leading-relaxed">
                    Find your next "let's make that meal."
                    Simple seasonal recipes for whatever's
                    in your fridge—and on your mind.
                </p>

                <div className="flex flex-wrap justify-center
                    lg:justify-start gap-3 sm:gap-5 mt-8 lg:mt-16">

                    <button
                        type="button"
                        onClick={() => setCurrentPage("learn")}
                        className="px-4 py-2.5 border border-gray-950
                            rounded-md bg-white font-semibold shadow-md
                            hover:scale-105 transition-transform
                            cursor-pointer text-sm sm:text-base"
                    >
                        Learn more
                    </button>

                    <button
                        type="button"
                        onClick={() => setCurrentPage("recipe")}
                        className="px-4 py-2.5 border border-gray-950
                            rounded-md bg-yellow-300 font-semibold
                            shadow-md hover:bg-yellow-400
                            hover:scale-105 transition-all
                            cursor-pointer text-sm sm:text-base"
                    >
                        Get started
                    </button>
                </div>
            </div>

            {/* Right Panel */}
            <div className="flex-1 min-w-0 flex
                justify-center lg:justify-end">

                <div className="relative w-full max-w-lg
                    h-[300px] sm:h-[400px] lg:h-[450px]
                    bg-white shadow-md rounded-md
                    rounded-tl-[50px] sm:rounded-tl-[60px]
                    overflow-hidden group">

                    <img
                        src={meal}
                        alt="Fresh vegetarian meal"
                        className="w-full h-full object-cover
                            transition-transform duration-500
                            group-hover:scale-105"
                    />

                    <div className="absolute bottom-3
                        left-2 right-2 sm:left-4 sm:right-4
                        mx-auto max-w-sm
                        px-3 sm:px-6 py-3 sm:py-4
                        bg-yellow-50 flex flex-col items-center
                        border border-gray-400 rounded-md
                        shadow text-center">

                        <span className="text-xs font-semibold text-gray-600">
                            ON THE TABLE TODAY
                        </span>

                        <h2 className="text-lg sm:text-2xl
                            font-bold text-gray-900">
                            Full vegetarian plate
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
