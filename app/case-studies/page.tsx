import type { Metadata } from "next";
import styles from "./page.module.css";
import InstallationTabs from "./InstallationTabs";

export const metadata: Metadata = {
  title: "Case Studies | ASTRA",
  description: "ASTRA installations across pharmaceutical, specialty chemical and petrochemical industries.",
};

export default function CaseStudiesPage() {
  return (
    <main id="main-content" className="content-page">
      <section className="page-hero page-hero-compact">
        <div className="header-container page-hero-inner">
          <p className="eyebrow">ASTRA</p>
          <h1>Case Studies</h1>
          <p className="page-hero-lede">Waste gas treatment across industries, with a closer look at active installations.</p>
        </div>
      </section>

      <section className="page-section" aria-labelledby="industries-heading">
        <div className="header-container">
          <div className={styles.industries}>
            <h2 id="industries-heading">Industries Covered</h2>
            <p>Pharmaceutical, Specialty Chemical, Petrochemical, Automobile, Power generation, Cement and more.</p>
          </div>
          <InstallationTabs />
        </div>
      </section>
    </main>
  );
}
