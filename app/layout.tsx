import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
export const metadata: Metadata = {
  title: "Birthday Party Services",
  description: "Book decoration, magicians & kids activities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-ERWQ7FRCG7" />
    </html>
  );
}
