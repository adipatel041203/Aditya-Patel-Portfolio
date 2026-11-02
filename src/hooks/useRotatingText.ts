import { useEffect, useState } from 'react'

export function useRotatingText(labels: readonly string[], intervalMs = 3200) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (labels.length < 2) return

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % labels.length)
    }, intervalMs)

    return () => window.clearInterval(timer)
  }, [intervalMs, labels.length])

  return labels[activeIndex] ?? ''
}
