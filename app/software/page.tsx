import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowRight } from "lucide-react";
import { ApproachSection } from "@/components/approach-section";
import Link from "next/link";

export default function SoftwarePage() {
  return (
    <main className="min-h-dvh bg-background">
      <Navbar />

      <section className="relative w-full py-20 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-tight">
                Software{" "}
                <span className="text-muted-foreground">Development</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Custom solutions built with innovation and precision.
              </p>
              <div className="flex gap-4 justify-center pt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-lg font-medium bg-primary text-primary-foreground"
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mt-16 rounded-xl overflow-hidden">
              <img
                src="/software-development-team-working-on-computer-scre.jpg"
                alt="Software development"
                className="w-full h-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-24 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center font-semibold mb-24 text-foreground">
            Core Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-semibold text-foreground">
                Custom Software Development
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Creating unique applications tailored to your business's
                specific requirements. From concept to deployment, we build
                robust solutions that drive your business forward.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    End-to-end development lifecycle
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    Scalable architecture design
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    Integration with existing systems
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/custom-software-development-coding.jpg"
                alt="Custom Software Development"
                className="w-full h-92 object-center object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="rounded-lg overflow-hidden order-2 md:order-1">
              <img
                src="/web-development-modern-website-design.jpg"
                alt="Web Development"
                className="w-full h-92 object-center object-cover"
              />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h3 className="text-3xl md:text-4xl font-semibold text-foreground">
                Web Development
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Building and maintaining websites with excellent functionality
                and user experience. Modern technologies ensuring performance,
                security, and engagement.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    Responsive design for all devices
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    SEO optimized and fast-loading
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    Modern frameworks and best practices
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-semibold text-foreground">
                Mobile App Development
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Creating powerful applications for mobile devices. iOS, Android,
                and cross-platform solutions optimized for engagement and
                performance.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    Native and cross-platform development
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    App store optimization and deployment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    Push notifications and real-time sync
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/mobile-app-development-phone-screens.jpg"
                alt="Mobile App Development"
                className="w-full h-92 object-center object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="rounded-lg overflow-hidden order-2 md:order-1">
              <img
                src="/cloud-infrastructure-servers.jpg"
                alt="Cloud Software Development"
                className="w-full h-92 object-center object-cover"
              />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h3 className="text-3xl md:text-4xl font-semibold text-foreground">
                Cloud Software Development
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Building scalable software that runs on cloud infrastructure.
                Enterprise-grade solutions with high availability, security, and
                global reach.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    AWS, Azure, and GCP expertise
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    Auto-scaling and load balancing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    99.9% uptime SLA guaranteed
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-semibold text-foreground">
                UI/UX Design
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Focusing on user experience and customer satisfaction.
                Beautiful, intuitive interfaces that increase engagement,
                retention, and growth.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    User research and personas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    Prototyping and user testing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    Design systems and brand guidelines
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/ui-ux-design-interface-mockup.jpg"
                alt="UI/UX Design"
                className="w-full h-92 object-center object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden order-2 md:order-1">
              <img
                src="/maintenance-support-technical-help.jpg"
                alt="Maintenance and Support"
                className="w-full h-92 object-center object-cover"
              />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h3 className="text-3xl md:text-4xl font-semibold text-foreground">
                Maintenance and Support
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Providing ongoing updates, bug fixes, and support after software
                launch. 24/7 technical assistance ensuring continuous
                performance and reliability.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    24/7 monitoring and alerts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    Regular security updates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    Performance optimization
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ApproachSection />

      <section className="relative w-full py-24 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Let's discuss how our software solutions can drive innovation and
            growth for your organization.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-lg font-medium bg-primary text-primary-foreground"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
