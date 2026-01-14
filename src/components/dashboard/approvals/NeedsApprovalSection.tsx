import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleAlert } from "lucide-react";
import { NeedsApprovalCard } from "./ApprovalCard";
import { useApprovals } from "@/hooks/useApprovals";
import { Skeleton } from "@/components/ui/skeleton";

export function NeedsApprovalSection() {
  const { data, isLoading, isError, error } = useApprovals();

  return (
    <Card className="bg-[#fff9e6] border-l-4 border-l-amber-400">
      <CardHeader className="flex flex-row items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 border border-amber-300">
            <CircleAlert className="h-4 w-4 text-amber-500" />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">
              Needs Approval
            </p>
            <p className="text-xs text-gray-500">
              {isLoading
                ? "Loading requests..."
                : `${data?.length ?? 0} requests pending your review`}
            </p>
          </div>
        </div>

        {/* Right */}
        <Button
          size="sm"
          variant="outline"
          className="rounded-full bg-card border-px border-amber-300 text-amber-400 hover:bg-accent"
          disabled={isLoading || isError}
        >
          APPROVE ALL
        </Button>
      </CardHeader>

      <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* LOADING */}
        {isLoading &&
          Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-28 rounded-lg" />
          ))}

        {/* ERROR */}
        {isError && (
          <p className="col-span-full text-sm text-red-500">
            {(error as Error).message}
          </p>
        )}

        {/* DATA */}
        {data?.map((item) => (
          <NeedsApprovalCard
            key={item.id}
            name={item.name}
            action={item.action}
            time={item.time}
          />
        ))}
      </CardContent>
    </Card>
  );
}
