import { useState } from "react";
import { MainContent } from "../dashboard/main/MainContent";
import { InboxPanel } from "../dashboard/inbox/InboxPanel";

export function DashboardGrid() {
  const [inboxOpen, setInboxOpen] = useState(false);

  return (
    <main
      className={`grid grid-cols-1 lg:gap-6 p-6 lg:grid-cols-[minmax(0,1fr)_auto]`}
      style={{ overflowX: "hidden" }}
    >
      {/* Main content */}
      <section className="lg:col-span-1">
        <MainContent />
      </section>

      {/* Inbox panel always present on large screens */}
      <aside className="lg:block">
        <InboxPanel open={inboxOpen} setOpen={setInboxOpen} />
      </aside>
    </main>
  );
}
