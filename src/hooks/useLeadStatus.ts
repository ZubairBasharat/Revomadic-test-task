import { useQuery } from "@tanstack/react-query";
import { fetchLeadStatus, type StatItem } from "@/api/leadStatus.api";

export const useLeadStatus = () => {
  return useQuery<StatItem[]>({
    queryKey: ["lead-status"],
    queryFn: fetchLeadStatus,
  });
};
