import {mmxSr} from './feature-mmx-sr.mjs';
import {mmxTranslations} from './feature-mmx-translations.mjs';
import {mmxMedia} from './mmx-media.mjs';

const text=(sr,sl,en)=>({sr,sl,en});
const figure=(key,afterSection,afterParagraph,n,descriptions)=>({
 ...mmxMedia[key],afterSection,afterParagraph,
 alt:text(...descriptions),
 caption:text(...descriptions.map((description,index)=>`${index===2?'Figure':'Slika'} ${n}. ${description}`))
});

export const mmxFeature={
 id:'mmx-phobos-2026',category:'space',rubrics:[],
 image:'mmx-phobos-2026',kind:'news',date:'2026-10-21',read:12,readByLang:{sr:12,sl:12,en:12},level:'medium',
 tags:['svemir','Mars','Fobos','Japan','MMX'],
 source:[
  ['The Japan Times','https://www.japantimes.co.jp/'],
  ['JAXA','https://www.jaxa.jp/'],
  ['MMX/JAXA','https://www.mmx.jaxa.jp/en/'],
  ['NASA Science','https://science.nasa.gov/'],
  ['DLR','https://www.dlr.de/en'],
  ['ESA','https://www.esa.int/']
 ],
 media:{
  hero:mmxMedia['mmx-art'].src,display:'contain',
  alt:text('Umetnički prikaz cele sonde MMX u svemiru','Umetniška upodobitev cele sonde MMX v vesolju','Artist’s impression of the complete MMX spacecraft in space'),
  caption:text('Slika 1. Sonda MMX na umetničkom prikazu; stvarna letelica je tek krenula ka Marsu.','Slika 1. Sonda MMX na umetniški upodobitvi; pravo plovilo je šele odpotovalo proti Marsu.','Figure 1. Artist’s impression of MMX; the actual spacecraft has only just started its journey to Mars.'),
  credit:mmxMedia['mmx-art'].credit,source:mmxMedia['mmx-art'].source,license:mmxMedia['mmx-art'].license,
  inlines:[
   figure('h3-launch',0,1,2,['Raketa H3 pri ranijem lansiranju 2025; ova fotografija ne prikazuje let MMX iz 2026.','Raketa H3 pri starejši izstrelitvi leta 2025; fotografija ne prikazuje odprave MMX iz 2026.','An H3 rocket at an earlier launch in 2025; this photograph does not show the 2026 MMX flight.']),
   figure('phobos-main',1,0,3,['Fobos na stvarnom svemirskom snimku, sa jasno vidljivom nepravilnom površinom i kraterima.','Fobos na resničnem vesoljskem posnetku z nepravilnim površjem in kraterji.','A real spacecraft image of Phobos, showing its irregular surface and craters.']),
   figure('rover-main',2,1,4,['Rover IDEFIX pre leta, prikazan ceo sa točkovima i solarnim panelima.','Rover IDEFIX pred poletom, v celoti s kolesi in sončnimi celicami.','The complete IDEFIX rover before flight, including its wheels and solar panels.']),
   figure('corer',2,3,5,['Maketa bušača MMX pokazuje kako se uzima jezgro površinskog materijala.','Maketa vrtalnika MMX prikazuje odvzem jedra s površja.','A model of the MMX corer shows how a core of surface material is collected.']),
   figure('hayabusa',4,2,6,['Umetnički prikaz sonde Hajabusa iznad asteroida Itokava.','Umetniška upodobitev sonde Hayabusa nad asteroidom Itokawa.','Artist’s impression of Hayabusa above asteroid Itokawa.']),
   figure('ryugu',4,3,7,['Rjugu na stvarnom snimku Hajabuse 2; uzorci su stigli na Zemlju 2020.','Ryugu na resničnem posnetku Hayabuse2; vzorci so leta 2020 prispeli na Zemljo.','A real Hayabusa2 image of Ryugu; samples reached Earth in 2020.']),
   figure('slim',5,1,8,['NASA-in orbitalni snimak područja japanskog sletanja SLIM na Mesec 2024.','Nasin orbitalni posnetek območja japonskega pristanka SLIM na Luni leta 2024.','NASA orbital image of Japan’s SLIM landing area on the Moon in 2024.'])
  ]
 },
 translations:{sr:mmxSr,sl:mmxTranslations.sl,en:mmxTranslations.en}
};
