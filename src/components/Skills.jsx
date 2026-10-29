"use client";

import { useState } from "react";
import {
  Code2,
  Globe,
  Layers,
  Sparkles,
  Cpu,
  Database,
  Terminal,
  CheckCircle2,
  Wrench,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { skillCategories } from "@/data/portfolioData";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const iconMap = {
    Code2: Code2,
    Globe: Globe,
    Layers: Layers,
    Sparkles: Sparkles,
    Cpu: Cpu,
    Database: Database,
    Terminal: Terminal,
    Github: GithubIcon,
  };

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366F1]/10 text-[#6366F1] dark:text-[#818CF8] text-xs font-mono font-semibold tracking-wide uppercase mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            Skills &amp; Tech Stack
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A comprehensive overview of my core competencies across client-side frameworks, backend runtimes, and developer tooling.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeCategory === "all"
                ? "bg-[#6366F1] text-white shadow-md shadow-indigo-500/25"
                : "bg-slate-100 dark:bg-[#1E293B] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#6366F1] text-white shadow-md shadow-indigo-500/25"
                : "bg-slate-100 dark:bg-[#1E293B] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories & Skill Cards Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#6366F1]/10 text-[#6366F1] dark:text-[#818CF8]">
                  {category.skills.length} Technologies
                </span>
              </div>

              {/* Skills Card Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, idx) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={idx}
                      className="group relative p-4 rounded-2xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-800 hover:border-[#6366F1] dark:hover:border-[#6366F1] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 text-[#6366F1] dark:text-[#818CF8] group-hover:bg-[#6366F1] group-hover:text-white transition-colors duration-200">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        {skill.popular && (
                          <span className="text-[10px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            Core
                          </span>
                        )}
                      </div>

                      <h4 className="font-bold text-base text-[#0F172A] dark:text-[#F8FAFC] group-hover:text-[#6366F1] dark:group-hover:text-[#818CF8] transition-colors">
                        {skill.name}
                      </h4>

                      <div className="mt-2 flex items-center justify-between text-xs font-mono text-slate-400 dark:text-slate-500">
                        <span>{skill.tag}</span>
                        <span className="font-semibold text-slate-600 dark:text-slate-300">
                          {skill.level}
                        </span>
                      </div>

                      {/* Bottom Accent Bar */}
                      <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#6366F1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

