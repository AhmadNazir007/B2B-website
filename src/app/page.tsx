import ContactForm from "./components/ContactForm";

const stats = [
  { value: "4.8/5", label: "Average client satisfaction" },
  { value: "99.9%", label: "Platform uptime across deployments" },
  { value: "24/7", label: "AI operations support" },
];

const services = [
  {
    title: "AI Strategy & Roadmaps",
    description:
      "Align executive priorities with practical AI initiatives that scale securely across the enterprise.",
  },
  {
    title: "Custom Intelligence Platforms",
    description:
      "Launch copilots, knowledge copilots, and workflow automations tailored to your teams and data landscape.",
  },
  {
    title: "Governance & Adoption",
    description:
      "Operationalize responsible AI with governance, change management, and measurable adoption programs.",
  },
];

const processSteps = [
  "Assess your current workflows and data maturity",
  "Design secure AI experiences with measurable business outcomes",
  "Launch, monitor, and continuously improve across teams",
];

const caseStudies = [
  {
    title: "Global logistics platform",
    result: "Reduced manual document handling by 78% with an AI operations copilot.",
  },
  {
    title: "Financial services group",
    result: "Cut compliance review time by 60% through intelligent knowledge workflows.",
  },
  {
    title: "Healthcare enterprise",
    result: "Improved service response time by 43% using secure AI-assisted support flows.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.16),_transparent_35%),linear-gradient(135deg,_#050816_0%,_#0b1120_50%,_#020617_100%)] text-slate-100">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
          <div className="text-lg font-semibold tracking-[0.2em] text-cyan-300">VISIONERDS</div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#process" className="transition hover:text-white">Process</a>
            <a href="#insights" className="transition hover:text-white">Insights</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-cyan-400/40 bg-cyan-500/15 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/25"
          >
            Book a demo
          </a>
        </header>

        <div className="flex flex-1 flex-col justify-center py-16 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
                Enterprise AI for modern operations
              </div>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
                Transform bold ideas into scalable AI systems.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted/90 sm:text-xl">
                We help ambitious companies deploy practical AI that improves decision speed, automates workflows, and creates measurable value across every department.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Schedule a strategy call
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Explore services
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[linear-gradient(135deg,#050816_0%,#0b1120_50%,#020617_100%)] p-6 shadow-2xl shadow-[0_14px_40px_rgba(7,16,38,0.6)] backdrop-blur-xl">
              <div className="rounded-2xl border border-primary/20 bg-[linear-gradient(180deg,rgba(var(--color-surface),0.12),rgba(var(--color-surface),0.06))] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Live impact</p>
                <div className="mt-6 space-y-4">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-[rgba(7,16,38,0.6)] p-4">
                      <div className="text-2xl font-semibold text-white">{item.value}</div>
                      <div className="mt-1 text-sm text-muted/90">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10 lg:p-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Trusted by enterprise teams</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Built for speed, trust, and growth.</h2>
            </div>
            <p className="max-w-2xl text-slate-300">
              From AI copilots to enterprise knowledge systems, we bridge strategy and execution to help your team move faster with confidence.
            </p>
          </div>

          <div id="services" className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-white/10 bg-surface/70 p-6">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted/90">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-white/10 bg-surface/60 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Our process</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">A practical path from vision to delivery.</h2>
          </div>
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <div key={step} className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary/80">
                  0{index + 1}
                </div>
                <p className="text-base leading-7 text-muted/90">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="insights" className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-primary/10 to-accent/10 p-8 sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Case studies</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Outcomes that matter.</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.title} className="rounded-2xl border border-white/10 bg-surface/70 p-6">
                <h3 className="text-xl font-semibold text-white">{study.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted/90">{study.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-10">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-surface/80 p-8 shadow-2xl shadow-[0_10px_30px_rgba(var(--color-primary),0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Let’s build</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Ready to turn AI into a competitive advantage?</h2>
            <p className="mt-4 text-slate-400">
              Share a few details and we will follow up with a tailored plan for your team.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
