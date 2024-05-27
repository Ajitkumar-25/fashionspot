import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/cartContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fashion Spot",
  description:
    "Your destination for chic and sophisticated fashion. Explore the latest trends and timeless classics to elevate your style effortlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
        <Navbar />
        {children}
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
