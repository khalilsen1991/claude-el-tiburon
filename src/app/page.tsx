const beneficios = [
  "Storytelling de valor en 10 segundos: propuesta clara y medible.",
  "CTAs visibles en desktop y mobile con rutas directas a demo y pricing.",
  "Rendimiento optimizado: layout simple, sin dependencias pesadas."
];

const features = [
  {
    title: "Problema",
    body:
      "Baja conversión y usuarios perdidos entre scrolls largos. El mensaje principal no explica qué ganan ni cuándo."
  },
  {
    title: "Solución",
    body:
      "Narrativa corta: dolor → cómo lo resolvemos → prueba social → CTA. Copys accionables y microcopy que reduce fricción."
  },
  {
    title: "Beneficios",
    body:
      "Más demos agendadas, menor tiempo de respuesta, mejor SEO por metadata completa y estructura semántica."
  }
];

const pruebas = [
  {
    quote:
      "Duplicamos demos en 3 semanas gracias a CTAs claros y formularios más cortos.",
    author: "Valeria R., Head of Growth"
  },
  {
    quote:
      "El tiempo de carga bajó a la mitad y el equipo de ventas recibe leads mejor calificados.",
    author: "Martín S., RevOps"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050810] text-slate-50">
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus-ring fixed left-4 top-4 z-50 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium"
      >
        Saltar al contenido
      </a>

      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#050810]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div
              aria-hidden
              className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400"
            />
            <div>
              <p className="text-sm font-semibold tracking-tight text-emerald-200">
                El Tiburón
              </p>
              <p className="text-xs text-slate-300">Landing v2 · TIB-3</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
            <a className="focus-ring hover:text-white" href="#solucion">
              Solución
            </a>
            <a className="focus-ring hover:text-white" href="#beneficios">
              Beneficios
            </a>
            <a className="focus-ring hover:text-white" href="#prueba-social">
              Prueba social
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              className="hidden rounded-full border border-emerald-300/50 px-4 py-2 text-sm font-semibold text-emerald-200 focus-ring hover:border-emerald-200 md:inline"
              href="#pricing"
            >
              Ver pricing
            </a>
            <a
              className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg focus-ring hover:bg-emerald-300"
              href="#cta-final"
              data-testid="cta-header"
            >
              Agenda una demo
            </a>
          </div>
        </div>
      </header>

      <main
        id="contenido-principal"
        className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-24 pt-14 md:px-8 md:pt-20"
      >
        <section
          id="hero"
          className="grid gap-10 rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-[#0a152a]/80 p-8 shadow-2xl md:grid-cols-[1.2fr_0.8fr] md:p-12"
        >
          <div className="flex flex-col gap-6">
            <p className="inline-flex w-fit rounded-full border border-emerald-300/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200">
              Nueva landing · Marzo 2026
            </p>
            <h1 className="text-balance text-4xl font-bold leading-tight md:text-5xl">
              Convierte visitas en clientes en menos de 7 días.
            </h1>
            <p className="text-lg leading-8 text-slate-200 md:text-xl">
              El Tiburón orquesta captación, nurtures y agenda demos con copys
              claros, CTAs visibles y rendimiento listo para escalar.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                className="focus-ring inline-flex min-w-[200px] items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 hover:bg-emerald-300"
                href="#cta-final"
                data-testid="cta-principal"
              >
                Agenda una demo
                <span aria-hidden>→</span>
              </a>
              <a
                className="focus-ring inline-flex min-w-[200px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white hover:border-white/30"
                href="#pricing"
              >
                Ver pricing
              </a>
            </div>
            <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
              {beneficios.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span aria-hidden className="text-emerald-300">
                    ●
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-300">Tiempo a primera demo</p>
                <span className="text-lg font-semibold text-emerald-200">
                  -42%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-300">Leads calificados</p>
                <span className="text-lg font-semibold text-emerald-200">
                  +31%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-300">CTR de CTA principal</p>
                <span className="text-lg font-semibold text-emerald-200">
                  5.2x
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="solucion"
          className="grid gap-6 rounded-3xl border border-white/5 bg-white/5 p-6 md:grid-cols-3 md:p-8"
        >
          {features.map((feature) => (
            <article key={feature.title} className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200">
                {feature.title}
              </p>
              <h3 className="text-lg font-semibold text-white">
                {feature.title === "Solución"
                  ? "Narrativa que guía a la conversión"
                  : feature.title === "Problema"
                    ? "Lo que hoy impide crecer"
                    : "Resultados esperados"}
              </h3>
              <p className="text-sm leading-relaxed text-slate-200">
                {feature.body}
              </p>
            </article>
          ))}
        </section>

        <section
          id="beneficios"
          className="grid gap-6 rounded-3xl border border-white/5 bg-[#0b1222] p-8 md:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200">
              Beneficios clave
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Copys accionables, estructura limpia y CTAs siempre visibles.
            </h2>
            <p className="text-base text-slate-200">
              Hero directo, CTA flotante en mobile, sección de prueba social y
              narrativa corta que evita scroll infinito. HTML semántico y
              metadata SEO listas para indexar.
            </p>
          </div>
          <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-xs uppercase text-emerald-200">UX</p>
              <p className="text-lg font-semibold text-white">
                CTA fijo en mobile
              </p>
              <p className="text-sm text-slate-200">
                Botón primario siempre accesible sin tap targets pequeños.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase text-emerald-200">SEO</p>
              <p className="text-lg font-semibold text-white">
                Metadata completa
              </p>
              <p className="text-sm text-slate-200">
                Title, description, OG y Twitter listos para compartir.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase text-emerald-200">Accesibilidad</p>
              <p className="text-lg font-semibold text-white">
                Saltos y focus visible
              </p>
              <p className="text-sm text-slate-200">
                Skip link, outline accesible y jerarquía semántica.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase text-emerald-200">Performance</p>
              <p className="text-lg font-semibold text-white">
                Sin dependencias pesadas
              </p>
              <p className="text-sm text-slate-200">
                Solo Tailwind y componentes nativos para cargas rápidas.
              </p>
            </div>
          </div>
        </section>

        <section
          id="prueba-social"
          className="space-y-6 rounded-3xl border border-white/5 bg-white/5 p-6 md:p-8"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200">
                Prueba social
              </p>
              <h2 className="text-2xl font-semibold text-white">
                Clientes que ya mejoraron conversión
              </h2>
            </div>
            <a
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:border-white/40"
              href="#cta-final"
            >
              Hablar con ventas →
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {pruebas.map((item) => (
              <article
                key={item.author}
                className="glass rounded-2xl p-5 text-slate-100"
              >
                <p className="text-base leading-relaxed">"{item.quote}"</p>
                <p className="mt-4 text-sm font-semibold text-emerald-200">
                  {item.author}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="pricing"
          className="grid gap-6 rounded-3xl border border-white/5 bg-white/5 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200">
              Pricing simple
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Un plan para lanzar rápido
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Sin sorpresas. Empezá a captar leads desde el día 1.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-sm text-slate-300">Plan Growth</p>
                <p className="text-3xl font-bold text-white">
                  USD 490<span className="text-sm font-medium text-slate-300">/mes</span>
                </p>
              </div>
              <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                Recomendado
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>Form CTA + agendamiento integrado</li>
              <li>Reportes semanales de conversión</li>
              <li>Soporte prioritario</li>
            </ul>
            <a
              className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-4 py-3 text-base font-semibold text-slate-900 hover:bg-emerald-300"
              href="#cta-final"
            >
              Hablemos hoy
            </a>
          </div>
        </section>

        <section
          id="cta-final"
          className="glass sticky bottom-4 z-30 flex flex-col gap-3 rounded-2xl border border-emerald-400/30 bg-[#0a1628]/95 px-4 py-4 shadow-2xl md:static md:flex-row md:items-center md:justify-between md:gap-4"
        >
          <div>
            <p className="text-sm font-semibold text-white">
              ¿Listo para duplicar tus demos?
            </p>
            <p className="text-sm text-slate-200">
              Agenda 15 minutos y te mostramos la landing v2 en vivo.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              className="focus-ring inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-emerald-300"
              href="mailto:ventas@eltiburon.app?subject=Demo"
              data-testid="cta-final-button"
            >
              Agendar demo
            </a>
            <a
              className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-white/40"
              href="#pricing"
            >
              Ver pricing
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
