import { useQuery } from "@tanstack/react-query";
import { fetchInboxUsers, type User } from "@/api/inbox.api";

export const useInboxUsers = () => {
  return useQuery<User[]>({
    queryKey: ["inbox-users"],
    queryFn: fetchInboxUsers,
  });
};
