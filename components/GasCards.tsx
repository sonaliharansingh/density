import { gasesData } from "@/lib/gases";
import Icon from "./Icon";
export default function GasCards() {
  return <div className="gas-card-grid">
    {gasesData.map((gas) => (
      <details className="gas-card" key={gas.gas}>
        <summary>
          <span className="gas-top"><Icon name="molecule" /><span className="gas-formula">{gas.formula}</span></span>
          <span className="gas-name">{gas.gas}</span>
          <span className="gas-caption">View treatment details <span className="gas-toggle" aria-hidden="true">+</span></span>
        </summary>
        <dl className="gas-details">
          <div>
            <dt>Molecular weight</dt>
            <dd>{gas.molWt}</dd>
          </div>
          <div>
            <dt>Main chemical bonds</dt>
            <dd>{gas.bonds}</dd>
          </div>
          <div>
            <dt>Bond energies (kJ/mol)</dt>
            <dd>{gas.energies}</dd>
          </div>
          <div>
            <dt>End products</dt>
            <dd>{gas.products}</dd>
          </div>
        </dl>
      </details>
    ))}
  </div>;
}
