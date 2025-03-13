"use client";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("./components/Header"), {
  loading: () => <p>Loading...</p>,
});

const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => <p>Loading...</p>,
});

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <Header />
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
