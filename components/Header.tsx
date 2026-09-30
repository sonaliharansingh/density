"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import banner from "@/public/images/ASTRA Main Banner.png";

const navItems = [
  { label: "Technology", href: "/technology" },
  { label: "Gases Treated", href: "/gases-treated" },
  { label: "Advantages", href: "/advantages" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [openMenuPath, setOpenMenuPath] = useState<string | null>(null);
  const isMenuOpen = openMenuPath === pathname;
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const isHomePage = pathname === "/";

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 801px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpenMenuPath(null);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !menuRef.current?.contains(event.target)) {
        setOpenMenuPath(null);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenuPath(null);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className={`site-header${isHomePage ? "" : " site-header-compact"}`}>
      <Link href="/" className="site-banner" aria-label="ASTRA home">
        <Image src={banner} alt="ASTRA by densitY Sustaintech ? Waste Gas Treatment System" sizes="100vw" preload />
      </Link>
      <div
        ref={menuRef}
        className="mobile-menu-wrap"
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenuPath(null);
        }}
      >
        <button
          ref={toggleRef}
          type="button"
          className="site-menu-toggle"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setOpenMenuPath(isMenuOpen ? null : pathname)}
        >
          <span>{isMenuOpen ? "Close" : "Menu"}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d={isMenuOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation" hidden={!isMenuOpen}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.href === "/contact" ? "mobile-menu-contact" : undefined}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setOpenMenuPath(null)}
            >
              {item.label}<span aria-hidden="true">&#8594;</span>
            </Link>
          ))}
        </nav>
      </div>
      <nav className="site-navigation" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
