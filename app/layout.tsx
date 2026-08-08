import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "BBM Safaris | Tailor-made Tanzania journeys",
  description:
    "Tailor-made Tanzania safaris, Kilimanjaro climbs, and Zanzibar escapes with BBM Safaris.",
  icons: {
    icon: "/assets/fav-icon-bbm.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body><SiteHeader />{children}</body>
    </html>
  );
}
