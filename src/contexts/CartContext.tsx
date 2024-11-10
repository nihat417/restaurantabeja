"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface MenuItem {
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  selectedItems: MenuItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (itemName: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);

  const addItem = (item: MenuItem) => {
    setSelectedItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);
      if (existingItem) {
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevItems, item];
    });
  };

  const removeItem = (itemName: string) => {
    setSelectedItems((prevItems) => prevItems.filter((i) => i.name !== itemName));
  };

  return (
    <CartContext.Provider value={{ selectedItems, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
};
