"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import footerBanner from "@/public/images/ASTRA Footer Banner.png";

const footerLinks = [
  { label: "What is ASTRA?", href: "/#about" },
  { label: "Technology", href: "/technology" },
  { label: "Gases treated", href: "/gases-treated" },
  { label: "Advantages", href: "/advantages" },
  // { label: "Applications", href: "/#applications" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <footer className="site-footer">
      {isHomePage && (
        <div className="site-footer-banner-wrap">
          <Image className="site-footer-banner" src={footerBanner} alt="Making a difference that matters!" sizes="100vw" />
          <a href="/assets/astra-brochure.pdf" download="ASTRA-Brochure.pdf" className="site-brochure-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />
            </svg>
            <span>Download Brochure</span>
          </a>
        </div>
      )}
      <section id="contact-v2" className="site-contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Contact densitY Sustaintech</h2>
        <p>Let’s discuss your exhaust treatment requirements.</p>
        <Link href="/contact">Talk to our team →</Link>
      </section>
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
