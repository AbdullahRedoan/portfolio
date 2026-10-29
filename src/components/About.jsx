"use client";

import { BookOpen, Code2, GraduationCap, Users, Sparkles, CheckCircle2 } from "lucide-react";
import { aboutData } from "@/data/portfolioData";

export default function About() {
  const pillarIcons = {
    BookOpen: BookOpen,
    Code2: Code2,
    GraduationCap: GraduationCap,
  };

  return (
    <section id="about" className="py-24 bg-slate-100/60 dark:bg-[#0c1322] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366F1]/10 text-[#6366F1] dark:text-[#818CF8] text-xs font-mono font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background & Technical Craft</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Fusing humanistic critical inquiry with modern full-stack web engineering.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Detailed Academic & Programming Bio */}
          <div className="lg:col-span-7 bg-white dark:bg-[#1E293B] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="p-2.5 rounded-xl bg-[#6366F1]/10 text-[#6366F1]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                  {aboutData.academicTitle}
                </h3>
                <p className="text-xs font-mono text-[#6366F1] dark:text-[#818CF8]">
                  {aboutData.institution}
                </p>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {aboutData.summary}
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border-l-4 border-[#6366F1]">
              <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-[#6366F1] dark:text-[#818CF8] mb-1">
                Full-Stack & Frontend Architecture
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {aboutData.technicalFocus}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border-l-4 border-emerald-500">
              <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                Instruction & Mentorship
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {aboutData.teachingExperience}
              </p>
            </div>
          </div>

          {/* Core Pillars / Conceptual Foundations */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-base font-mono uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 px-1">
              Guiding Engineering Principles
            </h3>

            {aboutData.corePillars.map((pillar, idx) => {
              const IconComp = pillarIcons[pillar.icon] || Code2;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-800 hover:border-[#6366F1]/50 dark:hover:border-[#6366F1]/50 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#6366F1] dark:text-[#818CF8] shrink-0 mt-0.5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {aboutData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-800 shadow-sm text-center hover:border-[#6366F1]/40 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#6366F1] dark:text-[#818CF8] font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {stat.helper}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

