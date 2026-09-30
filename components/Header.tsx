"use client";

import { useRef, useState } from "react";
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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const isMenuOpen = openMenuPath === pathname;
  const isHomePage = pathname === "/";
  return (
    <header
      className={`site-header${isHomePage ? "" : " site-header-compact"}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isMenuOpen) {
          setOpenMenuPath(null);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <Link href="/" className="site-banner" aria-label="ASTRA home" onClick={() => setOpenMenuPath(null)}>
        <Image src={banner} alt="ASTRA by densitY Sustaintech ? Waste Gas Treatment System" sizes="100vw" preload />
      </Link>
      <button
        ref={menuButtonRef}
        type="button"
        className="site-menu-toggle"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="site-navigation"
        onClick={() => setOpenMenuPath(isMenuOpen ? null : pathname)}
      >
        <span>{isMenuOpen ? "Close" : "Menu"}</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d={isMenuOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
      <nav id="site-navigation" className={`site-navigation${isMenuOpen ? " is-open" : ""}`} aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpenMenuPath(null)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
