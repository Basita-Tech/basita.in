"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MdOutlineWeb, MdOutlineSmartphone, MdOutlineCloudQueue, MdOutlineAnalytics, MdOutlineAccountBalance, MdOutlineAttachMoney } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";

const services = [
  {
    category: "Software Engineering",
    description: "Scalable, secure, and high-performance digital solutions.",
    items: [
      { title: "Web Development", desc: "Enterprise-grade web applications.", icon: MdOutlineWeb },
      { title: "Mobile Solutions", desc: "Native iOS & Android development.", icon: MdOutlineSmartphone },
      { title: "Cloud Infrastructure", desc: "AWS/Azure architecture & migration.", icon: MdOutlineCloudQueue },
    ]
  },
  {
    category: "Data & AI",
    description: "Transforming raw data into strategic business intelligence.",
    items: [
      { title: "AI Integration", desc: "LLM & Predictive models.", icon: BiBrain },
      { title: "Data Analytics", desc: "PowerBI & Tableau dashboards.", icon: MdOutlineAnalytics },
      { title: "Automation", desc: "RPA & Workflow optimization.", icon: MdOutlineCloudQueue }, // Using cloud icon as placeholder for automation if specific one not found
    ]
  },
  {
    category: "Financial Services",
    description: "Precision accounting and strategic financial planning.",
    items: [
      { title: "Bookkeeping", desc: "Daily ledger & reconciliation.", icon: MdOutlineAccountBalance },
      { title: "Payroll & Tax", desc: "US GAAP compliant processing.", icon: MdOutlineAttachMoney },
      { title: "Virtual CFO", desc: "Strategic financial advisory.", icon: HiOutlineOfficeBuilding },
    ]
  }
];

export function ServicesOverview() {
  return (
    <section id="services" className="relative w-full py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology and financial solutions designed for the modern enterprise.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((category, catIndex) => (
            <div key={catIndex} className="space-y-10">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-3xl font-bold text-foreground">{category.category}</h3>
                <p className="text-lg text-muted-foreground mt-2">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full p-8 border border-border bg-card hover:border-primary/50 transition-all duration-300 group shadow-sm hover:shadow-md rounded-xl flex flex-col justify-between">
                      <div className="space-y-6">
                        <div className="p-3 w-fit rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <item.icon className="h-8 w-8" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <div className="mt-8 pt-6 border-t border-border/50 flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform cursor-pointer">
                        Learn More <BsArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
