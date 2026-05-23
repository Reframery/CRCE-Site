import { useEffect, useRef, useState } from "react"
import { useInView } from "motion/react"

type AnimatedCounterProps = {
  value: string
  suffix: string
}

export const AnimatedCounter = ({ value, suffix }: AnimatedCounterProps) => {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const num = Number.parseInt(value, 10)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const step = Math.ceil(num / 30)
    const timer = setInterval(() => {
      start += step
      if (start >= num) {
        setDisplay(num)
        clearInterval(timer)
      } else setDisplay(start)
    }, 40)
    return () => clearInterval(timer)
  }, [isInView, num])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
