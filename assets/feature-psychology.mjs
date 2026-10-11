import { L } from './feature-core.mjs';
import { psychologyTexts } from './psychology-texts.mjs';

const commons = 'https://commons.wikimedia.org/wiki/File:';
const frontiers = 'https://www.frontiersin.org/journals/behavioral-neuroscience/articles/10.3389/fnbeh.2026.1729876/full';

function translations(topic, slugs, remembers, terms) {
  return Object.fromEntries(['sr', 'sl', 'en'].map(lang => [lang, {
    ...psychologyTexts[topic][lang],
    slug: slugs[lang],
    remember: remembers[lang],
    term: terms[lang]
  }]));
}

export const psychologyFeatures = [
  {
    id:'eyewitness-memory', category:'psychology', rubrics:[], image:'psychology-eyewitness',
    kind:'news', date:'2026-09-24', read:8, readByLang:{sr:8,sl:8,en:8}, level:'medium',
    tags:['pamćenje','svedočenje','psihologija'],
    source:[
      ['Scientific American','https://www.scientificamerican.com/article/what-eyewitness-accounts-tell-us-about-the-science-of-memory/'],
      ['National Academies of Sciences, Engineering, and Medicine','https://www.nationalacademies.org/news/using-science-to-improve-eyewitness-testimony'],
      ['American Psychological Association','https://doi.org/10.1037/lhb0000359'],
      ['Journal of Verbal Learning and Verbal Behavior','https://doi.org/10.1016/S0022-5371(74)80011-3']
    ],
    media:{
      hero:'psychology/elizabeth-loftus.jpg', display:'contain',
      alt:L('Portret psihološkinje Elizabet Loftus.','Portret psihologinje Elizabeth Loftus.','Portrait of psychologist Elizabeth Loftus.'),
      caption:L('Elizabet Loftus proučavala je kako formulacija pitanja utiče na sećanje.','Elizabeth Loftus je preučevala, kako oblikovanje vprašanj vpliva na spomin.','Elizabeth Loftus studied how the wording of questions can influence memory.'),
      credit:'BDEngler / Wikimedia Commons',
      source:commons+'Elizabeth_Loftus-TAM_9-July_2011.JPG',
      license:'https://creativecommons.org/licenses/by-sa/3.0/',
      inlines:[
        {src:'psychology/lineup.svg',afterSection:2,
         alt:L('Ilustracija policijskog prepoznavanja sa više osoba.','Ilustracija policijske prepoznave več oseb.','Diagram of a police identification lineup.'),
         caption:L('Ilustracija postupka prepoznavanja; izbor zavisi i od toga kako je niz sastavljen.','Ilustracija postopka prepoznave; izbira je odvisna tudi od sestave niza.','An identification lineup; its design can influence the witness’s choice.'),
         credit:'Chatsam / Wikimedia Commons',source:commons+'Parade_d%27identification.svg',license:'https://creativecommons.org/licenses/by-sa/3.0/'},
        {src:'psychology/hippocampus.svg',afterSection:4,
         alt:L('Položaj hipokampusa u ljudskom mozgu.','Položaj hipokampusa v človeških možganih.','Location of the hippocampus in the human brain.'),
         caption:L('Crveno su prikazane približne pozicije hipokampusa.','Rdeča barva označuje približen položaj hipokampusa.','Red marks the approximate location of the hippocampus.'),
         credit:'Washington irving / Wikimedia Commons',source:commons+'Hippocampus.svg',license:'https://creativecommons.org/publicdomain/zero/1.0/'}
      ]
    },
    translations:translations('eyewitness',
      {sr:'koliko-mozemo-verovati-secanju-ocevica',sl:'koliko-lahko-zaupamo-spominu-ocividca',en:'how-much-can-we-trust-an-eyewitness-memory'},
      L('Pamćenje nije snimak: pitanja i kasnije informacije mogu promeniti neke detalje sećanja. Uslovi opažanja, poput svetla i udaljenosti, važni su već na početku. Prvo prepoznavanje treba sprovesti nepristrasno i odmah zabeležiti svedokovu sigurnost. Samouveren nastup na sudu ne govori sam po sebi koliko je prvobitno sećanje bilo tačno.',
        'Spomin ni posnetek: vprašanja in poznejše informacije lahko spremenijo nekatere podrobnosti. Pomembne so že okoliščine prvega opazovanja, na primer svetloba in razdalja. Prvo prepoznavo je treba izvesti nepristransko ter takoj zapisati gotovost priče. Samozavesten nastop na sodišču sam po sebi ne pokaže, kako točen je bil prvotni spomin.',
        'Memory is not a recording: questions and later information can change some details. Viewing conditions such as light and distance matter from the outset. The first identification should be fair and the witness’s initial confidence recorded immediately. A confident courtroom performance alone does not establish how accurate the original memory was.'),
      L('Efekat pogrešne informacije — uticaj naknadnih podataka na prijavljeno sećanje. Praćenje izvora — procena da li nešto znamo iz opažanja ili iz drugog izvora. Dvostruko slep postupak — osoba koja vodi prepoznavanje ne zna ko je osumnjičeni.',
        'Učinek napačne informacije — vpliv poznejših podatkov na poročani spomin. Spremljanje vira — ugotavljanje, ali nekaj vemo iz zaznave ali drugega vira. Dvojno slepi postopek — vodja prepoznave ne ve, kdo je osumljenec.',
        'Misinformation effect — later information influencing reported memory. Source monitoring — judging whether a detail came from observation or another source. Double-blind procedure — the officer administering a lineup does not know who the suspect is.'))
  },
  {
    id:'infrasound-mood', category:'psychology', rubrics:[], image:'psychology-infrasound',
    kind:'news', date:'2026-09-24', read:8, readByLang:{sr:8,sl:8,en:8}, level:'medium',
    tags:['infrazvuk','raspoloženje','istraživanje'],
    source:[
      ['Science News Explores','https://www.snexplores.org/article/spooky-feelings-infrasound'],
      ['Frontiers in Behavioral Neuroscience',frontiers]
    ],
    media:{
      hero:'psychology/infrasound-station.jpg', display:'contain',
      alt:L('Stanica za merenje infrazvuka u Australiji.','Postaja za merjenje infrazvoka v Avstraliji.','Infrasound monitoring station in Australia.'),
      caption:L('Stanica za praćenje infrazvuka u Australiji; nije oprema iz opisanog eksperimenta.','Postaja za spremljanje infrazvoka v Avstraliji; to ni oprema iz opisanega poskusa.','An infrasound monitoring station in Australia, not the equipment used in this study.'),
      credit:'The Official CTBTO Photostream / Wikimedia Commons',
      source:commons+'Infrasound_Station_IS07_Warramunga,_Australia_(13288790024).jpg',
      license:'https://creativecommons.org/licenses/by/2.0/',
      inlines:[
        {src:'psychology/frontiers-g001.webp',afterSection:1,
         alt:L('Šema prostorija i redosled koraka u eksperimentu.','Shema prostorov in poteka poskusa.','Laboratory layout and sequence of the experiment.'),
         caption:L('Raspored opreme i tok eksperimenta; oznake na originalnoj slici su na engleskom.','Razpored opreme in potek poskusa; oznake na izvirni sliki so v angleščini.','Equipment layout and study procedure; labels in the original figure are in English.'),
         credit:'Scatterty i saradnici / Frontiers in Behavioral Neuroscience',source:frontiers,license:'https://creativecommons.org/licenses/by/4.0/'},
        {src:'psychology/frontiers-g002.webp',afterSection:2,
         alt:L('Grafikoni doživljaja učesnika i nivoa kortizola.','Grafi občutkov udeležencev in ravni kortizola.','Charts of participants’ ratings and cortisol levels.'),
         caption:L('Rezultati studije: prepoznavanje infrazvuka, ocene muzike i kortizol; originalni grafikoni su na engleskom.','Rezultati raziskave: zaznavanje infrazvoka, ocene glasbe in kortizol; izvirni grafi so v angleščini.','Study results: infrasound detection, music ratings and cortisol; original chart labels are in English.'),
         credit:'Scatterty i saradnici / Frontiers in Behavioral Neuroscience',source:frontiers,license:'https://creativecommons.org/licenses/by/4.0/'}
      ]
    },
    translations:translations('infrasound',
      {sr:'moze-li-infrazvuk-da-utice-na-raspolozenje',sl:'ali-lahko-infrazvok-vpliva-na-razpolozenje',en:'can-infrasound-affect-mood'},
      L('Infrazvuk ima frekvenciju nižu od približno 20 Hz i često ga ne čujemo. U malom eksperimentu 36 studenata izlaganje signalu oko 18 Hz bilo je povezano s razdražljivošću, ocenom muzike i višim kortizolom. Studija nije pokazala porast straha ili anksioznosti. Uzorak, trajanje i frekvencija bili su ograničeni, pa nalaz ne objašnjava sve neprijatne doživljaje u stvarnim zgradama.',
        'Infrazvok ima frekvenco pod približno 20 Hz in ga pogosto ne slišimo. V majhnem poskusu s 36 študenti je bila izpostavljenost signalu okrog 18 Hz povezana z razdražljivostjo, oceno glasbe in višjim kortizolom. Raziskava ni pokazala porasta strahu ali tesnobe. Vzorec, trajanje in frekvenca so bili omejeni, zato ugotovitev ne pojasni vseh neprijetnih občutkov v resničnih stavbah.',
        'Infrasound has a frequency below roughly 20 Hz and is often not heard. In a small experiment with 36 students, exposure near 18 Hz was linked to irritation, music ratings and higher cortisol. The study did not find a rise in fear or anxiety. Its sample, duration and frequency were limited, so the result cannot explain every uncomfortable experience in real buildings.'),
      L('Infrazvuk — zvuk frekvencije niže od približno 20 Hz. Frekvencija — broj oscilacija u sekundi. Kortizol — hormon uključen u odgovor organizma na različita opterećenja. Kontrolna grupa — grupa za poređenje koja nije primila ispitivani signal.',
        'Infrazvok — zvok s frekvenco pod približno 20 Hz. Frekvenca — število nihajev na sekundo. Kortizol — hormon, ki sodeluje pri telesnem odzivu na obremenitve. Kontrolna skupina — primerjalna skupina, ki ni prejela preskušanega signala.',
        'Infrasound — sound below roughly 20 Hz. Frequency — oscillations per second. Cortisol — a hormone involved in responses to challenges. Control group — the comparison group that did not receive the tested signal.'))
  }
];
