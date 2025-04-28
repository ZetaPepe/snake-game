"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TypingTextProps {
  text: string
  delay?: number
  speed?: number
  className?: string
}

export function TypingText({ text, delay = 0, speed = 40, className = "" }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (currentIndex < text.length) {
      timeout = setTimeout(
        () => {
          setDisplayedText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        },
        currentIndex === 0 ? delay : speed,
      )
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, delay, speed, text])

  return (
    <div className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
        className="inline-block w-[2px] h-[1em] bg-purple-500 ml-1"
      />
    </div>
  )
}
