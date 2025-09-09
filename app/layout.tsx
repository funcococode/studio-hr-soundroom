import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import RouteTransition from "@/components/route-transition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Studio HR — Music Production, Recording, Mixing & Mastering",
  description: "A classy, elegant music studio website with premium page transitions and advanced image carousel.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {/* <RouteTransition> */}
          {children}
          <Footer />
        {/* </RouteTransition> */}
      </body>
    </html>
  );
}
