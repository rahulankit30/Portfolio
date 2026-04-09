import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rahul-ankit.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Rahul Ankit — Full Stack Technical Lead",
    template: "%s | Rahul Ankit",
  },
  description:
    "Full Stack Technical Lead with 8+ years of experience architecting distributed systems, leading engineering teams, and shipping AI-driven product innovations. Based in Hyderabad, India.",
  keywords: [
    "Rahul Ankit",
    "Full Stack Developer",
    "Technical Lead",
    "Java",
    "React",
    "Spring Boot",
    "Microservices",
    "AI ML",
    "RAG",
    "Kafka",
    "Kubernetes",
    "Hyderabad",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Rahul Ankit", url: siteUrl }],
  creator: "Rahul Ankit",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "Rahul Ankit — Full Stack Technical Lead",
    description:
      "8+ years building scalable distributed systems and AI-driven product experiences. Currently at ABC Fitness.",
    siteName: "Rahul Ankit Portfolio",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Rahul Ankit — Full Stack Technical Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Ankit — Full Stack Technical Lead",
    description:
      "8+ years building scalable distributed systems and AI-driven product experiences.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#08080f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
