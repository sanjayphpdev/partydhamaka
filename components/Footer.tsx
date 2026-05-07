export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">PartyDhamaka 🎂</h2>
          <p className="text-sm">
            Making kids’ birthdays magical with decorations, entertainers & fun
            activities.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/packages">Packages</a>
            </li>
            <li>
              <a href="/#how-it-works">How it Works</a>
            </li>
            <li>
              <a href="/terms-and-conditions">Terms and Conditions</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">📞 +91 9702512779</p>
          <p className="text-sm">📧 support@partydhamaka.in</p>
          <p className="text-sm mt-2">Mumbai, India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} PartyDhamaka. All rights reserved.
      </div>
    </footer>
  );
}
