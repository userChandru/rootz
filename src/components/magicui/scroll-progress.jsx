"use client";;
import { cn } from "@/lib/utils";
import { motion, useScroll } from "motion/react";
import React from "react";

export const ScrollProgress = React.forwardRef(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50  h-px origin-left bg-gradient-to-r from-[#23434e] via-[#183A46] to-[#1e3943]",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props} />
  );
});

ScrollProgress.displayName = "ScrollProgress";
