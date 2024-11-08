"use client";
import React, { useState, useEffect } from 'react';

export default function NavBar() { 
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setDate(now.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' }));
    };

    const intervalId = setInterval(updateTime, 1000 * 60);
    
    updateTime();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="flex flex-wrap justify-center p-[10px]">
      <h4 className="text-white">Serhat Ercan</h4>
      <h4 className="text-[#B3A6A2] ml-[10px]">{date}</h4>
      <h4 className="text-[#B3A6A2] ml-[10px]">{time}</h4>
    </header>
  );
}
