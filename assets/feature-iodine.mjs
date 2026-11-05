import {iodineSr} from './feature-iodine-sr.mjs';
import {iodineEn,iodineSl} from './feature-iodine-translations.mjs';

const tr=(sr,sl,en)=>({sr,sl,en});
const commons=name=>`https://commons.wikimedia.org/wiki/File:${name}`;
const figure=(file,n,section,paragraph,description,credit,source,license)=>({
  src:`iodine/${file}`,afterSection:section,afterParagraph:paragraph,
  alt:tr(...description),
  caption:tr(...description.map((d,i)=>`${i===2?'Figure':'Slika'} ${n}. ${d}`)),
  credit,source,license
});

export const iodineFeature={
  id:'iodized-salt-brain',category:'life',rubrics:[],image:'iodized-salt-brain',kind:'evergreen',date:null,
  read:13,readByLang:{sr:13,sl:13,en:13},level:'medium',
  tags:['jod','štitna žlezda','jodirana so','javno zdravlje'],
  source:[
    ['NIH Office of Dietary Supplements','https://ods.od.nih.gov/'],
    ['UNICEF','https://www.unicef.org/'],
    ['PubMed Central','https://pmc.ncbi.nlm.nih.gov/'],
    ['WHO','https://www.who.int/']
  ],
  media:{
    hero:'iodine/iodine-evaporating.jpg',display:'contain',
    alt:tr('Tamni kristali joda iz kojih se podiže ljubičasta para','Temni kristali joda z vijolično paro','Dark iodine crystals releasing violet vapour'),
    caption:tr('Slika 1. Kristali joda i karakteristična ljubičasta para.','Slika 1. Kristali joda in značilna vijolična para.','Figure 1. Iodine crystals and their characteristic violet vapour.'),
    credit:'Jurii / Lanthanum-138 · CC BY 3.0',source:commons('Iodine-evaporating.jpg'),license:'https://creativecommons.org/licenses/by/3.0/',
    inlines:[
      figure('historical-goiter.jpg',2,2,1,[
        'Istorijska medicinska ilustracija uvećane štitne žlezde iz 1874.','Zgodovinska medicinska ilustracija povečane ščitnice iz leta 1874.','Historical medical illustration of an enlarged thyroid gland from 1874.'
      ],'Theodor Kocher · javno vlasništvo',commons('Goiter_Kocher_1874.jpg'),''),
      figure('iodized-salt.jpg',3,3,5,[
        'Pakovanje jodirane soli: mala promena u namirnici koju koristi mnogo domaćinstava.','Zavitek jodirane soli: majhna sprememba živila, ki ga uporablja veliko gospodinjstev.','A packet of iodized salt: a small change to a food many households use.'
      ],'Ethantrott · CC BY-SA 4.0',commons('Iodized_salt_packet.jpg'),'https://creativecommons.org/licenses/by-sa/4.0/'),
      figure('thyroid-system-sr.png',4,5,2,[
        'Šema veze između hipotalamusa, hipofize i štitne žlezde; oznake su na srpskoj latinici.','Shema povezave med hipotalamusom, hipofizo in ščitnico; oznake so v srbski latinici.','Diagram of the hypothalamus, pituitary and thyroid feedback loop; labels are in Serbian Latin script.'
      ],'Prevod i obrada prema šemi Mikaela Häggströma · CC0',commons('Thyroid_system.png'),'https://creativecommons.org/publicdomain/zero/1.0/'),
      figure('salt-factory.jpg',5,8,0,[
        'Proizvodnja jodirane soli u Laosu.','Proizvodnja jodirane soli v Laosu.','Production of iodized salt in Laos.'
      ],'BigBrotherMouse · CC BY-SA 4.0',commons('Iodized_salt_factory_in_Laos.JPG'),'https://creativecommons.org/licenses/by-sa/4.0/'),
      figure('kelp.jpg',6,10,0,[
        'Kelp, morska alga koja može akumulirati velike količine joda.','Kelp, morska alga, ki lahko kopiči velike količine joda.','Kelp, a seaweed that can accumulate large amounts of iodine.'
      ],'Omelele Ngxameleni · CC0',commons('Laminaria_(kelp).jpg'),'https://creativecommons.org/publicdomain/zero/1.0/'),
      figure('salt-crystals.jpg',7,18,0,[
        'Kristali soli pod mikroskopom; njihov oblik utiče na masu koja staje u kašičicu.','Kristali soli pod mikroskopom; njihova oblika vpliva na maso v čajni žlički.','Salt crystals under a microscope; crystal shape affects the mass in a teaspoon.'
      ],'Давид Андронов · CC BY 4.0',commons('Salt_crystals_under_the_microscope.jpg'),'https://creativecommons.org/licenses/by/4.0/')
    ]
  },
  translations:{sr:iodineSr,sl:iodineSl,en:iodineEn}
};
