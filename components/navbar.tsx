"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img
            src="/logo.png"
            alt="Basita Logo"
            className="h-10 w-auto md:h-12 lg:h-14"
          />
        </Link>

        <ul className="hidden items-center gap-8 text-sm md:flex">
          <li>
            <Link
              href="/about"
              className="hover:text-primary transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/software"
              className="hover:text-primary transition-colors"
            >
              Software Services
            </Link>
          </li>
          <li>
            <Link
              href="/outsourcing"
              className="hover:text-primary transition-colors"
            >
              Outsourcing Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden md:block">
            <Button size="sm">Get Started</Button>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/software"
              className="block py-2 text-sm hover:text-primary"
            >
              Software Services
            </Link>
            <Link
              href="/bookkeeping"
              className="block py-2 text-sm hover:text-primary"
            >
              Bookkeeping Services
            </Link>
            <Link
              href="/about"
              className="block py-2 text-sm hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-sm hover:text-primary"
            >
              Contact
            </Link>
            <Link href="/contact" className="block w-full">
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
