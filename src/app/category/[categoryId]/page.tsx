"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import menudatas from '../../../datas/menu.json';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
  const { categoryId } = useParams() as { categoryId: string };
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    if (categoryId) {
      console.log("Category ID from URL:", categoryId);

      const categoryData = menudatas.fastFoodCategories.find(
        (cat: Category) => cat.id === parseInt(categoryId)
      );

      console.log("Category data:", categoryData);
      setCategory(categoryData || null);
    }
  }, [categoryId]);

  if (!category) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{category.category}</h1>
      <div className="grid grid-cols-2 gap-4">
        {category.items.map((item) => (
          <Card key={item.name} className="bg-[#FFF] text-black w-80 m-auto border-[2px] border-transparent md:m-[20px] hover:border-[#97D4D4] hover:border-[2px] transition-colors duration-200">
            <CardHeader className="p-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-sm"
              />
            </CardHeader>
            <CardContent className="my-4">
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>Price: ${item.price}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
