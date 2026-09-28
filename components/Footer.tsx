import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "What is ASTRA?", href: "/#about" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Technology", href: "/technology" },
  { label: "Gases treated", href: "/gases-treated" },
  { label: "Advantages", href: "/advantages" },
  { label: "Applications", href: "/#applications" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="header-container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <Link href="/" className="footer-brand" aria-label="ASTRA home">
              <Image
                src="/images/ASTRA Logo.png"
                alt="ASTRA"
                width={170}
                height={55}
              />
            </Link>
            <p>
              Advanced VUV-Based Waste Gas Treatment Technology
            </p>
          </div>

          <div className="footer-navigation-block">
            <p className="footer-label">Explore ASTRA</p>
            <nav aria-label="Footer navigation" className="footer-nav">
              {footerLinks.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-company-block">
            <p className="footer-label">Engineered by</p>
            <span className="company-wordmark">densitY</span>
            <span className="company-subtitle">SUSTAINTECH</span>
            <p>Making a difference<br/>that matters.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>densitY Sustaintech</span>
          <span>ASTRA{"\u2122"} waste gas treatment</span>
        </div>
      </div>
    </footer>
  );
}
