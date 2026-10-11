import { apolloSrSections } from './apollo-sr.mjs';
import { L, S } from './feature-core.mjs';

const nasaTerms = 'https://www.nasa.gov/nasa-brand-center/images-and-media/';
const cabinSource = 'https://commons.wikimedia.org/wiki/File:Apollo_11_LM_Interior_-_GPN-2001-000010.jpg';
const panelSource = 'https://commons.wikimedia.org/wiki/File:Lunar_Module_Control_Displays.jpg';
const eagleSource = 'https://science.nasa.gov/resource/eagles-return/';

export const apolloFeature = {
  id: 'apollo-11-marker', category: 'space', rubrics: ['facts'], image: 'commons-apollo-11-marker',
  kind: 'news', date: '2026-07-15', read: 11, level: 'medium', tags: ['Apolo 11', 'svemir', 'istorija tehnologije'],
  source: [
    ['NASA — Apollo 11 Mission Report', 'https://www.nasa.gov/wp-content/uploads/static/apollo50th/pdf/A11_MissionReport.pdf'],
    ['NASA — Lunar Surface Journal', 'https://www.nasa.gov/wp-content/uploads/static/history/alsj/a11/a11.launch.html'],
    ["Sotheby's — Apollo 11 pen and breaker", 'https://www.sothebys.com/en/buy/auction/2026/space-exploration-2/apollo-11-16'],
    ['collectSPACE — auction result', 'https://www.collectspace.com/news/news-071526a-buzz-aldrin-apollo-11-pen-switch-sothebys-auction.html']
  ],
  media: {
    display: 'contain',
    hero: 'apollo/apollo-11-pen.png',
    alt: L('Duro Rocket flomaster i polomljeno dugme prekidača sa Apola 11.', 'Flomaster Duro Rocket in odlomljena tipka stikala iz Apolla 11.', 'The Duro Rocket marker and broken circuit-breaker cap from Apollo 11.'),
    caption: L('Flomaster kojim je Baz Oldrin pritisnuo oštećeni prekidač, prikazan uz odlomljeno dugme.', 'Flomaster, s katerim je Buzz Aldrin pritisnil poškodovano stikalo, ob odlomljeni tipki.', 'The marker Buzz Aldrin used to press the damaged breaker, shown with its broken cap.'),
    credit: 'Sotheby’s / Popular Science', source: 'https://www.popsci.com/science/apollo-11-pen-auction/',
    inlines: [
      {src: 'apollo/aldrin-cabin.jpg', afterSection: 0,
        alt: L('Baz Oldrin u kabini lunarnog modula Apolo 11.', 'Buzz Aldrin v kabini lunarnega modula Apollo 11.', 'Buzz Aldrin inside the Apollo 11 lunar module.'),
        caption: L('Baz Oldrin u tesnoj kabini lunarnog modula.', 'Buzz Aldrin v tesni kabini lunarnega modula.', 'Buzz Aldrin inside the cramped lunar module.'),
        credit: 'NASA / Neil Armstrong', source: cabinSource, license: nasaTerms},
      {src: 'apollo/control-panel.jpg', afterSection: 1,
        alt: L('Raspored kontrolnih tabli lunarnog modula.', 'Razpored nadzornih plošč lunarnega modula.', 'Diagram of lunar module control panels.'),
        caption: L('NASA-in prikaz kontrolnih tabli pokazuje koliko su instrumenti bili zbijeni. Ovo je opšti dijagram, a ne fotografija polomljenog prekidača.', 'Nasin prikaz nadzornih plošč kaže, kako zgoščeni so bili instrumenti; ne gre za fotografijo poškodovanega stikala.', 'NASA’s diagram shows how densely packed the controls were; it is not a photograph of the broken breaker.'),
        credit: 'NASA / Wikimedia Commons', source: panelSource, license: nasaTerms},
      {src: 'apollo/eagle-return.jpg', afterSection: 3,
        alt: L('Uzletni stepen lunarnog modula Eagle iznad Meseca.', 'Vzletna stopnja lunarnega modula Eagle nad Luno.', 'Eagle ascent stage above the Moon.'),
        caption: L('Uzletni stepen Eagle-a nakon poletanja sa Meseca, snimljen iz komandnog modula.', 'Vzletna stopnja Eagla po vzletu z Lune, posneta iz komandnega modula.', 'Eagle’s ascent stage after lunar liftoff, photographed from the command module.'),
        credit: 'NASA / Michael Collins', source: eagleSource, license: nasaTerms}
    ]
  },
  translations: {
    sr: {
      slug: 'olovka-koja-je-pomogla-apolu-11-da-poleti-sa-meseca',
      title: 'Olovka koja je pomogla Apolu 11 da poleti sa Meseca prodata za 857.600 dolara',
      lead: 'Običan flomaster poslužio je Bazu Oldrinu da aktivira oštećeni prekidač lunarnog modula. Više od pola veka kasnije prodat je na aukciji zajedno sa polomljenim delom prekidača.',
      remember: 'Posle sletanja Apola 11, astronauti su u lunarnom modulu zatekli polomljeno plastično dugme osigurača potrebnog za pripremu uzletnog motora. Baz Oldrin pritisnuo je postojeći mehanizam Duro „Rocket” flomasterom, a kontrola leta potvrdila je ispravno stanje preko telemetrije. Armstrong i Oldrin zatim su poleteli sa Meseca i spojili se s Majklom Kolinsom u orbiti. Flomaster i odlomljeni deo prekidača prodati su u julu 2026. za 857.600 dolara.',
      term: 'Automatski osigurač (circuit breaker) — uređaj koji prekida ili uspostavlja električno kolo; u ovoj priči polomljeno je spoljašnje dugme za njegovo uključivanje.',
      sections: apolloSrSections
    },
    sl: {
      slug: 'flomaster-ki-je-pomagal-apollu-11-vzleteti-z-lune',
      title: 'Flomaster, ki je pomagal Apollu 11 vzleteti z Lune, prodan za 857.600 dolarjev',
      lead: 'Buzz Aldrin je z navadnim flomastrom pritisnil poškodovano stikalo lunarnega modula. Predmet je več kot pol stoletja pozneje pristal na dražbi.',
      remember: 'Po pristanku Apolla 11 je bila plastična tipka odklopnika za pripravo vzletnega motorja poškodovana. Buzz Aldrin je z Durovim flomastrom pritisnil preostali mehanizem, kontrola poleta pa je stanje preverila s telemetrijo. Armstrong in Aldrin sta uspešno vzletela z Lune in se v orbiti združila z Michaelom Collinsom. Flomaster in odlomljeni del stikala sta bila julija 2026 prodana za 857.600 dolarjev.',
      term: 'Avtomatski odklopnik — naprava, ki sklene ali prekine električni tokokrog; v tej zgodbi se je odlomila njegova zunanja tipka.',
      sections: S([
        ['Dražba nenavadnega vesoljskega predmeta', 'Na dražbi Sotheby’s 15. julija 2026 sta se pojavila Durov flomaster in odlomljeni plastični del odklopnika iz lunarnega modula Eagle. Prišla sta iz osebne zbirke Buzza Aldrina. Paket je bil prodan za 857.600 dolarjev, čeprav sama materiala nimata velike vrednosti. Njuna zgodovinska vrednost izvira iz nevarnega trenutka ob koncu prvega pristanka človeka na Luni.'],
        ['Poškodba v tesni kabini', 'Ko sta se Neil Armstrong in Buzz Aldrin vrnila s površja Lune, sta opazila poškodovano tipko odklopnika z oznako ENG ARM. Z njim je bilo treba pripraviti električno vezje vzletnega motorja. NASA je pozneje ocenila, da je tipko najverjetneje zadel del opreme, ki sta jo nosila med hojo po Luni. Podoben udarec so ponovili pri zemeljskih preskusih, pri kasnejših odpravah pa so dodali zaščito. Astronavta in kontrola poleta odklopnika nista vklopila prezgodaj; počakala sta na pravi korak v postopku.'],
        ['Zakaj je bil odklopnik pomemben', 'Eagle je imel spodnjo stopnjo za pristanek in zgornjo stopnjo z ločenim motorjem za vzlet. Spodnja stopnja je ostala na Luni, zgornja pa je morala Armstronga in Aldrina ponesti v orbito do komandnega modula. Tam ju je čakal Michael Collins. Poškodovana tipka ni pomenila, da je motor že odpovedal. Pomenila je, da bi bilo težko skleniti potrebno vezje ob načrtovanem času. Rezervnega vzletnega motorja ni bilo.'],
        ['Preprosto, toda natančno popravilo', 'Aldrin je v odprtino, kjer je bila prej plastična tipka, vstavil konico flomastra in pritisnil obstoječi mehanizem. Ni povezoval žic in flomaster ni nadomestil električnega vezja. Prav tako ni šlo za slavno vesoljsko kemično pisalo Fisher. NASA je stanje vezja preverila s telemetrijo pred vzletom. Natančna razlaga je pomembnejša od legende, da je en sam predmet magično rešil celotno odpravo.'],
        ['Eagle dobi krila', 'Vzletna stopnja je nato uspešno zapustila Luno. Armstrong in Aldrin sta se v lunarni orbiti srečala s Collinsom in se vrnila na Zemljo. Če modula ne bi bilo mogoče zagnati, bi bila neposredno ogrožena predvsem astronavta na površju; Collins je krožil v drugem plovilu. Ne moremo dokazati, da druga rešitev sploh ni bila mogoča. Dokumentirano pa je, da je bila tipka poškodovana, da je Aldrin uporabil flomaster in da je bil odklopnik ob potrebnem času vklopljen.'],
        ['Predmet in dokaz', 'NASA-in uradni izveščaj o odpravi beleži poškodbo in uspešno sklenitev odklopnika. Sotheby’s opisuje ohranjena predmeta in njuno poreklo, rezultat dražbe pa potrjuje doseženo ceno. Skupaj ti viri omogočajo ločiti preverjeno dejstvo od pozneje dodane dramatike. Zgodba kaže, da tudi velik tehnološki projekt potrebuje pazljivo delo ljudi v kabini in hitro, premišljeno improvizacijo.']
      ])
    },
    en: {
      slug: 'apollo-11-lunar-liftoff-marker-sold-at-auction',
      title: 'Marker used to help Apollo 11 leave the Moon sells for $857,600',
      lead: 'Buzz Aldrin used an ordinary felt-tip marker to press a damaged circuit breaker in the lunar module. The marker and broken switch cap have now been sold together.',
      remember: 'After Apollo 11 landed, the plastic cap of a circuit breaker needed for ascent-engine preparation was found broken. Buzz Aldrin pressed the surviving mechanism with a Duro “Rocket” felt-tip marker, while Mission Control checked its state by telemetry. Armstrong and Aldrin then lifted off and rejoined Michael Collins in lunar orbit. The marker and broken cap sold for $857,600 in July 2026.',
      term: 'Circuit breaker — a device that opens or closes an electrical circuit; here the external piece used to operate it had broken.',
      sections: S([
        ['An unusual auction lot', 'On 15 July 2026 Sotheby’s sold two objects from Buzz Aldrin’s collection: a Duro felt-tip marker and the broken plastic part of a circuit breaker from the lunar module Eagle. The lot fetched $857,600. Neither material is valuable by itself. Their significance comes from a tense episode at the end of humanity’s first lunar landing.'],
        ['Damage in a cramped cabin', 'After their excursion on the Moon, Neil Armstrong and Buzz Aldrin noticed that the external cap of the ENG ARM circuit breaker had broken. NASA later concluded that equipment worn by an astronaut had most likely struck the panel. Engineers reproduced the likely accident in a test and added guards for a subsequent mission. The astronauts reported the problem to Mission Control, which told them to leave the breaker open until the correct point in the departure procedure.'],
        ['Why the breaker mattered', 'Eagle had a descent stage that remained on the surface and an ascent stage with a separate engine. The upper stage had to carry Armstrong and Aldrin back to lunar orbit, where Michael Collins waited in the command module. The broken cap did not mean the engine itself had failed. It made the required electrical configuration difficult to set using the normal hand control. There was no spare ascent engine.'],
        ['What Aldrin actually did', 'Aldrin found that the tip of a marker could reach the mechanism left inside the opening. He used it to press the existing breaker into its required position. The marker did not bridge wires or become a new electrical switch. Nor was it the well-known Fisher Space Pen often mentioned in retellings. Mission Control used telemetry to check the electrical state before launch. The precise mechanism is more interesting than the oversimplified legend.'],
        ['Eagle flies again', 'The ascent stage lifted off successfully and later docked with Collins’s spacecraft. Had Eagle been unable to depart, the two astronauts on the surface would have faced the immediate danger; Collins was already in orbit. We cannot prove that no other improvised solution could have worked. We can say that the damage was real, Aldrin used the marker, and the breaker was successfully closed when needed.'],
        ['A small object and a strong record', 'NASA’s mission report records the broken knob and the successful breaker operation. Sotheby’s documents the objects and their provenance, while the auction result gives the sale price. Those records separate the event from later embellishments. Even a program involving thousands of engineers and extraordinary machines depended, at a crucial moment, on a careful human improvisation inside a very small cabin.']
      ])
    }
  }
};
