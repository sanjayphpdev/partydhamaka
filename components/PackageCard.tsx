"use client";

import Link from "next/link";

export default function PackageCard({ pkg }: any) {
  const finalPrice = pkg.price.total - pkg.price.discount;

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      {/* Media */}
      <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
        {pkg.media?.[0]?.type === "image" ? (
          <img
            src={pkg.media[0].url}
            alt={pkg.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={pkg.media[0].url}
            className="w-full h-full object-cover"
            controls
          />
        )}
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold">{pkg.name}</h2>

      {/* Category */}
      <p className="text-sm text-gray-500">{pkg.category}</p>

      {/* Pricing */}
      <div className="mt-2">
        <span className="text-gray-400 line-through mr-2">
          ₹{pkg.price.total}
        </span>
        <span className="text-2xl font-bold text-pink-500">₹{finalPrice}</span>
      </div>

      {/* Discount Badge */}
      <p className="text-green-600 text-sm">Save ₹{pkg.price.discount}</p>

      {/* Advance */}
      <p className="text-sm text-gray-600 mt-1">
        ₹{pkg.price.advance} token to book
      </p>

      {/* Features */}
      <ul className="text-sm text-gray-600 mt-3">
        {pkg.features.map((f: string, i: number) => (
          <li key={i}>• {f}</li>
        ))}
      </ul>

      {/* CTA */}
      <div className="flex flex-col gap-3 mt-4">
        <Link href={`/booking?package=${pkg.id}`}>
          <button className="w-full bg-pink-500 text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
            Book Now
          </button>
        </Link>

        <Link href={`/packages/${pkg.id}`}>
          <button className="w-full border border-pink-500 text-pink-500 bg-white py-3 rounded-xl font-medium hover:bg-pink-50 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
