import { useQuery } from "@tanstack/react-query";
import { fetchPayoutBars, type BarData } from "@/api/payoutGrowth.api";

export const usePayoutGrowth = () => {
  return useQuery<BarData[]>({
    queryKey: ["payout-bars"],
    queryFn: fetchPayoutBars,
  });
};
