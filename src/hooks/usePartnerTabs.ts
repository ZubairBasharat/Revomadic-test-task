import { useQuery } from "@tanstack/react-query";
import { fetchPartnerTabs, type PartnerTab } from "@/api/partnerSubHeader.api";

export const usePartnerTabs = () => {
  return useQuery<PartnerTab[]>({
    queryKey: ["partner-tabs"],
    queryFn: fetchPartnerTabs,
  });
};
