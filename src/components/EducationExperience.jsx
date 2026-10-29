"use client";

import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2, Award, BookOpen } from "lucide-react";
import { educationAndExperience } from "@/data/portfolioData";

export default function EducationExperience() {
  const { education, experience } = educationAndExperience;

  return (
    <section id="experience" className="py-24 bg-slate-100/60 dark:bg-[#0c1322] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366F1]/10 text-[#6366F1] dark:text-[#818CF8] text-xs font-mono font-semibold tracking-wide uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Pathways & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            Education &amp; Experience
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A harmonious dual track of academic university education and professional tech instruction.
          </p>
        </div>

        {/* Dual Grid: Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Education Column */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#6366F1]/10 text-[#6366F1] dark:text-[#818CF8]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                  Educational Qualification
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Academic Degree &amp; Intellectual Development
                </p>
              </div>
            </div>

            {education.map((item, idx) => (
              <div
                key={idx}
                className="relative flex-1 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#6366F1]/40 transition-all duration-200"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#6366F1]/10 text-[#6366F1] dark:text-[#818CF8]">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-[#6366F1]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                  {item.degree}
                </h4>

                <div className="flex items-center gap-2 text-sm font-semibold text-[#6366F1] dark:text-[#818CF8] mb-4">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{item.institution}</span>
                </div>

                <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 inline-block px-2.5 py-1 rounded-md mb-6">
                  Status: {item.status}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                    Academic Focus &amp; Cognitive Skills:
                  </p>
                  <ul className="space-y-2.5">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#6366F1] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Column */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#6366F1]/10 text-[#6366F1] dark:text-[#818CF8]">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                  Teaching Experience
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Instruction, Mentorship &amp; Curriculum Delivery
                </p>
              </div>
            </div>

            {experience.map((item, idx) => (
              <div
                key={idx}
                className="relative flex-1 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#6366F1]/40 transition-all duration-200"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                  {item.role}
                </h4>

                <div className="flex items-center gap-2 text-sm font-semibold text-[#6366F1] dark:text-[#818CF8] mb-4">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{item.company}</span>
                </div>

                <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 inline-block px-2.5 py-1 rounded-md mb-6">
                  Status: {item.status} &middot; {item.location}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                    Key Teaching Responsibilities &amp; Impact:
                  </p>
                  <ul className="space-y-2.5">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

