import { Bell, ChevronDown } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { useLeadStatus } from "@/hooks/useLeadStatus";

export function LeadStatusRow() {
  const { data: stats, isLoading, isError, error } = useLeadStatus();

  return (
    <div className="flex items-center gap-2 bg-card shadow-sm px-6 py-1 rounded-full">
      {/* Left label */}
      <div className="flex items-center border-r border-gray-100 dark:border-[#303030] pr-4 shrink-0">
        <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center text-white mr-3 shadow-sm">
          <Bell className="w-4 h-4" />
        </div>
        <div className="text-[10px] text-gray-900 dark:text-white leading-tight">
          <div className="font-bold text-xs">LATEST</div>
          <div className="font-light">Updates</div>
        </div>
      </div>

      {/* Scrollable statuses */}
      <ScrollArea className="flex-1 overflow-x-auto">
        <div className="flex items-center gap-3 px-2 py-2 md:py-0">
          {isLoading &&
            Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-24 rounded-full" />
            ))}

          {isError && (
            <p className="text-red-500 text-xs">{(error as Error).message}</p>
          )}

          {stats?.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-1
                rounded-full bg-[#F8F9FB] dark:bg-[#1a1a1a]
                border border-gray-100 dark:border-[#303030]
                whitespace-nowrap shrink-0"
            >
              {/* Avatar */}
              <Avatar className="h-6 w-6">
                <AvatarImage src={stat.img} alt={stat.label} />
                <AvatarFallback className="bg-white">
                  {stat.label.charAt(0)}
                </AvatarFallback>
              </Avatar>

              {/* Text */}
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-medium text-gray-700">
                  {stat.label}
                </span>
                <span className="text-[10px] text-gray-500 line-clamp-1 w-20 whitespace-pre">
                  {stat.desc}
                </span>
              </div>

              {/* Status dot */}
              <span className="w-2 h-2 rounded-full bg-green-400 ml-2" />
            </div>
          ))}
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {/* Dropdown */}
      <button className="bg-white border p-1.5 rounded-full hover:bg-gray-100 cursor-pointer shrink-0">
        <ChevronDown className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
}
