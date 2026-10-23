"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const modelTypes = [
  {
    name: "INDUSTRY",
    accent: "SOLUTIONS",
    icon: "factory",
    title: "One-of-a-kind Industrial Solution",
    columns: [
      {
        details: [
          [
            "Wide Industry Coverage",
            "Pharma & BioPharma, Electronics, Semicon, Specialty Chemical, Petrochemical, Power, Cement, Steel, Automotive etc.",
          ],
          [
            "Application-Specific Engineering",
            "Adapts to diverse VOC and odour treatment applications, with multiple process conditions and gas streams.",
          ],
        ],
        image: "/images/Petrochemcial Image.png",
        alt: "ASTRA waste gas treatment system installed at an industrial facility",
        caption: (
          <>
            Compatible with Industrial Automation.
            <br />
            Configurable with PLC &amp; DCS.
          </>
        ),
      },
      {
        details: [
          [
            "Plug-and-Play Modular Design",
            "Clean, compact, and scalable system architecture.",
          ],
          [
            "Power-Only Technology",
            "No fuel, water, chemicals, or secondary waste generation.",
          ],
          [
            "Sustainable High-Efficiency Operation",
            "Reliable performance, low operating costs and minimal footprint.",
          ],
        ],
        image: "/images/Pharmaceutical Image.png",
        alt: "ASTRA waste gas treatment system at a pharmaceutical facility",
      },
    ],
  },
  {
    name: "LABORATORY",
    accent: "SOLUTIONS",
    icon: "lab",
    logo: "/images/ASTRA OTT Logo.png",
    title: "Fume Hood Companion",
    columns: [
      {
        details: [
          [
            "No Water Consumption",
            "No wastewater generation, carbon media replacement or chemical dosing.",
          ],
          [
            "Point-of-Source Treatment",
            "Treat pollutants close to where they are generated.",
          ],
          [
            "Compact & Retrofit Friendly",
            "A compact solution designed to fit into existing laboratory spaces.",
          ],
          [
            "Low Maintenance Operation",
            "Straightforward operation with minimal upkeep.",
          ],
        ],
        image: "/images/ASTRA OTT Image 2.png",
        alt: "Compact ASTRA treatment unit installed beside a laboratory fume hood",
        caption: (
          <>
            Destruction of Pollutants.
            <br />
            Not Transfer.
          </>
        ),
      },
      {
        details: [
          [
            "Broad VOC Compatibility",
            "Designed to treat a wide range of volatile organic compounds.",
          ],
          [
            "Enhanced EHS Performance",
            "Supports a safer laboratory environment.",
          ],
          [
            "Sustainability-Driven Design",
            "Power-only operation without secondary waste.",
          ],
          [
            "Lower Total Cost of Ownership",
            "Efficient treatment with less ongoing consumable replacement.",
          ],
        ],
        image: "/images/ASTRA OTT Image 1.png",
        alt: "Laboratory fume hoods connected to the ASTRA treatment system",
      },
    ],
  },
  {
    name: "MOBILE",
    accent: "SOLUTIONS",
    icon: "mobile",
    logo: "/images/ASTRA OTG Logo.png",
    title: "The perfect on-the-go unit",
    columns: [
      {
        details: [
          [
            "Flexible Deployment",
            "Move the unit around the industrial site to treat emissions where needed.",
          ],
          ["No Combustion", "No flame or flare needed."],
          [
            "Ambient-Temperature Operation",
            "Works at ambient temperature (ATP).",
          ],
          [
            "Low-Concentration VOC Streams",
            "Suitable for low-concentration VOC streams.",
          ],
        ],
        image: "/images/ASTRA OTG Image 2.png",
        alt: "Compact mobile ASTRA treatment unit",
        caption: (
          <>
            Mobile shield against
            <br />
            hazardous VOC exposure.
          </>
        ),
      },
      {
        details: [
          [
            "Broad VOC Compatibility",
            "Suitable for a broad range of volatile organic compounds.",
          ],
          [
            "Enhanced EHS Performance",
            "Supports improved environmental, health and safety performance.",
          ],
          [
            "Compact System",
            "A good fit for loading racks and other space-constrained locations.",
          ],
          [
            "No Recycling or ETP Treatment",
            "Treat pollutants without a secondary wastewater treatment step.",
          ],
        ],
        image: "/images/ASTRA OTG Image 1.png",
        alt: "ASTRA mobile treatment unit deployed beside an industrial tanker",
      },
    ],
  },
];

function ModelIcon({ type }: { type: string }) {
  if (type === "factory")
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 26V13l8 4v-6l8 5V7h5v19H5Zm4-7v2m5-1v2m5-1v2m-9-9 3 1m5 1 3 1M3 27h26" />
      </svg>
    );
  if (type === "lab")
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M11 4h6m-5 0v8l-5 10a3 3 0 0 0 3 4h9a3 3 0 0 0 3-4l-5-10V4m-9 15h16M23 5h5v8h-5zM24 16h4v10h-4z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M4 11h16v13H4zM20 15h5l4 5v4h-9M8 24a3 3 0 1 0 6 0m9 0a3 3 0 1 0 6 0M7 14v6h7v-6m9 4h3" />
    </svg>
  );
}

export default function ModelsTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = modelTypes[activeIndex];

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const nextIndex =
      event.key === "ArrowRight"
        ? (activeIndex + 1) % modelTypes.length
        : (activeIndex - 1 + modelTypes.length) % modelTypes.length;
    setActiveIndex(nextIndex);
    document.getElementById(`model-tab-${nextIndex}`)?.focus();
  }

  return (
    <main id="main-content" className={`content-page ${styles.page}`}>
      <section className="header-container" aria-label="ASTRA model selector">
        <div
          className={styles.models}
          role="tablist"
          aria-label="ASTRA model types"
          onKeyDown={handleKeyDown}
        >
          {modelTypes.map((model, index) => (
            <button
              key={model.name}
              id={`model-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls="model-panel"
              tabIndex={activeIndex === index ? 0 : -1}
              className={`${styles.model} ${activeIndex === index ? styles.activeModel : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className={styles.logoWrap}>
                <Image
                  src={model.logo ?? "/images/ASTRA Logo.png"}
                  alt=""
                  width={240}
                  height={75}
                  className={styles.logo}
                />
              </span>
              <span className={styles.modelInfo}>
                <span className={styles.icon}>
                  <ModelIcon type={model.icon} />
                </span>
                <span className={styles.modelName}>
                  {model.name}
                  <br />
                  <em>{model.accent}</em>
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section
        id="model-panel"
        className={styles.solution}
        role="tabpanel"
        aria-labelledby={`model-tab-${activeIndex}`}
        key={activeIndex}
      >
        <div className="header-container">
          <p className={styles.eyebrow}>ASTRA {active.name} RANGE</p>
          <h1>{active.title}</h1>
          <div className={styles.featureLayout}>
            {active.columns.map((column, index) => (
              <div className={styles.featureColumn} key={index}>
                <ul className={styles.bullets}>
                  {column.details.map(([title, description]) => (
                    <li key={title}>
                      <strong>{title}</strong>
                      <span>{description}</span>
                    </li>
                  ))}
                </ul>
                <figure className={styles.photo}>
                  <Image
                    src={column.image}
                    alt={column.alt}
                    width={3600}
                    height={2400}
                    sizes="(max-width: 700px) 100vw, 48vw"
                  />
                  {column.caption && <figcaption>{column.caption}</figcaption>}
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
