"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, CalendarDays, Mountain, PawPrint, TreePalm } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const tours = [
  { name: "Zanzibar Beach Escape", tag: "Beach", duration: "5 days / 4 nights", price: "$1,890 USD", image: "/assets/figma/reference/tour-beach.png", icon: TreePalm },
  { name: "Kilimanjaro Summit Trek", tag: "Trekking", duration: "10 days / 9 nights", price: "$4,250 USD", image: "/assets/figma/reference/tour-kilimanjaro.png", icon: Mountain },
  { name: "Ngorongoro Crater Safari", tag: "Wildlife", duration: "4 days / 3 nights", price: "$3,120 USD", image: "/assets/figma/reference/tour-wildlife.png", icon: PawPrint },
  { name: "Serengeti Migration Safari", tag: "Wildlife", duration: "7 days / 6 nights", price: "$2,800 USD", image: "/assets/figma/pages/trip-08.png", icon: PawPrint },
  { name: "Serengeti & Zanzibar Escape", tag: "Safari + Beach", duration: "10 days / 9 nights", price: "$3,200 USD", image: "/assets/figma/pages/trip-07.png", icon: TreePalm },
] as const;

export function TourCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  const updateControls = useCallback(() => {
    const element = track.current;
    if (!element) return;

    const tolerance = 2;
    setHasOverflow(element.scrollWidth > element.clientWidth + tolerance);
  }, []);

  useEffect(() => {
    const element = track.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver(updateControls);
    resizeObserver.observe(element);
    element.addEventListener("scroll", updateControls, { passive: true });
    updateControls();

    return () => {
      resizeObserver.disconnect();
      element.removeEventListener("scroll", updateControls);
    };
  }, [updateControls]);

  const move = (direction: -1 | 1) => {
    const element = track.current;
    if (!element) return;

    const firstCard = element.querySelector<HTMLElement>(".tour-card");
    const gap = Number.parseFloat(getComputedStyle(element).columnGap) || 0;
    const distance = (firstCard?.getBoundingClientRect().width ?? element.clientWidth * 0.82) + gap;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const maxScroll = element.scrollWidth - element.clientWidth;
    const atStart = element.scrollLeft <= 2;
    const atEnd = element.scrollLeft >= maxScroll - 2;
    const nextPosition = direction === 1 && atEnd
      ? 0
      : direction === -1 && atStart
        ? maxScroll
        : Math.min(maxScroll, Math.max(0, element.scrollLeft + direction * distance));

    element.scrollTo({ left: nextPosition, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <div className="tour-carousel" data-reveal>
      <div className="tour-carousel__edge-gradient" aria-hidden="true">
        <Image src="/assets/gradinet_7.png" alt="" fill sizes="15rem" />
      </div>
      <div className="tour-carousel__controls" aria-label="Featured tour controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous tour" disabled={!hasOverflow}><ArrowLeft aria-hidden="true" /></button>
        <button type="button" onClick={() => move(1)} aria-label="Next tour" disabled={!hasOverflow}><ArrowRight aria-hidden="true" /></button>
      </div>
      <div className="tour-carousel__track" ref={track}>
        {tours.map((tour) => {
          const TourIcon = tour.icon;

          return (
            <article className="tour-card" key={tour.name}>
              <div className="tour-card__image">
                <Image src={tour.image} alt={tour.name} fill sizes="(max-width: 47.5rem) 82vw, 23rem" />
                <span><TourIcon aria-hidden="true" />{tour.tag}</span>
              </div>
              <div className="tour-card__body">
                <p><CalendarDays aria-hidden="true" />{tour.duration}</p>
                <h3>{tour.name}</h3>
                <strong><span>From</span>{tour.price}</strong>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
