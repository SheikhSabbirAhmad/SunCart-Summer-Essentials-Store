import { Button } from "@heroui/react";
import Link from "next/link";

const Category = async () => {

  const res = await fetch(
    "https://sun-cart-summer-essentials-store-xi.vercel.app/category.json",
    { cache: "no-store" }
  );

  const categories = await res.json();

  return (
    <div className="flex flex-wrap gap-3 mb-6">

      <Link href="/products">
        <Button variant="outline" size="sm">
          All
        </Button>
      </Link>

      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/products?category=${category.slug}`}
        >
          <Button variant="outline" size="sm">
            {category.name}
          </Button>
        </Link>
      ))}

    </div>
  );
};

export default Category;