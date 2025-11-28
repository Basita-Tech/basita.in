"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative w-full bg-background border-t border-border/50 pt-16 md:pt-24 pb-8">
      <div className="container mx-auto px-4 md:px-6">

        {/* CTA Section */}
        <div className="mb-20 rounded-3xl bg-primary/5 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/10">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground max-w-xl">
              Join hundreds of US businesses saving costs and scaling faster with Basita Technology.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full px-8">
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Contact Sales
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Basita Logo"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for software innovation and financial excellence. We deliver global standards at Indian costs.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Custom Software", "Web Development", "AI Solutions", "Bookkeeping", "Payroll Management", "Virtual CFO"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["About Us", "Our Team", "Careers", "Case Studies", "Blog", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>207 Swapnil 5, Navrangpura,<br />Ahmedabad, Gujarat, India.</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:hr@basita.in" className="hover:text-primary transition-colors">hr@basita.in</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>+91 9879003929</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Basita Technology. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-foreground">Terms</Link>
            <Link href="#" className="hover:text-foreground">Privacy</Link>
            <Link href="#" className="hover:text-foreground">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
