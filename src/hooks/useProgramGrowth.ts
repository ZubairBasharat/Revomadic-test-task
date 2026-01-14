import { useQuery } from "@tanstack/react-query";
import {
  fetchProgramGrowth,
  type GrowthCategory,
} from "@/api/programGrowth.api";

export const useProgramGrowth = () => {
  return useQuery<GrowthCategory[]>({
    queryKey: ["program-growth"],
    queryFn: fetchProgramGrowth,
  });
};
