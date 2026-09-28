type IconName = "arrow" | "energy" | "molecule" | "box" | "leaf" | "flow" | "lab" | "factory" | "research" | "cost" | "temperature";
const paths: Record<IconName, string> = {
  arrow: "M4 12h16m-6-6 6 6-6 6",
  energy: "m13 2-9 12h7l-1 8 10-12h-7l1-8Z",
  molecule: "M9 7 5 14m3 3h8m1-3-4-7M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm14 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
  box: "m3 7 9-5 9 5v10l-9 5-9-5V7Zm0 0 9 5 9-5m-9 5v10M7 5l10 5",
  leaf: "M5 19C-2 7 9 3 21 3c0 13-6 20-16 16Zm0 0L16 8M3 21l2-2",
  flow: "M3 7h15m-4-4 4 4-4 4M21 17H6m4-4-4 4 4 4",
  lab: "M9 3h6m-5 0v7L4 19c-.5 1 .2 2 1 2h14c1 0 1.5-1 1-2l-6-9V3M7 15h10",
  factory: "M3 21V9l6 3V7l6 4V3h5l1 18H3Zm4-5v2m5-2v2m5-2v2",
  research: "M4 21h16M9 3h6v4H9V3Zm2 4v6m2-6v6H9m6-4a6 6 0 0 1 0 12M5 16h10M7 21v-5",
  cost: "M12 3v18m4-14H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H7",
  temperature: "M9 14V5a3 3 0 0 1 6 0v9a5 5 0 1 1-6 0Zm3-6v10m7-12h2m-2 4h2",
};
export default function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>;
}
