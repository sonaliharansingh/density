"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Icon from "@/components/Icon";
import styles from "./page.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);

    const value = (key: string) => String(data.get(key) ?? "").trim();

    const name = value("name");
    const email = value("email");
    const details = value("details");

    if (!name || !email || details.length < 10) {
      setStatus("error");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          email,
          company: value("company") || "Not provided",
          phone: value("phone") || "Not provided",
          needs: data.getAll("needs").join(", ") || "To be discussed",
          details,
          flow: value("flow") || "Not provided",
          temperature: value("temperature") || "Not provided",
          existing: value("existing") || "Not provided",
        },
        { publicKey },
      );

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setStatus("error");
    }
  }

  return (
    <section className={styles.formCard} aria-labelledby="enquiry-heading">
      <div className={styles.formHeader}>
        <span className={styles.kicker}>
          YOUR NEXT STEP TOWARDS CLEANER AIR
        </span>
        <span className={styles.time}>~ 2 MINUTES</span>
      </div>
      <h2 id="enquiry-heading">Let’s talk about your project.</h2>
      <p className={styles.formIntro}>
        Share a few details. We’ll take it from there.
      </p>
      <form
        onSubmit={sendEmail}
        aria-busy={status === "sending"}
        onChange={() => {
          if (status === "success" || status === "error") {
            setStatus("idle");
          }
        }}
      >
        <div className={styles.formSectionTitle}>
          <span>01</span> A little about you <small>* Required</small>
        </div>
        <div className={styles.fields}>
          <label className={styles.focusField}>
            <span className={styles.fieldLabel}>
              Full name <span>*</span>
            </span>
            <input
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              pattern=".*\S.*"
              placeholder="Full name *"
            />
          </label>
          <label className={styles.focusField}>
            <span className={styles.fieldLabel}>Company</span>
            <input
              name="company"
              autoComplete="organization"
              maxLength={120}
              placeholder="Company"
            />
          </label>
          <label className={styles.focusField}>
            <span className={styles.fieldLabel}>
              Work email <span>*</span>
            </span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={160}
              placeholder="Work email *"
            />
          </label>
          <label className={styles.focusField}>
            <span className={styles.fieldLabel}>Phone number</span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
              placeholder="Phone number"
            />
          </label>
        </div>
        {/* <div className={styles.formSectionTitle}><span>02</span> Your treatment requirements</div>
        <label className={styles.fullField}>Application<select name="application" defaultValue=""><option value="" disabled>Select your application</option><option>Industrial manufacturing</option><option>Laboratory</option><option>Research facility</option><option>Other / exploring options</option></select></label> */}
        <fieldset className={styles.needs}>
          <legend>What can we help you with?</legend>
          <div>
            {[
              "VOC treatment",
              "Odour control",
              "System integration",
              "Not sure yet",
            ].map((need) => (
              <label key={need}>
                <input type="checkbox" name="needs" value={need} />
                <span>{need}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <label className={`${styles.fullField} ${styles.focusField}`}>
          <span className={styles.fieldLabel}>
            Process / gas details <span>*</span>
          </span>
          <textarea
            name="details"
            required
            minLength={10}
            maxLength={1500}
            rows={4}
            placeholder="Process / gas details *"
            aria-describedby="details-hint"
          />
        </label>
        <p id="details-hint" className={styles.fieldHint}>
          At least 10 characters. Estimates are welcome — exact specifications
          can follow.
        </p>
        <details className={styles.technical}>
          <summary>
            <span>
              Have technical specifications? <small>Optional</small>
            </span>
            <span className={styles.plus} aria-hidden="true">
              +
            </span>
          </summary>
          <div className={styles.fields}>
            <label className={styles.focusField}>
              <span className={styles.fieldLabel}>Gas flow rate (m³/h)</span>
              <input
                name="flow"
                type="number"
                min="0"
                step="any"
                placeholder="Gas flow rate (m³/h)"
              />
            </label>
            <label className={styles.focusField}>
              <span className={styles.fieldLabel}>Gas temperature (°C)</span>
              <input
                name="temperature"
                type="number"
                min="-273.15"
                step="any"
                placeholder="Gas temperature (°C)"
              />
            </label>
            <label className={`${styles.wide} ${styles.focusField}`}>
              <span className={styles.fieldLabel}>Existing treatment</span>
              <input
                name="existing"
                maxLength={200}
                placeholder="Existing treatment"
              />
            </label>
          </div>
        </details>
        <button
          className={styles.submit}
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send enquiry"}
          <Icon name="arrow" />
        </button>

        <p className={styles.emailNote}>
          Your enquiry will be sent directly to the densitY Sustaintech team.
        </p>

        <div role="status" aria-live="polite">
          {status === "success" && (
            <p className={styles.feedback}>
              Thank you! Your enquiry has been sent successfully. Our team will
              get back to you.
            </p>
          )}

          {status === "error" && (
            <p className={styles.feedback}>
              We couldn&apos;t send your enquiry. Check your name, email, and
              message, then try again. Your message should contain at least 10
              non-space characters. You can also email{" "}
              <a href="mailto:jagadish@densitysustaintech.com">
                jagadish@densitysustaintech.com
              </a>{" "}
              directly.
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
