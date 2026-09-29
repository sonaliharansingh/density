"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import banner from "@/public/images/ASTRA Main Banner.png";

const navItems = [
  { label: "Technology", href: "/technology" },
  { label: "Gases Treated", href: "/gases-treated" },
  { label: "Advantages", href: "/advantages" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact Us", href: "#contact-v2" },
];

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/home-v2";
  return (
    <header className={`site-header${isHomePage ? "" : " site-header-compact"}`}>
      <Link href="/home-v2" className="site-banner" aria-label="ASTRA home">
        <Image src={banner} alt="ASTRA by densitY Sustaintech ? Waste Gas Treatment System" sizes="100vw" preload />
      </Link>
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
