import { useQuery } from "@tanstack/react-query";
import { fetchDashboardTabs, type DashboardTab } from "@/api/dashboardTabs.api";

export const useDashboardTabs = () => {
  return useQuery<DashboardTab[]>({
    queryKey: ["dashboard-tabs"],
    queryFn: fetchDashboardTabs,
  });
};
