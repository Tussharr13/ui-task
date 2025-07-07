import React, { useState } from "react";

// Header Component
const Header = ({ isWalletConnected, setIsWalletConnected }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: "pawUSDC", href: "#", logo: true },
    { name: "Vaults", href: "#", badge: "New" },
    { name: "Meow Pools", href: "#", badge: "New" },
    { name: "Aggregator", href: "#" },
    { name: "More", href: "#", dropdown: true }
  ];

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    item.logo 
                      ? "text-yellow-400 hover:text-yellow-300" 
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => item.dropdown && setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                >
                  {item.logo && (
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-black text-xs font-bold">🐾</span>
                    </div>
                  )}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {item.dropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg border border-gray-700">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Portfolio</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">History</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Settings</a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">👤</span>
              </div>
              <span className="text-gray-300">Monad</span>
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <button
              onClick={() => setIsWalletConnected(!isWalletConnected)}
              className="bg-yellow-400 text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-300 transition-colors"
            >
              {isWalletConnected ? "Disconnect" : "Connect Wallet"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1748609700323-483a007ed311"
          alt="DeFi Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1660895897206-54f92c632506"
            alt="Cat mascot"
            className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Unified Borrowing
        </h1>
        <div className="flex items-center justify-center space-x-2 text-gray-300">
          <span>Powered by</span>
          <div className="bg-yellow-400 text-black px-3 py-1 rounded-full flex items-center space-x-1">
            <span className="text-sm">🐾</span>
            <span className="font-semibold">pawUSDC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Borrowing Interface Component
const BorrowingInterface = ({ isWalletConnected }) => {
  const [activeTab, setActiveTab] = useState("borrow");
  const [activeCollateral, setActiveCollateral] = useState("liquidNFT");
  const [riskLevel, setRiskLevel] = useState("low");
  const [borrowAmount, setBorrowAmount] = useState("51.24");
  const [collateralAmount, setCollateralAmount] = useState("49.13");

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-8">
      <div className="mb-6">
        <div className="flex space-x-1 bg-gray-700 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("borrow")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === "borrow" 
                ? "bg-white text-black" 
                : "text-gray-300 hover:text-white"
            }`}
          >
            Borrow
          </button>
          <button
            onClick={() => setActiveTab("repay")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === "repay" 
                ? "bg-white text-black" 
                : "text-gray-300 hover:text-white"
            }`}
          >
            Repay
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-gray-300">Collateral</span>
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveCollateral("liquidNFT")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                activeCollateral === "liquidNFT"
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              Liquid NFT
            </button>
            <button
              onClick={() => setActiveCollateral("lpToken")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                activeCollateral === "lpToken"
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              LP Token
            </button>
          </div>
        </div>

        <div className="bg-gray-700 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">♦</span>
              </div>
              <span className="text-white font-medium">wMON</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <input
              type="text"
              value={collateralAmount}
              onChange={(e) => setCollateralAmount(e.target.value)}
              className="bg-transparent text-right text-white text-lg font-medium outline-none w-20"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <span>Collateral Value: $717.21</span>
            <span>Balance: 54.321 Max</span>
          </div>
        </div>

        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">$</span>
              </div>
              <span className="text-white font-medium">USDC</span>
            </div>
            <input
              type="text"
              value={borrowAmount}
              onChange={(e) => setBorrowAmount(e.target.value)}
              className="bg-white text-black text-lg font-medium outline-none w-20 px-2 py-1 rounded"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-400 mb-4">
            <span>Max LTV: 70%</span>
            <span>LTV: 57.192%</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Borrowing Interest: </span>
              <span className="text-yellow-400">12.31%</span>
            </div>
            <div>
              <span className="text-gray-400">Relative APY: </span>
              <span className="text-yellow-400">+12.23%</span>
            </div>
            <div>
              <span className="text-gray-400">Position Health: </span>
              <span className="text-green-400">1.234</span>
            </div>
            <div>
              <span className="text-gray-400">Liquidation Price: </span>
              <span className="text-red-400">$12.31</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-gray-300">Risk Meter:</span>
          <div className="flex space-x-2">
            {["low", "medium", "high"].map((level) => (
              <button
                key={level}
                onClick={() => setRiskLevel(level)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  riskLevel === level
                    ? level === "low"
                      ? "bg-green-500 text-white"
                      : level === "medium"
                      ? "bg-yellow-500 text-black"
                      : "bg-red-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        className={`w-full py-3 rounded-lg font-medium transition-colors ${
          isWalletConnected
            ? "bg-yellow-400 text-black hover:bg-yellow-300"
            : "bg-gray-600 text-gray-300 cursor-not-allowed"
        }`}
        disabled={!isWalletConnected}
      >
        {isWalletConnected ? "Borrow" : "Connect Wallet"}
      </button>
    </div>
  );
};

// Data Tables Component
const DataTables = () => {
  const [activeTable, setActiveTable] = useState("borrowingRate");

  const borrowingRates = [
    { asset: "shMON Curvance Liquid NFT", rate: "28.91%" },
    { asset: "shMON Pirnia Liquid NFT", rate: "28.91%" },
    { asset: "MON-USDC (Bean Exchange)", rate: "28.91%" },
    { asset: "gMON-MON Nuru Liquid NFT", rate: "28.91%" },
    { asset: "USDT-USDC (PancakeSwap)", rate: "28.91%" },
    { asset: "MON-USDC (Bean Exchange)", rate: "28.91%" },
    { asset: "MON-USDC (Bean Exchange)", rate: "28.91%" },
    { asset: "shMON-gMON (Bean Exchange)", rate: "28.91%" },
    { asset: "MON-WUSDC (Bean Exchange)", rate: "28.91%" },
    { asset: "USDm-USDC (Bean Exchange)", rate: "28.91%" },
    { asset: "pawUSDC-USDC (Bean Exchange)", rate: "28.91%" }
  ];

  const yourAssets = [
    { asset: "shMON Curvance Liquid NFT", rate: "28.91%" },
    { asset: "shMON Pirnia Liquid NFT", rate: "28.91%" },
    { asset: "MON-USDC (Bean Exchange)", rate: "28.91%" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-white font-medium mb-4">Borrowing Rate</h3>
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300">Choose Prod.</span>
            <select className="bg-gray-700 text-white px-3 py-1 rounded">
              <option>All</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Search by token or protocol"
              className="bg-gray-700 text-white px-3 py-1 rounded text-sm flex-1"
            />
            <button className="bg-gray-700 text-white px-3 py-1 rounded text-sm">
              Filter by Protocol
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-400 border-b border-gray-700 pb-2">
            <span>Asset</span>
            <span>Borrow APR</span>
          </div>
          <div className="max-h-64 overflow-y-auto">
            {borrowingRates.map((item, index) => (
              <div key={index} className="flex justify-between text-sm py-2 hover:bg-gray-700 rounded px-2">
                <span className="text-gray-300">{item.asset}</span>
                <span className="text-white">{item.rate}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-white font-medium mb-4">Your Assets</h3>
        <div className="space-y-2">
          {yourAssets.map((item, index) => (
            <div key={index} className="flex justify-between text-sm py-2 hover:bg-gray-700 rounded px-2">
              <span className="text-gray-300">{item.asset}</span>
              <span className="text-white">{item.rate}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-white font-medium mb-4">Your Borrowing Positions</h3>
        <div className="text-center py-8">
          <div className="text-gray-400 mb-4">
            <span className="text-2xl">💳</span>
          </div>
          <div className="text-white font-medium mb-2">Collateral: shMON Curvance Liquid NFT</div>
          <div className="grid grid-cols-3 gap-2 text-sm mb-4">
            <div>
              <div className="text-gray-400">Collateral Value</div>
              <div className="text-white">$10219.29</div>
            </div>
            <div>
              <div className="text-gray-400">Position Health</div>
              <div className="text-green-400">1.23</div>
            </div>
            <div>
              <div className="text-gray-400">Borrowing</div>
              <div className="text-white">$7219.29</div>
            </div>
          </div>
          <div className="text-sm text-gray-400 mb-4">
            <span className="bg-yellow-400 text-black px-2 py-1 rounded">
              Liquidation Collateral Value: $12.31
            </span>
          </div>
          <div className="text-sm text-gray-400 mb-4">
            Relative APR: + 12.12%
          </div>
          <div className="flex space-x-2">
            <button className="bg-yellow-400 text-black px-3 py-1 rounded text-sm hover:bg-yellow-300">
              Add Collateral
            </button>
            <button className="bg-gray-700 text-white px-3 py-1 rounded text-sm hover:bg-gray-600">
              Repay
            </button>
            <button className="bg-gray-700 text-white px-3 py-1 rounded text-sm hover:bg-gray-600">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// MiniPawUSDC Component
const MiniPawUSDC = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-white font-medium">Mini</span>
        <div className="flex items-center space-x-1">
          <span className="text-yellow-400">🐾</span>
          <span className="text-white font-medium">pawUSDC</span>
        </div>
        <img
          src="https://images.unsplash.com/photo-1644938806702-a5ef05451354"
          alt="Cat mascot"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
      <div className="text-sm text-gray-400">
        <p>Quick access to your pawUSDC positions and stats.</p>
      </div>
    </div>
  );
};

// Bottom Content Component
const BottomContent = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      question: "The expense windows adapted sir. Wrong widen drawn.",
      answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her."
    },
    {
      question: "Six curiosity day assurance bed necessary?",
      answer: "Detailed explanation about curiosity and assurance in DeFi protocols."
    },
    {
      question: "Produce say the ten moments parties?",
      answer: "Information about the ten moments and parties in the protocol."
    },
    {
      question: "Simple innate summer fat appear basket his desire joy.",
      answer: "Explanation about the simple innate summer features."
    },
    {
      question: "Outward clothes promise at gravity do excited?",
      answer: "Details about outward clothes and gravity features."
    }
  ];

  return (
    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-yellow-50 rounded-lg p-4">
            <button
              onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
              className="w-full text-left flex items-center justify-between text-black"
            >
              <span className="font-medium">{faq.question}</span>
              <span className="text-2xl">
                {expandedFAQ === index ? '−' : '+'}
              </span>
            </button>
            {expandedFAQ === index && (
              <div className="mt-2 text-gray-600 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 rounded-lg p-6">
        <div className="mb-4">
          <img
            src="https://images.unsplash.com/photo-1654183621855-8fd86fd79d6f"
            alt="NFT Collection"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        </div>
        <h3 className="text-black font-bold text-lg mb-2">
          We turn locked assets into liquid NFTs, unlocking multi-layered yield through Bribe Mechanisms.
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Still curious, kitty?
        </p>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors">
          Join our Discord and let's chat!
        </button>
      </div>
    </div>
  );
};

const Components = {
  Header,
  HeroSection,
  BorrowingInterface,
  DataTables,
  MiniPawUSDC,
  BottomContent
};

export default Components;