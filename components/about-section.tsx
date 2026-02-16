"use client"

import { useState } from "react"
import { Phone, Building2, FileText } from "lucide-react"

const tabs = [
  {
    id: "partners",
    label: "ΕΤΑΙΡΟΙ",
    icon: Building2,
    content: (
      <div className="space-y-4">
        <p className="leading-relaxed text-[#4a6078]">
          {"Η εταιρία Μιχαλόπουλος Ι.Κ.Ε. αποτελείται από έμπειρους τεχνίτες και μηχανολόγους με πολυετή εμπειρία στον χώρο του μηχανουργείου. Η ομάδα μας εξυπηρετεί πελάτες από όλη τη Μεσσηνία και την Πελοπόννησο."}
        </p>
        <ul className="space-y-2 text-[#4a6078]">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7cb3d4]" />
            {"Εξειδικευμένοι μηχανολόγοι"}
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7cb3d4]" />
            {"Πολυετής εμπειρία στον κλάδο"}
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7cb3d4]" />
            {"Αξιόπιστες & ποιοτικές υπηρεσίες"}
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "gemh",
    label: "Γ.Ε.ΜΗ.",
    icon: FileText,
    content: (
      <div className="space-y-4">
        <p className="leading-relaxed text-[#4a6078]">
          {"Η εταιρία μας είναι εγγεγραμμένη στο Γενικό Εμπορικό Μητρώο (Γ.Ε.ΜΗ.) και λειτουργεί νόμιμα με όλες τις απαραίτητες άδειες και πιστοποιήσεις."}
        </p>
        <div className="rounded-lg border border-[#d0dde8] bg-[#eef4f9] p-4">
          <p className="text-sm font-medium text-[#1e3a5f]">
            {"Επωνυμία: ΜΙΧΑΛΟΠΟΥΛΟΣ Ι.Κ.Ε."}
          </p>
          <p className="mt-1 text-sm text-[#4a6078]">
            {"Νομική Μορφή: Ιδιωτική Κεφαλαιουχική Εταιρεία (Ι.Κ.Ε.)"}
          </p>
          <p className="mt-1 text-sm text-[#4a6078]">
            {"Έδρα: Καλαμάτα, Μεσσηνίας"}
          </p>
        </div>
      </div>
    ),
  },
]

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("partners")

  return (
    <section id="about" className="bg-[#f5f8fb] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#1e3a5f] md:text-4xl">
            {"Η ΕΤΑΙΡΙΑ"}
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#7cb3d4]" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <p className="mb-6 text-lg leading-relaxed text-[#4a6078]">
              {"Η Εταιρία μας ασχολείται με μηχανουργικές εργασίες με εμπειρία 40 ετών. ��ξειδικευόμαστε στην κατασκευή σωλήνων πιέσεως & μπουκάλων ανυψωτικών μηχανημάτων."}
            </p>
            <p className="mb-8 leading-relaxed text-[#4a6078]">
              {"Παρέχουμε ολοκληρωμένες λύσεις για αγροτικά μηχανήματα, μηχανήματα έργων και κάθε είδους βιομηχανικό εξοπλισμό. Η αξιοπιστία και η ποιότητα είναι οι βασικές μας αρχές."}
            </p>

            <a
              href="tel:2721082588"
              className="inline-flex items-center gap-2 rounded-md bg-[#1e3a5f] px-6 py-3 text-sm font-semibold tracking-wider text-[#e8f0f7] transition-colors hover:bg-[#2a4f7a]"
            >
              <Phone className="h-4 w-4" />
              {"ΚΑΛΕΣΤΕ ΜΑΣ"}
            </a>
          </div>

          {/* Right - tabs */}
          <div className="rounded-xl border border-[#d0dde8] bg-[#ffffff] shadow-sm">
            <div className="flex border-b border-[#d0dde8]">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-1 items-center justify-center gap-2 px-6 py-4 text-sm font-semibold tracking-wider transition-colors ${
                      activeTab === tab.id
                        ? "border-b-2 border-[#7cb3d4] text-[#1e3a5f]"
                        : "text-[#8aa3b8] hover:text-[#4a6078]"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                )
              })}
            </div>
            <div className="p-6">
              {tabs.find((t) => t.id === activeTab)?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
