import { fakeDelay } from "./fakeDelay";

/* ---------------- TYPES ---------------- */
export interface StatItem {
  label: string;
  desc: string;
  img?: string;
}

/* ---------------- MOCK DATA ---------------- */
const staticStats: StatItem[] = [
  { label: "Creative Director", desc: "Instagram follow-up" },
  { label: "Media Buyer", desc: "ROAS is up 15% on the market" },
  {
    label: "Sarah J",
    desc: "Velto Inc. approved",
    img: "https://github.com/maxleiter.png",
  },
  { label: "Contacts", desc: "180" },
  { label: "Media Team", desc: "Check the inbox" },
  { label: "Social Bot", desc: "Instagram Engagement" },
];

/* ---------------- FAKE API ---------------- */
export const fetchLeadStatus = async (): Promise<StatItem[]> => {
  await fakeDelay(600);

  const shouldFail = false;
  if (shouldFail) throw new Error("Failed to load lead status");

  return staticStats;
};
