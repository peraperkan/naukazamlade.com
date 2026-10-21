import {optogeneticsSr} from './feature-optogenetics-sr.mjs';
import {optogeneticsTranslations} from './feature-optogenetics-translations.mjs';

const root='optogenetics-2026/';
const alt=(sr,sl,en)=>({sr,sl,en});
const commons='https://commons.wikimedia.org/wiki/File:';
const fig=(n,ext,afterSection,afterParagraph,description,credit,page,license)=>({
  src:`${root}figure-${String(n).padStart(2,'0')}.${ext}`,afterSection,afterParagraph,
  alt:alt(description[0],description[1],description[2]),
  caption:alt(`Slika ${n}. ${description[0]}`,`Slika ${n}. ${description[1]}`,`Figure ${n}. ${description[2]}`),
  credit,source:commons+page,license
});
const ccBySa4='https://creativecommons.org/licenses/by-sa/4.0/';
const ccBySa3='https://creativecommons.org/licenses/by-sa/3.0/';
const ccBy4='https://creativecommons.org/licenses/by/4.0/';
const ccBy2='https://creativecommons.org/licenses/by/2.0/';
const pd='https://commons.wikimedia.org/wiki/Commons:Public_domain';
export const optogeneticsFeature={
  id:'nobel-optogenetics-2026',category:'life',rubrics:[],image:'optogenetics-2026',kind:'news',date:'2026-10-13',read:12,
  readByLang:{sr:12,sl:12,en:12},level:'medium',tags:['optogenetika','Nobelova nagrada','neuronauka','vid'],
  source:[
    ['Karolinska Institutet','https://ki.se/en'],
    ['PubMed','https://pubmed.ncbi.nlm.nih.gov/'],
    ['PNAS','https://www.pnas.org/'],
    ['MIT News','https://news.mit.edu/'],
    ['Nature','https://www.nature.com/'],
    ['Inserm','https://www.inserm.fr/en/'],
    ['The New England Journal of Medicine','https://www.nejm.org/'],
    ['Stanford Medicine','https://med.stanford.edu/']
  ],
  media:{
    hero:root+'figure-01.jpg',display:'contain',
    alt:alt('Karl Dajserot, dobitnik Nobelove nagrade za medicinu 2026.','Karl Deisseroth, dobitnik Nobelove nagrade za medicino 2026.','Karl Deisseroth, recipient of the 2026 Nobel Prize in medicine.'),
    caption:alt('Karl Dajserot, jedan od trojice dobitnika nagrade.','Karl Deisseroth, eden od treh nagrajencev.','Karl Deisseroth, one of the three laureates.'),
    credit:'Christopher Michel',source:commons+'Karl_Deisseroth_by_Christopher_Michel_05.jpg',license:ccBySa4,
    portraits:[
      {src:root+'figure-01.jpg',name:'Karl Deisseroth',credit:'Christopher Michel',source:commons+'Karl_Deisseroth_by_Christopher_Michel_05.jpg',license:ccBySa4},
      {src:root+'figure-02.jpg',name:'Peter Hegemann',credit:'Millencolin',source:commons+'Peter_Hegemann.jpg',license:ccBySa4},
      {src:root+'figure-03.png',name:'Georg Nagel',credit:'Millencolin',source:commons+'Prof._Dr._Georg_Nagel.png',license:'https://creativecommons.org/publicdomain/zero/1.0/'}
    ],
    inlines:[
      fig(4,'jpg',1,0,['Jednoćelijska alga Chlamydomonas snimljena elektronskim mikroskopom.','Enocelična alga Chlamydomonas pod elektronskim mikroskopom.','Single-celled Chlamydomonas alga under an electron microscope.'],'Dartmouth Electron Microscope Facility','Chlamydomonas6-1.jpg',pd),
      fig(5,'png',1,3,['Šema kanala ChR2 i protoka jona kroz ćelijsku membranu.','Shema kanala ChR2 in pretoka ionov skozi celično membrano.','Diagram of the ChR2 channel and ion flow across a cell membrane.'],'Millencolin','ChR2scheme.png',ccBySa3),
      fig(6,'png',2,0,['Koraci optogenetičke stimulacije, od gena do svetlosnog impulsa.','Koraki optogenetske stimulacije od gena do svetlobnega impulza.','Steps of optogenetic stimulation, from the gene to the light pulse.'],'Pama, Colzato and Hommel','Optogenetic_stimulation_consists_of_several_steps.png',ccBy4),
      fig(7,'jpg',2,2,['Zabeležen odgovor neurona na optogenetičke svetlosne impulse.','Zabeležen odziv nevrona na optogenetske svetlobne impulze.','Recorded neuronal response to optogenetic light pulses.'],'Cooper Lab / Doneuron','Example_of_optogenetic_activation_of_prefrontal_cortex.jpg',ccBySa3),
      fig(8,'png',4,0,['Slojevi mrežnjače i ćelije koje obrađuju svetlosne signale.','Plasti mrežnice in celice, ki obdelujejo svetlobne signale.','Retinal layers and the cells that process light signals.'],'Peter Hartmann, Marc Gabriel Schmid et al.','Retina_layers.svg',ccBySa3),
      fig(9,'jpg',4,1,['Očno dno kod uznapredovalog retinitis pigmentosa.','Očesno ozadje pri napredovalem retinitis pigmentosa.','Fundus in advanced retinitis pigmentosa.'],'Christian Hamel','Fundus_of_patient_with_retinitis_pigmentosa,_end_stage.jpg',ccBy2),
      fig(10,'jpg',5,0,['Građa omotača AAV2, jednog tipa virusnog nosača gena.','Zgradba ovojnice AAV2, ene vrste virusnega prenašalca genov.','Structure of an AAV2 capsid, one type of gene-delivery vector.'],'Jazzlw','AAV2_Ribbon_Diagram.jpg',ccBySa4)
    ]
  },
  translations:{sr:optogeneticsSr,...optogeneticsTranslations}
};
