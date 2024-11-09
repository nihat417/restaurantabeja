"use client";

import { useState, useEffect } from "react";
import MainMenuBar from "../mainMenubar/MainMenuBar";

export default function BasketSidebar({ children }: { children: React.ReactNode }) {
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  useEffect(() => {
    if (isBasketOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isBasketOpen]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full z-20 bg-[#1A1A1A] text-white transition-all duration-300 transform ${
          isBasketOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } ${isBasketOpen ? "lg:w-[35%] w-full" : "w-0"}`}>
        <div className="p-4">
          <p className="text-white">salamm</p>
        </div>
      </div>

      <div className={`transition-all duration-300 ${isBasketOpen ? "ml-[35%]" : "ml-0"} flex-grow`}>
        {children}
      </div>

      <MainMenuBar onBasketClick={toggleBasket} />
    </>
  );
}
