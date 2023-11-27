import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import { introData } from "./lib/data";

const futura = localFont({
  src: [
    {
      path: "../../public/futura/Futura Std Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/futura/Futura Std Heavy.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

export const metadata: Metadata = {
  title: "Zunaith Shamsudeen",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${futura.className} bg-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
