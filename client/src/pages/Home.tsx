import { useState } from "react";
import {
  Activity,
  CheckCircle2,
  Clock3,
  Factory,
  Gauge,
  HardHat,
  Facebook,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Radiation,
  ShieldCheck,
  Sprout,
  UsersRound,
  Wrench,
  X,
} from "lucide-react";

type Language = "pt" | "en";

const assets = {
  logo: "/manus-storage/maritech-mt-mark_7693e8fb.png",
  platform: "/manus-storage/industrial-cleaning-team_f83382f3.jpg",
  tank: "/manus-storage/tank-team_51eb3582.jpg",
  radiation: "/manus-storage/rpo-supervisor_fae7637c.jpg",
  agriculture: "/manus-storage/boat-cleaning_c5736780.jpg",
};

const content = {
  pt: {
    nav: [
      ["Início", "inicio"],
      ["Serviços", "servicos"],
      ["Sobre nós", "sobre"],
      ["Contactos", "contactos"],
    ],
    eyebrow: "COMÉRCIO & SERVIÇOS · CABINDA",
    title: "Equipa preparada para operações que não podem parar.",
    intro:
      "Ligamos pessoas qualificadas, proteção radiológica e limpeza industrial a uma execução segura, responsável e orientada para resultados.",
    primary: "Falar com a MariTech",
    secondary: "Conhecer os serviços",
    availability: "Disponíveis de segunda a sexta",
    heroTag: "Clean & radiation protection team",
    servicesEyebrow: "ÁREAS DE ATUAÇÃO",
    servicesTitle: "Soluções técnicas para ambientes exigentes.",
    servicesIntro:
      "Do recrutamento especializado à manutenção de espaços industriais, a MariTech entrega presença no terreno, rigor e resposta rápida.",
    serviceCta: "Ver como podemos ajudar",
    serviceCards: [
      {
        icon: UsersRound,
        number: "01",
        title: "Recrutamento & seleção",
        text: "Fornecimento de mão de obra qualificada e equipas ManPower para operações industriais e de serviços.",
        points: ["Triagem de perfis", "Equipas por projeto", "Resposta operacional"],
      },
      {
        icon: Leaf,
        number: "02",
        title: "Exportação de pimenta chili",
        text: "Produção, preparação e exportação de pimenta chili para mercados no exterior.",
        points: ["Seleção do produto", "Preparação para exportação", "Mercados internacionais"],
      },
      {
        icon: Radiation,
        number: "03",
        title: "Radioproteção",
        text: "Profissionais e equipamentos para o manejo responsável de materiais radioativos de ocorrência natural.",
        points: ["Peritos e HSE Supervisor RPO", "Oficiais e técnicos de proteção", "Medidores, dosimeter e detectores"],
      },
      {
        icon: Factory,
        number: "04",
        title: "Limpeza industrial",
        text: "Limpeza técnica de tanques, filtros, depósitos, COT, drenos e áreas de operação em terra ou no mar.",
        points: ["Tanques e filtros exchanger", "Depósitos de combustível em barcos", "COT, drenos e desentupimento"],
      },
      {
        icon: Sprout,
        number: "05",
        title: "Agricultura & produção",
        text: "Apoio a projetos de agricultura, aviário, pecuária, apicultura e avicultura com visão local.",
        points: ["Produção sustentável", "Apoio a operações", "Desenvolvimento regional"],
      },
    ],
    trustEyebrow: "PORQUE TRABALHAR CONNOSCO",
    trustTitle: "Segurança no método. Clareza na entrega.",
    trustText:
      "A nossa atuação combina pessoas preparadas, equipamentos adequados e acompanhamento próximo para que cada serviço avance com confiança.",
    trustPoints: [
      ["01", "Equipa qualificada", "Profissionais alinhados com cada ambiente de risco e operação."],
      ["02", "Foco em HSE", "Cultura de prevenção, controlo e proteção para pessoas e ativos."],
      ["03", "Resposta local", "Base em Cabinda e disponibilidade para mobilização por projeto."],
    ],
    aboutEyebrow: "SOBRE A MARITECH",
    aboutTitle: "Comércio e serviços com compromisso em cada detalhe.",
    aboutText:
      "A MariTech Comércio & Services apoia empresas e projetos em Cabinda com soluções práticas para pessoas, ambientes industriais e produção. Trabalhamos com responsabilidade, disciplina operacional e respeito pelas comunidades onde atuamos.",
    aboutQuote: "“Clean and radiation protection team”",
    equipmentLabel: "Equipamentos disponíveis",
    equipment: ["Medidores de radioproteção", "Personal electronic dosimeter", "Detectores de gás"],
    contactEyebrow: "VAMOS CONVERSAR",
    contactTitle: "Tem uma operação para preparar?",
    contactText:
      "Partilhe o seu desafio. A nossa equipa está disponível para entender o escopo e indicar a melhor solução.",
    contactButton: "Enviar pedido",
    footerLine: "MariTech Comércio & Services · Cabinda, Angola",
    formName: "Nome",
    formEmail: "Email profissional",
    formMessage: "Como podemos ajudar?",
    formSend: "Enviar por email",
  },
  en: {
    nav: [
      ["Home", "inicio"],
      ["Services", "servicos"],
      ["About us", "sobre"],
      ["Contact", "contactos"],
    ],
    eyebrow: "COMMERCE & SERVICES · CABINDA",
    title: "A team prepared for operations that cannot stop.",
    intro:
      "We connect qualified people, radiation protection and industrial cleaning with safe, responsible and results-focused execution.",
    primary: "Talk to MariTech",
    secondary: "Explore services",
    availability: "Available Monday to Friday",
    heroTag: "Clean & radiation protection team",
    servicesEyebrow: "AREAS OF EXPERTISE",
    servicesTitle: "Technical solutions for demanding environments.",
    servicesIntro:
      "From specialist recruitment to industrial space maintenance, MariTech brings field presence, discipline and fast response.",
    serviceCta: "See how we can help",
    serviceCards: [
      {
        icon: UsersRound,
        number: "01",
        title: "Recruitment & selection",
        text: "Qualified manpower and ManPower teams for industrial and service operations.",
        points: ["Profile screening", "Project-based teams", "Operational response"],
      },
      {
        icon: Leaf,
        number: "02",
        title: "Chili pepper export",
        text: "Production, preparation and export of chili peppers to international markets.",
        points: ["Product selection", "Export preparation", "International markets"],
      },
      {
        icon: Radiation,
        number: "03",
        title: "Radiation protection",
        text: "People and equipment for the responsible handling of naturally occurring radioactive materials.",
        points: ["Experts and HSE Supervisor RPO", "Protection officers and technicians", "Meters, dosimeter and gas detection"],
      },
      {
        icon: Factory,
        number: "04",
        title: "Industrial cleaning",
        text: "Technical cleaning of tanks, filters, deposits, COT, drains and operational areas onshore or offshore.",
        points: ["Tanks and exchanger filters", "Vessel fuel deposits", "COT, drains and unclogging"],
      },
      {
        icon: Sprout,
        number: "05",
        title: "Agriculture & production",
        text: "Support for agriculture, poultry, livestock, beekeeping and aviculture projects with a local perspective.",
        points: ["Sustainable production", "Operational support", "Regional development"],
      },
    ],
    trustEyebrow: "WHY WORK WITH US",
    trustTitle: "Safety in the method. Clarity in the delivery.",
    trustText:
      "Our work combines prepared people, fit-for-purpose equipment and close follow-up so every service moves forward with confidence.",
    trustPoints: [
      ["01", "Qualified team", "Professionals aligned with each risk environment and operation."],
      ["02", "HSE focus", "A culture of prevention, control and protection for people and assets."],
      ["03", "Local response", "Based in Cabinda and ready to mobilise for each project."],
    ],
    aboutEyebrow: "ABOUT MARITECH",
    aboutTitle: "Commerce and services with commitment in every detail.",
    aboutText:
      "MariTech Comércio & Services supports companies and projects in Cabinda with practical solutions for people, industrial environments and production. We work with responsibility, operational discipline and respect for the communities where we operate.",
    aboutQuote: "“Clean and radiation protection team”",
    equipmentLabel: "Available equipment",
    equipment: ["Radiation protection meters", "Personal electronic dosimeter", "Gas detectors"],
    contactEyebrow: "LET'S TALK",
    contactTitle: "Have an operation to prepare?",
    contactText:
      "Tell us about your challenge. Our team is ready to understand the scope and recommend the right solution.",
    contactButton: "Send enquiry",
    footerLine: "MariTech Comércio & Services · Cabinda, Angola",
    formName: "Name",
    formEmail: "Business email",
    formMessage: "How can we help?",
    formSend: "Send by email",
  },
};

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[language];

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="topbar container">
          <a className="brand-mark" href="#inicio" aria-label="MariTech Comércio & Services">
            <img src={assets.logo} alt="MariTech Comércio & Services" />
            <span className="brand-name"><strong>MariTech</strong><small>Comércio &amp; Services</small></span>
          </a>
          <div className="header-meta">
            <span><Clock3 size={14} /> 08:00 — 16:00</span>
            <span><MapPin size={14} /> Cabinda · Angola</span>
          </div>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
            {t.nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <div className="language-switcher" aria-label="Selecionar idioma">
              <button className={language === "pt" ? "active" : ""} onClick={() => setLanguage("pt")}>PT</button>
              <span>/</span>
              <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")}>EN</button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</div>
              <h1>{t.title}</h1>
              <p className="hero-intro">{t.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contactos">{t.primary}</a>
                <a className="button button-ghost" href="#servicos">{t.secondary}</a>
              </div>
              <div className="hero-footnote"><span className="status-dot" />{t.availability}</div>
            </div>
          </div>
          <div className="hero-bottom-line container"><span className="line" /><span>Serviços que protegem o ritmo do seu negócio</span></div>
        </section>

        <section className="image-strip-section" aria-label={language === "pt" ? "Galeria de operações" : "Operations gallery"}>
          <div className="image-strip container">
            <figure><img src={assets.agriculture} alt={language === "pt" ? "Limpeza de embarcação" : "Vessel cleaning"} /><figcaption>{language === "pt" ? "Embarcações" : "Vessels"}</figcaption></figure>
            <figure><img src={assets.tank} alt={language === "pt" ? "Limpeza de tanque industrial" : "Industrial tank cleaning"} /><figcaption>{language === "pt" ? "Tanques" : "Tanks"}</figcaption></figure>
            <figure><img src={assets.radiation} alt={language === "pt" ? "Supervisor de radioproteção" : "Radiation protection supervisor"} /><figcaption>{language === "pt" ? "Radioproteção" : "Radiation protection"}</figcaption></figure>
            <figure><img src={assets.platform} alt={language === "pt" ? "Equipa de limpeza industrial" : "Industrial cleaning team"} /><figcaption>{language === "pt" ? "Limpeza industrial" : "Industrial cleaning"}</figcaption></figure>
          </div>
        </section>

        <section id="servicos" className="services-section section-pad">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <div className="eyebrow"><span className="eyebrow-line" />{t.servicesEyebrow}</div>
                <h2>{t.servicesTitle}</h2>
              </div>
              <p>{t.servicesIntro}</p>
            </div>
            <div className="services-row">
              {t.serviceCards.map((service) => {
                const Icon = service.icon;
                return (
                  <article className="service-card" key={service.number}>
                    <div className="service-card-top"><span className="service-number">{service.number}</span><div className="service-icon"><Icon size={22} strokeWidth={1.7} /></div></div>
                    <div className="service-body">
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                      <div className="service-points">{service.points.map(point => <span key={point}><CheckCircle2 size={14} />{point}</span>)}</div>
                    </div>
                  </article>
                );
              })}
            </div>
            <a className="text-link" href="#contactos">{t.serviceCta}</a>
          </div>
        </section>

        <section id="sobre" className="trust-section section-pad">
          <div className="container trust-grid">
            <div className="trust-intro">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line" />{t.trustEyebrow}</div>
              <h2>{t.trustTitle}</h2>
              <p>{t.trustText}</p>
              <div className="trust-seal"><ShieldCheck size={27} /><span>HSE<br /><small>FIRST</small></span></div>
            </div>
            <div className="trust-list">
              {t.trustPoints.map(([number, title, text]) => (
                <div className="trust-item" key={number}>
                  <span className="trust-number">{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-pad">
          <div className="container about-grid">
            <div className="about-images">
              <div className="about-image-main"><img src={assets.agriculture} alt={language === "pt" ? "Projeto de produção avícola" : "Poultry production project"} /></div>
              <div className="about-image-small"><img src={assets.tank} alt={language === "pt" ? "Operação de limpeza industrial" : "Industrial cleaning operation"} /></div>
              <span className="about-stamp"><Activity size={18} /> CABINDA<br /><strong>2026</strong></span>
            </div>
            <div className="about-copy">
              <div className="eyebrow"><span className="eyebrow-line" />{t.aboutEyebrow}</div>
              <h2>{t.aboutTitle}</h2>
              <p>{t.aboutText}</p>
              <blockquote>{t.aboutQuote}</blockquote>
              <div className="equipment-block"><span className="mini-label"><Gauge size={15} />{t.equipmentLabel}</span><div className="equipment-list">{t.equipment.map(item => <span key={item}><Wrench size={14} />{item}</span>)}</div></div>
            </div>
          </div>
        </section>

        <section id="contactos" className="contact-section section-pad">
          <div className="container contact-grid">
            <div className="contact-copy">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line" />{t.contactEyebrow}</div>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactText}</p>
              <div className="contact-details">
                <a href="tel:+244926706353"><Phone size={18} /> +244 926 706 353</a>
                <a href="tel:+244942050290"><Phone size={18} /> +244 942 050 290</a>
                <a href="mailto:maritech@.com"><Mail size={18} /> maritech@.com</a>
                <span><MapPin size={18} /> Bairro da Resistência, Cabinda</span>
              </div>
            </div>
            <div className="contact-form-card">
              <div className="form-card-top"><span>MT / CONTACT</span><MessageCircle size={22} /></div>
              <form action="mailto:maritech@.com" method="post" encType="text/plain">
                <label>{t.formName}<input name="name" placeholder={t.formName} required /></label>
                <label>{t.formEmail}<input name="email" type="email" placeholder={t.formEmail} required /></label>
                <label>{t.formMessage}<textarea name="message" placeholder={t.formMessage} rows={4} required /></label>
                <button className="button button-yellow" type="submit">{t.formSend}</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <p>{t.footerLine}</p>
          <div className="footer-links"><a href="#servicos">{t.nav[1][0]}</a><a href="#contactos">{t.nav[3][0]}</a><a href="https://wa.me/244926706353" target="_blank" rel="noreferrer">WhatsApp</a></div>
          <div className="footer-social" aria-label="Redes sociais">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={17} /></a>
            <span>© 2026 MariTech</span>
          </div>
        </div>
      </footer>
      <button className="floating-whatsapp" aria-label="WhatsApp" onClick={() => window.open("https://wa.me/244926706353", "_blank")}><MessageCircle size={22} /></button>
    </div>
  );
}
