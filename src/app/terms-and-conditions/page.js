// src/app/terms-and-conditions/page.js
export const metadata = {
  title: "Terms and Conditions - Webcam Toy",
  description:
    "Read the terms and conditions for using Webcam Toy. Learn about user responsibilities, intellectual property, and more.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-purple-700 mb-8 text-center">
        Terms and Conditions
      </h1>
      <div className="prose prose-purple max-w-3xl mx-auto">
        <p>
          Welcome to Webcam Toy! By using our website, you agree to comply with
          and be bound by the following terms and conditions.
        </p>
        <h2 className="text-3xl font-bold text-purple-700 mt-8 mb-4">
          1. Use of the Website
        </h2>
        <ul>
          <li>You must be at least 13 years old to use this website.</li>
          <li>
            You agree not to use the website for any illegal or unauthorized
            purpose.
          </li>
        </ul>
        <h2 className="text-3xl font-bold text-purple-700 mt-8 mb-4">
          2. Intellectual Property
        </h2>
        <p>
          All content on this website, including text, images, and filters, is
          the property of Webcam Toy and is protected by copyright laws.
        </p>
        <h2 className="text-3xl font-bold text-purple-700 mt-8 mb-4">
          3. Limitation of Liability
        </h2>
        <p>
          Webcam Toy is not liable for any damages arising from the use of this
          website.
        </p>
        <h2 className="text-3xl font-bold text-purple-700 mt-8 mb-4">
          4. Changes to Terms
        </h2>
        <p>
          We reserve the right to modify these terms at any time. Your continued
          use of the website constitutes acceptance of the updated terms.
        </p>
        <p className="mt-8">
          If you have any questions, please{" "}
          <a href="/contact" className="text-pink-600 hover:text-purple-600">
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
}
