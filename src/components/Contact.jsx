"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  Copy,
  Check,
  MapPin,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { WhatsappIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolioData";

export default function Contact({ onShowToast }) {
  const [copiedField, setCopiedField] = useState(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    onShowToast?.(`${fieldName} copied to clipboard!`);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async message delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onShowToast?.("Thank you! Your message has been received.");
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-100/60 dark:bg-[#0c1322]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366F1]/10 text-[#6366F1] dark:text-[#818CF8] text-xs font-mono font-semibold tracking-wide uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            Get In Touch
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Have a project in mind, a freelance inquiry, or interested in collaborative technical mentoring? Let&apos;s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-mono uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 px-1">
              Direct Contact Channels
            </h3>

            {/* Email Card */}
            <div className="group p-5 rounded-2xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-800 hover:border-[#6366F1]/50 shadow-sm transition-all duration-200">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-[#6366F1]/10 text-[#6366F1]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="block text-sm sm:text-base font-bold text-[#0F172A] dark:text-[#F8FAFC] hover:text-[#6366F1] transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, "Email")}
                  className="p-2 rounded-xl text-slate-400 hover:text-[#6366F1] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedField === "Email" ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group p-5 rounded-2xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-800 hover:border-[#6366F1]/50 shadow-sm transition-all duration-200">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`}
                      className="block text-sm sm:text-base font-bold text-[#0F172A] dark:text-[#F8FAFC] hover:text-[#6366F1] transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, "Phone number")}
                  className="p-2 rounded-xl text-slate-400 hover:text-[#6366F1] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Copy phone number to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedField === "Phone number" ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="group p-5 rounded-2xl bg-white dark:bg-[#1E293B] border border-emerald-500/30 hover:border-emerald-500/60 shadow-sm transition-all duration-200">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-500">
                    <WhatsappIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      WhatsApp Instant Chat
                    </span>
                    <a
                      href={personalInfo.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      Click to Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <a
                  href={personalInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-emerald-500 hover:bg-emerald-500/10 transition-colors"
                  title="Open WhatsApp chat"
                  aria-label="Open WhatsApp chat"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location Pill */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                <MapPin className="w-5 h-5 text-[#6366F1]" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Primary Location
                </span>
                <p className="text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
                  {personalInfo.location} &middot; {personalInfo.institution}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form Column */}
          <div className="lg:col-span-7 bg-white dark:bg-[#1E293B] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Fill out this form and I will get back to you within 24 hours.
            </p>

            {isSuccess && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-sm flex items-center gap-3">
                <div className="p-1 rounded-full bg-emerald-500/20">
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[#0F172A] dark:text-[#F8FAFC] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[#0F172A] dark:text-[#F8FAFC] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1] transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Inquiry regarding Next.js project / Mentorship"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[#0F172A] dark:text-[#F8FAFC] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1] transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Share details about your timeline, project requirements, or questions..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[#0F172A] dark:text-[#F8FAFC] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-[#6366F1] hover:bg-indigo-600 active:bg-indigo-700 shadow-md shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

