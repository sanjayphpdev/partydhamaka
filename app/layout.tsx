import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

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

      {/* Google Analytics (GA4) */}
      <GoogleAnalytics gaId="G-ERWQ7FRCG7" />

      {/* Google Ads Global Site Tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18160411967"
        strategy="afterInteractive"
      />

      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          // Google Ads Tracking ID
          gtag('config', 'AW-18160411967');
        `}
      </Script>
    </html>
  );
}
