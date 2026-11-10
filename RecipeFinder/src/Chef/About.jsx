import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      {/* Hero Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          About Recipe Finder
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Welcome to Recipe Finder—a modern, AI-powered culinary companion designed 
          to make home cooking effortless and intuitive.
        </p>
      </div>

      {/* Main Mission Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm mb-8">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Whether you're looking for quick meal ideas using ingredients already in your fridge 
          or searching for structured step-by-step recipes, Recipe Finder transforms raw culinary 
          inputs into formatted, easy-to-follow cooking guides.
        </p>
      </div>

      {/* How It Works Section */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 md:p-8 shadow-sm mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          🍳 How It Works
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Simplicity is at the heart of the app. Just type in the ingredients you have available, 
          and the AI instantly generates custom, tailored recipes for you:
        </p>
        <div className="bg-white border border-yellow-100 rounded-xl p-4 shadow-xs">
          <p className="text-gray-800 font-semibold flex items-center gap-2 text-base">
            <span className="text-yellow-600 text-xl font-bold">✨ Tip:</span> 
            Entering multiple ingredients (ideally 3 or more) gives the AI more flavor combinations to craft delicious, detailed recipes!
          </p>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Built With Modern Web Tech
        </h2>
        
        <p className="text-gray-600 mb-6">
          This application was engineered from the ground up prioritizing speed, 
          responsive design, and a smooth user experience across mobile and desktop:
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="bg-white border border-gray-200 p-4 rounded-xl shadow-xs">
            <h3 className="font-bold text-gray-900 text-lg mb-1">React &amp; Vite</h3>
            <p className="text-sm text-gray-600">
              Fast client-side routing, modular component architecture, and instant UI state updates.
            </p>
          </li>

          <li className="bg-white border border-gray-200 p-4 rounded-xl shadow-xs">
            <h3 className="font-bold text-gray-900 text-lg mb-1">Tailwind CSS</h3>
            <p className="text-sm text-gray-600">
              Utility-first, responsive styling ensuring a seamless experience across mobile and desktop.
            </p>
          </li>

          <li className="bg-white border border-gray-200 p-4 rounded-xl shadow-xs">
            <h3 className="font-bold text-gray-900 text-lg mb-1">Groq API Integration</h3>
            <p className="text-sm text-gray-600">
              Powered by high-speed AI inference for instantaneous recipe generation and customized meal suggestions.
            </p>
          </li>

          <li className="bg-white border border-gray-200 p-4 rounded-xl shadow-xs">
            <h3 className="font-bold text-gray-900 text-lg mb-1">Custom Scroll &amp; State Handling</h3>
            <p className="text-sm text-gray-600">
              Engineered with clean lifecycle handling and local persistence to keep your cooking session uninterrupted.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}