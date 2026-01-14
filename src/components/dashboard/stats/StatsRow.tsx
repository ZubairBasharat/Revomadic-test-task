import { Skeleton } from "@/components/ui/skeleton";
import { StatCard } from "./statsCardDesign";
import { useStatsCards } from "@/hooks/useStatsCard";

export function StatsRow() {
  const { data, isLoading, isError, error } = useStatsCards();

  if (isError)
    return <p className="text-red-500 text-sm">{(error as Error).message}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {isLoading &&
        Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-28 w-full rounded-lg" />
        ))}

      {data?.map((props) => (
        <StatCard key={props.label} {...props} />
      ))}
    </div>
  );
}
