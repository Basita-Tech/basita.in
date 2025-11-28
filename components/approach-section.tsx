"use client";

export function ApproachSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description:
        "Define project scope, requirements, and business goals through thorough discovery.",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description:
        "Our team creates stunning, user-centric designs that prioritize conversions. We prototype key interactions and gather feedback before moving to development.",
    },
    {
      number: "03",
      title: "Development & Integration",
      description:
        "We build scalable, performant websites using modern technologies. Every integration is seamless, from CRM systems to analytics platforms.",
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description:
        "Rigorous testing across devices and browsers ensures flawless performance. We optimize every element for speed, accessibility, and conversion rates.",
    },
    {
      number: "05",
      title: "Deployment",
      description:
        "Seamless release to production with minimal downtime and monitoring.",
    },
    {
      number: "06",
      title: "Maintenance",
      description:
        "Ongoing updates, performance optimization, and 24/7 technical support.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-balance tracking-tight font-bold">
            Our Approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven process that transforms your vision into high-converting
            digital experiences
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-xl font-bold relative z-10 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-lg shadow-primary/20">
                  {step.number}
                </div>

                <div
                  className={`flex-1 ${index % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:pl-16 md:text-left"
                    } md:w-1/2`}
                >
                  <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
                    <h3 className="font-serif text-2xl md:text-3xl mb-4 font-bold">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
