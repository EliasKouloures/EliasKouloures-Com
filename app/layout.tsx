import type { Metadata, Viewport } from "next";
import { Analytics } from "./components/Analytics";
import { contact } from "./site-data";
import "./globals.css";

const isProduction = process.env.SITE_IS_PRODUCTION === "true";

export const metadata: Metadata = {
  metadataBase: new URL("https://eliaskouloures.com"),
  title: {
    default: "Elias Kouloures · Applied AI Architect & Executive Advisor",
    template: "%s · Elias Kouloures",
  },
  description:
    "Applied AI Architect & Executive Advisor. Complex AI and business challenges turned into deployed systems, adopted capability and clear market communication.",
  openGraph: {
    title: "Elias Kouloures · Applied AI Architect & Executive Advisor",
    description:
      "From ambiguity to deployed systems, adopted capability and market clarity.",
    images: [
      {
        url: "/og.jpg",
        width: 1600,
        height: 900,
        alt: "Elias Kouloures — Applied AI Architect and Executive Advisor.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elias Kouloures · Applied AI Architect & Executive Advisor",
    description:
      "From ambiguity to deployed systems, adopted capability and market clarity.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: isProduction,
    follow: isProduction,
    googleBot: {
      index: isProduction,
      follow: isProduction,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#07070b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://eliaskouloures.com/#elias-kouloures",
              name: "Elias Kouloures",
              url: "https://eliaskouloures.com",
              jobTitle: "Applied AI Architect & Executive Advisor",
              homeLocation: {
                "@type": "Place",
                name: "Berlin, Germany",
              },
              knowsLanguage: ["English", "German"],
              knowsAbout: [
                "Applied artificial intelligence",
                "AI transformation",
                "AI architecture",
                "AI enablement",
                "Executive advisory",
                "First-principles systems thinking",
                "Technical communication",
                "Creative technology",
              ],
              sameAs: [
                contact.linkedin,
                contact.github,
                contact.youtube,
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
