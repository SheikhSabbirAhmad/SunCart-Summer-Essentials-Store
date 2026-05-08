"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image: "/BannerImg-1.jpg",
    title: "Summer Sale 50% OFF",
    desc: "Grab your favorite sunglasses, outfits & beach essentials at unbeatable prices.",
    btn1: "Shop Now",
    btn2: "Explore Deals",
  },
  {
    image: "/BannerImg-2.jpg",
    title: "Hot Deals 🔥",
    desc: "Discover trending summer products curated just for you.",
    btn1: "Browse Products",
    btn2: "View Offers",
  },
  {
    image: "/BannerImg-3.jpg",
    title: "Stay Cool This Summer",
    desc: "From skincare to beach accessories — everything you need in one place.",
    btn1: "Start Shopping",
    btn2: "View Collection",
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[65vh] w-full rounded-xl overflow-hidden shadow-2xl">

      {/* IMAGE */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">

          {/* TITLE */}
          <motion.h1
            key={index + "-title"}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl"
          >
            {slides[index].title}
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            key={index + "-desc"}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-lg md:text-xl mb-6 max-w-xl text-gray-200"
          >
            {slides[index].desc}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            key={index + "-btn"}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex gap-4"
          >
            <Link href="/products">
              <Button className="bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white">
                {slides[index].btn1}
              </Button>
            </Link>

            <Link href="/products">
              <Button variant="outline" className="text-white border-white">
                {slides[index].btn2}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ARROWS */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full backdrop-blur-md transition"
      >
        <FaChevronLeft className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full backdrop-blur-md transition"
      >
        <FaChevronRight className="text-white" />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-white w-6" : "bg-white/50 w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;