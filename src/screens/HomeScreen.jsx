import React, { useEffect, useState } from "react";

const HomeScreen = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setCryptoData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch data", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8">
      {/* Banner Section */}
      <div className="bg-gradient-to-r bg-[#448557] to-indigo-700 p-6 rounded-xl shadow-lg mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Crypto Tracker</h1>
        <p className="text-lg text-gray-200">
          Track real-time cryptocurrency prices and trends directly from our
          platform. Stay updated with the latest market changes.
        </p>
      </div>

      {/* Crypto Market Section */}
      <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
        Latest Trending Cryptocurrencies
      </h2>

      {loading ? (
        <div className="text-center text-gray-400">Loading data...</div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cryptoData.map((coin) => (
            <div
              key={coin.id}
              className="bg-gray-800 p-5 rounded-xl hover:scale-105 transform transition duration-300 shadow-md hover:shadow-purple-600">
              <div className="flex items-center mb-4">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-10 h-10 mr-3"
                />
                <div>
                  <h3 className="text-xl font-bold">{coin.name}</h3>
                  <p className="text-sm text-gray-400">
                    {coin.symbol.toUpperCase()}
                  </p>
                </div>
              </div>
              <p>
                <span className="text-gray-400">Price:</span>{" "}
                <span className="font-semibold">
                  ${coin.current_price.toLocaleString()}
                </span>
              </p>
              <p>
                <span className="text-gray-400">Market Cap:</span> $
                {coin.market_cap.toLocaleString()}
              </p>
              <p
                className={`mt-2 font-medium ${
                  coin.price_change_percentage_24h >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}>
                {coin.price_change_percentage_24h.toFixed(2)}% (24h)
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
