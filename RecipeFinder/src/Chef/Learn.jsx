import React from 'react';

export default function Learn() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      {/* Hero Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Learn &amp; Guide
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Discover how to get the most out of your AI-powered culinary companion and understand the technology driving it.
        </p>
      </div>

      {/* How the AI Works */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How the AI Recipe Generator Works
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Recipe Finder connects directly to the <strong className="text-gray-900">Groq API</strong>, leveraging lightning-fast language model inference to build custom recipes in real-time. When you input your available ingredients or preferences, the app structures your request into a precise prompt so the AI returns a clean, structured cooking guide with ingredients, steps, and prep times.
        </p>
      </div>

      {/* Pro-Tips Grid */}
      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Tips for Getting Better AI Recipes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-xs">
            <h3 className="font-bold text-gray-900 text-base mb-1">Be Specific</h3>
            <p className="text-sm text-gray-600">
              List the exact ingredients you want to use up (e.g., &quot;chicken breast, spinach, garlic&quot;) for more accurate culinary matches.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-xs">
            <h3 className="font-bold text-gray-900 text-base mb-1">Mention Dietary Needs</h3>
            <p className="text-sm text-gray-600">
              Include constraints like &quot;high protein&quot;, &quot;low carb&quot;, or &quot;dairy-free&quot; to guide the AI&apos;s nutritional balancing.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-xs">
            <h3 className="font-bold text-gray-900 text-base mb-1">Set the Time Limit</h3>
            <p className="text-sm text-gray-600">
              Specify constraints like &quot;15-minute quick meal&quot; or &quot;slow-cooker weekend dinner&quot; to adjust complexity.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Architecture */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Frontend Architecture &amp; State
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Built as a single-page React application powered by Vite, this tool handles active recipe sessions, custom scroll behaviors, and localized data persistence entirely on the client side. This ensures instant page transitions and an uninterrupted cooking experience right from your browser.
        </p>
      </div>
    </div>
  );
}