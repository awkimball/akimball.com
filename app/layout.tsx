import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Inconsolata } from "next/font/google"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Addison Kimball",
  // description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>{children}</body>
    </html>
  );
}
