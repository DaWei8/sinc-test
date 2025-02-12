import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SINC Partners",
  description: "Developed by David Sawe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className=" flex w-[100dvw] max-w-[100dvw] items-center flex-col min-h-[100dvh] bg-[#F4F4F4] ">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
