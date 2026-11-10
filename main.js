const data = window.siteData;
const $ = (id) => document.getElementById(id);
const SELF = "Qiheng Wang";
let language = localStorage.getItem("wqh-language") || "zh";

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function link(label, href) {
  const a = el("a", "", label);
  a.href = href;
  if (href.startsWith("http")) { a.target = "_blank"; a.rel = "noreferrer"; }
  return a;
}

function joined(nodes, separator) {
  return nodes.flatMap((node, i) => (i ? [separator, node] : [node]));
}

function paperEntry(paper, labels) {
  const entry = el("article", "entry");
  const title = el("h3");
  title.append(link(paper.title, paper.url));

  const authors = el("p", "authors");
  authors.append(...joined(paper.authors.map((name) => (name.startsWith(SELF) ? el("strong", "", name) : name)), ", "));

  const links = el("p");
  links.append(...joined([link(labels.project, paper.url), ...paper.links.map(([label, href]) => link(label, href))], " / "));

  entry.append(title, authors, el("p", "venue", paper.venue), links, el("p", "summary", paper.summary));
  return entry;
}

function textEntry(title, copy, meta) {
  const entry = el("article", "entry");
  entry.append(el("h3", "", title));
  if (meta) entry.append(el("p", "venue", meta));
  entry.append(el("p", "", copy));
  return entry;
}

function row(when, title, copy) {
  const item = el("div", "row");
  const body = el("div");
  body.append(el("h3", "", title), el("p", "", copy));
  item.append(el("div", "when", when), body);
  return item;
}

function render() {
  const t = data[language];
  const { labels } = t;

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  $("language-toggle").textContent = language === "zh" ? "EN" : "中文";

  $("name").textContent = t.hero.title;
  $("summary").textContent = t.hero.summary;
  const { email, github } = data.profile.links;
  $("links").replaceChildren(link(labels.email, email), " / ", link("GitHub", github));

  $("news-title").textContent = labels.news;
  $("news-list").replaceChildren(...t.news.map(([date, copy]) => {
    const item = el("li");
    item.append(el("time", "", date), copy);
    return item;
  }));

  $("research-title").textContent = labels.research;
  $("about").textContent = t.about.copy;
  $("research-list").replaceChildren(...t.research.map(([title, copy]) => textEntry(title, copy)));

  $("papers-title").textContent = labels.papers;
  $("papers-list").replaceChildren(...t.papers.map((paper) => paperEntry(paper, labels)), el("p", "note", labels.equal));

  $("projects-title").textContent = labels.projects;
  $("projects-list").replaceChildren(...t.projects.map((p) => textEntry(p.title, p.summary, `${p.year} · ${p.label}`)));

  $("experience-title").textContent = labels.experience;
  $("experience-list").replaceChildren(...t.experience.map(([when, title, copy]) => row(when, title, copy)));

  $("output-title").textContent = labels.output;
  $("output-list").replaceChildren(...t.output.map(([kind, copy]) => textEntry(kind, copy)));

  $("footer").textContent = t.footer;
}

$("language-toggle").addEventListener("click", () => {
  language = language === "zh" ? "en" : "zh";
  localStorage.setItem("wqh-language", language);
  render();
});

const portrait = $("portrait");
portrait.onload = () => { portrait.hidden = false; };
portrait.src = data.profile.portrait;

render();
