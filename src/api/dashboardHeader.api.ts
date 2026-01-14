import { fakeDelay } from "./fakeDelay";

export interface DashboardUser {
  name: string;
  id: string;
  status: "In progress" | "Completed" | "Pending";
}

export const fetchDashboardUser = async (): Promise<DashboardUser> => {
  await fakeDelay(500); // simulate network delay

  const shouldFail = false;
  if (shouldFail) throw new Error("Failed to fetch user data");

  return {
    name: "Carolina",
    id: "5732",
    status: "In progress",
  };
};
