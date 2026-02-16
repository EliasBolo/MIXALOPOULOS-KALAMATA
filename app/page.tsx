import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import StatsSection from "@/components/stats-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ΜΙΧΑΛΟΠΟΥΛΟΣ Ι.Κ.Ε.",
  "alternateName": "Μιχαλόπουλος Μηχανουργείο Καλαμάτα",
  "description":
    "Μηχανουργείο με 40 χρόνια εμπειρίας στην Καλαμάτα Μεσσηνίας. Κατασκευή σωλήνων πιέσεως, μπουκάλων ανυψωτικών μηχανημάτων, ανταλλακτικά & επισκευές αγροτικών μηχανημάτων.",
  "url": "https://michalopoulos.gr",
  "telephone": ["+302721082588", "+306945405524"],
  "email": "info@michalopoulos.gr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Συνοικία Μπουρνιάς",
    "addressLocality": "Καλαμάτα",
    "addressRegion": "Μεσσηνία",
    "addressCountry": "GR",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.04,
    "longitude": 22.11,
  },
  "areaServed": [
    { "@type": "City", "name": "Καλαμάτα" },
    { "@type": "AdministrativeArea", "name": "Μεσσηνία" },
    { "@type": "AdministrativeArea", "name": "Πελοπόννησος" },
  ],
  "serviceType": [
    "Μηχανουργικές Εργασίες",
    "Κατασκευή Σωλήνων Πιέσεως",
    "Ανταλλακτικά Μηχανημάτων",
    "Επισκευές Αγροτικών Μηχανημάτων",
  ],
  "knowsLanguage": "el",
  "foundingDate": "1986",
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "17:00",
  },
  "sameAs": [
    "https://www.facebook.com/michalopoulos",
    "https://www.instagram.com/michalopoulos",
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
