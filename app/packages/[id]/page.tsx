import Gallery from "@/components/Gallery";
import { packages } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PackageDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pkg = packages.find((p) => String(p.id) === id);

  if (!pkg) return notFound();

  const finalPrice = pkg.price.total - pkg.price.discount;

  const mainMedia =
    pkg.media.find((m: any) => m.type === "image") || pkg.media[0];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Main Image */}
      <Gallery media={pkg.media} />

      {/* Info */}
      <h1 className="text-2xl font-bold">{pkg.name}</h1>
      <p className="text-gray-500">{pkg.category}</p>

      {/* Pricing */}
      <div className="mt-3">
        <span className="text-gray-400 line-through mr-2">
          ₹{pkg.price.total}
        </span>
        <span className="text-2xl font-bold text-pink-500">₹{finalPrice}</span>
        <p className="text-green-600 text-sm">Save ₹{pkg.price.discount}</p>
      </div>

      {/* Advance */}
      <p className="text-sm text-gray-600 mt-1">
        ₹{pkg.price.advance} token to book
      </p>

      {/* Features */}
      <ul className="mt-4 space-y-1 text-gray-700">
        {pkg.features.map((f: string, i: number) => (
          <li key={i}>✅ {f}</li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={`/booking?package=${pkg.id}`}
        className="block mt-6 bg-pink-500 text-white text-center py-3 rounded-xl text-lg"
      >
        Book Now
      </Link>
    </div>
  );
}
