import {petTranslations} from './feature-pet-translations.mjs';

const t=(sr,sl,en)=>({sr,sl,en});
const root='pet-20261008/';
const commons='https://commons.wikimedia.org/wiki/File:';
export const petFeature={
  id:'pet-scanner-explained',category:'technology',alsoCategories:['life'],rubrics:['explain'],image:'pet-scanner',kind:'evergreen',date:'2026-10-08',read:13,readByLang:{sr:13,sl:14,en:13},level:'medium',tags:['PET','medicinska tehnologija','biologija','onkologija'],
  source:[
    ['IAEA','https://www.iaea.org/'],['RadiologyInfo','https://www.radiologyinfo.org/'],['National Cancer Institute','https://www.cancer.gov/'],['SNMMI','https://snmmi.org/'],['American Heart Association','https://www.heart.org/'],['National Institute on Aging','https://www.nia.nih.gov/'],['U.S. Food and Drug Administration','https://www.fda.gov/'],['UC Davis Health','https://health.ucdavis.edu/']
  ],
  media:{
    hero:root+'hero-pet-ct.webp',display:'contain',
    alt:t('Kombinovani PET i CT skener u bolničkoj sali','Kombinirani skener PET in CT v bolnišnici','A combined PET and CT scanner in a hospital'),
    caption:t('Slika 1. Kombinovani PET/CT uređaj.','Slika 1. Kombinirana naprava PET/CT.','Figure 1. A combined PET/CT scanner.'),
    credit:'liz west',source:commons+'PET_CT_scan.jpg',license:'https://creativecommons.org/licenses/by/2.0/',
    inlines:[
      {src:root+'fig-fdg.svg',afterSection:1,alt:t('Molekulska struktura fluorodeoksiglukoze sa fluorom 18','Molekulska zgradba fluorodeoksiglukoze s fluorom 18','Molecular structure of fluorine-18 fluorodeoxyglucose'),caption:t('Slika 2. Fluor-18 ugrađen je u molekul sličan glukozi.','Slika 2. Fluor-18 je del molekule, podobne glukozi.','Figure 2. Fluorine-18 is part of a glucose-like molecule.'),credit:'Anypodetos',source:commons+'Fluorodeoxyglucose_18-F_skeletal.svg'},
      {src:root+'fig-detection.png',afterSection:2,alt:t('Šema PET detekcije parova fotona','Shema zaznavanja parov fotonov s PET','Diagram of PET photon-pair detection'),caption:t('Slika 3. Par fotona određuje liniju odgovora kroz detektorski prsten.','Slika 3. Par fotonov določi linijo odziva skozi obroč detektorjev.','Figure 3. A photon pair defines a line of response through the detector ring.'),credit:'Jens Maus',source:commons+'PET-schema.png'},
      {videoSrc:root+'pet-skener-video.mp4',afterSection:2,alt:t('Video koji objašnjava kako PET skener pronalazi promene u telu','Video, ki razlaga delovanje skenerja PET','Video explaining how a PET scanner detects changes in the body'),caption:t('Video. Kako PET skener pronalazi skrivene promene: od radiofarmaka do slike.','Video. Kako PET zazna skrite spremembe: od radiofarmaka do slike.','Video. How PET detects hidden changes: from radiopharmaceutical to image.'),credit:'Video koji je dostavio autor'},
      {src:root+'fig-fusion.jpg',afterSection:3,alt:t('Preklopljena PET i CT slika','Združena slika PET in CT','A fused PET and CT image'),caption:t('Slika 4. Funkcionalni PET signal dobija anatomsku adresu uz CT.','Slika 4. CT določi anatomski položaj funkcijskega signala PET.','Figure 4. CT gives the functional PET signal an anatomical location.'),credit:'MBq',source:commons+'CT-PET.jpg',license:'https://creativecommons.org/licenses/by-sa/3.0/'},
      {src:root+'fig-oncology.jpg',afterSection:5,alt:t('Klinički PET CT snimak tumorske bolesti','Klinični posnetek PET/CT tumorske bolezni','A clinical PET/CT scan of tumour disease'),caption:t('Slika 5. Primer raširene bolesti; zasebna slika ne može zameniti dijagnozu.','Slika 5. Primer razširjene bolezni; posamezna slika ne zadošča za diagnozo.','Figure 5. An example of widespread disease; an isolated image cannot establish a diagnosis.'),credit:'Myohan',source:commons+'Abnl_petct.jpg',license:'https://creativecommons.org/licenses/by/3.0/'},
      {src:root+'fig-cardiology.jpg',afterSection:6,alt:t('SPECT i PET prikazi dotoka krvi u srčani mišić','Slikanje prekrvitve srčne mišice s SPECT in PET','SPECT and PET images of heart-muscle blood flow'),caption:t('Slika 6. Procena perfuzije srca uz SPECT i PET.','Slika 6. Ocena prekrvitve srca s SPECT in PET.','Figure 6. Heart perfusion assessed with SPECT and PET.'),credit:'Driessen et al.',source:commons+'Tetrafosmin_SPECT_vs_H2O_cardiac_PET.jpg',license:'https://creativecommons.org/licenses/by/4.0/'},
      {src:root+'fig-neurology.png',afterSection:7,alt:t('Poređenje PET snimaka mozga','Primerjava posnetkov PET možganov','A comparison of brain PET images'),caption:t('Slika 7. Ilustrativno poređenje PET snimaka mozga; jedna slika nije dijagnoza.','Slika 7. Primerjava posnetkov PET možganov; ena slika ni diagnoza.','Figure 7. An illustrative brain PET comparison; one image is not a diagnosis.'),credit:'U.S. National Institute on Aging',source:commons+'PET_scan-normal_brain-alzheimers_disease_brain.PNG'}
    ]
  },
  translations:petTranslations
};
