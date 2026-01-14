// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import { Separator } from "@/components/ui/separator";
// import { PartnersSubHeader } from "./SubHeader";

// const tabs = [
//   { value: "performance", label: "Performance", meta: "$334.4k" },
//   { value: "social", label: "Social", meta: "24M Views" },
//   { value: "partners", label: "Partners", meta: "400 rebates" },
//   { value: "campaigns", label: "Campaigns", meta: "1500 reviews" },
//   { value: "content", label: "Content", meta: "30k assets" },
//   { value: "inbox", label: "Inbox", meta: "40 unread" },
//   { value: "operations", label: "Operations", meta: "12 Active" },
//   { value: "expenses", label: "Expenses", meta: "20 requests" },
// ];

// export function DashboardTabs() {
//   return (
//     <div className="bg-card flex flex-col">
//       <ScrollArea className="w-full overflow-x-auto overflow-y-hidden">
//         <Tabs defaultValue="partners">
//           <TabsList className="flex w-max gap-2 bg-transparent px-2 h-max">
//             {tabs.map((tab) => (
//               <TabsTrigger
//                 key={tab.value}
//                 value={tab.value}
//                 className="
//                   flex flex-col items-start justify-center
//                   rounded-t-xl rounded-b-none
//                   px-5 py-3
//                   h-20
//                   min-w-30
//                   text-left
//                   data-[state=active]:bg-lime-300
//                   data-[state=active]:text-black
//                   data-[state=active]:shadow-sm
//                   text-muted-foreground
//                   hover:data-[state=inactive]:bg-lime-100
//                   cursor-pointer
//                 "
//               >
//                 <span className="text-sm font-medium">{tab.label}</span>
//                 <span className="text-xs opacity-70">{tab.meta}</span>
//               </TabsTrigger>
//             ))}
//           </TabsList>
//         </Tabs>

//         <ScrollBar orientation="horizontal" />
//       </ScrollArea>
//       <Separator className="m-0 p-0 -mt-0.5" />
//       <PartnersSubHeader />
//     </div>
//   );
// }
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { PartnersSubHeader } from "./SubHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { useDashboardTabs } from "@/hooks/useDashboardTabs";

export function DashboardTabs() {
  const { data: tabs, isLoading, isError, error } = useDashboardTabs();

  if (isError)
    return <p className="text-red-500 text-xs">{(error as Error).message}</p>;

  return (
    <div className="bg-card flex flex-col">
      <ScrollArea className="w-full overflow-x-auto overflow-y-hidden">
        <Tabs defaultValue="partners">
          <TabsList className="flex w-max gap-2 bg-transparent px-2 h-max">
            {isLoading &&
              Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-20 w-32 rounded-lg" />
              ))}

            {tabs?.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="
                  flex flex-col items-start justify-center
                  rounded-t-xl rounded-b-none
                  px-5 py-3
                  h-20
                  min-w-30
                  text-left
                  data-[state=active]:bg-lime-300
                  data-[state=active]:text-black
                  data-[state=active]:shadow-sm
                  text-muted-foreground
                  hover:data-[state=inactive]:bg-lime-100
                  cursor-pointer
                "
              >
                <span className="text-sm font-medium">{tab.label}</span>
                <span className="text-xs opacity-70">{tab.meta}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <Separator className="m-0 p-0 -mt-0.5" />
      <PartnersSubHeader />
    </div>
  );
}
