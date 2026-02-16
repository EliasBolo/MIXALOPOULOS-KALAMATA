import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#ffffff] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#1e3a5f] md:text-4xl">
            {"ΕΠΙΚΟΙΝΩΝΙΑ"}
          </h2>
          <p className="mb-4 text-lg text-[#4a6078]">
            {"ΒΡΕΙΤΕ ΜΑΣ ΣΤΟΝ ΧΑΡΤΗ"}
          </p>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#7cb3d4]" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h3 className="mb-6 text-xl font-bold text-[#1e3a5f]">
                {"Στοιχεία Επικοινωνίας"}
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#eef4f9] p-2.5 text-[#1e3a5f]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1e3a5f]">{"Διεύθυνση"}</p>
                    <p className="text-sm text-[#4a6078]">
                      {"Συνοικία Μπουρνιάς, Καλαμάτα"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#eef4f9] p-2.5 text-[#1e3a5f]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1e3a5f]">{"Τηλέφωνο"}</p>
                    <p className="text-sm text-[#4a6078]">
                      <a href="tel:2721082588" className="transition-colors hover:text-[#7cb3d4]">
                        {"27210 82588"}
                      </a>
                    </p>
                    <p className="text-sm text-[#4a6078]">
                      <a href="tel:6945405524" className="transition-colors hover:text-[#7cb3d4]">
                        {"6945 405524"}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#eef4f9] p-2.5 text-[#1e3a5f]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1e3a5f]">{"Email"}</p>
                    <p className="text-sm text-[#4a6078]">
                      <a
                        href="mailto:info@michalopoulos.gr"
                        className="transition-colors hover:text-[#7cb3d4]"
                      >
                        {"info@michalopoulos.gr"}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-xl border border-[#d0dde8] shadow-sm lg:col-span-3">
            <iframe
              title="Τοποθεσία Μιχαλόπουλος Ι.Κ.Ε."
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51259.36110784!2d22.075!3d37.040!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1361a0c5f6cd8b7f%3A0x400bd2ce2b98e50!2z0prOsc67zrHOvM6szrTOsQ!5e0!3m2!1sel!2sgr!4v1700000000000!5m2!1sel!2sgr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
