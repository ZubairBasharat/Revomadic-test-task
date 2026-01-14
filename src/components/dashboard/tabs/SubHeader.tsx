import { Search, Calendar, MoreHorizontal, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import SearchDialog from "@/components/common/SearchDialog";
import SearchBar from "@/components/common/Searchbar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { usePartnerTabs } from "@/hooks/usePartnerTabs";

export function PartnersSubHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const { data: partnerTabs, isLoading, isError, error } = usePartnerTabs();

  return (
    <div className="pb-3 bg-card shadow-sm mb-4 mx-6 rounded-b-2xl">
      <ScrollArea className="flex-1 overflow-x-auto">
        <Tabs
          defaultValue="overview"
          className="mb-4 w-full border-b bg-transparent"
        >
          <TabsList className="bg-transparent p-0 shadow-none h-auto">
            {isLoading &&
              Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-24 rounded-md" />
              ))}

            {isError && (
              <p className="text-red-500 text-xs">{(error as Error).message}</p>
            )}

            {partnerTabs?.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="
                  rounded-none
                  border-b-2 border-transparent
                  bg-transparent
                  pb-3
                  shadow-none
                  text-sm font-medium text-muted-foreground
                  data-[state=active]:border-b-primary
                  data-[state=active]:text-foreground
                  cursor-pointer
                  hover:data-[state=inactive]:text-foreground
                  hover:data-[state=inactive]:bg-accent
                "
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="flex items-center justify-between gap-4 px-6">
        {/* LEFT */}
        <div className="flex flex-col lg:flex-row items-center gap-3 text-sm">
          <Badge
            variant="outline"
            className="rounded-full px-3 py-1 font-medium"
          >
            Partners / Overview
          </Badge>

          <span className="text-muted-foreground font-medium text-[10px]">
            Last synced:{" "}
            <span className="text-foreground text-xs">Just now</span>
            <RotateCcw className="inline-block h-3 w-3 ml-2 cursor-pointer text-muted-foreground hover:text-foreground" />
          </span>
        </div>

        {/* CENTER */}
        <div className="relative hidden lg:flex w-105">
          <SearchBar placeholderText="Search partners..." centerPlaceholder />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2">
          <div
            onClick={() => setSearchOpen(true)}
            className="lg:hidden rounded-full border border-gray-200 bg-card hover:bg-gray-100 p-2 cursor-pointer"
          >
            <Search className="h-5 w-5 text-gray-600" />
          </div>

          <Button
            variant="outline"
            size="sm"
            className="gap-1 rounded-full p-4"
          >
            <Calendar className="h-4 w-4" />
            <span className="hidden lg:flex text-[10px]">Oct 1 – Oct 31</span>
          </Button>

          <div className="hidden md:flex items-center flex-row">
            <div className="flex items-center cursor-pointer hover:text-black font-medium text-gray-400 text-xs border-r border-gray-200 shadow-none px-2">
              Filter
            </div>
            <div className="flex items-center cursor-pointer hover:text-black font-medium text-gray-400 text-xs border-r border-gray-200 shadow-none px-2">
              Export
            </div>
          </div>

          <Button variant="ghost" size="icon" className="rounded-full">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <SearchDialog
        open={searchOpen}
        onOpenChange={setSearchOpen}
        placeholderText="Search Partners..."
      />
    </div>
  );
}
