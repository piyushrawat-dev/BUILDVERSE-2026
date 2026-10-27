// ============================================================
// BUILD-VERSE 2026 — the ONE file to edit for event content
// ============================================================
// Everything the page and the registration API show or enforce lives here.
// Change a value, redeploy, done. Nothing else needs touching.
// Dates are written with the +05:30 (IST) offset on purpose.
// ============================================================

export interface BuildVerseConfig {
  name: string;
  tagline: string;
  organiser: string;
  /** Registration closes at this moment (server enforces it, not just the page). */
  registrationDeadline: string;
  teamSize: { min: number; max: number };
  feeInr: number;
  /** Who may register. Shown on the page and in the FAQ. */
  eligibility: string;
  /** `art: true` shows the supplied ₹1,50,000+ artwork. Set it to false if you change the amount. */
  prize: { headline: string; totalInr: number | null; art: boolean; details: string; items: string[] };
  /** Empty array => "To be revealed soon" is shown instead. */
  judges: { name: string; title: string }[];
  /** Day-by-day schedule. Times are shown as written; `start`/`end` (ISO, IST) only drive the "Live now / Next up" badges. */
  days: {
    date: string; // ISO date, IST
    day: string; // "29"
    month: string; // "OCT"
    label: string; // "Day 01"
    title: string;
    subtitle: string;
    steps: {
      icon: "workshop" | "idea" | "progress" | "pitch";
      time?: string; // as displayed, e.g. "2:00 PM – 10:00 PM"; leave out until announced
      timeNote?: string;
      title: string;
      description: string;
      badge: { text: string; tone: "neutral" | "info" | "warn" };
      start?: string;
      end?: string;
    }[];
  }[];
  utkrisht: { show: boolean; text: string };
  /** Overarching theme shown above the innovation tracks. */
  trackTheme: { title: string; statement: string };
  /** 5 categories, 18 tracks. `icon` is a key into the icon map in components/Tracks.tsx. */
  trackCategories: { id: string; icon: string; name: string; hint: string; tracks: { title: string; description: string; icon: string }[] }[];
  rules: string[];
  faqs: { q: string; a: string }[];
  /** Leave phone/whatsapp empty to hide them. */
  contacts: { name: string; phone: string }[];
  whatsappUrl: string;
  siteUrl: string;
  registrationFormUrl: string;
}

export const BUILDVERSE: BuildVerseConfig = {
  name: "BUILD-VERSE 2026",
  tagline: "Learn. Innovate. Pitch.",
  organiser: "AWS Student Builders Group, Tula's University",
  registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfvXQBNtTPuO_nf2rJ2lQ3YXtIHAKX1KfoFGr9vQtW7z5-KXQ/viewform",
  // 28 Oct 2026, 12:59 PM IST. Must be BEFORE the Day 1 workshop starts.
  registrationDeadline: "2026-10-28T23:59:00+05:30",
  teamSize: { min: 1, max: 4 },
  feeInr: 100,
  eligibility: "Open to all students of Tula's University.",
  prize: {
    headline: "₹1,50,000+",
    totalInr: 150000,
    art: true,
    // TODO(organisers): replace with the confirmed breakdown before launch.
    details: "Cash rewards and other prizes. The final allocation and eligibility conditions will be confirmed by the organising team.",
    items: [],
  },
  judges: [],
  days: [
    {
      date: "2026-10-29",
      day: "29",
      month: "OCT",
      label: "Day 01",
      title: "Learn, Ideate & Build",
      subtitle: "Industry workshops · Idea submission · Prototype development",
      steps: [
        {
          icon: "workshop",
          time: "2:00 PM – 10:00 PM",
          title: "Industry Workshops",
          description: "Learn from industry experts through practical workshops. More workshop sessions and schedules will be announced soon.",
          badge: { text: "Learning phase", tone: "neutral" },
          start: "2026-10-29T14:00:00+05:30",
          end: "2026-10-29T22:00:00+05:30",
        },
        {
          icon: "idea",
          time: "6:00 PM",
          title: "Round 1: Idea Submission",
          description: "The first submission form will be shared with participants. Submit your project idea, the problem you're solving, and your proposed solution.",
          badge: { text: "Form 01 opens", tone: "info" },
          start: "2026-10-29T18:00:00+05:30",
        },
        {
          icon: "progress",
          time: "12:00 AM",
          timeNote: "Midnight, night of 29–30 Oct",
          title: "Round 2: Progress Report",
          description: "The second form will be shared at midnight. Report your progress, explain your prototype, and document the work completed so far.",
          badge: { text: "Form 02 opens", tone: "info" },
          start: "2026-10-30T00:00:00+05:30",
        },
      ],
    },
    {
      date: "2026-10-30",
      day: "30",
      month: "OCT",
      label: "Day 02",
      title: "Present, Pitch & Compete",
      subtitle: "Final presentation · Project evaluation",
      steps: [
        {
          icon: "pitch",
          title: "Round 3: Final Presentation & Pitch",
          description: "Present your solution, demonstrate your prototype, and explain the problem, your approach, and the impact of your idea to the evaluation panel.",
          badge: { text: "Exact timing to be announced", tone: "warn" },
        },
      ],
    },
  ],
  utkrisht: { show: true, text: "Part of Utkrisht 2026 (30–31 October)" },
  trackTheme: { title: "BUILD THE FUTURE", statement: "From Intelligent Systems to Quantum Possibilities." },
  trackCategories: [
    {
      id: "ai", icon: "brain", name: "AI & Intelligent Systems", hint: "Your idea learns, predicts, sees or acts on its own.",
      tracks: [
        { icon: "bot", title: "Agentic AI & Autonomous Systems", description: "AI agents, multi-agent collaboration, autonomous workflows, and intelligent task automation." },
        { icon: "sparkles", title: "Generative AI & Foundation Models", description: "AI-powered content generation, RAG applications, document intelligence, and domain-specific AI tools." },
        { icon: "eye", title: "Computer Vision & Spatial Computing", description: "Image recognition, video analysis, visual accessibility, augmented reality, and interactive 3D experiences." },
        { icon: "chart", title: "Data Intelligence & Predictive Analytics", description: "Forecasting, recommendation systems, decision-support tools, and data-driven applications." },
      ],
    },
    {
      id: "future", icon: "rocket", name: "Emerging & Future Technologies", hint: "Your idea explores what comes next: quantum, trust, simulation, decentralisation.",
      tracks: [
        { icon: "atom", title: "Quantum Computing & Algorithms", description: "Quantum circuit simulators, quantum algorithms, optimisation experiments, and quantum computing education tools." },
        { icon: "shield", title: "Cybersecurity & Digital Trust", description: "Privacy tools, digital identity, threat detection, security awareness, and post-quantum cryptography demonstrations." },
        { icon: "boxes", title: "Digital Twins & Simulation", description: "Virtual models, interactive simulations, scenario testing, and digital representations of real-world systems." },
        { icon: "blocks", title: "Blockchain & Decentralised Applications", description: "Smart contracts, decentralised identity, verifiable records, and transparent digital services." },
      ],
    },
    {
      id: "software", icon: "layers", name: "Software Engineering & Infrastructure", hint: "Your idea is a platform, a tool, a pipeline or a product for businesses.",
      tracks: [
        { icon: "cloud", title: "Cloud-Native & Distributed Applications", description: "Cloud-based platforms, serverless applications, distributed systems, APIs, and scalable digital services." },
        { icon: "terminal", title: "Developer Tools & AI-Assisted Engineering", description: "Tools for coding, testing, debugging, documentation, deployment, and developer productivity." },
        { icon: "database", title: "Data Engineering & Knowledge Systems", description: "Data pipelines, knowledge graphs, intelligent search, information retrieval, and data management systems." },
        { icon: "wallet", title: "FinTech & Digital Commerce", description: "Personal finance tools, digital payment applications, fraud prevention, business automation, and e-commerce platforms." },
      ],
    },
    {
      id: "impact", icon: "heart", name: "Human Impact & Digital Experiences", hint: "Your idea helps people: health, planet, learning, access, movement.",
      tracks: [
        { icon: "heart", title: "HealthTech & Assistive Technology", description: "Healthcare information tools, accessible applications, assistive interfaces, and digital wellbeing platforms." },
        { icon: "leaf", title: "ClimateTech & Sustainability", description: "Waste management, energy efficiency, water conservation, environmental analytics, and sustainable agriculture applications." },
        { icon: "graduation", title: "EdTech & Future of Learning", description: "Adaptive learning platforms, educational simulations, skill assessment, and personalised learning applications." },
        { icon: "panels", title: "Future Interfaces & Digital Experiences", description: "Conversational interfaces, accessibility-first UX, immersive web experiences, and innovative software interactions." },
        { icon: "bus", title: "Smart Mobility & Urban Intelligence", description: "Route optimisation, transport planning, traffic analysis, logistics software, and urban service platforms." },
      ],
    },
    {
      id: "open", icon: "lightbulb", name: "Open Innovation", hint: "Your idea does not fit anywhere else. That is fine.",
      tracks: [
        { icon: "lightbulb", title: "Open Innovation", description: "An open category for any original software-based project that does not fit the other tracks. Examples include AgriTech, tourism, civic technology, productivity tools, social-impact applications, and other innovative digital solutions." },
      ],
    },
  ],
  rules: [
    "Eligibility: Open to all students of Tulas University.",
    "Team size: 1–4 participants per team. Solo participation is allowed.",
    "Registration fee: ₹100 per team.",
    "Build an original product or solution. Plagiarism is not allowed.",
    "You may use tools and technologies introduced in the workshop, including but not limited to AWS Kiro, Google Antigravity, Cursor and other relevant tools.",
    "Submit a working prototype and present it to the judging panel.",
    "Follow the event timeline, submission guidelines and judging criteria shared by the organising team.",
  ],
  faqs: [
    { q: "Who can participate?", a: "Any student of Tulas University. Register as a solo participant or a team of up to 4." },
    { q: "Do I need a team to participate?", a: "No. You can take part alone or with up to 3 teammates." },
    { q: "What is the registration fee?", a: "₹100 per team, not per person." },
    { q: "Are the tracks separate competitions?", a: "No. The tracks only help you choose a direction. All tracks follow the same competition rules and judging criteria." },
    { q: "What kind of projects can we build?", a: "Any original software project that fits one of the 18 innovation tracks. Open Innovation covers ideas that fit none of them. A working prototype is required for the pitch." },
    { q: "Which tools and technologies can we use?", a: "Anything introduced in the workshop, such as AWS Kiro, Google Antigravity and Cursor, plus other relevant tools. Your solution must be original." },
    { q: "How will the evaluation be done?", a: "Teams demo their prototype and pitch to a panel of judges on 30 October. Detailed judging criteria will be shared by the organising team." },
    { q: "Will accommodation be provided?", a: "No. The event is for Tulas University students." },
  ],
  // TODO(organisers): fill in the real numbers (kept empty so nothing wrong is shown).
  contacts: [
    { name: "Piyush Rawat", phone: "+91 9685221532" },
    { name: "Oskar Rana", phone: "+91 8630369690" },
  ],
  whatsappUrl: "https://chat.whatsapp.com/Dy6s9Lo9rFpLNbrMkgUgQ6",
  siteUrl: "/",
};
