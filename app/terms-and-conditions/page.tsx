export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using our birthday party services platform.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
        Terms & Conditions
      </h1>

      <p className="text-gray-500 mb-8">
        Effective Date: {new Date().getFullYear()}
      </p>

      {/* Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Services</h2>

        <p className="text-gray-700 leading-7">
          We provide a platform for booking birthday decorations, balloon
          decoration services, magicians, kids activities, and party
          entertainment services through third-party vendors.
        </p>
      </section>

      {/* Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Booking Confirmation</h2>

        <p className="text-gray-700 leading-7">
          A booking is confirmed only after payment of the token or advance
          amount. Remaining payment may be collected at the event location
          unless stated otherwise.
        </p>
      </section>

      {/* Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Pricing</h2>

        <p className="text-gray-700 leading-7">
          Prices displayed on the website may vary depending on customization,
          location, timing, and vendor availability.
        </p>
      </section>

      {/* Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          4. Cancellation & Refund
        </h2>

        <ul className="list-disc pl-6 text-gray-700 leading-7">
          <li>
            Cancellations made more than 24 hours before the event may be
            eligible for partial refund.
          </li>

          <li>Same-day cancellations are generally non-refundable.</li>

          <li>
            In case of vendor unavailability, we will try to arrange an
            alternate vendor or provide applicable refund.
          </li>
        </ul>
      </section>

      {/* Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Responsibility</h2>

        <p className="text-gray-700 leading-7">
          We act as a booking platform connecting customers with vendors. While
          we try to onboard reliable vendors, we are not liable for delays,
          third-party service quality, weather conditions, venue restrictions,
          or unforeseen issues.
        </p>
      </section>

      {/* Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">6. Media & Photos</h2>

        <p className="text-gray-700 leading-7">
          Photos and videos displayed on the platform are for reference purposes
          only. Actual setup may slightly vary depending on venue and material
          availability.
        </p>
      </section>

      {/* Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">7. User Conduct</h2>

        <p className="text-gray-700 leading-7">
          Users must not misuse the platform, make fake bookings, or engage in
          abusive or unlawful activities.
        </p>
      </section>

      {/* Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">8. Payments</h2>

        <p className="text-gray-700 leading-7">
          Payments may be accepted through UPI, online payment gateways, or cash
          on service delivery where applicable.
        </p>
      </section>

      {/* Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">9. Privacy</h2>

        <p className="text-gray-700 leading-7">
          Customer information shared during booking is used only for booking
          coordination and customer support purposes.
        </p>
      </section>

      {/* Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">10. Changes to Terms</h2>

        <p className="text-gray-700 leading-7">
          We reserve the right to modify these terms at any time without prior
          notice.
        </p>
      </section>

      {/* Contact */}
      <section className="mt-12 border-t pt-6">
        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>

        <div className="text-gray-700 leading-7">
          <p>📧 support@partydhamaka.com</p>
          <p>📞 +91 9702512779</p>
          <p>Mumbai, India</p>
        </div>
      </section>
    </main>
  );
}
