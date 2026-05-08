import Image from "next/image";
import Link from "next/link";

const ProductDetailsPage = async ({ params }) => {

  const { id } = await params;

  const res = await fetch(
    "https://sun-cart-summer-essentials-store-xi.vercel.app/data.json",
    { cache: "no-store" }
  );

  const products = await res.json();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-center mt-10 text-xl">Product not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Image */}
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={400}
          className="w-full rounded-xl"
        />

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-gray-500 mt-2">{product.brand}</p>

          <p className="text-xl font-semibold text-green-600 mt-3">
            ${product.price}
          </p>

          <p className="mt-2 text-yellow-500">
            ⭐ {product.rating}
          </p>

          <p className="mt-4">{product.description}</p>

          <p className="mt-3 text-sm text-gray-600">
            Stock: {product.stock}
          </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">

        <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-900 cursor-pointer">
            Add to Cart
        </button>

  

        <Link href="/products" className="w-full sm:w-auto">
        <button className="w-full px-6 py-3 bg-gray-100 text-gray-800 
        rounded-xl hover:bg-gray-200 active:scale-95 transition-all 
        duration-300 shadow-sm hover:shadow-md font-medium border cursor-pointer">
        ← Back to Products
        </button>
        </Link>

</div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailsPage;