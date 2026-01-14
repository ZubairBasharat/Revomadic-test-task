import { fakeDelay } from "./fakeDelay";

export interface DashboardTab {
  value: string;
  label: string;
  meta: string;
}

const tabs: DashboardTab[] = [
  { value: "performance", label: "Performance", meta: "$334.4k" },
  { value: "social", label: "Social", meta: "24M Views" },
  { value: "partners", label: "Partners", meta: "400 rebates" },
  { value: "campaigns", label: "Campaigns", meta: "1500 reviews" },
  { value: "content", label: "Content", meta: "30k assets" },
  { value: "inbox", label: "Inbox", meta: "40 unread" },
  { value: "operations", label: "Operations", meta: "12 Active" },
  { value: "expenses", label: "Expenses", meta: "20 requests" },
];

export const fetchDashboardTabs = async (): Promise<DashboardTab[]> => {
  await fakeDelay(500);

  const shouldFail = false;
  if (shouldFail) throw new Error("Failed to load dashboard tabs");

  return tabs;
};
