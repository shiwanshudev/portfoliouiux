import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider"; // Create this as shown below

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shiwanshu Shubham · UX/UI Designer & Frontend Developer",
    template: "%s | Shiwanshu Shubham",
  },
  metadataBase: new URL("https://shiwanshudesigns.vercel.app"),
  description:
    "Dynamic and creative UX/UI Designer with 3 years of combined experience — 1.5 years in frontend development — delivering user-centered product design from research and prototyping to production-ready UI across web and mobile.",
  keywords: [
    "UX/UI Designer",
    "Product Designer",
    "Frontend Developer",
    "Design Systems",
    "User Experience",
    "User Interface",
    "Web Design",
    "React",
    "Figma",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "Shiwanshu Shubham · UX/UI Designer & Frontend Developer",
    description:
      "Product-focused UX/UI Designer combining design and frontend skills to build intuitive, high-impact digital products.",
    url: "https://shiwanshudesigns.vercel.app/",
    siteName: "Shiwanshu Shubham Portfolio",
    images: [
      {
        url: "https://shiwanshudesigns.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shiwanshu Shubham — UX/UI Designer",
      },
    ],
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://shiwanshudesigns.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light">
      <head />
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
