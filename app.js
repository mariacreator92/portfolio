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
    "g.exhibit": "Exhibition:", "g.exhibitVal": "Portfolio", "g.works": "Works:",
    "g.hint": "Click a painting to step inside.",
    "room.label": "Room", "room.back": "Back to the gallery",
    "inv.title": "Catalogue of objects",
    "inv.o1": "Passport", "inv.s1": "Languages · Portuguese & English",
    "inv.o2": "Notebook & pen", "inv.s2": "Organisation & planning",
    "inv.o3": "Colour swatches", "inv.s3": "Visual sense & design",
    "inv.o4": "Phone", "inv.s4": "Social media & content",
    "inv.o5": "Earphones", "inv.s5": "Listening & communication",
    "inv.o6": "Watch", "inv.s6": "Time management",
    "craft.title": "Open a drawer",
    "lib.title": "Take a book from the shelf",
    "lib.edu": "Education", "lib.work": "Experience",
    "lib.placeholder": "Role · years — a line or two about what you did here.",
    "lib.cv": "Full résumé (PDF)",
    "mail.title": "Write her a letter",
    "mail.dear": "Dear Leonor,", "mail.name": "Your name", "mail.email": "Your email", "mail.msg": "Your message",
    "mail.send": "Seal & send", "mail.sending": "Sending…",
    "mail.ok": "Your letter is on its way. Thank you!",
    "mail.err": "The owl got lost. Please try again in a moment.",
    "mail.off": "The post office isn't open yet — this form will work soon.",
  },
  pt: {
    "g.exhibit": "Exposição:", "g.exhibitVal": "Portfólio", "g.works": "Obras:",
    "g.hint": "Clica num quadro para entrar.",
    "room.label": "Sala", "room.back": "Voltar à galeria",
    "inv.title": "Catálogo de objetos",
    "inv.o1": "Passaporte", "inv.s1": "Línguas · Português e Inglês",
    "inv.o2": "Caderno e caneta", "inv.s2": "Organização e planeamento",
    "inv.o3": "Amostras de cor", "inv.s3": "Sentido estético e design",
    "inv.o4": "Telemóvel", "inv.s4": "Redes sociais e conteúdo",
    "inv.o5": "Auriculares", "inv.s5": "Saber ouvir e comunicar",
    "inv.o6": "Relógio", "inv.s6": "Gestão de tempo",
    "craft.title": "Abre uma gaveta",
    "lib.title": "Tira um livro da estante",
    "lib.edu": "Formação", "lib.work": "Experiência",
    "lib.placeholder": "Cargo · anos — uma ou duas linhas sobre o que fizeste aqui.",
    "lib.cv": "Currículo completo (PDF)",
    "mail.title": "Escreve-lhe uma carta",
    "mail.dear": "Querida Leonor,", "mail.name": "O teu nome", "mail.email": "O teu email", "mail.msg": "A tua mensagem",
    "mail.send": "Selar e enviar", "mail.sending": "A enviar…",
    "mail.ok": "A tua carta já vai a caminho. Obrigada!",
    "mail.err": "A coruja perdeu-se. Tenta outra vez daqui a pouco.",
    "mail.off": "Os correios ainda não abriram — este formulário vai funcionar em breve.",
  },
};

const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
const pad = (n) => String(n).padStart(2, "0");
let lang = "en";
const t = (key) => ui[lang][key] || key;

// ---------- Language ----------
function translate(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = ui[lang][el.dataset.i18n];
    if (text) el.textContent = text;
  });
}

function setLang(next) {
  lang = next;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  try { localStorage.setItem("lang", lang); } catch {}
  translate();
  buildWall();
  render(false);
}

document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

// ---------- Gallery wall ----------
// Height of each painting on the wall (px, desktop) — a salon-style hang in two rows
const hang = { 1: 230, 2: 290, 3: 250, 4: 330, 5: 210, 6: 260, 7: 270, 8: 200 };

function buildWall() {
  document.getElementById("wall").innerHTML = works.map((w) => `
    ${w.n === 5 ? '<span class="row-break"></span>' : ""}
    <a href="#${w.slug}" class="art" style="--h:${hang[w.n]}px">
      <img src="img/${pad(w.n)}-frame.webp" alt="${w.title[lang]}" loading="${w.n <= 4 ? "eager" : "lazy"}">
      <span class="plaque"><b>${roman[w.n - 1]}.</b> ${w.title[lang]}</span>
    </a>`).join("");
}

// ---------- Rooms ----------
const $ = (id) => document.getElementById(id);

function render(scroll = true) {
  const w = works.find((x) => x.slug === location.hash.slice(1));
  $("gallery").hidden = !!w;
  $("room").hidden = !w;
  if (!w) return;

  const i = works.indexOf(w);
  const prev = works[(i + works.length - 1) % works.length];
  const next = works[(i + 1) % works.length];

  $("room-img").src = `img/${pad(w.n)}-canvas.webp`;
  $("room-img").alt = w.title[lang];
  $("room-num").textContent = roman[w.n - 1];
  $("room-title").textContent = w.title[lang] + ".";
  $("room-medium").textContent = `${w.medium[lang]}, ${w.year}`;
  $("room-text").textContent = w.text[lang];
  $("prev").href = "#" + prev.slug;
  $("prev").textContent = "← " + prev.title[lang];
  $("next").href = "#" + next.slug;
  $("next").textContent = next.title[lang] + " →";

  const extra = $("room-extra");
  const tpl = document.getElementById("extra-" + w.slug);
  if (extra.dataset.slug !== w.slug) {
    extra.innerHTML = "";
    extra.dataset.slug = w.slug;
    if (tpl) { extra.appendChild(tpl.content.cloneNode(true)); wireExtras(extra); }
  }
  translate(extra);
  if (scroll) {
    $("room").classList.remove("enter"); void $("room").offsetWidth; $("room").classList.add("enter");
    window.scrollTo({ top: 0, behavior: "instant" });
  }
}
window.addEventListener("hashchange", () => render());

// ---------- Interactive bits inside rooms ----------
function wireExtras(root) {
  // Drawers
  root.querySelectorAll(".drawer").forEach((d) => d.addEventListener("click", () => {
    const open = d.classList.toggle("open");
    d.setAttribute("aria-expanded", open);
  }));

  // Books
  root.querySelectorAll(".book").forEach((b) => b.addEventListener("click", () => {
    root.querySelectorAll(".book").forEach((x) => x.classList.toggle("out", x === b && !x.classList.contains("out")));
    const box = root.querySelector("#book-open");
    box.hidden = !b.classList.contains("out");
    box.querySelector("#book-kind").dataset.i18n = b.dataset.detail === "edu" ? "lib.edu" : "lib.work";
    box.querySelector("#book-name").textContent = b.textContent;
    translate(box);
  }));

  // Letter (Web3Forms)
  const form = root.querySelector("#letter");
  if (form) form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const status = form.querySelector("#letter-status");
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
}

// ---------- Start ----------
let saved = null;
try { saved = localStorage.getItem("lang"); } catch {}
setLang(saved || (navigator.language.startsWith("pt") ? "pt" : "en"));
