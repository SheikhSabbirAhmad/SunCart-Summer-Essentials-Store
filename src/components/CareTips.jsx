import { FaTint, FaSun, FaLeaf, FaSmile } from "react-icons/fa";

const tips = [
  {
    icon: <FaTint />,
    title: "Stay Hydrated",
    desc: "Drink plenty of water throughout the day to keep your body cool and refreshed.",
  },
  {
    icon: <FaSun />,
    title: "Use Sunscreen",
    desc: "Protect your skin from harmful UV rays by applying sunscreen before going outside.",
  },
  {
    icon: <FaLeaf />,
    title: "Eat Fresh Foods",
    desc: "Include fruits and light meals in your diet to stay energetic during hot days.",
  },
  {
    icon: <FaSmile />,
    title: "Take Care of Skin",
    desc: "Cleanse and moisturize your skin regularly to avoid dryness and sun damage.",
  },
];

const CareTips = () => {
  return (
    <section className="bg-[#f7f3ee] py-16 mt-7">

      <div className="text-center mb-12 px-4">
        <p className="text-orange-500 uppercase tracking-[0.3em] text-sm font-semibold">
          Guidance
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">
          Summer Care Tips
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Simple tips to stay healthy, fresh, and glowing during the summer season.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-6 shadow-sm 
            transition-all duration-300 ease-in-out 
            hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] 
            cursor-pointer group"
          >
            <div
              className="w-12 h-12 flex items-center justify-center 
              bg-orange-100 text-orange-500 rounded-lg mb-4 text-xl 
              transition-all duration-300 
              group-hover:rotate-6 group-hover:scale-110"
            >
              {tip.icon}
            </div>

            <h3 className="text-lg font-semibold text-emerald-900 mb-2">
              {tip.title}
            </h3>

            <p className="text-gray-600 text-sm">{tip.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareTips;