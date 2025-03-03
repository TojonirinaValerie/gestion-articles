"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

interface FramerMotionAnimationWrapperProps
  extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay: number;
}

const FramerMotionAnimationWrapper: React.FC<
  FramerMotionAnimationWrapperProps
> = ({ children, delay, className }) => {
  const elementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay },
    },
  };
  return (
    <motion.div
      variants={elementVariants}
      initial="hidden"
      animate="visible"
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default FramerMotionAnimationWrapper;
