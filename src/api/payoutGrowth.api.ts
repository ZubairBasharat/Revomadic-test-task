import { fakeDelay } from "./fakeDelay";

/* ---------------- TYPES ---------------- */
export interface BarData {
  height: number;
  color: string;
  label: string;
}

/* ---------------- MOCK DATA ---------------- */
const bars: BarData[] = [
  { height: 72, color: "bg-gray-200", label: "01.23" },
  { height: 84, color: "bg-gray-200", label: "02.23" },
  { height: 76, color: "bg-gray-200", label: "03.23" },
  { height: 94, color: "bg-black", label: "" },
  { height: 118, color: "bg-black", label: "" },
  { height: 92, color: "bg-black", label: "" },
  { height: 64, color: "bg-black", label: "" },
  { height: 120, color: "bg-black", label: "" },
  { height: 112, color: "bg-lime-400", label: "09.23" },
];

/* ---------------- FAKE API ---------------- */
export const fetchPayoutBars = async (): Promise<BarData[]> => {
  await fakeDelay(800);

  const shouldFail = false;
  if (shouldFail) throw new Error("Failed to load payout growth data");

  return bars;
};
