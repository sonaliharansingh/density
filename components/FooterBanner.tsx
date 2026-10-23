"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import footerBanner from "@/public/images/ASTRA Footer Banner 2.png";

export default function FooterBanner() {
  const isHomePage = usePathname() === "/";

  if (!isHomePage) return null;

  return (
    <div className="site-footer-banner-wrap">
      <Image
        className="site-footer-banner"
        src={footerBanner}
        alt="Making a difference that matters!"
        sizes="100vw"
      />
    </div>
  );
}
