import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Phone,
  MapPin,
  Mail,
  MessageCircle,
  ShieldCheck,
  Clock,
  Users,
  Star,
  Sparkles,
  IndianRupee,
  CarFront,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { useReveal } from "@/hooks/use-reveal";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";
import fleetSuv from "@/assets/fleet-suv.jpg";
import fleetSedan from "@/assets/fleet-sedan.jpg";
import fleetTempo from "@/assets/fleet-tempo.jpg";

const PHONE = "+919316854017";
const PHONE_DISPLAY = "+91 93168 54017";
const WHATSAPP = "https://wa.me/919316854017?text=Hi%20Shree%20Shyam%20Tours%20%26%20Travels%2C%20I%27d%20like%20to%20book%20a%20cab.";
const EMAIL = "amishverma1995@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shree Shyam Tours & Travels — Vapi Taxi & Outstation Cabs" },
      { name: "description", content: "Book safe and comfortable cabs in Vapi for Mumbai, Surat, Ahmedabad, Nashik, Pune and all over India. Call 93168 54017." },
      { property: "og:title", content: "Shree Shyam Tours & Travels — Vapi" },
      { property: "og:description", content: "Your Journey, Our Priority. Outstation cabs from Vapi to anywhere in India." },
    ],
  }),
  component: Home,
});

function Home() {
  useReveal();
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Routes />
      <Fleet />
      <WhyUs />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt="Highway at golden hour"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.7_0.18_47/0.25),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 md:pb-32 md:pt-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:text-sm">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Trusted travel partner from Vapi, Gujarat
          </div>
          <h1
            className="animate-fade-up mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Shree Shyam <span className="text-gold">Tours</span> & Travels
          </h1>
          <p
            className="animate-fade-up mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            Safe, comfortable and reliable cab service from Vapi to Mumbai, Surat, Ahmedabad, Nashik, Pune — and across all of India. Your journey, our priority.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href={`tel:${PHONE}`}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent px-7 py-4 text-base font-semibold text-accent-foreground shadow-glow transition-all duration-300 hover:scale-[1.03]"
            >
              <Phone className="h-5 w-5" />
              Call Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>

          <div
            className="animate-fade-up mt-10 grid max-w-xl grid-cols-3 gap-3 sm:gap-6"
            style={{ animationDelay: "320ms" }}
          >
            {[
              { k: "10+", v: "Years driving" },
              { k: "5000+", v: "Happy trips" },
              { k: "24/7", v: "Support" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-white/15 bg-white/5 p-3 text-center backdrop-blur-md sm:p-4">
                <div className="text-xl font-bold text-gold sm:text-2xl">{s.k}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-white/75 sm:text-xs">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="reveal">
          <SectionLabel>About us</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
            A trusted name in travel from <span className="text-accent">Vapi</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Shree Shyam Tours & Travels has been moving families, professionals and pilgrims with care for years. From quick city drops to long outstation journeys, we deliver a comfortable, on-time experience with experienced drivers and well-maintained vehicles.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Local service across Vapi, Gunjan & nearby areas",
              "Outstation trips anywhere in India",
              "Transparent fares — no hidden charges",
              "Polite, verified and experienced drivers",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal relative">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2rem] bg-gradient-primary p-10 shadow-elegant">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.13_85/0.35),transparent_55%)]" />
            <div className="relative flex h-full flex-col items-center justify-center">
              <img src={logo} alt="Shree Shyam logo" className="animate-float h-48 w-48 object-contain drop-shadow-2xl sm:h-60 sm:w-60" />
              <p className="mt-6 text-center text-lg font-semibold italic text-gold">
                “Your Journey, Our Priority.”
              </p>
            </div>
          </div>
          <div className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-full bg-accent/20 blur-2xl md:block" />
          <div className="absolute -bottom-4 -left-4 hidden h-32 w-32 rounded-full bg-primary/20 blur-3xl md:block" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Routes ---------------- */
const ROUTES = [
  { from: "Vapi", to: "Mumbai", km: "~170 km", time: "~3h 30m" },
  { from: "Vapi", to: "Surat", km: "~95 km", time: "~2h" },
  { from: "Vapi", to: "Ahmedabad", km: "~360 km", time: "~6h" },
  { from: "Vapi", to: "Nashik", km: "~250 km", time: "~5h" },
  { from: "Vapi", to: "Pune", km: "~320 km", time: "~6h" },
  { from: "Vapi", to: "All Over India", km: "Anywhere", time: "On request" },
];

function Routes() {
  return (
    <section id="routes" className="relative bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <SectionLabel center>Our routes</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
            Popular outstation trips from Vapi
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Pick a route or tell us your destination — we’ll arrange a comfortable ride.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ROUTES.map((r, i) => (
            <a
              key={r.to}
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-gradient-accent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{r.km}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-primary">
                  {r.from} <span className="text-muted-foreground">→</span> {r.to}
                </h3>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" /> {r.time}
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Book this route
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Fleet ---------------- */
const FLEET = [
  { img: fleetSedan, title: "Premium Sedan", desc: "Comfortable 4-seater for couples & small families.", seats: "4 seats" },
  { img: fleetSuv, title: "Spacious SUV", desc: "Roomy 6–7 seater for families & long trips.", seats: "6-7 seats" },
  { img: fleetTempo, title: "Tempo Traveller", desc: "Group travel made easy with extra luggage space.", seats: "12+ seats" },
];

function Fleet() {
  return (
    <section id="fleet" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <SectionLabel center>Our fleet</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
            Clean, modern vehicles for every journey
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            From premium sedans to spacious tempo travellers — choose what fits your group.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {FLEET.map((f, i) => (
            <div
              key={f.title}
              className="reveal group overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-soft">
                <img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur">
                  <Users className="h-3.5 w-3.5" /> {f.seats}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  Enquire now <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Us ---------------- */
const FEATURES = [
  { icon: CarFront, title: "Comfortable rides", desc: "Well-maintained, AC vehicles cleaned before every trip." },
  { icon: ShieldCheck, title: "Safe travel", desc: "Verified, experienced drivers focused on your safety." },
  { icon: Clock, title: "On-time, always", desc: "Punctual pickups and reliable schedules you can trust." },
  { icon: Star, title: "Professional service", desc: "Courteous, helpful and well-trained driver partners." },
  { icon: MessageCircle, title: "Easy booking", desc: "Book in seconds — just call or WhatsApp us anytime." },
  { icon: IndianRupee, title: "Affordable pricing", desc: "Transparent fares with no hidden surprises." },
];

function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-gradient-primary py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,oklch(0.7_0.18_47/0.25),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,oklch(0.78_0.13_85/0.18),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <SectionLabel center light>Why choose us</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Built on trust, driven by service
          </h2>
          <p className="mt-4 text-base text-white/75 sm:text-lg">
            Six reasons travellers across Gujarat & beyond choose Shree Shyam.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="reveal group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/10"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="reveal lg:col-span-2">
          <SectionLabel>Get in touch</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
            Plan your next trip with us
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Reach out anytime — we’ll get back with the best fare and vehicle for your trip.
          </p>

          <div className="mt-8 space-y-4">
            <ContactRow icon={Phone} label="Call us" value={PHONE_DISPLAY} href={`tel:${PHONE}`} />
            <ContactRow icon={MessageCircle} label="WhatsApp" value="Chat instantly" href={WHATSAPP} external />
            <ContactRow icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
            <ContactRow icon={MapPin} label="Location" value="Gunjan, Vapi, Gujarat" href="https://maps.google.com/?q=Gunjan+Vapi+Gujarat" external />
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-secondary/60 p-5">
            <div className="text-sm font-semibold text-primary">Owner</div>
            <div className="mt-1 text-lg font-bold text-foreground">Amish Verma</div>
            <div className="mt-1 text-sm text-muted-foreground">Always available to assist you.</div>
          </div>
        </div>

        <form
          className="reveal rounded-3xl border border-border bg-card p-6 shadow-elegant sm:p-8 lg:col-span-3"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const msg = `Hi, I'd like to book a cab.%0A%0AName: ${fd.get("name")}%0APhone: ${fd.get("phone")}%0ARoute: ${fd.get("route")}%0ADate: ${fd.get("date")}%0AMessage: ${fd.get("message")}`;
            window.open(`https://wa.me/919316854017?text=${msg}`, "_blank");
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="name" placeholder="Your name" required />
            <Field label="Phone number" name="phone" placeholder="10-digit mobile" required type="tel" />
            <Field label="Travel route" name="route" placeholder="e.g. Vapi to Mumbai" required />
            <Field label="Travel date" name="date" type="date" required />
          </div>
          <div className="mt-5">
            <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about pickup time, passengers, luggage..."
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-accent px-7 py-4 text-base font-semibold text-accent-foreground shadow-soft transition-all duration-300 hover:scale-[1.01] hover:shadow-glow sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" /> Send inquiry on WhatsApp
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            By submitting, you’ll be redirected to WhatsApp with your details pre-filled.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label, name, placeholder, type = "text", required,
}: { label: string; name: string; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon, label, value, href, external,
}: { icon: typeof Phone; label: string; value: string; href: string; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-soft"
    >
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-base font-semibold text-foreground">{value}</div>
      </div>
    </a>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white p-2">
              <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
            </div>
            <div>
              <div className="text-lg font-bold">SHREE SHYAM</div>
              <div className="text-xs tracking-[0.18em] text-gold">TOURS & TRAVELS</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-primary-foreground/75">
            Safe, comfortable and reliable cab service from Vapi to anywhere in India. Your journey, our priority.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-gold">Quick links</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {[
              ["About", "#about"],
              ["Routes", "#routes"],
              ["Fleet", "#fleet"],
              ["Why us", "#why"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="transition-colors hover:text-accent">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-gold">Contact</div>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-accent" /><a href={`tel:${PHONE}`} className="hover:text-accent">{PHONE_DISPLAY}</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-accent" /><a href={`mailto:${EMAIL}`} className="break-all hover:text-accent">{EMAIL}</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-accent" />Gunjan, Vapi, Gujarat</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Shree Shyam Tours & Travels. All rights reserved.</p>
          <p>Designed with care for travellers from Vapi.</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Floating Buttons ---------------- */
function FloatingActions() {
  return (
    <>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="animate-pulse-glow fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:scale-110 sm:bottom-6 sm:right-6"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <a
        href={`tel:${PHONE}`}
        aria-label="Call now"
        className="fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-accent text-accent-foreground shadow-elegant transition-transform hover:scale-110 sm:bottom-6 sm:left-6 lg:hidden"
      >
        <Phone className="h-6 w-6" />
      </a>
    </>
  );
}

/* ---------------- Helpers ---------------- */
function SectionLabel({ children, center, light }: { children: React.ReactNode; center?: boolean; light?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
      light ? "border-white/20 bg-white/5 text-gold" : "border-accent/30 bg-accent/5 text-accent"
    } ${center ? "mx-auto" : ""}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}
