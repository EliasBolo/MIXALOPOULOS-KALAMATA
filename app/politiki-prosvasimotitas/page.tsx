import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Πολιτική Προσβασιμότητας | ΜΙΧΑΛΟΠΟΥΛΟΣ Ι.Κ.Ε.",
  description:
    "Δήλωση προσβασιμότητας του ιστοτόπου ΜΙΧΑΛΟΠΟΥΛΟΣ Ι.Κ.Ε. σύμφωνα με την Ευρωπαϊκή Οδηγία και το ελληνικό δίκαιο.",
}

export default function PolitikiProsvasimotitasPage() {
  return (
    <>
      <main>
        <Navbar />
        <article className="min-h-screen bg-[#f5f8fb] py-20">
          <div className="mx-auto max-w-3xl px-6">
            <Link
              href="/#contact"
              className="mb-8 inline-block text-sm font-medium text-[#7cb3d4] transition-colors hover:text-[#1e3a5f]"
            >
              {"← Επιστροφή"}
            </Link>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#1e3a5f] md:text-4xl">
              {"Πολιτική Προσβασιμότητας"}
            </h1>
            <p className="mb-10 text-sm text-[#4a6078]">
              {"Τελευταία ενημέρωση: Φεβρουάριος 2026"}
            </p>

            <div className="space-y-8 text-[#4a6078]">
              <section>
                <h2 className="mb-3 text-xl font-bold text-[#1e3a5f]">
                  {"1. Δέσμευση"}
                </h2>
                <p className="leading-relaxed">
                  {"Η ΜΙΧΑΛΟΠΟΥΛΟΣ Ι.Κ.Ε. δεσμεύεται να διασφαλίζει την ψηφιακή προσβασιμότητα του ιστοτόπου της για άτομα με αναπηρία, σύμφωνα με την Οδηγία (ΕΕ) 2016/2102 και το Ν. 4727/2020 (ΚΕΔΕΑ), καθώς και τις Οδηγίες Πρόσβασης στο Web (WCAG) 2.1, σε εύλογο βαθμό."}
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-bold text-[#1e3a5f]">
                  {"2. Κατάσταση προσβασιμότητας"}
                </h2>
                <p className="leading-relaxed">
                  {"Ο παρών ιστοτόπος στοχεύει να πληρεί τις απαιτήσεις προσβασιμότητας (περιεχόμενο, πλοήγηση, ετικέτες, αντίθεση χρωμάτων, συμβατότητα με βοηθητικές τεχνολογίες). Ενδεχόμενες αδυναμίες ή περιοχές που δεν πληρούν ακόμη πλήρως τα κριτήρια εργαζόμαστε να διορθώνουμε σταδιακά."}
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-bold text-[#1e3a5f]">
                  {"3. Τεχνολογίες και συμβατότητα"}
                </h2>
                <p className="leading-relaxed">
                  {"Ο ιστοτόπος λειτουργεί με τα κύρια προγράμματα περιήγησης (Chrome, Firefox, Safari, Edge) και είναι σχεδιασμένος να λειτουργεί με λογισμικό οθόνης και άλλες βοηθητικές τεχνολογίες. Χρησιμοποιούμε σημασιολογικό HTML, ετικέτες για εικόνες και δομημένα κεφάλαια όπου είναι εφικτό."}
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-bold text-[#1e3a5f]">
                  {"4. Επικοινωνία και ανατροφοδότηση"}
                </h2>
                <p className="leading-relaxed">
                  {"Εάν αντιμετωπίζετε πρόβλημα πρόσβασης σε τμήμα του ιστοτόπου ή χρειάζεστε το περιεχόμενο σε εναλλακτική μορφή, μπορείτε να επικοινωνήσετε μαζί μας. Θα επιδιώξουμε να παρέχουμε την πληροφορία ή την υπηρεσία με εναλλακτικό τρόπο εντός εύλογου χρόνου."}
                </p>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm">
                  <li>{"Επωνυμία: ΜΙΧΑΛΟΠΟΥΛΟΣ Ι.Κ.Ε."}</li>
                  <li>{"Έδρα: Καλαμάτα, Μεσσηνίας (οδός Δημοκρίτου 18 / Συνοικία Μπουρνιάς)"}</li>
                  <li>{"Τηλέφωνο: 27210 82588, 6945 405524"}</li>
                  <li>
                    {"Email: "}
                    <a
                      href="mailto:mixalopoulosike@gmail.com"
                      className="text-[#7cb3d4] hover:underline"
                    >
                      mixalopoulosike@gmail.com
                    </a>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-bold text-[#1e3a5f]">
                  {"5. Διαδικασία επιβολής του δικαιώματος"}
                </h2>
                <p className="leading-relaxed">
                  {"Σύμφωνα με το Ν. 4727/2020, αν η απάντησή μας δεν σας ικανοποιεί, έχετε το δικαίωμα να απευθυνθείτε στην Εθνική Επιτροπή Δικαιωμάτων Ατόμων με Αναπηρία (Ε.Ε.Δ.Α.) για τη διασφάλιση του δικαιώματός σας στην προσβασιμότητα."}
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-bold text-[#1e3a5f]">
                  {"6. Ενημερώσεις"}
                </h2>
                <p className="leading-relaxed">
                  {"Η παρούσα δήλωση προσβασιμότητας μπορεί να ενημερώνεται για να αντικατοπτρίζει αλλαγές στον ιστοτόπο ή στην κανονιστική πλαισίωση."}
                </p>
              </section>
            </div>
          </div>
        </article>
        <Footer />
      </main>
    </>
  )
}
