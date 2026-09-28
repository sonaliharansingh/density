import Image from "next/image";

const comparisonData = [
  {
    feature: "Working Principle",
    thermal: "High-temperature thermal oxidation (~760°C+)",
    vuv: "Microwave & Ultraviolet (VUV) at room temperature",
  },
  {
    feature: "Pretreatment Needs",
    thermal: "Required for particles & oil",
    vuv: "Required for particles & oil",
  },
  {
    feature: "System Configuration",
    thermal: "Single large unit often preferred for cost-effectiveness",
    vuv: "Highly flexible; single unit or multiple modules possible",
  },
  {
    feature: "Footprint",
    thermal: "Large (due to ceramic heat recovery beds)",
    vuv: "More compact; modular design",
  },
  {
    feature: "Energy Consumption",
    thermal: "High fuel demand to maintain temperature; electricity for fans",
    vuv: "Primarily electricity (no fuel); lower OPEX",
  },
  {
    feature: "OPEX Drivers",
    thermal: "Natural gas, periodic ceramic media replacement",
    vuv: "Electricity, periodic lamp replacement",
  },
  {
    feature: "By-product Risks",
    thermal: "NOx, potential SO₂ from sulfur content",
    vuv: "Minimal; primary by-products are CO₂ and H₂O",
  },
];

const advantages = [
  "Significantly Lower Operating Costs (OPEX)",
  "Compact and Modular Design",
  "Ambient Temperature Operation",
  "Precision Destruction of styrene gas",
];

export default function AdvantagesPage() {
  return (
    <main className="content-page advantages-page">
      <section className="page-hero page-hero-compact">
        <div className="header-container page-hero-inner">
          <p className="eyebrow">ASTRA</p>
          <h1>Astra vs Conventional Technology</h1>
        </div>
      </section>

      <section className="advantages-section">
        <div className="header-container">
          <div className="advantages-table-wrap" role="region" aria-label="Technology comparison" tabIndex={0}>
            <table className="advantages-table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Thermal Oxidation</th>
                  <th scope="col">VUV Technology</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.feature}>
                    <th scope="row" className="feature-cell">{row.feature}</th>
                    <td>{row.thermal}</td>
                    <td className="vuv-cell">{row.vuv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="advantage-callout">
            <div className="advantage-check" aria-hidden="true">✓</div>
            <div className="advantage-body">
              <h2 className="advantage-heading">
                The <Image src="/images/ASTRA Logo.png" alt="ASTRA" width={90} height={28} className="advantage-logo" /> Advantage
              </h2>
              <ul className="advantage-list">
                {advantages.map((advantage) => <li key={advantage}>{advantage}</li>)}
              </ul>
            </div>
            <Image
              src="/images/ASTRA Line Drawing.png"
              alt="ASTRA"
              width={280}
              height={150}
              className="advantage-product-image"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
