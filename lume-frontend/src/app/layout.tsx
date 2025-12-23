'use client'
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}
