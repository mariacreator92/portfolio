const translations = {
  en: {
    "g.exhibit": "Exhibition:",
    "g.exhibitVal": "Portfolio",
    "g.year": "Year:",
    "g.hint": "Click a frame to step inside.",
    "room.label": "Room",
    "room.back": "← Back to the gallery",
    "room.next": "Next room →",
    "glance.title": "My life at a glance",
    "platforms.title": "Platforms I use",
    "boxes.title": "Open the boxes",
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
  },
  pt: {
    "g.exhibit": "Exposição:",
    "g.exhibitVal": "Portfólio",
    "g.year": "Ano:",
    "g.hint": "Clica numa moldura para entrar.",
    "room.label": "Sala",
    "room.back": "← Voltar à galeria",
    "room.next": "Próxima sala →",
    "glance.title": "A minha vida num relance",
    "platforms.title": "Plataformas que uso",
    "boxes.title": "Abre as caixas",
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

// Gallery ↔ rooms: the URL hash decides which room is open
const rooms = ["glance", "platforms", "boxes", "work", "bag"];
const gallery = document.getElementById("gallery");
const roomNav = document.querySelector(".room-nav");
const next = document.getElementById("next");

function show() {
  const id = location.hash.slice(1);
  const current = rooms.includes(id) ? id : null;
  gallery.hidden = !!current;
  roomNav.hidden = !current;
  rooms.forEach((r) => (document.getElementById(r).hidden = r !== current));
  if (current) next.href = "#" + rooms[(rooms.indexOf(current) + 1) % rooms.length];
  window.scrollTo({ top: 0, behavior: "instant" });
}
window.addEventListener("hashchange", show);
show();

// Boxes: open/close
document.querySelectorAll(".box .lid").forEach((lid) => {
  lid.addEventListener("click", () => {
    const open = lid.parentElement.classList.toggle("open");
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
