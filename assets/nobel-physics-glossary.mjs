import {nobelPhysicsMedia} from './nobel-physics-media.mjs';

const image=(key,alts)=>({...nobelPhysicsMedia[key],alt:{sr:alts[0],sl:alts[1],en:alts[2]},caption:'Wikimedia Commons'});
const entries=[
  {
    key:'architecture',
    title:{sr:'IceCube',sl:'IceCube',en:'IceCube'},
    aliases:{sr:['IceCube','IceCube-a','IceCube-om'],sl:['IceCube','IceCuba','IceCubom'],en:['IceCube']},
    description:{
      sr:'IceCube je opservatorija za neutrine ugrađena u približno kubni kilometar antarktičkog leda. Senzori su raspoređeni na 86 kablova duboko ispod površine Južnog pola. Oni ne fotografišu neutrino direktno, već beleže svetlost sekundarnih čestica nastalih u njegovoj retkoj interakciji. Iz rasporeda i vremena svetlosnih signala istraživači procenjuju energiju i pravac događaja.',
      sl:'IceCube je observatorij za nevtrine v približno kubičnem kilometru antarktičnega ledu. Senzorji so nameščeni na 86 kablih globoko pod površjem Južnega pola. Nevtrina ne fotografirajo neposredno, temveč zaznajo svetlobo sekundarnih delcev po redki interakciji. Čas in razpored signalov pomagata oceniti energijo in smer dogodka.',
      en:'IceCube is a neutrino observatory embedded in about a cubic kilometre of Antarctic ice. Its sensors hang on 86 strings deep below the South Pole. They do not image a neutrino directly; they record light from secondary particles produced in a rare interaction. The timing and pattern of those signals help researchers infer an event’s energy and direction.'
    },
    alt:['Šema kablova i senzora u ledu IceCube-a','Shema kablov in senzorjev v ledu IceCuba','Diagram of IceCube strings and sensors in the ice']
  },
  {
    key:'neutrino-cc',
    title:{sr:'Neutrino',sl:'Nevtrino',en:'Neutrino'},
    aliases:{sr:['neutrino','neutrina','neutrini','neutrinima'],sl:['nevtrino','nevtrina','nevtrini','nevtrinov','nevtrine'],en:['neutrino','neutrinos']},
    description:{
      sr:'Neutrino je električno neutralna elementarna čestica sa veoma malom masom. Pošto uobičajeno reaguje samo slabom interakcijom, većina neutrina prolazi kroz materiju bez merljivog traga. Nastaje u zvezdama, nuklearnim reaktorima, atmosferi i mnogim kosmičkim procesima. Njegov pravac dolaska može nositi informaciju o mestu nastanka jer ga magnetna polja ne skreću.',
      sl:'Nevtrino je električno nevtralen osnovni delec z zelo majhno maso. Ker praviloma sodeluje le v šibki interakciji, večina nevtrinov potuje skozi snov brez merljive sledi. Nastajajo v zvezdah, jedrskih reaktorjih, ozračju in številnih vesoljskih procesih. Njihove smeri magnetna polja ne odklonijo, zato lahko kaže proti viru.',
      en:'A neutrino is an electrically neutral elementary particle with a very small mass. Because it usually interacts only through the weak force, most pass through matter without a measurable trace. Neutrinos arise in stars, nuclear reactors, the atmosphere and many cosmic processes. Magnetic fields do not deflect them, so their arrival direction can preserve information about their source.'
    },
    alt:['Dijagram neutrinske interakcije sa atomskom česticom','Shema interakcije nevtrina z delcem','Diagram of a neutrino interaction with another particle']
  },
  {
    key:'weak-interaction',
    title:{sr:'Slaba nuklearna interakcija',sl:'Šibka jedrska interakcija',en:'Weak nuclear interaction'},
    aliases:{sr:['slabom nuklearnom interakcijom','slaba nuklearna interakcija','slabom interakcijom'],sl:['šibke jedrske sile','šibka jedrska sila','šibki interakciji'],en:['weak nuclear interaction','weak interaction','weak force']},
    description:{
      sr:'Slaba interakcija je jedna od četiri osnovne interakcije u prirodi. Omogućava pojedine radioaktivne raspade i reakcije u kojima učestvuju neutrini. Prenose je čestice W i Z, koje imaju veliku masu, pa je njen domet izuzetno kratak. Zato neutrino kroz veliki deo materije može proći a da ne izazove događaj koji detektor opaža.',
      sl:'Šibka interakcija je ena od štirih temeljnih interakcij v naravi. Omogoča nekatere radioaktivne razpade in reakcije, v katerih sodelujejo nevtrini. Prenašajo jo masivni delci W in Z, zato ima zelo kratek doseg. Nevtrino lahko zaradi redkih interakcij prepotuje veliko snovi brez zaznavnega dogodka.',
      en:'The weak interaction is one of nature’s four fundamental interactions. It allows certain radioactive decays and reactions involving neutrinos. Massive W and Z particles mediate it, giving it an extremely short range. Consequently a neutrino can cross a great deal of matter without producing a detectable event.'
    },
    alt:['Fajnmanov dijagram neutralne slabe interakcije','Feynmanov diagram šibke interakcije','Feynman diagram of a weak neutral-current interaction']
  },
  {
    key:'oscillation',
    title:{sr:'Oscilacija neutrina',sl:'Oscilacija nevtrinov',en:'Neutrino oscillation'},
    aliases:{sr:['oscilacija neutrina','oscilacije neutrina','oscilacije','oscilaciju'],sl:['oscilacija nevtrinov','oscilacije nevtrinov','oscilacij','oscilacije'],en:['neutrino oscillation','neutrino oscillations','oscillations']},
    description:{
      sr:'Oscilacija znači da se verovatnoća detekcije neutrina kao elektronskog, mionskog ili tau ukusa menja tokom njegovog putovanja. Ukusno stanje je kvantna mešavina masenih stanja čije se faze ne menjaju istom brzinom. Fenomen je dokaz da neutrinska masena stanja nisu sva ista i da neutrini nisu potpuno bez mase. Time je objašnjen i deo nekadašnjeg manjka opaženih solarnih neutrina.',
      sl:'Oscilacija pomeni, da se verjetnost zaznave elektronskega, mionskega ali tau okusa med potjo spreminja. Stanje določenega okusa je kvantna mešanica masnih stanj, katerih faze se razvijajo različno. Pojav dokazuje, da mase nevtrinskih stanj niso vse enake in da nevtrini niso brez mase. Pomagal je razložiti nekdanji primanjkljaj zaznanih sončnih nevtrinov.',
      en:'Oscillation means that the probability of detecting a neutrino as electron, muon or tau flavour changes as it travels. A flavour state is a quantum mixture of mass states whose phases evolve differently. The effect shows that neutrino mass states are not identical and neutrinos are not massless. It helped explain the former shortage of detected solar neutrinos.'
    },
    alt:['Grafik promene verovatnoće neutrinskih ukusa','Graf spremembe verjetnosti nevtrinskih okusov','Graph of changing neutrino flavour probabilities']
  },
  {
    key:'antineutrino',
    title:{sr:'Antineutrino',sl:'Antinevtrino',en:'Antineutrino'},
    aliases:{sr:['antineutrino','antineutrina','antineutrini','antineutrinima'],sl:['antinevtrino','antinevtrina','antinevtrinov','antinevtrini'],en:['antineutrino','antineutrinos']},
    description:{
      sr:'Antineutrino je antičestica neutrina određenog ukusa. Reaktori stvaraju veliki broj elektronskih antineutrina tokom beta raspada produkata fisije, što prikazuje i prateća šema. Kovan i Rajnes su ih identifikovali posredno, preko proizvoda retke interakcije sa protonom. Neutrino i antineutrino imaju povezane, ali u nekim reakcijama različite uloge.',
      sl:'Antinevtrino je antidelec nevtrina določenega okusa. Reaktorji jih ustvarjajo v velikem številu med beta razpadi produktov cepitve, kar prikazuje shema. Cowan in Reines sta jih posredno prepoznala po produktih redke interakcije s protonom. Nevtrini in antinevtrini so sorodni, a imajo v nekaterih reakcijah različne vloge.',
      en:'An antineutrino is the antiparticle of a neutrino of a given flavour. Nuclear reactors create many electron antineutrinos through beta decay of fission products, illustrated here. Cowan and Reines identified them indirectly through the products of a rare interaction with a proton. Neutrinos and antineutrinos are related but play different roles in some reactions.'
    },
    alt:['Šema beta minus raspada i nastanka antineutrina','Shema beta minus razpada in nastanka antinevtrina','Beta-minus decay diagram showing an antineutrino']
  },
  {
    key:'amanda',
    title:{sr:'AMANDA',sl:'AMANDA',en:'AMANDA'},
    aliases:{sr:['AMANDA'],sl:['AMANDA'],en:['AMANDA']},
    description:{
      sr:'AMANDA je prethodnik IceCube-a i koristila je optičke senzore spuštene u antarktički led. Pokazala je da duboki led može da bude dovoljno proziran za rekonstrukciju svetlosnih tragova. Iskustvo sa mehurićima u plićem ledu usmerilo je kasniji izbor dubina detektora. AMANDA je bila manja, pa je veći IceCube izgrađen radi hvatanja ređih kosmičkih događaja.',
      sl:'AMANDA je predhodnica IceCuba z optičnimi senzorji v antarktičnem ledu. Pokazala je, da je globoki led lahko dovolj prozoren za rekonstrukcijo svetlobnih sledi. Izkušnje z mehurčki v plitvejših plasteh so vplivale na izbiro globine naslednjega detektorja. Večji IceCube je bil zgrajen za lov na redkejše vesoljske dogodke.',
      en:'AMANDA preceded IceCube and used optical sensors lowered into Antarctic ice. It demonstrated that deep ice could be clear enough to reconstruct light tracks. Experience with bubbles in shallower layers informed the depth chosen for later instruments. A larger detector, IceCube, was built to catch rarer cosmic events.'
    },
    alt:['Šema rasporeda detektora AMANDA','Shema razporeditve detektorja AMANDA','Diagram showing the AMANDA detector layout']
  },
  {
    key:'dom',
    title:{sr:'Digitalni optički modul (DOM)',sl:'Digitalni optični modul (DOM)',en:'Digital optical module (DOM)'},
    aliases:{sr:['digitalnih optičkih modula','digitalni optički modul','DOM'],sl:['digitalnih optičnih modulov','digitalni optični modul','DOM'],en:['digital optical modules','digital optical module','DOM']},
    description:{
      sr:'DOM je zatvorena staklena sfera sa fotomultiplikatorom i elektronikom. On hvata veoma slabe bljeskove Čerenkovljevog zračenja, pretvara ih u električne signale i šalje podatke na površinu. IceCube ima 5.160 takvih modula raspoređenih na dubokim kablovima. Precizno vreme kada različiti DOM-ovi registruju svetlost pomaže rekonstrukciji putanje čestice.',
      sl:'DOM je zaprta steklena krogla s fotopomnoževalko in elektroniko. Zazna zelo šibke bliske Čerenkovove svetlobe, jih pretvori v električne signale in pošlje podatke na površje. IceCube ima 5.160 takšnih modulov na globokih kablih. Natančni časi zaznave v različnih modulih pomagajo rekonstruirati pot delca.',
      en:'A DOM is a sealed glass sphere containing a photomultiplier and electronics. It catches faint Cherenkov flashes, converts them into electrical signals and sends data to the surface. IceCube has 5,160 such modules on deep strings. The precise times at which different DOMs see light help reconstruct a particle’s path.'
    },
    alt:['Fotografija digitalnog optičkog modula IceCube-a','Fotografija digitalnega optičnega modula IceCuba','Photograph of an IceCube digital optical module']
  },
  {
    key:'cherenkov',
    title:{sr:'Čerenkovljevo zračenje',sl:'Čerenkovovo sevanje',en:'Cherenkov radiation'},
    aliases:{sr:['Čerenkovljevo zračenje','Čerenkovljevog zračenja'],sl:['Čerenkovovo sevanje','Čerenkovove svetlobe'],en:['Cherenkov radiation','Cherenkov light']},
    description:{
      sr:'Čerenkovljeva svetlost nastaje kada naelektrisana čestica kroz sredinu putuje brže nego što se svetlost širi kroz tu sredinu. To ne krši granicu brzine svetlosti u vakuumu. Svetlost se širi u konusnom obliku, što pomaže da se iz signala senzora odredi pravac kretanja. Plavi sjaj na fotografiji reaktora prikazuje isti fizički efekat u vodi.',
      sl:'Čerenkovova svetloba nastane, ko nabit delec po snovi potuje hitreje, kot se po njej širi svetloba. To ne krši meje hitrosti svetlobe v vakuumu. Svetloba se širi v stožcu, zato lahko iz signalov senzorjev ocenimo smer gibanja. Modri sij na fotografiji reaktorja kaže enak fizikalni pojav v vodi.',
      en:'Cherenkov light appears when a charged particle travels through a medium faster than light travels through that medium. This does not violate the speed limit for light in a vacuum. The light forms a cone that helps determine the particle’s direction from sensor signals. The blue glow in the reactor photograph shows the same effect in water.'
    },
    alt:['Plavi Čerenkovljev sjaj u istraživačkom reaktoru','Modri Čerenkovov sij v raziskovalnem reaktorju','Blue Cherenkov glow in a research reactor']
  },
  {
    key:'cosmic-ray',
    title:{sr:'Kosmički zraci',sl:'Kozmični žarki',en:'Cosmic rays'},
    aliases:{sr:['Kosmički zraci','kosmičkih zraka','kosmičke zrake'],sl:['Kozmični žarki','kozmičnih žarkov','kozmični žarki'],en:['Cosmic rays','cosmic ray']},
    description:{
      sr:'Kosmički zraci su pretežno visokoenergetski protoni i druga atomska jezgra koja stižu iz svemira. Pri udaru u Zemljinu atmosferu prave pljusak sekundarnih čestica. Pošto su naelektrisani, magnetna polja im menjaju putanju i otežavaju nalaženje izvora. Neutrini nastali u povezanim procesima mogu da pomognu u traganju za kosmičkim akceleratorima.',
      sl:'Kozmični žarki so predvsem visokoenergijski protoni in druga atomska jedra iz vesolja. Ob trku z Zemljinim ozračjem ustvarijo pljusk sekundarnih delcev. Ker so nabiti, magnetna polja spreminjajo njihovo pot in otežujejo iskanje vira. Nevtrini iz povezanih procesov lahko pomagajo pri iskanju vesoljskih pospeševalnikov.',
      en:'Cosmic rays are mainly high-energy protons and other atomic nuclei arriving from space. When they strike Earth’s atmosphere, they create a shower of secondary particles. Because they are charged, magnetic fields bend their paths and obscure their sources. Neutrinos produced in related processes can help identify cosmic accelerators.'
    },
    alt:['Šema pljuska čestica kosmičkog zraka u atmosferi','Shema pljuska delcev kozmičnega žarka v ozračju','Diagram of a cosmic-ray air shower']
  },
  {
    key:'blazar',
    title:{sr:'Blazar',sl:'Blazar',en:'Blazar'},
    aliases:{sr:['blazar','blazara'],sl:['blazar','blazarja'],en:['blazar','blazars']},
    description:{
      sr:'Blazar je aktivno galaktičko jezgro sa mlazom čestica približno usmerenim ka Zemlji. Materija oko supermasivne crne rupe može napajati veoma energične procese u mlazu. TXS 0506+056 je blazar čija je aktivnost posmatrana u vreme jednog upozorenja IceCube-a 2017. Veza je važan dokaz za poreklo dela visokoenergetskih neutrina, ali ne objašnjava sve njihove izvore.',
      sl:'Blazar je aktivno galaktično jedro s curkom delcev, usmerjenim približno proti Zemlji. Snov okoli supermasivne črne luknje lahko poganja zelo energijske procese v curku. Aktivnost blazarja TXS 0506+056 so opazovali ob opozorilu IceCuba leta 2017. Povezava je pomemben dokaz o izvoru dela visokoenergijskih nevtrinov, ne pa pojasnilo za vse njihove vire.',
      en:'A blazar is an active galactic nucleus with a particle jet pointed roughly toward Earth. Matter around a supermassive black hole can power energetic processes in that jet. Telescopes observed the activity of TXS 0506+056 when IceCube sent an alert in 2017. The connection is important evidence for one source of high-energy neutrinos, not an explanation of every source.'
    },
    alt:['Mapa položaja blazara TXS 0506+056 na nebu','Zemljevid položaja blazarja TXS 0506+056','Sky map showing the blazar TXS 0506+056']
  },
  {
    key:'multimessenger',
    title:{sr:'Astronomija više glasnika',sl:'Astronomija več glasnikov',en:'Multi-messenger astronomy'},
    aliases:{sr:['astronomije više glasnika','astronomija više glasnika'],sl:['astronomijo več glasnikov','astronomija več glasnikov'],en:['multi-messenger astronomy']},
    description:{
      sr:'Ovaj pristup kombinuje različite „glasnike“ istog kosmičkog događaja: svetlost, neutrine, gravitacione talase ili kosmičke zrake. Svaki od njih otkriva drugačiji deo fizičkog procesa. Zajedničko posmatranje blazara TXS 0506+056 pokazalo je vrednost brze razmene upozorenja među opservatorijama. Ilustracija prikazuje opšti princip, a ne konkretan snimak tog blazara.',
      sl:'Ta pristop združuje različne »glasnike« istega vesoljskega dogodka: svetlobo, nevtrine, gravitacijske valove ali kozmične žarke. Vsak razkrije drug del fizikalnega dogajanja. Skupno opazovanje blazarja TXS 0506+056 je pokazalo korist hitre izmenjave opozoril med observatoriji. Ilustracija kaže splošno načelo, ne posnetka tega blazarja.',
      en:'This approach combines different “messengers” from the same cosmic event: light, neutrinos, gravitational waves or cosmic rays. Each reveals a different part of the physics. Joint observations of TXS 0506+056 showed the value of rapid alerts between observatories. The illustration depicts the general idea, not an actual image of that blazar.'
    },
    alt:['Ilustracija svetlosti, neutrina i gravitacionih talasa','Ilustracija svetlobe, nevtrinov in gravitacijskih valov','Illustration of light, neutrinos and gravitational waves']
  },
  {
    key:'ngc1068',
    title:{sr:'Aktivno galaktičko jezgro NGC 1068',sl:'Aktivno galaktično jedro NGC 1068',en:'Active galactic nucleus NGC 1068'},
    aliases:{sr:['NGC 1068','aktivno galaktičko jezgro'],sl:['NGC 1068','aktivno galaktično jedro'],en:['NGC 1068','active galactic nucleus']},
    description:{
      sr:'NGC 1068, ili Mesije 77, galaksija je sa veoma aktivnim središtem. Gas koji pada ka supermasivnoj crnoj rupi može napajati snažno zračenje i ubrzavanje čestica. IceCube je našao višak visokoenergetskih neutrina iz njenog pravca. To je značajan trag, ali se jačina i tačno mesto neutrinske proizvodnje i dalje proveravaju.',
      sl:'NGC 1068 ali Messier 77 je galaksija z zelo dejavnim središčem. Plin, ki pada proti supermasivni črni luknji, lahko poganja močno sevanje in pospeševanje delcev. IceCube je iz njene smeri našel presežek visokoenergijskih nevtrinov. To je pomemben namig, toda njihova količina in natančno mesto nastanka se še preverjata.',
      en:'NGC 1068, or Messier 77, is a galaxy with a very active centre. Gas falling toward a supermassive black hole can power intense radiation and particle acceleration. IceCube found an excess of high-energy neutrinos from its direction. This is a significant clue, while the neutrino output and exact production site remain under study.'
    },
    alt:['Snimak aktivne galaksije NGC 1068','Posnetek aktivne galaksije NGC 1068','Image of the active galaxy NGC 1068']
  }
];

export const nobelPhysicsGlossary=Object.fromEntries(['sr','sl','en'].map(lang=>[lang,entries.map(entry=>({
  title:entry.title[lang],aliases:entry.aliases[lang],description:entry.description[lang],
  image:image(entry.key,entry.alt)
}))]));
