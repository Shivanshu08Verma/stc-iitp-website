import type { Metadata } from "next";
import { Inter, Roboto, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["400", "300", "700", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "STC - Student Technical Council",
  description: "The apex body of all technical activities at IIT Patna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}