import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

type AnimatedProgressProps = {
  value: number;
  duration?: number;
  className?: string;
  color?: string;
};

export function AnimatedProgress({
  value,
  duration = 1000,
  className,
  color = "bg-black",
  ...props
}: AnimatedProgressProps) {
  const [progress, setProgress] = React.useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      let start: number | null = null;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progressTime = timestamp - start;
        const percent = Math.min((progressTime / duration) * value, value);
        setProgress(percent);
        if (percent < value) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }, [inView, value, duration]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      data-slot="progress"
      className={cn(
        "bg-primary/5 relative h-2.5 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn("h-full flex-1 transition-transform rounded-full", color)}
        style={{
          transform: `translateX(-${100 - progress}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
}
