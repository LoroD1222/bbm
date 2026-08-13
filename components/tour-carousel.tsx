"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Journey } from "@/lib/journeys";
import { tripTypeLabel } from "@/lib/trip-options";
import { TripTypeIcon } from "./trip-type-icon";

export function TourCarousel({ tours }: Readonly<{ tours: readonly Journey[] }>) {
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
        {tours.map((tour, index) => {
          const href = `/tours/${tour.slug}`;

          return (
            <Link className="tour-card" href={href} aria-label={`View ${tour.title}`} key={tour.slug}>
              <div className={`tour-card__image${tour.image ? "" : " tour-card__image--placeholder"}`}>
                {tour.image && <Image src={tour.image} alt={tour.title} fill priority={index === 0} sizes="(max-width: 47.5rem) 82vw, 23rem" />}
                <span><TripTypeIcon tripType={tour.category} aria-hidden="true" />{tripTypeLabel[tour.category]}</span>
              </div>
              <div className="tour-card__body">
                <p><CalendarDays aria-hidden="true" />{tour.duration}</p>
                <h3>{tour.title}</h3>
                <strong><span>From</span>{tour.price}</strong>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
