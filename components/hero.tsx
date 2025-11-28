"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroDashboardMockup } from "@/components/hero-dashboard-mockup";

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-background pt-28 md:pt-32 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text Content - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary tracking-wide uppercase">
              Global Standards • Indian Costs
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                Enterprise-Grade <br />
                <span className="text-primary">Innovation</span> & Scale.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Basita Technology empowers U.S. businesses with high-performance software development and precision accounting outsourcing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="h-14 px-8 text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-all">
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold rounded-md border-2 hover:bg-muted">
                Explore Services
              </Button>
            </div>

            <div className="pt-8 border-t border-border/50">
              <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Trusted for Excellence In</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-foreground/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>US GAAP Accounting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Cloud-Native Dev</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>AI Integration</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Content - Right Aligned */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block w-full"
          >
            <div className="relative z-10 transform scale-90 lg:scale-100 origin-center">
              <HeroDashboardMockup />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-[100px] -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
