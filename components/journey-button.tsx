import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export function JourneyButton({ href, children, secondary = false }: Readonly<{ href: string; children: ReactNode; secondary?: boolean }>) {
  return <Link className={`journey-button${secondary ? " journey-button--secondary" : ""}`} href={href}><span>{children}</span><ArrowUpRight aria-hidden="true" /></Link>;
}
