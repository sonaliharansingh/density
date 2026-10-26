import Image from "next/image";
import Link from "next/link";
import machine from "@/public/images/ASTRA Main Image.png";
import logo from "@/public/images/ASTRA Logo.png";
import styles from "./page.module.css";
import FooterBanner from "@/components/FooterBanner";

export default function Home() {
  return (
    <>
      <main id="main-content" className={styles.page}>
        <h1 className={styles.srOnly}>ASTRA Waste Gas Treatment System</h1>

        <section id="about" className={styles.content} aria-label="About ASTRA">
          <div className={styles.intro}>
            <p>
              ASTRA™ is an advanced, non-combustion technology for treating
              volatile organic compounds (VOCs) and hazardous gaseous
              pollutants. Using microwave-assisted UV photocatalytic oxidation,
              it breaks down pollutant molecules at low operating temperatures
              of below 70°C, without fuel, flames or water. With treatment
              efficiency exceeding 95%, ASTRA™ transforms harmful emissions into
              less harmful byproducts, without generating secondary liquid or
              solid waste.
            </p>
            <Image
              className={styles.machine}
              src={machine}
              alt="ASTRA industrial gas treatment system and ventilation ducting"
              sizes="(max-width: 640px) 85vw, (max-width: 1280px) 44vw, 560px"
            />
          </div>

          <div id="applications" className={styles.bottom}>
            <article className={styles.deployment}>
              <h2>Flexible Deployment</h2>
              <p>
                Available as fixed plant skids, containerized mobile (OTG)
                units, compact over-the-top (OTT) systems and in-situ solutions
                for VOC treatment in fume hoods and workbench ventilation
                systems.
              </p>
            </article>
            <div className={styles.actions}>
              <Link
                className={styles.gasLink}
                href="/gases-treated"
                aria-label="Select your waste gas to see what ASTRA can do"
              >
                <span className={styles.gasPrompt}>
                  Select your
                  <br />
                  waste gas
                  <br />
                  to see what
                </span>
                <span className={styles.gasLogo}>
                  <Image
                    src={logo}
                    alt="ASTRA"
                    sizes="(max-width: 640px) 213px, 365px"
                  />
                </span>
                <span className={styles.canDo}>can do!</span>
              </Link>
            </div>
            <section
              className={styles.highlights}
              aria-label="ASTRA treatment highlights"
            >
              <article className={styles.highlight}>
                <h2>&gt;95% Treatment Efficiency</h2>
                <p>
                  Effectively degrades complex VOC mixtures, including ketones,
                  aromatic compounds and chlorinated species.
                </p>
              </article>
              <article className={styles.highlight}>
                <h2>Low-Temperature Processing (&lt;70°C)</h2>
                <p>
                  Treats hazardous organic and inorganic gaseous emissions
                  without combustion, open flames or associated fire hazards.
                </p>
              </article>
              <article className={styles.highlight}>
                <h2>Zero Secondary Waste</h2>
                <p>
                  Eliminates wastewater generation and the need for hazardous
                  spent-carbon disposal.
                </p>
              </article>
            </section>
            <div className={`${styles.footerActions} site-footer-actions`}>
              <a
                href="/assets/astra-brochure.pdf"
                download="ASTRA-Brochure.pdf"
                className="site-brochure-button"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />
                </svg>
                <span className="site-brochure-copy">
                  <span className="site-brochure-title">Download Brochure</span>
                  <span className="site-brochure-subtitle">
                    Explore our solutions
                  </span>
                </span>
              </a>
              <Link href="/contact" className="footer-contact-button">
                <span>I’m Interested</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterBanner />
    </>
  );
}
