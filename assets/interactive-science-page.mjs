import {interactiveItems,interactiveSubjects} from './interactive-science.mjs';
const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const base={sr:'interaktivna-nauka',sl:'interaktivna-znanost',en:'interactive-science'};
export const interactivePath=(lang,subject)=>`/${lang}/${base[lang]}/${subject?`${interactiveSubjects[subject].slug[lang]}/`:''}`;
export const interactiveTitle={sr:'Interaktivna nauka',sl:'Interaktivna znanost',en:'Interactive science'};
export const interactiveDescription={
  sr:'Istraži matematiku, hemiju, fiziku i biologiju kroz interaktivne prikaze uz kratka objašnjenja i uputstva.',
  sl:'Raziskuj matematiko, kemijo, fiziko in biologijo z interaktivnimi prikazi ter kratkimi razlagami in navodili.',
  en:'Explore mathematics, chemistry, physics and biology through interactive activities with short explanations and instructions.'
};
const labels={
  sr:{home:'Početna',open:'Otvori oblast',back:'Sve oblasti',activities:'interaktivnih prikaza',note:'Interaktivni prikazi su na engleskom jeziku. Opisi i uputstva na ovoj stranici su na srpskom.',source:'Prikaz: PrepOK',fallback:'Otvori prikaz u novoj kartici',intro:'Izaberi oblast. U njoj su prikazi poređani jedan ispod drugog; pomeraj klizače, biraj odgovore ili prevlači elemente da vidiš šta se menja.'},
  sl:{home:'Domov',open:'Odpri področje',back:'Vsa področja',activities:'interaktivnih prikazov',note:'Interaktivni prikazi so v angleščini. Opisi in navodila na tej strani so v slovenščini.',source:'Prikaz: PrepOK',fallback:'Odpri prikaz v novem zavihku',intro:'Izberi področje. Prikazi so razvrščeni drug pod drugim; premikaj drsnike, izbiraj odgovore ali vleci elemente in opazuj spremembe.'},
  en:{home:'Home',open:'Open subject',back:'All subjects',activities:'interactive activities',note:'The interactive activities are in English.',source:'Activity: PrepOK',fallback:'Open activity in a new tab',intro:'Choose a subject. Activities appear one below another; move sliders, choose answers or drag elements to observe what changes.'}
};
export function renderInteractivePage(lang,subject){
  const l=labels[lang],title=interactiveTitle[lang],sub=subject&&interactiveSubjects[subject];
  const breadcrumb=`<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/${lang}/">${esc(l.home)}</a><span>›</span>${sub?`<a href="${interactivePath(lang)}">${esc(title)}</a><span>›</span><span>${esc(sub.name[lang])}</span>`:`<span>${esc(title)}</span>`}</nav>`;
  if(!sub){
    const cards=Object.entries(interactiveSubjects).map(([key,value])=>{
      const count=interactiveItems.filter(item=>item.subject===key).length;
      const countLabel=lang==='sr'&&count%10===1&&count%100!==11?'interaktivni prikaz':l.activities;
      return `<a class="interactive-subject interactive-subject-${key}" href="${interactivePath(lang,key)}" style="--subject-accent:${value.accent}"><span class="interactive-subject-count">${count} ${esc(countLabel)}</span><h2>${esc(value.name[lang])}</h2><span class="interactive-subject-open">${esc(l.open)} <span aria-hidden="true">→</span></span></a>`;
    }).join('');
    return `<main id="main" class="wrap interactive-page">${breadcrumb}<header class="interactive-header"><span class="eyebrow">NZM / ${esc(title)}</span><h1>${esc(title)}</h1><p>${esc(l.intro)}</p></header><div class="interactive-subject-grid">${cards}</div><p class="interactive-language-note">${esc(l.note)} <a href="https://prepok.com/widgets/" target="_blank" rel="noopener noreferrer">PrepOK ↗</a></p></main>`;
  }
  const activities=interactiveItems.filter(item=>item.subject===subject).map((activity,index)=>`<section class="interactive-activity" aria-labelledby="activity-${index}" style="--subject-accent:${sub.accent}"><div class="interactive-activity-copy"><span class="interactive-activity-number">${String(index+1).padStart(2,'0')}</span><h2 id="activity-${index}">${esc(activity.title[lang])}</h2><p>${esc(activity.text[lang])}</p></div><div class="interactive-frame-wrap"><iframe src="${activity.url}" title="${esc(activity.title[lang])} — PrepOK" width="560" height="${activity.height}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe></div><div class="interactive-activity-links"><a href="https://prepok.com/widgets/" target="_blank" rel="noopener noreferrer">${esc(l.source)} ↗</a><a href="${activity.url}" target="_blank" rel="noopener noreferrer">${esc(l.fallback)} ↗</a></div></section>`).join('');
  return `<main id="main" class="wrap interactive-page interactive-subpage">${breadcrumb}<header class="interactive-header" style="--subject-accent:${sub.accent}"><a class="interactive-back" href="${interactivePath(lang)}">← ${esc(l.back)}</a><h1>${esc(sub.name[lang])}</h1><p>${esc(l.note)}</p></header><div class="interactive-activity-list">${activities}</div></main>`;
}
