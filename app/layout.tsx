import type { Metadata } from "next";
import {
  Poppins,
  Afacad,
  Figtree,
  Kaushan_Script,
  Permanent_Marker,
} from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins-next",
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

const afacad = Afacad({
  variable: "--font-afacad-next",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree-next",
  subsets: ["latin"],
});

const kaushan = Kaushan_Script({
  variable: "--font-kaushan-next",
  subsets: ["latin"],
  weight: "400",
});

const marker = Permanent_Marker({
  variable: "--font-marker-next",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Travlla",
  description: "Travel website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`
        ${poppins.variable}
        ${afacad.variable}
        ${figtree.variable}
        ${kaushan.variable}
        ${marker.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}