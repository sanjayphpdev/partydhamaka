import { packages } from "@/lib/data";
import PackageCard from "@/components/PackageCard";

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 grid md:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} />
      ))}
    </div>
  );
}
