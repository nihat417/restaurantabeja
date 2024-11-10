"use client";

import React, { useRef } from 'react';
import { FaArrowAltCircleUp,FaArrowCircleDown  } from "react-icons/fa";

interface ScrollableContainerProps {
  children: React.ReactNode;
}

const ScrollableContainer: React.FC<ScrollableContainerProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollUp = () => {
    if (scrollRef.current) 
      scrollRef.current.scrollBy({ top: -50, behavior: 'smooth' });
  };

  const scrollDown = () => {
    if (scrollRef.current) {
      console.log("Scrolling down");

      const scrollHeight = scrollRef.current.scrollHeight;
      const clientHeight = scrollRef.current.clientHeight;

      if (scrollHeight > clientHeight) 
        scrollRef.current.scrollBy({ top: 50, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden flex-1 h-screen">
      <div 
        ref={scrollRef}
        className="overflow-y-auto h-[calc(100vh-40px)] p-[20px] scrollbar-hidden"
        style={{ paddingRight: '20px' }}>
        {children}
      </div>
      <div className="fixed bottom-2 right-2 mb-[50px] flex flex-row">
        <button onClick={scrollUp} className='p-[10px]'>
          <FaArrowAltCircleUp className="text-white text-2xl"/>
        </button>
        <button onClick={scrollDown} className='p-[10px]'>
          <FaArrowCircleDown className="text-white text-2xl"/>  
        </button>
      </div>
    </div>
  );
};

export default ScrollableContainer;
