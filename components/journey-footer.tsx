import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { LogoMark } from "./logo-mark";

export function JourneyFooter() {
  return (
    <footer className="journey-footer">
      <div className="journey-shell journey-footer__grid">
        <div className="journey-footer__brand">
          <LogoMark />
          <p>Based in Arusha, Tanzania. We specialize in tailor-made private tours combining the legendary northern circuit parks, mountain climbing, and idyllic Indian Ocean islands.</p>
        </div>
        <div><h2>Tours</h2><Link href="/tours">Classic Safari</Link><Link href="/tours">Kilimanjaro Routes</Link><Link href="/tours">Zanzibar Getaway</Link><Link href="/#contact">Custom Itineraries</Link></div>
        <div><h2>Locations</h2><Link href="/#destinations">Serengeti</Link><Link href="/#destinations">Ngorongoro Crater</Link><Link href="/#destinations">Mount Kilimanjaro</Link><Link href="/#destinations">Stone Town</Link></div>
        <div><h2>Contact Us</h2><a href="mailto:info@bbmsafaris.com"><Mail aria-hidden="true" />info@bbmsafaris.com</a><a href="tel:+255757662052"><Phone aria-hidden="true" />+255 757 662 052</a><p>Arusha, Tanzania — Gateway to Safari</p></div>
      </div>
      <div className="journey-shell journey-footer__bottom"><span>© 2026 BBM Safaris Limited. All rights reserved. Registered Operator in Tanzania.</span><nav aria-label="Social media"><a href="#top">Facebook</a><a href="#top">Instagram</a><a href="#top">TripAdvisor</a></nav></div>
    </footer>
  );
}
