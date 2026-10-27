"use client";

import { useSyncExternalStore, type ComponentType } from "react";
import { ClipboardCheck, GraduationCap, Lightbulb, Presentation } from "lucide-react";
import { BUILDVERSE as C } from "@/config/buildverse";
import { UtkrishtLogo } from "./Logos";

type Day = (typeof C.days)[number];
type Step = Day["steps"][number];

const ICONS: Record<Step["icon"], ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
  workshop: GraduationCap, idea: Lightbulb, progress: ClipboardCheck, pitch: Presentation,
};
const TONES: Record<Step["badge"]["tone"], string> = {
  neutral: "bg-slate-100 text-slate-800",
  info: "bg-sky-100 text-sky-900",
  warn: "bg-amber-100 text-amber-900",
};

const eyebrow = "font-tech text-xs font-medium uppercase tracking-[0.18em] text-violet-600 before:mr-2 before:text-violet-400 before:content-['//'] sm:text-sm";
const h2 = "mt-2 font-serif italic text-4xl font-normal tracking-tight text-violet-950 sm:text-5xl lg:text-6xl";

// "Now" in the visitor's browser (page is static). 0 on the server / first render = unknown, so no badge is drawn.
function subscribe(cb: () => void) { const id = setInterval(cb, 30_000); return () => clearInterval(id); }
const useNow = () => useSyncExternalStore(subscribe, () => Math.floor(Date.now() / 30_000) * 30_000, () => 0);

export function Schedule() {
  const now = useNow();
  const all = C.days.flatMap((d) => d.steps);
  const nextStart = now ? all.map((s) => (s.start ? Date.parse(s.start) : NaN)).filter((t) => t > now).sort((a, b) => a - b)[0] : undefined;

  const stateOf = (s: Step): "live" | "next" | "done" | "started" | null => {
    if (!now || !s.start) return null;
    const st = Date.parse(s.start);
    const en = s.end ? Date.parse(s.end) : NaN;
    if (!Number.isNaN(en)) {
      if (now >= st && now < en) return "live";
      if (now >= en) return "done";
    }
    if (Number.isNaN(en) && now >= st) return "started"; // no end time announced
    return st === nextStart ? "next" : null;
  };

  return (
    <section id="timeline" className="scroll-mt-20 py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className={eyebrow}>Event timeline</p>
        <h2 className={h2}>Two days. From learning to pitching.</h2>
        <p className="mt-3 max-w-2xl text-violet-950/75">The complete flow of BUILD-VERSE 2026: three rounds across two days. Forms are shared with registered participants at the times below.</p>

        <ol className="mt-10 grid items-start gap-6 lg:grid-cols-[1.35fr_1fr]">
          {C.days.map((d) => (
            <li key={d.date} className="timeline-card overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-[0_4px_24px_-6px_rgba(46,16,101,0.08)]">
              <div className="flex items-start gap-4 border-b border-violet-100 bg-gradient-to-br from-violet-50/70 to-white p-5 sm:gap-5 sm:p-6">
                <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-500 text-white shadow-lg shadow-violet-500/25 sm:h-24 sm:w-24" aria-hidden>
                  <span className="font-poppins text-3xl font-semibold leading-none sm:text-4xl">{d.day}</span>
                  <span className="mt-1.5 font-tech text-xs font-bold tracking-[0.2em]">{d.month}</span>
                </div>
                <div className="min-w-0">
                  <p className="inline-block rounded-full bg-violet-100 px-2.5 py-1 font-tech text-xs font-bold uppercase tracking-wider text-violet-800">{d.label}</p>
                  <h3 className="mt-2 font-poppins text-xl font-bold leading-snug text-violet-950 sm:text-2xl">{d.title}</h3>
                  <p className="mt-1 text-sm text-violet-950/70">{d.subtitle}</p>
                  <p className="sr-only">{`${d.day} ${d.month} 2026`}</p>
                </div>
              </div>

              <ol className="relative p-5 sm:p-6">
                {d.steps.map((s, i) => {
                  const Icon = ICONS[s.icon];
                  const st = stateOf(s);
                  const last = i === d.steps.length - 1;
                  return (
                    <li key={s.title} className={`relative flex gap-4 ${last ? "" : "pb-8"} ${st === "done" ? "opacity-60" : ""}`}>
                      {!last && <span aria-hidden className="absolute left-5 top-11 h-[calc(100%-2.75rem)] w-px -translate-x-1/2 bg-gradient-to-b from-violet-300 to-violet-100" />}
                      <span className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${st === "live" ? "border-violet-600 bg-violet-600 text-white ring-4 ring-violet-200" : "border-violet-200 bg-violet-50 text-violet-700"}`}>
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          {s.time && <p className="font-tech text-sm font-bold text-violet-700">{s.time}</p>}
                          {st === "live" && <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-900"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-600" aria-hidden />Live now</span>}
                          {st === "next" && <span className="rounded-full bg-violet-100 px-2 py-0.5 text-xs font-semibold text-violet-900">Up next</span>}
                          {st === "started" && <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-900">Started</span>}
                          {st === "done" && <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">Done</span>}
                        </div>
                        {s.timeNote && <p className="text-xs text-violet-950/70">{s.timeNote}</p>}
                        <h4 className="mt-1 font-poppins text-lg font-semibold leading-snug text-violet-950">{s.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-violet-950/75">{s.description}</p>
                        <span className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${TONES[s.badge.tone]}`}>{s.badge.text}</span>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </li>
          ))}
        </ol>

        {C.utkrisht.show && (
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <UtkrishtLogo className="h-16 w-auto" />
            <p className="text-sm text-violet-950/70">{C.utkrisht.text}.</p>
          </div>
        )}
      </div>
    </section>
  );
}
