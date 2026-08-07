"use client";

import { CheckCircle2, LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  trip: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = { name: "", email: "", phone: "", trip: "" };

export function InquiryForm() {
  const [values, setValues] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const update = (key: keyof FormState, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Enter a valid email address.";
    if (!values.trip) nextErrors.trip = "Choose the kind of trip you are planning.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 650);
  };

  if (status === "success") {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <CheckCircle2 aria-hidden="true" />
        <strong>Your enquiry is on its way.</strong>
        <p>Our Arusha team will be in touch within one working day.</p>
        <button className="text-button" type="button" onClick={() => { setValues(initialForm); setStatus("idle"); }}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="inquiry-form" noValidate onSubmit={handleSubmit} aria-label="Plan your Tanzania trip">
      <h3>Plan Your Trip</h3>
      <div className="inquiry-form__grid">
        <label>
          <span>Full Name</span>
          <input value={values.name} onChange={(event) => update("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} placeholder="Full Name" autoComplete="name" />
          {errors.name && <em id="name-error">{errors.name}</em>}
        </label>
        <label>
          <span>Email Address</span>
          <input value={values.email} onChange={(event) => update("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} placeholder="Email" type="email" autoComplete="email" />
          {errors.email && <em id="email-error">{errors.email}</em>}
        </label>
        <label>
          <span>Phone Number <small>(optional)</small></span>
          <input value={values.phone} onChange={(event) => update("phone", event.target.value)} placeholder="Phone Number" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>Select Your Trip</span>
          <select value={values.trip} onChange={(event) => update("trip", event.target.value)} aria-invalid={Boolean(errors.trip)} aria-describedby={errors.trip ? "trip-error" : undefined}>
            <option value="">Select Your Trip</option>
            <option value="safari">Classic safari</option>
            <option value="kilimanjaro">Kilimanjaro trek</option>
            <option value="zanzibar">Zanzibar escape</option>
            <option value="tailor">A tailor-made journey</option>
          </select>
          {errors.trip && <em id="trip-error">{errors.trip}</em>}
        </label>
      </div>
      <button className="inquiry-form__submit" type="submit" disabled={status === "loading"}>
        {status === "loading" ? <><LoaderCircle className="spinner" aria-hidden="true" /> Sending…</> : "Get Started"}
      </button>
    </form>
  );
}
