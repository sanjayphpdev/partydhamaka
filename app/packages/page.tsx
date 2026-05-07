import { packages } from "@/lib/data";
import PackageCard from "@/components/PackageCard";

export default function PackagesPage() {
  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} />
      ))}
    </div>
  );
}
