const translations = {
  en: {
    "nav.glance": "Life",
    "nav.boxes": "Projects",
    "nav.work": "Work",
    "nav.bag": "Skills",
    "hero.hi": "hi, I'm",
    "hero.lead": "A short line about what you do will go here.",
    "glance.title": "My life at a glance",
    "platforms.title": "Platforms I use",
    "boxes.title": "Open the boxes",
    "boxes.hint": "click to open ↓",
    "boxes.cover": "Cover letter",
    "boxes.coverText": "Why I'd love to work with you.",
    "boxes.read": "Read it →",
    "boxes.linkedinText": "Let's connect.",
    "boxes.visit": "Visit →",
    "boxes.resume": "Resume",
    "boxes.resumeText": "My experience, all on one page.",
    "boxes.download": "Open →",
    "boxes.project": "Project",
    "boxes.projectText": "A short description of the project.",
    "boxes.see": "See it →",
    "work.photo": "your photo here",
    "work.title": "My work",
    "work.item": "Work title",
    "bag.title": "What's in my bag",
    "bag.s1": "Creativity",
    "bag.s2": "Communication",
    "bag.s3": "Organisation",
    "bag.s4": "Content creation",
    "bag.s5": "Design",
    "bag.s6": "Languages",
    "footer": "made with care",
  },
  pt: {
    "nav.glance": "Vida",
    "nav.boxes": "Projetos",
    "nav.work": "Trabalho",
    "nav.bag": "Skills",
    "hero.hi": "olá, sou a",
    "hero.lead": "Aqui vai uma frase curta sobre o que fazes.",
    "glance.title": "A minha vida num relance",
    "platforms.title": "Plataformas que uso",
    "boxes.title": "Abre as caixas",
    "boxes.hint": "clica para abrir ↓",
    "boxes.cover": "Carta de apresentação",
    "boxes.coverText": "Porque adorava trabalhar contigo.",
    "boxes.read": "Ler →",
    "boxes.linkedinText": "Vamos ligar-nos.",
    "boxes.visit": "Visitar →",
    "boxes.resume": "Currículo",
    "boxes.resumeText": "A minha experiência numa página.",
    "boxes.download": "Abrir →",
    "boxes.project": "Projeto",
    "boxes.projectText": "Uma descrição curta do projeto.",
    "boxes.see": "Ver →",
    "work.photo": "a tua foto aqui",
    "work.title": "O meu trabalho",
    "work.item": "Título do trabalho",
    "bag.title": "O que há na minha mala",
    "bag.s1": "Criatividade",
    "bag.s2": "Comunicação",
    "bag.s3": "Organização",
    "bag.s4": "Criação de conteúdo",
    "bag.s5": "Design",
    "bag.s6": "Línguas",
    "footer": "feito com carinho",
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

// Boxes: open/close
document.querySelectorAll(".box .lid").forEach((lid) => {
  lid.addEventListener("click", () => {
    const box = lid.parentElement;
    const open = box.classList.toggle("open");
    lid.setAttribute("aria-expanded", open);
  });
});

// Mosaic placeholders (until real photos are added to the HTML)
const mosaic = document.getElementById("mosaic");
if (mosaic && !mosaic.children.length) {
  const colors = ["#ffd23f", "#ff5fa2", "#3a86ff", "#2ec4b6", "#ff7a1a", "#9b5de5"];
  for (let i = 0; i < 32; i++) {
    const d = document.createElement("div");
    d.className = "pic";
    d.style.background = colors[i % colors.length];
    d.style.setProperty("--r", `${(Math.random() * 10 - 5).toFixed(1)}deg`);
    mosaic.appendChild(d);
  }
}
