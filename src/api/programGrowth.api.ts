import { fakeDelay } from "./fakeDelay";

/* ================= TYPES ================= */

export type ProgramGrowth = {
  name: string;
  percentage: number;
};

export interface GrowthCategory {
  name: string;
  growth: number;
  programGrowth: ProgramGrowth[];
}

/* ================= MOCK DATA ================= */

const programGrowth1: ProgramGrowth[] = [
  { name: "Levanta", percentage: 45 },
  { name: "Impact", percentage: 32 },
  { name: "Social Snowball", percentage: 28 },
  { name: "Shopify Collabs", percentage: 19 },
];

const programGrowth2: ProgramGrowth[] = [
  { name: "Levanta", percentage: 68 },
  { name: "Impact", percentage: 55 },
  { name: "Social Snowball", percentage: 42 },
  { name: "Shopify Collabs", percentage: 30 },
];

const programGrowth3: ProgramGrowth[] = [
  { name: "Levanta", percentage: 88 },
  { name: "Impact", percentage: 76 },
  { name: "Social Snowball", percentage: 64 },
  { name: "Shopify Collabs", percentage: 51 },
];

const growthTabs: GrowthCategory[] = [
  {
    name: "APPLICATION",
    growth: 124,
    programGrowth: programGrowth1,
  },
  {
    name: "PRODUCT",
    growth: 32,
    programGrowth: programGrowth2,
  },
  {
    name: "CAMPAIGN",
    growth: 87,
    programGrowth: programGrowth3,
  },
];

/* ================= FAKE API ================= */

export const fetchProgramGrowth = async (): Promise<GrowthCategory[]> => {
  await fakeDelay(900);

  const shouldFail = false;
  if (shouldFail) {
    throw new Error("Failed to load program growth");
  }

  return growthTabs;
};
