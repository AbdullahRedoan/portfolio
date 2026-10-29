"use client";

import {
  Download,
  Sparkles,
  ArrowRight,
  MapPin,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolioData";
import Image from "next/image";

export default function Hero({ onOpenResume, onShowToast }) {
  const handleDownloadDirect = (e) => {
    e.preventDefault();
    if (onOpenResume) {
      onOpenResume();
    } else {
      onShowToast?.("Resume downloaded successfully!");
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-137.5 h-137.5 bg-[#6366F1]/10 dark:bg-[#6366F1]/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 dark:bg-indigo-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Designation, Heading, Intro, CTAs, Socials */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700/80 shadow-sm text-xs font-medium text-slate-700 dark:text-slate-300 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availabilityStatus}</span>
              <span className="text-slate-300 dark:text-slate-600">|</span>
              <span className="text-[#6366F1] font-mono font-semibold">
                Dhaka, BD
              </span>
            </div>

            {/* Professional Designation */}
            <div className="mb-3">
              <span className="text-sm sm:text-base font-semibold font-mono tracking-wide uppercase text-[#6366F1] dark:text-[#818CF8]">
                {personalInfo.designation}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] leading-[1.15] mb-6">
              Hello, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#6366F1] via-indigo-500 to-purple-600">
                {personalInfo.name}
              </span>
            </h1>

            {/* Welcoming Intro */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              {personalInfo.heroBio}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={handleDownloadDirect}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#6366F1] hover:bg-indigo-600 active:bg-indigo-700 shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 cursor-pointer"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#0F172A] dark:text-[#F8FAFC] bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700 hover:border-[#6366F1] dark:hover:border-[#6366F1] hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm transition-all duration-200 hover:scale-[1.02]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-[#6366F1]" />
              </a>
            </div>

            {/* Social Links with Lucide & SVGs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect With Me:
              </span>
              <div className="flex items-center gap-3">
                {personalInfo.socials.map((social) => {
                  let IconComponent = GithubIcon;
                  if (social.name === "LinkedIn") IconComponent = LinkedinIcon;
                  if (social.name === "Facebook") IconComponent = FacebookIcon;

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:text-[#6366F1] dark:hover:text-[#818CF8] hover:border-[#6366F1]/50 dark:hover:border-[#6366F1]/50 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                      aria-label={`Visit Redoan's ${social.name} profile`}
                    >
                      <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Professional Photo Container / Stylized Developer Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-2 rounded-3xl bg-linear-to-tr from-[#6366F1] via-indigo-500 to-purple-600 opacity-20 dark:opacity-30 blur-xl animate-pulse-glow" />

              {/* Main Container Card */}
              <div className="relative rounded-3xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden p-6 sm:p-8">
                {/* Visual Header / Terminal Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#6366F1]" />
                    redoan@developer:~
                  </span>
                </div>

                {/* Professional Photo Avatar Representation */}
                <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 rounded-2xl bg-linear-to-br from-slate-100 via-indigo-50 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-indigo-950/70 p-2 flex items-center justify-center border border-indigo-100 dark:border-indigo-900/40 shadow-inner">
                  {/* Decorative corner brackets */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#6366F1]" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#6366F1]" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#6366F1]" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#6366F1]" />

                  {/* Stylized Developer Avatar Silhouette */}
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-linear-to-tr from-[#6366F1] via-indigo-500 to-purple-600 flex items-end justify-center shadow-lg shadow-indigo-500/30 overflow-hidden ring-2 ring-white/20 dark:ring-white/10">
                      <Image
                        src="/dp.png"
                        alt={personalInfo.name}
                        width={300}
                        height={400}
                        className="w-full h-full object-cover object-top select-none pointer-events-none"
                        priority
                      />
                    </div>
                    <div className="mt-3">
                      <p className="text-sm font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                        {personalInfo.name}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        JnU &middot; MERN &middot; Next.js
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info Pills & Code snippet below */}
                <div className="mt-6 space-y-2.5 font-mono text-xs">
                  

                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-slate-600 dark:text-slate-300">
                    <span className="text-slate-400">Focus Stack:</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      Next.js & MERN
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-slate-600 dark:text-slate-300">
                    <span className="text-slate-400">Instructor:</span>
                    <span className="font-semibold text-indigo-500">
                      Creative Zone IT
                    </span>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <Sparkles className="w-4 h-4 text-[#6366F1]" />
                  <span>Passionate about modern web standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
