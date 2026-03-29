import type { Metadata } from "next";
import {Inter, Roboto} from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
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
    <html lang="en" className={`${roboto.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}