import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/sections/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter-custom" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-custom" });

export const metadata: Metadata = {
  title: "Vansh Jasuja",
  description: "Data Scientist and AI Enthusiast building AI Solutions and ML Projects.",
  icons: {
    icon: "/logo_white.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-black text-white relative`}>
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
