import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="home-hero" aria-labelledby="home-page-title">
        <h1 id="home-page-title" className="visually-hidden">
          ASTRA Waste Gas Treatment System
        </h1>
        <Image
          src="/images/ASTRA Main Banner.png"
          alt="ASTRA waste gas treatment system by densitY Sustaintech"
          width={2700}
          height={960}
          priority
          className="home-hero-image"
          sizes="100vw"
        />
      </section>

      <section className="intro-section home-intro">
        <div className="header-container intro-grid">
          <div className="intro-copy">
            <p>
              ASTRA is an advanced VUV-based gas purification system designed to
              treat and break down hazardous gaseous pollutants generated during
              laboratory and industrial processes. Using Vacuum Ultraviolet
              (VUV) photochemical technology, ASTRA helps transform harmful
              organic pollutants into simpler, less harmful by-products before
              treated air is released.
            </p>
            <p>
              Designed for efficient, continuous operation, ASTRA provides an
              environmentally responsible approach to gas treatment, helping
              laboratories and industrial facilities improve air quality while
              reducing their environmental footprint.
            </p>
          </div>

          <div className="home-intro-image" aria-hidden="true">
            <Image
              src="/images/Astra Image.png"
              alt=""
              width={1420}
              height={700}
              className="intro-image-el"
              sizes="(max-width: 850px) 100vw, 42vw"
            />
          </div>

          <div className="intro-extra">
            <p>
              With its compact design, low maintenance requirements and high
              pollutant-removal efficiency, ASTRA is suited for analytical
              laboratories, research facilities and industrial applications
              where effective treatment of gaseous emissions is essential.
            </p>
          </div>

          <Link href="/gases-treated" className="intro-cta">
            <span className="intro-cta-bg" aria-hidden="true">ASTRA</span>
            <span className="intro-cta-text">
              Select your waste gas to see
              <Image
                src="/images/Astra Logo.png"
                alt="ASTRA"
                width={160}
                height={150}
                className="intro-cta-logo"
              />
              <br />
              what ASTRA can do!
            </span>
          </Link>
        </div>
      </section>

      <section className="difference-banner header-container">
        <Image
          src="/images/ASTRA Footer Banner.png"
          alt="Making a difference that matters"
          width={1240}
          height={220}
          className="difference-banner-img"
          sizes="(max-width: 1528px) calc(100vw - 48px), 1480px"
        />
      </section>
    </main>
  );
}
