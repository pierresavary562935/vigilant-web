import Image from "next/image";

const GITHUB = "https://github.com/pierresavary562935/vigilant";
const GUMROAD = "https://pierresavary.gumroad.com/l/vigilant"; // update with real link

const features = [
  {
    icon: "👁",
    title: "One-click arm",
    body: "Click the menu bar icon — a 5-second countdown begins. Click again to cancel.",
  },
  {
    icon: "🚨",
    title: "Instant jumpscare",
    body: "Any mouse movement or keypress while armed triggers a full-screen jumpscare.",
  },
  {
    icon: "📸",
    title: "Captures the intruder",
    body: "Front camera activates and fills the screen with the trespasser's live face.",
  },
  {
    icon: "🎨",
    title: "Fully customisable",
    body: "Tune the overlay, effects, and sound from the Settings panel.",
  },
];

const steps = [
  { n: "1", label: "Click 👁 in the menu bar — countdown begins." },
  { n: "2", label: "Armed 🔴 — any input triggers the scare." },
  { n: "3", label: "Intruder sees their own face. You get the shot." },
  { n: "4", label: "Press ⌘ ⌥ P to dismiss and disarm." },
];

export default function Home() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* NAV */}
      <nav
        style={{
          borderBottom: "1px solid var(--border)",
          background: "rgba(10,10,10,0.8)",
          backdropFilter: "blur(12px)",
        }}
        className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between"
      >
        <span className="text-white font-semibold tracking-wide flex items-center gap-2">
          <span
            className="pulse inline-block w-2.5 h-2.5 rounded-full"
            style={{ background: "var(--red)" }}
          />
          Vigilant
        </span>
        <div className="flex gap-4 text-sm" style={{ color: "var(--muted)" }}>
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#how" className="hover:text-white transition-colors">
            How it works
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center text-center px-6 pt-24 pb-16 gap-8">
        <div className="fade-up">
          <span
            className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border"
            style={{
              color: "var(--red)",
              borderColor: "var(--red)",
              background: "rgba(255,45,45,0.08)",
            }}
          >
            macOS · $4.99 · One-time
          </span>
        </div>

        <h1
          className="fade-up delay-1 text-5xl sm:text-7xl font-bold tracking-tight leading-none"
          style={{ color: "var(--text)" }}
        >
          Your Mac{" "}
          <span style={{ color: "var(--red)" }}>bites back.</span>
        </h1>

        <p
          className="fade-up delay-2 max-w-xl text-lg leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Vigilant arms your Mac with a single click. The moment someone
          touches your keyboard or mouse, a{" "}
          <span style={{ color: "var(--text)" }}>
            full-screen jumpscare
          </span>{" "}
          fires — capturing the intruder&apos;s face via the front camera.
        </p>

        <div className="fade-up delay-3 flex flex-col sm:flex-row gap-3">
          <a
            href={GUMROAD}
            target="_blank"
            rel="noopener noreferrer"
            className="pulse px-8 py-4 rounded-full font-semibold text-white transition-opacity hover:opacity-80"
            style={{ background: "var(--red)" }}
          >
            Buy — $4.99
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-semibold transition-colors hover:text-white"
            style={{
              border: "1px solid var(--border)",
              color: "var(--muted)",
            }}
          >
            View source
          </a>
        </div>

        {/* DEMO GIF */}
        <div
          className="fade-up delay-4 mt-6 rounded-2xl overflow-hidden shadow-2xl w-full max-w-2xl"
          style={{ border: "1px solid var(--border)" }}
        >
          <Image
            src="/demo.gif"
            alt="Vigilant demo"
            width={800}
            height={500}
            className="w-full h-auto"
            unoptimized
            priority
          />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "var(--text)" }}
          >
            Everything you need to protect your Mac
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6 flex gap-4"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "var(--text)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "var(--text)" }}
          >
            How it works
          </h2>
          <ol className="flex flex-col gap-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className="flex items-start gap-4 rounded-2xl p-5"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ background: "var(--red)", color: "#fff" }}
                >
                  {s.n}
                </span>
                <span style={{ color: "var(--text)" }}>{s.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="px-6 py-12">
        <div
          className="max-w-2xl mx-auto rounded-2xl p-6 text-sm flex flex-col sm:flex-row gap-6 items-start"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            color: "var(--muted)",
          }}
        >
          <div>
            <p className="font-semibold mb-2" style={{ color: "var(--text)" }}>
              Requirements
            </p>
            <ul className="space-y-1">
              <li>macOS 13.0+ (Apple Silicon)</li>
              <li>Camera permission on first launch</li>
              <li>Xcode Command Line Tools (to build from source)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2" style={{ color: "var(--text)" }}>
              Privacy
            </p>
            <p>No data is stored or transmitted. Camera is used locally only.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
          <h2
            className="text-4xl font-bold leading-tight"
            style={{ color: "var(--text)" }}
          >
            Ready to arm your Mac?
          </h2>
          <p style={{ color: "var(--muted)" }}>
            One-time purchase. No subscription. No cloud. Just a Mac that
            bites back.
          </p>
          <a
            href={GUMROAD}
            target="_blank"
            rel="noopener noreferrer"
            className="pulse px-10 py-4 rounded-full font-semibold text-white text-lg transition-opacity hover:opacity-80"
            style={{ background: "var(--red)" }}
          >
            Buy Vigilant — $4.99
          </a>
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            macOS 13+ · Apple Silicon · MIT open source
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-6 py-8 text-center text-xs"
        style={{
          color: "var(--muted)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <p>
          Built by{" "}
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Pierre S.
          </a>{" "}
          · MIT License · Use responsibly and in accordance with local laws.
        </p>
      </footer>
    </main>
  );
}
