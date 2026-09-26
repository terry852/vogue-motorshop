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
  title: "VOGUE MOTORSHOP",
  description: "專業汽車服務與美研 | VOGUE MOTORSHOP",
  
  // 1. 設定 Favicon (分頁圖示)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // 2. 設定 WhatsApp / Facebook 社群分享預覽圖 (Open Graph)
  openGraph: {
    title: "VOGUE MOTORSHOP",
    description: "專業汽車服務與美研 | VOGUE MOTORSHOP",
    url: "https://vogue-motorshop.com",
    siteName: "VOGUE MOTORSHOP",
    images: [
      {
        url: "https://vogue-motorshop.com/og-image.jpg", // 放在 public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "VOGUE MOTORSHOP 預覽圖",
      },
    ],
    locale: "zh_HK",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-HK"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}