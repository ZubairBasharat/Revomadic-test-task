import { useQuery } from "@tanstack/react-query";
import {
  fetchDashboardUser,
  type DashboardUser,
} from "@/api/dashboardHeader.api";

export const useDashboardUser = () => {
  return useQuery<DashboardUser>({
    queryKey: ["dashboard-user"],
    queryFn: fetchDashboardUser,
  });
};
