"use client";

import { useState } from "react";
import Image from "next/image";
import astraImage from "@/public/images/Astra Image.png";
import { gasesData } from "@/lib/gases";
import styles from "./GasTreatmentSelector.module.css";

export default function GasTreatmentSelector() {
  const [selectedName, setSelectedName] = useState("");
  const selectedGas = gasesData.find((gas) => gas.gas === selectedName);

  return (
    <section className={styles.section} aria-labelledby="treatment-heading">
      <div className="section-intro">
        <p className="eyebrow">FROM INLET TO OUTPUT</p>
        <h2 id="treatment-heading">See your gas treatment</h2>
        <p>Select a waste gas to explore its end products after ASTRA treatment.</p>
      </div>

      <div className={styles.panel}>
        <div className={styles.input}>
          <label className={styles.label} htmlFor="treatment-gas">Select your gas</label>
          <select
            id="treatment-gas"
            className={styles.select}
            value={selectedName}
            onChange={(event) => setSelectedName(event.target.value)}
            aria-controls="treatment-output"
          >
            <option value="">Choose a gas</option>
            {gasesData.map((gas) => (
              <option key={gas.gas} value={gas.gas}>{gas.gas}</option>
            ))}
          </select>
          <p className={styles.inputFormula}>{selectedGas ? selectedGas.formula : "15 gases · One treatment system"}</p>
        </div>

        <div className={styles.process} key={selectedName} data-active={Boolean(selectedGas)}>
          <div className={styles.flow} aria-hidden="true"><i /><i /><i /><span>→</span></div>
          <figure className={styles.machine}>
            <Image src={astraImage} alt="ASTRA waste gas treatment system with inlet and outlet" sizes="(max-width: 760px) 70vw, 40vw" />
            <figcaption>ASTRA treatment</figcaption>
          </figure>
          <div className={`${styles.flow} ${styles.outflow}`} aria-hidden="true"><i /><i /><i /><span>→</span></div>
        </div>

        <div className={styles.output}>
          <span className={styles.label} id="treatment-output-label">Output</span>
          <output id="treatment-output" htmlFor="treatment-gas" aria-labelledby="treatment-output-label" aria-live="polite" aria-atomic="true">
            {selectedGas ? (
              <div className={styles.result} key={selectedName}>
                <p className={styles.resultCaption}>End products of {selectedGas.gas}</p>
                <div className={styles.products}>
                  {selectedGas.products.split(", ").map((product) => (
                    <span className={styles.product} key={product}>{product}</span>
                  ))}
                </div>
              </div>
            ) : <p className={styles.placeholder}>Choose a gas to see its treatment end products here.</p>}
          </output>
        </div>
      </div>
    </section>
  );
}
