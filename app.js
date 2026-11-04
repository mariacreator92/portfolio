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
    "nav.overview": "See all the works", "prev": "Previous", "next": "Next",
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
    "nav.overview": "Ver todas as obras", "prev": "Anterior", "next": "Seguinte",
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
  $("prev").setAttribute("aria-label", t("prev"));
  $("next").setAttribute("aria-label", t("next"));
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

// ---------- The exhibition: one continuous wall ----------
// Each painting's proportions, so nothing jumps while images load. Its size comes from the composition
// above (--w), so the paintings keep the same scale against each other on the wall.
const ratio = { 1: 1.1109, 2: 0.6599, 3: 0.7293, 4: 0.9648, 5: 1.2827, 6: 0.7633, 7: 1.362, 8: 0.7552 };

const walk = $("walk");
const stops = () => [...walk.querySelectorAll(".stop")]; // the opening text, the 8 paintings, the whole collection
const lastStop = works.length + 1;
let current = 0;

function buildPath() {
  measured = null;
  $("path").innerHTML = works.map((w) => `
    <section class="stop work" data-slug="${w.slug}" aria-label="${w.n}. ${w.title[lang]}">
      <img class="frame" src="img/${pad(w.n)}-frame.webp" srcset="img/${pad(w.n)}-frame.webp 1300w, img/${pad(w.n)}-frame-xl.webp 2000w" sizes="(max-width: 860px) 90vw, 58vw"
        alt="${w.title[lang]}" style="--w:${hang[w.n].w};--ar:${ratio[w.n]}" loading="${w.n <= 2 ? "eager" : "lazy"}" draggable="false">
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
  wireSheetOpeners($("path"));
  wireLabels();

  $("flyer-list").innerHTML = works.map((w, i) => `<li><button type="button" data-visit="${i + 1}">${w.title[lang]}</button></li>`).join("");
  $("flyer-list").querySelectorAll("[data-visit]").forEach((b) => b.addEventListener("click", () => {
    closeSheet();
    travel(+b.dataset.visit);
  }));
}

// ---------- Walking: the wheel moves you along the wall, easing to a stop ----------
const touch = matchMedia("(hover: none)"); // phones swipe natively and snap from CSS
const maxLeft = () => walk.scrollWidth - walk.clientWidth;
const clampLeft = (x) => Math.max(0, Math.min(maxLeft(), x));
// where the wall has to be for a stop to stand in the middle of the screen
const leftOf = (s) => (s === 0 ? 0 : clampLeft(centres()[s] - walk.clientWidth / 2));

let pos = 0, target = 0, gliding = false, settleTimer;
let heading = 1; // which way you were walking

// The middle of each stop, measured once and again only when the layout changes
let measured = null;
const centres = () => (measured ||= stops().map((s) => s.offsetLeft + s.offsetWidth / 2));

// A point on the wall as a position between stops: 0 is the opening text, 1–8 the paintings, 9 the collection
function stopAt(x) {
  const c = centres();
  let at = 0;
  while (at < lastStop && c[at + 1] <= x) at++;
  return at === lastStop ? lastStop : Math.max(0, at + (x - c[at]) / (c[at + 1] - c[at]));
}

function stepGlide() {
  pos += (target - pos) * 0.17;
  if (Math.abs(target - pos) < 0.5) { pos = target; gliding = false; }
  walk.scrollLeft = pos;
  if (gliding) requestAnimationFrame(stepGlide);
}
function glide(to) {
  target = clampLeft(to);
  if (reduced) { pos = target; walk.scrollLeft = pos; return; }
  if (touch.matches) { walk.scrollTo({ left: target, behavior: "smooth" }); return; }
  if (!gliding) { gliding = true; pos = walk.scrollLeft; requestAnimationFrame(stepGlide); }
}
function jump(s) {
  gliding = false;
  pos = target = leftOf(s);
  walk.scrollLeft = pos;
  onWalk();
}
// After stopping, the wall centres a painting: the one you were walking towards, unless you barely moved
function settle() {
  const wide = stops()[lastStop];
  if (walk.scrollLeft >= wide.offsetLeft && wide.offsetWidth > walk.clientWidth) return; // the phone pans freely along the last wall
  const along = stopAt(target + walk.clientWidth / 2), from = Math.floor(along), part = along - from;
  glide(leftOf(heading > 0 ? (part > 0.15 ? from + 1 : from) : (part < 0.85 ? from : from + 1)));
}
// Neighbours are walked to; anything further away is a quick fade, not a long trip
function travel(s) {
  zoomOut();
  s = Math.max(0, Math.min(lastStop, s));
  if (Math.abs(s - current) <= 2 || reduced) return glide(leftOf(s));
  document.body.classList.add("cut");
  setTimeout(() => { jump(s); document.body.classList.remove("cut"); }, 340);
}

walk.addEventListener("wheel", (e) => {
  e.preventDefault();
  if (zoomed) return zoomOut();
  const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
  if (d) heading = Math.sign(d);
  glide(target + d * (e.deltaMode === 1 ? 30 : 1) * 2.2);
  clearTimeout(settleTimer);
  settleTimer = setTimeout(settle, 180);
}, { passive: false });

// Drag with the mouse (touch screens swipe natively)
let drag = null;
walk.addEventListener("pointerdown", (e) => {
  if (zoomed || e.pointerType !== "mouse" || e.button !== 0 || e.target.closest("button, .label")) return;
  gliding = false;
  drag = { x: e.clientX, left: walk.scrollLeft, moved: false };
});
window.addEventListener("pointermove", (e) => {
  if (!drag) return;
  const dx = e.clientX - drag.x;
  if (!drag.moved && Math.abs(dx) > 6) { drag.moved = true; walk.classList.add("dragging"); }
  if (drag.moved) { heading = dx < 0 ? 1 : -1; pos = target = walk.scrollLeft = clampLeft(drag.left - dx); }
});
window.addEventListener("pointerup", () => {
  if (!drag) return;
  const { moved } = drag;
  drag = null;
  walk.classList.remove("dragging");
  if (!moved) return;
  settleTimer = setTimeout(settle, 60);
  // swallow the click that ends a drag
  walk.addEventListener("click", (ev) => { ev.stopPropagation(); ev.preventDefault(); }, { capture: true, once: true });
});

$("prev").addEventListener("click", () => travel(current - 1));
$("next").addEventListener("click", () => travel(current + 1));

// ---------- Everything that follows the visitor: the light, the forest, the line, the address ----------
const light = document.querySelector(".room-dim");

function onWalk() {
  if (document.body.dataset.view !== "walk") return;
  const w = walk.clientWidth, x = walk.scrollLeft + w / 2;
  if (!gliding && !drag) pos = target = walk.scrollLeft; // a swipe moved the wall

  const f = stopAt(x);
  current = Math.round(f);

  // the spotlight comes up as you arrive in front of a painting
  const lit = 1 - Math.min(1, Math.abs(x - centres()[current]) / (w * 0.32));
  light.style.opacity = (0.3 * (1 - lit)).toFixed(3);
  // the forest is further away, so it slides past more slowly
  $("wall-bg").style.translate = `${(-30 * walk.scrollLeft / (maxLeft() || 1)).toFixed(3)}vw 0`;
  document.body.classList.toggle("past-title", walk.scrollLeft > w * 0.3);
  document.body.classList.toggle("at-end", current === lastStop);

  $("prev").hidden = current === 0;
  $("next").hidden = current === lastStop;

  // a reload or the back button returns to the same place on the wall
  const place = current === 0 ? "intro" : current === lastStop ? "gallery" : works[current - 1].slug;
  if (location.hash.slice(1) !== place) history.replaceState(null, "", "#" + place);
}
walk.addEventListener("scroll", () => requestAnimationFrame(onWalk), { passive: true });

// ---------- Leaning in to read a label ----------
// The wall (paintings and background) zooms in on the label instead of opening a window
let zoomed = null;

function zoomIn(label) {
  if (matchMedia("(max-width: 860px)").matches) return; // already at reading size on phones
  const r = label.getBoundingClientRect();
  const s = Math.min((innerWidth * 0.3) / r.width, (innerHeight * 0.82) / r.height);
  const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  const tx = innerWidth * 0.62, ty = innerHeight * 0.5;
  walk.style.transform = `translate(${tx - s * cx}px, ${ty - s * cy}px) scale(${s})`;
  // the forest behind moves a little less, for depth
  const b = 1 + (s - 1) * 0.45;
  $("wall-bg").style.transform = `translate(${tx - b * cx}px, ${ty - b * cy}px) scale(${b})`;
  zoomed = label;
  label.classList.add("read");
  document.body.classList.add("zoomed");
}
function zoomOut() {
  if (!zoomed) return;
  walk.style.transform = "";
  $("wall-bg").style.transform = "";
  zoomed.classList.remove("read");
  zoomed.querySelector(".audio-note").classList.remove("show");
  zoomed = null;
  document.body.classList.remove("zoomed");
}

function wireLabels() {
  walk.querySelectorAll(".label").forEach((label) => {
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
$("sheet-close").addEventListener("click", closeSheet);
$("sheet").addEventListener("click", (e) => { if (e.target === $("sheet")) closeSheet(); });

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { zoomOut(); return closeSheet(); }
  if (sheetOpen() || document.body.dataset.view !== "walk") return;
  if (["ArrowRight", "ArrowDown", "PageDown"].includes(e.key)) { e.preventDefault(); travel(current + 1); }
  if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); travel(current - 1); }
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
  const s = i >= 0 ? i + 1 : hash === "gallery" ? lastStop : hash === "intro" || hash === "entrance" ? 0 : -1;
  const was = document.body.dataset.view;
  document.body.dataset.view = s < 0 ? "splash" : "walk";
  $("splash").hidden = s >= 0;
  walk.hidden = s < 0;
  measured = null;
  closeSheet();
  zoomOut();
  if (s < 0) return;
  if (was === "walk") travel(s);
  else jump(s);
}
window.addEventListener("hashchange", render);
window.addEventListener("resize", () => {
  measured = null;
  if (document.body.dataset.view === "walk") jump(current);
});

document.querySelectorAll("[data-pick]").forEach((b) => b.addEventListener("click", () => {
  setLang(b.dataset.pick);
  location.hash = "intro";
}));

// ---------- Start ----------
let saved = null;
try { saved = localStorage.getItem("lang"); } catch {}
setLang(saved || (navigator.language.startsWith("pt") ? "pt" : "en"));
