import { L } from './feature-core.mjs';
import { approvedArticleTexts } from './approved-article-texts.mjs';

const portrait = 'https://commons.wikimedia.org/wiki/File:Noether.jpg';
const pendulum = 'https://commons.wikimedia.org/wiki/File:Simple_pendulum.jpg';
const redshift = 'https://science.nasa.gov/asset/hubble/what-is-cosmological-redshift/';
const publicDomain = 'https://creativecommons.org/publicdomain/mark/1.0/';
const nasaUsage = 'https://www.nasa.gov/nasa-brand-center/images-and-media/';

export const noetherFeature = {
  id:'noether-symmetry-energy', category:'physics', rubrics:['history'],
  image:'noether-symmetry-energy', kind:'explainer', date:'2026-09-24', read:10,
  readByLang:{sr:10,sl:10,en:10}, level:'medium',
  tags:['Emi Neter','simetrija','energija','istorija nauke'],
  source:[
    ['Quanta Magazine','https://www.quantamagazine.org/how-noethers-theorem-revolutionized-physics-20250207/'],
    ['Emmy Noether — Invariant Variation Problems','https://arxiv.org/abs/physics/0503066'],
    ['University of Göttingen','https://www.uni-goettingen.de/de/74993.html'],
    ['MacTutor','https://mathshistory.st-andrews.ac.uk/Biographies/Noether_Emmy/'],
    ['NASA Science',redshift]
  ],
  media:{
    hero:'noether/emmy-noether.jpg', display:'contain',
    alt:L('Portret Emi Neter iz mladosti; vide se lice i figura.',
      'Portret mlade Emmy Noether, na katerem sta vidna obraz in postava.',
      'A portrait of Emmy Noether as a young woman, showing her face and figure.'),
    caption:L('Emi Neter je 1918. otkrila opštu vezu između neprekidnih simetrija i zakona održanja.',
      'Emmy Noether je leta 1918 odkrila splošno povezavo med zveznimi simetrijami in zakoni ohranitve.',
      'In 1918, Emmy Noether uncovered a general connection between continuous symmetries and conservation laws.'),
    credit:'Nepoznati autor / Wikimedia Commons', source:portrait, license:publicDomain,
    inlines:[
      {
        src:'noether/simple-pendulum.jpg', afterSection:1,
        alt:L('Crtež jednostavnog klatna, kuglice, niti i putanje.',
          'Risba preprostega nihala s kroglico, vrvico in potjo.',
          'Diagram of a simple pendulum showing bob, string and trajectory.'),
        caption:L('Klatno služi kao ogled: na krajevima putanje dominira potencijalna, a pri dnu kinetička energija. Oznake na izvornom crtežu su na engleskom.',
          'Nihalo je primer poskusa: na skrajnih legah prevladuje potencialna, na dnu pa kinetična energija. Oznake na izvirni risbi so v angleščini.',
          'A pendulum experiment: potential energy is greatest at the ends, kinetic energy near the bottom. Labels on the source diagram are in English.'),
        credit:'Unc.hbar / Wikimedia Commons', source:pendulum, license:publicDomain
      },
      {
        src:'noether/cosmological-redshift.png', afterSection:6,
        alt:L('NASA-in infografik pokazuje kako se talasna dužina svetlosti povećava dok se svemir širi.',
          'Nasina infografika prikazuje daljšanje valovne dolžine svetlobe med širjenjem vesolja.',
          'NASA infographic showing light wavelengths stretching as the universe expands.'),
        caption:L('Širenje prostora povećava talasnu dužinu svetlosti koja putuje kroz kosmos. NASA-in izvorni infografik ima oznake na engleskom.',
          'Širjenje prostora povečuje valovno dolžino svetlobe, ki potuje skozi vesolje. Izvirna Nasina infografika je v angleščini.',
          'Expansion stretches the wavelength of light travelling through space. NASA’s original infographic is labelled in English.'),
        credit:'NASA, ESA, Leah Hustak (STScI)', source:redshift, license:nasaUsage
      }
    ]
  },
  translations:Object.fromEntries(['sr','sl','en'].map(lang=>[lang,{
    ...approvedArticleTexts.noether[lang],
    slug:{sr:'zasto-su-simetrija-i-ocuvanje-energije-povezani',sl:'zakaj-sta-simetrija-in-ohranitev-energije-povezani',en:'why-are-symmetry-and-energy-conservation-connected'}[lang],
    remember:L('Ako pravila izolovanog sistema ostaju ista kada ogled započnemo kasnije, Neterina teorema povezuje tu neprekidnu simetriju sa očuvanjem energije. Pomeranje u prostoru povezano je sa impulsom, a obrtanje sa momentom impulsa. Klatno pokazuje razmenu kinetičke i potencijalne energije; trenje prenosi deo energije u okolinu. Za ceo svemir koji se širi jednostavan globalni bilans energije nije uopšteno definisan, iako lokalni zakoni održanja važe.',
      'Če pravila izoliranega sistema ostanejo enaka, ko poskus začnemo pozneje, Noetherin izrek to zvezno simetrijo povezuje z ohranitvijo energije. Prostorski premik je povezan z gibalno, vrtenje pa z vrtilno količino. Nihalo kaže izmenjavo kinetične in potencialne energije; trenje del energije prenese v okolico. Za celotno vesolje, ki se širi, preprosta globalna bilanca energije na splošno ni določena, čeprav lokalni zakoni ohranitve veljajo.',
      'If an isolated system’s rules stay the same when we begin an experiment later, Noether’s theorem links that continuous symmetry to energy conservation. Spatial translation corresponds to momentum, and rotation to angular momentum. A pendulum exchanges kinetic and potential energy; friction transfers some energy to the surroundings. For the entire expanding universe, a simple global energy ledger is generally not defined, although local conservation laws remain valid.')[lang]
  }]))
};
