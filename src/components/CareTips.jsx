import {
  FaTint,
  FaSun,
  FaLeaf,
  FaSmile,
  FaThermometerHalf,
  FaTshirt,
} from "react-icons/fa";

const tips = [
  {
    icon: <FaTint />,
    title: "Maintain Proper Hydration",
    desc: "Drink at least 2–3 liters of water daily to maintain body temperature, improve digestion, and prevent dehydration during hot summer days.",
    tag: "Health",
  },
  {
    icon: <FaSun />,
    title: "Apply Sun Protection",
    desc: "Use SPF 30+ sunscreen before going outside to protect your skin from harmful UV rays and reduce risk of sunburn.",
    tag: "Skin Care",
  },
  {
    icon: <FaLeaf />,
    title: "Eat Seasonal Fresh Foods",
    desc: "Include water-rich fruits like watermelon, cucumber, and citrus fruits to boost energy and keep your body cool.",
    tag: "Diet",
  },
  {
    icon: <FaSmile />,
    title: "Gentle Skin Care Routine",
    desc: "Cleanse twice daily and use lightweight moisturizer to keep your skin fresh, hydrated, and irritation-free.",
    tag: "Hygiene",
  },
  {
    icon: <FaThermometerHalf />,
    title: "Avoid Peak Heat Exposure",
    desc: "Stay indoors between 12 PM to 4 PM when UV radiation is strongest to prevent heat exhaustion.",
    tag: "Safety",
  },
  {
    icon: <FaTshirt />,
    title: "Wear Breathable Clothing",
    desc: "Choose loose cotton or linen clothes that improve airflow and keep your body cool and comfortable.",
    tag: "Comfort",
  },
];

const CareTips = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-orange-50/40 to-white overflow-hidden">
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>

      <div className="text-center mb-16 px-4">
        <p className="text-orange-500 uppercase tracking-[0.35em] text-xs font-semibold">
          Summer Wellness Guide
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 mt-4">
          Care Tips for a Healthy Summer
        </h2>

        <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Simple expert-backed habits to keep you refreshed, protected, and
          comfortable during extreme summer heat.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-orange-200 via-white to-emerald-200 shadow-sm hover:shadow-2xl transition duration-300"
          >
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-7 h-full relative overflow-hidden">

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-orange-100/40 to-emerald-100/30"></div>

              <div className="relative z-10">

                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-500 text-white text-xl shadow-md group-hover:scale-110 transition">
                    {tip.icon}
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                    {tip.tag}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-emerald-950 mb-3 leading-snug">
                  {tip.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {tip.desc}
                </p>

                <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-orange-400 to-emerald-400 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareTips;