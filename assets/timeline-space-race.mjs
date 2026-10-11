// Dates follow the event itself; country identifies the leading mission or institution.
import {raceAdditions} from './timeline-space-race-additions.mjs';
export const countryColors={
  'SAD':'#65b5ff','SSSR / Rusija':'#ff6b73','Kina':'#ffdb55','Japan':'#cda4ff',
  'Indija':'#ffad64','Evropa / ESA':'#62ddb0','Međunarodno':'#e0e8f0',
  'Rusko carstvo':'#ff6b73','Nemačka 1933–1945':'#e4ada6'
};
const rows=[
  [1,'predanje, XVI vek','izročilo, 16. stoletje','legend, 16th century','Van Hu i raketna stolica: legenda, ne potvrđen let.','Wan Hu in raketni stol: legenda, ne potrjen let.','Wan Hu and his rocket chair: a legend, not a verified flight.','Kina'],
  [2,'4. 10. 1957.','4. 10. 1957','4 Oct 1957','Sputnjik 1 postaje prvi veštački satelit.','Sputnik 1 postane prvi umetni satelit.','Sputnik 1 becomes the first artificial satellite.','SSSR / Rusija'],
  [3,'3. 11. 1957.','3. 11. 1957','3 Nov 1957','Lajka leti u orbitu bez mogućnosti povratka.','Lajka poleti v orbito brez možnosti vrnitve.','Laika flies into orbit without a return plan.','SSSR / Rusija'],
  [4,'31. 1. 1958.','31. 1. 1958','31 Jan 1958','Explorer 1 je prvi uspešni satelit SAD.','Explorer 1 je prvi uspešni satelit ZDA.','Explorer 1 becomes the first successful US satellite.','SAD'],
  [5,'13. 9. 1959.','13. 9. 1959','13 Sep 1959','Luna 2 udara u Mesec.','Luna 2 trči ob Luno.','Luna 2 reaches the Moon by impact.','SSSR / Rusija'],
  [6,'7. 10. 1959.','7. 10. 1959','7 Oct 1959','Luna 3 snima udaljenu stranu Meseca.','Luna 3 posname oddaljeno stran Lune.','Luna 3 photographs the Moon’s far side.','SSSR / Rusija'],
  [7,'24. 10. 1960.','24. 10. 1960','24 Oct 1960','Eksplozija rakete u Bajkonuru odnosi mnoge živote.','Eksplozija rakete v Bajkonurju zahteva številna življenja.','A rocket explosion at Baikonur kills many people.','SSSR / Rusija'],
  [8,'12. 4. 1961.','12. 4. 1961','12 Apr 1961','Gagarin postaje prvi čovek u svemiru.','Gagarin postane prvi človek v vesolju.','Gagarin becomes the first human in space.','SSSR / Rusija'],
  [9,'5. 5. 1961.','5. 5. 1961','5 May 1961','Šepard izvodi prvi američki suborbitalni let.','Shepard opravi prvi ameriški suborbitalni polet.','Shepard makes the first US suborbital flight.','SAD'],
  [10,'20. 2. 1962.','20. 2. 1962','20 Feb 1962','Džon Glen prvi od Amerikanaca obilazi Zemlju.','John Glenn kot prvi Američan obkroži Zemljo.','John Glenn becomes the first American to orbit Earth.','SAD'],
  [11,'14. 12. 1962.','14. 12. 1962','14 Dec 1962','Mariner 2 uspešno prolazi kraj Venere.','Mariner 2 uspešno poleti mimo Venere.','Mariner 2 successfully flies by Venus.','SAD'],
  [12,'16. 6. 1963.','16. 6. 1963','16 Jun 1963','Tereškova postaje prva žena u svemiru.','Tereškova postane prva ženska v vesolju.','Tereshkova becomes the first woman in space.','SSSR / Rusija'],
  [13,'18. 3. 1965.','18. 3. 1965','18 Mar 1965','Leonov izvodi prvu svemirsku šetnju.','Leonov opravi prvi vesoljski sprehod.','Leonov makes the first spacewalk.','SSSR / Rusija'],
  [14,'14. 7. 1965.','14. 7. 1965','14 Jul 1965','Mariner 4 šalje prve bliske slike Marsa.','Mariner 4 pošlje prve bližnje slike Marsa.','Mariner 4 returns the first close-up Mars images.','SAD'],
  [15,'3. 2. 1966.','3. 2. 1966','3 Feb 1966','Luna 9 preživljava spuštanje na Mesec.','Luna 9 preživi spust na Luno.','Luna 9 survives a landing on the Moon.','SSSR / Rusija'],
  [16,'27. 1. 1967.','27. 1. 1967','27 Jan 1967','Požar na Apolu 1 usmrćuje trojicu astronauta.','Požar na Apollu 1 usmrti tri astronavte.','The Apollo 1 fire kills three astronauts.','SAD'],
  [17,'24. 4. 1967.','24. 4. 1967','24 Apr 1967','Komarov gine pri povratku Sojuza 1.','Komarov umre ob vrnitvi Sojuza 1.','Komarov dies during Soyuz 1’s return.','SSSR / Rusija'],
  [18,'24. 12. 1968.','24. 12. 1968','24 Dec 1968','Apolo 8 nosi prve ljude oko Meseca.','Apollo 8 popelje prve ljudi okoli Lune.','Apollo 8 carries the first humans around the Moon.','SAD'],
  [19,'20. 7. 1969.','20. 7. 1969','20 Jul 1969','Apolo 11 spušta ljude na Mesec.','Apollo 11 pristane z ljudmi na Luni.','Apollo 11 lands humans on the Moon.','SAD'],
  [20,'11. 2. 1970.','11. 2. 1970','11 Feb 1970','Osumi je prvi japanski satelit.','Ōsumi je prvi japonski satelit.','Ōsumi becomes Japan’s first satellite.','Japan'],
  [21,'24. 4. 1970.','24. 4. 1970','24 Apr 1970','Dongfanghong 1 je prvi kineski satelit.','Dongfanghong 1 je prvi kitajski satelit.','Dongfanghong 1 becomes China’s first satellite.','Kina'],
  [23,'17. 11. 1970.','17. 11. 1970','17 Nov 1970','Lunohod 1 vozi po Mesecu.','Lunohod 1 vozi po Luni.','Lunokhod 1 drives across the Moon.','SSSR / Rusija'],
  [24,'15. 12. 1970.','15. 12. 1970','15 Dec 1970','Venera 7 šalje podatke sa površine planete.','Venera 7 pošlje podatke s površja planeta.','Venera 7 transmits data from a planet’s surface.','SSSR / Rusija'],
  [25,'19. 4. 1971.','19. 4. 1971','19 Apr 1971','Saljut 1 je prva svemirska stanica.','Saljut 1 je prva vesoljska postaja.','Salyut 1 becomes the first space station.','SSSR / Rusija'],
  [26,'30. 6. 1971.','30. 6. 1971','30 Jun 1971','Posada Sojuza 11 gine zbog gubitka pritiska.','Posadka Sojuza 11 umre zaradi izgube tlaka.','The Soyuz 11 crew dies after cabin depressurization.','SSSR / Rusija'],
  [30,'17. 7. 1975.','17. 7. 1975','17 Jul 1975','Apolo i Sojuz spajaju se u orbiti.','Apollo in Sojuz se združita v orbiti.','Apollo and Soyuz dock in orbit.','Međunarodno'],
  [31,'20. 7. 1976.','20. 7. 1976','20 Jul 1976','Viking 1 uspešno istražuje površinu Marsa.','Viking 1 uspešno raziskuje Marsovo površje.','Viking 1 successfully explores the Martian surface.','SAD'],
  [32,'5. 9. 1977.','5. 9. 1977','5 Sep 1977','Lansiran je Vojadžer 1.','Izstrelijo Voyager 1.','Voyager 1 launches toward the outer planets.','SAD'],
  [33,'24. 12. 1979.','24. 12. 1979','24 Dec 1979','Ariane 1 otvara evropski put u orbitu.','Ariane 1 odpre evropsko pot v orbito.','Ariane 1 opens an independent European route to orbit.','Evropa / ESA'],
  [34,'12. 4. 1981.','12. 4. 1981','12 Apr 1981','Kolumbija izvodi prvi orbitalni let spejs šatla.','Columbia opravi prvi orbitalni polet raketoplana.','Columbia makes the first orbital shuttle flight.','SAD'],
  [35,'28. 1. 1986.','28. 1. 1986','28 Jan 1986','Čelendžer se raspada posle lansiranja; sedmoro mrtvih.','Challenger razpade po izstrelitvi; sedem mrtvih.','Challenger breaks apart after launch, killing seven.','SAD'],
  [36,'19. 2. 1986.','19. 2. 1986','19 Feb 1986','Lansirano je prvo jezgro stanice Mir.','Izstrelijo prvi modul postaje Mir.','The first Mir space-station module launches.','SSSR / Rusija'],
  [38,'24. 4. 1990.','24. 4. 1990','24 Apr 1990','Lansiran je svemirski teleskop Habl.','Izstrelijo vesoljski teleskop Hubble.','The Hubble Space Telescope launches.','Međunarodno'],
  [40,'20. 11. 1998.','20. 11. 1998','20 Nov 1998','Modul Zarja započinje gradnju MSS.','Modul Zarja začne gradnjo ISS.','The Zarya module begins assembly of the ISS.','Međunarodno'],
  [42,'1. 2. 2003.','1. 2. 2003','1 Feb 2003','Kolumbija se raspada pri povratku; sedmoro mrtvih.','Columbia razpade med vrnitvijo; sedem mrtvih.','Columbia breaks apart on reentry, killing seven.','SAD'],
  [43,'15. 10. 2003.','15. 10. 2003','15 Oct 2003','Šendžou 5 nosi prvog kineskog astronauta.','Shenzhou 5 ponese prvega kitajskega astronavta.','Shenzhou 5 carries China’s first astronaut.','Kina'],
  [45,'14. 1. 2005.','14. 1. 2005','14 Jan 2005','Hajgens sleće na Saturnov mesec Titan.','Huygens pristane na Saturnovi luni Titan.','Huygens lands on Saturn’s moon Titan.','Evropa / ESA'],
  [47,'13. 6. 2010.','13. 6. 2010','13 Jun 2010','Hajabusa vraća uzorke asteroida.','Hayabusa vrne vzorce asteroida.','Hayabusa returns samples from an asteroid.','Japan'],
  [52,'12. 11. 2014.','12. 11. 2014','12 Nov 2014','File dodiruje površinu komete.','Philae doseže površje kometa.','Philae touches down on a comet.','Evropa / ESA'],
  [54,'3. 1. 2019.','3. 1. 2019','3 Jan 2019','Čang’e 4 sleće na udaljenu stranu Meseca.','Chang’e 4 pristane na oddaljeni strani Lune.','Chang’e 4 lands on the Moon’s far side.','Kina'],
  [56,'6. 12. 2020.','6. 12. 2020','6 Dec 2020','Hajabusa 2 vraća uzorke asteroida Rjugu.','Hayabusa 2 vrne vzorce asteroida Rjugu.','Hayabusa2 returns samples from asteroid Ryugu.','Japan'],
  [60,'15. 5. 2021.','15. 5. 2021','15 May 2021','Tianven 1 spušta kineski rover na Mars.','Tianwen 1 spusti kitajski rover na Mars.','Tianwen-1 lands a Chinese rover on Mars.','Kina'],
  [64,'23. 8. 2023.','23. 8. 2023','23 Aug 2023','Čandrajan 3 sleće u južnoj oblasti Meseca.','Chandrayaan-3 pristane na južnem območju Lune.','Chandrayaan-3 lands in the Moon’s southern region.','Indija'],
  [68,'25. 6. 2024.','25. 6. 2024','25 Jun 2024','Čang’e 6 vraća uzorke sa udaljene strane Meseca.','Chang’e 6 vrne vzorce z oddaljene strani Lune.','Chang’e 6 returns samples from the Moon’s far side.','Kina'],
  [69,'16. 1. 2025.','16. 1. 2025','16 Jan 2025','Indija spaja dve letelice u orbiti.','Indija združi dve plovili v orbiti.','India docks two spacecraft in orbit.','Indija'],
  [70,'2. 3. 2025.','2. 3. 2025','2 Mar 2025','Blue Ghost uspešno sleće na Mesec.','Blue Ghost uspešno pristane na Luni.','Blue Ghost successfully lands on the Moon.','SAD'],
  [71,'april 2026.','april 2026','Apr 2026','Artemis II nosi ljude oko Meseca.','Artemis II popelje ljudi okoli Lune.','Artemis II carries people around the Moon.','SAD']
];
export const legacyRaceKeys=rows.map(row=>String(row[0]));
for(const item of raceAdditions){
  const index=rows.findIndex(row=>String(row[0])===String(item.after));
  if(index<0)throw Error(`Missing insertion point for ${item.key}`);
  rows.splice(index+1,0,[item.key,item.year.sr,item.year.sl,item.year.en,item.text.sr,item.text.sl,item.text.en,item.country]);
}
export const raceKeys=rows.map(row=>String(row[0]));
export const raceEvents=rows.map(([key,srYear,slYear,enYear,sr,sl,en,country])=>({key:String(key),year:{sr:srYear,sl:slYear,en:enYear},text:{sr,sl,en},country}));
export const raceSources=['NASA','Smithsonian National Air and Space Museum','ESA','JAXA','ISRO','CNSA','China Manned Space Agency','Hronologija svemirske trke (dostavljeni PDF)'];
