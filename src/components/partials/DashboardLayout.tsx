import type { ReactNode } from "react";

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="mx-auto container p-4 space-y-6">{children}</div>
    </div>
  );
}
