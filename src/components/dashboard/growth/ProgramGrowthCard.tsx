import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedProgress } from "@/components/ui/animatedProgress";
import CountUp from "react-countup";
import { TrendingUp } from "lucide-react";
import { useProgramGrowth } from "@/hooks/useProgramGrowth";
import { Skeleton } from "@/components/ui/skeleton";

/* ================= COLOR HELPER ================= */

function ColorChecker(percentage: number) {
  if (percentage < 20) return "bg-gray-200";
  if (percentage < 30) return "bg-[#d7d3d1]";
  if (percentage < 40) return "bg-[#a6a09d]";
  if (percentage < 50) return "bg-black";
  if (percentage < 60) return "bg-pink-500";
  if (percentage < 70) return "bg-yellow-500";
  if (percentage < 80) return "bg-blue-500";
  return "bg-green-500";
}

/* ================= COMPONENT ================= */

export function ProgramGrowthCard() {
  const [activeTab, setActiveTab] = React.useState("0");

  const { data, isLoading, isError, error } = useProgramGrowth();

  const currentTab = data?.[Number(activeTab)];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
          {/* Left */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h1 className="text-lg font-bold">Program Growth</h1>
              <p className="text-xs font-medium text-gray-500">
                New partner acquisition breakdown
              </p>
            </div>

            {isLoading ? (
              <Skeleton className="h-10 w-32" />
            ) : isError ? (
              <p className="text-sm text-red-600">{(error as Error).message}</p>
            ) : (
              <div className="space-y-1 flex items-center flex-row gap-2">
                <span className="text-4xl font-medium">
                  +<CountUp duration={3} end={currentTab?.growth ?? 0} />
                </span>
                <span className="text-xs font-medium text-green-500 bg-green-100 py-px px-1.5 rounded-full">
                  <TrendingUp className="inline-block mr-1 h-3 w-3" />
                  This Month
                </span>
              </div>
            )}
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="h-8 rounded-full md:-mt-10">
              {!isLoading &&
                data?.map((tab, index) => (
                  <TabsTrigger
                    key={tab.name}
                    value={String(index)}
                    className="text-[10px] font-bold rounded-full cursor-pointer text-gray-400 data-[state=active]:text-black hover:data-[state=inactive]:bg-gray-200 hover:data-[state=inactive]:text-gray-700"
                  >
                    {tab.name}
                  </TabsTrigger>
                ))}
            </TabsList>
          </Tabs>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {isLoading &&
          Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-6 rounded-full" />
          ))}

        {isError && (
          <p className="text-sm text-red-600">{(error as Error).message}</p>
        )}

        {currentTab?.programGrowth.map(({ name, percentage }) => (
          <div key={name}>
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-[10px] font-medium text-black">{name}</span>
              <span className="text-[10px] font-medium text-gray-500">
                {percentage} Partners
              </span>
            </div>

            <AnimatedProgress
              value={percentage}
              duration={1500}
              color={ColorChecker(percentage)}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
