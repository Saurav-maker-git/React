
export default function About() {
    const technologies = [
        {
            title: "React & Vite",
            description: "Component-based architecture, fast development and reactive UI updates."
        },
        {
            title: "Tailwind CSS",
            description: "Utility-first responsive styling for mobile, tablet and desktop."
        },
        {
            title: "Groq API Integration",
            description: "High-speed AI inference for recipe generation and customized meal suggestions."
        },
        {
            title: "Custom Scroll & State Handling",
            description: "React state, lifecycle handling and smooth scrolling for a better cooking experience."
        }
    ];

    return (
        <section className="w-full max-w-4xl mx-auto
            px-4 sm:px-6 py-8 sm:py-10 text-gray-800">

            {/* Hero */}
            <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl
                    font-extrabold text-gray-900 mb-4">
                    About Recipe Finder
                </h1>

                <p className="text-base sm:text-lg text-gray-600
                    max-w-2xl mx-auto leading-relaxed">
                    Welcome to Recipe Finder — a modern,
                    AI-powered culinary companion designed
                    to make home cooking effortless and intuitive.
                </p>
            </div>

            {/* Mission */}
            <div className="bg-white border border-gray-200
                rounded-2xl p-5 sm:p-8 shadow-sm mb-8">

                <p className="text-base sm:text-lg
                    text-gray-700 leading-relaxed">
                    Whether you're looking for quick meal ideas
                    using ingredients already in your fridge
                    or searching for structured step-by-step recipes,
                    Recipe Finder transforms your ingredients
                    into easy-to-follow cooking guides.
                </p>
            </div>

            {/* How It Works */}
            <div className="bg-yellow-50 border border-yellow-200
                rounded-2xl p-5 sm:p-8 shadow-sm mb-8">

                <h2 className="text-xl sm:text-2xl
                    font-bold text-gray-900 mb-4">
                    🍳 How It Works
                </h2>

                <p className="text-gray-700 leading-relaxed mb-5">
                    Enter the ingredients you have available
                    and let AI generate a recipe tailored
                    to your ingredients.
                </p>

                <div className="bg-white border border-yellow-100
                    rounded-xl p-4 shadow-sm">

                    <p className="text-gray-800 font-semibold text-sm sm:text-base">
                        ✨ Tip: Entering three or more ingredients
                        gives the AI more possibilities for creating
                        interesting recipes.
                    </p>
                </div>
            </div>

            {/* Technologies */}
            <div className="bg-gray-50 border border-gray-100
                rounded-2xl p-5 sm:p-8">

                <h2 className="text-xl sm:text-2xl
                    font-bold text-gray-900 mb-5">
                    Built With Modern Web Tech
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed">
                    This application focuses on speed,
                    responsive design and a smooth user
                    experience across mobile and desktop.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {technologies.map((tech) => (
                        <div
                            key={tech.title}
                            className="bg-white border border-gray-200
                                p-4 rounded-xl shadow-sm"
                        >
                            <h3 className="font-bold text-gray-900
                                text-lg mb-2">
                                {tech.title}
                            </h3>

                            <p className="text-sm text-gray-600 leading-relaxed">
                                {tech.description}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
