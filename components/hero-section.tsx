import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Μηχανουργείο Μιχαλόπουλος - Βιομηχανικό εργαστήριο"
        fill
        className="object-cover"
        priority
        quality={85}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1e33]/80 via-[#1e3a5f]/70 to-[#0c1e33]/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-block rounded-full border border-[#7cb3d4]/30 bg-[#7cb3d4]/10 px-6 py-2">
          <span className="text-sm font-medium tracking-widest text-[#7cb3d4]">
            {"40 ΧΡΟΝΙΑ ΕΜΠΕΙΡΙΑΣ"}
          </span>
        </div>

        <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-[#e8f0f7] md:text-6xl lg:text-7xl">
          {"ΜΙΧΑΛΟΠΟΥΛΟΣ Ι.Κ.Ε."}
        </h1>

        <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-[#7cb3d4]" />

        <p className="mb-4 text-xl font-light tracking-wide text-[#b0cde0] md:text-2xl">
          {"Υπηρεσίες Μηχανουργείου"}
        </p>
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[#8aa3b8]">
          {"Εξειδικευόμαστε στην κατασκευή σωλήνων πιέσεως & μπουκάλων ανυψωτικών μηχανημάτων. Μηχανουργικές εργασίες στην Καλαμάτα, Μεσσηνία."}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:2721082588"
            className="rounded-md bg-[#7cb3d4] px-8 py-3.5 text-sm font-semibold tracking-wider text-[#0c1e33] transition-colors hover:bg-[#9bc8e0]"
          >
            {"ΚΑΛΕΣΤΕ ΜΑΣ"}
          </a>
          <a
            href="#services"
            className="rounded-md border border-[#7cb3d4]/40 px-8 py-3.5 text-sm font-semibold tracking-wider text-[#7cb3d4] transition-colors hover:border-[#7cb3d4] hover:bg-[#7cb3d4]/10"
          >
            {"ΥΠΗΡΕΣΙΕΣ"}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#7cb3d4]/60 transition-colors hover:text-[#7cb3d4]"
        aria-label="Μετάβαση στην επόμενη ενότητα"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  )
}
