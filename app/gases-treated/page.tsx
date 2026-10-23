import GasTreatmentSelector from "@/components/GasTreatmentSelector";
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
        </div>
      </section>
    </main>
  );
}
