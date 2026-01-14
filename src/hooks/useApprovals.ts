import { useQuery } from "@tanstack/react-query";
import { fetchApprovals } from "@/api/approvals.api";

export const useApprovals = () => {
  return useQuery({
    queryKey: ["approvals"],
    queryFn: fetchApprovals,
  });
};
