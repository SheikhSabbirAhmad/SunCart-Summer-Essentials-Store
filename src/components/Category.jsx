"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Category = () => {

  const searchParams = useSearchParams();
  const pathname = usePathname(); // trigger rerender on route change
  const activeCategory = searchParams.get("category");

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch(
        "https://sun-cart-summer-essentials-store-xi.vercel.app/category.json"
      );
      const data = await res.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-wrap gap-3 mb-6">

      {/* All button */}
      <Link href="/products">
        <Button
          size="sm"
          className={`transition-all duration-300 px-4 py-2 ${
            !activeCategory
              ? "bg-black text-white scale-105"
              : "bg-white text-black border hover:bg-gray-100"
          }`}
        >
          All
        </Button>
      </Link>

      {categories.map((category) => {

        const isActive = activeCategory === category.slug;

        return (
          <Link
            key={category.id}
            href={`/products?category=${category.slug}`}
          >
            <Button
              size="sm"
              className={`transition-all duration-300 px-4 py-2 ${
                isActive
                  ? "bg-black text-white scale-105"
                  : "bg-white text-black border hover:bg-gray-100"
              }`}
            >
              {category.name}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default Category;