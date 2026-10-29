"use client";

import { useEffect } from "react";
import {
  X,
  ExternalLink,
  Code2,
  CheckCircle2,
  AlertTriangle,
  Compass,
  Sparkles,
  Layers,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import ProjectMockup from "@/components/ProjectMockup";

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
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

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#1E293B] rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl flex flex-col overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#6366F1]/10 text-[#6366F1] dark:text-[#818CF8]">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.badge}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-6 py-6 space-y-6">
          {/* Visual Application Mockup Banner */}
          <div className="rounded-2xl overflow-hidden shadow-inner border border-slate-200 dark:border-slate-800">
            <ProjectMockup type={project.id} />
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC]">
              {project.title}
            </h3>
            <p className="mt-1 text-sm sm:text-base font-medium text-[#6366F1] dark:text-[#818CF8]">
              {project.tagline}
            </p>
          </div>

          {/* Action CTAs (Live Demo & GitHub Repo) */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-[#6366F1] hover:bg-indigo-600 active:bg-indigo-700 shadow-md shadow-indigo-500/25 transition-all text-sm"
            >
              <span>Live Preview</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all text-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
              <Layers className="w-3.5 h-3.5 text-[#6366F1]" />
              <span>Technologies &amp; Libraries Used</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Full Project Description */}
          <div className="space-y-2">
            <h4 className="text-sm font-mono uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
              Project Overview &amp; Architecture
            </h4>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features List */}
          <div className="space-y-3 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
            <h4 className="text-sm font-bold text-[#0F172A] dark:text-[#F8FAFC] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#6366F1]" />
              <span>Core Features &amp; User Experience</span>
            </h4>
            <ul className="space-y-2">
              {project.keyFeatures.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges Faced Section */}
          <div className="space-y-3 p-5 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20">
            <h4 className="text-sm font-bold text-amber-700 dark:text-amber-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>Engineering Challenges Faced &amp; Solutions</span>
            </h4>
            <ul className="space-y-2">
              {project.challenges.map((challenge, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                >
                  <span className="text-amber-500 font-bold shrink-0">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Plans Section */}
          <div className="space-y-3 p-5 rounded-2xl bg-[#6366F1]/5 dark:bg-[#6366F1]/10 border border-[#6366F1]/20">
            <h4 className="text-sm font-bold text-[#6366F1] dark:text-[#818CF8] flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#6366F1]" />
              <span>Future Plans &amp; Strategic Roadmap</span>
            </h4>
            <ul className="space-y-2">
              {project.futurePlans.map((plan, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                >
                  <span className="text-[#6366F1] font-bold shrink-0">→</span>
                  <span>{plan}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}

