import {astronomyAdditions} from './timeline-astronomy-additions.mjs';
// Key follows the illustration research catalogue; order follows the event date.
const rows=[
  [2,-2500,'oko 2500. p. n. e.','ok. 2500 pr. n. št.','c. 2500 BCE','Stounhendž prati solsticije.','Stonehenge sledi solsticijema.','Stonehenge aligns with the solstices.'],
  [1,-1800,'oko 1800. p. n. e.','ok. 1800 pr. n. št.','c. 1800 BCE','Nebeski disk iz Nebre prikazuje nebeske motive.','Nebesni disk iz Nebre prikazuje nebesne motive.','The Nebra Sky Disc depicts celestial motifs.'],
  [3,-650,'oko 650. p. n. e.','ok. 650 pr. n. št.','c. 650 BCE','Sačuvan je prepis vavilonskih opažanja Venere.','Ohranjen je prepis babilonskih opazovanj Venere.','A copy of Babylonian Venus observations survives.'],
  [5,-150,'oko 150. p. n. e.','ok. 150 pr. n. št.','c. 150 BCE','Mehanizam sa Antikitere računa nebeske cikluse.','Mehanizem z Antikitere računa nebesne cikle.','The Antikythera Mechanism models celestial cycles.'],
  [4,-50,'oko 50. p. n. e.','ok. 50 pr. n. št.','c. 50 BCE','Denderski zodijak prikazuje antičko nebo.','Zodiak iz Dendere prikazuje antično nebo.','The Dendera Zodiac depicts the ancient sky.'],
  [6,150,'oko 150.','ok. 150','c. 150 CE','Ptolemej sastavlja Almagest.','Ptolemaj sestavi Almagest.','Ptolemy compiles the Almagest.'],
  [7,499,'499.','499','499','Arijabhata opisuje rotaciju Zemlje.','Arjabhata opiše vrtenje Zemlje.','Aryabhata describes Earth’s rotation.'],
  [8,700,'oko 700.','ok. 700','c. 700','Karta iz Dunhuanga beleži zvezde.','Karta iz Dunhuanga beleži zvezde.','The Dunhuang chart maps stars.'],
  [9,964,'oko 964.','ok. 964','c. 964','Al Sufi sastavlja atlas zvezda.','Al Sufi sestavi zvezdni atlas.','Al-Sufi compiles a star atlas.'],
  [10,1200,'oko 1200.','ok. 1200','c. 1200','Astrolab pomaže u računanju nebeskih položaja.','Astrolab pomaga računati nebesne lege.','Astrolabes help calculate celestial positions.'],
  [11,1437,'1437.','1437','1437','Opservatorija Ulug Bega sastavlja zvezdani katalog.','Ulugbegov observatorij sestavi zvezdni katalog.','Ulugh Beg’s observatory compiles a star catalogue.'],
  [12,1543,'1543.','1543','1543','Kopernik objavljuje heliocentrični model.','Kopernik objavi heliocentrični model.','Copernicus publishes a heliocentric model.'],
  [13,1572,'1572.','1572','1572','Tiho Brahe posmatra novu zvezdu.','Tycho Brahe opazuje novo zvezdo.','Tycho Brahe observes a new star.'],
  [14,1609,'1609.','1609','1609','Kepler izvodi zakone planetarnih putanja.','Kepler izpelje zakone planetnih tirnic.','Kepler derives laws of planetary motion.'],
  [15,1610,'1610.','1610','1610','Galilejevi crteži otkrivaju reljef Meseca.','Galilejeve risbe razkrijejo Lunino površje.','Galileo’s drawings reveal lunar terrain.'],
  [16,1610.2,'1610–1611.','1610–1611','1610–1611','Venerine faze menjaju raspravu o planetama.','Venerine mene spremenijo razpravo o planetih.','Venus’s phases reshape the debate over planets.'],
  [17,1655,'1655.','1655','1655','Hojgens tumači Saturnove prstenove.','Huygens razloži Saturnove obroče.','Huygens explains Saturn’s rings.'],
  [18,1687,'1687.','1687','1687','Njutn povezuje kretanje i gravitaciju.','Newton poveže gibanje in težnost.','Newton unifies motion and gravity.'],
  [19,1734,'1734.','1734','1734','Džantar Mantar meri položaje na nebu.','Jantar Mantar meri položaje na nebu.','Jantar Mantar measures celestial positions.'],
  [20,1781,'1781.','1781','1781','Heršel otkriva Uran.','Herschel odkrije Uran.','Herschel discovers Uranus.'],
  [21,1814,'1814.','1814','1814','Fraunhofer beleži linije Sunčevog spektra.','Fraunhofer zabeleži črte Sončevega spektra.','Fraunhofer maps lines in the solar spectrum.'],
  [22,1840,'1840.','1840','1840','Drejper snima sačuvanu dagerotipiju Meseca.','Draper posname ohranjeno dagerotipijo Lune.','Draper makes a surviving Moon daguerreotype.'],
  [23,1846,'1846.','1846','1846','Neptun je pronađen posle matematičkog predviđanja.','Neptun odkrijejo po matematični napovedi.','Neptune is found after a mathematical prediction.'],
  [24,1851,'1851.','1851','1851','Fotografisano je potpuno pomračenje Sunca.','Fotografiran je popolni Sončev mrk.','A total solar eclipse is photographed.'],
  [25,1911,'oko 1911.','ok. 1911','c. 1911','Nastaje dijagram temperature i sjaja zvezda.','Nastane diagram temperature in sija zvezd.','The temperature–luminosity diagram emerges.'],
  [26,1912,'1912.','1912','1912','Levit otkriva vezu perioda i sjaja cefeida.','Leavitt odkrije zvezo med periodo in sijem kefeid.','Leavitt links Cepheid period and luminosity.'],
  [27,1919,'1919.','1919','1919','Pomračenje proverava skretanje svetlosti.','Mrk preveri odklon svetlobe.','An eclipse tests the bending of light.'],
  [28,1923,'1923.','1923','1923','Cefeida pokazuje da je Andromeda daleka galaksija.','Kefeida pokaže, da je Andromeda oddaljena galaksija.','A Cepheid reveals Andromeda is a distant galaxy.'],
  [29,1929,'1929.','1929','1929','Odnos crvenog pomaka i daljine otkriva širenje.','Zveza rdečega premika in razdalje razkrije širjenje.','Redshift and distance reveal cosmic expansion.'],
  [30,1932,'1932.','1932','1932','Janski otkriva radio-talase iz svemira.','Jansky odkrije radijske valove iz vesolja.','Jansky detects radio waves from space.'],
  [31,1951,'1951.','1951','1951','Detektovana je vodonikova linija od 21 cm.','Zaznana je 21-centimetrska vodikova črta.','The 21-centimeter hydrogen line is detected.'],
  [32,1963,'1963.','1963','1963','Izvor 3C 273 prepoznat je kao kvazar.','Vir 3C 273 prepoznajo kot kvazar.','3C 273 is identified as a quasar.'],
  [33,1965,'1965.','1965','1965','Otkriveno je kosmičko mikrotalasno pozadinsko zračenje.','Odkrito je kozmično mikrovalovno sevanje ozadja.','The cosmic microwave background is discovered.'],
  [34,1967,'1967.','1967','1967','Džoslin Bel Bernel otkriva prvi pulsar.','Jocelyn Bell Burnell odkrije prvi pulzar.','Jocelyn Bell Burnell discovers the first pulsar.'],
  [35,1992,'1992.','1992','1992','COBE meri sitne razlike u ranom zračenju.','COBE izmeri drobne razlike v zgodnjem sevanju.','COBE measures tiny fluctuations in ancient radiation.'],
  [36,1995,'1995.','1995','1995','Potvrđena je egzoplaneta 51 Pegasi b.','Potrjen je eksoplanet 51 Pegasi b.','The exoplanet 51 Pegasi b is confirmed.'],
  [37,1995.5,'1995–1996.','1995–1996','1995–1996','Hablovo duboko polje otkriva mnoštvo galaksija.','Hubblovo globoko polje razkrije množico galaksij.','The Hubble Deep Field reveals distant galaxies.'],
  [38,1998,'1998.','1998','1998','Supernove ukazuju na ubrzano širenje.','Supernove kažejo na pospešeno širjenje.','Supernovae reveal accelerating expansion.'],
  [39,2014,'2014.','2014','2014','Kepler-186f proširuje potragu za stenovitim svetovima.','Kepler-186f razširi iskanje skalnatih svetov.','Kepler-186f advances the search for rocky worlds.'],
  [40,2015,'2015.','2015','2015','LIGO direktno registruje gravitacione talase.','LIGO neposredno zazna gravitacijske valove.','LIGO directly detects gravitational waves.'],
  [41,2019,'2019.','2019','2019','Prikazana je senka crne rupe M87*.','Prikazana je senca črne luknje M87*.','The shadow of black hole M87* is imaged.'],
  [42,2022,'2022.','2022','2022','Vebov teleskop otvara novo duboko polje.','Webbov teleskop odpre novo globoko polje.','Webb opens a new deep field.'],
  [43,2026,'2026.','2026','2026','Veb potvrđuje veoma ranu galaksiju MoM-z14.','Webb potrdi zelo zgodnjo galaksijo MoM-z14.','Webb confirms the very early galaxy MoM-z14.']
];
export const astronomyBaseKeys=rows.map(row=>String(row[0]));
const combined=[...rows.map(row=>({key:String(row[0]),sort:row[1],year:{sr:row[2],sl:row[3],en:row[4]},text:{sr:row[5],sl:row[6],en:row[7]}})),...astronomyAdditions].sort((a,b)=>a.sort-b.sort);
export const astronomyKeys=combined.map(row=>row.key);
export const astronomyEvents=combined.map(({year,text})=>({year,text}));
export const astronomySources=['English Heritage','UNESCO','British Museum','Louvre','NASA','ESA','Library of Congress','ESO','American Astronomical Society','LIGO','Event Horizon Telescope'];
