import { L } from './feature-core.mjs';
import { approvedArticleTexts } from './approved-article-texts.mjs';

const nasaStory = 'https://science.nasa.gov/missions/nasas-lucy-reveals-wobbling-peanut-shaped-asteroid/';
const nasaImage = 'https://science.nasa.gov/blogs/lucy/2025/07/02/nasas-lucy-mission-provides-full-view-of-asteroid-donaldjohanson/';
const nasaVisuals = 'https://svs.gsfc.nasa.gov/5628';
const nasaUsage = 'https://www.nasa.gov/nasa-brand-center/images-and-media/';

export const lucyFeature = {
  id:'lucy-donaldjohanson-wobble', category:'space', rubrics:[],
  image:'lucy-donaldjohanson-wobble', kind:'news', date:'2026-09-24', read:10,
  readByLang:{sr:10,sl:10,en:10}, level:'medium',
  tags:['asteroidi','Lucy','rotacija','Sunčev sistem'],
  source:[
    ['NASA Science',nasaStory],
    ['Science','https://doi.org/10.1126/science.aec0503'],
    ['NASA Scientific Visualization Studio',nasaVisuals]
  ],
  media:{
    hero:'lucy/donaldjohanson-full.png', display:'contain',
    alt:L('Celovit snimak asteroida Donaldjohanson, dva režnja spojena uskim vratom.',
      'Celovit posnetek asteroida Donaldjohanson z dvema režnjema in ozkim vratom.',
      'Full view of asteroid Donaldjohanson, with two lobes joined by a narrow neck.'),
    caption:L('Lucy je snimila ceo asteroid oko 3,2 minuta pre najbližeg prolaska 20. aprila 2025; telo se vidi u celosti.',
      'Lucy je celoten asteroid posnela približno 3,2 minute pred največjim približanjem 20. aprila 2025.',
      'Lucy photographed the entire asteroid about 3.2 minutes before closest approach on 20 April 2025.'),
    credit:'NASA/Goddard/SwRI/Johns Hopkins APL', source:nasaImage, license:nasaUsage,
    inlines:[
      {
        src:'lucy/donaldjohanson-rotation.jpg', afterSection:2,
        alt:L('Naučna rekonstrukcija dvodelnog oblika asteroida Donaldjohanson.',
          'Znanstvena rekonstrukcija dvodelne oblike asteroida Donaldjohanson.',
          'Scientific reconstruction of Donaldjohanson’s two-lobed shape.'),
        caption:L('Model oblika rekonstruisan je iz snimaka. Prikaz nije zasebna fotografija asteroida tokom celog ciklusa rotacije.',
          'Model oblike je sestavljen iz posnetkov. Prikaz ni samostojna fotografija celotnega cikla vrtenja.',
          'A shape model reconstructed from images, not a photograph of an entire rotation cycle.'),
        credit:'Kel Elkins/NASA Scientific Visualization Studio/DLR', source:nasaVisuals, license:nasaUsage
      },
      {
        src:'lucy/donaldjohanson-spectrum.jpg', afterSection:5,
        alt:L('Infracrveni spektri Donaldjohansona i meteorita QUE 97990.',
          'Infrardeča spektra Donaldjohansona in meteorita QUE 97990.',
          'Infrared spectra of Donaldjohanson and the QUE 97990 meteorite.'),
        caption:L('Udubljenje na grafikonu blizu 2,8 mikrometara jedan je od tragova hemijski promenjenih minerala; oznake na NASA-inom prikazu su na engleskom.',
          'Padec krivulje blizu 2,8 mikrometra je ena od sledi kemično spremenjenih mineralov; oznake na Nasinem grafu so v angleščini.',
          'The dip near 2.8 micrometres is one clue to altered minerals; NASA’s original chart labels are in English.'),
        credit:'NASA/Goddard/SwRI/Dan Gallagher', source:nasaVisuals, license:nasaUsage
      }
    ]
  },
  translations:Object.fromEntries(['sr','sl','en'].map(lang=>[lang,{
    ...approvedArticleTexts.lucy[lang],
    slug:{sr:'asteroid-koji-se-klati-sta-je-lucy-saznala-o-donaldjohansonu',sl:'asteroid-ki-se-maje-kaj-je-lucy-izvedela-o-donaldjohansonu',en:'wobbling-asteroid-what-lucy-learned-about-donaldjohanson'}[lang],
    remember:L('Lucy je 2025. proletela pored asteroida Donaldjohanson, a analiza objavljena 2026. otkrila je njegovo složeno klatanje. Telo ima dva režnja, verovatno spojena posle davnog sudara. Sunčevo zagrevanje i ponovno zračenje mogli su veoma sporo da uspore njegovu rotaciju. Gline bogate gvožđem ukazuju na kratkotrajno dejstvo vode na starijem matičnom telu, a ne na vodu koja danas teče po asteroidu.',
      'Lucy je leta 2025 poletela mimo Donaldjohansona, analiza iz leta 2026 pa je razkrila njegovo zapleteno opletanje. Telo ima dva režnja, ki sta se verjetno združila po davnem trku. Sončevo segrevanje in toplotno sevanje sta lahko zelo počasi upočasnila vrtenje. Železove gline kažejo na kratko delovanje vode v starejšem matičnem telesu, ne na današnjo tekočo vodo.',
      'Lucy flew past Donaldjohanson in 2025, and a 2026 analysis revealed its complex tumbling. The body has two lobes that probably joined after an ancient collision. Solar heating and thermal radiation may have slowed its spin over millions of years. Iron-rich clays point to brief water alteration in an older parent body, not liquid water flowing there today.')[lang]
  }]))
};
