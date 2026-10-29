"use client";

import { useEffect } from "react";
import {
  X,
  Download,
  Printer,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
} from "lucide-react";
import { personalInfo, aboutData, skillCategories, educationAndExperience } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ResumeModal({ isOpen, onClose, onShowToast }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrintOrDownload = () => {
    onShowToast?.("Resume downloaded! Generating clean document...");
    // Trigger print preview which allows saving as PDF
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-[#1E293B] rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl flex flex-col overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#6366F1]/10 text-[#6366F1] dark:text-[#818CF8]">
              Curriculum Vitae
            </span>
            <span className="text-xs font-mono text-slate-400">
              {personalInfo.name} &middot; 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintOrDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#6366F1] hover:bg-indigo-600 transition-colors shadow-sm"
              title="Save as PDF or Print"
            >
              <Download className="w-4 h-4" />
              <span>Download / Print PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-white dark:bg-[#1E293B] text-slate-800 dark:text-slate-200 print:p-0 print:text-black">
          {/* Header Section */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC]">
              {personalInfo.name}
            </h1>
            <p className="text-base sm:text-lg font-semibold text-[#6366F1] dark:text-[#818CF8] mt-1">
              {personalInfo.designation}
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-4 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#6366F1]" />
                {personalInfo.location}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#6366F1]" />
                {personalInfo.email}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#6366F1]" />
                {personalInfo.phone}
              </span>
            </div>
          </div>

          {/* Academic & Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-[#6366F1] dark:text-[#818CF8]">
              Executive Academic &amp; Engineering Summary
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {aboutData.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <GraduationCap className="w-5 h-5 text-[#6366F1]" />
              <h2 className="text-base font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                Academic Qualifications
              </h2>
            </div>
            {educationAndExperience.education.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex flex-wrap items-center justify-between text-sm">
                  <span className="font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                    {edu.degree}
                  </span>
                  <span className="font-mono text-xs text-slate-500">{edu.period}</span>
                </div>
                <p className="text-xs font-semibold text-[#6366F1] dark:text-[#818CF8]">
                  {edu.institution}
                </p>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1 pt-1">
                  {edu.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Teaching Experience */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <Briefcase className="w-5 h-5 text-emerald-500" />
              <h2 className="text-base font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                Instructional &amp; Professional Experience
              </h2>
            </div>
            {educationAndExperience.experience.map((exp, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex flex-wrap items-center justify-between text-sm">
                  <span className="font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                    {exp.role}
                  </span>
                  <span className="font-mono text-xs text-slate-500">{exp.period}</span>
                </div>
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {exp.company} &middot; {exp.location}
                </p>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1 pt-1">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills Categorized */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <Code2 className="w-5 h-5 text-[#6366F1]" />
              <h2 className="text-base font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                Technical Skills &amp; Stack
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              {skillCategories.map((cat) => (
                <div
                  key={cat.id}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800"
                >
                  <h3 className="font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2 font-mono">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

