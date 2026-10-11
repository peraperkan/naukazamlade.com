import {printingTranslations} from './feature-3dprinting-translations.mjs';

const mediaRoot='3d-printing-20261008/';
const t=(sr,sl,en)=>({sr,sl,en});
const commons='https://commons.wikimedia.org/wiki/File:';

export const printingFeature={
  id:'how-3d-printers-work',category:'technology',rubrics:['explain'],image:'3d-printing',kind:'evergreen',date:'2026-10-08',read:11,
  readByLang:{sr:11,sl:12,en:11},level:'medium',tags:['3D štampa','aditivna proizvodnja','prototipovi'],
  source:[
    ['U.S. Department of Energy','https://www.energy.gov/'],
    ['Creality','https://www.creality.com/'],
    ['Sinterit','https://sinterit.com/'],
    ['Wikipedia','https://www.wikipedia.org/'],
    ['Skillshare','https://www.skillshare.com/'],
    ['SelfCAD','https://www.selfcad.com/'],
    ['3MF Consortium','https://3mf.io/'],
    ['NIOSH','https://www.cdc.gov/niosh/'],
    ['U.S. Food and Drug Administration','https://www.fda.gov/']
  ],
  media:{
    hero:mediaRoot+'hero-prusa.webp',display:'contain',
    alt:t('Ceo mali 3D štampač sa kalemom filamenta.','Celoten manjši 3D-tiskalnik s kolutom filamenta.','A complete desktop 3D printer with a filament spool.'),
    caption:t('Slika 1. Primer kućnog 3D štampača koji nanosi rastopljenu plastiku u slojevima.','Slika 1. Primer namiznega 3D-tiskalnika, ki nalaga zmehčano plastiko po plasteh.','Figure 1. A desktop 3D printer that lays down softened plastic in layers.'),
    credit:'Nodin Cutfeet',source:commons+'3D_printer.png',license:'https://creativecommons.org/licenses/by-sa/4.0/',
    inlines:[
      {src:mediaRoot+'slicer.webp',afterSection:2,alt:t('Program Cura prikazuje model čamca podeljen na slojeve.','Program Cura prikazuje model čolna, razdeljen na plasti.','Cura shows a model boat divided into print layers.'),caption:t('Slika 2. Program za pripremu štampe pokazuje slojeve i planirane putanje.','Slika 2. Program za pripravo tiska kaže plasti in načrtovane poti.','Figure 2. Slicing software displays layers and planned toolpaths.'),credit:'Keanu Dölle',source:commons+'Cura_previewing_sliced_3D_model.png',license:'https://creativecommons.org/licenses/by-sa/4.0/'},
      {src:mediaRoot+'fdm.webp',afterSection:3,alt:t('Šema mlaznice koja polaže plastičnu nit sloj preko sloja.','Shema šobe, ki nalaga plastično nitko plast za plastjo.','Diagram of a nozzle laying plastic strand over previous layers.'),caption:t('Slika 3. Princip štampe istiskivanjem plastičnog materijala.','Slika 3. Načelo tiskanja z iztiskanjem plastike.','Figure 3. The principle of plastic extrusion printing.'),credit:'Gringer',source:commons+'FDM_printing_diagram.png',license:'https://creativecommons.org/publicdomain/zero/1.0/'},
      {src:mediaRoot+'pla-spiral.webp',afterSection:3,alt:t('Odštampan spiralni predmet sa vidljivim slojevima.','Natisnjen spiralni predmet z vidnimi plastmi.','A printed spiral object with visible layers.'),caption:t('Slika 4. Tragovi pojedinačnih slojeva ostaju vidljivi na gotovom predmetu.','Slika 4. Sledi posameznih plasti so vidne tudi na končnem predmetu.','Figure 4. Individual layers remain visible on a finished object.'),credit:'Murat Bengisu',source:commons+'PLA_Spiral_3D.jpg',license:'https://creativecommons.org/licenses/by-sa/4.0/'},
      {src:mediaRoot+'sla.webp',afterSection:4,alt:t('Šema stereolitografskog štampača sa svetlošću i posudom smole.','Shema stereolitografskega tiskalnika s svetlobo in posodo smole.','Diagram of a stereolithography printer with light and a resin vat.'),caption:t('Slika 5. Svetlost očvršćava izabrane delove tečne smole.','Slika 5. Svetloba strdi izbrane dele tekoče smole.','Figure 5. Light solidifies selected parts of liquid resin.'),credit:'Materialgeeza; vektorska obrada Pwnagic',source:commons+'Stereolithography_apparatus.svg',license:'https://creativecommons.org/licenses/by-sa/3.0/'},
      {src:mediaRoot+'sls.webp',afterSection:4,alt:t('Šema selektivnog laserskog sinterovanja u sloju praha.','Shema selektivnega laserskega sintranja v plasti prahu.','Diagram of selective laser sintering in a powder bed.'),caption:t('Slika 6. Laser spaja čestice praha na mestima gde treba da nastane predmet.','Slika 6. Laser poveže delce prahu tam, kjer naj nastane predmet.','Figure 6. A laser joins powder particles where the object should form.'),credit:'FM1418',source:commons+'Selective_Laser_Sintering_.png',license:'https://creativecommons.org/licenses/by-sa/4.0/'}
    ]
  },
  comparison:{
    afterSection:4,
    sr:{headers:['Postupak','Početni materijal','Šta gradi sloj','Posle štampe'],rows:[['FDM/FFF','Plastična nit','Zagrejana mlaznica nanosi materijal','Uklanjanje potpora; po potrebi obrada površine'],['SLA/DLP','Tečna smola','Svetlost očvršćava izabrane oblasti','Pranje, dodatno očvršćavanje i uklanjanje potpora'],['SLS','Polimerni prah','Laser spaja čestice u prahu','Hlađenje, vađenje iz praha i čišćenje']]},
    sl:{headers:['Postopek','Začetni material','Kaj izdela plast','Po tiskanju'],rows:[['FDM/FFF','Plastična nitka','Ogrevana šoba nalaga material','Odstranitev opor in po potrebi obdelava površine'],['SLA/DLP','Tekoča smola','Svetloba strdi izbrane dele','Pranje, dodatno strjevanje in odstranitev opor'],['SLS','Polimerni prah','Laser poveže delce prahu','Hlajenje, odstranitev prahu in čiščenje']]},
    en:{headers:['Process','Starting material','What forms a layer','After printing'],rows:[['FDM/FFF','Plastic filament','A heated nozzle deposits material','Remove supports and finish the surface if needed'],['SLA/DLP','Liquid resin','Light solidifies selected areas','Wash, cure further and remove supports'],['SLS','Polymer powder','A laser joins powder particles','Cool, remove from powder and clean']]}
  },
  translations:printingTranslations
};
