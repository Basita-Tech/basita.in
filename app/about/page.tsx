import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Lightbulb, Users, Trophy } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-dvh">
      <Navbar />

      <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              About Basita Technology
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded on vision and expertise, Basita Technology combines
              innovative software development with world-class accounting
              solutions. We're building the future of business operations.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Basita Technology is a forward-thinking software development
                  and bookkeeping solutions company established with a strong
                  long-term vision aligned to the future of Artificial
                  Intelligence. We specialize in end-to-end accounting support
                  and innovative software solutions tailored to client needs.
                </p>
                <p>
                  Founded by{" "}
                  <span className="font-semibold text-foreground">
                    Mr. Biren Patel
                  </span>
                  , a visionary entrepreneur with over 25 years of experience in
                  student visa consultancy and business consulting, Basita
                  Technology is built on a foundation of knowledge, commitment,
                  and forward-thinking expertise.
                </p>
                <p>
                  Our mission is simple: ensure innovation, efficiency, and
                  reliability in every solution we deliver. We combine deep
                  financial acumen with cutting-edge technology to transform how
                  businesses operate.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 space-y-2 text-center bg-gradient-to-br from-primary/10 to-transparent">
                <Trophy className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-semibold text-foreground">25+ Years</h4>
                <p className="text-sm text-muted-foreground">
                  Leadership Experience
                </p>
              </Card>
              <Card className="p-6 space-y-2 text-center bg-gradient-to-br from-secondary/10 to-transparent">
                <Users className="h-8 w-8 text-secondary mx-auto" />
                <h4 className="font-semibold text-foreground">
                  Dedicated Team
                </h4>
                <p className="text-sm text-muted-foreground">
                  Of Professionals
                </p>
              </Card>
              <Card className="p-6 space-y-2 text-center bg-gradient-to-br from-primary/10 to-transparent">
                <Lightbulb className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-semibold text-foreground">AI-Driven</h4>
                <p className="text-sm text-muted-foreground">
                  Innovation Focus
                </p>
              </Card>
              <Card className="p-6 space-y-2 text-center bg-gradient-to-br from-secondary/10 to-transparent">
                <Target className="h-8 w-8 text-secondary mx-auto" />
                <h4 className="font-semibold text-foreground">Global Reach</h4>
                <p className="text-sm text-muted-foreground">U.S. Focused</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24 bg-muted/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 border-l-4 border-l-primary">
              <Target className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To become a globally recognized leader in bookkeeping and
                innovative software solutions, driving business transformation
                through accuracy, automation, and technology.
              </p>
            </Card>

            <Card className="p-8 space-y-4 border-l-4 border-l-secondary">
              <Lightbulb className="h-10 w-10 text-secondary" />
              <h3 className="text-xl font-semibold text-foreground">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To develop and customize software solutions tailored to client
                needs, ensuring innovation, efficiency, and reliability in every
                engagement.
              </p>
            </Card>

            <Card className="p-8 space-y-4 border-l-4 border-l-accent">
              <Trophy className="h-10 w-10 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">
                Our Values
              </h3>
              <p className="text-muted-foreground">
                Innovation, Accuracy, and Transformation. We believe in pushing
                boundaries, maintaining precision, and driving positive change
                for our clients.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Leadership
            </h2>
            <p className="text-lg text-muted-foreground">
              Experienced leaders committed to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto flex items-center justify-center text-white text-2xl font-bold">
                BP
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Biren Patel
                </h3>
                <p className="text-sm text-primary font-semibold">
                  Founder & Visionary
                </p>
                <p className="text-muted-foreground text-sm">
                  25+ years of experience in business consulting and student
                  visa consultancy. Visionary leader driving Basita Technology's
                  innovation and growth strategy.
                </p>
              </div>
            </Card>

            <Card className="p-8 space-y-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-accent mx-auto flex items-center justify-center text-white text-2xl font-bold">
                SP
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Saurabh Patel
                </h3>
                <p className="text-sm text-secondary font-semibold">
                  Financial Advisor
                </p>
                <p className="text-muted-foreground text-sm">
                  Chartered Accountant at D G Patel & Co. Brings deep expertise
                  in accounting, tax compliance, and financial strategy to guide
                  our services.
                </p>
              </div>
            </Card>

            <Card className="p-8 space-y-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary mx-auto flex items-center justify-center text-white text-2xl font-bold">
                SD
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Sanday Dalvadi
                </h3>
                <p className="text-sm text-accent font-semibold">
                  Strategic Partner
                </p>
                <p className="text-muted-foreground text-sm">
                  Strategic partner leveraging market insights and operational
                  excellence to drive business growth and client success.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24 bg-muted/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              Deep knowledge across technologies and accounting platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Accounting Platforms
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "QuickBooks Online",
                  "QuickBooks Desktop",
                  "Xero",
                  "Zoho Books",
                  "NetSuite",
                  "FreshBooks",
                  "Sage",
                  "Tally Prime",
                ].map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="h-2 w-2 rounded-full bg-secondary" />
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Technology Stack
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "React & Next.js",
                  "Python & Node.js",
                  "Cloud Infrastructure",
                  "Machine Learning",
                  "API Development",
                  "Database Design",
                  "DevOps & Automation",
                  "Cybersecurity",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Our Clients Trust Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Certified Expertise",
                description:
                  "Our team includes certified accountants with deep U.S. GAAP and tax compliance knowledge.",
              },
              {
                title: "AI-Driven Innovation",
                description:
                  "We leverage cutting-edge AI and technology to deliver future-proof solutions.",
              },
              {
                title: "Customized Solutions",
                description:
                  "Every client receives tailored services designed for their specific business needs.",
              },
              {
                title: "Secure & Reliable",
                description:
                  "100% data confidentiality with encrypted channels and NDA agreements.",
              },
              {
                title: "Cost Efficiency",
                description:
                  "Save up to 60% on accounting costs without compromising quality.",
              },
              {
                title: "Global Reach, Local Touch",
                description:
                  "207 Swapnil 5, Navrangpura, Ahmedabad, Gujarat. with 24/7 support and time zone advantage.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 space-y-3 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Let's discuss how Basita Technology can transform your business
            operations.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row justify-center">
            <Link
              href="/contact"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 inline-flex items-center justify-center gap-2 border rounded-lg px-4 py-2 text-lg font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
