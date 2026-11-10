
export default function Learn() {
    const tips = [
        {
            title: "Be Specific",
            description: 'List exact ingredients (e.g. "chicken breast, spinach, garlic") for more accurate recipe suggestions.'
        },
        {
            title: "Mention Dietary Needs",
            description: 'Include preferences such as "high protein", "low carb" or "dairy-free" in your ingredients.'
        },
        {
            title: "Set a Time Limit",
            description: 'Mention constraints like "15-minute quick meal" to guide the recipe complexity.'
        }
    ];

    return (
        <section className="w-full max-w-4xl mx-auto
            px-4 sm:px-6 py-8 sm:py-10 text-gray-800">

            {/* Hero */}
            <div className="text-center mb-8 sm:mb-12">

                <h1 className="text-3xl sm:text-4xl
                    font-extrabold text-gray-900 mb-3">
                    Learn &amp; Guide
                </h1>

                <p className="text-base sm:text-lg text-gray-600
                    max-w-2xl mx-auto leading-relaxed">
                    Discover how to get the most out of your
                    AI-powered culinary companion and understand
                    the technology driving it.
                </p>
            </div>

            {/* AI Explanation */}
            <div className="bg-white border border-gray-200
                rounded-2xl p-5 sm:p-8 shadow-sm mb-6 sm:mb-8">

                <h2 className="text-xl sm:text-2xl
                    font-bold text-gray-900 mb-4">
                    How the AI Recipe Generator Works
                </h2>

                <p className="text-sm sm:text-base
                    text-gray-700 leading-relaxed">
                    Recipe Finder connects to the{" "}
                    <strong className="text-gray-900">Groq API</strong>,
                    using a language model to generate custom recipes.
                    When you enter your ingredients, the application
                    structures your request into a prompt and sends
                    it to the AI, which returns a cooking guide
                    containing ingredients and preparation steps.
                </p>
            </div>

            {/* Tips */}
            <div className="bg-gray-50 border border-gray-100
                rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8">

                <h2 className="text-xl sm:text-2xl
                    font-bold text-gray-900 mb-5">
                    Tips for Getting Better AI Recipes
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2
                    md:grid-cols-3 gap-4">

                    {tips.map((tip) => (
                        <div
                            key={tip.title}
                            className="bg-white border border-gray-200
                                p-4 rounded-xl shadow-sm"
                        >
                            <h3 className="font-bold text-gray-900
                                text-base mb-2">
                                {tip.title}
                            </h3>

                            <p className="text-sm text-gray-600 leading-relaxed">
                                {tip.description}
                            </p>
                        </div>
                    ))}

                </div>
            </div>

            {/* Architecture */}
            <div className="bg-white border border-gray-200
                rounded-2xl p-5 sm:p-8 shadow-sm">

                <h2 className="text-xl sm:text-2xl
                    font-bold text-gray-900 mb-4">
                    Frontend Architecture &amp; State
                </h2>

                <p className="text-sm sm:text-base
                    text-gray-700 leading-relaxed">
                    Built as a single-page React application
                    powered by Vite, this application handles
                    navigation, ingredient management, recipe
                    sessions and custom scroll behavior using
                    React state and hooks.
                </p>
            </div>

        </section>
    );
}
