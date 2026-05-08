import Image from "next/image";
import Link from "next/link";
import { Card, Button, Chip } from "@heroui/react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  if (!product) return null;

  // 🔥 SAFE IMAGE LOGIC (MAIN FIX)
  const imageSrc =
    typeof product.image === "string" && product.image.trim() !== ""
      ? product.image
      : "/placeholder.png";

  return (
    <Card className="border rounded-xl p-3">

      {/* IMAGE */}
      <div className="relative w-full aspect-square bg-gray-100 rounded-xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={product.name || "Product"}
          fill
          className="object-cover"
        />
         <Chip size="sm" className="absolute right-2 top-2">{product.category}</Chip>
      </div>

      {/* INFO */}
      <div className="mt-2">
        <h2 className="font-medium">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.brand}</p>
      </div>

      {/* PRICE + RATING */}
      <div className="flex justify-between items-center mt-2">
        <p className="font-semibold">${product.price}</p>

        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-500" />
          <span>{product.rating}</span>
        </div>
      </div>

      {/* CATEGORY */}
      <p className="text-xs text-gray-500 mt-1">
        {product.category}
      </p>

      {/* BUTTON */}
      <Link href={`/products/${product.id}`}>
        <Button className="w-full mt-3">View Details</Button>
      </Link>
    </Card>
  );
};

export default ProductCard;