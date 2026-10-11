const base='review-20261001/';
const photo=(file,alt,credit,source)=>({src:base+file,alt:{sr:alt.sr,sl:alt.sl,en:alt.en},credit,source});
const entry=(title,description,image)=>({title,aliases:[title],description,image});

const art={
  LIGO:photo('term-ligo.svg',{sr:'Šema laserskog interferometra LIGO',sl:'Shema laserskega interferometra LIGO',en:'Schematic of a LIGO laser interferometer'},'US National Science Foundation / Wikimedia Commons','https://commons.wikimedia.org/wiki/File:LIGO_schematic_(multilang).svg'),
  LISA:photo('term-lisa.jpg',{sr:'Plakat buduće misije LISA sa tri letelice',sl:'Plakat prihodnje odprave LISA s tremi plovili',en:'Poster of the planned three-spacecraft LISA mission'},'European Space Agency, CC BY-SA 3.0 IGO','https://commons.wikimedia.org/wiki/File:LISA_poster_ESA528753.jpg'),
  NASA:photo('term-nasa.svg',{sr:'Amblem američke svemirske agencije NASA',sl:'Znak ameriške vesoljske agencije NASA',en:'Insignia of the United States space agency NASA'},'NASA, public domain','https://commons.wikimedia.org/wiki/File:NASA_logo.svg'),
  ESA:photo('term-esa.svg',{sr:'Logo Evropske svemirske agencije',sl:'Logotip Evropske vesoljske agencije',en:'European Space Agency logo'},'European Space Agency, public-domain text logo','https://commons.wikimedia.org/wiki/File:ESA_logo.svg'),
  EHT:photo('term-eht.jpg',{sr:'Radio-antene opservatorija mreže EHT',sl:'Radijske antene observatorijev mreže EHT',en:'Radio dishes in the Event Horizon Telescope network'},'ESO/M. Kornmesser, CC BY 4.0','https://commons.wikimedia.org/wiki/File:Montage_of_the_Event_Horizon_Telescope_observatories_(day)_(eso2208-eht-mwf).jpg'),
  DNK:photo('term-dnk.svg',{sr:'Šema dvostruke spirale DNK',sl:'Shema dvojne vijačnice DNK',en:'Diagram of the DNA double helix'},'Biochemlife, CC BY-SA 4.0','https://commons.wikimedia.org/wiki/File:DNA_double_helix.svg')
};

const words={
  sr:{
    LIGO:'LIGO je američki sistem dve opservatorije za merenje gravitacionih talasa, u Hanfordu i Livingstonu. Svaka koristi laserski interferometar sa dva duga vakuumska kraka. Zajednička merenja pomažu da se pravi kosmički signal razlikuje od lokalnog šuma. Skraćenica potiče od engleskog naziva Laser Interferometer Gravitational-Wave Observatory.',
    LISA:'LISA je planirana svemirska opservatorija za gravitacione talase. Tri letelice pratiće laserskim zracima mala pomeranja probnih masa u trouglu čije su stranice duge oko 2,5 miliona kilometara. Tako će moći da meri niže frekvencije nego zemaljski LIGO. To je posebna misija Evropske svemirske agencije uz saradnju NASA.',
    NASA:'NASA je američka državna agencija za istraživanje svemira i Zemlje. Njene misije koriste satelite, sonde i teleskope za prikupljanje podataka. U projektu LISA sarađuje sa Evropskom svemirskom agencijom. Naučni rezultati misija objavljuju se za istraživače širom sveta.',
    ESA:'ESA je Evropska svemirska agencija, zajednička organizacija država članica za svemirska istraživanja. Vodi misije koje proučavaju Zemlju, Sunčev sistem i udaljeni svemir. LISA je njena planirana opservatorija gravitacionih talasa. Podaci će biti važni i istraživačima van Evrope.',
    EHT:'EHT je međunarodna mreža radio-teleskopa čiji engleski naziv glasi Event Horizon Telescope. Opservatorije na više kontinenata posmatraju isti cilj u isto vreme. Njihova merenja se spajaju postupkom vrlo duge bazne interferometrije. Tako je dobijena rezolucija potrebna za slike senki crnih rupa M87* i Sagittarius A*.',
    DNK:'DNK je molekul koji čuva nasledne informacije živih bića. Njegov redosled hemijskih jedinica predstavlja uputstva koja ćelije koriste za stvaranje proteina i regulaciju rada. Drevna DNK iz kostiju raspada se tokom vremena na kratke fragmente. Njihovo poređenje sa savremenim genomima pomaže da proučimo poreklo populacija.'
  },
  sl:{
    LIGO:'LIGO je ameriški sistem dveh observatorijev za merjenje gravitacijskih valov v Hanfordu in Livingstonu. Vsak uporablja laserski interferometer z dvema dolgima vakuumskima krakoma. Skupne meritve pomagajo razlikovati vesoljski signal od krajevnega šuma. Kratica izhaja iz angleškega imena Laser Interferometer Gravitational-Wave Observatory.',
    LISA:'LISA je načrtovani vesoljski observatorij za gravitacijske valove. Tri plovila bodo z laserji merila majhne premike preskusnih mas v trikotniku s stranicami dolžine približno 2,5 milijona kilometrov. Tako bodo zaznavala nižje frekvence kot zemeljski LIGO. Gre za posebno odpravo Evropske vesoljske agencije v sodelovanju z Naso.',
    NASA:'NASA je ameriška državna agencija za raziskovanje vesolja in Zemlje. Njene odprave zbirajo podatke s sateliti, sondami in teleskopi. Pri projektu LISA sodeluje z Evropsko vesoljsko agencijo. Znanstveni rezultati so na voljo raziskovalcem po svetu.',
    ESA:'ESA je Evropska vesoljska agencija, skupna organizacija držav članic za vesoljske raziskave. Vodi odprave za proučevanje Zemlje, Osončja in oddaljenega vesolja. LISA je njen načrtovani observatorij gravitacijskih valov. Podatki bodo koristili tudi raziskovalcem zunaj Evrope.',
    EHT:'EHT je mednarodna mreža radijskih teleskopov z angleškim imenom Event Horizon Telescope. Observatoriji na več celinah hkrati opazujejo isti cilj. Meritve združijo z interferometrijo z zelo dolgo osnovnico. Tako so dosegli ločljivost, potrebno za sliki senc črnih lukenj M87* in Sagittarius A*.',
    DNK:'DNK je molekula, ki hrani dedne informacije živih bitij. Zaporedje njenih kemijskih enot daje celicam navodila za izdelavo beljakovin in uravnavanje delovanja. Starodavna DNK iz kosti sčasoma razpade na kratke koščke. Primerjava s sodobnimi genomi pomaga raziskovati izvor populacij.'
  },
  en:{
    LIGO:'LIGO is a United States system of two gravitational-wave observatories in Hanford and Livingston. Each uses a laser interferometer with two long vacuum arms. Comparing their measurements helps distinguish a cosmic signal from local noise. Its name stands for Laser Interferometer Gravitational-Wave Observatory.',
    LISA:'LISA is a planned space observatory for gravitational waves. Three spacecraft will use lasers to measure tiny changes between test masses in a triangle about 2.5 million kilometres on each side. This will reveal lower frequencies than ground-based LIGO can detect. It is a separate European Space Agency mission developed with NASA.',
    NASA:'NASA is the United States agency for space exploration and Earth science. Its missions collect data with satellites, probes and telescopes. NASA is collaborating with the European Space Agency on LISA. Mission results are shared with researchers worldwide.',
    ESA:'ESA is the European Space Agency, a joint organisation of member states for space research. Its missions study Earth, the Solar System and distant space. LISA is its planned gravitational-wave observatory. Its data will also serve researchers beyond Europe.',
    EHT:'EHT stands for Event Horizon Telescope, an international network of radio observatories. Telescopes on several continents observe the same target at the same time. Their measurements are combined using very-long-baseline interferometry. That provided the resolution needed for images of the black-hole shadows M87* and Sagittarius A*.',
    DNK:'DNA is the molecule that stores hereditary information in living things. The sequence of its chemical units gives cells instructions for making proteins and regulating activity. Ancient DNA from bones breaks into short fragments over time. Comparing those fragments with present-day genomes helps researchers study population history.'
  }
};

export function reviewAcronyms(articleId,language){
  const ids=articleId==='gravitacioni-talasi-od-ajnstajna-do-lise'?['LIGO','LISA','NASA','ESA']:
    articleId==='prve-slike-crnih-rupa'?['EHT']:
    articleId==='sta-smo-nasledili-od-neandertalaca'?['DNK']:[];
  return ids.map(id=>entry(id==='DNK'&&language==='en'?'DNA':id,words[language][id],art[id]));
}
