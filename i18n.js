const translations = {
  en: {
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "hero.eyebrow": "Portfolio · 2026",
    "hero.title": "Hi, I'm Leonor.<br><em>I make things with care.</em>",
    "hero.lead": "Write a short line here about what you do and who you do it for.",
    "projects.title": "Projects",
    "projects.name": "Project name",
    "projects.desc": "One or two sentences about the project and your role.",
    "about.title": "About me",
    "about.p1": "Tell a bit of your story here: what drives you, how you work, what sets you apart.",
    "about.p2": "A second paragraph about your interests, background or the kind of work you're looking for.",
    "experience.title": "Experience",
    "experience.now": "2024 — now",
    "experience.role": "Role",
    "experience.company": "Company",
    "experience.degree": "Degree",
    "experience.uni": "University",
    "contact.title": "Let's talk?",
    "contact.lead": "Find me on any of these.",
  },
  pt: {
    "nav.projects": "Projetos",
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Portfólio · 2026",
    "hero.title": "Olá, sou a Leonor.<br><em>Crio coisas com cuidado.</em>",
    "hero.lead": "Escreve aqui uma frase curta sobre o que fazes e para quem.",
    "projects.title": "Projetos",
    "projects.name": "Nome do projeto",
    "projects.desc": "Uma ou duas frases sobre o projeto e o teu papel.",
    "about.title": "Sobre mim",
    "about.p1": "Conta aqui um pouco da tua história: o que te motiva, como trabalhas, o que te distingue.",
    "about.p2": "Um segundo parágrafo com interesses, formação ou o tipo de trabalho que procuras.",
    "experience.title": "Experiência",
    "experience.now": "2024 — hoje",
    "experience.role": "Cargo",
    "experience.company": "Empresa",
    "experience.degree": "Curso",
    "experience.uni": "Universidade",
    "contact.title": "Vamos falar?",
    "contact.lead": "Encontra-me aqui.",
  },
};

function setLang(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text) el.innerHTML = text;
  });
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang);
  });
  try { localStorage.setItem("lang", lang); } catch {}
}

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

let saved = null;
try { saved = localStorage.getItem("lang"); } catch {}
setLang(saved || (navigator.language.startsWith("pt") ? "pt" : "en"));
