import React from "react";

const brands = [
  {
    name: "SunShade",
    desc: "Premium UV-protection eyewear for summer lifestyle",
    logo: "🕶️",
    tag: "Eyewear",
  },
  {
    name: "GlowSkin",
    desc: "Dermatologist-approved skincare for hot weather",
    logo: "🌿",
    tag: "Skincare",
  },
  {
    name: "BeachWave",
    desc: "Minimal & trendy summer fashion essentials",
    logo: "🏖️",
    tag: "Fashion",
  },
  {
    name: "FreshBite",
    desc: "Healthy seasonal foods for natural energy",
    logo: "🍉",
    tag: "Food",
  },
];

const TopBrands = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f7f3ee]">

      <div className="text-center mb-14 px-4">
        <p className="text-orange-500 uppercase tracking-[0.3em] text-xs font-semibold">
          Trusted Partners
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mt-2">
          Our Premium Brands
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Carefully selected premium brands that bring quality, comfort, and
          style to your summer lifestyle.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 px-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="relative group bg-white border border-gray-100 rounded-2xl p-7 
            shadow-sm hover:shadow-2xl transition-all duration-300 
            hover:-translate-y-2 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

            <div className="relative z-10">
              <div
                className="w-14 h-14 flex items-center justify-center 
                text-2xl bg-orange-100 text-orange-500 rounded-xl 
                mb-5 group-hover:scale-110 transition"
              >
                {brand.logo}
              </div>

              <p className="text-xs text-orange-500 font-semibold uppercase tracking-wider mb-2">
                {brand.tag}
              </p>

              <h3 className="text-xl font-semibold text-emerald-900 mb-2">
                {brand.name}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {brand.desc}
              </p>

              <div className="mt-5 w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-orange-400"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopBrands;