import React from "react";

const OurProcessScreen = () => {
  return (
    <div className="min-h-screen  text-[#448557] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-10 ">Our Process</h1>

        {/* Introduction */}
        <div className="bg-gray-300 p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-black leading-relaxed">
            Our Crypto Tracker is a modern web application built to deliver
            real-time cryptocurrency market data to users in a fast, responsive,
            and user-friendly interface. Using public APIs, we ensure up-to-date
            information without requiring users to authenticate or manage keys.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Step 1 */}
          <div className="bg-gray-300 p-5 rounded-xl hover:shadow-[#448557] hover:scale-[1.02] transition-all duration-300 shadow-md">
            <h3 className="text-xl font-bold text-[#448557] mb-2">
              Step 1: User Interface
            </h3>
            <p className="text-black">
              The app is built using React and styled with Tailwind CSS. Users
              land on a clean homepage with a banner and live crypto data. Hover
              effects and transitions enhance the interactivity.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-300 p-5 rounded-xl hover:shadow-[#448557] hover:scale-[1.02] transition-all duration-300 shadow-md">
            <h3 className="text-xl font-bold text-[#448557] mb-2">
              Step 2: API Integration
            </h3>
            <p className="text-black">
              We use the free CoinGecko public API to fetch live cryptocurrency
              data including prices, market cap, and price change percentage—all
              without needing an API key.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-300 p-5 rounded-xl hover:shadow-[#448557] hover:scale-[1.02] transition-all duration-300 shadow-md">
            <h3 className="text-xl font-bold text-[#448557] mb-2">
              Step 3: Data Display
            </h3>
            <p className="text-black">
              The fetched data is displayed in well-designed cards with
              animations on hover, showing relevant details like name, price,
              symbol, and percentage change.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-gray-300 p-5 rounded-xl hover:shadow-[#448557] hover:scale-[1.02] transition-all duration-300 shadow-md">
            <h3 className="text-xl font-bold text-[#448557] mb-2">
              Step 4: Future Enhancements
            </h3>
            <p className="text-black">
              Plans include adding coin search functionality, sorting options,
              historical charts, and portfolio tracking, making the app more
              powerful and useful for users.
            </p>
          </div>
        </div>

        {/* Outro */}
        <div className="text-center mt-12">
          <p className="text-gray-400 italic">
            "Built for students and crypto enthusiasts to learn, track, and grow
            in the world of digital finance."
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurProcessScreen;
