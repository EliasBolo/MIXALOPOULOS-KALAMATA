"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const stats = [
  { value: 40, suffix: "", label: "ΧΡΟΝΙΑ ΕΜΠΕΙΡΙΑΣ" },
  { value: 1000, suffix: "+", label: "ΠΕΛΑΤΕΣ" },
  { value: 20000, suffix: "+", label: "ΩΡΕΣ ΕΡΓΑΣΙΑΣ" },
]

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame: number
    const duration = 2000
    const start = performance.now()

    function step(now: number) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        frame = requestAnimationFrame(step)
      }
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target, inView])

  return count
}

function StatCounter({
  value,
  suffix,
  label,
  inView,
}: {
  value: number
  suffix: string
  label: string
  inView: boolean
}) {
  const count = useCountUp(value, inView)

  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-[#7cb3d4] md:text-5xl">
        {count.toLocaleString("el-GR")}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium tracking-widest text-[#8aa3b8]">
        {label}
      </p>
    </div>
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden py-20 lg:py-28">
      {/* Background image with parallax effect */}
      <Image
        src="/images/stats-bg.jpg"
        alt=""
        fill
        className="object-cover"
        quality={75}
        unoptimized
      />
      <div className="absolute inset-0 bg-[#0c1e33]/90" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#e8f0f7] md:text-4xl">
            {"Η ΔΟΥΛΕΙΑ ΜΑΣ"}
          </h2>
          <p className="text-lg tracking-wide text-[#7cb3d4]">
            {"ΕΜΠΕΙΡΙΑ & ΕΞΕΙΔΙΚΕΥΣΗ"}
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#7cb3d4]" />
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
