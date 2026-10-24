"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InterestButton() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="global-interest-slot">
      <Link href="/contact" className="footer-contact-button">
        <span>I’m Interested</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      </Link>
    </div>
  );
}
