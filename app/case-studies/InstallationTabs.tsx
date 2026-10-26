"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const installations = [
  {
    industry: "Pharmaceutical",
    icon: "/images/Pharmaceutical Icon.png",
    image: "/images/ASTRA Industry Image 1.png",
    products:
      "Human & veterinary drugs with a primary focus on antibiotic APIs, synthetic drugs formulations",
    gases: "VOCs & odorous compounds",
    outcome:
      ">90% treatment efficiency, reducing exhaust concentration to 0–59 mg/m³.",
  },
  {
    industry: "Specialty Chemical",
    icon: "/images/Specialty Chemical Icon.png",
    image: "/images/ASTRA_Spl Chemical.png",
    products:
      "Nitrosylsulfuric acid, Acrylonitrile, m-Aminoacetanilide, 1-Aminoanthraquinone, N-Diallyl-2-methoxy-5-acetaminoaniline, etc.",
    gases: "VOCs",
    outcome:
      ">98% VOC removal, reducing exhaust concentration from 9,837–14,682 mg/m³ to 89.5–246 mg/m³.",
  },
  {
    industry: "Petrochemical",
    icon: "/images/Petrochemcial Icon.png",
    image: "/images/ASTRA Industry Image 2.png",
    products:
      "Butene, MTBE, Mixed C4 Hydrocarbon, Mixed C5 Hydrocarbons, Mixed Pentenes, Propylene, Ethylene, Methanol, Naphtha",
    gases: "VOCs, NH₃, H₂S, Phenol",
    outcome: null,
  },
];

export default function InstallationTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = installations[activeIndex];

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const nextIndex =
      event.key === "ArrowRight"
        ? (activeIndex + 1) % installations.length
        : (activeIndex - 1 + installations.length) % installations.length;
    setActiveIndex(nextIndex);
    document.getElementById(`installation-tab-${nextIndex}`)?.focus();
  }

  return (
    <section
      className={styles.installations}
      aria-labelledby="installations-heading"
    >
      <h2 id="installations-heading" className={styles.heading}>
        Active Installations
      </h2>

      <div
        className={styles.tabs}
        role="tablist"
        aria-label="Installation industries"
        onKeyDown={handleKeyDown}
      >
        {installations.map((installation, index) => (
          <button
            key={installation.industry}
            id={`installation-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls="installation-panel"
            tabIndex={activeIndex === index ? 0 : -1}
            className={`${styles.tab} ${activeIndex === index ? styles.activeTab : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={installation.icon}
              alt=""
              width={48}
              height={48}
              className={styles.icon}
            />
            <span>{installation.industry}</span>
          </button>
        ))}
      </div>

      <div
        id="installation-panel"
        className={styles.panel}
        role="tabpanel"
        aria-labelledby={`installation-tab-${activeIndex}`}
      >
        <div className={styles.photo}>
          <Image
            key={active.image}
            src={active.image}
            alt={`ASTRA waste gas treatment installation at a ${active.industry.toLowerCase()} facility`}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1000px) 42vw, 520px"
            className={styles.installationImage}
          />
        </div>
        <div className={styles.content}>
          <dl className={styles.details}>
            <div>
              <dt>Products Manufactured</dt>
              <dd>{active.products}</dd>
            </div>
            <div>
              <dt>Effluent Gases</dt>
              <dd>{active.gases}</dd>
            </div>
            <div>
              <dt>Treatment Outcome</dt>
              <dd className={active.outcome ? styles.outcome : undefined}>
                {active.outcome}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
