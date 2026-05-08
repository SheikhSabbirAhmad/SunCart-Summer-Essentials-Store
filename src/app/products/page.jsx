import ProductCard from "@/components/ProductCard";
import Category from "@/components/Category";

const Products = async ({ searchParams }) => {

  const params = await searchParams;
  const category = params?.category;

  const res = await fetch(
    "https://sun-cart-summer-essentials-store-xi.vercel.app/data.json",
    { cache: "no-store" }
  );

  const products = await res.json();

  const filteredProducts = category
    ? products.filter(
        (product) =>
          product.category.toLowerCase() === category.toLowerCase()
      )
    : products;

  return (
    <div className="max-w-7xl mx-auto px-4">

      <h1 className="text-3xl font-bold my-6">All Products</h1>

      <Category />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
};

export default Products;