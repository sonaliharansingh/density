import type { Metadata } from "next";
import ModelsTabs from "./ModelsTabs";

export const metadata: Metadata = {
  title: "ASTRA Models | densitY Sustaintech",
  description:
    "ASTRA waste gas treatment models for industrial, laboratory and mobile solutions.",
};

export default function ModelsPage() {
  return <ModelsTabs />;
}
