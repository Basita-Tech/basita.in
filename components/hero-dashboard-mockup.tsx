"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BarChart3, CheckCircle2, Clock, DollarSign, MoreHorizontal, PieChart, Search, TrendingUp, Users } from "lucide-react";

export function HeroDashboardMockup() {
    return (
        <div className="relative w-full max-w-[600px] mx-auto perspective-1000">
            <motion.div
                initial={{ rotateX: 5, rotateY: -5, opacity: 0, y: 20 }}
                animate={{ rotateX: 0, rotateY: 0, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative bg-card border border-border/50 rounded-xl shadow-2xl overflow-hidden"
            >
                {/* Mockup Header */}
                <div className="h-12 border-b border-border/50 bg-muted/30 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="ml-4 flex-1 max-w-sm h-8 bg-background rounded-md border border-border/50 flex items-center px-3 text-xs text-muted-foreground gap-2">
                        <Search className="w-3 h-3" />
                        <span>Search projects...</span>
                    </div>
                </div>

                {/* Mockup Body */}
                <div className="p-6 grid gap-6 bg-background/50 backdrop-blur-sm">

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 rounded-lg border border-border/50 bg-card shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium text-muted-foreground">Total Savings</span>
                                <DollarSign className="w-4 h-4 text-emerald-500" />
                            </div>
                            <div className="text-2xl font-bold text-foreground">$124,500</div>
                            <div className="text-xs text-emerald-500 flex items-center mt-1">
                                <TrendingUp className="w-3 h-3 mr-1" /> +24% vs last year
                            </div>
                        </div>
                        <div className="p-4 rounded-lg border border-border/50 bg-card shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium text-muted-foreground">Active Projects</span>
                                <BarChart3 className="w-4 h-4 text-blue-500" />
                            </div>
                            <div className="text-2xl font-bold text-foreground">12</div>
                            <div className="text-xs text-muted-foreground mt-1">
                                4 in development
                            </div>
                        </div>
                        <div className="p-4 rounded-lg border border-border/50 bg-card shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium text-muted-foreground">Team Size</span>
                                <Users className="w-4 h-4 text-purple-500" />
                            </div>
                            <div className="text-2xl font-bold text-foreground">8</div>
                            <div className="text-xs text-purple-500 mt-1">
                                Fully dedicated
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="grid grid-cols-3 gap-6">
                        {/* Project List */}
                        <div className="col-span-2 space-y-4">
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm font-semibold">Recent Activity</h4>
                                <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <div className="space-y-3">
                                {[
                                    { name: "E-Commerce Platform Redesign", status: "In Progress", date: "2h ago", color: "bg-blue-500" },
                                    { name: "Q3 Financial Audit", status: "Completed", date: "5h ago", color: "bg-emerald-500" },
                                    { name: "Mobile App API Integration", status: "Review", date: "1d ago", color: "bg-amber-500" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-card hover:bg-muted/50 transition-colors">
                                        <div className={`w-2 h-2 rounded-full ${item.color}`} />
                                        <div className="flex-1">
                                            <div className="text-sm font-medium">{item.name}</div>
                                            <div className="text-xs text-muted-foreground">{item.status} • {item.date}</div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                                            BP
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Sidebar / Chart */}
                        <div className="col-span-1 space-y-4">
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm font-semibold">Allocation</h4>
                            </div>
                            <div className="p-4 rounded-lg border border-border/50 bg-card h-full flex flex-col items-center justify-center gap-4">
                                <div className="relative w-24 h-24 rounded-full border-8 border-primary/20 flex items-center justify-center">
                                    <PieChart className="w-8 h-8 text-primary" />
                                </div>
                                <div className="w-full space-y-2">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-muted-foreground">Dev</span>
                                        <span className="font-medium">65%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                                        <div className="h-full w-[65%] bg-primary rounded-full" />
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-muted-foreground">Finance</span>
                                        <span className="font-medium">35%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                                        <div className="h-full w-[35%] bg-secondary rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>

            {/* Floating Elements for Depth */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 top-12 p-4 rounded-xl bg-card border border-border shadow-xl z-20 hidden md:block"
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                        <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-xs text-muted-foreground">Status Update</div>
                        <div className="text-sm font-bold">Project Deployed</div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-6 bottom-12 p-4 rounded-xl bg-card border border-border shadow-xl z-20 hidden md:block"
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                        <Clock className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-xs text-muted-foreground">Time Saved</div>
                        <div className="text-sm font-bold">120 Hours / Mo</div>
                    </div>
                </div>
            </motion.div>

        </div>
    );
}
