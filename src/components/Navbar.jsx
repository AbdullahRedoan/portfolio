"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolioData";

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      // Background blur intensity on scroll
      setScrolled(window.scrollY > 20);

      // Section tracking for active state
      const sections = ["hero", "about", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8FAFC]/90 dark:bg-[#0F172A]/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand / Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#6366F1] to-indigo-700 text-white font-bold text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <span className="font-mono tracking-tighter">&lt;HH /&gt;</span>
              <span className="absolute -inset-0.5 rounded-xl bg-[#6366F1] opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-[#0F172A] dark:text-[#F8FAFC] group-hover:text-[#6366F1] dark:group-hover:text-[#818CF8] transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#6366F1] dark:text-[#818CF8] font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:text-[#0F172A] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#6366F1] rounded-full shadow-sm shadow-[#6366F1]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Theme Toggle & CTA */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Light and Dark Theme"
              className="relative p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#1E293B]/80 text-slate-700 dark:text-slate-200 hover:text-[#6366F1] dark:hover:text-[#818CF8] hover:border-[#6366F1]/50 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50"
            >
              {mounted ? (
                resolvedTheme === "dark" ? (
                  <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
                ) : (
                  <Moon className="w-5 h-5 text-[#6366F1] transition-transform duration-300 rotate-0 hover:-rotate-12" />
                )
              ) : (
                <div className="w-5 h-5" />
              )}
            </button>

            {/* Quick Contact CTA Desktop */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-[#6366F1] hover:bg-indigo-600 active:bg-indigo-700 text-white shadow-md shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#1E293B]/80 text-slate-700 dark:text-slate-200 hover:text-[#6366F1] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-[#F8FAFC]/98 dark:bg-[#0F172A]/98 backdrop-blur-xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-[#6366F1]/10 text-[#6366F1] dark:text-[#818CF8] font-semibold border-l-4 border-[#6366F1]"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#6366F1]" />}
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-base font-semibold bg-[#6366F1] text-white shadow-md shadow-indigo-500/25"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

