// src/app/contact/page.js
export const metadata = {
  title: "Contact Us - Webcam Toy",
  description:
    "Get in touch with Webcam Toy. Reach out to us for questions, feedback, or support.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-purple-700 mb-8 text-center">
        Contact Us
      </h1>
      <div className="prose prose-purple max-w-3xl mx-auto">
        <p>
          Have questions or feedback? We'd love to hear from you! Reach out to
          us using the form below or via email.
        </p>
        <h2 className="text-3xl font-bold text-purple-700 mt-8 mb-4">
          Contact Information
        </h2>
        <ul>
          <li>
            <strong>Email</strong>: support@webcamtoy.pro
          </li>
          <li>
            <strong>Address</strong>: 123 Webcam Street, Creative City, CC 12345
          </li>
        </ul>
        <h2 className="text-3xl font-bold text-purple-700 mt-8 mb-4">
          Contact Form
        </h2>
        <p>[Add a contact form here]</p>
      </div>
    </div>
  );
}
