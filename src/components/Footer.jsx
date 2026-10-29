"use client";

import { ArrowUp, Heart, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/Icons";
import { personalInfo, navLinks } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-white dark:bg-[#0F172A] border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-slate-200 dark:border-slate-800">
          {/* Brand & Designation */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-linear-to-br from-[#6366F1] to-indigo-700 text-white font-bold text-sm shadow-sm">
                &lt;AR&gt;
              </div>
              <span className="font-bold text-lg tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {personalInfo.designation} &middot; {personalInfo.institution}
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#6366F1] dark:hover:text-[#818CF8] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href="https://github.com/AbdullahRedoan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-[#6366F1] hover:border-[#6366F1]/50 transition-colors"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/abdullahredoan/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-[#6366F1] hover:border-[#6366F1]/50 transition-colors"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.facebook.com/abdullahredoan27"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-[#6366F1] hover:border-[#6366F1]/50 transition-colors"
              aria-label="Facebook profile"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-[#6366F1] hover:text-white transition-all shadow-sm"
              title="Back to Top"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-mono">
            <span>Built with Next.js App Router, Tailwind CSS &amp; Electric Indigo</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

