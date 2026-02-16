"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "ΑΡΧΙΚΗ", href: "#hero" },
  { label: "Η ΕΤΑΙΡΙΑ", href: "#about" },
  { label: "ΥΠΗΡΕΣΙΕΣ", href: "#services" },
  { label: "ΕΠΙΚΟΙΝΩΝΙΑ", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e3a5f]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-3">
          <GearIcon className="h-8 w-8 text-[#7cb3d4]" />
          <span className="text-lg font-bold tracking-wide text-[#e8f0f7]">
            ΜΙΧΑΛΟΠΟΥΛΟΣ
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium tracking-wider text-[#b0cde0] transition-colors hover:text-[#e8f0f7]"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="tel:2721082588"
              className="flex items-center gap-2 rounded-md bg-[#7cb3d4] px-4 py-2 text-sm font-semibold text-[#1e3a5f] transition-colors hover:bg-[#9bc8e0]"
            >
              <Phone className="h-4 w-4" />
              27210 82588
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-[#b0cde0] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#2a4f7a] bg-[#1e3a5f] md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-4 py-3 text-sm font-medium tracking-wider text-[#b0cde0] transition-colors hover:bg-[#2a4f7a] hover:text-[#e8f0f7]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="tel:2721082588"
                className="flex items-center justify-center gap-2 rounded-md bg-[#7cb3d4] px-4 py-3 text-sm font-semibold text-[#1e3a5f]"
              >
                <Phone className="h-4 w-4" />
                27210 82588
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

function GearIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
}
