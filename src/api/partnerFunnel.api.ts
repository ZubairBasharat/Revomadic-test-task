import { fakeDelay } from "./fakeDelay";

/* ---------------- TYPES ---------------- */

export type FunnelItem = {
  label: string;
  value: string;
};

export type PartnerFunnelItem = {
  id: string;
  label: string;
  Growth?: number;
  TotalGrowth?: number;
  FunnelDataType: FunnelItem[];
};

/* ---------------- MOCK DATA ---------------- */

const funnelData: PartnerFunnelItem[] = [
  {
    id: "1",
    label: "Last Quarter",
    Growth: 37,
    TotalGrowth: 6663,
    FunnelDataType: [
      { label: "Total Market", value: "142,382" },
      { label: "Prospects", value: "87,027" },
      { label: "Leads", value: "48,027" },
      { label: "Sales", value: "32,027" },
    ],
  },
  {
    id: "2",
    label: "What has influenced",
    Growth: 12,
    TotalGrowth: 120,
    FunnelDataType: [
      { label: "Total Market", value: "142,382" },
      { label: "Prospects", value: "87,027" },
      { label: "Leads", value: "48,027" },
      { label: "Sales", value: "32,027" },
    ],
  },
  {
    id: "3",
    label: "Forecast",
    Growth: 12,
    TotalGrowth: 120,
    FunnelDataType: [
      { label: "Total Leads", value: "142" },
      { label: "Leads", value: "48" },
      { label: "Relations", value: "320" },
    ],
  },
];

/* ---------------- FAKE API ---------------- */

export const fetchPartnerFunnel = async (): Promise<PartnerFunnelItem[]> => {
  await fakeDelay(1000);

  const shouldFail = false;
  if (shouldFail) {
    throw new Error("Failed to load partner funnel data");
  }

  return funnelData;
};
