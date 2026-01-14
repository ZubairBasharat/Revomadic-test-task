import { useInView } from "react-intersection-observer";
import React, { Suspense } from "react";

interface LazyLoadOnViewProps {
  children: React.ReactNode;
  rootMargin?: string;
}

const LazyLoadOnView = ({
  children,
  rootMargin = "10px",
}: LazyLoadOnViewProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin,
  });

  return (
    <div ref={ref}>
      {inView ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
};

export default LazyLoadOnView;
