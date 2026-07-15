const data = window.siteData;
const state = { language: localStorage.getItem("wqh-language") || "zh", filter: "" };

const $ = (id) => document.getElementById(id);
const refs = {
  nav: $("site-nav"), toggle: $("language-toggle"), kicker: $("hero-kicker"), title: $("hero-title"),
  summary: $("hero-summary"), actions: $("hero-actions"), location: $("profile-location"), affiliation: $("profile-affiliation"),
  links: $("profile-links"), portrait: $("portrait"), portraitPlaceholder: $("portrait-placeholder"), aboutKicker: $("about-kicker"),
  aboutTitle: $("about-title"), aboutCopy: $("about-copy"), researchKicker: $("research-kicker"), researchTitle: $("research-title"),
  researchGrid: $("research-grid"), workKicker: $("work-kicker"), workTitle: $("work-title"), filterBar: $("filter-bar"), workGrid: $("work-grid"),
  experienceKicker: $("experience-kicker"), experienceTitle: $("experience-title"), timeline: $("timeline"), outputKicker: $("output-kicker"),
  outputTitle: $("output-title"), outputList: $("output-list"), contactKicker: $("contact-kicker"), contactTitle: $("contact-title"),
  contactCopy: $("contact-copy"), contactLinks: $("contact-links"), footer: $("footer-text"), backToTop: $("back-to-top")
};

function link(label, href, className = "") {
  const el = document.createElement("a");
  el.href = href;
  el.textContent = label;
  el.className = className;
  if (href.startsWith("http")) { el.target = "_blank"; el.rel = "noreferrer"; }
  return el;
}

function translatedWork() {
  if (state.language === "zh") return data.zh.work.items;
  const zh = data.zh.work.items;
  const en = [
    ["Robot image restoration: SwinIR denoising and geometric utility", "Research", "Developing a blur-noise-JPEG degradation-aware workflow for robot cameras, asking whether restoration improves geometric matching rather than merely visual quality.", "Built an NBJ degradation-aware pipeline with an edge-aware recognition loss; evaluating ORB matches, RANSAC inliers, and proxy VO-style geometric estimation. General restoration can improve geometry but reduce matchable features, while degradation-aware and edge-aware training improve usable matches."],
    ["Humanoid reinforcement learning and height-map representations", "Research Internship", "A height-perception research and training framework for rough-terrain Unitree G1 locomotion, with unified ablations, evaluation, and auditability.", "Completed raw / zero / shuffle / coarse representation ablations, multi-seed controls, and a unified i3000 protocol. Added configuration gates, baseline alignment, aggregation, and audit analysis; advanced obstacle traversal using AMP + PPO."],
    ["Motion-imitation data and training pipeline", "Tianlian Robotics", "A reproducible engineering chain connecting motion capture, standardized motion packages, reference trajectories, training, and evaluation.", "Contributed to a two-machine decoupled data pipeline from GVHMR / GMR motion packages to training-side quality filtering and post-train validation. Reproduced the G1 imitation workflow and supported Tlibot-1 sim2sim validation and deployment."],
    ["Hengling: multimodal coal sorting and inspection", "Project Lead", "A mobile-robot project for a dusty, night-time mine setting, led from task definition and dataset work through perception and ROS integration.", "Explored RGB and infrared thermal imaging after single-modality vision proved unstable in real conditions. Completed data collection, labeling, YOLOv5 deployment, ROS integration, and field debugging."],
    ["iGEM 2025: TRACER-IL24 multiscale modeling", "Team Lead", "A cross-scale research chain spanning transcriptomics, bioinformatics, protein structure, molecular dynamics, and cell/population modeling.", "Used CRC transcriptomics, pathway enrichment, PPI networks, AlphaFold3, docking, 100 ns GROMACS MD, ODEs, and ABM. The project received an iGEM Gold Medal; a first-author manuscript is in preparation."],
    ["iGEM 2024: gate-based microbial sensor", "Modeling Lead", "Independent modeling work that produced actionable experimental guidance through kinetic and structural computation.", "Built an ODE model spanning AHL, LuxR, and GFP expression, yielding a 1:2 engineering-bacteria ratio recommendation. Evaluated intein insertion sites with AlphaFold3, SWISS-MODEL, docking, and structural analysis; the project received an iGEM Gold Medal."]
  ];
  return zh.map((item, index) => ({ ...item, title: en[index][0], label: en[index][1], summary: en[index][2], detail: en[index][3] }));
}

function renderProfile(t) {
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
  document.title = "Wang Qiheng | Robotics";
  refs.toggle.textContent = state.language === "zh" ? "EN" : "中文";
  refs.kicker.textContent = t.hero.kicker; refs.title.textContent = t.hero.title; refs.summary.textContent = t.hero.summary;
  refs.location.textContent = t.hero.location; refs.affiliation.innerText = t.hero.affiliation;
  refs.actions.replaceChildren(...t.hero.actions.map(([label, href, kind]) => link(label, href, `button ${kind}`)));
  refs.links.replaceChildren(link("GitHub", data.profile.links.github), link(t.contact.email, data.profile.links.email));
  refs.portrait.src = data.profile.portrait;
  refs.portrait.onerror = () => { refs.portrait.hidden = true; refs.portraitPlaceholder.hidden = false; };
}

function renderResearch(t) {
  refs.aboutKicker.textContent = t.about.kicker; refs.aboutTitle.textContent = t.about.title; refs.aboutCopy.textContent = t.about.copy;
  refs.researchKicker.textContent = t.research.kicker; refs.researchTitle.textContent = t.research.title;
  refs.researchGrid.replaceChildren(...t.research.items.map(([title, copy, label], i) => {
    const item = document.createElement("article"); item.className = "research-card reveal"; item.style.animationDelay = `${i * 70}ms`;
    item.innerHTML = `<p class="card-number">0${i + 1}</p><h3>${title}</h3><p>${copy}</p><span>${label}</span>`; return item;
  }));
}

function renderWork(t) {
  const works = translatedWork();
  const kinds = { "全部": "", "机器人": "机器人", "视觉": "视觉", "建模": "建模", "系统": "系统", "All": "", "Robotics": "机器人", "Vision": "视觉", "Modeling": "建模", "Systems": "系统" };
  state.filter ||= t.work.filters[0];
  refs.workKicker.textContent = t.work.kicker; refs.workTitle.textContent = t.work.title;
  refs.filterBar.replaceChildren(...t.work.filters.map((label) => {
    const button = document.createElement("button"); button.type = "button"; button.textContent = label;
    button.className = `filter-button${label === state.filter ? " active" : ""}`;
    button.onclick = () => { state.filter = label; renderWork(t); }; return button;
  }));
  const visible = works.filter((work) => !kinds[state.filter] || work.kind === kinds[state.filter]);
  if (!visible.length) { refs.workGrid.innerHTML = `<p class="empty-state">${t.work.empty}</p>`; return; }
  refs.workGrid.replaceChildren(...visible.map((work, i) => {
    const card = document.createElement("article"); card.className = "work-card reveal"; card.style.animationDelay = `${i * 65}ms`;
    const tags = work.tags.map((tag) => `<span>${tag}</span>`).join("");
    card.innerHTML = `<div class="work-meta"><span>${work.label}</span><span>${work.year}</span></div><h3>${work.title}</h3><p>${work.summary}</p><div class="work-tags">${tags}</div><button class="text-button" type="button">${t.work.read} <b>+</b></button><div class="work-detail" hidden>${work.detail}</div>`;
    const button = card.querySelector("button"); const detail = card.querySelector(".work-detail");
    button.onclick = () => { detail.hidden = !detail.hidden; button.innerHTML = `${detail.hidden ? t.work.read : t.work.close} <b>${detail.hidden ? "+" : "-"}</b>`; };
    return card;
  }));
}

function renderExperience(t) {
  refs.experienceKicker.textContent = t.experience.kicker; refs.experienceTitle.textContent = t.experience.title;
  refs.timeline.replaceChildren(...t.experience.items.map(([date, title, copy]) => {
    const item = document.createElement("li"); item.innerHTML = `<p>${date}</p><div><h3>${title}</h3><p>${copy}</p></div>`; return item;
  }));
}

function renderOutput(t) {
  refs.outputKicker.textContent = t.output.kicker; refs.outputTitle.textContent = t.output.title;
  refs.outputList.replaceChildren(...t.output.items.map(([type, copy], i) => {
    const item = document.createElement("article"); item.innerHTML = `<span>0${i + 1}</span><div><p>${type}</p><h3>${copy}</h3></div>`; return item;
  }));
}

function renderContact(t) {
  refs.contactKicker.textContent = t.contact.kicker; refs.contactTitle.textContent = t.contact.title; refs.contactCopy.textContent = t.contact.copy;
  refs.contactLinks.replaceChildren(link(t.contact.email, data.profile.links.email), link(t.contact.github, data.profile.links.github), link(t.contact.cv, data.profile.links.cv));
  refs.footer.textContent = t.contact.footer; refs.backToTop.textContent = t.backToTop;
}

function render() {
  const t = data[state.language];
  refs.nav.replaceChildren(...t.nav.map(([label, href]) => link(label, href)));
  renderProfile(t); renderResearch(t); renderWork(t); renderExperience(t); renderOutput(t); renderContact(t);
}

refs.toggle.addEventListener("click", () => { state.language = state.language === "zh" ? "en" : "zh"; state.filter = ""; localStorage.setItem("wqh-language", state.language); render(); });
render();
