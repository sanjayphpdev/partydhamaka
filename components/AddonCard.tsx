export default function AddonCard({ addon }: any) {
  return (
    <div className="border p-3 rounded-lg flex justify-between">
      <span>{addon.name}</span>
      <span>₹{addon.price}</span>
    </div>
  );
}
