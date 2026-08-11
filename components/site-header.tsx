"use client";

import { ArrowUpRight, Mail, Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark } from "./logo-mark";

const links = [
  { href: "/tours", label: "Tours" },
  { href: "/#destinations", label: "Locations" },
  { href: "/#about", label: "About us" },
] as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const close = () => setIsOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className={`site-header${isHome ? "" : " site-header--solid"}`}>
      <div className="shell site-header__inner">
        <Link className="site-header__logo" href="/" aria-label="BBM Safaris home" onClick={() => setIsOpen(false)}>
          <LogoMark compact />
        </Link>

        <nav id="primary-navigation" className={`site-header__nav${isOpen ? " is-open" : ""}`} aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} href={link.href} aria-current={link.href === "/tours" && pathname.startsWith("/tours") ? "page" : undefined} onClick={() => setIsOpen(false)}>{link.label}</Link>)}
          <Link className="site-header__mobile-cta" href="/#contact" data-plan-trip onClick={() => setIsOpen(false)}>Plan My Tanzania Trip</Link>
        </nav>

        <div className="site-header__contact">
          <a href="mailto:info@bbmsafaris.com"><Mail aria-hidden="true" />info@bbmsafaris.com</a>
          <a href="https://wa.me/255757662052" target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />+255 757 662 052</a>
          <Link className="site-header__desktop-cta" href="/#contact" data-plan-trip>
            <span>Plan My Tanzania Trip</span>
            <span aria-hidden="true"><ArrowUpRight /></span>
          </Link>
        </div>

        <button className="site-header__menu" type="button" aria-controls="primary-navigation" aria-expanded={isOpen} aria-label={isOpen ? "Close navigation" : "Open navigation"} onClick={() => setIsOpen((current) => !current)}>
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
