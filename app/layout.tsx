import type { Metadata } from "next";
import { Inconsolata } from "next/font/google"
import "./globals.css";

const inconsolata = Inconsolata({
   subsets: ["latin"],
   display: 'swap',
   adjustFontFallback: false,
})

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
    <html lang="en" className={inconsolata.className}>
      <body>{children}</body>
    </html>
  );
}
