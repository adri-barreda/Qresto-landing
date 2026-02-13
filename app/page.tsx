"use client";

// Landing page SaaS

const WHATSAPP_URL = "https://wa.me/34604943418?text=Hola,%20me%20interesa%20el%20sistema%20de%20QR%20para%20mi%20restaurante";

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`px-5 md:px-8 lg:px-12 py-16 md:py-24 max-w-5xl mx-auto ${className}`}>
      {children}
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-body uppercase tracking-[0.2em] text-accent mb-4 block">
      {children}
    </span>
  );
}

function CTAButton({ children, href = WHATSAPP_URL, variant = "primary" }: { children: React.ReactNode; href?: string; variant?: "primary" | "whatsapp" }) {
  const base = variant === "whatsapp"
    ? "inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 bg-[var(--whatsapp)] text-white hover:brightness-110 hover:-translate-y-0.5 shadow-lg"
    : "btn-primary text-base px-8 py-4";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
      {children}
    </a>
  );
}

export default function SaaSLanding() {
  const features = [
    { icon: "📊", title: "Dashboard en tiempo real", desc: "Ves quién escanea, qué piden, cuándo vuelven. Datos de tu restaurante, no de terceros." },
    { icon: "🍔", title: "Carta interactiva", desc: "Tu carta en WhatsApp. El cliente pregunta, el bot responde. Sin PDF, sin apps raras." },
    { title: "Bot con IA", desc: "Responde preguntas, toma reservas, sugiere platos. 24/7. Sin que tú toques el móvil." },
    { title: "Campañas WhatsApp", desc: "Envía ofertas a tus clientes reales. No a seguidores fantasma de Instagram." },
    { title: "QR personalizados", desc: "Cada mesa, cada local, cada evento. Tú decides dónde pones el QR y qué pasa cuando lo escanean." },
    { title: "Web de tu restaurante", desc: "Una web bonita, rápida y tuya. Sin depender de plataformas que te cobran comisión." },
  ];

  const steps = [
    { num: "01", title: "Escanea el QR", desc: "Tu cliente apunta con la cámara. Sin descargar nada." },
    { num: "02", title: "Chatea con el bot", desc: "Ve la carta, pregunta por alérgenos, hace pedidos. Todo en WhatsApp." },
    { num: "03", title: "Tú gestionas todo", desc: "Desde el dashboard ves las conversaciones, datos y campañas." },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-body">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--bg-void)]/80 backdrop-blur-md border-b border-[var(--border-subtle)]">
        <div className="max-w-5xl mx-auto px-5 md:px-8 lg:px-12 py-4 flex justify-between items-center">
          <span className="font-display text-lg tracking-tight">
            <span className="text-gradient">QR</span>
            <span className="text-[var(--text-muted)] mx-1">→</span>
            <span className="text-[var(--text-secondary)]">WhatsApp</span>
          </span>
          <CTAButton variant="whatsapp" href={WHATSAPP_URL}>
            Hablemos
          </CTAButton>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 px-5 md:px-8 lg:px-12 max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <SectionLabel>Para restaurantes que quieren más</SectionLabel>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
            Tu cliente escanea.
            <br />
            <span className="text-gradient">Tu carta responde.</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            Un QR en la mesa, WhatsApp hace el resto. Carta interactiva, bot con IA, dashboard y web. 
            Sin apps, sin descargas, sin complicaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton variant="whatsapp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.914l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.594-.822-6.332-2.2l-.144-.113-3.012 1.01 1.01-3.013-.124-.156A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Escríbeme por WhatsApp
            </CTAButton>
            <a href="#como-funciona" className="btn-secondary text-base px-8 py-4">
              Ver cómo funciona
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <Section>
        <div className="card p-8 md:p-12">
          <SectionLabel>El problema</SectionLabel>
          <h2 className="font-display text-2xl md:text-4xl tracking-tight mb-6">
            Tus clientes ya están en WhatsApp.<br />
            <span className="text-[var(--text-muted)]">Tu restaurante, no.</span>
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] text-base md:text-lg leading-relaxed max-w-2xl">
            <p>
              Tienes Instagram. Tienes Google Maps. Puede que hasta tengas una web que no actualizas desde 2021.
            </p>
            <p>
              Pero cuando un cliente quiere ver tu carta, preguntar si tienes opciones sin gluten o reservar mesa... ¿qué hace? Te llama. Y tú estás en cocina.
            </p>
            <p className="text-[var(--text-primary)] font-medium">
              El resultado: pierdes clientes que ya estaban delante de tu puerta.
            </p>
          </div>
        </div>
      </Section>

      {/* SOLUCIÓN */}
      <Section>
        <SectionLabel>La solución</SectionLabel>
        <h2 className="font-display text-2xl md:text-4xl tracking-tight mb-4">
          Un QR. WhatsApp. Ya está.
        </h2>
        <p className="text-[var(--text-secondary)] text-lg mb-12 max-w-xl">
          WhatsApp ya lo usan tus clientes. Úsalo tú también. El cliente escanea el QR, 
          abre WhatsApp y tiene tu carta, un bot que responde y tú ves todo desde el dashboard.
        </p>
        <div className="grid md:grid-cols-3 gap-px bg-[var(--border-subtle)] rounded-2xl overflow-hidden">
          <div className="bg-[var(--bg-primary)] p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[var(--accent-muted)] flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="4" height="4"/><line x1="21" y1="14" x2="21" y2="21"/><line x1="14" y1="21" x2="21" y2="21"/></svg>
            </div>
            <h3 className="font-display text-lg mb-2">QR en la mesa</h3>
            <p className="text-[var(--text-muted)] text-sm">Escanea con la cámara, sin descargar nada</p>
          </div>
          <div className="bg-[var(--bg-primary)] p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[rgba(37,211,102,0.15)] flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--whatsapp)" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
            </div>
            <h3 className="font-display text-lg mb-2">WhatsApp responde</h3>
            <p className="text-[var(--text-muted)] text-sm">Bot con IA: carta, reservas, alérgenos, todo</p>
          </div>
          <div className="bg-[var(--bg-primary)] p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[var(--gold-muted)] flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h3 className="font-display text-lg mb-2">Tú controlas</h3>
            <p className="text-[var(--text-muted)] text-sm">Dashboard con datos, campañas y gestión</p>
          </div>
        </div>
      </Section>

      {/* CÓMO FUNCIONA */}
      <Section className="scroll-mt-24" >
        <div id="como-funciona" className="scroll-mt-24">
          <SectionLabel>Cómo funciona</SectionLabel>
          <h2 className="font-display text-2xl md:text-4xl tracking-tight mb-12">
            Tres pasos. Cero complicaciones.
          </h2>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[var(--accent-muted)] flex items-center justify-center">
                  <span className="font-display text-accent text-lg">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl mb-1">{step.title}</h3>
                  <p className="text-[var(--text-secondary)]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FEATURES */}
      <Section>
        <SectionLabel>Qué incluye</SectionLabel>
        <h2 className="font-display text-2xl md:text-4xl tracking-tight mb-12">
          Todo lo que necesitas. Nada que no.
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((f) => (
            <div key={f.title} className="card p-6 flex gap-4 items-start">
              {f.icon && <span className="text-2xl flex-shrink-0">{f.icon}</span>}
              {!f.icon && <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />}
              <div>
                <h3 className="font-display text-base mb-1">{f.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CASO DE ÉXITO */}
      <Section>
        <SectionLabel>Caso real</SectionLabel>
        <h2 className="font-display text-2xl md:text-4xl tracking-tight mb-8">
          Delito Burger Club, Elda
        </h2>
        <div className="card p-8 md:p-12">
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8 max-w-2xl">
            Pusimos QRs en las mesas y en la puerta. En el primer mes, el bot gestionó más de 200 conversaciones 
            sin que nadie del equipo tocara el móvil. Los clientes preguntan por la carta, hacen pedidos 
            y vuelven. Así de simple.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "+200", label: "conversaciones/mes" },
              { value: "85%", label: "repiten interacción" },
              { value: "3min", label: "tiempo medio respuesta" },
              { value: "0", label: "apps descargadas" },
            ].map((m) => (
              <div key={m.label} className="text-center p-4">
                <div className="font-display text-2xl md:text-3xl text-gradient mb-1">{m.value}</div>
                <div className="text-[var(--text-muted)] text-xs uppercase tracking-wider">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PRICING */}
      <Section>
        <SectionLabel>Precio</SectionLabel>
        <h2 className="font-display text-2xl md:text-4xl tracking-tight mb-4">
          Un plan. Sin sorpresas.
        </h2>
        <p className="text-[var(--text-secondary)] text-lg mb-10">
          No hay plan básico, pro ni enterprise. Hay uno que funciona.
        </p>
        <div className="card p-8 md:p-12 max-w-lg">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-display text-4xl md:text-5xl text-gradient">49€</span>
            <span className="text-[var(--text-muted)]">/mes</span>
          </div>
          <p className="text-[var(--text-secondary)] mb-8">
            Setup inicial: <span className="text-[var(--text-primary)] font-medium">299€</span> (configuración, diseño QR, alta del bot y dashboard)
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Bot WhatsApp con IA",
              "Carta interactiva",
              "Dashboard completo",
              "QR personalizados",
              "Web de tu restaurante",
              "Campañas WhatsApp",
              "Soporte directo",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[var(--text-secondary)]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5L6.5 12L13 4" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <CTAButton variant="whatsapp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.914l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.594-.822-6.332-2.2l-.144-.113-3.012 1.01 1.01-3.013-.124-.156A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            Quiero esto para mi restaurante
          </CTAButton>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section>
        <div className="text-center">
          <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-4">
            ¿Tienes un restaurante?
            <br />
            <span className="text-gradient">Hablemos.</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-10 max-w-md mx-auto">
            Sin compromiso. Me cuentas tu caso, te digo si esto te encaja. 
            Si no, tan amigos.
          </p>
          <CTAButton variant="whatsapp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.914l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.594-.822-6.332-2.2l-.144-.113-3.012 1.01 1.01-3.013-.124-.156A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            Escríbeme por WhatsApp
          </CTAButton>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--border-subtle)] py-8 px-5 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[var(--text-muted)] text-sm">
          <span>© 2026 Qresto</span>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-secondary)] transition-colors">
            Contacto
          </a>
        </div>
      </footer>
    </div>
  );
}
