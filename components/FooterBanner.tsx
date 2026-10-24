import Image from "next/image";
import footerBanner from "@/public/images/ASTRA Footer Banner 2.png";

export default function FooterBanner() {
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
