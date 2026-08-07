import type { Metadata } from "next";
import "./tours.css";

export const metadata: Metadata = {
  title: "Tanzania Tours | BBM Safaris",
  description: "Explore tailor-made Tanzania safaris, Kilimanjaro treks, and Zanzibar beach escapes.",
};

export default function ToursLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
