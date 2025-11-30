import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AIChatBot from "@/components/chat/AIChatBot";
import { personalInfo } from "@/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Favicon configuration - automatically uses faviconUrl if available, otherwise falls back to avatarUrl
const faviconPath = personalInfo.faviconUrl || personalInfo.avatarUrl;
const faviconType = faviconPath.includes('.png') ? 'image/png' : 
                    faviconPath.includes('.jpg') || faviconPath.includes('.jpeg') || faviconPath.includes('.JPG') ? 'image/jpeg' : 
                    'image/png';

export const metadata: Metadata = {
  title: `${personalInfo.name} | Building Digital Experiences`,
  description: `Personal portfolio website of ${personalInfo.name}, ${personalInfo.title}. ${personalInfo.tagline}`,
  icons: {
    icon: [
      { url: faviconPath, type: faviconType },
    ],
    apple: [
      { url: faviconPath, type: faviconType },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        <AIChatBot />
      </body>
    </html>
  );
}
