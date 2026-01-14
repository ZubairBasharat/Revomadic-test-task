import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";

interface NeedsApprovalCardProps {
  name: string;
  action: string;
  time: string;
}

export function NeedsApprovalCard({
  name,
  action,
  time,
}: NeedsApprovalCardProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-xs font-semibold text-orange-600">
            {initial}
          </div>

          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{action}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col  pt-4">
        <Button
          variant="secondary"
          size="sm"
          className="mt-4 w-full rounded-lg bg-gray-100 text-xs text-black hover:bg-gray-200"
        >
          <CircleCheck className="inline-block h-4 w-4" />
          Review
        </Button>
      </CardContent>
    </Card>
  );
}
