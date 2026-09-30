import type { Metadata } from "next";
import Icon from "@/components/Icon";
import ContactForm from "./ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us | ASTRA by densitY Sustaintech",
  description:
    "Discuss your exhaust treatment requirements with densitY Sustaintech. Share your process details to explore an ASTRA VUV treatment system.",
};

const checklist = [
  ["Your process", "Process description and operating schedule"],
  ["Your gas stream", "Gas composition, VOCs and concentration ranges"],
  ["Operating conditions", "Flow rate, temperature and humidity"],
  [
    "Site requirements",
    "Existing equipment, emission limits and space constraints",
  ],
];

export default function ContactPage() {
  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.inner}>
        <section className={styles.hero} aria-labelledby="contact-heading">
          <div>
            <span className={styles.eyebrow}>
              <span /> LET’S START A CONVERSATION
            </span>
            <h1 id="contact-heading">
              Cleaner air starts with
              <br /> <em>the right conversation.</em>
            </h1>
            <p>
              Tell us what’s in your exhaust. Together, we’ll explore an ASTRA
              treatment solution built around your process.
            </p>
            <div className={styles.tags}>
              <span>
                <Icon name="factory" /> Industrial applications
              </span>
              <span>
                <Icon name="lab" /> Laboratories & research
              </span>
            </div>
          </div>
          <div className={styles.heroMark} aria-hidden="true">
            <div className={styles.orbit}>
              <Icon name="leaf" />
              <i />
              <i />
            </div>
            <span>BETTER PROCESSES. CLEANER POSSIBILITIES.</span>
          </div>
        </section>

        <div className={styles.contactGrid}>
          <ContactForm />
          <aside className={styles.sidebar}>
            <section
              className={styles.contactCard}
              aria-labelledby="direct-heading"
            >
              <span className={styles.kicker}>A DIRECT CONNECTION</span>
              <h2 id="direct-heading">Prefer a conversation?</h2>
              <h2 id="direct-heading"></h2>
              <p>Get in touch with the densitY Sustaintech team.</p>
              <a
                className={styles.contactLink}
                href="mailto:jagadish@densitysustaintech.com"
              >
                <span className={styles.contactIcon}>@</span>
                <span>
                  <small>EMAIL US</small>
                  <strong>sonaliharansingh@gmail.com</strong>
                </span>
                <Icon name="arrow" />
              </a>
              <a className={styles.contactLink} href="tel:+919989777910">
                <span className={styles.contactIcon}>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="m7 3 3 5-3 3c2 3 3 4 6 6l3-3 5 3c0 3-2 5-5 4C8 19 5 16 3 8 2 5 4 3 7 3Z" />
                  </svg>
                </span>
                <span>
                  <small>CALL US</small>
                  <strong>+91 82609 00659</strong>
                </span>
                <Icon name="arrow" />
              </a>
              <div className={styles.location}>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
                  <circle cx="12" cy="10" r="2" />
                </svg>{" "}
                Mumbai, Maharashtra, India
              </div>
            </section>

            <section
              className={styles.checklist}
              aria-labelledby="checklist-heading"
            >
              <div className={styles.sectionLabel}>
                <Icon name="research" />
                <span>MAKE THE FIRST CONVERSATION COUNT</span>
              </div>
              <h2 id="checklist-heading">
                A little detail.
                <br />A better starting point.
              </h2>
              <p>Have these details handy, if available:</p>
              <ul>
                {checklist.map(([title, description]) => (
                  <li key={title}>
                    <span className={styles.check}>✓</span>
                    <div>
                      <strong>{title}</strong>
                      <p>{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className={styles.tip}>
                <Icon name="energy" />
                <p>
                  Still gathering your data? That’s okay. Start with what you
                  know and we can discuss the next steps.
                </p>
              </div>
            </section>
          </aside>
        </div>

        <section className={styles.nextSteps} aria-labelledby="next-heading">
          <div>
            <span className={styles.kicker}>
              FROM CONVERSATION TO CONFIGURATION
            </span>
            <h2 id="next-heading">What happens next?</h2>
          </div>
          <ol>
            <li>
              <span>01</span>
              <div>
                <h3>Understand your process</h3>
                <p>
                  We discuss your gas stream, challenges and treatment goals.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Explore the right approach</h3>
                <p>
                  We evaluate suitability, pre-treatment and integration needs.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Define the next steps</h3>
                <p>
                  Align on a proposed configuration and any further analysis.
                </p>
              </div>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
