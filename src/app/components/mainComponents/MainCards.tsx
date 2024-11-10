"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
import menudatas from '../../../datas/menu.json';

export default function MainCards () {
  const router = useRouter();

  const handleCategoryClick = (categoryId: number) => {
    router.push(`/category/${categoryId}`);
  };

  return (
    <>
      {menudatas.fastFoodCategories.map((category) => (
        <Card key={category.id}
          className="bg-[#FFF] text-black w-80 m-auto border-[2px] border-transparent md:m-[20px] hover:border-[#97D4D4] hover:border-[2px] transition-colors duration-200"
          onClick={() => handleCategoryClick(category.id)}>
          <CardHeader className="p-0">
            <img src={category.image}
              alt={category.category}
              className="w-full h-48 object-cover rounded-sm"/>
          </CardHeader>
          <CardContent className="my-4">
            <CardTitle>{category.category}</CardTitle>
            <CardDescription>Explore our {category.category} options</CardDescription>
          </CardContent>
        </Card>
      ))}
    </>
  )
}