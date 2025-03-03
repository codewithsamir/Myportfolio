import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Samir Rain | Next.js & React Developer | Full Stack Developer",
    template: "%s | Samir Rain",
  },
  description:
    "Full Stack Developer specializing in Next.js, React, Django, and mobile app development. Expert in building high-performance web and mobile applications with modern technologies.",
  keywords: [
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer",
    "Web Development",
    "Mobile App Development",
    "JavaScript",
    "TypeScript",
    "Frontend Developer",
    "Software Engineer",
    "Web Applications",
    "Performance Optimization",
    "Samir Rain",
  ],
  authors: [{ name: "Samir Rain" }],
  creator: "Samir Rain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codewithsamir.com", // Replace with your actual website link
    siteName: "Samir Rain Portfolio",
    title: "Samir Rain | Next.js & React Developer | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, Django, and mobile app development. Building high-performance web and mobile applications.",
    images: [
      {
        url: "/imgs/website.png", // Update with your image path
        width: 1200,
        height: 630,
        alt: "Samir Rain - Next.js & React Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samir Rain | Next.js & React Developer | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, Django, and mobile app development",
    images: ["/imgs/website.png"], // Update with your image path
    creator: "@CodeWithSamir", // Your Twitter handle
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
  alternates: {
    canonical: "https://codewithsamir.com", // Your website URL
  },
  icons: {
    icon: "/imgs/logo.png", // Your logo path
    apple: "/imgs/logo.png", // Your logo path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
