import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "So Flo | Paver Installation, Sealing & Pressure Washing",
    template: "%s | So Flo",
  },
  description:
    "Professional paver sealing and pressure washing services in Cape Coral, FL and Fort Myers, FL. Protect your pavers and enhance your curb appeal with our expert services.",
  keywords: [
    "paver sealing Cape Coral",
    "pressure washing Fort Myers",
    "paver sealing Fort Myers",
    "pressure washing Cape Coral",
    "sealing pavers",
    "pressure wash driveway",
    "pool deck sealing",
    "driveway cleaning",
  ],
  openGraph: {
    title: "So Flo | Paver Installation, Sealing & Pressure Washing",
    description:
      "Professional paver sealing and pressure washing services in Cape Coral & Fort Myers, FL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}