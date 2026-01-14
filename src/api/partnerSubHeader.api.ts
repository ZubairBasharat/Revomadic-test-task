import { fakeDelay } from "./fakeDelay";

export interface PartnerTab {
  label: string;
  value: string;
}

const partnerTabs: PartnerTab[] = [
  { label: "Overview", value: "overview" },
  { label: "Database", value: "database" },
  { label: "Rebate Journey", value: "rebate" },
  { label: "Contracts", value: "contracts" },
  { label: "Retailers", value: "retailers" },
];

export const fetchPartnerTabs = async (): Promise<PartnerTab[]> => {
  await fakeDelay(500);

  const shouldFail = false;
  if (shouldFail) throw new Error("Failed to load partner tabs");

  return partnerTabs;
};
