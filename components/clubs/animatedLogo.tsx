"use client";
import { motion, Variants } from "framer-motion";
import { animatedLogoData } from "@/components/clubs/svgPaths"; // Your array of paths

export default function AnimatedLogo({ className, ...props }: { className?: string }) {
  
  const svgVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0, 
      },
    },
  };

  const pathVariants: Variants = {
    hidden: { 
      pathLength: 0, 
      fillOpacity: 0 
    },
    visible: {
      pathLength: 1,
      fillOpacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut" },
        fillOpacity: { duration: 1, delay: 1.5, ease: "easeIn" }
      }
    }
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      width="100%"
      viewBox="0 0 4190 1560"
      enableBackground="new 0 0 4190 1560"
      xmlSpace="preserve"
      className={className}
      variants={svgVariants} 
      initial="hidden"
      animate="visible"
      {...props}
    >
      {animatedLogoData.map((item) => (
        <motion.path
          key={item.id}
          variants={pathVariants} 
          d={item.d}
          fill={item.color}
          stroke={item.color}
          strokeWidth="10" 
        />
      ))}
    </motion.svg>
  );
}