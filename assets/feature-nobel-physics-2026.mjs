import {nobelPhysicsSr} from './feature-nobel-physics-sr.mjs';
import {nobelPhysicsTranslations} from './feature-nobel-physics-translations.mjs';
import {nobelPhysicsMedia} from './nobel-physics-media.mjs';

const text=(sr,sl,en)=>({sr,sl,en});
const figure=(key,afterSection,afterParagraph,number,descriptions)=>({
  ...nobelPhysicsMedia[key],
  afterSection,afterParagraph,
  alt:text(...descriptions),
  caption:text(...descriptions.map((description,index)=>`${index===2?'Figure':'Slika'} ${number}. ${description}`))
});

export const nobelPhysicsFeature={
  id:'nobel-physics-2026',category:'physics',alsoCategories:['space'],rubrics:[],
  image:'nobel-physics-2026',kind:'news',date:'2026-10-21',read:12,
  readByLang:{sr:12,sl:13,en:12},level:'medium',
  tags:['fizika','Svemir','neutrini','Nobelova nagrada'],
  source:[
    ['Kraljevska švedska akademija nauka','https://www.kva.se/'],
    ['IceCube Neutrino Observatory','https://icecube.wisc.edu/'],
    ['KATRIN','https://www.katrin.kit.edu/'],
    ['NobelPrize.org','https://www.nobelprize.org/']
  ],
  media:{
    hero:nobelPhysicsMedia.halzen.src,display:'contain',
    alt:text('Portret Fransisa Halzena sa celom glavom u kadru','Portret Francisa Halzna s celo glavo v kadru','Portrait of Francis Halzen with his full head visible'),
    caption:text('Slika 1. Fransis Halzen, dobitnik Nobelove nagrade za fiziku 2026.','Slika 1. Francis Halzen, prejemnik Nobelove nagrade za fiziko 2026.','Figure 1. Francis Halzen, winner of the 2026 Nobel Prize in Physics.'),
    credit:nobelPhysicsMedia.halzen.credit,source:nobelPhysicsMedia.halzen.source,license:nobelPhysicsMedia.halzen.license,
    inlines:[
      figure('pauli',3,0,2,['Volfgang Pauli, autor hipoteze o čestici kasnije nazvanoj neutrino.','Wolfgang Pauli, avtor domneve o delcu, pozneje imenovanem nevtrino.','Wolfgang Pauli, who proposed the particle later named the neutrino.']),
      figure('cowan-reines',3,1,3,['Klajd Kovan i Frederik Rajnes, pioniri direktne detekcije reaktorskih antineutrina.','Clyde Cowan in Frederick Reines, pionirja neposrednega zaznavanja reaktorskih antinevtrinov.','Clyde Cowan and Frederick Reines, pioneers of direct reactor-antineutrino detection.']),
      figure('drill',4,0,4,['Bušenje i postavljanje senzora IceCube-a na Južnom polu.','Vrtanje in nameščanje senzorjev IceCuba na Južnem polu.','Drilling and installing IceCube sensors at the South Pole.']),
      figure('icecube',4,1,5,['Zgrade opservatorije na površini; detektorska zapremina nalazi se duboko ispod snega.','Stavbe observatorija na površju; detektor leži globoko pod snegom.','Surface buildings of the observatory; the detector is deep below the snow.']),
      figure('fermi',5,3,6,['Svemirski teleskop Fermi dopunio je neutrinsko upozorenje gama-posmatranjima izvora TXS 0506+056.','Vesoljski teleskop Fermi je nevtrinsko opozorilo dopolnil z opazovanjem žarkov gama iz TXS 0506+056.','The Fermi space telescope complemented the neutrino alert with gamma-ray observations of TXS 0506+056.'])
    ]
  },
  translations:{sr:nobelPhysicsSr,...nobelPhysicsTranslations}
};
