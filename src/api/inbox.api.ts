import { fakeDelay } from "./fakeDelay";

/* ---------------- TYPES ---------------- */
export interface User {
  id: string;
  name: string;
  img?: string;
}

/* ---------------- MOCK DATA ---------------- */
const users: User[] = [
  { id: "1", name: "Sarah Jenkins", img: "https://github.com/shadcn.png" },
  { id: "2", name: "Mike Ross", img: "https://github.com/evilrabbit.png" },
  { id: "3", name: "Elena Fisher", img: "https://github.com/maxleiter.png" },
  { id: "4", name: "Anna Lee" },
  { id: "5", name: "Sarah Jenkins", img: "https://github.com/shadcn.png" },
  { id: "6", name: "Mike Ross", img: "https://github.com/evilrabbit.png" },
  { id: "7", name: "Elena Fisher", img: "https://github.com/maxleiter.png" },
  { id: "8", name: "Anna Lee" },
  { id: "9", name: "Sarah Jenkins", img: "https://github.com/shadcn.png" },
  { id: "10", name: "Mike Ross", img: "https://github.com/evilrabbit.png" },
  { id: "11", name: "Elena Fisher", img: "https://github.com/maxleiter.png" },
  { id: "12", name: "Anna Lee" },
];

/* ---------------- FAKE API ---------------- */
export const fetchInboxUsers = async (): Promise<User[]> => {
  await fakeDelay(900);

  const shouldFail = false;
  if (shouldFail) {
    throw new Error("Failed to load inbox users");
  }

  return users;
};
