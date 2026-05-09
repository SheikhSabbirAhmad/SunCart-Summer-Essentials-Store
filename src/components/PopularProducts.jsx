import ProductCard from "./ProductCard";

const PopularProducts = async () => {
  const res = await fetch(
    "https://sun-cart-summer-essentials-store-xi.vercel.app/data.json",
    { cache: "no-store" }
  );

  const products = await res.json();

  const popularProducts = products.slice(0, 3);

  return (
    <div className="mt-15">
      <h1 className="text-3xl font-bold my-5 text-[#FF7A18]">Popular Products</h1>
      

      <div className="grid grid-cols-3 gap-5">
        {popularProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;