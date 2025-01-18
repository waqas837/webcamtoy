// src/app/disclaimer/page.js
export const metadata = {
  title: "Disclaimer - Webcam Toy",
  description:
    "Read the disclaimer for Webcam Toy. Learn about content accuracy, external links, and limitation of liability.",
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-purple-700 mb-8 text-center">
        Disclaimer
      </h1>
      <div className="prose prose-purple max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-700 mt-8 mb-4">
          1. Content Accuracy
        </h2>
        <p>
          The information provided on Webcam Toy is for general purposes only.
          We do not guarantee the accuracy or completeness of any content.
        </p>
        <h2 className="text-3xl font-bold text-purple-700 mt-8 mb-4">
          2. External Links
        </h2>
        <p>
          Our website may contain links to external sites. We are not
          responsible for the content or practices of these sites.
        </p>
        <h2 className="text-3xl font-bold text-purple-700 mt-8 mb-4">
          3. Limitation of Liability
        </h2>
        <p>
          Webcam Toy is not liable for any damages arising from the use of this
          website.
        </p>
        <h2 className="text-3xl font-bold text-purple-700 mt-8 mb-4">
          4. Changes to Disclaimer
        </h2>
        <p>
          We reserve the right to modify this disclaimer at any time. Your
          continued use of the website constitutes acceptance of the updated
          disclaimer.
        </p>
      </div>
    </div>
  );
}
