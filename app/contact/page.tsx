"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "software",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Contact API error:", data);
        setError(data?.error || "Failed to send message");
        setLoading(false);
        return;
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "software",
        message: "",
      });

      alert("Thank you for reaching out! We'll contact you soon.");
    } catch (err) {
      console.error("Failed to submit contact form", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-dvh">
      <Navbar />

      <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to transform your business? Contact us to discuss how Basita
              Technology can help you succeed.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24 bg-muted/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <Mail className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Email</h3>
              <p className="text-muted-foreground text-sm">
                Reach out via email for detailed inquiries.
              </p>
              <a
                href="mailto:hr@basita.in"
                className="text-primary font-medium hover:underline"
              >
                hr@basita.in
              </a>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <Phone className="h-10 w-10 text-secondary" />
              <h3 className="text-lg font-semibold text-foreground">Phone</h3>
              <p className="text-muted-foreground text-sm">
                Call us directly for immediate assistance.
              </p>
              <a
                href="tel:+18335278482"
                className="text-secondary font-medium hover:underline"
              >
                +91 9879003929
              </a>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <MapPin className="h-10 w-10 text-accent" />
              <h3 className="text-lg font-semibold text-foreground">
                Location
              </h3>
              <p className="text-muted-foreground text-sm">
                207 Swapnil 5, Navrangpura, Ahmedabad, Gujarat.
              </p>
              <p className="text-muted-foreground text-sm">
                Serving U.S. Businesses Globally
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <Clock className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Hours</h3>
              <p className="text-muted-foreground text-sm">
                24/7 Support Available
              </p>
              <p className="text-muted-foreground text-sm">
                Time zone advantage for U.S. clients
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-foreground"
                  >
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="software">Software Development</option>
                    <option value="bookkeeping">Bookkeeping Services</option>
                    <option value="both">Both Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your project or needs..."
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive mb-2" role="alert">
                    {error}
                  </p>
                )}
                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Why Contact Us?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether you need custom software development, bookkeeping
                  services, or digital transformation consulting, our team is
                  ready to help. We provide:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Free Consultation
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Discuss your needs with our experts
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Customized Solutions
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Tailored to your specific requirements
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Fast Response
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Quick turnaround on all inquiries
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <Card className="p-6 space-y-4 bg-gradient-to-br from-primary/10 to-secondary/10">
                <h3 className="text-lg font-semibold text-foreground">
                  Quick Links
                </h3>
                <div className="space-y-2">
                  <a
                    href="/software"
                    className="block text-primary hover:underline text-sm"
                  >
                    Explore Software Services
                  </a>
                  <a
                    href="/bookkeeping"
                    className="block text-secondary hover:underline text-sm"
                  >
                    Explore Bookkeeping Services
                  </a>
                  <a
                    href="/about"
                    className="block text-accent hover:underline text-sm"
                  >
                    Learn About Our Team
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24 bg-muted/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on complexity and scope. We provide detailed timelines during the consultation phase.",
              },
              {
                q: "How do you ensure data security?",
                a: "100% data confidentiality with NDA agreements, encrypted data transfer, and secure cloud-based collaboration tools.",
              },
              {
                q: "What software platforms do you support?",
                a: "We support QuickBooks, Xero, NetSuite, Zoho Books, FreshBooks, and other major accounting platforms.",
              },
              {
                q: "Do you offer support after project completion?",
                a: "Yes, we provide ongoing maintenance, support, and updates to ensure your systems run smoothly.",
              },
              {
                q: "How much can I save with your bookkeeping services?",
                a: "Our clients typically save 40-60% on accounting costs compared to domestic service providers.",
              },
              {
                q: "Can you handle both services for my business?",
                a: "We offer integrated solutions combining software development with bookkeeping services.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 space-y-3 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-foreground">{item.q}</h3>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
