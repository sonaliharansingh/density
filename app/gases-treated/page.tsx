const gasesData = [
  { gas: "Ammonia", formula: "NH₃", molWt: "17", bonds: "H-N", energies: "389", products: "H₂O, N₂" },
  { gas: "Aniline", formula: "C₆H₅NH₂", molWt: "93", bonds: "π bond, C-H, N-H, C-C", energies: "<611,414,389,332", products: "H₂O, CO₂, N₂" },
  { gas: "Benzene", formula: "C₆H₆", molWt: "78", bonds: "π bond, C-H", energies: "<611,414", products: "H₂O, CO₂" },
  { gas: "Dimethyl disulfide", formula: "C₂H₆S₂", molWt: "94", bonds: "S-S, H-S, S-C, C-H", energies: "268,339,268,414", products: "H₂O, CO₂, SO₄²⁻" },
  { gas: "Ethyl acetate", formula: "C₄H₈O₂", molWt: "88", bonds: "C-H, C-O, C=O, C-C", energies: "414,326,728,332", products: "H₂O, CO₂" },
  { gas: "Ethylene oxide", formula: "C₂H₄O", molWt: "44", bonds: "C=C, C-O, C-H", energies: "611,326,414", products: "H₂O, CO₂" },
  { gas: "Hydrogen Sulfide", formula: "H₂S", molWt: "34", bonds: "H-S", energies: "339", products: "H₂O, SO₄²⁻" },
  { gas: "Methanol", formula: "CH₃OH", molWt: "32", bonds: "C-H, C-O, H-O", energies: "414,326,464", products: "H₂O, CO₂" },
  { gas: "Methyl mercaptan", formula: "CH₄S", molWt: "48", bonds: "C-S, C-H, H-S", energies: "272,414,339", products: "H₂O, CO₂, SO₄²⁻" },
  { gas: "Methyl sulfide", formula: "C₂H₆S", molWt: "62", bonds: "C-C, C-H, C-S", energies: "332,414,272", products: "H₂O, CO₂, SO₄²⁻" },
  { gas: "Phenol", formula: "C₆H₆OH", molWt: "94", bonds: "π bond, C-H, C-O", energies: "611,414,326", products: "H₂O, CO₂" },
  { gas: "Styrene", formula: "C₈H₈", molWt: "104", bonds: "C=C,C-C, C-H, π bond", energies: "611,332,414", products: "H₂O, CO₂" },
];

export default function GasesTreatedPage() {
  return (
    <main className="content-page gases-page">
      <section className="page-hero page-hero-compact">
        <div className="header-container page-hero-inner">
          <p className="eyebrow">ASTRA</p>
          <h1>Gases Treated</h1>
        </div>
      </section>

      <section className="gases-section">
        <div className="header-container">
          <div className="section-intro gases-intro">
            <h2>Gas reference</h2>
            <p className="table-scroll-hint">Scroll horizontally to see all columns.</p>
          </div>

          <div className="gases-table-wrap" role="region" aria-label="Gases treated table" tabIndex={0}>
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
