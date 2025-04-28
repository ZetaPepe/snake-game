"use client"

import { motion } from "framer-motion"

interface LoadingDotsProps {
  color?: string
  size?: number
  space?: number
}

export function LoadingDots({ color = "#a855f7", size = 4, space = 3 }: LoadingDotsProps) {
  const dotVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 0.8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="flex items-center justify-center" style={{ gap: `${space}px` }}>
      <motion.span
        style={{ width: `${size}px`, height: `${size}px`, borderRadius: "50%", backgroundColor: color }}
        variants={dotVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0 }}
      />
      <motion.span
        style={{ width: `${size}px`, height: `${size}px`, borderRadius: "50%", backgroundColor: color }}
        variants={dotVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.15 }}
      />
      <motion.span
        style={{ width: `${size}px`, height: `${size}px`, borderRadius: "50%", backgroundColor: color }}
        variants={dotVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }}
      />
    </div>
  )
}
