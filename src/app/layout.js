import Script from "next/script";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    url: "https://webcamtoy.pro/",
    name: "webcamtoy, Capture beautiful moments",
    description: "Use this application for capture your beautiful moments.",
    operatingSystem: "Windows, MacOS, Chrome OS, Linux, iOS, Android",
    applicationCategory: "UtilitiesApplication",
    offers: {
      "@type": "Offer",
      price: 0,
      priceCurrency: "USD",
    },
  };
  // Website schema
  const websiteSchema = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: "webcamtoy.pro",
    url: "https://webcamtoy.pro/",
  };

  // WebPage schema
  const webPageSchema = {
    "@id$": `https://webcamtoy.pro/`,
    "@type": "WebPage",
    "@context": "http://schema.org",
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-1423066258812449" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link
          rel="icon"
          href="/android-chrome-192x192.png"
          sizes="192x192"
          type="image/png"
        />
        <link
          rel="icon"
          href="/android-chrome-512x512.png"
          sizes="512x512"
          type="image/png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplication),
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
      {/* Google Analytics Setup */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-J09S1Y7D82`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J09S1Y7D82');
          `,
        }}
      />
      {/* Modern GA4 integration */}
      <GoogleAnalytics gaId="G-J09S1Y7D82" />
    </html>
  );
}
