import Image from "next/image";
import Link from "next/link";
import companyLogo from "@/public/images/densitY_Sustaintech_Logo.png";
import FooterBanner from "./FooterBanner";

const usefulLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Orders & Enquiries", href: "/contact" },
  { label: "Contact Us", href: "/contact" },
];

const products = [
  "Chemical Science",
  "Life Science",
  "Analytical Science",
  "Catalysts and Ligands",
];

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* <div className="footer-contact-cta">
        <div>
          <p className="eyebrow">LET’S TALK ABOUT YOUR PROCESS</p>
          <h2>Find the right ASTRA solution.</h2>
        </div>
        <Link href="/contact" className="footer-contact-button">Contact Us <span aria-hidden="true">→</span></Link>
      </div> */}  
      <FooterBanner />
      <div className="header-container">
        <div className="footer-main">
          <section
            className="footer-company"
            aria-label="Company contact details"
          >
            <Link href="/" className="footer-brand" aria-label="Density home">
              <Image
                src={companyLogo}
                alt="Density"
                className="footer-company-logo"
                sizes="260px"
              />
            </Link>
            <address>
              Density Pharmachem Private Limited.
              <br />
              Sy No 615/A &amp; 624/2/1, Pudur Village
              <br />
              Medchal-Malkajgiri District,
              <br />
              Hyderabad, Telangana - 501 401
              <br />
              India.
            </address>
            <p className="footer-contact-line">
              <strong>Phone:</strong>{" "}
              <a href="tel:+919898991174">+91 98989 91174</a>
            </p>
            <p className="footer-contact-line">
              <strong>Email:</strong>{" "}
              <a href="mailto:sales@densitypharmachem.com">
                sales@densitypharmachem.com
              </a>
            </p>
            <div className="footer-social">
              <span className="footer-heading">Follow Us</span>
              <a
                href="https://www.linkedin.com/company/density-pharmachem/"
                aria-label="LinkedIn profile (add your profile URL)"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5.2 8.6H2.4V21h2.8V8.6ZM3.8 7.2a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM21.6 13.9c0-3.7-2-5.5-4.7-5.5a4.1 4.1 0 0 0-3.7 2V8.6h-2.8V21h2.8v-6.1c0-1.6.3-3.2 2.4-3.2s2.2 1.9 2.2 3.3V21h2.8l1-7.1Z" />
                </svg>
                LinkedIn
              </a>
              {/* <a
                href="https://wa.me/918260900659"
                aria-label="WhatsApp (add your number)"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.5 3.5A11.8 11.8 0 0 0 2 17.7L.5 23.5l6-1.6A11.8 11.8 0 0 0 20.5 3.5ZM12 21a9.1 9.1 0 0 1-4.6-1.2l-.3-.2-3.5.9.9-3.4-.2-.4A9 9 0 1 1 12 21Zm5-6.8c-.3-.2-1.7-.9-2-.9s-.5-.2-.7.2-.8.9-1 .1-.4-.2-.7-.3a7.4 7.4 0 0 1-2.2-1.4 8.3 8.3 0 0 1-1.5-1.9c-.2-.4 0-.6.2-.8l.5-.6c.2-.2.2-.4.3-.5s0-.4 0-.5c-.1-.2-.7-1.7-1-2.3-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1.1 2.7 1.3 2.9c.2.2 2.1 3.3 5.1 4.5 1.9.8 2.7.8 3.6.7.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.1-1.3s-.3-.2-.6-.4Z" />
                </svg>
                WhatsApp
              </a> */}
            </div>
          </section>

          <nav className="footer-link-column" aria-label="Useful links">
            <h2 className="footer-heading">Useful Links</h2>
            {usefulLinks.map((link) => (
              <Link href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </nav>

          <section
            className="footer-link-column"
            aria-labelledby="footer-products-title"
          >
            <h2 className="footer-heading" id="footer-products-title">
              Products
            </h2>
            {products.map((product) => (
              <span key={product}>{product}</span>
            ))}
          </section>

          <section
            className="footer-location"
            aria-labelledby="footer-location-title"
          >
            <h2 className="footer-heading" id="footer-location-title">
              Locate Us
            </h2>
            <a
              className="footer-map-link"
              href="https://www.google.com/maps/search/?api=1&query=Density+Pharmachem+Private+Limited%2C+Pudur%2C+Hyderabad%2C+Telangana+501401"
              target="_blank"
              rel="noreferrer"
            >
              Open in Maps <span aria-hidden="true">↗</span>
            </a>
            <iframe
              className="footer-map"
              title="Map showing Density Pharmachem in Pudur, Hyderabad"
              src="https://maps.google.com/maps?q=Density%20Pharmachem%20Private%20Limited%2C%20Pudur%2C%20Hyderabad%2C%20Telangana%20501401&z=14&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>
        </div>

        <div className="footer-legal">
          <p>
            © 2026 <strong>Density Pharmachem</strong> &nbsp;All Rights Reserved
          </p>
          <p>
            <a href="#privacy-policy">Privacy Policy</a>{" "}
            <span aria-hidden="true">|</span>{" "}
            <a href="#terms-and-conditions">Terms &amp; Conditions</a>
          </p>
          <p className="footer-designed">
            Designed by{" "}
            <a href="https://vincatis.com" target="_blank" rel="noreferrer">
              vincatis
            </a>
            <br />
            Vincatis Technologies Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
}
