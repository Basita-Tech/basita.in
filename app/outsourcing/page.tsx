import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  DollarSign,
  PieChart,
  FileText,
  TrendingUp,
  CheckCircle2,
  Clock,
  Lock,
} from "lucide-react";
import Link from "next/link";

export default function BookkeepingPage() {
  const tools = [
    "E-commerce",
    "Real Estate",
    "Healthcare",
    "IT & Startups",
    "Manufacturing",
    "Professional Services",
  ];

  return (
    <main className="min-h-dvh">
      <Navbar />

      <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-secondary/10 via-background to-primary/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary/10 px-4 py-1 text-sm text-secondary">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              Professional Bookkeeping Outsourcing
            </div>
            <h1 className="text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Reliable Accounting Support for U.S. Businesses
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Focus on growing your business while we manage your books with
              accuracy, security, and expertise. Outsource to experienced Indian
              accountants proficient in U.S. GAAP and tax compliance.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row pt-4">
              <Button size="lg" className="gap-2 w-fit">
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-fit">
                Request a Quote
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-secondary">60%</div>
                <p className="text-sm text-muted-foreground">Cost Savings</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">100%</div>
                <p className="text-sm text-muted-foreground">Data Security</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">24/7</div>
                <p className="text-sm text-muted-foreground">
                  Support Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24 bg-muted/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive accounting solutions tailored to your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8 space-y-4 border-l-4 border-l-secondary hover:shadow-lg transition-all">
              <BarChart3 className="h-10 w-10 text-secondary" />
              <h3 className="text-xl font-semibold text-foreground">
                Bookkeeping & General Ledger
              </h3>
              <p className="text-muted-foreground">
                Daily, weekly, or monthly bookkeeping services with meticulous
                transaction recording and general ledger maintenance.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Daily transaction recording
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  General ledger maintenance
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Account reconciliation
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4 border-l-4 border-l-secondary hover:shadow-lg transition-all">
              <DollarSign className="h-10 w-10 text-secondary" />
              <h3 className="text-xl font-semibold text-foreground">
                Accounts Payable & Receivable
              </h3>
              <p className="text-muted-foreground">
                Complete AP/AR management to ensure timely payments and
                collections while maintaining accurate records.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Invoice processing
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Payment tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Aging analysis
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4 border-l-4 border-l-secondary hover:shadow-lg transition-all">
              <CheckCircle2 className="h-10 w-10 text-secondary" />
              <h3 className="text-xl font-semibold text-foreground">
                Bank & Credit Card Reconciliation
              </h3>
              <p className="text-muted-foreground">
                Accurate reconciliation services to ensure all transactions
                match and maintain complete financial accuracy.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Bank statement matching
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Discrepancy resolution
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Monthly reconciliation
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4 border-l-4 border-l-secondary hover:shadow-lg transition-all">
              <TrendingUp className="h-10 w-10 text-secondary" />
              <h3 className="text-xl font-semibold text-foreground">
                Payroll Processing & Support
              </h3>
              <p className="text-muted-foreground">
                Full payroll management with tax compliance, W-2/1099
                preparation, and expense tracking services.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Bi-weekly/monthly payroll
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Tax compliance & filing
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Expense tracking
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4 border-l-4 border-l-secondary hover:shadow-lg transition-all">
              <FileText className="h-10 w-10 text-secondary" />
              <h3 className="text-xl font-semibold text-foreground">
                Financial Reporting & Cleanup
              </h3>
              <p className="text-muted-foreground">
                Monthly, quarterly, and annual financial reports with QuickBooks
                or Xero cleanup and catch-up services.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Monthly/quarterly reports
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Year-end closing
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Data cleanup & migration
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4 border-l-4 border-l-secondary hover:shadow-lg transition-all">
              <PieChart className="h-10 w-10 text-secondary" />
              <h3 className="text-xl font-semibold text-foreground">
                Virtual CFO Services
              </h3>
              <p className="text-muted-foreground">
                Strategic financial analysis, budgeting, forecasting, and
                advisory for business growth and planning.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Financial analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Budgeting & forecasting
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Strategic advisory
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Tools & Software Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              We're proficient in all major accounting platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              <Card
                key={tool}
                className="p-6 text-center hover:shadow-md transition-shadow"
              >
                <p className="font-semibold text-foreground">{tool}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24 bg-muted/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Choose Our Bookkeeping Services?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Lock className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      100% Data Confidentiality
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      NDA agreements and secure encrypted channels
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      U.S. GAAP & Tax Compliance
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Certified accountants with deep expertise in U.S.
                      standards
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Cost Savings Up to 60%
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Quality service at a fraction of domestic accounting costs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      24/7 Support
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Time zone advantage ensures your work is always being done
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 space-y-6 bg-gradient-to-br from-secondary/20 to-primary/10">
              <h3 className="text-2xl font-bold text-foreground">
                Our Process
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-secondary text-secondary-foreground font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Free Consultation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Discuss your needs and current setup
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-secondary text-secondary-foreground font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Secure Data Transfer
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Encrypted data sharing through secure channels
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-secondary text-secondary-foreground font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Processing & Reporting
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Our team handles your books with periodic reports
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-secondary text-secondary-foreground font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Review & Support
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Collaboration for long-term partnership success
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground">
              Accounting expertise across diverse business sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((industry) => (
              <Card
                key={industry}
                className="p-6 text-center hover:border-secondary/50 hover:shadow-md transition-all"
              >
                <p className="font-semibold text-foreground">{industry}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Ready to Streamline Your Accounting?
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Get a free consultation and quote for your bookkeeping needs. We
            serve U.S. businesses with reliable, affordable outsourcing.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row justify-center">
            <Link
              className="gap-2 w-fit inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-md hover:bg-secondary/90 transition"
              href="/contact"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
