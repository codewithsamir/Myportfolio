import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

// Define profiles outside of metadata
 const profiles = {
  linkedin: "https://np.linkedin.com/in/samir-rain-0467b7259",
  facebook: "https://www.facebook.com/TEAMOFSAMIR/",
  instagram: "https://www.instagram.com/teamofsamir/",
  youtube: "https://www.youtube.com/@codewithsamir",
  github: "https://github.com/codewithsamir",
  portfolio: ["https://samirrain.github.io/", "https://codewithsamir.github.io/"],
};

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
  metadataBase: new URL("https://samirrain.com.np"),
  verification: {
    google: "Geg6MyqELKWvjbsABit5WRiVwZ9ua-TMkbRUObCVSIA",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samirrain.com.np",
    siteName: "Samir Rain Portfolio",
    title: "Samir Rain | Next.js & React Developer | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, Django, and mobile app development. Building high-performance web and mobile applications.",
    images: [
      {
        url: "/imgs/website.png",
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
    images: ["/imgs/website.png"],
    creator: "@CodeWithSamir",
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
    canonical: "https://samirrain.com.np",
  },
  icons: {
    icon: "/imgs/logo.png",
    apple: "/imgs/logo.png",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  applicationName: "Samir Rain Portfolio",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <Head>
        {/* Alternate portfolio sites */}
        <link rel="alternate" href="https://samirrain.github.io/" />
        <link rel="alternate" href="https://codewithsamir.github.io/" />
        <link rel="manifest" href="/manifest.json" />
        {/* Social profiles as Open Graph see_also */}
        <meta property="og:see_also" content={profiles.linkedin} />
        <meta property="og:see_also" content={profiles.facebook} />
        <meta property="og:see_also" content={profiles.instagram} />
        <meta property="og:see_also" content={profiles.youtube} />
        <meta property="og:see_also" content={profiles.github} />
      </Head>
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}