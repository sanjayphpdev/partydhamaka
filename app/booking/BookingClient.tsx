"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function BookingClient() {
  const params = useSearchParams();
  const pkg = params.get("package");

  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");

  const whatsappUrl = `https://wa.me/9702512779?text=Hi, I want to book package ${pkg} on ${date} at ${address}`;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Complete Your Booking
      </h1>

      {/* Date */}
      <label className="block mb-2">Select Date</label>

      <input
        type="date"
        className="w-full border p-2 rounded mb-4"
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => setDate(e.target.value)}
      />

      {/* Address */}
      <label className="block mb-2">Address</label>

      <textarea
        className="w-full border p-2 rounded mb-4"
        placeholder="Enter full address"
        onChange={(e) => setAddress(e.target.value)}
      />

      {/* CTA */}
      <a
        href={whatsappUrl}
        target="_blank"
        className="block text-center bg-green-500 text-white py-3 rounded-xl"
      >
        Book on WhatsApp
      </a>
    </div>
  );
}
