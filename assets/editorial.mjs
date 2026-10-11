import {articles, categories, ui} from './content.mjs';
import {quickFacts} from './quick-facts.mjs';

// Galileo was published after Teller although its source entry precedes him.
// Later additions at the end of articles naturally come first.
const biographyNames = {
  faraday:{name:'Michael Faraday',years:'1791–1867',focus:{sr:'Elektromagnetna indukcija',sl:'Elektromagnetna indukcija',en:'Electromagnetic induction'}},
  darwin:{name:'Charles Darwin',years:'1809–1882',focus:{sr:'Evolucija prirodnom selekcijom',sl:'Evolucija z naravnim izborom',en:'Evolution by natural selection'}},
  archimedes:{name:{sr:'Arhimed',sl:'Arhimed',en:'Archimedes'},years:{sr:'oko 287–212. p. n. e.',sl:'pribl. 287–212 pr. n. št.',en:'c. 287–212 BCE'},focus:{sr:'Potisak, poluga i matematika',sl:'Vzgon, vzvod in matematika',en:'Buoyancy, levers and mathematics'}},
  einstein:{name:'Albert Einstein',years:'1879–1955',focus:{sr:'Relativnost i kvantna fizika',sl:'Relativnost in kvantna fizika',en:'Relativity and quantum physics'}},
  tesla:{name:'Nikola Tesla',years:'1856–1943',focus:{sr:'Naizmenična struja i elektromotori',sl:'Izmenični tok in elektromotorji',en:'Alternating current and electric motors'}},
  teller:{name:{sr:'Edvard Teler',sl:'Edward Teller',en:'Edward Teller'},years:'1908–2003',focus:{sr:'Nuklearna fizika',sl:'Jedrska fizika',en:'Nuclear physics'}},
  galileo:{name:{sr:'Galileo Galilej',sl:'Galileo Galilei',en:'Galileo Galilei'},years:'1564–1642',focus:{sr:'Astronomija i fizika kretanja',sl:'Astronomija in fizika gibanja',en:'Astronomy and the physics of motion'}}
};

const esc = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const DAY=86400000;
const FIRST_ROTATION_DAY=Date.UTC(2026,8,27);
const cycleIndex=(position,length)=>((position%length)+length)%length;

export function editorialDay(now=new Date()){
  const parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Belgrade',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(now).map(p=>[p.type,p.value]));
  return Date.UTC(Number(parts.year),Number(parts.month)-1,Number(parts.day));
}

export function homeForDay(now=new Date()){
  const day=editorialDay(now);
  const position=Math.floor((day-FIRST_ROTATION_DAY)/DAY);
  const roster=newestFirst(articles.filter(a=>a.media?.hero&&!a.rubrics.includes('scientists')));
  const facts=[...quickFacts].reverse();
  return {day,article:roster[cycleIndex(position,roster.length)],fact:facts[cycleIndex(position,facts.length)]};
}

export function homeHeroHtml(lang,now=new Date()){
  const {day,article}=homeForDay(now);
  const translation=article.translations[lang];
  const category=categories.find(c=>c.id===article.category);
  const href=`/${lang}/${category.slugs[lang]}/${translation.slug}/`;
  const image=/^https:\/\//.test(article.media.hero)?article.media.hero:`/assets/${article.media.hero}`;
  return `<a class="hero-main daily-feature" data-daily-article="${esc(article.id)}" data-editorial-day="${day}" href="${esc(href)}"><img src="${esc(image)}" alt="${esc(article.media.alt[lang])}" fetchpriority="high"><div class="hero-overlay"></div><div class="hero-content"><span class="tag tag-${esc(category.color)}">${esc(category.names[lang])}</span><h1>${esc(translation.title)}</h1><p>${esc(translation.lead)}</p><div class="hero-bottom"><span class="primary-button">${esc(ui[lang].more)}<span aria-hidden="true"> →</span></span><span>${article.readByLang?.[lang]??article.read} ${esc(ui[lang].read)}</span></div></div></a>`;
}

export function homeFactHtml(lang,now=new Date()){
  const {day,fact}=homeForDay(now);
  const href=`/${lang}/${({sr:'zapamti-ovo-za-30-sekundi',sl:'zapomni-si-v-30-sekundah',en:'remember-in-30-seconds'})[lang]}/`;
  return `<aside class="remember-preview" data-daily-fact="${esc(fact.id)}" data-editorial-day="${day}"><a class="eyebrow" href="${href}">✳ ${esc(ui[lang].remember)} →</a><h3>${esc(fact.title[lang])}</h3><p>${esc(fact.text[lang])}</p><a class="outline-button" href="${href}">${esc(ui[lang].all)} →</a></aside>`;
}

export function publicationRank(article){
  return article.id==='galileo' ? articles.findIndex(a=>a.id==='teller')+0.5 : articles.indexOf(article);
}
export function newestFirst(items){
  return [...items].sort((a,b)=>publicationRank(b)-publicationRank(a));
}

export function scientistForDay(now=new Date()){
  const day=editorialDay(now);
  const position=Math.floor((day-FIRST_ROTATION_DAY)/DAY);
  const roster=newestFirst(articles.filter(a=>a.rubrics.includes('scientists')));
  const index=cycleIndex(position,roster.length);
  return {article:roster[index],day};
}

export function scientistFeatureHtml(lang,now=new Date()){
  const {article,day}=scientistForDay(now);
  const details=biographyNames[article.id];
  const name=(typeof details?.name==='object'?details.name[lang]:details?.name)||article.translations[lang].title.split(/[:—–]/)[0].trim();
  const years=typeof details?.years==='object'?details.years[lang]:details?.years;
  const image=article.media?.hero||'faraday.jpg';
  const alt=article.media?.alt?.[lang]||({sr:'Portret Majkla Faradeja',sl:'Portret Michaela Faradaya',en:'Portrait of Michael Faraday'})[lang];
  const category=categories.find(c=>c.id===article.category);
  const href=`/${lang}/${category.slugs[lang]}/${article.translations[lang].slug}/`;
  return `<aside class="scientist-feature" data-daily-scientist="${esc(article.id)}" data-editorial-day="${day}"><div class="scientist-image"><img src="/assets/${esc(image)}" alt="${esc(alt)}" loading="lazy"></div><div class="scientist-copy"><span class="eyebrow">${esc(ui[lang].scientist)}</span><h2>${esc(name)}</h2><p>${esc(article.translations[lang].lead)}</p><dl><div>${years?`<dt>${esc(years)}</dt>`:''}${details?.focus?.[lang]?`<dd>${esc(details.focus[lang])}</dd>`:''}</div></dl><a class="primary-button" href="${esc(href)}">${esc(ui[lang].more)} →</a></div></aside>`;
}
