"use client";

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import menudatas from '../../../datas/menu.json';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import goBackImg from "../../../assets/images/gobackImage.jpeg";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';

interface MenuItem {
  name: string;
  price: number;
  image: string;
}

interface Category {
  id: number;
  category: string;
  image: string;
  items: MenuItem[];
}

export default function CategoryPage() {
  const router = useRouter();
  const { categoryId } = useParams() as { categoryId: string };
  const [category, setCategory] = useState<Category | null>(null);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const { addItem } = useCart(); // добавляем addItem из useCart

  useEffect(() => {
    if (categoryId) {
      const categoryData = menudatas.fastFoodCategories.find(
        (cat: Category) => cat.id === parseInt(categoryId)
      );
      setCategory(categoryData || null);

      if (categoryData) {
        const initialQuantities = categoryData.items.reduce(
          (acc, item) => ({ ...acc, [item.name]: 1 }),
          {}
        );
        setQuantities(initialQuantities);
      }
    }
  }, [categoryId]);

  const increment = (itemName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: prevQuantities[itemName] + 1,
    }));
  };

  const decrement = (itemName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: Math.max(prevQuantities[itemName] - 1, 1),
    }));
  };

  const toggleSelectItem = (item: MenuItem) => {
    addItem({ ...item, quantity: quantities[item.name] }); 
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(item.name)
        ? prevSelectedItems.filter((selectedItem) => selectedItem !== item.name)
        : [...prevSelectedItems, item.name]
    );
  };

  if (!category) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 p-10">
      <Card
        className="bg-[#FFF] text-black w-80 m-auto border-[2px] border-transparent md:m-[20px] hover:border-[#97D4D4] hover:border-[2px] transition-colors duration-200 cursor-pointer"
        onClick={() => router.back()}
      >
        <CardHeader className="p-0">
          <Image src={goBackImg} alt="Go Back" className="w-full h-48 object-cover rounded-sm" />
        </CardHeader>
        <CardContent className="my-4">
          <CardTitle>Go Back</CardTitle>
        </CardContent>
      </Card>

      {category.items.map((item) => (
        <Card key={item.name} className={`bg-[#FFF] text-black w-80 m-auto border-[2px] 
            ${selectedItems.includes(item.name) ? 'border-[#97D4D4] border-[4px]' : 'border-transparent'}
            md:m-[20px] hover:border-[#97D4D4] hover:border-[2px] transition-colors duration-200 cursor-pointer`}
            onClick={() => toggleSelectItem(item)}>
          <CardHeader className="p-0">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-sm"/>
          </CardHeader>
          <CardContent className="my-4">
            <CardTitle>{item.name}</CardTitle>
            <div className="flex flex-row justify-between">
              <div className="flex items-center mt-4 space-x-2">
                <CardDescription>Price:</CardDescription>
                <motion.div className="text-lg font-semibold"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}>
                  ${item.price}
                </motion.div>
              </div>
              <div className="flex items-center mt-2 space-x-3">
                <button onClick={(e) => decrement(item.name, e)} 
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition">
                  -
                </button>
                <motion.span key={quantities[item.name]}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg font-semibold">
                  {quantities[item.name]}
                </motion.span>
                <button onClick={(e) => increment(item.name, e)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition">
                  +
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
