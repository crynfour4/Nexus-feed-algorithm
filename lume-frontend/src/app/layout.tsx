import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-inter'
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-jakarta'
});

export const metadata: Metadata = {
  title: "Nexus",
  description: "Starting exploring now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
