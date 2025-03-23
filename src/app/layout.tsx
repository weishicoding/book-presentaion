import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TradeTech Pulse | Premium Trading Solutions",
  description: "Discover a user-friendly and cost-effective solution for your new forex/futures prop firm, broker or software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
