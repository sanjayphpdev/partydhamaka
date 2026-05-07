import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="text-center py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
          Make Your Kid’s Birthday Magical 🎂
        </h1>
        <p className="text-gray-600 mb-6">
          Balloon Decoration, Magicians, Fun Activities — All in One Place
        </p>

        <Link href="/packages">
          <button className="bg-pink-500 text-white px-6 py-3 rounded-xl">
            View Packages
          </button>
        </Link>
      </section>
      {/* How It Works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            How It Works 🎉
          </h2>

          <p className="text-gray-600 mt-2">
            Book birthday decorations & kids activities in just few steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <div className="text-4xl mb-4">🎈</div>

            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">
              Choose Package
            </h3>

            <p className="text-gray-600 text-sm">
              Browse decoration packages, themes, magicians & fun activities.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <div className="text-4xl mb-4">📅</div>

            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">
              Book Your Date
            </h3>

            <p className="text-gray-600 text-sm">
              Select your event date and pay a small token amount to confirm
              booking.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <div className="text-4xl mb-4">🥳</div>

            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">
              Enjoy The Celebration
            </h3>

            <p className="text-gray-600 text-sm">
              Our vendor arrives on time and sets up everything for your
              celebration.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
