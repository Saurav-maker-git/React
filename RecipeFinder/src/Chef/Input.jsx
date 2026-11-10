
import InputPic from "../assets/inputPic.jpg";
import searchIcon from "../assets/search.svg";

export default function InputForm({
    setCurrentPage,
    storeInput,
    input,
    ingredientList,
    handleInput
}) {
    return (
        <section className="w-full max-w-7xl mx-auto
            flex flex-col lg:flex-row gap-6 lg:gap-10
            px-4 sm:px-6 lg:px-8 py-6 sm:py-10">

            {/* Left Panel */}
            <div className="flex-1 min-w-0 flex flex-col
                justify-center px-1 sm:px-4 lg:px-5">

                <form onSubmit={storeInput} className="flex flex-col gap-3">

                    <label
                        htmlFor="inputIngredient"
                        className="font-semibold text-lg text-gray-900"
                    >
                        Enter ingredients you have
                    </label>

                    <div className="flex flex-col sm:flex-row
                        gap-3 items-stretch sm:items-center">

                        <div className="relative w-full min-w-0 sm:max-w-[400px]">

                            <img
                                src={searchIcon}
                                alt=""
                                aria-hidden="true"
                                className={`absolute h-4 w-4 left-3
                                    top-1/2 -translate-y-1/2
                                    transition-opacity
                                    ${input.length === 0
                                        ? "opacity-100"
                                        : "opacity-0"
                                    }`}
                            />

                            <input
                                type="text"
                                name="ingredients"
                                id="inputIngredient"
                                placeholder="eg. Rice"
                                value={input}
                                onChange={handleInput}
                                className="w-full min-w-0 px-9 py-2
                                    border border-gray-400 rounded-md
                                    bg-white text-gray-900
                                    focus:outline-none focus:ring-2
                                    focus:ring-yellow-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full sm:w-auto shrink-0
                                px-4 py-2 bg-yellow-300
                                text-gray-800 font-semibold
                                border border-gray-400 rounded-md
                                shadow hover:bg-yellow-400
                                cursor-pointer transition-colors"
                        >
                            Add Ingredient
                        </button>
                    </div>
                </form>

                {/* Ingredients List */}
                {ingredientList.length > 0 && (
                    <div className="mt-5 px-2">
                        <h4 className="font-semibold text-gray-800 mb-2">
                            Ingredients on hand:
                        </h4>

                        <ul className="list-disc ml-5 space-y-1">
                            {ingredientList.map((item, index) => (
                                <li
                                    key={`${item}-${index}`}
                                    className="capitalize text-gray-800 font-medium
                                        break-words"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Get Recipe Banner */}
                {ingredientList.length > 2 && (
                    <div className="mt-8 sm:mt-12 w-full
                        bg-yellow-100 border border-yellow-300
                        rounded-lg p-5 sm:p-6
                        flex flex-col sm:flex-row
                        items-center justify-between gap-5">

                        <div className="flex flex-col gap-1
                            text-gray-700 font-semibold
                            text-center sm:text-left">
                            <p>Ready for recipe?</p>
                            <p>Let's figure it out.</p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setCurrentPage("meal_plans")}
                            className="w-full sm:w-auto px-5 py-2
                                text-gray-800 font-bold
                                border border-gray-400 rounded-md
                                bg-yellow-300 hover:bg-yellow-400
                                shadow cursor-pointer transition-colors"
                        >
                            Get recipe
                        </button>
                    </div>
                )}
            </div>

            {/* Right Panel */}
            <div className="flex-1 min-w-0 mt-2 lg:mt-0
                h-[260px] sm:h-[380px] lg:h-[450px]
                rounded-md rounded-tl-[50px] sm:rounded-tl-[60px]
                overflow-hidden shadow-xl">

                <div className="relative w-full h-full">
                    <img
                        src={InputPic}
                        alt="Meal preparation"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-4
                        left-2 right-2 sm:left-4 sm:right-4
                        mx-auto w-fit max-w-full
                        bg-yellow-200 px-3 sm:px-4 py-2
                        rounded-md shadow text-center">

                        <h3 className="font-semibold text-sm sm:text-base
                            text-gray-800">
                            Full day meal preparation
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
