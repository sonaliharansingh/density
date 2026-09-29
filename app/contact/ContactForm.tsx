"use client";

import { useState, type FormEvent } from "react";
import Icon from "@/components/Icon";
import styles from "./page.module.css";

export default function ContactForm() {
  const [prepared, setPrepared] = useState(false);
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) || "Not provided").trim();
    const body = ["Hello densitY Sustaintech team,", "", "I’d like to discuss an ASTRA treatment solution.", "", `Name: ${value("name")}`, `Company: ${value("company")}`, `Email: ${value("email")}`, `Phone: ${value("phone")}`, `Application: ${value("application")}`, `Treatment needs: ${data.getAll("needs").join(", ") || "To be discussed"}`, "", "Process / gas details:", value("details"), "", `Gas flow rate (m³/h): ${value("flow")}`, `Temperature (°C): ${value("temperature")}`, `Existing treatment: ${value("existing")}`].join("\n");
    window.location.href = `mailto:jagadish@densitysustaintech.com?subject=${encodeURIComponent(`ASTRA enquiry — ${value("company") === "Not provided" ? value("name") : value("company")}`)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }

  return (
    <section className={styles.formCard} aria-labelledby="enquiry-heading">
      <div className={styles.formHeader}><span className={styles.kicker}>YOUR NEXT STEP TOWARDS CLEANER AIR</span><span className={styles.time}>~ 2 MINUTES</span></div>
      <h2 id="enquiry-heading">Let’s talk about your project.</h2>
      <p className={styles.formIntro}>Share a few details. We’ll take it from there.</p>
      <form onSubmit={prepareEmail} onChange={() => setPrepared(false)}>
        <div className={styles.formSectionTitle}><span>01</span> A little about you <small>* Required</small></div>
        <div className={styles.fields}>
          <label className={styles.focusField}><span className={styles.fieldLabel}>Full name <span>*</span></span><input name="name" autoComplete="name" required maxLength={100} pattern=".*\S.*" placeholder="Full name *" /></label>
          <label className={styles.focusField}><span className={styles.fieldLabel}>Company</span><input name="company" autoComplete="organization" maxLength={120} placeholder="Company" /></label>
          <label className={styles.focusField}><span className={styles.fieldLabel}>Work email <span>*</span></span><input name="email" type="email" autoComplete="email" required maxLength={160} placeholder="Work email *" /></label>
          <label className={styles.focusField}><span className={styles.fieldLabel}>Phone number</span><input name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="Phone number" /></label>
        </div>
        {/* <div className={styles.formSectionTitle}><span>02</span> Your treatment requirements</div>
        <label className={styles.fullField}>Application<select name="application" defaultValue=""><option value="" disabled>Select your application</option><option>Industrial manufacturing</option><option>Laboratory</option><option>Research facility</option><option>Other / exploring options</option></select></label> */}
        <fieldset className={styles.needs}><legend>What can we help you with?</legend><div>{["VOC treatment", "Odour control", "System integration", "Not sure yet"].map(need => <label key={need}><input type="checkbox" name="needs" value={need} /><span>{need}</span></label>)}</div></fieldset>
        <label className={`${styles.fullField} ${styles.focusField}`}><span className={styles.fieldLabel}>Process / gas details <span>*</span></span><textarea name="details" required minLength={10} maxLength={1500} rows={4} placeholder="Process / gas details *" aria-describedby="details-hint" /></label>
        <p id="details-hint" className={styles.fieldHint}>At least 10 characters. Estimates are welcome — exact specifications can follow.</p>
        <details className={styles.technical}><summary><span>Have technical specifications? <small>Optional</small></span><span className={styles.plus} aria-hidden="true">+</span></summary><div className={styles.fields}><label className={styles.focusField}><span className={styles.fieldLabel}>Gas flow rate (m³/h)</span><input name="flow" type="number" min="0" step="any" placeholder="Gas flow rate (m³/h)" /></label><label className={styles.focusField}><span className={styles.fieldLabel}>Gas temperature (°C)</span><input name="temperature" type="number" min="-273.15" step="any" placeholder="Gas temperature (°C)" /></label><label className={`${styles.wide} ${styles.focusField}`}><span className={styles.fieldLabel}>Existing treatment</span><input name="existing" maxLength={200} placeholder="Existing treatment" /></label></div></details>
        <button className={styles.submit} type="submit">Prepare enquiry email <Icon name="arrow" /></button>
        <p className={styles.emailNote}>Opens a draft in your email app. Review and send it to share your enquiry with our team.</p>
        <div role="status" aria-live="polite">{prepared && <p className={styles.feedback}>Your email draft is ready to open. Please send it from your email app to complete your enquiry. If no app opens, email <a href="mailto:jagadish@densitysustaintech.com">jagadish@densitysustaintech.com</a> directly. Your details remain here for reference.</p>}</div>
      </form>
    </section>
  );
}
