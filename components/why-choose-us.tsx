import { Card } from "@/components/ui/card"
import { CheckCircle2 } from 'lucide-react'

export function WhyChooseUs() {
  const reasons = [
    {
      title: "25+ Years of Experience",
      description: "Founded by Biren Patel, a visionary entrepreneur with extensive expertise in business consulting and technology.",
    },
    {
      title: "U.S. GAAP & Tax Compliance",
      description: "Certified team with deep knowledge of U.S. accounting standards and tax regulations for complete peace of mind.",
    },
    {
      title: "Multi-Platform Expertise",
      description: "Proficient in QuickBooks, Xero, NetSuite, Zoho Books, and custom software solutions tailored to your needs.",
    },
    {
      title: "Secure Data Handling",
      description: "100% data confidentiality with NDA agreements, encrypted channels, and secure cloud-based collaboration.",
    },
    {
      title: "Cost Savings Up to 60%",
      description: "Outsource to India without compromising quality. Leverage our skilled team and time zone advantage.",
    },
    {
      title: "Scalable Solutions",
      description: "Flexible pricing and support that grows with your business, from startups to established enterprises.",
    },
  ]

  return (
    <section id="why-choose" className="relative w-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose Basita Technology?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovation, Accuracy, Transformation — built on decades of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
