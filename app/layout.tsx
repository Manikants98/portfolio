import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";

const sen = Sen({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mani Kant Sharma",
  description:
    "I'm from Lucknow and I have been working as a React Developer for more than 1 years.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sen.className}>{children}</body>
    </html>
  );
}
