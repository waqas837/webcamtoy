// src/app/privacy-policy/page.js
export const metadata = {
  title: "Privacy Policy - Webcam Toy",
  description:
    "Read the privacy policy for Webcam Toy. Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-purple-700 mb-8 text-center">
        Privacy Policy
      </h1>
      <div className="prose prose-purple max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-700 mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p>
          We may collect non-personal data such as browser type, device
          information, and usage statistics. No personally identifiable
          information is stored unless voluntarily provided.
        </p>
        <h2 className="text-3xl font-bold text-purple-700 mt-8 mb-4">
          2. Use of Collected Information
        </h2>
        <p>
          The information we collect helps improve our website, enhance user
          experience, and provide personalized features.
        </p>
        <h2 className="text-3xl font-bold text-purple-700 mt-8 mb-4">
          3. Cookies and Tracking Technologies
        </h2>
        <p>
          We may use cookies to enhance your experience. You can disable cookies
          through your browser settings, but some features may not function
          properly.
        </p>
        <h2 className="text-3xl font-bold text-purple-700 mt-8 mb-4">
          4. Third-Party Services
        </h2>
        <p>
          We may use third-party services (e.g., analytics, ads) that collect
          data as per their own privacy policies. We do not control their data
          collection practices.
        </p>
        <h2 className="text-3xl font-bold text-purple-700 mt-8 mb-4">
          5. Data Security
        </h2>
        <p>
          We implement industry-standard security measures to protect your data.
          However, no method of transmission is 100% secure.
        </p>
        <h2 className="text-3xl font-bold text-purple-700 mt-8 mb-4">
          6. Changes to Privacy Policy
        </h2>
        <p>
          We may update this policy from time to time. Continued use of the site
          signifies acceptance of the revised policy.
        </p>
      </div>
    </div>
  );
}
