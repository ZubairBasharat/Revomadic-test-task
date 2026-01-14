import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import CountUp from "react-countup";

interface StatCardProps {
  label?: string;
  value?: number;
  icon?: IconName;
  iconColor?: string;
  iconBgColor?: string;
  desc?: string;
  growth?: string;
}

export function StatCard({
  label,
  value,
  desc,
  growth,
  icon,
  iconColor,
  iconBgColor,
}: StatCardProps) {
  return (
    <Card>
      {label && (
        <CardTitle className="flex flex-row  justify-between px-6">
          <p className="text-xs text-muted-foreground font-bold">
            {label.toUpperCase()}
          </p>
          {icon && (
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full",
                iconBgColor
              )}
            >
              <DynamicIcon name={icon} className={cn("h-4 w-4", iconColor)} />
            </div>
          )}
        </CardTitle>
      )}
      <CardContent>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col space-y-2">
            <CountUp
              className="text-3xl font-semibold"
              end={value ?? 0}
              duration={3}
            />
            {desc && (
              <p className="text-xs text-gray-500 font-medium">{desc}</p>
            )}
          </div>
          {growth && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-green-500 bg-green-100 py-px px-1.5 rounded-full">
                {growth}%
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
