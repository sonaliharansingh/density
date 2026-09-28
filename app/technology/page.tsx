import Image from "next/image";

export default function TechnologyPage() {
  return (
    <main className="content-page technology-page">
      <section className="page-hero page-hero-compact">
        <div className="header-container page-hero-inner">
          <p className="eyebrow">ASTRA</p>
          <h1>Microwave Lysis Technology</h1>
        </div>
      </section>

      <section className="page-section">
        <div className="header-container">
          <ul className="tech-list capability-grid">
            <li>Meets industry emission standards and handles complex mixed exhaust gases</li>
            <li>Uses microwave &amp; VUV light to break molecular bonds at room temperature</li>
            <li>Integrates easily with PLC/DCS systems; plug-and-play with simple maintenance</li>
            <li>Flexible design - available as a single unit or modular setup</li>
            <li>Achieves up to 99% styrene breakdown with minimal byproduct risk (producing only CO₂ &amp; H₂O)</li>
            <li>Low operating cost: electricity plus periodic UV lamp replacement</li>
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

      <section className="page-section">
        <div className="header-container">
          <div className="section-intro">
            <h2>Proprietary Technology</h2>
          </div>
          <div className="proprietary-grid technology-card-grid">
            <Image
              src="/images/Ultra Hertz Microwave_Image.png"
              alt="Ultra-Hertz Microwave Source: high frequency microwave energy, Ultra-Hertz breaks the bond"
              width={360}
              height={300}
              className="proprietary-image"
            />
            <Image
              src="/images/Nanoparticle Catalyst_Image.jpg"
              alt="Nano Particle Catalyst: nano material catalyst, breakthrough results at room temp, no byproducts formed"
              width={360}
              height={300}
              className="proprietary-image"
            />
            <Image
              src="/images/Nano Anti-corrosion Coating_Image.png"
              alt="Nano Anti-corrosion Coating: nano anti-corrosion material, coating tested with HF, inner lining pipelines and cavities"
              width={360}
              height={300}
              className="proprietary-image"
            />
          </div>
          <p className="tech-tagline">
            A seamless integration of advanced technologies designed to deliver
            superior efficiency
          </p>
        </div>
      </section>

      <section className="page-section page-section-tint">
        <div className="header-container">
          <div className="section-intro">
            <h2>Plug-n-Play Pre-treatment Ready Architecture</h2>
          </div>
          <div className="pretreatment-frame">
            <Image
              src="/images/Plug & Play.png"
              alt="Plug-n-Play Pre-treatment Ready Architecture: Stage 1 Cyclone Separator removes over 90% large particles, Stage 2 Condensation Coil cools and condenses heavy oil vapours, Stage 3 Coalescing Filter captures over 99% oil mist and fine dust under 3 micrometers, clean and cool gas to ASTRA"
              width={1000}
              height={280}
              className="pretreatment-image"
              sizes="(max-width: 1528px) calc(100vw - 48px), 1480px"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
