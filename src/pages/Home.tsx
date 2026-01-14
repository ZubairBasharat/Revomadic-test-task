import { DashboardLayout } from "@/components/partials/DashboardLayout";
import { DashboardHeader } from "@/components/partials/Navbar";
import { DashboardTabs } from "@/components//dashboard/tabs/DashboardTabs";
import { DashboardGrid } from "@/components/partials/DashboardGrid";
import { LeadStatusRow } from "@/components/dashboard/statusbar";

export default function DashboardOverview() {
  return (
    <div className="bg-gray-50">
      <DashboardHeader />
      <DashboardLayout>
        <LeadStatusRow />
        <DashboardTabs />
        <DashboardGrid />
      </DashboardLayout>
    </div>
  );
}
