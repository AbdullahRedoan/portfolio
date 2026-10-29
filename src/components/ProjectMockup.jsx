"use client";

import { TrendingUp, Activity, Layers, ArrowUpRight, Search, Check, Flame, Star, ShoppingBag } from "lucide-react";

export default function ProjectMockup({ type }) {
  if (type === "bazar-dor") {
    return (
      <div className="w-full h-48 sm:h-56 bg-linear-to-br` from-slate-900 via-emerald-950/60 to-slate-950 p-4 flex flex-col justify-between text-white font-sans select-none overflow-hidden relative border-b border-emerald-500/20">
        {/* Subtle decorative grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] bg-size-[16px_16px] opacity-15" />

        {/* Mock Top bar */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold text-xs">
              <ShoppingBag className="w-4 h-4 text-slate-950" />
            </div>
            <span className="font-bold text-sm tracking-tight text-white">Bazar Dor</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
              Live Feed
            </span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-slate-900/80 px-2 py-1 rounded border border-emerald-500/30">
            Dhaka Wholesale
          </span>
        </div>

        {/* Mock Data Tickers */}
        <div className="relative z-10 grid grid-cols-3 gap-2 my-auto">
          <div className="p-2 rounded-xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-sm">
            <span className="text-[10px] text-slate-400 block">Onions (দেশি)</span>
            <span className="text-sm font-bold text-white font-mono">৳110 /kg</span>
            <span className="text-[9px] text-emerald-400 flex items-center font-mono">▼ -4.5%</span>
          </div>

          <div className="p-2 rounded-xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-sm">
            <span className="text-[10px] text-slate-400 block">Potatoes (ডায়মন্ড)</span>
            <span className="text-sm font-bold text-white font-mono">৳55 /kg</span>
            <span className="text-[9px] text-slate-400 flex items-center font-mono">▬ 0.0%</span>
          </div>

          <div className="p-2 rounded-xl bg-slate-900/90 border border-rose-500/30 backdrop-blur-sm">
            <span className="text-[10px] text-slate-400 block">Broiler Chicken</span>
            <span className="text-sm font-bold text-white font-mono">৳190 /kg</span>
            <span className="text-[9px] text-rose-400 flex items-center font-mono">▲ +2.1%</span>
          </div>
        </div>

        {/* Mock Bottom Chart Sparkline */}
        <div className="relative z-10 flex items-center justify-between pt-1 border-t border-slate-800/80 text-[10px] text-slate-400">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Real-time price trend tracker active</span>
          </div>
          <span className="font-mono text-slate-500">DaisyUI &middot; Next.js</span>
        </div>
      </div>
    );
  }

  if (type === "fitlog") {
    return (
      <div className="w-full h-48 sm:h-56 bg-linear-to-br from-slate-900 via-indigo-950/70 to-purple-950/70 p-4 flex flex-col justify-between text-white font-sans select-none overflow-hidden relative border-b border-[#6366F1]/20">
        <div className="absolute inset-0 bg-[radial-gradient(#6366F1_1px,transparent_1px)] bg-size-[16px_16px] opacity-15" />

        {/* Mock Top Bar */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#6366F1] flex items-center justify-center text-white">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-sm tracking-tight text-white">FitLog Tracker</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30 font-mono">
            <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span>14 Day Streak</span>
          </div>
        </div>

        {/* Mock Workout Log Card */}
        <div className="relative z-10 bg-slate-900/90 border border-[#6366F1]/30 rounded-xl p-3 backdrop-blur-sm space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-white">Push Day &middot; Bench Press</span>
            <span className="text-[10px] font-mono text-[#818CF8]">Set 3 / 4</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center font-mono">
            <div className="bg-slate-800/80 rounded p-1">
              <span className="text-[9px] text-slate-400 block">WEIGHT</span>
              <span className="text-xs font-bold text-white">85 kg</span>
            </div>
            <div className="bg-slate-800/80 rounded p-1">
              <span className="text-[9px] text-slate-400 block">REPS</span>
              <span className="text-xs font-bold text-white">8 Reps</span>
            </div>
            <div className="bg-emerald-950/50 border border-emerald-500/40 rounded p-1">
              <span className="text-[9px] text-emerald-300 block">STATUS</span>
              <span className="text-xs font-bold text-emerald-400">Completed</span>
            </div>
          </div>
        </div>

        {/* Mock Persistence Footer */}
        <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400">
          <span className="flex items-center gap-1 text-emerald-400 font-mono">
            <Check className="w-3 h-3" /> Offline LocalStorage Synced
          </span>
          <span className="font-mono text-slate-500">0ms Latency</span>
        </div>
      </div>
    );
  }

  // devstack
  return (
    <div className="w-full h-48 sm:h-56 bg-linear-to-br from-slate-900 via-blue-950/60 to-indigo-950 p-4 flex flex-col justify-between text-white font-sans select-none overflow-hidden relative border-b border-blue-500/20">
      <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] bg-size-[16px_16px] opacity-15" />

      {/* Mock Top bar */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
            <Layers className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-sm tracking-tight text-white">DevStack</span>
          <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/30">
            Explorer
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
          <Search className="w-3 h-3 text-blue-400" />
          <span>Next.js 16</span>
        </div>
      </div>

      {/* Mock Stack pills */}
      <div className="relative z-10 flex flex-wrap gap-1.5 my-auto">
        <span className="text-xs font-mono px-2 py-1 rounded-lg bg-slate-800/90 border border-blue-400/40 text-blue-300">
          ⚡ Next.js App Router
        </span>
        <span className="text-xs font-mono px-2 py-1 rounded-lg bg-slate-800/90 border border-indigo-400/40 text-indigo-300">
          🎨 Tailwind CSS
        </span>
        <span className="text-xs font-mono px-2 py-1 rounded-lg bg-slate-800/90 border border-emerald-400/40 text-emerald-300">
          🍃 MongoDB MERN
        </span>
        <span className="text-xs font-mono px-2 py-1 rounded-lg bg-slate-800/90 border border-cyan-400/40 text-cyan-300">
          🚀 Vercel Edge
        </span>
      </div>

      {/* Mock Bottom */}
      <div className="relative z-10 flex items-center justify-between pt-1 border-t border-slate-800/80 text-[10px] text-slate-400">
        <div className="flex items-center gap-1 text-indigo-300">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          <span>Curated Ecosystem Stacks</span>
        </div>
        <span className="font-mono text-slate-500">React &middot; Dynamic Filters</span>
      </div>
    </div>
  );
}

