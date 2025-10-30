import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiwanshu Shubham · Product & UX/UI Designer",
  description:
    "Product designer specializing in user-centered interfaces and design systems. Creating intuitive digital experiences that solve real business problems.",
  keywords: [
    "UX/UI Designer",
    "Product Designer",
    "Design Systems",
    "User Interface",
    "User Experience",
    "Web Design",
    "Mobile Design",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shiwanshudesigns.vercel.app/",
    title: "Shiwanshu Shubham · Product & UX/UI Designer",
    description:
      "Product designer specializing in user-centered interfaces and design systems",
    siteName: "Shiwanshu Shubham Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
