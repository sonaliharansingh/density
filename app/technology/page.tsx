import Image from "next/image";

const capabilities = [
  {
    title: "Emission Compliance",
    description: "Meets industry emission standards and handles complex mixed exhaust gases.",
  },
  {
    title: "Advanced Oxidation Technology",
    description: "Uses microwave and VUV light to break molecular bonds at room temperature.",
  },
  {
    title: "Easy System Integration",
    description: "Integrates with PLC/DCS systems, with plug-and-play installation and simple maintenance.",
  },
  {
    title: "Flexible Modular Design",
    description: "Available as a standalone unit or modular setup to suit different industrial requirements.",
  },
  {
    title: "High Styrene Breakdown",
    description: "Achieves up to 99% styrene breakdown, with minimal byproduct risk.",
  },
  {
    title: "Low Operating Costs",
    description: "Requires electricity and periodic UV lamp replacement for routine operation.",
  },
];

export default function TechnologyPage() {
  return (
    <main id="main-content" className="content-page technology-page">
      <section className="page-hero page-hero-compact">
        <div className="header-container page-hero-inner">
          <h1>Microwave Lysis Technology</h1>
          <p className="page-hero-lede">Microwave energy and vacuum ultraviolet light. An integrated approach to waste gas treatment.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="header-container">
          <ul className="tech-benefits">
            {capabilities.map((capability) => (
              <li className="tech-benefit" key={capability.title}>
                <Image
                  className="tech-benefit-icon"
                  src="/images/Wave%20Icon.png"
                  alt=""
                  width={18}
                  height={18}
                  aria-hidden="true"
                />
                <p className="tech-benefit-copy">{capability.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section page-section-tint">
        <div className="header-container">
          <div className="section-intro">
            <h2>Working Principle</h2>
          </div>
          <div className="principle-flow principle-panel">
            <div className="flow-image-wrap principle-image-frame">
              <Image
                src="/images/Working Principle.png"
                alt="Exhaust gas emissions meet standards, centrifugal fan"
                width={660}
                height={260}
                className="flow-image principle-main-image"
                sizes="(max-width: 850px) 100vw, 68vw"
              />
            </div>
            <div className="flow-divider" aria-hidden="true" />
            <Image
              src="/images/Operating Conditions.png"
              alt="Operating conditions: under 70 degrees C, under 85 percent humidity, 110-240 V"
              width={140}
              height={200}
              className="flow-image spec-image operating-image"
            />
          </div>
        </div>
      </section>

      <section className="page-section page-section-tint technology-pretreatment-section">
        <div className="header-container">
          <div className="section-intro">
            <h2>Plug-n-Play Pre-treatment Ready Architecture</h2>
          </div>
          <div className="pretreatment-frame">
            <Image
              src="/images/Plug%20%26%20Play.png"
              alt="Plug-n-Play Pre-treatment Ready Architecture: Stage 1 Cyclone Separator removes over 90% large particles, Stage 2 Condensation Coil cools and condenses heavy oil vapours, Stage 3 Coalescing Filter captures over 99% oil mist and fine dust under 3 micrometers, clean and cool gas to ASTRA"
              width={1000}
              height={280}
              className="pretreatment-image"
              sizes="(max-width: 800px) calc(100vw - 60px), (max-width: 1336px) calc(100vw - 144px), 1192px"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
