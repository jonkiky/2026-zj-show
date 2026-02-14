import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2026 Chinese New Year Festival - ZJU DC",
  description: "Celebrating Culture, Community, and Prosperity - Year of the Horse 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-b from-red-50 to-amber-50">
        {children}
      </body>
    </html>
  );
}
