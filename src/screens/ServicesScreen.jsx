import React, { useState } from "react";

const ServicesScreen = () => {
  const [query, setQuery] = useState("");
  const [coinData, setCoinData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setCoinData(null);

    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${query.toLowerCase()}&order=market_cap_desc&per_page=1&page=1&sparkline=false`
      );
      const data = await res.json();

      if (data.length > 0) {
        setCoinData(data[0]);
      } else {
        setError("No data found for this coin.");
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-[#448557] mb-6">
          Search Cryptocurrency Details
        </h1>

        {/* Search Bar */}
        <div className="flex items-center gap-2 mb-8">
          <input
            type="text"
            placeholder="Enter coin name (e.g. bitcoin, ethereum)"
            className="w-full px-4 py-2 rounded-md text-black focus:outline-none border border-green-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="bg-[#448557] px-4 py-2 rounded-md hover:bg-[#448557] transition">
            Search
          </button>
        </div>

        {/* Result Display */}
        {loading && <p className="text-center text-gray-400">Loading...</p>}
        {error && <p className="text-center text-red-400">{error}</p>}

        {coinData && (
          <div className="bg-gray-300 p-6 rounded-xl shadow-md hover:shadow-[#448557] transition-all duration-300">
            <div className="flex items-center mb-4">
              <img
                src={coinData.image}
                alt={coinData.name}
                className="w-12 h-12 mr-4"
              />
              <div>
                <h2 className="text-2xl font-bold text-[#448557]">
                  {coinData.name}
                </h2>
                <p className="text-sm text-gray-400 uppercase">
                  {coinData.symbol}
                </p>
              </div>
            </div>
            <p className="mb-2">
              <span className="text-gray-400">Current Price:</span>{" "}
              <span className="font-semibold">
                ${coinData.current_price.toLocaleString()}
              </span>
            </p>
            <p className="mb-2">
              <span className="text-gray-400">Market Cap:</span> $
              {coinData.market_cap.toLocaleString()}
            </p>
            <p className="mb-2">
              <span className="text-gray-400">Price Change (24h):</span>{" "}
              <span
                className={`font-semibold ${
                  coinData.price_change_percentage_24h >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}>
                {coinData.price_change_percentage_24h.toFixed(2)}%
              </span>
            </p>
            <p>
              <span className="text-gray-400">Total Volume:</span> $
              {coinData.total_volume.toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesScreen;
