import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from "./components";

const { 
  Header, 
  HeroSection, 
  BorrowingInterface, 
  DataTables, 
  MiniPawUSDC, 
  BottomContent 
} = Components;

const Home = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header isWalletConnected={isWalletConnected} setIsWalletConnected={setIsWalletConnected} />
      <HeroSection />
      <div className="relative px-4 py-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <BorrowingInterface isWalletConnected={isWalletConnected} />
            <DataTables />
          </div>
          <div className="lg:w-80">
            <MiniPawUSDC />
          </div>
        </div>
        <BottomContent />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;