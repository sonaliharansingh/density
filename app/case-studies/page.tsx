import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Case Studies | ASTRA",
  description: "ASTRA installations across pharmaceutical, specialty chemical and petrochemical industries.",
};

const installations = [
  {
    industry: "Pharmaceutical",
    icon: "/images/Pharmaceutical Icon.png",
    image: "/images/Pharmaceutical Image.png",
    products: "Human & veterinary drugs with a primary focus on antibiotic APIs, synthetic drugs formulations",
    gases: "VOCs & odorous compounds",
    outcome: ">90% treatment efficiency, reducing exhaust concentration to 0–59 mg/m³.",
  },
  {
    industry: "Specialty Chemical",
    icon: "/images/Specialty Chemical Icon.png",
    image: "/images/Specialty Chemical Image.png",
    products: "Nitrosylsulfuric acid, Acrylonitrile, m-Aminoacetanilide, 1-Aminoanthraquinone, N-Diallyl-2-methoxy-5-acetaminoaniline, etc.",
    gases: "VOCs",
    outcome: ">98% VOC removal, reducing exhaust concentration from 9,837–14,682 mg/m³ to 89.5–246 mg/m³.",
  },
  {
    industry: "Petrochemical",
    icon: "/images/Petrochemcial Icon.png",
    image: "/images/Petrochemcial Image.png",
    products: "Butene, MTBE, Mixed C4 Hydrocarbon, Mixed C5 Hydrocarbons, Mixed Pentenes, Propylene, Ethylene, Methanol, Naphtha",
    gases: "VOCs, NH₃, H₂S, Phenol",
    outcome: null,
  },
];

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

          <h2 id="installations-heading" className={styles.heading}>Active Installations</h2>
          <div className={styles.grid} aria-labelledby="installations-heading">
            {installations.map((installation) => (
              <article key={installation.industry} className={styles.card}>
                <div className={styles.cardHeading}>
                  <Image src={installation.icon} alt="" width={80} height={80} className={styles.icon} />
                  <h3>{installation.industry}</h3>
                </div>
                <dl className={styles.details}>
                  <div>
                    <dt>Products Manufactured</dt>
                    <dd>{installation.products}</dd>
                  </div>
                  <div>
                    <dt>Effluent Gases</dt>
                    <dd>{installation.gases}</dd>
                  </div>
                  <div>
                    <dt>Treatment Outcome</dt>
                    <dd className={installation.outcome ? styles.outcome : styles.unspecified}>
                      {installation.outcome ?? "Not specified"}
                    </dd>
                  </div>
                </dl>
                <div className={styles.photo}>
                  <Image
                    src={installation.image}
                    alt={`ASTRA waste gas treatment installation at a ${installation.industry.toLowerCase()} facility`}
                    fill
                    sizes="(max-width: 800px) calc(100vw - 88px), (max-width: 1100px) 30vw, 380px"
                    className={styles.installationImage}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
