import { useQuery } from "@tanstack/react-query";
import { fetchStatsCards, type StatCardProps } from "@/api/stats.api";

export const useStatsCards = () => {
  return useQuery<StatCardProps[]>({
    queryKey: ["stats-cards"],
    queryFn: fetchStatsCards,
  });
};
