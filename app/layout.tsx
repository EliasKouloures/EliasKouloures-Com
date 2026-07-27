import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eliaskouloures.com"),
  title: {
    default: "Elias Kouloures · Senior Advisor",
    template: "%s · Elias Kouloures",
  },
  description:
    "Senior Advisor for Growth, Innovation & AI. Solve complex problems, build AI capability and create multimedia systems.",
  openGraph: {
    title: "Elias Kouloures · Senior Advisor",
    description:
      "Solve complex problems, build AI capability and create multimedia systems.",
    images: [
      {
        url: "/og.png",
        width: 1727,
        height: 911,
        alt: "A senior advisor overlooking an interplanetary city.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elias Kouloures · Senior Advisor",
    description:
      "Solve complex problems, build AI capability and create multimedia systems.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: false,
    follow: false,
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
      <body>{children}</body>
    </html>
  );
}
