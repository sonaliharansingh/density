import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import TreatmentVisual from "@/components/TreatmentVisual";
import GasCards from "@/components/GasCards";

const features = [
  { icon: "energy", title: "VUV Technology", text: "Advanced vacuum ultraviolet treatment." },
  { icon: "molecule", title: "High Efficiency", text: "Effective treatment of gaseous pollutants." },
  { icon: "box", title: "Compact Design", text: "Built for laboratory and industrial environments." },
] as const;
const steps = [
  { icon: "flow", title: "Gas Intake", text: "Hazardous gases enter the ASTRA system." },
  { icon: "energy", title: "VUV Treatment", text: "VUV technology interacts with the pollutants." },
  { icon: "molecule", title: "Pollutant Breakdown", text: "Pollutants are broken down through the treatment process." },
  { icon: "leaf", title: "Gas Outlet", text: "Treated gas exits the system." },
] as const;
const advantages = [
  { icon: "cost", title: "Lower Operating Costs", text: "Electricity and periodic UV lamp replacement keep operation simple." },
  { icon: "box", title: "Compact & Modular", text: "A flexible design, available as a single unit or multiple modules." },
  { icon: "temperature", title: "Ambient Temperature", text: "Microwave and VUV technology break molecular bonds at room temperature." },
  { icon: "molecule", title: "Targeted Treatment", text: "Precision destruction of styrene gas, with low maintenance requirements." },
] as const;
const applications = [
  { icon: "lab", title: "Analytical Laboratories", text: "Treatment of hazardous gaseous pollutants generated during laboratory processes.", tag: "LABORATORY ENVIRONMENTS" },
  { icon: "factory", title: "Industrial Facilities", text: "Continuous gas treatment for industrial processes where effective emissions treatment is essential.", tag: "INDUSTRIAL PROCESSES" },
  { icon: "research", title: "Research Facilities", text: "Compact gas purification for research environments, supporting improved air quality.", tag: "RESEARCH ENVIRONMENTS" },
] as const;

export default function Home() {
  return <main id="main-content">
    <section className="landing-hero" aria-labelledby="home-page-title">
      <div className="header-container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> ENGINEERED FOR CLEANER AIR</p>
          <h1 id="home-page-title">Advanced VUV-Based <em>Waste Gas</em> Treatment</h1>
          <p className="hero-description">Meet ASTRA. Advanced photochemical technology designed to treat hazardous gaseous pollutants. A smarter approach to industrial air quality.</p>
          <div className="button-row">
            <a href="/assets/astra-brochure.pdf" download="ASTRA-Brochure.pdf" className="button button-secondary">Download Brochure</a>
            <Link href="#about" className="button button-primary">Explore ASTRA <Icon name="arrow" /></Link>
            <Link href="#how-it-works" className="button button-secondary">How It Works <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="hero-footnote">
            <Icon name="leaf" />
            <span>Advanced science. Environmental responsibility.</span>
          </div>
        </div>
        <TreatmentVisual />
      </div>
      <div className="hero-bottom header-container">
        <span>VACUUM ULTRAVIOLET TECHNOLOGY</span>
        <span>Laboratory · Research · Industry</span>
        <a href="#about" aria-label="Discover ASTRA below">DISCOVER <span aria-hidden="true">↓</span></a>
      </div>
    </section>
    <section id="about" className="landing-section about-section">
      <div className="header-container">
        <Reveal className="about-grid">
          <div>
            <p className="eyebrow">01 / MEET THE SYSTEM</p>
            <h2>What is ASTRA?</h2>
            <p className="section-lede">Advanced science.<br />A cleaner way forward.</p>
            <p>ASTRA is an advanced VUV-based gas purification system designed to treat and break down hazardous gaseous pollutants generated during laboratory and industrial processes.</p>
            <p>Using Vacuum Ultraviolet (VUV) photochemical technology, ASTRA helps transform harmful organic pollutants into simpler, less harmful by-products before treated air is released.</p>
            <Link href="/technology" className="text-link">Discover the technology <Icon name="arrow" /></Link>
          </div>
          <figure className="product-figure">
            <div className="figure-label">
              <span>ASTRA</span>
              <span>WASTE GAS TREATMENT SYSTEM</span>
            </div>
            <Image src="/images/Astra Line Drawing.png" alt="ASTRA modular gas treatment system with air inlet and outlet fan" width={435} height={291} sizes="(max-width: 800px) 90vw, 44vw" />
            <figcaption><span className="status-dot" /> Compact by design. Powerful by nature.</figcaption>
          </figure>
        </Reveal>
        <Reveal className="feature-strip">
          {features.map(item => <article className="mini-feature" key={item.title}>
            <Icon name={item.icon} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>)}
        </Reveal>
      </div>
    </section>
    <section id="how-it-works" className="landing-section process-section">
      <div className="header-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / THE PROCESS</p>
            <h2>How ASTRA Works</h2>
          </div>
          <p>From hazardous emissions to treated gas.<br />One integrated treatment process.</p>
        </div>
        <Reveal className="process-grid">
          {steps.map((step, i) => <article className="process-step" key={step.title}>
            <div className="process-step-top">
              <span>0{i + 1}</span>
              <Icon name="arrow" />
            </div>
            <div className="process-icon">
              <Icon name={step.icon} />
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>)}
        </Reveal>
        <Link className="text-link" href="/technology">Explore the working principle <Icon name="arrow" /></Link>
      </div>
    </section>
    <section id="gases" className="landing-section">
      <div className="header-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / TREATMENT CAPABILITIES</p>
            <h2>What Can ASTRA Treat?</h2>
          </div>
          <p>Select a waste gas to explore its molecular bonds and treatment end products.</p>
        </div>
        <Reveal>
          <GasCards />
        </Reveal>
        <div className="section-bottom">
          <span>Explore the science behind each gas.</span>
          <Link className="text-link" href="/gases-treated">View the full gas reference <Icon name="arrow" /></Link>
        </div>
      </div>
    </section>
    <section id="why-astra" className="landing-section advantages-home">
      <div className="header-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / THE ASTRA ADVANTAGE</p>
            <h2>Why ASTRA?</h2>
          </div>
          <p>Designed for efficient, continuous operation, with a smaller environmental footprint.</p>
        </div>
        <Reveal className="advantage-grid">
          {advantages.map(item => <article className="feature-card" key={item.title}>
            <Icon name={item.icon} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>)}
        </Reveal>
        <Link className="text-link" href="/advantages">Compare with conventional technology <Icon name="arrow" /></Link>
      </div>
    </section>
    <section id="applications" className="landing-section">
      <div className="header-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">05 / BUILT FOR YOUR ENVIRONMENT</p>
            <h2>Applications</h2>
          </div>
          <p>Effective gas treatment where cleaner air matters.</p>
        </div>
        <Reveal className="application-grid">
          {applications.map((item, i) => <article className="application-card" key={item.title}>
            <div className="application-visual">
              <span>0{i + 1}</span>
              <Icon name={item.icon} />
              <span className="application-cross" aria-hidden="true">+</span>
            </div>
            <div className="application-copy">
              <p className="eyebrow">{item.tag}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>)}
        </Reveal>
      </div>
    </section>
    <section className="final-cta">
      <div className="header-container final-cta-inner">
        <div>
          <p className="eyebrow">MAKING A DIFFERENCE THAT MATTERS!</p>
          <h2>Cleaner Gas.<br /><em>Smarter Treatment.</em></h2>
          <p>An environmentally responsible approach to waste gas treatment.<br />Engineered by densitY Sustaintech.</p>
        </div>
        <Link href="#gases" className="button button-light">Explore ASTRA <Icon name="arrow" /></Link>
      </div>
    </section>
  </main>;
}
