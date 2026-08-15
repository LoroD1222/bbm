"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type GalleryLightboxItem = {
  src: string;
  alt: string;
  label: string;
};

type GalleryLightboxProps = {
  items: readonly GalleryLightboxItem[];
};

export function GalleryLightbox({ items }: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const captionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setActiveIndex(null);
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((index) => (index === null ? 0 : (index + 1) % items.length));
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((index) => (index === null ? 0 : (index - 1 + items.length) % items.length));
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLButtonElement>("button:not([disabled])"));
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable.at(-1)!;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      openerRef.current?.focus();
    };
  }, [isOpen, items.length]);

  const activeItem = activeIndex === null ? null : items[activeIndex];

  return (
    <>
      <div className="detail-gallery__grid" data-reveal>
        {items.map((item, index) => (
          <button
            className="detail-gallery__item"
            type="button"
            key={`${item.src}-${index}`}
            onClick={(event) => {
              openerRef.current = event.currentTarget;
              setActiveIndex(index);
            }}
            aria-label={`Open image ${index + 1} of ${items.length}: ${item.label}`}
          >
            <Image src={item.src} alt={item.alt} fill sizes={index === 0 ? "45rem" : "27.5rem"} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {activeItem && (
        <div className="gallery-lightbox" role="presentation" onMouseDown={() => setActiveIndex(null)}>
          <div className="gallery-lightbox__panel" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={captionId} onMouseDown={(event) => event.stopPropagation()}>
            <button ref={closeButtonRef} className="gallery-lightbox__close" type="button" onClick={() => setActiveIndex(null)} aria-label="Close gallery"><X aria-hidden="true" /></button>
            {items.length > 1 && <button className="gallery-lightbox__nav gallery-lightbox__nav--prev" type="button" onClick={() => setActiveIndex((index) => (index === null ? 0 : (index - 1 + items.length) % items.length))} aria-label="Previous image"><ChevronLeft aria-hidden="true" /></button>}
            <div className="gallery-lightbox__image"><Image src={activeItem.src} alt={activeItem.alt} fill sizes="90vw" priority /></div>
            {items.length > 1 && <button className="gallery-lightbox__nav gallery-lightbox__nav--next" type="button" onClick={() => setActiveIndex((index) => (index === null ? 0 : (index + 1) % items.length))} aria-label="Next image"><ChevronRight aria-hidden="true" /></button>}
            <p id={captionId} aria-live="polite">{activeItem.label} <span>{(activeIndex ?? 0) + 1} / {items.length}</span></p>
          </div>
        </div>
      )}
    </>
  );
}
