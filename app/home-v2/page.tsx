import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import machine from "@/public/images/Astra Line Drawing.png";
import logo from "@/public/images/ASTRA Logo.png";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ASTRA | Homepage V2 Review",
  robots: { index: false, follow: false },
};

export default function HomeV2() {
  return (
    <main id="main-content" className={styles.page}>
      <h1 className={styles.srOnly}>ASTRA Waste Gas Treatment System</h1>

      <section className={styles.content} aria-label="About ASTRA">
        <div className={styles.intro}>
          <p>
              ASTRA is an advanced VUV-based gas purification system designed to treat and
              break down hazardous gaseous pollutants generated during laboratory and
              industrial processes. Using Vacuum Ultraviolet (VUV) photochemical
              technology, ASTRA helps transform harmful organic pollutants into simpler,
              less harmful by-products before treated air is released.
          </p>
          <Image className={styles.machine} src={machine} alt="ASTRA gas purification unit with air inlet, control panels and outlet fan" sizes="(max-width: 640px) 80vw, (max-width: 1280px) 44vw, 560px" />
        </div>

        <p className={styles.description}>
          Designed for efficient, continuous operation, ASTRA provides an environmentally
          responsible approach to gas treatment, helping laboratories and industrial
          facilities improve air quality while reducing their environmental footprint.
        </p>

        <div className={styles.bottom}>
          <p>
            With its compact design, low maintenance requirements and high pollutant-removal
            efficiency, ASTRA is suited for analytical laboratories, research facilities
            and industrial applications where effective treatment of gaseous emissions
            is essential.
          </p>
          <div className={styles.actions}>
            <Link className={styles.gasLink} href="/gases-treated" aria-label="Select your waste gas to see what ASTRA can do">
              <span className={styles.gasPrompt}>Select your<br />waste gas to see</span>
              <span className={styles.what}>what</span>
              <span className={styles.gasLogo}>
                <Image src={logo} alt="ASTRA" sizes="(max-width: 640px) 213px, 365px" />
              </span>
              <span className={styles.canDo}>can do!</span>
            </Link>
            <a href="/assets/astra-brochure.pdf" download="ASTRA-Brochure.pdf" className={styles.brochureButton}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />
              </svg>
              Download Brochure
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
