import { gasesData } from "@/lib/gases";
import GasCards from "@/components/GasCards";

export default function GasReferencePage() {
  return (
    <main id="main-content" className="content-page gases-page">
      <section className="page-hero page-hero-compact">
        <div className="header-container page-hero-inner">
          <h1>Gases Treated</h1>
          <p className="page-hero-lede">
            Explore waste gas treatment details and chemical reference data.
          </p>
        </div>
      </section>

      <section className="gases-section">
        <div className="header-container">
          <div className="section-intro">
            <h2>Select your waste gas</h2>
            <p>Open a card to explore its treatment details.</p>
          </div>
          <GasCards />
          <div className="section-intro gases-intro">
            <h2>Gas reference</h2>  
          </div>

          <div
            className="gases-table-wrap"
            role="region"
            aria-label="Gases treated table"
            tabIndex={0}
          >
            <table className="gases-table">
              <thead>
                <tr>
                  <th scope="col">Gas</th>
                  <th scope="col">Mol. Formula</th>
                  <th scope="col">Mol. Wt.</th>
                  <th scope="col">Main Chemical Bonds</th>
                  <th scope="col">Bond Energies (kJ/mol)</th>
                  <th scope="col">End Products</th>
                </tr>
              </thead>
              <tbody>
                {gasesData.map((row) => (
                  <tr key={row.gas}>
                    <th scope="row">{row.gas}</th>
                    <td className="formula-cell">{row.formula}</td>
                    <td>{row.molWt}</td>
                    <td>{row.bonds}</td>
                    <td>{row.energies}</td>
                    <td className="products-cell">{row.products}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
