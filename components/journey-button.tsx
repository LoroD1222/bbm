import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export function JourneyButton({ href, children, secondary = false }: Readonly<{ href: string; children: ReactNode; secondary?: boolean }>) {
  const opensPlanner = href === "/#contact" || href === "#contact" || href === "#enquiry";
  return <Link className={`journey-button${secondary ? " journey-button--secondary" : ""}`} href={href} data-plan-trip={opensPlanner || undefined}><span>{children}</span><ArrowUpRight aria-hidden="true" /></Link>;
}
