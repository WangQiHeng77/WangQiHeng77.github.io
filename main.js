const data = window.siteData;
const $ = (id) => document.getElementById(id);
const SELF = "Qiheng Wang";
let language = "zh";
try { language = localStorage.getItem("wqh-language") || "zh"; } catch (e) { /* storage unavailable */ }

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
  const title = el("h4");
  title.append(link(paper.title, paper.url));
  const authors = el("p", "authors");
  authors.append(...joined(paper.authors.map((name) => (name.startsWith(SELF) ? el("strong", "", name) : name)), ", "));
  const links = el("p");
  links.append(...joined([link(labels.project, paper.url), ...paper.links.map(([label, href]) => link(label, href))], " / "));
  entry.append(title, authors, el("p", "venue", paper.venue), links, el("p", "summary", paper.summary));
  if (paper.role) entry.append(el("p", "role", paper.role));
  entry.append(el("p", "note", labels.equal));
  return entry;
}

function projectEntry(item) {
  const entry = el("article", "entry");
  entry.append(el("h4", "", item.title), el("p", "venue", item.meta), el("p", "", item.summary));
  return entry;
}

function lineBlock(line, index, labels, total) {
  const block = el("article", "line");
  const last = index === total - 1 && !line.belief;
  block.append(el("h3", "", last ? line.title : `${labels.line} ${index + 1} · ${line.title}`));
  const why = el("p", "why");
  if (line.belief) why.append(el("span", "belief", line.belief), " ");
  why.append(line.question);
  block.append(why);
  for (const item of line.items) {
    if (item.kind === "paper") block.append(paperEntry(item, labels));
    else if (item.kind === "project") block.append(projectEntry(item));
    else block.append(el("p", "ongoing", item.text));
  }
  return block;
}

function row(when, title, copy) {
  const item = el("div", "row");
  const body = el("div");
  body.append(el("h4", "", title), el("p", "", copy));
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

  $("lines-title").textContent = labels.lines;
  $("lines-intro").textContent = t.intro;
  $("lines-list").replaceChildren(...t.lines.map((line, i) => lineBlock(line, i, labels, t.lines.length)));

  $("experience-title").textContent = labels.experience;
  $("experience-list").replaceChildren(...t.experience.map(([when, title, copy]) => row(when, title, copy)));

  $("output-title").textContent = labels.output;
  $("output-list").replaceChildren(...t.output.map(([kind, copy]) => {
    const entry = el("article", "entry");
    entry.append(el("h4", "", kind), el("p", "", copy));
    return entry;
  }));

  $("footer").textContent = t.footer;
}

$("language-toggle").addEventListener("click", () => {
  language = language === "zh" ? "en" : "zh";
  try { localStorage.setItem("wqh-language", language); } catch (e) { /* storage unavailable */ }
  render();
});

const portrait = $("portrait");
portrait.onload = () => { portrait.hidden = false; };
portrait.src = data.profile.portrait;

render();
