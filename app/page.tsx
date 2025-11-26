import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ServicesOverview } from "@/components/services-overview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-dvh">
      <div className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />
        <Navbar />
        <Hero />
      </div>

      <ServicesOverview />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}
