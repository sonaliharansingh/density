"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    label: "Technology",
    href: "/technology",
  },
  {
    label: "Gases Treated",
    href: "/gases-treated",
  },
  {
    label: "Advantages",
    href: "/advantages",
  },
  {
    label: "Case Studies",
    href: "#case-studies",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      {/* Top information bar */}
      <div className="top-bar">
        <div className="header-container top-bar-inner">
          <p>Advanced VUV-Based Waste Gas Treatment Technology</p>

          <div className="top-bar-right">
            <span>ASTRA{"\u2122"}</span>
            <span className="top-divider" />
            <span>densitY Sustaintech</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="main-header">
        <div className="header-container header-inner">
          {/* Logo */}
          <Link
            href="/"
            className="brand"
            aria-label="densitY Sustaintech home"
          >
            <div className="brand-logo">
              <Image
                src="/images/ASTRA Logo.png"
                alt="ASTRA"
                width={170}
                height={55}
                priority
              />
            </div>

            <div className="brand-divider" />

            <div className="brand-company">
              <span>densitY</span>
              <small>SUSTAINTECH</small>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${pathname === item.href ? "is-active" : ""}`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link href="#contact" className="header-cta">
            <span>Contact Us</span>

            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Mobile menu button */}
          <button
            className={`mobile-menu-button ${menuOpen ? "is-open" : ""}`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile navigation */}
        <nav
          id="mobile-navigation"
          className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
        >
          <div className="mobile-nav-inner">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-nav-link ${pathname === item.href ? "is-active" : ""}`}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={closeMenu}
              >
                {item.label}

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}

            <Link
              href="#contact"
              className="mobile-contact"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
