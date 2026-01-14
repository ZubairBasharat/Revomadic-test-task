import { fakeDelay } from "./fakeDelay";
import { type IconName } from "lucide-react/dynamic";

/* ---------------- TYPES ---------------- */
export interface StatCardProps {
  label?: string;
  value?: number;
  icon?: IconName;
  iconColor?: string;
  iconBgColor?: string;
  desc?: string;
  growth?: string;
}

/* ---------------- MOCK DATA ---------------- */
const statCards: StatCardProps[] = [
  {
    label: "Outreached",
    value: 1240,
    desc: "Partners Contacted",
    growth: "+15",
    icon: "target",
    iconColor: "text-blue-500",
    iconBgColor: "bg-blue-100",
  },
  {
    label: "Onboarded",
    value: 85,
    desc: "Active in Program",
    growth: "+8",
    icon: "circle-check",
    iconColor: "text-green-500",
    iconBgColor: "bg-green-100",
  },
  {
    label: "Awaiting Deliverables",
    value: 12,
    desc: "Pending Content",
    icon: "clock",
    iconColor: "text-yellow-500",
    iconBgColor: "bg-yellow-100",
  },
];

/* ---------------- FAKE API ---------------- */
export const fetchStatsCards = async (): Promise<StatCardProps[]> => {
  await fakeDelay(700);

  const shouldFail = false;
  if (shouldFail) throw new Error("Failed to load stats cards");

  return statCards;
};
