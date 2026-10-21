import {nobelChemSr} from './feature-nobel-chem-sr.mjs';
import {nobelChemTranslations} from './feature-nobel-chem-translations.mjs';

const root='nobel-chemistry-2026/';
const alt=(sr,sl,en)=>({sr,sl,en});
const commons='https://commons.wikimedia.org/wiki/File:';
const figure=(src,afterSection,afterParagraph,descriptions,credit,page,license)=>({
  src:root+src,afterSection,afterParagraph,
  alt:alt(...descriptions),
  caption:alt(...descriptions),
  credit,source:commons+page,license
});

export const nobelChemFeature={
  id:'nobel-chemistry-2026',category:'life',rubrics:[],image:'nobel-chemistry-2026',
  kind:'news',date:'2026-10-20',read:10,readByLang:{sr:10,sl:10,en:10},level:'medium',
  tags:['hemija','Nobelova nagrada','hiralnost','molekuli'],
  source:[
    ['Kraljevska švedska akademija nauka','https://www.kva.se/'],
    ['Science History Institute','https://www.sciencehistory.org/'],
    ['PubMed','https://pubmed.ncbi.nlm.nih.gov/'],
    ['FDA','https://www.fda.gov/']
  ],
  media:{
    hero:root+'kagan.jpg',display:'contain',
    portraits:[
      {src:root+'kagan.jpg',name:'Henri B. Kagan',credit:'École Polytechnique',source:commons+'Henri_Kagan.jpg',license:'https://creativecommons.org/licenses/by-sa/2.0/'},
      {src:root+'soai.jpg',name:'Kenso Soai',credit:'The Japan Times',source:'https://www.japantimes.co.jp/news/2026/10/07/japan/science-health/2026-nobel-prize-chemistry/'}
    ],
    alt:alt('Portret nobelovca Henrija Kagana.','Portret nobelovca Henrija Kagana.','Portrait of Nobel laureate Henri Kagan.'),
    caption:alt('Henri B. Kagan, jedan od dobitnika Nobelove nagrade za hemiju 2026.','Henri B. Kagan, eden od nagrajencev za kemijo 2026.','Henri B. Kagan, one of the 2026 Chemistry Nobel laureates.'),
    credit:'École Polytechnique',source:commons+'Henri_Kagan.jpg',license:'https://creativecommons.org/licenses/by-sa/2.0/',
    inlines:[
      figure('pasteur-crystals.jpg',1,0,[
        'Kristali amonijum tartarata iz Pasterovog muzeja, povezani sa istorijom sterehemije.',
        'Kristali amonijevega tartrata iz Pasteurjevega muzeja, povezani z zgodovino stereokemije.',
        'Ammonium tartrate crystals at the Pasteur Museum, linked to the history of stereochemistry.'
      ],'Marie-Lan Taÿ Pamart','Left_ammonium_tartrate_crystals_Mus%C3%A9e_Pasteur_Cr%C3%A9er_le_cristal.jpg','https://creativecommons.org/licenses/by/4.0/'),
      figure('carvone.svg',2,0,[
        'Dva prostorna oblika karvona imaju istu formulu, ali različit raspored u prostoru.',
        'Dve prostorski različni obliki karvona imata enako formulo.',
        'The two spatial forms of carvone share a formula but differ in arrangement.'
      ],'Walkerma i Karlhahn','Carvone.svg','https://commons.wikimedia.org/wiki/Commons:Public_domain'),
      figure('soai-reaction.png',4,0,[
        'Šema Soaijeve reakcije: diizopropil-cink i aldehid daju hiralni alkohol.',
        'Shema Soaijeve reakcije: diizopropilcink in aldehid tvorita kiralni alkohol.',
        'Soai reaction scheme: diisopropylzinc and an aldehyde produce a chiral alcohol.'
      ],'Yongrenjie','Soai_reaction_scheme.png','https://creativecommons.org/licenses/by-sa/4.0/')
    ]
  },
  translations:{sr:nobelChemSr,...nobelChemTranslations}
};
