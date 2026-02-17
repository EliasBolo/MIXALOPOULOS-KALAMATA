import { MapPin, Phone, Mail } from "lucide-react"

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#0c1e33] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Company info */}
          <div>
            <h3 className="mb-4 text-lg font-bold tracking-wide text-[#e8f0f7]">
              {"ΜΙΧΑΛΟΠΟΥΛΟΣ Ι.Κ.Ε."}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-[#8aa3b8]">
              {"Εξειδικευόμαστε στην κατασκευή σωλήνων πιέσεως & μπουκάλων ανυψωτικών μηχανημάτων. Μηχανουργικές εργασίες με 40 χρόνια εμπειρίας."}
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#1e3a5f] p-2.5 text-[#7cb3d4] transition-colors hover:bg-[#2a4f7a]"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#1e3a5f] p-2.5 text-[#7cb3d4] transition-colors hover:bg-[#2a4f7a]"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Site links */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-widest text-[#7cb3d4]">
              {"ΙΣΤΟΤΟΠΟΣ"}
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Αρχική", href: "#hero" },
                { label: "Η Εταιρία", href: "#about" },
                { label: "Πολιτική Απορρήτου", href: "/politiki-aporritou" },
                { label: "Πολιτική Προσβασιμότητας", href: "/politiki-prosvasimotitas" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#8aa3b8] transition-colors hover:text-[#e8f0f7]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-widest text-[#7cb3d4]">
              {"ΕΠΙΚΟΙΝΩΝΙΑ"}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#7cb3d4]" />
                <p className="text-sm text-[#8aa3b8]">
                  {"Συνοικία Μπουρνιάς, Καλαμάτα"}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#7cb3d4]" />
                <div className="text-sm text-[#8aa3b8]">
                  <p>
                    <a href="tel:2721082588" className="transition-colors hover:text-[#e8f0f7]">
                      {"27210 82588"}
                    </a>
                  </p>
                  <p>
                    <a href="tel:6945405524" className="transition-colors hover:text-[#e8f0f7]">
                      {"6945 405524"}
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#7cb3d4]" />
                <p className="text-sm text-[#8aa3b8]">
                  <a
                    href="mailto:mixalopoulosike@gmail.com"
                    className="transition-colors hover:text-[#e8f0f7]"
                  >
                    {"mixalopoulosike@gmail.com"}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-[#1e3a5f] pt-8 text-center">
          <p className="text-xs text-[#5a7a94]">
            {"© 2026 ΜΙΧΑΛΟΠΟΥΛΟΣ Ι.Κ.Ε. - Developed in Next.js by "}
            <a
              href="https://eliasbolo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7cb3d4] transition-colors hover:text-[#e8f0f7]"
            >
              {"Elias Bolo"}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
