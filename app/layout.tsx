"use client";
import { Sen } from "next/font/google";
import "./globals.css";
import Footer from "./shared/footer";
import Header from "./shared/header";

const sen = Sen({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Mani Kant Sharma</title>
      <body className={`bg-secondary ${sen.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
