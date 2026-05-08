import Image from "next/image";
import Link from "next/link";
import { Card, Button, Chip } from "@heroui/react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const imageSrc =
    typeof product.image === "string" && product.image.trim() !== ""
      ? product.image
      : "/placeholder.png";

  return (
    <Card className="group border rounded-xl p-3 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">

      {/* IMAGE */}
      <div className="relative w-full aspect-square bg-gray-100 rounded-xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={product.name || "Product"}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />

        {/* overlay glow */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />

        <Chip
          size="sm"
          className="absolute right-2 top-2 transition-all duration-300 group-hover:scale-105"
        >
          {product.category}
        </Chip>
      </div>

      {/* INFO */}
      <div className="mt-2">
        <h2 className="font-bold text-2xl transition-colors duration-300 group-hover:text-emerald-600">
          {product.name}
        </h2>
        <p className="text-sm text-gray-500">{product.brand}</p>
      </div>

      {/* PRICE + RATING */}
      <div className="flex justify-between items-center mt-2">
        <p className="font-semibold transition-colors duration-300 group-hover:text-emerald-600">${product.price}</p>

        <div className="flex items-center gap-1 transition-transform duration-300 group-hover:scale-105">
          <FaStar className="text-yellow-500" />
          <span className="transition-colors duration-300 group-hover:text-emerald-600">{product.rating}</span>
        </div>
      </div>

      {/* CATEGORY */}
      <p className="text-xs text-gray-500 mt-1">
        {product.category}
      </p>

      {/* BUTTON */}
      <Link href={`/products/${product.id}`}>
        <Button className="w-full mt-3 transition-all duration-300 hover:scale-105 hover:shadow-md">
          View Details
        </Button>
      </Link>
    </Card>
  );
};

export default ProductCard;