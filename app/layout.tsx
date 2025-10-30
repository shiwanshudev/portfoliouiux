import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiwanshu Shubham · UX/UI Designer & Frontend Developer",
  description:
    "Dynamic UX/UI Designer with 3 years of combined experience in design and frontend development. Specializing in user-centered product design and intuitive digital experiences.",
  keywords: [
    "UX/UI Designer",
    "Frontend Developer",
    "Product Designer",
    "Design Systems",
    "User Interface",
    "User Experience",
    "Web Design",
    "React Developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shiwanshudesigns.vercel.app/",
    title: "Shiwanshu Shubham · UX/UI Designer & Frontend Developer",
    description: "Dynamic UX/UI Designer with frontend development expertise",
    siteName: "Shiwanshu Shubham Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function() {
        var stored = localStorage.getItem("theme");
        if (stored === "dark" || stored === "light") {
          document.documentElement.setAttribute("data-theme", stored);
        }
      })();
      `,
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
