import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Code2, BarChart3 } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Trusted by U.S. Businesses
            </div>

            <div className="space-y-3">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Transform Your Business with Innovative Solutions
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Basita Technology combines cutting-edge software development
                with professional accounting outsourcing. We help U.S.
                businesses scale efficiently with accuracy, innovation, and
                transformation.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="gap-2">
                Get Started Today
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <div className="text-2xl font-bold text-primary">25+</div>
                <p className="text-sm text-muted-foreground">
                  Years of Experience
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <p className="text-sm text-muted-foreground">
                  Data Confidentiality
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 space-y-4">
                <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Software Development
                </h3>
                <p className="text-muted-foreground">
                  Custom software solutions with AI-driven innovation.
                  Automation tools, workflow systems, and digital transformation
                  consulting.
                </p>
                <Link
                  href="/software"
                  className="flex items-center text-primary font-medium text-sm"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 space-y-4">
                <div className="inline-flex rounded-lg bg-secondary/10 p-3 text-secondary">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Accounting Outsourcing
                </h3>
                <p className="text-muted-foreground">
                  End-to-end bookkeeping and financial management from India.
                  Cost savings up to 60% with U.S. GAAP expertise and secure
                  collaboration.
                </p>
                <Link
                  href="/outsourcing"
                  className="flex items-center text-secondary font-medium text-sm"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
