import { ui, articles, categories, quiz } from './content.mjs';
import {scientistForDay, scientistFeatureHtml, homeForDay, homeHeroHtml, homeFactHtml} from './editorial.mjs?v=20260927-daily';
import {physicsEvents} from './timeline-physics.mjs';
import {physicsDetails} from './timeline-details.mjs';
import {physicsMedia} from './timeline-media.mjs';
import {biologyEvents} from './timeline-biology.mjs';
import {biologyDetails} from './timeline-biology-details.mjs';
import {biologyMedia} from './timeline-biology-media.mjs';
import {technologyEvents} from './timeline-technology.mjs';
import {technologyDetails} from './timeline-technology-details.mjs';
import {technologyMedia} from './timeline-technology-media.mjs';
import {astronomyEvents} from './timeline-astronomy.mjs';
import {astronomyDetails} from './timeline-astronomy-details.mjs';
import {astronomyMedia} from './timeline-astronomy-media.mjs';
import {raceEvents} from './timeline-space-race.mjs';
import {raceDetails} from './timeline-space-race-details.mjs';
import {raceMedia} from './timeline-space-race-media.mjs';

const lang = document.documentElement.lang || 'sr';
const t = ui[lang];
const body = document.body;
const timelineOverview=document.querySelector('.timeline-overview');
if(timelineOverview){
  const full=document.querySelector('#timeline-full');
  const sections=[...full.querySelectorAll('[data-timeline-section]')];
  const showTimeline=(focus=false)=>{
    const subject=location.hash.slice(1);
    const selected=sections.find(section=>section.dataset.timelineSection===subject);
    timelineOverview.hidden=!!selected;
    full.hidden=!selected;
    for(const section of sections)section.hidden=section!==selected;
    if(focus){
      window.scrollTo({top:0,behavior:'auto'});
      (selected?.querySelector('h2')||document.querySelector('.timeline-intro h1'))?.focus({preventScroll:true});
    }
  };
  window.addEventListener('hashchange',()=>showTimeline(true));
  showTimeline();
}
const physicsDialog=document.querySelector('#physics-dialog');
if(physicsDialog){
  const closeButton=physicsDialog.querySelector('.physics-dialog-close');
  const image=physicsDialog.querySelector('#physics-dialog-image');
  const imageSource=physicsDialog.querySelector('#physics-dialog-source');
  const imageLicense=physicsDialog.querySelector('#physics-dialog-license');
  const year=physicsDialog.querySelector('#physics-dialog-year');
  const title=physicsDialog.querySelector('#physics-dialog-title');
  const text=physicsDialog.querySelector('#physics-dialog-text');
  let activeTrigger=null;
  document.querySelectorAll('[data-timeline-index]').forEach(button=>button.addEventListener('click',()=>{
    const index=Number(button.dataset.timelineIndex);
    const data=({physics:[physicsEvents,physicsDetails,physicsMedia],biology:[biologyEvents,biologyDetails,biologyMedia],technology:[technologyEvents,technologyDetails,technologyMedia],astronomy:[astronomyEvents,astronomyDetails,astronomyMedia],race:[raceEvents,raceDetails,raceMedia]})[button.dataset.timelineSubject];
    if(!data)return;
    const event=data[0][index], detail=data[1][index], media=data[2][index];
    if(!event||!detail||!media)return;
    activeTrigger=button;
    year.textContent=event.year[lang];
    title.textContent=event.text[lang];
    text.textContent=detail[lang];
    image.src=`/assets/${media.file}`;
    image.alt=media.alt;
    imageSource.href=media.source;
    imageSource.textContent=media.credit;
    imageLicense.textContent=media.license;
    imageLicense.href=({
      'CC0':'https://creativecommons.org/publicdomain/zero/1.0/',
      'CC BY 4.0':'https://creativecommons.org/licenses/by/4.0/',
      'CC BY 2.0':'https://creativecommons.org/licenses/by/2.0/',
      'CC BY 2.5':'https://creativecommons.org/licenses/by/2.5/',
      'CC BY 3.0':'https://creativecommons.org/licenses/by/3.0/',
      'CC BY-SA 2.0':'https://creativecommons.org/licenses/by-sa/2.0/',
      'CC BY-SA 3.0':'https://creativecommons.org/licenses/by-sa/3.0/',
      'CC BY-SA 3.0 IGO':'https://creativecommons.org/licenses/by-sa/3.0/igo/',
      'CC BY-SA 4.0':'https://creativecommons.org/licenses/by-sa/4.0/',
      'GODL-India':'https://data.gov.in/sites/default/files/Gazette_Notification_OGDL.pdf',
      'Public domain':'https://creativecommons.org/publicdomain/mark/1.0/'
    })[media.license]||media.source;
    physicsDialog.showModal();
    closeButton.focus();
  }));
  closeButton.addEventListener('click',()=>physicsDialog.close());
  physicsDialog.addEventListener('click',event=>{if(event.target===physicsDialog)physicsDialog.close()});
  physicsDialog.addEventListener('close',()=>activeTrigger?.focus());
}
const glossaryDialog=document.querySelector('.glossary-dialog');
if(glossaryDialog){
  let definitions=[];
  try { definitions=JSON.parse(document.querySelector('#article-glossary-data')?.textContent||'[]'); } catch { /* Keep article readable if data is unavailable. */ }
  const close=glossaryDialog.querySelector('.glossary-close');
  const title=glossaryDialog.querySelector('#glossary-title');
  const description=glossaryDialog.querySelector('.glossary-description');
  const image=glossaryDialog.querySelector('.glossary-image');
  const figure=glossaryDialog.querySelector('figure');
  const credit=glossaryDialog.querySelector('.glossary-credit');
  let trigger=null;
  document.querySelectorAll('.glossary-trigger').forEach(button=>button.addEventListener('click',()=>{
    const entry=definitions[Number(button.dataset.glossaryIndex)];
    if(!entry)return;
    trigger=button;
    title.textContent=entry.title;
    description.textContent=entry.description;
    if(entry.image?.src){
      image.src='/assets/'+entry.image.src;
      image.alt=entry.image.alt?.[lang]||entry.title;
      credit.replaceChildren();
      if(entry.image.caption)credit.append(document.createTextNode(entry.image.caption+' '));
      if(entry.image.source){const source=document.createElement('a');source.href=entry.image.source;source.target='_blank';source.rel='noopener noreferrer';source.textContent=entry.image.credit||'Izvor slike';credit.append(source);}
      else credit.append(document.createTextNode(entry.image.credit||''));
      figure.hidden=false;
    }else{
      image.removeAttribute('src');
      figure.hidden=true;
    }
    glossaryDialog.showModal();
    close.focus();
  }));
  close.addEventListener('click',()=>glossaryDialog.close());
  glossaryDialog.addEventListener('click',event=>{if(event.target===glossaryDialog)glossaryDialog.close()});
  glossaryDialog.addEventListener('close',()=>trigger?.focus());
}
function refreshScientistOfDay(){
  const current=document.querySelector('[data-daily-scientist]');
  if(!current)return;
  const {article,day}=scientistForDay();
  if(current.dataset.dailyScientist!==article.id || Number(current.dataset.editorialDay)!==day){
    current.outerHTML=scientistFeatureHtml(lang);
  }
}
function refreshHomeEditorial(){
  const hero=document.querySelector('[data-daily-article]');
  const fact=document.querySelector('[data-daily-fact]');
  if(hero||fact){
    const selection=homeForDay();
    if(hero&&(hero.dataset.dailyArticle!==selection.article.id||Number(hero.dataset.editorialDay)!==selection.day))hero.outerHTML=homeHeroHtml(lang);
    if(fact&&(fact.dataset.dailyFact!==selection.fact.id||Number(fact.dataset.editorialDay)!==selection.day))fact.outerHTML=homeFactHtml(lang);
  }
  refreshScientistOfDay();
}
refreshHomeEditorial();
if(document.querySelector('.home-page')){
  setInterval(refreshHomeEditorial,60_000);
  window.addEventListener('pageshow',refreshHomeEditorial);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshHomeEditorial()});
}
const themeButton = document.querySelector('.theme-trigger');
const savedTheme = localStorage.getItem('nauka-theme');
if (savedTheme === 'dark') body.classList.add('dark');
themeButton?.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('nauka-theme', body.classList.contains('dark') ? 'dark' : 'light');
});

const menuButton = document.querySelector('.menu-trigger');
const mobileNav = document.querySelector('.mobile-nav');
menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? t.menu : t.close);
  mobileNav.hidden = expanded;
});

const modal = document.querySelector('#search-modal');
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');
let returnFocus;
const escapeHtml = x => String(x).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const articleUrl = a => `/${lang}/${categories.find(c=>c.id===a.category).slugs[lang]}/${a.translations[lang].slug}/`;
function updateSearch(){
  const q = searchInput.value.trim().toLocaleLowerCase(lang);
  if (!q) { searchResults.innerHTML = ''; return; }
  const found = articles.filter(a => `${a.translations[lang].title} ${a.translations[lang].lead} ${categories.find(c=>c.id===a.category).names[lang]} ${a.tags.join(' ')}`.toLocaleLowerCase(lang).includes(q)).slice(0,8);
  searchResults.innerHTML = found.length ? found.map(a=>`<a href="${articleUrl(a)}"><strong>${escapeHtml(a.translations[lang].title)}</strong><span>${escapeHtml(categories.find(c=>c.id===a.category).names[lang])} · ${a.read} ${escapeHtml(t.read)}</span></a>`).join('') : `<p>${escapeHtml(t.noResults)}</p>`;
}
function closeSearch(){ modal.hidden = true; body.style.overflow = ''; returnFocus?.focus(); }
document.querySelector('.search-trigger')?.addEventListener('click', () => {
  returnFocus = document.activeElement;
  modal.hidden = false;
  body.style.overflow = 'hidden';
  searchInput.value = '';
  searchResults.innerHTML = '';
  searchInput.focus();
});
document.querySelector('.search-close')?.addEventListener('click', closeSearch);
document.querySelector('.search-backdrop')?.addEventListener('click', closeSearch);
searchInput?.addEventListener('input', updateSearch);
const initialSearch=new URLSearchParams(location.search).get('q')?.trim();
if(initialSearch&&modal&&searchInput){
  returnFocus=document.querySelector('.search-trigger');
  modal.hidden=false;
  body.style.overflow='hidden';
  searchInput.value=initialSearch;
  updateSearch();
  searchInput.focus();
}
document.addEventListener('keydown', e => { if(e.key === 'Escape' && !modal.hidden) closeSearch(); });
modal?.addEventListener('keydown', e => {
  if(e.key !== 'Tab') return;
  const focusables = [...modal.querySelectorAll('button,input,a[href]')].filter(el=>!el.hidden);
  if(!focusables.length) return;
  const first = focusables[0], last = focusables.at(-1);
  if(e.shiftKey && document.activeElement === first){e.preventDefault();last.focus();}
  else if(!e.shiftKey && document.activeElement === last){e.preventDefault();first.focus();}
});

const quizHost = document.querySelector('#quiz');
if (quizHost) {
  const rotationKey = 'nzm-home-quiz-index';
  let index = Number(localStorage.getItem(rotationKey) || 0) % quiz.length;
  if (!Number.isInteger(index) || index < 0) index = 0;
  localStorage.setItem(rotationKey, String((index + 1) % quiz.length));
  let selected = null, checked = false;
  function renderQuiz(){
    const item = quiz[index];
    quizHost.innerHTML = `<div class="quiz-question">${escapeHtml(item.q[lang])}</div><div class="quiz-options" role="group" aria-label="${escapeHtml(item.q[lang])}">${item.options[lang].map((option,i)=>`<button type="button" class="quiz-option ${selected===i?'selected':''} ${checked&&i===item.answer?'correct':''} ${checked&&selected===i&&i!==item.answer?'wrong':''}" data-option="${i}" ${checked?'disabled':''} aria-pressed="${selected===i}"><span class="quiz-letter">${String.fromCharCode(65+i)}</span><span>${escapeHtml(option)}</span></button>`).join('')}</div><div class="quiz-actions">${checked?`<span class="quiz-result" role="status"><strong>${escapeHtml(selected===item.answer?t.correct:t.incorrect)}</strong>${escapeHtml(item.explanation[lang])}</span>`:`<button type="button" class="primary-button quiz-check" ${selected===null?'disabled':''}>${escapeHtml(t.checkAnswer)} →</button>`}<button type="button" class="outline-button quiz-next">${escapeHtml(t.nextQuestion)} →</button></div>`;
    quizHost.querySelectorAll('[data-option]').forEach(button=>button.addEventListener('click',()=>{selected=Number(button.dataset.option);renderQuiz();}));
    quizHost.querySelector('.quiz-check')?.addEventListener('click',()=>{checked=true;renderQuiz();});
    quizHost.querySelector('.quiz-next')?.addEventListener('click',()=>{index=(index+1)%quiz.length;selected=null;checked=false;renderQuiz();});
  }
  renderQuiz();
}

const fullQuiz = document.querySelector('#full-quiz');
if (fullQuiz) {
  const total = fullQuiz.querySelector('#quiz-total');
  let graded = false;
  fullQuiz.addEventListener('change', () => {
    fullQuiz.querySelectorAll('.quiz-full-card.needs-answer').forEach(el => el.classList.remove('needs-answer'));
    if (!graded) return;
    graded = false;
    total.textContent = '';
    fullQuiz.querySelectorAll('.quiz-feedback').forEach(el => { el.hidden = true; });
    fullQuiz.querySelectorAll('.quiz-full-option').forEach(el => el.classList.remove('correct-answer','wrong-answer'));
  });
  fullQuiz.addEventListener('submit', event => {
    event.preventDefault();
    const picks = quiz.map((_,i) => fullQuiz.querySelector(`input[name="question-${i}"]:checked`));
    const missing = picks.findIndex(pick => !pick);
    if (missing !== -1) {
      total.textContent = ({sr:`Odgovori na svih ${quiz.length} pitanja pre prikaza rezultata.`,sl:`Pred prikazom rezultata odgovori na vseh ${quiz.length} vprašanj.`,en:`Answer all ${quiz.length} questions before showing your score.`})[lang];
      const missingCard = fullQuiz.querySelector(`[data-question="${missing}"]`);
      missingCard?.classList.add('needs-answer');
      missingCard?.scrollIntoView({behavior:'smooth',block:'center'});
      return;
    }
    let correct = 0;
    quiz.forEach((item,i) => {
      const card = fullQuiz.querySelector(`[data-question="${i}"]`);
      const chosen = Number(picks[i].value);
      if (chosen === item.answer) correct++;
      card.querySelectorAll('.quiz-full-option').forEach((option,j) => {
        option.classList.toggle('correct-answer',j===item.answer);
        option.classList.toggle('wrong-answer',j===chosen && j!==item.answer);
      });
      const feedback = card.querySelector('.quiz-feedback');
      feedback.hidden = false;
      feedback.textContent = `${chosen===item.answer?t.correct:t.incorrect} ${item.explanation[lang]}`;
    });
    graded = true;
    total.textContent = ({sr:`Tačnih odgovora: ${correct} od ${quiz.length} (${Math.round(correct/quiz.length*100)}%).`,sl:`Pravilnih odgovorov: ${correct} od ${quiz.length} (${Math.round(correct/quiz.length*100)} %).`,en:`Correct answers: ${correct} of ${quiz.length} (${Math.round(correct/quiz.length*100)}%).`})[lang];
    total.scrollIntoView({behavior:'smooth',block:'center'});
  });
}
