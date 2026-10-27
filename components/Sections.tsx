import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Code2, Presentation, Leaf, HeartPulse, Cpu, Mail, Phone, MessageCircle, Banknote, Gift, Award, Cloud } from "lucide-react";
import { BUILDVERSE as C } from "@/config/buildverse";
import { RegisterButton } from "./RegisterButton";
import { Mascot } from "./Mascot";
import { Countdown } from "./Countdown";
import { SparkleCluster } from "./Decor";
import { SbgLogo, BuildVerseLogo, UtkrishtLogo, UtkrishtLogoWhite } from "./Logos";

const eyebrow = "font-tech text-xs font-medium uppercase tracking-[0.18em] text-violet-600 before:mr-2 before:text-violet-400 before:content-['//'] sm:text-sm";
const h2 = "mt-2 font-serif italic text-4xl font-normal tracking-tight text-violet-950 sm:text-5xl lg:text-6xl";
const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6";
const card = "rounded-2xl border border-violet-100 bg-white shadow-sm";

export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`section-divider relative w-full py-1 ${className}`} aria-hidden="true">
      {/* Full-width subtle boundary line */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-violet-200/60" />
      </div>
      {/* Central stylized accent */}
      <div className="relative mx-auto flex max-w-6xl items-center px-4 sm:px-6">
        <div className="section-divider-line h-0.5 flex-1 origin-right bg-gradient-to-r from-transparent via-violet-300 to-violet-500" />
        <div className="mx-4 flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-violet-400" />
          <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-violet-600 shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
          <span className="h-1 w-1 rounded-full bg-violet-400" />
        </div>
        <div className="section-divider-line h-0.5 flex-1 origin-left bg-gradient-to-r from-violet-500 via-violet-300 to-transparent" />
      </div>
    </div>
  );
}

export { Header } from "./Header";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-violet-50 via-white to-[#FAF8FF]">
      <div className={`${wrap} grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2`}>
        <div id="hero-content">
          {C.utkrisht.show && (
            <div className="flex items-center gap-3">
              <UtkrishtLogo className="h-20 w-auto" />
            </div>
          )}
          <div className="-ml-2 max-w-[560px]">
            <h1 className="mt-3"><BuildVerseLogo className="h-auto w-full" /></h1>
            <p className="mt-3 text-center font-tech text-base font-bold uppercase tracking-[0.14em] text-violet-700 sm:text-xl">{C.tagline}</p>
          </div>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-violet-950/80">
            A hands-on innovation event by the {C.organiser}. Learn modern development workflows, build a real product, and pitch your idea to a panel of judges.
          </p>
          <div className="mt-6"><Countdown deadline={C.registrationDeadline} /></div>
          <div className="mt-6 flex flex-wrap gap-3">
            <RegisterButton />
            <a href="#about" className="hidden items-center rounded-xl border border-violet-300 bg-white px-6 py-3 font-semibold text-violet-800 hover:bg-violet-50 sm:inline-flex">Explore the Event</a>
          </div>
        </div>
        <div id="hero-mascot-wrap" className="relative mx-auto w-full max-w-xl">
          <div id="hero-mascot" className="relative z-10 w-full">
            <Mascot
              name="hero"
              priority
              sizes="(min-width: 1024px) 560px, 90vw"
              className="h-auto w-full [filter:drop-shadow(0_18px_24px_rgba(46,16,101,0.18))]"
            />
          </div>
          {/* Ground contact shadow beneath desk */}
          <div
            id="hero-shadow"
            aria-hidden="true"
            className="pointer-events-none mx-auto -mt-6 h-5 w-4/5 rounded-[100%] bg-violet-950/20 blur-xl sm:-mt-8 sm:h-7 sm:w-3/4"
          />
          {/* The idea bulb with subtle golden ambient glow behind it */}
          <div id="hero-bulb" className="pointer-events-none absolute left-[18%] top-[6%] z-20 w-[15%] h-auto">
            {/* Soft, subtle golden ambient glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-amber-400/20 via-yellow-300/15 to-transparent blur-lg sm:h-18 sm:w-18 sm:blur-xl"
            />
            <Mascot
              name="bulb"
              sizes="120px"
              className="relative z-10 h-auto w-full [filter:drop-shadow(0_0_6px_rgba(251,191,36,0.25))]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const points = [[BookOpen, "Learn modern tools"], [Code2, "Build a real product"], [Presentation, "Pitch to experienced judges"]] as const;
  return (
    <section id="about" className="scroll-mt-20 py-16">
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]`}>
        <div>
          <p className={eyebrow}>About the event</p>
          <h2 className={h2}>What is <span className="text-violet-600">BUILD-VERSE</span>?</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-violet-950/80">
            BUILD-VERSE is a hands-on innovation event organised by the {C.organiser}. It introduces students to modern development workflows, helps them turn ideas into product prototypes, and gives them a platform to pitch their solutions to a panel of judges.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {points.map(([Icon, text]) => (
              <li key={text} className={`${card} about-pill flex items-center gap-3 px-4 py-3 text-sm font-medium text-violet-950 transition-all duration-300 hover:border-violet-300 hover:shadow-md hover:-translate-y-0.5`}><Icon className="h-5 w-5 shrink-0 text-violet-600" aria-hidden />{text}</li>
            ))}
          </ul>
        </div>
        <div id="about-mascot-wrap" className="relative mx-auto w-full max-w-sm">
          <Mascot
            name="about"
            sizes="(min-width: 1024px) 400px, 70vw"
            className="relative z-10 h-auto w-full [filter:drop-shadow(0_16px_22px_rgba(46,16,101,0.16))]"
          />
          {/* Ground contact shadow beneath feet */}
          <div
            aria-hidden="true"
            className="pointer-events-none mx-auto -mt-4 h-4 w-3/5 rounded-[100%] bg-violet-950/20 blur-lg"
          />
        </div>
      </div>
    </section>
  );
}

export function Flow() {
  const steps = [
    ["01", "Learn", "Expert-led workshop on AI-assisted development workflows and modern tools.", "learn"],
    ["02", "Innovate", "Turn your ideas into working products using modern technologies.", "innovate"],
    ["03", "Pitch", "Demonstrate your product and present it to a panel of judges.", "pitch"],
  ] as const;
  return (
    <section id="flow" className="scroll-mt-20 py-16">
      <div className={wrap}>
        <p className={eyebrow}>Event flow</p>
        <h2 className={h2}>Learn. Innovate. Pitch.</h2>
        <p className="mt-3 text-violet-950/70">A complete journey from learning to building and finally showcasing your ideas.</p>
        <div className="mt-8 grid items-center gap-3 sm:gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {steps.map(([n, t, d, art], i) => (
            <Fragment key={n}>
              <div className={`${card} flow-card group relative flex h-full flex-col overflow-hidden p-6 transition-all duration-300 hover:border-violet-200 hover:shadow-md`}>
                {/* Large outlined step number in top-right background */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-1 right-3 select-none text-7xl font-black tracking-tighter text-transparent leading-none transition-all duration-300 group-hover:scale-105 group-hover:[-webkit-text-stroke:1.5px_rgba(124,58,237,0.6)] sm:text-8xl [-webkit-text-stroke:1.5px_rgba(124,58,237,0.32)]"
                >
                  {n}
                </span>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="relative mx-auto -mt-2 flex w-full flex-col items-center">
                    <Mascot
                      name={art}
                      sizes="(min-width: 768px) 300px, 70vw"
                      className="relative z-10 h-44 w-auto object-contain [filter:drop-shadow(0_12px_16px_rgba(46,16,101,0.15))]"
                    />
                    {/* Ground shadow beneath mascot inside card */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none -mt-3.5 h-3 w-36 rounded-[100%] bg-violet-950/20 blur-md"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-violet-950">{t}</h3>
                  <p className="mt-2 text-violet-950/75">{d}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flow-arrow flex items-center justify-center py-2 md:py-0" aria-hidden="true">
                  <Mascot
                    name="arrows"
                    sizes="96px"
                    className="h-auto w-12 rotate-90 transition-transform duration-300 hover:scale-110 md:w-16 md:rotate-0 lg:w-20"
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Rules() {
  return (
    <section id="rules" className="scroll-mt-20 py-16">
      <div className={wrap}>
        <div>
          <p className={eyebrow}>Guidelines &amp; Eligibility</p>
          <h2 className={h2}>Rules &amp; Participation</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-violet-950/75">
            Clear eligibility, transparent evaluation, and zero guesswork so you can focus entirely on shipping your best work.
          </p>
        </div>

        {/* Detailed guidelines list with mascot */}
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl border border-violet-100/90 bg-white/90 p-6 shadow-[0_4px_24px_-6px_rgba(46,16,101,0.06)] sm:p-8">
            <div className="mb-5 flex items-center justify-between border-b border-violet-100/80 pb-4">
              <div>
                <h3 className="font-poppins text-xl font-bold text-violet-950">Event Guidelines</h3>
                <p className="text-xs font-medium text-violet-950/60">Official competition code &amp; submission standards</p>
              </div>
              <span className="rounded-md border border-violet-200 bg-violet-100/80 px-2.5 py-1 font-tech text-xs font-semibold text-violet-700">
                {C.rules.length} Rules
              </span>
            </div>
            <ol className="divide-y divide-violet-100/70">
              {C.rules.map((r, i) => (
                <li key={r} className="rule-item flex items-start gap-3.5 py-3.5 first:pt-0 last:pb-0">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-violet-200/70 bg-violet-100 font-tech text-xs font-bold text-violet-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed text-sm text-violet-950/85 sm:text-base">{r}</span>
                </li>
              ))}
            </ol>
          </div>
          <div id="rules-mascot-wrap" className="mx-auto mt-4 flex flex-col items-center lg:mt-0">
            <div className="relative flex flex-col items-center">
              <Mascot
                name="rules"
                sizes="(min-width: 1024px) 340px, 240px"
                className="relative z-10 h-auto w-full max-w-[240px] object-contain lg:max-w-xs [filter:drop-shadow(0_16px_22px_rgba(46,16,101,0.16))]"
              />
              {/* Ground shadow beneath desk */}
              <div
                aria-hidden="true"
                className="pointer-events-none -mt-4 h-4 w-44 rounded-[100%] bg-violet-950/20 blur-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PRIZE_CARDS = [
  {
    title: "Guaranteed Cash Prizes",
    badge: "Direct Cash",
    perk: "Exciting cash prizes awarded directly to top winning teams and track champions.",
    highlight: "Winners & Runners-up",
    icon: Banknote,
    color: "from-amber-500/10 via-amber-50/50 to-transparent",
    iconBg: "bg-amber-100 text-amber-700 border-amber-200",
    badgeStyle: "bg-amber-50 text-amber-700 border-amber-200",
    glow: "hover:border-amber-300",
    accentDot: "bg-amber-500",
  },
  {
    title: "AWS Swags",
    badge: "Official Gear",
    perk: "Official AWS branded swags from Amazon.",
    highlight: "Participants & Finalists",
    icon: Gift,
    color: "from-violet-500/10 via-violet-50/50 to-transparent",
    iconBg: "bg-violet-100 text-violet-700 border-violet-200",
    badgeStyle: "bg-violet-50 text-violet-700 border-violet-200",
    glow: "hover:border-violet-300",
    accentDot: "bg-violet-500",
  },
  {
    title: "AWS Certification Vouchers",
    badge: "Global Certs",
    perk: "Sponsored exam vouchers to earn globally recognized industry AWS Cloud Certifications.",
    highlight: "Skill Validation",
    icon: Award,
    color: "from-blue-500/10 via-blue-50/50 to-transparent",
    iconBg: "bg-blue-100 text-blue-700 border-blue-200",
    badgeStyle: "bg-blue-50 text-blue-700 border-blue-200",
    glow: "hover:border-blue-300",
    accentDot: "bg-blue-500",
  },
  {
    title: "AWS Cloud Credits",
    badge: "Cloud Infra",
    perk: "Free AWS credits to build, deploy, test, and scale cloud architectures and AI agents.",
    highlight: "Build on AWS",
    icon: Cloud,
    color: "from-orange-500/10 via-orange-50/50 to-transparent",
    iconBg: "bg-orange-100 text-orange-700 border-orange-200",
    badgeStyle: "bg-orange-50 text-orange-700 border-orange-200",
    glow: "hover:border-orange-300",
    accentDot: "bg-orange-500",
  },
];

export function Prizes() {
  return (
    <section id="prizes" className="scroll-mt-20 py-16">
      <div id="prizes-grid" className={`${wrap} grid items-center gap-8 lg:grid-cols-2`}>
        <div id="prizes-info">
          <p className={eyebrow}>Compete &amp; Win</p>
          <h2 className={h2}>Prizes &amp; Rewards</h2>
          <div className="mt-4">
            {C.prize.art ? (
              <Mascot name="prizeAmount" sizes="(min-width: 1024px) 520px, 90vw" className="-ml-3 mt-1 h-auto w-full max-w-[460px]" />
            ) : (
              <p className="mt-2 text-5xl font-extrabold text-violet-700 sm:text-6xl">{C.prize.headline}</p>
            )}
            <p className="font-tech text-xs font-bold uppercase tracking-[0.18em] text-violet-950 sm:text-sm">Total prize pool</p>
          </div>
          <p className="mt-4 max-w-md text-violet-950/80">{C.prize.details}</p>
          {C.prize.items.length > 0 && <ul className="mt-4 list-disc pl-5 text-violet-950/85">{C.prize.items.map((i) => <li key={i}>{i}</li>)}</ul>}
        </div>
        <div id="prizes-trophy-column" className="relative mx-auto flex w-full max-w-md items-center justify-center">
          {/* Subtle soft warm glow behind trophy */}
          <div
            id="trophy-shadow"
            aria-hidden="true"
            className="pointer-events-none absolute h-48 w-48 rounded-full bg-gradient-to-tr from-amber-300/15 via-amber-200/15 to-transparent blur-2xl sm:h-60 sm:w-60"
          />
          <div id="trophy-img" className="relative z-10 mx-auto w-full max-w-[300px] sm:max-w-[340px]">
            <Mascot
              name="trophy"
              sizes="(min-width: 640px) 340px, 300px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>

      {/* Prize Breakdown Cards */}
      <div className={`${wrap} mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
        {PRIZE_CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-violet-100 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${card.glow}`}
            >
              {/* Subtle top background tint */}
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${card.color} opacity-60 transition-opacity group-hover:opacity-100`}
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${card.iconBg} shadow-xs transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className={`rounded-full border px-2.5 py-0.5 font-tech text-[10px] font-bold uppercase tracking-wider ${card.badgeStyle}`}>
                    {card.badge}
                  </span>
                </div>

                <h3 className="mt-4 font-poppins text-base font-bold text-violet-950 sm:text-lg">
                  {card.title}
                </h3>
                <p className="mt-2 font-poppins text-xs font-normal leading-relaxed text-violet-950/75">
                  {card.perk}
                </p>
              </div>

              <div className="relative mt-4 border-t border-violet-100/70 pt-3">
                <div className="flex items-center gap-1.5 text-xs font-medium text-violet-900">
                  <span className={`h-1.5 w-1.5 rounded-full ${card.accentDot}`} />
                  <span className="font-poppins">{card.highlight}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={`${wrap} mt-10`}>
        <div id="judges-card" className="grid items-center gap-6 overflow-hidden rounded-3xl bg-gradient-to-br from-violet-950 via-indigo-950 to-violet-900 p-6 sm:p-8 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="font-tech text-xs font-bold uppercase tracking-[0.18em] text-violet-300 sm:text-sm">Judges</p>
            {C.judges.length === 0 ? (
              <>
                <h3 className="mt-2 text-2xl font-medium text-white sm:text-3xl">To be revealed soon</h3>
                <p className="mt-2 max-w-md text-violet-100/85">An experienced panel of industry experts and professionals will evaluate the projects.</p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">Stay tuned</p>
              </>
            ) : (
              <ul className="mt-3 space-y-3">{C.judges.map((j) => <li key={j.name}><b className="text-white">{j.name}</b><br /><span className="text-sm text-violet-200">{j.title}</span></li>)}</ul>
            )}
          </div>
          {C.judges.length === 0 && <Mascot name="judges" sizes="(min-width: 768px) 520px, 90vw" className="mx-auto h-auto w-full max-w-md" />}
        </div>
      </div>
    </section>
  );
}

export { Schedule as Timeline } from "./Schedule";

export const Participation = Rules;

export function Faqs() {
  const contacts = C.contacts.filter((c) => c.phone.trim() !== "");

  return (
    <section id="faqs" className="scroll-mt-20 py-16">
      <div className={wrap}>
        <p className={eyebrow}>Frequently asked questions</p>
        <h2 className={h2}>FAQs</h2>
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="grid gap-3">
            {C.faqs.map((f, i) => (
              <details key={f.q} className={`${card} faq-card group px-5 py-4 transition-all duration-300 hover:border-violet-200`}>
                <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 font-semibold text-violet-950">
                  <span className="text-violet-600">{String(i + 1).padStart(2, "0")}</span>{f.q}
                </summary>
                <p className="mt-3 pl-8 text-violet-950/80">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="relative mx-auto flex w-full max-w-[340px] flex-col items-center lg:mt-0 lg:max-w-[420px]">
            {/* FAQ Mascot (only the mascot floats) */}
            <div id="faq-mascot-wrap" className="relative flex flex-col items-center">
              <Mascot
                name="faq"
                sizes="(min-width: 1024px) 380px, 280px"
                className="relative z-10 h-auto w-full max-w-[260px] object-contain sm:max-w-[300px] [filter:drop-shadow(0_20px_28px_rgba(46,16,101,0.18))]"
              />
              {/* Ground shadow beneath standing mascot feet */}
              <div
                aria-hidden="true"
                className="pointer-events-none -mt-6 h-5 w-52 rounded-[100%] bg-violet-950/25 blur-xl"
              />
            </div>

            {/* Contact Card placed directly below FAQ mascot */}
            <div className="mt-6 w-full rounded-3xl border border-violet-100 bg-white p-5 shadow-[0_4px_24px_-6px_rgba(46,16,101,0.08)] sm:p-6">
              <div className="flex items-center gap-3 border-b border-violet-100 pb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-poppins text-base font-bold text-violet-950">Contact Organisers</h3>
                  <p className="text-xs font-medium text-violet-950/65">Have queries? Reach out anytime</p>
                </div>
              </div>

              <div className="mt-3.5 space-y-2.5">
                {contacts.map((c) => (
                  <div key={c.name} className="flex items-center justify-between text-sm">
                    <span className="font-poppins font-medium text-violet-950">{c.name}:</span>
                    <a
                      href={`tel:${c.phone.replace(/\s/g, "")}`}
                      className="font-tech text-xs font-semibold text-violet-700 underline underline-offset-2 transition-colors hover:text-violet-900"
                    >
                      {c.phone}
                    </a>
                  </div>
                ))}
              </div>

              {C.whatsappUrl && (
                <a
                  href={C.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow-xs mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-4 py-2.5 font-poppins text-xs font-semibold text-violet-800 transition hover:border-violet-300 hover:bg-violet-100"
                >
                  <MessageCircle className="h-4 w-4 text-violet-600" aria-hidden />
                  Join WhatsApp Community
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="final-cta" className="relative isolate overflow-hidden bg-gradient-to-b from-[#FAF8FF] via-violet-100/50 to-violet-50/30 min-h-[520px] sm:min-h-[550px] md:min-h-[580px]">
      <SparkleCluster className="left-6 top-10 -scale-x-100 lg:left-20" />
      {/* Campus scene: full-width panorama with seamless gradient transition */}
      <div id="campus-scene" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%)]">
        {/* Desktop view (md: and up) - full edge-to-edge landscape */}
        <div className="relative hidden w-full md:block aspect-[1920/577] min-h-[380px]">
          <Image
            src="/buildverse/campus-scene.webp"
            alt="Campus panorama"
            fill
            sizes="100vw"
            quality={85}
            className="w-full h-full object-cover object-bottom scale-[1.01] origin-bottom"
          />
        </div>

        {/* Mobile view (< md) - focused right-side part of campus scene */}
        <div className="relative block h-72 sm:h-80 w-full md:hidden">
          <Image
            src="/buildverse/campus-scene.webp"
            alt="Campus panorama"
            fill
            sizes="860px"
            quality={85}
            className="w-full h-full object-cover object-[85%_bottom] scale-[1.01] origin-bottom"
          />
        </div>
      </div>

      {/* Centered CTA content */}
      <div className={`${wrap} relative z-10 flex flex-col items-center pt-16 pb-32 text-center sm:pt-20 sm:pb-36 md:pt-20 md:pb-36 lg:pt-24 lg:pb-40`}>
        <p className={eyebrow}>Be a part of BUILD-VERSE 2026</p>
        <h2 className={h2}>Your idea deserves a bigger stage.</h2>
        <p className="mx-auto mt-3 max-w-xl text-violet-950/80">Learn. Innovate. Pitch. Turn your ideas into real impact at BUILD-VERSE 2026.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <RegisterButton />
          <a href="#about" className="hidden items-center rounded-xl border border-violet-300 bg-white/90 px-6 py-3 font-semibold text-violet-800 backdrop-blur-sm transition hover:bg-white sm:inline-flex">Explore the Event</a>
        </div>
      </div>

      {/* Mascot: moved down & to the left (rocky cliff & mountain trees) */}
      <div
        id="final-cta-mascot"
        className="absolute bottom-2 left-3 z-10 sm:bottom-3 sm:left-6 md:bottom-4 md:left-8 lg:bottom-6 lg:left-14 xl:left-20"
      >
        <div className="relative flex flex-col items-center">
          <Mascot
            name="welcome"
            sizes="(min-width: 1024px) 240px, (min-width: 768px) 200px, 140px"
            className="relative z-10 h-auto w-32 xs:w-36 sm:w-44 md:w-52 lg:w-56 [filter:drop-shadow(0_16px_22px_rgba(46,16,101,0.22))]"
          />
          {/* Ground contact shadow on landscape terrain */}
          <div
            aria-hidden="true"
            className="pointer-events-none -mt-3 h-3 w-28 rounded-[100%] bg-violet-950/35 blur-md sm:-mt-4 sm:h-4 sm:w-36 lg:w-44"
          />
        </div>
      </div>

      {/* Utkrisht Logo: moved down & to the right (pine trees corner) */}
      {C.utkrisht.show && (
        <div className="absolute bottom-3 right-3 z-10 sm:bottom-4 sm:right-6 md:bottom-5 md:right-8 lg:bottom-6 lg:right-14 xl:right-20">
          <UtkrishtLogoWhite className="h-11 w-auto xs:h-13 sm:h-15 md:h-18 lg:h-20 drop-shadow-lg" />
        </div>
      )}
    </section>
  );
}

export function BvFooter() {
  return null;
}
