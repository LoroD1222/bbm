import Image from "next/image";
import {
  ArrowUpRight,
  CalendarCheck,
  Check,
  FileText,
  Layers3,
  Mail,
  MapPin,
  Mountain,
  PawPrint,
  Phone,
  RefreshCw,
  Send,
  SlidersHorizontal,
  Star,
  TreePalm,
} from "lucide-react";
import { Experience } from "@/components/experience";
import { InquiryForm } from "@/components/inquiry-form";
import { LogoMark } from "@/components/logo-mark";
import { TourCarousel } from "@/components/tour-carousel";

const assets = {
  heroLeft: "/assets/figma/reference/hero-left.png",
  heroCenter: "/assets/figma/reference/hero-center.png",
  heroRight: "/assets/figma/reference/hero-right.png",
  expertise: "/assets/figma/reference/expertise-safari.png",
  planningTop: "/assets/figma/reference/planning-top.png",
  planningMain: "/assets/figma/reference/planning-main.png",
  planningBottom: "/assets/figma/reference/planning-bottom.png",
  contact: "/assets/figma/reference/contact-safari.png",
  contactLogo: "/assets/figma/reference/contact-logo.png",
} as const;

const destinations = [
  { name: "Serengeti National Park", image: "/assets/figma/reference/destination-serengeti.png", text: "Endless plains and the annual wildebeest migration — one of the largest wildlife movements on Earth.", icon: PawPrint },
  { name: "Ngorongoro Crater", image: "/assets/figma/reference/destination-ngorongoro.png", text: "A collapsed volcanic caldera holding one of Africa's densest concentrations of wildlife, year-round.", icon: PawPrint },
  { name: "Tarangire National Park", image: "/assets/figma/reference/destination-tarangire.png", text: "Endless plains and the annual wildebeest migration — one of the largest wildlife movements on Earth.", icon: PawPrint },
  { name: "Lake Manyara National Park", image: "/assets/figma/reference/destination-manyara.png", text: "Endless plains and the annual wildebeest migration — one of the largest wildlife movements on Earth.", icon: PawPrint },
  { name: "Arusha National Park", image: "/assets/figma/reference/destination-arusha.png", text: "Endless plains and the annual wildebeest migration — one of the largest wildlife movements on Earth.", icon: PawPrint },
  { name: "Kilimanjaro", image: "/assets/figma/reference/destination-kilimanjaro.png", text: "Africa’s highest peak, climbed over 6–9 days on routes for every fitness level.", icon: Mountain },
  { name: "Zanzibar", image: "/assets/figma/reference/destination-zanzibar.png", text: "Endless plains and the annual wildebeest migration — one of the largest wildlife movements on Earth.", icon: TreePalm },
  { name: "Pemba", image: "/assets/figma/reference/destination-pemba.png", text: "Endless plains and the annual wildebeest migration — one of the largest wildlife movements on Earth.", icon: TreePalm },
] as const;

const planningSteps = [
  { number: "1", title: "Tell Us Your Dream Trip", text: "Share your dates, budget and interests through a quick enquiry.", icon: Send },
  { number: "2", title: "Tell Us Your Dream Trip", text: "Share your dates, budget and interests through a quick enquiry.", icon: FileText },
  { number: "3", title: "Tell Us Your Dream Trip", text: "Share your dates, budget and interests through a quick enquiry.", icon: RefreshCw },
  { number: "4", title: "Tell Us Your Dream Trip", text: "Share your dates, budget and interests through a quick enquiry.", icon: CalendarCheck },
] as const;

const reviews = [
  { image: "/assets/figma/reference/review-safari.png", quote: "Our tailor-made safari across the Serengeti and Ngorongoro Crater exceeded every expectation. Seeing the Great Migration up close was a life-changing moment. Everything was timed perfectly.", name: "Sarah & David K.", trip: "Bush & Beach Safari - 12 Days" },
  { image: "/assets/figma/reference/review-kilimanjaro.png", quote: "Climbing Mount Kilimanjaro via Lemosho was tough, but the BBM team guided us with unbelievable care and expertise. Pushing through summit night was made possible by their incredible crew.", name: "Marcus Chen", trip: "Kilimanjaro Climb Machame - 8 Days" },
  { image: "/assets/figma/reference/review-zanzibar.png", quote: "Zanzibar was pure paradise. Combining our dusty game drives with quiet, breezy beaches in Stone Town was the ultimate itinerary layout. Having a single contact made it so stress-free.", name: "Elena Petrova", trip: "Wildlife & Zanzibar - 10 Days" },
] as const;

const team = [
  { name: "Godlisten Mosha", role: "Kilimanjaro Expedition Lead", description: "Successfully summited Uhuru Peak over 120 times.", image: "/assets/figma/reference/team-godlisten.png", position: "50% 38%" },
  { name: "Naila Salim", role: "Zanzibar Experience Liaison", description: "Curates spice tours and beachfront stays.", image: "/assets/figma/reference/team-naila.png", position: "50% 45%" },
  { name: "Amos Mwanga", role: "Serengeti Safari Guide", description: "Leads Great Migration and Big Five wildlife drives.", image: "/assets/figma/reference/team-amos.png", position: "50% 42%" },
] as const;

function ArrowLink({ href, children, secondary = false }: Readonly<{ href: string; children: React.ReactNode; secondary?: boolean }>) {
  return (
    <a className={`cta-link${secondary ? " cta-link--secondary" : ""}`} href={href}>
      <span>{children}</span>
      <span className="cta-link__icon" aria-hidden="true"><ArrowUpRight /></span>
    </a>
  );
}

export default function Home() {
  return (
    <Experience>
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__pattern" aria-hidden="true" />
          <div className="shell hero__layout">
            <div className="hero__copy" data-reveal>
              <p className="kicker">Bush <i /> Beach <i /> Mountain</p>
              <h1 id="hero-title">Wildlife, Kilimanjaro &amp; Zanzibar, Tailor Made Tanzania Journey</h1>
              <p className="hero__intro">BBM Safaris is a Tanzania-based operator that plans journeys across the Serengeti and Ngorongoro Crater, up Mount Kilimanjaro, and onto the beaches of Zanzibar — combined into a single itinerary built around how you want to travel.</p>
              <div className="hero__actions">
                <ArrowLink href="#contact">Plan My Tanzania Trip</ArrowLink>
                <ArrowLink href="#tours" secondary>See more tours</ArrowLink>
              </div>
            </div>

            <div className="hero-collage" data-reveal>
              <div className="hero-collage__left image-frame">
                <Image src={assets.heroLeft} alt="Wildlife beside a safari vehicle" fill loading="eager" sizes="25.75rem" />
              </div>
              <div className="hero-collage__center image-frame">
                <Image src={assets.heroCenter} alt="Zanzibar beachfront resort and swimming pool" fill loading="eager" sizes="26.5rem" />
              </div>
              <div className="hero-collage__right image-frame">
                <Image src={assets.heroRight} alt="Trekkers on Mount Kilimanjaro" fill loading="eager" sizes="27.625rem" />
              </div>
              <div className="hero-collage__logo"><LogoMark eager /></div>
            </div>
          </div>
        </section>

        <section className="trust" aria-label="Why travel with BBM Safaris">
          <div className="shell trust__grid">
            <div><MapPin aria-hidden="true" /><p><span>Based</span>Arusha, Tanzania — not a reseller</p></div>
            <div><SlidersHorizontal aria-hidden="true" /><p><span>Built for you</span>Tailor-made, not sold off a shelf</p></div>
            <div><Layers3 aria-hidden="true" /><p><span>One trip</span>Safari + Kilimanjaro + Zanzibar, combined</p></div>
          </div>
        </section>

        <section className="section tours" id="tours">
          <div className="shell tours__layout">
            <div className="tours__copy" data-reveal>
              <h2>Explore <span className="sun-word sun-word--flag">Tanzania</span><br />Your Way</h2>
              <p>BBM Safaris is a Tanzania-based operator that plans journeys across the Serengeti and Ngorongoro Crater, up Mount Kilimanjaro, and onto the beaches of Zanzibar — combined into a single itinerary built around how you want to travel.</p>
              <div className="tours__actions">
                <ArrowLink href="#destinations">See more tours</ArrowLink>
                <a className="underlined-link" href="#destinations">See more tours <ArrowUpRight aria-hidden="true" /></a>
              </div>
            </div>
            <TourCarousel />
          </div>
        </section>

        <section className="section expertise" id="about">
          <div className="shell expertise__layout">
            <div className="expertise__copy" data-reveal>
              <p className="yellow-label">Working Process</p>
              <h2>Local Expertise. One Journey, Built Around You.</h2>
              <p>We&apos;re based in Arusha and plan every trip ourselves — parks, routes, pacing and accommodation adjusted to how you want to travel, not sold from a fixed brochure.</p>
              <ul>
                <li><Check aria-hidden="true" />Tailor-made itineraries — never a fixed, one-size package</li>
                <li><Check aria-hidden="true" />A Tanzania-based team working from Arusha</li>
                <li><Check aria-hidden="true" />Safari, Kilimanjaro and Zanzibar planned together</li>
                <li><Check aria-hidden="true" />A single point of contact from enquiry to departure</li>
              </ul>
            </div>
            <div className="expertise__visual" data-reveal>
              <div className="expertise__wash" />
              <Image src={assets.expertise} alt="Safari vehicle and wildebeest on the plains" fill sizes="(max-width: 56.25rem) 100vw, 46.375rem" />
              <div className="expertise__logo"><LogoMark /></div>
            </div>
          </div>
        </section>

        <section className="section destinations" id="destinations">
          <div className="destinations__pattern" aria-hidden="true" />
          <div className="shell">
            <div className="center-heading" data-reveal>
              <p className="section-label section-label--inverse">Where You&apos;ll Go</p>
              <h2>Signature Destinations</h2>
              <p>Every sample journey on this site draws from these six destinations — mix and match them into your own route.</p>
            </div>
            <div className="destination-grid">
              {destinations.map((destination, index) => {
                const DestinationIcon = destination.icon;

                return (
                  <article className="destination-card" key={destination.name} data-reveal style={{ transitionDelay: `${(index % 4) * 65}ms` }}>
                    <div className="destination-card__image image-frame">
                      <Image src={destination.image} alt="" fill sizes="(max-width: 38.75rem) 88vw, (max-width: 62.5rem) 44vw, 22vw" />
                      <span aria-hidden="true"><DestinationIcon /></span>
                    </div>
                    <div className="destination-card__body">
                      <h3>{destination.name}</h3>
                      <p>{destination.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section planning" id="plan">
          <div className="shell planning__layout">
            <div className="planning__content">
              <div data-reveal>
                <p className="yellow-label">Working Process</p>
                <h2>How We Plan Your Trip?</h2>
              </div>
              <ol className="planning-steps">
                {planningSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.number} data-reveal style={{ transitionDelay: `${index * 60}ms` }}>
                      <Icon aria-hidden="true" />
                      <strong>{step.number}</strong>
                      <div><h3>{step.title}</h3><p>{step.text}</p></div>
                    </li>
                  );
                })}
              </ol>
              <div className="planning__closing" data-reveal>
                <h3>How We Plan Your Trip?</h3>
                <p>Endless plains and the annual wildebeest migration — one of the largest wildlife movements on Earth.</p>
                <div>
                  <ArrowLink href="#contact">Plan My Tanzania Trip</ArrowLink>
                  <a href="mailto:info@bbmsafaris.com"><Mail aria-hidden="true" /> info@bbmsafaris.com</a>
                  <a href="tel:+255757662052"><Phone aria-hidden="true" /> +255 757 662 052</a>
                </div>
              </div>
            </div>

            <div className="planning-collage" aria-hidden="true" data-reveal>
              <div className="planning-collage__top image-frame"><Image src={assets.planningTop} alt="" fill sizes="28.3125rem" /></div>
              <div className="planning-collage__main image-frame"><Image src={assets.planningMain} alt="" fill sizes="41.5rem" /></div>
              <div className="planning-collage__bottom image-frame"><Image src={assets.planningBottom} alt="" fill sizes="28.3125rem" /></div>
            </div>
          </div>
        </section>

        <section className="section testimonials" aria-labelledby="reviews-title">
          <div className="shell">
            <div className="center-heading center-heading--dark" data-reveal>
              <p className="yellow-label">Reviews</p>
              <h2 id="reviews-title">What Our Travelers Say</h2>
              <p className="verified">
                <Image src="/assets/tripadvisor-icon.png" alt="" width={24} height={24} aria-hidden="true" />
                Verified by TripAdvisor
              </p>
            </div>
            <div className="review-grid">
              {reviews.map((review, index) => (
                <article className="review-card" key={review.name} data-reveal style={{ transitionDelay: `${index * 75}ms` }}>
                  <div className="review-card__image image-frame"><Image src={review.image} alt="" fill sizes="(max-width: 47.5rem) 88vw, 31vw" /></div>
                  <div className="review-card__content">
                    <div className="stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, star) => <Star key={star} aria-hidden="true" />)}</div>
                    <blockquote>“{review.quote}”</blockquote>
                    <footer><strong>{review.name}</strong><span>{review.trip}</span></footer>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section team" aria-labelledby="team-title">
          <div className="shell team__layout">
            <div className="team__intro" data-reveal>
              <p className="section-label section-label--inverse">Our Local Experts</p>
              <h2 id="team-title">Meet Our Team</h2>
              <p>“Our tailor-made safari across the Serengeti and Ngorongoro Crater exceeded every expectation. Seeing the Great Migration up close was a life-changing moment.”</p>
              <ArrowLink href="#contact">Plan My Tanzania Trip</ArrowLink>
            </div>
            <div className="team__cards">
              {team.map((person, index) => (
                <article className="team-card" key={person.name} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
                  <div className="team-card__image image-frame"><Image src={person.image} alt={person.name} fill sizes="(max-width: 47.5rem) 70vw, 17.5rem" style={{ objectPosition: person.position }} /></div>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                  <span>{person.description}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact__layout">
            <div className="contact__content" data-reveal>
              <p className="section-label">Start planning</p>
              <h2>Your <span className="sun-word sun-word--flag">Tanzania</span> adventure starts with one message.</h2>
              <p>Tell us where you want to go, how long you have, and what kind of traveler you are. We&apos;ll take care of the rest — routes, permits, gear, guides, and every detail in between.</p>
              <InquiryForm />
            </div>
            <div className="contact__visual" data-reveal>
              <Image src={assets.contact} alt="Zebras on the Tanzanian savanna beneath Mount Kilimanjaro" fill sizes="(max-width: 56.25rem) 100vw, 53rem" />
              <div className="contact__logo"><Image src={assets.contactLogo} alt="BBM Tours Company Limited" fill sizes="25rem" /></div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="shell footer__grid">
            <div className="footer__brand"><LogoMark /><p>Based in Arusha, Tanzania. We specialize in tailor-made private tours combining the legendary northern circuit parks, mountain climbing, and idyllic Indian Ocean islands.</p></div>
            <div><h2>Tours</h2><a href="#tours">Classic Safari</a><a href="#tours">Kilimanjaro Routes</a><a href="#tours">Zanzibar Getaway</a><a href="#contact">Custom Itineraries</a></div>
            <div><h2>Locations</h2><a href="#destinations">Serengeti</a><a href="#destinations">Ngorongoro Crater</a><a href="#destinations">Mount Kilimanjaro</a><a href="#destinations">Stone Town</a></div>
            <div><h2>Contact Us</h2><a href="mailto:info@bbmsafaris.com"><Mail aria-hidden="true" />info@bbmsafaris.com</a><a href="tel:+255757662052"><Phone aria-hidden="true" />+255 757 662 052</a><p>Arusha, Tanzania — Gateway to Safari</p></div>
          </div>
          <div className="shell footer__bottom"><span>© 2026 BBM Safaris Limited. All rights reserved. Registered Operator in Tanzania.</span><nav aria-label="Social media"><a href="#top">Facebook</a><a href="#top">Instagram</a><a href="#top">TripAdvisor</a></nav></div>
        </footer>
      </main>
    </Experience>
  );
}
