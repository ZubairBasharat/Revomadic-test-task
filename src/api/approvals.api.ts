import { fakeDelay } from "./fakeDelay";

/* ---------- TYPES ---------- */
export interface ApprovalItem {
  id: string;
  name: string;
  action: string;
  time: string;
}

/* ---------- MOCK DATA ---------- */
const approvals: ApprovalItem[] = [
  {
    id: "1",
    name: "UrbanFit Life",
    action: "Approve Content",
    time: "2h ago",
  },
  {
    id: "2",
    name: "TechSavvy Mom",
    action: "Approve Commission",
    time: "5h ago",
  },
  {
    id: "3",
    name: "Daily Gadgets",
    action: "Validate Lead",
    time: "1d ago",
  },
  {
    id: "4",
    name: "Yoga with Jen",
    action: "Approve Invoice",
    time: "1d ago",
  },
];

/* ---------- FAKE API ---------- */
export const fetchApprovals = async (): Promise<ApprovalItem[]> => {
  await fakeDelay(900);

  // flip this to test error UI
  const shouldFail = false;
  if (shouldFail) {
    throw new Error("Failed to load approvals");
  }

  return approvals;
};
