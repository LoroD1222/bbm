"use client";

import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";

type FormValues = { name: string; email: string; dates: string; travellers: string; message: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: "", email: "", dates: "", travellers: "", message: "" };

export function JourneyForm({ title = "Plan Your Journey", buttonLabel = "Get Started Now" }: Readonly<{ title?: string; buttonLabel?: string }>) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Enter a valid email address.";
    if (!values.dates.trim()) nextErrors.dates = "Tell us when you would like to travel.";
    if (!values.travellers.trim()) nextErrors.travellers = "Enter your group size.";
    if (Object.keys(nextErrors).length) { setErrors(nextErrors); return; }
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 700);
  };

  if (status === "success") {
    return <div className="journey-form journey-form--success" role="status" aria-live="polite"><CheckCircle2 aria-hidden="true" /><h3>Thank you — your journey starts here.</h3><p>Our Arusha team will reply within one working day.</p><button type="button" onClick={() => { setValues(initialValues); setStatus("idle"); }}>Send another enquiry</button></div>;
  }

  return (
    <form className="journey-form" onSubmit={submit} noValidate aria-label={title}>
      <h3>{title}</h3>
      <div className="journey-form__grid">
        <label><span>Full Name</span><input value={values.name} onChange={(event) => update("name", event.target.value)} placeholder="Your Name" autoComplete="name" aria-invalid={Boolean(errors.name)} />{errors.name && <em>{errors.name}</em>}</label>
        <label><span>Email Address</span><input value={values.email} onChange={(event) => update("email", event.target.value)} placeholder="Your Email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} />{errors.email && <em>{errors.email}</em>}</label>
        <label><span>Preferred Travel Dates</span><input value={values.dates} onChange={(event) => update("dates", event.target.value)} placeholder="Select dates" aria-invalid={Boolean(errors.dates)} />{errors.dates && <em>{errors.dates}</em>}</label>
        <label><span>Number of Travellers</span><input value={values.travellers} onChange={(event) => update("travellers", event.target.value)} placeholder="e.g. 2 Adults, 1 Child" inputMode="numeric" aria-invalid={Boolean(errors.travellers)} />{errors.travellers && <em>{errors.travellers}</em>}</label>
        <label className="journey-form__wide"><span>Describe your dream itinerary</span><textarea value={values.message} onChange={(event) => update("message", event.target.value)} placeholder="Include travel preferences, places you want to visit, or custom budgets..." /></label>
      </div>
      <button className="journey-form__submit" type="submit" disabled={status === "loading"}>{status === "loading" ? <><LoaderCircle className="spinner" aria-hidden="true" /> Sending…</> : <>{buttonLabel}<ArrowUpRight aria-hidden="true" /></>}</button>
    </form>
  );
}
