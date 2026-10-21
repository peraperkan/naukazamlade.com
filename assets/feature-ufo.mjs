import {ufoSr} from './ufo-sr.mjs';
import {ufoSl} from './ufo-sl.mjs';
import {ufoEn} from './ufo-en.mjs';

const tr = (sr,sl,en) => ({sr,sl,en});

export const ufoFeature = {
  id:'diy-ufo-boat', category:'diy', rubrics:[], image:'diy-ufo-boat',
  kind:'evergreen', date:null, read:9, level:'medium',
  tags:['fizika','tehnologija','plovila'],
  source:[
    ['Popular Science — Man builds jet ski UFO of his (literal) dreams','https://www.popsci.com/technology/man-builds-ufo-jet-ski-boat/'],
    ['Tran Long Ho / YouTube — original construction video','https://www.youtube.com/watch?v=tQ1nMJDWj3I'],
    ['Yamaha Motor — Personal watercraft','https://global.yamaha-motor.com/about/business/pwc/'],
    ['The Physics Classroom — Buoyant force and Archimedes’ principle','https://www.physicsclassroom.com/class/Fluids/Pressure/Buoyant-Force-and-Archimedes-Principle'],
    ['TurnBackHoax — verification of miscaptioned video','https://turnbackhoax.id/2024/09/26/salah-video-seorang-pria-menemukan-ufo-di-sungai-citarum/']
  ],
  translations:{sr:ufoSr,sl:ufoSl,en:ufoEn},
  media:{
    hero:'https://www.popsci.com/wp-content/uploads/2026/08/ufo-boat-lead.png?quality=85&w=2000',
    display:'contain',
    alt:tr('Čitav Hoov čamac u obliku letećeg tanjira plovi rekom','Celoten Hojev čoln v obliki letečega krožnika pluje po reki','Ho’s complete flying-saucer boat traveling along a river'),
    caption:tr('Hoov čamac tokom vožnje na reci.','Hojev čoln med vožnjo po reki.','Ho’s boat during its run on the river.'),
    credit:'Tran Long Ho / Popular Science',
    source:'https://www.popsci.com/technology/man-builds-ufo-jet-ski-boat/',
    inlines:[{
      src:'diy/ufo-glossary/kalup.svg', afterSection:1,
      alt:tr('Šema rotirajuće ruke koja oblikuje peščani kalup','Shema vrteče se roke, ki oblikuje peščeni kalup','Diagram of a rotating arm shaping the sand mold'),
      caption:tr('Rotirajuća ruka skida višak peska i pomaže da obe strane budu približno simetrične.','Vrteča se roka odstranjuje odvečni pesek in pomaga oblikovati približno simetrični strani.','The rotating arm removes excess sand to help produce an approximately symmetric shape.'),
      credit:'NZM — šematski prikaz', source:'https://naukazamlade.com/'
    },{
      src:'diy/ufo-glossary/potisak.svg', afterSection:2,
      alt:tr('Šema potiska vode i težine čamca','Shema vzgona vode in teže čolna','Diagram of buoyancy and the boat’s weight'),
      caption:tr('Plovilo pluta kada težina istisnute vode odgovara njegovoj ukupnoj težini.','Plovilo plava, ko teža izpodrinjene vode ustreza njegovi skupni teži.','A craft floats when the displaced water weighs as much as the craft.'),
      credit:'NZM — šematski prikaz', source:'https://naukazamlade.com/'
    },{
      videoId:'tQ1nMJDWj3I', afterSection:3,
      alt:tr('Originalni snimak izrade i probne vožnje Hoovog čamca','Izvirni posnetek izdelave in poskusne vožnje Hojevega čolna','Original video showing the construction and trial of Ho’s boat'),
      caption:tr('Originalni snimak gradnje i probe koji je ugrađen i u članak Popular Sciencea.','Izvirni posnetek izdelave in preizkusa, vključen tudi v članek Popular Science.','The original construction and trial video, also embedded by Popular Science.'),
      credit:'Tran Long Ho / YouTube', source:'https://www.youtube.com/watch?v=tQ1nMJDWj3I'
    }]
  }
};
