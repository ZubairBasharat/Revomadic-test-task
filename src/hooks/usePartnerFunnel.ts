import { useQuery } from "@tanstack/react-query";
import {
  fetchPartnerFunnel,
  type PartnerFunnelItem,
} from "@/api/partnerFunnel.api";

export const usePartnerFunnel = () => {
  return useQuery<PartnerFunnelItem[]>({
    queryKey: ["partner-funnel"],
    queryFn: fetchPartnerFunnel,
  });
};
