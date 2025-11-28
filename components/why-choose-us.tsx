"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BsGraphUpArrow, BsShieldCheck, BsGlobeAmericas, BsClockHistory } from "react-icons/bs";

export function WhyChooseUs() {
  return (
    <section id="why-choose" className="relative w-full py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-border/50 py-12">
          {[
            { label: "Cost Savings", value: "60%", icon: BsGraphUpArrow },
            { label: "Data Security", value: "100%", icon: BsShieldCheck },
            { label: "Global Clients", value: "50+", icon: BsGlobeAmericas },
            { label: "Support", value: "24/7", icon: BsClockHistory },
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="flex justify-center text-primary mb-2">
                <stat.icon className="h-6 w-6 opacity-80" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Strategic Advantage for <br />
              <span className="text-primary">Modern Enterprises</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In today's fast-paced digital economy, you need a partner who understands both technology and finance. Basita Technology bridges this gap, offering a unique blend of software innovation and financial rigor.
            </p>
            <div className="space-y-4">
              {[
                "Certified US GAAP Experts & CPA Oversight",
                "Enterprise-Grade Data Security Protocols",
                "Agile Software Development Methodology",
                "Seamless Integration with Your Existing Teams"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl -z-10" />
            <Card className="p-8 border-none shadow-2xl bg-card/90 backdrop-blur-xl">
              <h3 className="text-2xl font-bold mb-6">The Basita Difference</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Operational Efficiency</span>
                    <span className="text-primary font-bold">+45%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%] rounded-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Cost Reduction</span>
                    <span className="text-primary font-bold">-60%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[90%] rounded-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Time to Market</span>
                    <span className="text-primary font-bold">2x Faster</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[80%] rounded-full" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
