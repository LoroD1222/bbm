"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((index) => (index === null ? 0 : (index + 1) % items.length));
      if (event.key === "ArrowLeft") setActiveIndex((index) => (index === null ? 0 : (index - 1 + items.length) % items.length));
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, items.length]);

  const activeItem = activeIndex === null ? null : items[activeIndex];

  return (
    <>
      <div className="detail-gallery__grid" data-reveal>
        {items.map((item, index) => (
          <button className="detail-gallery__item" type="button" key={item.src} onClick={() => setActiveIndex(index)} aria-label={`Expand ${item.label}`}>
            <Image src={item.src} alt={item.alt} fill sizes={index === 0 ? "45rem" : "27.5rem"} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {activeItem && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`${activeItem.label} enlarged view`} onClick={() => setActiveIndex(null)}>
          <div className="gallery-lightbox__panel" onClick={(event) => event.stopPropagation()}>
            <button className="gallery-lightbox__close" type="button" onClick={() => setActiveIndex(null)} aria-label="Close gallery"><X aria-hidden="true" /></button>
            <button className="gallery-lightbox__nav gallery-lightbox__nav--prev" type="button" onClick={() => setActiveIndex((activeIndex! - 1 + items.length) % items.length)} aria-label="Previous image"><ChevronLeft aria-hidden="true" /></button>
            <div className="gallery-lightbox__image"><Image src={activeItem.src} alt={activeItem.alt} fill sizes="90vw" priority /></div>
            <button className="gallery-lightbox__nav gallery-lightbox__nav--next" type="button" onClick={() => setActiveIndex((activeIndex! + 1) % items.length)} aria-label="Next image"><ChevronRight aria-hidden="true" /></button>
            <p>{activeItem.label}</p>
          </div>
        </div>
      )}
    </>
  );
}
