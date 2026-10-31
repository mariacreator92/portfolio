// ---------- The collection ----------
const works = [
  {
    slug: "perfect-view", n: 1, year: 2003,
    title: { en: "Perfect View", pt: "Vista Perfeita" },
    medium: { en: "Oil on memory and sea air", pt: "Óleo sobre memória e maresia" },
    text: {
      pt: "Uma praia de águas calmas, uma serra ao fundo e algumas figuras à beira-mar. O lugar exato permanece em segredo, por expressa vontade da artista, que neste ponto se mostra inflexível: é aqui que guarda as suas memórias mais queridas com a família, e há tesouros que nem a mais insistente das curiosidades conseguirá arrancar-lhe.",
      en: "A beach of calm waters, hills on the horizon and a few figures by the shore. The exact location remains a secret, at the express wish of the artist, who on this point is quite immovable: here she keeps her dearest memories with her family, and there are treasures which not even the most persistent curiosity shall prise from her.",
    },
  },
  {
    slug: "last-touch", n: 2, year: 2025,
    title: { en: "Last Touch", pt: "Último Toque" },
    medium: { en: "Oil on sweat and persistence", pt: "Óleo sobre suor e persistência" },
    text: {
      pt: "Durante largos anos, este foi para a artista uma segunda morada, lugar de vitórias celebradas com justo entusiasmo e de derrotas digeridas com paciência um pouco menor. O desporto acompanha-a há mais de quinze anos, e nele se encontra a origem de muito do que hoje leva para o ofício: o espírito de equipa, a disciplina e a difícil arte de recomeçar depois de perder um ponto.",
      en: "For many long years, this was a second home to the artist, a place of victories celebrated with proper enthusiasm and defeats endured with rather less patience. Sport has been her companion for more than fifteen years, and in it lie the origins of much of what she now brings to her craft: team spirit, discipline and the difficult art of beginning anew after a point is lost.",
    },
  },
  {
    slug: "home-twice", n: 3, year: 2025,
    title: { en: "Home, Twice", pt: "Dupla Casa" },
    medium: { en: "Oil on ‘saudade’ and time zones", pt: "Óleo sobre saudade e fuso horário" },
    text: {
      pt: "Estas duas tomadas, a americana em cima e a portuguesa em baixo, representam os dois países a que a artista já chamou casa, cada um com o seu sistema, os seus costumes e, naturalmente, a sua língua. Ambas estão livres, à espera de quem saiba ligar-se a cada uma, talento que, convenhamos, nem toda a gente possui. Leonor aprendeu a fazê-lo nas duas e alterna entre elas com naturalidade.",
      en: "These two sockets, the American above and the Portuguese below, stand for the two countries the artist has called home, each with its own system, its own customs and, naturally, its own language. Both stand free, awaiting someone who knows how to connect to each, a talent which, it must be owned, not everyone possesses. Leonor has learned to do so with both, and alternates between them with ease.",
    },
  },
  {
    slug: "leonor", n: 4, year: 2024,
    title: { en: "Leonor", pt: "Leonor" },
    medium: { en: "Oil on late-afternoon light", pt: "Óleo sobre a luz do fim de tarde" },
    text: {
      pt: "Leonor contempla o pôr do sol sem outra ocupação que não a de ver o dia terminar. O artista vê nela um dos maiores luxos da vida, e um lembrete de que a felicidade mora, quase sempre, nas coisas simples. Oferecido por um amigo, é a única obra da coleção que Leonor não assina.",
      en: "Leonor watches the sun go down, with no occupation but that of seeing the day to its close. The artist sees in her one of life's greatest luxuries, and a reminder that happiness resides, almost always, in the simplest of things. A gift from a friend, it is the only work in the collection not signed by Leonor.",
    },
  },
  {
    slug: "inventory", n: 5, year: 2026,
    title: { en: "Inventory", pt: "Inventário" },
    medium: { en: "Oil on years of practice", pt: "Óleo sobre anos de prática" },
    text: {
      pt: "Sobre a cama, espalhado com a desordem de quem sabe exatamente onde está cada coisa, encontra-se tudo aquilo de que a artista não prescinde. Nenhum destes objetos foi adquirido de uma só vez: cada um corresponde a uma competência conquistada ao longo dos anos, à força de prática, de erros e de uma ou outra noite mais longa do que seria desejável. Hoje acompanham-na em cada trabalho que aceita, sem exceção.",
      en: "Upon the bed, scattered with the disorder of one who knows precisely where everything is, lies all that the artist will not do without. None of these objects was acquired at once: each stands for a skill earned over the years, through practice, through mistakes and through the occasional evening rather longer than was desirable. Today they accompany her into every piece of work she undertakes, without exception.",
    },
  },
  {
    slug: "craft", n: 6, year: 2026,
    title: { en: "Craft", pt: "Ofício" },
    medium: { en: "Oil on wood and method", pt: "Óleo sobre madeira e método" },
    text: {
      pt: "Uma cómoda de gavetas fechadas, em que cada gaveta guarda uma das ferramentas da artista, reunidas ao longo dos anos com o cuidado de quem compõe um enxoval. Tal como os velhos mestres guardavam os seus pigmentos, Leonor guarda aqui os instrumentos do ofício, cada um no seu lugar, como é próprio de quem nunca perde tempo à procura daquilo de que precisa.",
      en: "A chest of closed drawers, each holding one of the artist's tools, gathered over the years with all the care of one assembling a trousseau. Just as the old masters kept their pigments, Leonor keeps here the instruments of her craft, each in its proper place, as befits one who never wastes a moment searching for what she needs.",
    },
  },
  {
    slug: "library", n: 7, year: 2025,
    title: { en: "Personal Library", pt: "Biblioteca Pessoal" },
    medium: { en: "Oil on turned pages", pt: "Óleo sobre páginas viradas" },
    text: {
      pt: "A obra maior da coleção reúne, numa só estante, o percurso da artista: à esquerda, os volumes da formação académica; à direita, os da experiência profissional. Cada livro guarda um capítulo, e todos juntos contam uma história que continua a ser escrita.",
      en: "The principal work of the collection gathers the artist's path upon a single shelf: on the left, the volumes of her academic training; on the right, those of her professional experience. Each book holds a chapter, and together they tell a story which is still being written.",
    },
  },
  {
    slug: "correspondence", n: 8, year: 2026,
    title: { en: "Correspondence", pt: "Correspondência" },
    medium: { en: "Oil on ink and hope", pt: "Óleo sobre tinta e esperança" },
    text: {
      pt: "Aos onze anos, como tantos da sua geração, Leonor esperou pela carta de uma certa escola de feitiçaria. A coruja nunca chegou. Enquanto a convocatória continua extraviada, a artista mantém-se, com o bom senso que a caracteriza, disponível para novas oportunidades de trabalho. Escreva-lhe: ela responde a todas as cartas, quer cheguem por coruja, quer por e-mail.",
      en: "At eleven, like so many of her generation, Leonor awaited a letter from a certain school of witchcraft and wizardry. The owl never came. While that summons is still lost in the post, the artist, with her customary good sense, remains open to new professional opportunities. Do write to her: she answers every letter, whether it arrives by owl or by email.",
    },
  },
];

const ui = {
  en: {
    "nav.overview": "← The whole collection",
    "e.quote": "It is a truth universally acknowledged, that a young professional in possession of a portfolio must be in want of someone to see it.",
    "e.cite": "— The curators",
    "e.enter": "Enter the exhibition",
    "desk.flyer": "The exhibition", "desk.contact": "Write to Leonor",
    "flyer.soon": "The exhibition flyer is still at the printer's. Do come back soon.",
    "guide.open": "Audio guide",
    "guide.soon": "The audio guide is being recorded — coming soon.",
    "label.read": "Read the label",
    "label.write": "Write her a letter →",
    "prev": "Previous work", "next": "Next work", "end": "Back to the whole collection", "close": "Close",
    "mail.dear": "Dear Leonor,", "mail.name": "Your name", "mail.email": "Your email", "mail.msg": "Your message",
    "mail.send": "Seal & send", "mail.sending": "Sending…",
    "mail.ok": "Your letter is on its way. Thank you!",
    "mail.err": "The owl got lost. Please try again in a moment.",
    "mail.off": "The post office isn't open yet — this form will work soon.",
  },
  pt: {
    "nav.overview": "← A coleção completa",
    "e.quote": "É uma verdade universalmente reconhecida que uma jovem profissional, na posse de um portfólio, há de andar à procura de quem o queira ver.",
    "e.cite": "— A curadoria",
    "e.enter": "Entrar na exposição",
    "desk.flyer": "A exposição", "desk.contact": "Escrever à Leonor",
    "flyer.soon": "O folheto da exposição ainda está na gráfica. Volta em breve.",
    "guide.open": "Audioguia",
    "guide.soon": "O audioguia está a ser gravado — em breve.",
    "label.read": "Ler a legenda",
    "label.write": "Escreve-lhe uma carta →",
    "prev": "Obra anterior", "next": "Próxima obra", "end": "Voltar à coleção completa", "close": "Fechar",
    "mail.dear": "Querida Leonor,", "mail.name": "O teu nome", "mail.email": "O teu email", "mail.msg": "A tua mensagem",
    "mail.send": "Selar e enviar", "mail.sending": "A enviar…",
    "mail.ok": "A tua carta já vai a caminho. Obrigada!",
    "mail.err": "A coruja perdeu-se. Tenta outra vez daqui a pouco.",
    "mail.off": "Os correios ainda não abriram — este formulário vai funcionar em breve.",
  },
};

const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
const pad = (n) => String(n).padStart(2, "0");
const $ = (id) => document.getElementById(id);
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
let lang = "en";
const t = (key) => ui[lang][key] || key;

// ---------- Language ----------
function translate(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = ui[lang][el.dataset.i18n];
    if (text) el.textContent = text;
  });
  $("enter").setAttribute("aria-label", t("e.enter"));
  $("prev").setAttribute("aria-label", t("prev"));
  $("panel-close").setAttribute("aria-label", t("close"));
}

function setLang(next) {
  lang = next;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  try { localStorage.setItem("lang", lang); } catch {}
  translate();
  buildComposition();
  buildStrip();
  render();
}
document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

// ---------- The whole collection, hung as in Leonor's composition (px on a 1920×1080 wall) ----------
const hang = {
  1: { x: 305, y: 155, w: 455 },
  2: { x: 815, y: 90, w: 335 },
  8: { x: 1203, y: 148, w: 224 },
  3: { x: 1452, y: 145, w: 210 },
  6: { x: 137, y: 590, w: 213 },
  4: { x: 390, y: 605, w: 300 },
  5: { x: 725, y: 635, w: 457 },
  7: { x: 1215, y: 483, w: 547 },
};

function buildComposition() {
  $("composition").innerHTML = works.map((w) => {
    const h = hang[w.n];
    return `<a href="#${w.slug}" class="piece" style="left:${h.x / 19.2}%;top:${h.y / 10.8}%;width:${h.w / 19.2}%">
      <img src="img/${pad(w.n)}-thumb.webp" alt="${w.title[lang]}">
    </a>`;
  }).join("");
}

// ---------- The exhibition wall ----------
// How tall each painting hangs in the exhibition (% of screen height)
const size = { 1: 70, 2: 88, 3: 76, 4: 74, 5: 64, 6: 76, 7: 60, 8: 76 };

function buildStrip() {
  $("strip").innerHTML = works.map((w) => `
    <section class="bay" data-slug="${w.slug}" aria-label="${roman[w.n - 1]}. ${w.title[lang]}">
      <img class="frame" src="img/${pad(w.n)}-frame.webp" alt="${w.title[lang]}" style="--s:${size[w.n]}" loading="${w.n <= 2 ? "eager" : "lazy"}">
      <div class="label" tabindex="0" role="button" aria-label="${t("label.read")}">
        <span class="l-head"><b>${w.title[lang]}.</b> ${w.medium[lang]}<br>${w.year}</span>
        <span class="l-text">${w.text[lang]}</span>
        ${w.slug === "correspondence" ? `<button type="button" class="write" data-open="contact">${t("label.write")}</button>` : ""}
        <button type="button" class="phones" aria-label="${t("guide.open")}" title="${t("guide.open")}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 15v-3a8 8 0 0116 0v3 M4 15h3v5H4z M17 15h3v5h-3z"/></svg>
        </button>
        <span class="audio-note" role="status">${t("guide.soon")}</span>
      </div>
    </section>`).join("");
  wirePanelOpeners($("strip"));
  wireLabels();
}

// ---------- Leaning in to read a label ----------
// The wall (paintings and background) zooms in on the label instead of opening a window
let zoomed = null;

function zoomIn(label) {
  if (matchMedia("(max-width: 860px)").matches) return; // already at reading size on phones
  const r = label.getBoundingClientRect();
  const s = Math.min((innerWidth * 0.3) / r.width, (innerHeight * 0.82) / r.height);
  const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  const tx = innerWidth * 0.62, ty = innerHeight * 0.5;
  strip.style.transform = `translate(${tx - s * cx}px, ${ty - s * cy}px) scale(${s})`;
  // the forest behind moves a little less, for depth
  const b = 1 + (s - 1) * 0.45;
  $("wall-bg").style.transform = `translate(${tx - b * cx}px, ${ty - b * cy}px) scale(${b})`;
  zoomed = label;
  label.classList.add("read");
  document.body.classList.add("zoomed");
}
function zoomOut() {
  if (!zoomed) return;
  strip.style.transform = "";
  $("wall-bg").style.transform = "";
  zoomed.classList.remove("read");
  zoomed.querySelector(".audio-note").classList.remove("show");
  zoomed = null;
  document.body.classList.remove("zoomed");
}

function wireLabels() {
  strip.querySelectorAll(".label").forEach((label) => {
    const toggle = () => (zoomed === label ? zoomOut() : (zoomOut(), zoomIn(label)));
    label.addEventListener("click", (e) => { e.stopPropagation(); toggle(); });
    label.addEventListener("keydown", (e) => {
      if (e.target === label && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); toggle(); }
    });
    label.querySelector(".phones").addEventListener("click", (e) => {
      e.stopPropagation();
      if (zoomed !== label) { zoomOut(); zoomIn(label); }
      label.querySelector(".audio-note").classList.toggle("show");
    });
  });
}
// Clicking anywhere else steps back from the wall
document.addEventListener("click", (e) => { if (zoomed && !e.target.closest(".label")) zoomOut(); });

const strip = $("strip");
const bays = () => [...strip.children];
let current = 0;

function bayLeft(i) {
  return i * bays()[0].offsetWidth;
}
function goTo(i, smooth = true) {
  zoomOut();
  if (i < 0) return;
  if (i >= works.length) { location.hash = "gallery"; return; }
  strip.scrollTo({ left: bayLeft(i), behavior: smooth && !reduced ? "smooth" : "instant" });
  setCurrent(i);
}
function setCurrent(i) {
  current = i;
  const w = works[i];
  $("counter").textContent = `${roman[i]} / ${roman[works.length - 1]}`;
  $("prev").hidden = i === 0;
  $("next").setAttribute("aria-label", t(i === works.length - 1 ? "end" : "next"));
  if (location.hash.slice(1) !== w.slug) history.replaceState(null, "", "#" + w.slug);
}
// Keep the address and counter in step with free scrolling and swiping
let scrollTimer;
strip.addEventListener("scroll", () => {
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    const i = Math.round(strip.scrollLeft / bays()[0].offsetWidth);
    if (i !== current) setCurrent(Math.min(i, works.length - 1));
  }, 80);
});

$("prev").addEventListener("click", () => goTo(current - 1));
$("next").addEventListener("click", () => goTo(current + 1));

// A vertical mouse wheel walks along the wall, one painting per gesture
let wheelLock = 0;
strip.addEventListener("wheel", (e) => {
  if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
  e.preventDefault();
  if (zoomed) return zoomOut();
  if (Date.now() < wheelLock || Math.abs(e.deltaY) < 4) return;
  wheelLock = Date.now() + 650;
  goTo(current + (e.deltaY > 0 ? 1 : -1));
}, { passive: false });

// Drag with the mouse (touch screens swipe natively)
let drag = null;
strip.addEventListener("pointerdown", (e) => {
  if (zoomed || e.pointerType !== "mouse" || e.button !== 0 || e.target.closest("button, .label")) return;
  drag = { x: e.clientX, left: strip.scrollLeft, moved: false };
});
window.addEventListener("pointermove", (e) => {
  if (!drag) return;
  const dx = e.clientX - drag.x;
  if (!drag.moved && Math.abs(dx) > 6) { drag.moved = true; strip.classList.add("dragging"); }
  if (drag.moved) strip.scrollLeft = drag.left - dx;
});
window.addEventListener("pointerup", (e) => {
  if (!drag) return;
  const { moved, x } = drag;
  drag = null;
  strip.classList.remove("dragging");
  if (!moved) return;
  const dx = e.clientX - x;
  goTo(Math.abs(dx) > 60 ? current + (dx < 0 ? 1 : -1) : current);
  // swallow the click that ends a drag
  strip.addEventListener("click", (ev) => { ev.stopPropagation(); ev.preventDefault(); }, { capture: true, once: true });
});

// ---------- Panels: flyer, contact ----------
function openPanel(kind) {
  zoomOut();
  document.querySelectorAll(".panel-body").forEach((b) => (b.hidden = b.dataset.panel !== kind));
  $("panel-card").setAttribute("aria-label", t(kind === "flyer" ? "desk.flyer" : "desk.contact"));
  $("panel").hidden = false;
  $("panel-card").scrollTop = 0;
  $("panel-close").focus();
}
function closePanel() { $("panel").hidden = true; }

function wirePanelOpeners(root) {
  root.querySelectorAll("[data-open]").forEach((b) => b.addEventListener("click", (e) => { e.stopPropagation(); openPanel(b.dataset.open); }));
}
wirePanelOpeners($("desk"));
$("panel-close").addEventListener("click", closePanel);
$("panel").addEventListener("click", (e) => { if (e.target === $("panel")) closePanel(); });

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { zoomOut(); return closePanel(); }
  if (!$("panel").hidden) return;
  const view = document.body.dataset.view;
  if (view === "exhibit" && e.key === "ArrowRight") { e.preventDefault(); goTo(current + 1); }
  if (view === "exhibit" && e.key === "ArrowLeft") { e.preventDefault(); goTo(current - 1); }
  if (view === "intro" && (e.key === "ArrowRight" || e.key === "Enter")) location.hash = "gallery";
});

// Letter (Web3Forms)
const form = $("letter");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const status = $("letter-status");
  if (form.access_key.value.startsWith("YOUR_")) { status.textContent = t("mail.off"); return; }
  status.textContent = t("mail.sending");
  try {
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: new FormData(form) });
    const data = await res.json();
    if (!data.success) throw new Error(data.message);
    form.reset();
    status.textContent = t("mail.ok");
  } catch {
    status.textContent = t("mail.err");
  }
});

// ---------- Views ----------
function render() {
  const hash = location.hash.slice(1);
  const i = works.findIndex((x) => x.slug === hash);
  const view = i >= 0 ? "exhibit" : hash === "gallery" ? "gallery" : hash === "intro" || hash === "entrance" ? "intro" : "splash";
  const was = document.body.dataset.view;
  document.body.dataset.view = view;
  $("splash").hidden = view !== "splash";
  $("intro").hidden = view !== "intro";
  $("gallery").hidden = view !== "gallery";
  $("exhibit").hidden = view !== "exhibit";
  closePanel();
  zoomOut();
  // On phones the composition is wider than the screen: start in the middle of the wall
  if (view === "gallery") { const g = $("gallery"); g.scrollLeft = (g.scrollWidth - g.clientWidth) / 2; }
  if (view === "exhibit") {
    // Arriving from elsewhere: stand straight in front of the chosen painting
    if (was !== "exhibit" || i !== current) goTo(i, was === "exhibit");
    else setCurrent(i);
  }
}
window.addEventListener("hashchange", render);
window.addEventListener("resize", () => { if (document.body.dataset.view === "exhibit") goTo(current, false); });

document.querySelectorAll("[data-pick]").forEach((b) => b.addEventListener("click", () => {
  setLang(b.dataset.pick);
  location.hash = "intro";
}));

// ---------- Start ----------
let saved = null;
try { saved = localStorage.getItem("lang"); } catch {}
setLang(saved || (navigator.language.startsWith("pt") ? "pt" : "en"));
