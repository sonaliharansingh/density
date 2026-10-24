import GasTreatmentSelector from "@/components/GasTreatmentSelector";
import Image from "next/image";
import Link from "next/link";
export default function GasesTreatedPage() {
  return (
    <main id="main-content" className="content-page gases-page">
      <section className="page-hero page-hero-compact">
        <div className="header-container page-hero-inner">
          <h1>Gases Treated</h1>
          <p className="page-hero-lede">Explore the gases ASTRA treats, from molecular bonds to treatment end products.</p>
        </div>
      </section>

      <section className="gases-section">
        <div className="header-container">
          <GasTreatmentSelector />
          <Link className="gas-reference-promo" href="/gas-reference" aria-label="Complete list of gases treated by ASTRA">
            <span>Complete list of Gases treated by</span>
            <Image src="/images/ASTRA Logo.png" alt="ASTRA" width={180} height={56} />
          </Link>
        </div>
      </section>
    </main>
  );
}
