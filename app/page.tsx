import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ServicesOverview } from "@/components/services-overview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ApproachSection } from "@/components/approach-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-dvh bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <ApproachSection />
      <Footer />
    </main>
  )
}
