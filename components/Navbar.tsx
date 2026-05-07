"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl font-bold text-pink-500">PartyDhamaka 🎈</h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700">
          <Link href="/packages">Packages</Link>
          <Link href="/#how-it-works">How it Works</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        {/* CTA */}
        <Link href="/packages">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg">
            Book Now
          </button>
        </Link>
      </div>
    </header>
  );
}
