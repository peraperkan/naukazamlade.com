import { L } from './feature-core.mjs';
import { approvedArticleTexts } from './approved-article-texts.mjs';

const commons = 'https://commons.wikimedia.org/wiki/File:';
const license = {
  by2: 'https://creativecommons.org/licenses/by/2.0/',
  by3: 'https://creativecommons.org/licenses/by/3.0/',
  by4: 'https://creativecommons.org/licenses/by/4.0/',
  sa3: 'https://creativecommons.org/licenses/by-sa/3.0/',
  sa4: 'https://creativecommons.org/licenses/by-sa/4.0/',
  cc0: 'https://creativecommons.org/publicdomain/zero/1.0/',
  pd: 'https://commons.wikimedia.org/wiki/Commons:Public_domain'
};
const picture = (file, sourceName, author, rights, afterSection, alt, caption) => ({
  src: `approved/${file}`, source: commons + sourceName, credit: author,
  license: license[rights], afterSection, alt, caption
});

const translated = (topic, slugs, remembers) => Object.fromEntries(
  ['sr','sl','en'].map(lang => [lang, {
    ...approvedArticleTexts[topic][lang], slug: slugs[lang], remember: remembers[lang]
  }])
);

export const approvedFeatures = [
  {
    id:'learning-neuroplasticity', category:'psychology', rubrics:['explain'],
    image:'learning-neuroplasticity', kind:'news', date:'2026-09-24', read:9,
    readByLang:{sr:9,sl:9,en:9}, level:'medium',
    tags:['mozak','učenje','neuroplastičnost'],
    source:[
      ['Elementarijum','https://elementarium.cpn.rs/eseji/lice-i-nalicje-neuroplasticnosti-2/?script=lat'],
      ['National Institute of Mental Health','https://www.nimh.nih.gov/health/publications/the-teen-brain-7-things-to-know'],
      ['Nature','https://www.nature.com/articles/s41586-026-10169-4'],
      ['Developmental Cognitive Neuroscience','https://www.sciencedirect.com/science/article/pii/S1878929324001476'],
      ['Association for Psychological Science','https://www.psychologicalscience.org/publications/journals/pspi/learning-techniques.html']
    ],
    media:{
      ...picture('neuroni-mikroskop.png','GFP_Neurons.png','Manuel Schottdorf / Wikimedia Commons','sa4',null,
        L('Fluorescentni snimak nervnih ćelija pacova u laboratoriji.','Fluorescenčni posnetek živčnih celic podgane v laboratoriju.','Fluorescent image of rat nerve cells grown in a laboratory.'),
        L('Nervne ćelije gajene u laboratoriji; fotografija ilustruje mrežu, a ne učenje uživo.','Živčne celice, gojene v laboratoriju; posnetek prikazuje omrežje, ne učenja v živo.','Lab-grown nerve cells illustrate a network, not learning happening in real time.')),
      hero:'approved/neuroni-mikroskop.png', display:'contain',
      inlines:[
        picture('sinapsa.svg','Neuron_synapse.svg','Curtis Neveu / Pixelsquid / Wikimedia Commons','sa3',0,
          L('Šema hemijske sinapse između neurona.','Shema kemične sinapse med nevronoma.','Diagram of a chemical synapse between neurons.'),
          L('Vezikule oslobađaju neurotransmitere koji deluju na receptore sledeće ćelije.','Mešički sproščajo nevrotransmiterje, ki delujejo na receptorje naslednje celice.','Vesicles release neurotransmitters that act on receptors of the next cell.')),
        picture('mozak-presek.jpg','Human_brain,_sagittal_section_1.jpg','Themium / Wikimedia Commons','cc0',4,
          L('Presek ljudskog mozga.','Prerez človeških možganov.','Sagittal section of a human brain.'),
          L('Anatomski prikaz mozga; promene tokom učenja ne mogu se videti iz jedne fotografije.','Anatomski prikaz možganov; sprememb med učenjem ni mogoče videti na eni fotografiji.','An anatomical view of the brain; one photograph cannot reveal learning-related changes.'))
      ]
    },
    translations:translated('neuro',
      {sr:'kako-se-mozak-menja-dok-ucimo-neuroplasticnost',sl:'kako-se-mozgani-spreminjajo-med-ucenjem',en:'how-the-brain-changes-as-we-learn'},
      L('Neuroplastičnost označava promene u radu nervnih mreža izazvane iskustvom. Vežbanje, aktivno prisećanje i povratna informacija pomažu učenju, ali nijedna metoda nije čarobna. San i odmor su deo procesa, posebno u adolescenciji. Učenje obično menja postojeće veze, što nije isto što i stvaranje novih neurona.',
        'Nevroplastičnost pomeni, da izkušnje spreminjajo delovanje živčnih omrežij. Vaja, dejavni priklic in povratne informacije pomagajo, vendar nobena metoda ni čarobna. Spanje in počitek sta del procesa, še posebej v mladostništvu. Učenje večinoma spreminja obstoječe povezave, kar ni isto kot nastajanje novih nevronov.',
        'Neuroplasticity means experience can change how neural networks function. Practice, active recall and feedback support learning, but no method is magical. Sleep and rest matter, especially in adolescence. Learning usually changes existing connections, which is different from making new neurons.'))
  },
  {
    id:'tree-bark-microbes-methane', category:'life', rubrics:[],
    image:'tree-bark-microbes-methane', kind:'news', date:'2026-09-24', read:9,
    readByLang:{sr:9,sl:9,en:9}, level:'medium',
    tags:['drveće','mikrobi','metan','klima'],
    source:[
      ['Science News Explores','https://www.snexplores.org/article/tree-bark-microbes-methane-climate'],
      ['Science','https://doi.org/10.1126/science.adu2182'],
      ['Nature Communications','https://www.nature.com/articles/s41467-021-22333-7']
    ],
    media:{
      ...picture('kora-melaleuke.jpg','Starr_050107-2867_Melaleuca_quinquenervia.jpg','Forest and Kim Starr / Wikimedia Commons','by3',null,
        L('Kora stabla melaleuke.','Skorja drevesa melalevke.','Bark of a melaleuca tree.'),
        L('Kora melaleuke na Havajima; nije mesto eksperimenta opisanog u članku.','Skorja melalevke na Havajih; to ni kraj opisanega poskusa.','Melaleuca bark in Hawaii; this is not the location of the reported experiment.')),
      hero:'approved/kora-melaleuke.jpg', display:'contain',
      inlines:[
        picture('metan-molekul.png','Methane-CRC-MW-3D-vdW.png','Ben Mills / Wikimedia Commons','pd',0,
          L('Prostorni model molekula metana.','Prostorski model molekule metana.','Three-dimensional model of a methane molecule.'),
          L('Metan, CH₄: atom ugljenika okružen je sa četiri atoma vodonika.','Metan, CH₄: atom ogljika je povezan s štirimi atomi vodika.','Methane, CH₄: one carbon atom is bonded to four hydrogen atoms.')),
        picture('melaleuka-australija.jpg','Melaleuca_quinquenervia_2.jpg','Tatiana Gerus / Wikimedia Commons','by2',2,
          L('Stablo melaleuke sa listovima i cvetovima.','Drevo melalevke z listi in cvetovi.','Melaleuca tree with foliage and flowers.'),
          L('Melaleuka u botaničkoj bašti u Brizbejnu; aktivnost mikroba se ne može zaključiti sa fotografije.','Melalevka v botaničnem vrtu v Brisbanu; dejavnosti mikrobov s fotografije ni mogoče ugotoviti.','Melaleuca in a Brisbane botanic garden; a photograph cannot establish microbial activity.'))
      ]
    },
    translations:translated('bark',
      {sr:'mikrobi-na-kori-drveca-i-metan',sl:'mikrobi-na-drevesni-skorji-in-metan',en:'tree-bark-microbes-and-methane'},
      L('Mikrobi na kori mogu trošiti metan kada imaju kiseonik. U uslovima bez kiseonika ista sredina može proizvoditi gasove. Geni, laboratorijski ogledi i terenska merenja zajedno daju jači dokaz od jednog pokazatelja. Rezultati osam australijskih vrsta još ne govore koliki je ukupni efekat u svim svetskim šumama.',
        'Mikrobi na skorji lahko ob prisotnosti kisika porabljajo metan. Brez kisika lahko isto okolje pline tudi proizvaja. Geni, laboratorijski poskusi in terenske meritve skupaj dajejo močnejši dokaz. Rezultati osmih avstralskih vrst še ne določajo celotnega vpliva vseh gozdov na svetu.',
        'Bark microbes can consume methane when oxygen is available. Without oxygen the same environment can produce gases. Genes, laboratory experiments and field measurements provide stronger evidence together. A study of eight Australian tree species cannot yet quantify the effect across all forests.'))
  },
  {
    id:'target-speech-hearing-headphones', category:'technology', rubrics:[],
    image:'target-speech-hearing-headphones', kind:'news', date:'2026-09-24', read:9,
    readByLang:{sr:9,sl:9,en:9}, level:'medium',
    tags:['sluh','slušalice','mašinsko učenje','obrada zvuka'],
    source:[
      ['Popular Science','https://www.popsci.com/technology/ai-headphones-noise-cancelling/'],
      ['University of Washington','https://www.washington.edu/news/2024/05/23/ai-headphones-noise-cancelling-target-speech-hearing/'],
      ['ACM CHI','https://doi.org/10.1145/3613904.3642057'],
      ['National Institute on Deafness and Other Communication Disorders','https://www.nidcd.nih.gov/about/nidcd-director-message/innovations-hearing-aid-and-cochlear-implant-technologies']
    ],
    media:{
      ...picture('slusalice-mikrofon.jpg','Audio_Technica_ATH-M50_Headphones.jpg','Fletcher6 / Wikimedia Commons','by4',null,
        L('Slušalice koje prekrivaju uši.','Naglavne slušalke.','Over-ear headphones.'),
        L('Obične slušalice ilustruju vrstu uređaja; ovo nije istraživački prototip.','Običajne slušalke ponazarjajo vrsto naprave; to ni raziskovalni prototip.','Ordinary headphones illustrate the device type; they are not the research prototype.')),
      hero:'approved/slusalice-mikrofon.jpg', display:'contain',
      inlines:[
        picture('razgovor-u-guzvi.jpg','Group_of_people_talking.jpg','UNE Photos / Wikimedia Commons','by2',0,
          L('Ljudi razgovaraju u grupi.','Ljudje se pogovarjajo v skupini.','People talking in a group.'),
          L('Razgovor u grupi ilustruje preklapanje glasova; fotografija nije snimak istraživanja.','Pogovor v skupini ponazarja prekrivanje glasov; fotografija ni iz raziskave.','Group conversation illustrates overlapping voices; the photograph is not from the study.')),
        picture('spektrogram-glasa.jpg','Human_voice_spectrogram.jpg','Dvortygirl & Mysid / Wikimedia Commons','sa3',2,
          L('Spektrogram ljudskog glasa.','Spektrogram človeškega glasu.','Spectrogram of a human voice.'),
          L('Spektrogram pokazuje raspored energije glasa u vremenu i po frekvencijama.','Spektrogram prikazuje energijo glasu skozi čas in po frekvencah.','A spectrogram shows voice energy across time and frequency.'))
      ]
    },
    translations:translated('hearing',
      {sr:'slusalice-koje-izdvajaju-jedan-glas',sl:'slusalke-ki-izlocijo-en-glas',en:'headphones-that-isolate-one-voice'},
      L('Prototip sa Univerziteta Vašington bira jedan glas kada korisnik okrene glavu i pritisne dugme. Mikrofoni daju prostorni trag, a model mašinskog učenja prati osobine govornika. U studiji sa 21 učesnikom jasnoća je ocenjena skoro dvostruko bolje nego bez obrade. To je obećavajući rezultat prototipa, ali još nije medicinski provereno slušno pomagalo.',
        'Prototip Univerze v Washingtonu izbere glas, ko uporabnik obrne glavo in pritisne gumb. Mikrofoni dajo prostorsko sled, model strojnega učenja pa spremlja lastnosti govorca. V raziskavi z 21 udeleženci je bila jasnost ocenjena skoraj dvakrat bolje kot brez obdelave. Rezultat je obetaven, a naprava še ni medicinsko preverjen slušni pripomoček.',
        'A University of Washington prototype selects one voice when the user turns and presses a button. Microphones provide a spatial cue, while a machine-learning model tracks the speaker. In a 21-person study, listeners rated clarity almost twice as high as without processing. This is promising for a prototype, but it is not a medically validated hearing aid.'))
  }
];
