"use client";

import { useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

export function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white dark:bg-[#1E293B] border border-[#6366F1]/40 text-[#0F172A] dark:text-[#F8FAFC] px-4 py-3 rounded-xl shadow-xl indigo-glow transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
      <div className="p-1 rounded-full bg-[#6366F1]/15 text-[#6366F1]">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <p className="text-sm font-medium pr-2">{message}</p>
      <button
        onClick={onClose}
        className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

