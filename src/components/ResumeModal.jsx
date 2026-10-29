"use client";

import { useEffect } from "react";
import {
  X,
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Briefcase,
  Code2,
  Globe,
  Sparkles,
} from "lucide-react";
import {
  personalInfo,
  skillCategories,
  projectsData,
} from "@/data/portfolioData";
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
    onShowToast?.("Generating clean PDF document...");
    setTimeout(() => {
      window.print();
    }, 150);
  };

  return (
    <div className="resume-modal-wrapper fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop (hidden when printing) */}
      <div
        className="no-print fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="resume-modal-card relative w-full max-w-4xl max-h-[94vh] bg-slate-900/95 rounded-2xl border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden z-10 my-auto animate-in zoom-in-95 duration-200">
        {/* Top Control Bar (hidden when printing) */}
        <div className="no-print flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950/90 text-white">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#6366F1]/20 text-[#818CF8] border border-[#6366F1]/30">
              Curriculum Vitae Preview
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Standard A4 Format
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrintOrDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#6366F1] hover:bg-indigo-600 active:bg-indigo-700 shadow-md shadow-indigo-500/25 transition-all cursor-pointer"
              title="Save as PDF or Print"
            >
              <Download className="w-4 h-4" />
              <span>Download / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Stage: Renders document as an authentic A4 paper sheet */}
        <div className="overflow-y-auto p-4 sm:p-8 bg-slate-950/50 print:p-0 print:bg-white print:overflow-visible">
          {/* Printable Document Sheet */}
          <div
            id="resume-print-area"
            className="w-full max-w-3xl mx-auto bg-white text-slate-900 shadow-xl rounded-xl p-6 sm:p-10 border border-slate-200/80 print:shadow-none print:border-none print:p-0 print:max-w-full font-sans leading-relaxed"
          >
            {/* 1. HEADER SECTION (Uses div to guarantee visibility in print engines) */}
            <div className="resume-header border-b-2 border-indigo-500/30 pb-4 mb-5 resume-page-break-avoid">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                {/* Name & Title with Brand Logo Badge */}
                <div className="flex items-center gap-3.5">
                  <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-[#6366F1] to-indigo-700 text-white font-bold text-base sm:text-lg font-mono shadow-md shadow-indigo-500/20 shrink-0 print:border print:border-indigo-600">
                    &lt;AR&gt;
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {personalInfo.name}
                    </h1>
                    <p className="text-xs sm:text-sm font-bold font-mono text-[#4F46E5] mt-0.5">
                      Full-Stack Developer
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Bar */}
              <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-600 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#4F46E5]" />
                  {personalInfo.location}
                </span>
                <span>&bull;</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1 hover:text-[#4F46E5] text-slate-700"
                >
                  <Mail className="w-3.5 h-3.5 text-[#4F46E5]" />
                  {personalInfo.email}
                </a>
                <span>&bull;</span>
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-1 hover:text-[#4F46E5] text-slate-700"
                >
                  <Phone className="w-3.5 h-3.5 text-[#4F46E5]" />
                  {personalInfo.phone}
                </a>
                <span>&bull;</span>
                <a
                  href="https://portfolio-peach-five-67.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#4F46E5] text-slate-700 font-semibold"
                >
                  <Globe className="w-3.5 h-3.5 text-[#4F46E5]" />
                  Portfolio Live
                </a>
                <span>&bull;</span>
                <a
                  href="https://github.com/AbdullahRedoan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#4F46E5] text-slate-700"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#4F46E5]" />
                  GitHub
                </a>
                <span>&bull;</span>
                <a
                  href="https://www.linkedin.com/in/abdullahredoan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#4F46E5] text-slate-700"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#4F46E5]" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* 2. EXECUTIVE PROFESSIONAL SUMMARY */}
            <section className="mb-5 resume-page-break-avoid">
              <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-[#4F46E5] border-b border-slate-200 pb-1 mb-2">
                Executive Profile
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed text-justify">
                Full-Stack Developer specializing in modern web engineering across the <strong>MERN Stack (MongoDB, Express.js, React, Node.js)</strong>, Next.js App Router, and Tailwind CSS. Proficient in architecting performant, accessible digital products with robust state management and responsive UI systems. Experienced programming and web design instructor who has mentored 150+ students in JavaScript fundamentals, algorithmic problem solving, and modern web architectures.
              </p>
            </section>

            {/* 3. TECHNICAL COMPETENCIES */}
            <section className="mb-5 resume-page-break-avoid">
              <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-[#4F46E5] border-b border-slate-200 pb-1 mb-2.5">
                Technical Skills &amp; Stack
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="font-bold mb-1 flex items-center gap-1.5 font-mono text-[11px] text-[#4F46E5]">
                    <Code2 className="w-3 h-3" /> Frontend Engineering
                  </h3>
                  <p className="text-slate-700 text-[11.5px] leading-relaxed">
                    React, Next.js (App Router), JavaScript (ES6+), Tailwind CSS, DaisyUI, HTML5, CSS3, Responsive Layouts.
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="font-bold mb-1 flex items-center gap-1.5 font-mono text-[11px] text-[#4F46E5]">
                    <Globe className="w-3 h-3" /> Backend &amp; Database
                  </h3>
                  <p className="text-slate-700 text-[11.5px] leading-relaxed">
                    Node.js, Express.js, MongoDB (MERN Stack), RESTful API Architecture, JSON Web Tokens, LocalStorage.
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="font-bold mb-1 flex items-center gap-1.5 font-mono text-[11px] text-[#4F46E5]">
                    <Sparkles className="w-3 h-3" /> Tools &amp; Workflow
                  </h3>
                  <p className="text-slate-700 text-[11.5px] leading-relaxed">
                    Git, GitHub, VS Code, Vercel, Turbopack, npm/pnpm, ESLint, Adobe Photoshop.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. FEATURED PROJECTS */}
            <section className="mb-5 resume-page-break-avoid">
              <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-[#4F46E5] border-b border-slate-200 pb-1 mb-3">
                Featured Software Projects
              </h2>

              <div className="space-y-3.5">
                {/* Project 1: Bazar Dor */}
                <div className="text-xs space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="font-bold text-slate-900 text-[13px]">
                      Bazar Dor &ndash; Daily Commodity Price Tracking Web Platform
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      Next.js &middot; Tailwind CSS &middot; DaisyUI &middot; REST APIs
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-[#4F46E5]">
                    <span>Live: </span>
                    <a href="https://bazar-dor.vercel.app" target="_blank" rel="noopener noreferrer" className="underline mr-3">
                      bazar-dor.vercel.app
                    </a>
                    <span>Repo: </span>
                    <a href="https://github.com/AbdullahRedoan/portfolio" target="_blank" rel="noopener noreferrer" className="underline">
                      github.com/AbdullahRedoan/portfolio
                    </a>
                  </div>
                  <ul className="list-disc list-inside text-slate-700 space-y-0.5 pt-0.5 text-[11.5px]">
                    <li>Engineered a real-time price monitoring web platform for consumers and vendors in Dhaka to compare daily kitchen market rates.</li>
                    <li>Developed a crowdsourced price verification mechanism with an average calculation algorithm to mitigate erratic price anomalies.</li>
                    <li>Implemented high-performance client-side filtering, category navigation, and localized currency formatting (BDT ৳).</li>
                  </ul>
                </div>

                {/* Project 2: FitLog */}
                <div className="text-xs space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="font-bold text-slate-900 text-[13px]">
                      FitLog &ndash; Workout &amp; Exercise Tracker with Offline Persistence
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      Next.js &middot; React &middot; Tailwind CSS &middot; LocalStorage API
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-[#4F46E5]">
                    <span>Live: </span>
                    <a href="https://fitlog-tracker.vercel.app" target="_blank" rel="noopener noreferrer" className="underline mr-3">
                      fitlog-tracker.vercel.app
                    </a>
                    <span>Repo: </span>
                    <a href="https://github.com/AbdullahRedoan/portfolio" target="_blank" rel="noopener noreferrer" className="underline">
                      github.com/AbdullahRedoan/portfolio
                    </a>
                  </div>
                  <ul className="list-disc list-inside text-slate-700 space-y-0.5 pt-0.5 text-[11.5px]">
                    <li>Built a distraction-free fitness logging application featuring zero-latency browser state synchronization with full offline support.</li>
                    <li>Designed schema versioning protocols for LocalStorage to guarantee backward compatibility across software revisions.</li>
                    <li>Implemented custom workout routine builders, rest-timer intervals, and interactive calendar heatmap streaks.</li>
                  </ul>
                </div>

                {/* Project 3: DevStack */}
                <div className="text-xs space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="font-bold text-slate-900 text-[13px]">
                      DevStack &ndash; Developer Technology Stack Curation Platform
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      Next.js &middot; React &middot; Tailwind CSS &middot; Filter Engine
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-[#4F46E5]">
                    <span>Live: </span>
                    <a href="https://devstack-showcase.vercel.app" target="_blank" rel="noopener noreferrer" className="underline mr-3">
                      devstack-showcase.vercel.app
                    </a>
                    <span>Repo: </span>
                    <a href="https://github.com/AbdullahRedoan/portfolio" target="_blank" rel="noopener noreferrer" className="underline">
                      github.com/AbdullahRedoan/portfolio
                    </a>
                  </div>
                  <ul className="list-disc list-inside text-slate-700 space-y-0.5 pt-0.5 text-[11.5px]">
                    <li>Curated modern developer architectures with interactive compatibility matrices and library pairing suggestions.</li>
                    <li>Architected multi-faceted dynamic filtering engine supporting instant fuzzy search across 100+ developer libraries.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. INSTRUCTIONAL & PROFESSIONAL EXPERIENCE */}
            <section className="resume-page-break-avoid">
              <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-[#4F46E5] border-b border-slate-200 pb-1 mb-2.5">
                Instructional &amp; Professional Experience
              </h2>

              <div className="text-xs space-y-1">
                <div className="flex flex-wrap items-center justify-between text-slate-900">
                  <span className="font-bold text-[13px]">
                    Web Design &amp; Programming Instructor
                  </span>
                  <span className="font-mono text-slate-500 text-[11px]">2023 &ndash; Present</span>
                </div>
                <p className="text-[11px] font-mono font-semibold text-emerald-700">
                  Creative Zone IT &amp; Local Coaching Centers &middot; Dhaka, Bangladesh
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-0.5 pt-0.5 text-[11.5px]">
                  <li>Instructed 150+ students in HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), DOM events, and algorithmic programming logic.</li>
                  <li>Curated comprehensive practical assignments, led weekly live coding bootcamps, and held real-world debugging workshops.</li>
                  <li>Conducted rigorous code reviews and capstone evaluations, mentoring beginners into junior frontend roles.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
