import { NeedsApprovalSection } from "../approvals/NeedsApprovalSection";
import { StatsRow } from "../stats/StatsRow";
import { PartnerFunnelCard } from "../funnel/PartnerFunnelCard";
import { ProgramGrowthCard } from "../growth/ProgramGrowthCard";
import LazyLoadOnView from "@/components/common/LazyLoadOnView";
import { PayoutGrowthCard } from "../payout/PayoutGrowthCard";

export function MainContent() {
  return (
    <div className="space-y-6">
      <LazyLoadOnView>
        <NeedsApprovalSection />
      </LazyLoadOnView>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left – smaller */}
        <div className="lg:w-1/4">
          <LazyLoadOnView>
            <PayoutGrowthCard />
          </LazyLoadOnView>
        </div>

        {/* Right – larger */}
        <div className="lg:w-3/4">
          <LazyLoadOnView>
            <PartnerFunnelCard />
          </LazyLoadOnView>
        </div>
      </div>
      <LazyLoadOnView>
        <StatsRow />
      </LazyLoadOnView>
      <LazyLoadOnView>
        <ProgramGrowthCard />
      </LazyLoadOnView>
    </div>
  );
}
