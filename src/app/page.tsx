const vessels = [
  { id: 1, name: "Atlantic Voyager", type: "Pesca", region: "Atlántico Norte", route: "Europa → Américas" },
  { id: 2, name: "Pacific Pearl", type: "Transporte", region: "Pacífico Sur", route: "Asia → Oceanía" },
  { id: 3, name: "Mediterranean Star", type: "Pesca", region: "Mediterráneo", route: "España → Italia" },
  { id: 4, name: "Nordic Wind", type: "Transporte", region: "Mar del Norte", route: "Escandinavia → UK" },
  { id: 5, name: "Caribbean Dream", type: "Pesca", region: "Caribe", route: "EEUU → Caribe" },
  { id: 6, name: "Indian Empress", type: "Transporte", region: "Océano Índico", route: "India → África" },
  { id: 7, name: "Arctic Hunter", type: "Pesca", region: "Océano Ártico", route: "Rusia → Noruega" },
  { id: 8, name: "Celtic Pride", type: "Transporte", region: "Atlántico", route: "Irlanda → Canadá" },
  { id: 9, name: "Red Sea Guardian", type: "Pesca", region: "Mar Rojo", route: "Egipto → Arabia" },
  { id: 10, name: "Baltic King", type: "Transporte", region: "Mar Báltico", route: "Polonia → Suecia" },
];

const benefits = [
  "Flota global de 10 buques con tracking en tiempo real",
  "Rutas optimizadas para pesca y transporte industrial",
  "Tecnología marítima de última generación",
  "Cobertura mundial: Atlántico, Pacífico, Índico y más"
];

const services = [
  {
    title: "Pesca Industrial",
    description: "Gestión completa de flota pesquera con rutas optimizadas y captura sostenible."
  },
  {
    title: "Transporte Marítimo",
    description: "Logística de carga marítima con seguimiento global y tiempos de entrega precisos."
  },
  {
    title: "Consultoría",
    description: "Asesoría técnica para optimización de operaciones portuarias y navieras."
  }
];

const testimonials = [
  {
    quote: "Reducimos costos de operación en un 30% con su plataforma de tracking.",
    author: "Capt. Martínez, Flota Pesca Sudamericana"
  },
  {
    quote: "La gestión de rutas nos permitió aumentar la eficiencia en un 45%.",
    author: "Sra. López, Nordic Shipping Co."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020a14] text-slate-50">
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus-ring fixed left-4 top-4 z-50 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium"
      >
        Saltar al contenido
      </a>

      <header className="sticky top-0 z-40 border-b border-blue-900/30 bg-[#020a14]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-cyan-300">
              <svg className="h-6 w-6 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight text-cyan-200">
                Global Maritime
              </p>
              <p className="text-xs text-slate-400">Landing v3 · TIB-4</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="focus-ring hover:text-white" href="#flota">
              Nuestra Flota
            </a>
            <a className="focus-ring hover:text-white" href="#servicios">
              Servicios
            </a>
            <a className="focus-ring hover:text-white" href="#cobertura">
              Cobertura
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              className="hidden rounded-full border border-cyan-300/50 px-4 py-2 text-sm font-semibold text-cyan-200 focus-ring hover:border-cyan-200 md:inline"
              href="#contacto"
            >
              Contactar
            </a>
            <a
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 focus-ring hover:bg-cyan-300"
              href="#contacto"
              data-testid="cta-header"
            >
              Solicitar Demo
            </a>
          </div>
        </div>
      </header>

      <main id="contenido-principal" className="mx-auto">
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-[#020a14] to-[#020a14]"/>
          <div className="absolute inset-0 opacity-20">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="cyan" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)"/>
            </svg>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <p className="inline-flex w-fit rounded-full border border-cyan-300/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">
                  Flota Global · Marzo 2026
                </p>
                <h1 className="text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  Gestión Inteligente de <span className="text-cyan-400">Buques Pesqueros</span> y Transporte Marítimo
                </h1>
                <p className="text-lg leading-8 text-slate-300 md:text-xl">
                  Coordinamos una flota de 10 buques navegando por los océanos del mundo. 
                  Pesca industrial y transporte marítimo con tecnología de última generación.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    className="focus-ring inline-flex min-w-[200px] items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 hover:bg-cyan-300"
                    href="#contacto"
                    data-testid="cta-principal"
                  >
                    Solicitar Demo
                    <span aria-hidden>→</span>
                  </a>
                  <a
                    className="focus-ring inline-flex min-w-[200px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white hover:border-white/30"
                    href="#flota"
                  >
                    Ver Flota
                  </a>
                </div>
                <ul className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                  {benefits.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span aria-hidden className="text-cyan-400">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="glass rounded-3xl border border-blue-500/20 bg-blue-950/30 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-cyan-200">Nuestra Flota Activa</h3>
                  <div className="grid gap-3">
                    {vessels.map((vessel, idx) => (
                      <div 
                        key={vessel.id}
                        className="flex items-center justify-between rounded-lg border border-blue-800/50 bg-blue-900/20 p-3"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v-2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.05.78L3.95 19z"/>
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{vessel.name}</p>
                            <p className="text-xs text-slate-400">{vessel.type} · {vessel.region}</p>
                          </div>
                        </div>
                        <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-xs text-cyan-300">
                          {vessel.route}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="border-t border-blue-900/30 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-400">
                Servicios
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Soluciones Integrales para el Sector Marítimo
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <article 
                  key={service.title}
                  className="glass rounded-2xl border border-blue-500/20 bg-blue-950/20 p-6 transition-all hover:border-cyan-500/40"
                >
                  <h3 className="mb-3 text-lg font-semibold text-cyan-200">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cobertura" className="border-t border-blue-900/30 bg-blue-950/20 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-400">
                  Cobertura Global
                </p>
                <h2 className="mb-4 text-3xl font-semibold text-white">
                  Navegamos por los Océanos del Mundo
                </h2>
                <p className="mb-6 text-slate-300">
                  Nuestra flota opera en las principales rutas marítimas internacionales, 
                  desde el Atlántico Norte hasta el Pacífico Sur, el Índico y más allá.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-blue-900/30 p-4">
                    <p className="text-2xl font-bold text-cyan-400">10+</p>
                    <p className="text-sm text-slate-400">Buques activos</p>
                  </div>
                  <div className="rounded-lg bg-blue-900/30 p-4">
                    <p className="text-2xl font-bold text-cyan-400">5</p>
                    <p className="text-sm text-slate-400">Océanos</p>
                  </div>
                  <div className="rounded-lg bg-blue-900/30 p-4">
                    <p className="text-2xl font-bold text-cyan-400">50+</p>
                    <p className="text-sm text-slate-400">Rutas</p>
                  </div>
                  <div className="rounded-lg bg-blue-900/30 p-4">
                    <p className="text-2xl font-bold text-cyan-400">24/7</p>
                    <p className="text-sm text-slate-400">Monitoreo</p>
                  </div>
                </div>
              </div>
              <div className="glass flex aspect-video items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-950/30">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20">
                    <svg className="h-8 w-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  <p className="text-slate-400">Mapa Global</p>
                  <p className="text-sm text-slate-500">10 buques en navegación</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-blue-900/30 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-400">
                Testimonios
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Lo que dicen nuestros clientes
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {testimonials.map((item) => (
                <article
                  key={item.author}
                  className="glass rounded-2xl border border-blue-500/20 bg-blue-950/20 p-6"
                >
                  <p className="mb-4 text-base leading-relaxed text-slate-200">"{item.quote}"</p>
                  <p className="text-sm font-semibold text-cyan-300">{item.author}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="glass sticky bottom-4 z-30 mx-4 mb-4 flex flex-col gap-3 rounded-2xl border border-cyan-400/30 bg-[#020a14]/95 px-4 py-4 shadow-2xl md:static md:mx-8 md:mb-8 md:flex-row md:items-center md:justify-between md:gap-4"
        >
          <div>
            <p className="text-sm font-semibold text-white">
              ¿Necesitas gestionar tu flota marítima?
            </p>
            <p className="text-sm text-slate-400">
              Hablemos de cómo podemos ayudarte.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              className="focus-ring inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-cyan-300"
              href="mailto:contacto@globalmaritime.app?subject=Demo"
              data-testid="cta-final-button"
            >
              Solicitar Demo
            </a>
            <a
              className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-white/40"
              href="tel:+1234567890"
            >
              Llamar ahora
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-blue-900/30 bg-[#01060d] py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-slate-500 md:px-8">
          <p>© 2026 Global Maritime. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
