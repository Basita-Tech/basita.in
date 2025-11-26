import { Card } from "@/components/ui/card";
import { Code2, BarChart3, Zap, Shield, Users, TrendingUp } from "lucide-react";

export function ServicesOverview() {
  return (
    <section
      id="services"
      className="relative w-full py-16 md:py-24 bg-muted/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Core Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to drive your business forward
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Code2 className="h-6 w-6 text-primary" />
            Software Development Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-3 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <Zap className="h-8 w-8 text-primary" />
              <h4 className="font-semibold text-lg">
                Custom Software Solutions
              </h4>
              <p className="text-muted-foreground text-sm">
                Tailored applications built to your specific business needs with
                cutting-edge technology and innovation.
              </p>
            </Card>
            <Card className="p-6 space-y-3 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <TrendingUp className="h-8 w-8 text-primary" />
              <h4 className="font-semibold text-lg">Automation & Workflow</h4>
              <p className="text-muted-foreground text-sm">
                Streamline operations with intelligent automation tools and
                optimized workflow systems.
              </p>
            </Card>
            <Card className="p-6 space-y-3 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <Users className="h-8 w-8 text-primary" />
              <h4 className="font-semibold text-lg">Digital Transformation</h4>
              <p className="text-muted-foreground text-sm">
                Consulting services to modernize your business with AI-driven
                technologies and strategic guidance.
              </p>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-secondary" />
            Bookkeeping & Accounting Outsourcing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-3 border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
              <Shield className="h-8 w-8 text-secondary" />
              <h4 className="font-semibold text-lg">End-to-End Bookkeeping</h4>
              <p className="text-muted-foreground text-sm">
                Daily ledger maintenance, AP/AR management, bank reconciliation,
                and comprehensive financial reporting.
              </p>
            </Card>
            <Card className="p-6 space-y-3 border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
              <TrendingUp className="h-8 w-8 text-secondary" />
              <h4 className="font-semibold text-lg">Payroll & Tax Support</h4>
              <p className="text-muted-foreground text-sm">
                Payroll processing, tax compliance, W-2/1099 preparation with
                U.S. GAAP expertise.
              </p>
            </Card>
            <Card className="p-6 space-y-3 border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
              <Users className="h-8 w-8 text-secondary" />
              <h4 className="font-semibold text-lg">Virtual CFO Services</h4>
              <p className="text-muted-foreground text-sm">
                Financial analysis, budgeting, forecasting, and strategic
                advisory for business growth.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
