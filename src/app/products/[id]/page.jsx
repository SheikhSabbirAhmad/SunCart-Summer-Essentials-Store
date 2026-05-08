import Image from "next/image";

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

          <button className="mt-5 px-5 py-2 bg-black text-white rounded-lg">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailsPage;