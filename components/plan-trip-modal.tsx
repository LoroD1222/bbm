"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { InquiryForm } from "./inquiry-form";

const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function PlanTripModal({ children }: Readonly<{ children: ReactNode }>) {
  const [isOpen, setIsOpen] = useState(false);
  const openerRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => dialogRef.current?.querySelector<HTMLElement>("input")?.focus(), 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector));
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

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      openerRef.current?.focus();
    };
  }, [isOpen]);

  const openFromTrigger = (event: MouseEvent<HTMLDivElement>) => {
    const trigger = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-plan-trip]") : null;
    if (!trigger) return;

    event.preventDefault();
    openerRef.current = trigger;
    window.setTimeout(() => setIsOpen(true), 0);
  };

  return (
    <div onClickCapture={openFromTrigger}>
      {children}
      {isOpen && (
        <div className="plan-trip-modal" role="presentation" onMouseDown={close}>
          <div className="plan-trip-modal__dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="plan-trip-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="plan-trip-modal__close" type="button" onClick={close} aria-label="Close trip planner form"><X aria-hidden="true" /></button>
            <p className="plan-trip-modal__eyebrow">Free, no commitment</p>
            <h2 id="plan-trip-modal-title">Let&apos;s plan your Tanzania journey</h2>
            <p className="plan-trip-modal__intro">Tell us the basics and our Arusha team will reply within one working day.</p>
            <InquiryForm title="Start planning" buttonLabel="Talk to a trip planner" />
            <p className="plan-trip-modal__note">Your details stay with BBM Safaris. No obligation to book.</p>
          </div>
        </div>
      )}
    </div>
  );
}
