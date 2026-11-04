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
    "nav.overview": "← See all the works",
    "e.guided": "Guided tour", "e.free": "Free visit",
    "end.line": "End of the exhibition", "end.wall": "See all the works on one wall", "end.write": "Write to Leonor",
    "e.quote": "It is a truth universally acknowledged, that a young professional in possession of a portfolio must be in want of visitors.",
    "e.cite": "— The curators",
    "act.flyer": "Flyer", "act.contact": "Contact",
    "flyer.soon": "The exhibition flyer is still at the printer's. In the meantime, the works:",
    "guide.open": "Audio guide",
    "guide.soon": "The audio guide is being recorded — coming soon.",
    "label.read": "Read the label",
    "label.write": "Write her a letter →",
    "close": "Close",
    "mail.name": "Your name", "mail.email": "Your email", "mail.msg": "Your message",
    "mail.send": "Seal & send", "mail.sending": "Sending…",
    "mail.ok": "Your letter is on its way. Thank you!",
    "mail.err": "The owl got lost. Please try again in a moment.",
    "mail.off": "The post office isn't open yet — this form will work soon.",
  },
  pt: {
    "nav.overview": "← Ver todas as obras",
    "e.guided": "Visita guiada", "e.free": "Visita livre",
    "end.line": "Fim da exposição", "end.wall": "Ver todas as obras numa parede", "end.write": "Escrever à Leonor",
    "e.quote": "É uma verdade universalmente reconhecida que uma jovem profissional, na posse de um portfólio, há de andar à procura de quem o queira ver.",
    "e.cite": "— A curadoria",
    "act.flyer": "Folheto", "act.contact": "Contacto",
    "flyer.soon": "O folheto da exposição ainda está na gráfica. Entretanto, as obras:",
    "guide.open": "Audioguia",
    "guide.soon": "O audioguia está a ser gravado — em breve.",
    "label.read": "Ler a legenda",
    "label.write": "Escreve-lhe uma carta →",
    "close": "Fechar",
    "mail.name": "O teu nome", "mail.email": "O teu email", "mail.msg": "A tua mensagem",
    "mail.send": "Selar e enviar", "mail.sending": "A enviar…",
    "mail.ok": "A tua carta já vai a caminho. Obrigada!",
    "mail.err": "A coruja perdeu-se. Tenta outra vez daqui a pouco.",
    "mail.off": "Os correios ainda não abriram — este formulário vai funcionar em breve.",
  },
};

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
  $("title-img").src = `img/title-${lang}.webp`;
  $("title-img").alt = `Leonor. ${t("e.quote")} ${t("e.cite")}`;
  $("sheet-close").setAttribute("aria-label", t("close"));
}

function setLang(next) {
  lang = next;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  try { localStorage.setItem("lang", lang); } catch {}
  translate();
  buildComposition();
  buildPath();
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

// ---------- The exhibition: one vertical walk ----------
// How tall each painting hangs (% of screen height) and its proportions, so nothing jumps while images load
const size = { 1: 84, 2: 90, 3: 86, 4: 84, 5: 80, 6: 86, 7: 76, 8: 86 };
const ratio = { 1: 1.1109, 2: 0.6599, 3: 0.7293, 4: 0.9648, 5: 1.2827, 6: 0.7633, 7: 1.362, 8: 0.7552 };

const tour = $("tour");
const stops = () => [...$("path").children];
const seenStops = new Set([works[0].slug]); // the first painting peeks in under the title
let current = 0;

// Each painting settles into place the first time it comes into view
const arrivals = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (!e.isIntersecting) return;
  e.target.classList.add("seen");
  seenStops.add(e.target.dataset.slug);
}), { root: tour, rootMargin: "0px 0px 20% 0px" }); // starts just before it enters the screen

function buildPath() {
  $("path").innerHTML = works.map((w) => `
    <section class="stop${seenStops.has(w.slug) ? " seen" : ""}" data-slug="${w.slug}" aria-label="${w.n}. ${w.title[lang]}">
      <img class="frame" src="img/${pad(w.n)}-frame.webp" srcset="img/${pad(w.n)}-frame.webp 1300w, img/${pad(w.n)}-frame-xl.webp 2000w" sizes="(max-width: 860px) 90vw, 62vw"
        alt="${w.title[lang]}" style="--s:${size[w.n]};--ar:${ratio[w.n]}" loading="${w.n <= 2 ? "eager" : "lazy"}">
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
  stops().forEach((s) => arrivals.observe(s));
  wireSheetOpeners($("path"));
  wireLabels();

  $("route-dots").innerHTML = works.map((w, i) => `
    <li style="top:${(i / (works.length - 1)) * 100}%"><button type="button" data-stop="${i}" aria-label="${w.n}. ${w.title[lang]}">
      <span class="r-name">${w.title[lang]}</span><span class="r-dot"></span><span class="r-no">${w.n}</span>
    </button></li>`).join("");
  $("route-dots").querySelectorAll("[data-stop]").forEach((b) => b.addEventListener("click", () => showStop(+b.dataset.stop, true)));

  $("flyer-list").innerHTML = works.map((w, i) => `<li><button type="button" data-visit="${i}">${w.title[lang]}</button></li>`).join("");
  $("flyer-list").querySelectorAll("[data-visit]").forEach((b) => b.addEventListener("click", () => {
    closeSheet();
    visit(+b.dataset.visit);
  }));
}

const centres = () => stops().map((s) => s.offsetTop + s.offsetHeight / 2);

function showStop(i, smooth) {
  zoomOut();
  tour.scrollTo({ top: centres()[i] - tour.clientHeight / 2, behavior: smooth && !reduced ? "smooth" : "instant" });
}
// From anywhere: walk to a painting, or come back from the wall first
function visit(i) {
  if (document.body.dataset.view === "tour") showStop(i, true);
  else location.hash = works[i].slug;
}

// ---------- Scrolling: the lights, the top bar and the line all follow the visitor ----------
function onTourScroll() {
  if (document.body.dataset.view !== "tour") return; // a late scroll event after leaving for the wall
  const p = Math.min(1, tour.scrollTop / $("hero").offsetHeight || 0);
  document.body.style.setProperty("--p", p.toFixed(3));
  document.body.classList.toggle("past-hero", p > 0.55);

  // where the middle of the screen is along the eight paintings, from 0 to 7
  const c = centres(), y = tour.scrollTop + tour.clientHeight / 2, last = c.length - 1;
  let at = 0;
  while (at < last && c[at + 1] <= y) at++;
  const f = at === last ? last : Math.max(0, at + (y - c[at]) / (c[at + 1] - c[at]));
  $("route-fill").style.transform = `scaleY(${f / last})`;
  current = Math.round(f);
  $("route-dots").querySelectorAll("li").forEach((li, i) => {
    li.classList.toggle("here", i === current);
    li.classList.toggle("done", i < f);
  });

  // a reload or the back button returns to the same painting
  const here = p > 0.5 ? works[current].slug : "intro";
  if (location.hash.slice(1) !== here) history.replaceState(null, "", "#" + here);
}
tour.addEventListener("scroll", () => requestAnimationFrame(onTourScroll), { passive: true });
tour.addEventListener("wheel", () => zoomOut(), { passive: true });
$("go-guided").addEventListener("click", () => showStop(0, true));

// ---------- Leaning in to read a label ----------
// The wall (paintings and background) zooms in on the label instead of opening a window
let zoomed = null;

function zoomIn(label) {
  if (matchMedia("(max-width: 860px)").matches) return; // already at reading size on phones
  const r = label.getBoundingClientRect();
  const s = Math.min((innerWidth * 0.3) / r.width, (innerHeight * 0.82) / r.height);
  const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  const tx = innerWidth * 0.62, ty = innerHeight * 0.5;
  tour.style.transform = `translate(${tx - s * cx}px, ${ty - s * cy}px) scale(${s})`;
  // the forest behind moves a little less, for depth
  const b = 1 + (s - 1) * 0.45;
  $("wall-bg").style.transform = `translate(${tx - b * cx}px, ${ty - b * cy}px) scale(${b})`;
  zoomed = label;
  label.classList.add("read");
  document.body.classList.add("zoomed");
}
function zoomOut() {
  if (!zoomed) return;
  tour.style.transform = "";
  $("wall-bg").style.transform = "";
  zoomed.classList.remove("read");
  zoomed.querySelector(".audio-note").classList.remove("show");
  zoomed = null;
  document.body.classList.remove("zoomed");
}

function wireLabels() {
  tour.querySelectorAll(".label").forEach((label) => {
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

// ---------- Flyer and letter ----------
const sheetOpen = () => !$("sheet").hidden;

function openSheet(kind) {
  zoomOut();
  document.querySelectorAll("[data-sheet]").forEach((el) => (el.hidden = el.dataset.sheet !== kind));
  $("sheet-card").setAttribute("aria-label", t(kind === "flyer" ? "act.flyer" : "act.contact"));
  $("sheet").hidden = false;
  $("sheet-close").focus({ preventScroll: true });
}
function closeSheet() { $("sheet").hidden = true; }

function wireSheetOpeners(root) {
  root.querySelectorAll("[data-open]").forEach((b) => b.addEventListener("click", (e) => { e.stopPropagation(); openSheet(b.dataset.open); }));
}
wireSheetOpeners(document.querySelector(".actions"));
wireSheetOpeners(document.querySelector(".end"));
$("sheet-close").addEventListener("click", closeSheet);
$("sheet").addEventListener("click", (e) => { if (e.target === $("sheet")) closeSheet(); });

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { zoomOut(); return closeSheet(); }
  if (sheetOpen() || document.body.dataset.view !== "tour") return;
  const atTitle = !document.body.classList.contains("past-hero");
  if (["ArrowDown", "ArrowRight", "PageDown"].includes(e.key)) {
    e.preventDefault();
    if (atTitle) showStop(0, true);
    else if (current < works.length - 1) showStop(current + 1, true);
    else tour.scrollTo({ top: tour.scrollHeight, behavior: reduced ? "instant" : "smooth" });
  }
  if (["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key)) {
    e.preventDefault();
    if (current > 0) showStop(current - 1, true);
    else tour.scrollTo({ top: 0, behavior: reduced ? "instant" : "smooth" });
  }
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
  const view = i >= 0 || hash === "intro" || hash === "entrance" ? "tour" : hash === "gallery" ? "gallery" : "splash";
  const was = document.body.dataset.view;
  document.body.dataset.view = view;
  $("splash").hidden = view !== "splash";
  $("tour").hidden = view !== "tour";
  $("gallery").hidden = view !== "gallery";
  closeSheet();
  zoomOut();
  if (view === "gallery") {
    // On phones the composition is wider than the screen: start in the middle of the wall
    const g = $("gallery");
    g.scrollLeft = (g.scrollWidth - g.clientWidth) / 2;
  }
  if (view === "tour") {
    if (i >= 0) showStop(i, was === "tour");
    else tour.scrollTo({ top: 0, behavior: was === "tour" && !reduced ? "smooth" : "instant" });
    onTourScroll();
  }
}
window.addEventListener("hashchange", render);
window.addEventListener("resize", onTourScroll);

document.querySelectorAll("[data-pick]").forEach((b) => b.addEventListener("click", () => {
  setLang(b.dataset.pick);
  location.hash = "intro";
}));

// ---------- Start ----------
let saved = null;
try { saved = localStorage.getItem("lang"); } catch {}
setLang(saved || (navigator.language.startsWith("pt") ? "pt" : "en"));
