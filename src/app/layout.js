import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OutfitFont = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "SunCart | Summer Essentials Store",
  description:
    "A modern summer eCommerce platform where users can explore and purchase seasonal products like sunglasses, summer outfits, skincare, beach accessories, and more. Browse products, view details, and place orders after authentication.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${OutfitFont.className} h-full antialiased`}
    >
      <body>
        <Navbar />

        <main className="max-w-7xl mx-auto">
          {children}
        </main>

        <Footer />

        {/* Toast container */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="colored"
        />
      </body>
    </html>
  );
}