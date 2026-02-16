import { Wrench, Cog, Filter, CircleDot, Shield, Droplets } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "ΣΩΛΗΝΕΣ ΠΙΕΣΕΩΣ",
    description: "Κατασκευάζουμε σωλήνες πιέσεως κατά παραγγελία για κάθε τύπο μηχανήματος και εφαρμογή.",
  },
  {
    icon: Cog,
    title: "ΑΝΤΑΛΛΑΚΤΙΚΑ",
    description: "Προσφέρουμε μεγάλο εύρος ανταλλακτικών για αγροτικά μηχανήματα και μηχανήματα έργων.",
  },
  {
    icon: Filter,
    title: "ΦΙΛΤΡΑ",
    description: "Διαθέτουμε τα περισσότερα ανταλλακτικά φίλτρα για κάθε τύπο κινητήρα και μηχανήματος.",
  },
  {
    icon: CircleDot,
    title: "ΡΟΥΛΕΜΑΝ",
    description: "Κατασκευάζουμε & επισκευάζουμε ρουλεμάν για βιομηχανικές και αγροτικές εφαρμογές.",
  },
  {
    icon: Shield,
    title: "ΤΣΙΜΟΥΧΕΣ",
    description: "Σε εμάς θα βρείτε πληθώρα από τσιμούχες για υδραυλικά συστήματα και μηχανήματα.",
  },
  {
    icon: Droplets,
    title: "ΛΑΔΙΑ",
    description: "Διαθέτουμε όλους τους τύπους λαδιών για κινητήρες, υδραυλικά και βιομηχανικές χρήσεις.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#f5f8fb] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#1e3a5f] md:text-4xl">
            {"ΥΠΗΡΕΣΙΕΣ"}
          </h2>
          <p className="mb-4 text-lg text-[#4a6078]">{"Τι προσφέρουμε"}</p>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#7cb3d4]" />
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group rounded-xl border border-[#d0dde8] bg-[#ffffff] p-8 shadow-sm transition-all duration-300 hover:border-[#7cb3d4]/50 hover:shadow-md"
              >
                <div className="mb-5 inline-flex rounded-lg bg-[#eef4f9] p-3 text-[#1e3a5f] transition-colors group-hover:bg-[#1e3a5f] group-hover:text-[#7cb3d4]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-bold tracking-wide text-[#1e3a5f]">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4a6078]">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
