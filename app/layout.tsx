import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASTRA | densitY Sustaintech",
  description:
    "Advanced VUV-based waste gas treatment technology for laboratory and industrial applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
