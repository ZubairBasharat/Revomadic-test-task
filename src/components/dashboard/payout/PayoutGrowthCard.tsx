import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CountUp from "react-countup";
import { Skeleton } from "@/components/ui/skeleton";
import { usePayoutGrowth } from "@/hooks/usePayoutGrowth";

export function PayoutGrowthCard() {
  const { data: bars, isLoading, isError, error } = usePayoutGrowth();

  return (
    <Card className="w-full min-h-85">
      <CardHeader>
        {/* Top row */}
        <div className="flex items-center justify-between">
          <Badge
            variant="outline"
            className="flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium shadow-sm border-none"
          >
            <Zap className="h-3 w-3" fill="black" />
            Payouts last quarter
          </Badge>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 flex items-start justify-between">
          <h1 className="text-6xl font-bold tracking-tight">
            +<CountUp duration={3} end={350} />%
          </h1>
          <span className="mt-3 text-sm font-semibold text-gray-700">
            $2.5 m
          </span>
        </div>
      </CardHeader>

      <CardContent className="w-full">
        {/* Chart */}
        <div className="mt-auto">
          {isLoading && (
            <div className="flex items-end space-x-1.75 min-h-47">
              {Array.from({ length: 9 }).map((_, i) => (
                <Skeleton key={i} className="w-full h-20 rounded-full" />
              ))}
            </div>
          )}

          {isError && (
            <p className="text-sm text-red-600">{(error as Error).message}</p>
          )}

          {bars && (
            <div className="flex items-end space-x-1.75 min-h-47">
              {bars.map((bar, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-1 w-full"
                >
                  <div
                    className={`w-full rounded-full ${bar.color}`}
                    style={{ height: `${bar.height}px` }}
                  />
                  {bar.label && (
                    <span className="text-[10px] font-medium text-gray-400">
                      {bar.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
