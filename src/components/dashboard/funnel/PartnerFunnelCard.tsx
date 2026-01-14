import * as React from "react";
import CountUp from "react-countup";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap } from "lucide-react";
import { usePartnerFunnel } from "@/hooks/usePartnerFunnel";
import { Skeleton } from "@/components/ui/skeleton";

function valueToHeight(value: string, divisor = 1000, min = 24, max = 160) {
  const numeric = Number(value.replace(/,/g, ""));
  const height = Math.floor(numeric / divisor);
  return Math.min(Math.max(height, min), max);
}

function getBarColor(height: number) {
  if (height >= 100) return "bg-white/50";
  if (height >= 80) return "bg-white/40";
  if (height >= 40) return "bg-white/20";
  return "bg-black";
}

export function PartnerFunnelCard() {
  const [activeTab, setActiveTab] = React.useState("0");

  const { data, isLoading, isError, error } = usePartnerFunnel();

  const currentTab = data?.[Number(activeTab)];

  return (
    <Card className="bg-lime-300 w-full rounded-[28px] min-h-84">
      {/* HEADER */}
      <CardHeader className="flex flex-col lg:flex-row items-start justify-between gap-4">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-row gap-2 items-center">
            <Zap className="h-4 w-4" fill="black" />
            <h1 className="font-semibold">Partner Funnel</h1>
          </div>

          {isLoading ? (
            <Skeleton className="h-12 w-40" />
          ) : isError ? (
            <p className="text-sm text-red-600">{(error as Error).message}</p>
          ) : (
            <div className="flex flex-row gap-2">
              {currentTab?.Growth !== undefined && (
                <p className="text-5xl font-light">
                  +<CountUp duration={2} end={currentTab.Growth} />%
                </p>
              )}
              {currentTab?.TotalGrowth !== undefined && (
                <p className="text-[10px] font-bold self-end text-gray-500 max-w-18 line-clamp-2">
                  {currentTab.TotalGrowth} Growth in closed sales
                </p>
              )}
            </div>
          )}
        </div>

        {/* TABS */}
        {!isLoading && data && (
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="h-8 rounded-full bg-transparent space-x-2">
              {data.map((tab, index) => (
                <TabsTrigger
                  key={tab.id}
                  value={String(index)}
                  className="
                    text-[10px] font-bold rounded-full
                    cursor-pointer
                    text-black
                    bg-white/50
                    data-[state=active]:text-white
                    data-[state=active]:bg-black
                    hover:data-[state=inactive]:bg-accent
                  "
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        )}
      </CardHeader>

      {/* CONTENT */}
      <CardContent className="pt-6">
        {isLoading && (
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-40 rounded-xl" />
            ))}
          </div>
        )}

        {isError && (
          <p className="text-sm text-red-600">{(error as Error).message}</p>
        )}

        {currentTab && (
          <div
            className="grid gap-4 items-end"
            style={{
              gridTemplateColumns: `repeat(${currentTab.FunnelDataType.length}, minmax(0, 1fr))`,
            }}
          >
            {currentTab.FunnelDataType.map(({ label, value }) => {
              const height = valueToHeight(value);

              return (
                <div key={label} className="flex flex-col mt-auto space-y-2">
                  <div>
                    <p className="text-lg font-bold">{value}</p>
                    <p className="text-[10px] font-medium uppercase tracking-wide text-gray-500">
                      {label}
                    </p>
                  </div>

                  <div>
                    <div
                      className={`rounded-xl transition-all duration-700 ${getBarColor(
                        height
                      )}`}
                      style={{ height }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
