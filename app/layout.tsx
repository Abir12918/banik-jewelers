import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: {
    default: "Banik Jewelers | Gold Jewelry for Bridal and Occasion Wear",
    template: "%s | Banik Jewelers",
  },
  description:
    "Banik Jewelers is a family-owned gold jewelry boutique showcasing bridal, traditional, and statement pieces.",
  metadataBase: new URL("https://github.com/Abir12918/banik-jewelers"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
