import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ASTRA Models | densitY Sustaintech",
  description:
    "ASTRA waste gas treatment models for industrial, laboratory and mobile solutions.",
};

const modelTypes = [
  { name: "INDUSTRY", accent: "SOLUTIONS", icon: "factory" },
  { name: "LABORATORY", accent: "SOLUTIONS", icon: "lab", badge: "OTE" },
  { name: "MOBILE", accent: "SOLUTIONS", icon: "mobile", badge: "OTE" },
];

const coverage = [
  <><strong>Wide Industry Coverage</strong><br />Pharma &amp; BioPharma, Electronics, Semicon, Specialty Chemical, Petrochemical, Power, Cement, Steel, Automotive etc.</>,
  <><strong>Adapts to diverse VOC and odour treatment applications.</strong></>,
  <><strong>Application-Specific Engineering:</strong> Multiple process conditions and gas streams.</>,
];

const capabilities = [
  <><strong>Plug-and-Play Modular Design:</strong> Clean, compact, and scalable system architecture</>,
  <><strong>Power-Only Technology:</strong> No fuel, water, chemicals, or secondary waste generation</>,
  <><strong>Sustainable High-Efficiency Operation:</strong> Reliable performance, low operating costs and minimal footprint</>,
];

const companionBenefits = [
  "No Water Consumption, Wastewater Generation, Carbon Media Replacement or Chemical Dosing",
  "Point-of-source Treatment",
  "Compact & Retrofit Friendly",
  "Low Maintenance Operation",
];

const companionFeatures = [
  "Broad VOC Compatibility",
  "Enhanced EHS Performance",
  "Sustainability-driven Design",
  "Lower Total Cost of Ownership",
];

const onTheGoBenefits = [
  "Provides flexibility to move around in the industry unit",
  "No combustion; no flame/flare needed",
  "Works at ambient temperature (ATP)",
  "Suitable for low-concentration VOC streams",
];

const onTheGoFeatures = [
  "Broad VOC Compatibility",
  "Enhanced EHS Performance",
  "Compact system; good for loading racks",
  "No recycling or ETP treatment",
];

function ModelIcon({ type }: { type: string }) {
  if (type === "factory") {
    return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 26V13l8 4v-6l8 5V7h5v19H5Zm4-7v2m5-1v2m5-1v2m-9-9 3 1m5 1 3 1M3 27h26" /></svg>;
  }
  if (type === "lab") {
    return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M11 4h6m-5 0v8l-5 10a3 3 0 0 0 3 4h9a3 3 0 0 0 3-4l-5-10V4m-9 15h16M23 5h5v8h-5zM24 16h4v10h-4z" /></svg>;
  }
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 11h16v13H4zM20 15h5l4 5v4h-9M8 24a3 3 0 1 0 6 0m9 0a3 3 0 1 0 6 0M7 14v6h7v-6m9 4h3" /></svg>;
}

export default function ModelsPage() {
  return (
    <main id="main-content" className={`content-page ${styles.page}`}>
      <div className="header-container">
        <div className={styles.models} aria-label="ASTRA model types">
          {modelTypes.map((model) => (
            <article className={styles.model} key={model.name}>
              <Image src="/images/ASTRA Logo.png" alt="ASTRA" width={240} height={75} className={styles.logo} />
              {model.badge && <span className={styles.badge}>{model.badge}</span>}
              <div className={styles.modelInfo}>
                <span className={styles.icon}><ModelIcon type={model.icon} /></span>
                <p><span>{model.name}</span><br /><em>{model.accent}</em></p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <section className={styles.solution} aria-labelledby="models-title">
        <div className="header-container">
          <h1 id="models-title">One-of-a-kind Industrial Solution</h1>
          <div className={styles.columns}>
          <div className={styles.column}>
            <ul className={styles.bullets}>
              {coverage.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <figure className={`${styles.photo} ${styles.lowerPhoto}`}>
              <Image src="/images/Petrochemcial Image.png" alt="ASTRA waste gas treatment system installed at an industrial facility" width={600} height={450} sizes="(max-width: 700px) 100vw, 48vw" />
              <figcaption>Compatible with Industrial Automation.<br />Configurable with PLC &amp; DCS.</figcaption>
            </figure>
          </div>
          <div className={styles.column}>
            <figure className={`${styles.photo} ${styles.upperPhoto}`}>
              <Image src="/images/Pharmaceutical Image.png" alt="ASTRA waste gas treatment system at a facility" width={600} height={450} sizes="(max-width: 700px) 100vw, 48vw" />
            </figure>
            <ul className={styles.bullets}>
              {capabilities.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          </div>
        </div>
      </section>

      <section className={`${styles.solution} ${styles.companion}`} aria-labelledby="companion-title">
        <div className="header-container">
          <h2 id="companion-title">Fume Hood Companion</h2>
          <div className={styles.columns}>
            <div className={styles.column}>
              <ul className={styles.bullets}>
                {companionBenefits.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <figure className={`${styles.photo} ${styles.lowerPhoto}`}>
                <Image src="/images/ASTRA OTT Image 2.png" alt="Compact ASTRA treatment unit installed beside a laboratory fume hood" width={3600} height={2026} sizes="(max-width: 700px) 100vw, 48vw" />
                <figcaption>Destruction of Pollutants.<br />Not Transfer.</figcaption>
              </figure>
            </div>
            <div className={styles.column}>
              <figure className={`${styles.photo} ${styles.upperPhoto}`}>
                <Image src="/images/ASTRA OTT Image 1.png" alt="Laboratory fume hoods connected to the ASTRA treatment system" width={3600} height={2523} sizes="(max-width: 700px) 100vw, 48vw" />
              </figure>
              <ul className={styles.bullets}>
                {companionFeatures.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.solution} ${styles.companion}`} aria-labelledby="on-the-go-title">
        <div className="header-container">
          <h2 id="on-the-go-title">The perfect on-the-go unit</h2>
          <div className={styles.columns}>
            <div className={styles.column}>
              <ul className={styles.bullets}>
                {onTheGoBenefits.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <figure className={`${styles.photo} ${styles.lowerPhoto}`}>
                <Image src="/images/ASTRA OTG Image 2.png" alt="Compact mobile ASTRA treatment unit" width={4090} height={2475} sizes="(max-width: 700px) 100vw, 48vw" />
                <figcaption>Mobile shield against<br />Hazardous VOC exposure.</figcaption>
              </figure>
            </div>
            <div className={styles.column}>
              <figure className={`${styles.photo} ${styles.upperPhoto}`}>
                <Image src="/images/ASTRA OTG Image 1.png" alt="ASTRA mobile treatment unit deployed beside an industrial tanker" width={1536} height={1024} sizes="(max-width: 700px) 100vw, 48vw" />
              </figure>
              <ul className={styles.bullets}>
                {onTheGoFeatures.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <Link className={styles.interested} href="/contact">I AM<br />INTERESTED</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
