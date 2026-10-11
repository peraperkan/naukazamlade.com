import {raceAdditions} from './timeline-space-race-additions.mjs';
import {legacyRaceKeys,raceKeys} from './timeline-space-race.mjs';
const legacyRaceMedia=[
  {
    "file": "space-race-timeline/01.png",
    "commonsName": "Wan_Hu_large.png",
    "source": "https://commons.wikimedia.org/wiki/File:Wan_Hu_large.png",
    "credit": "United States Civil Air Patrol",
    "license": "Public domain",
    "alt": "Ilustracija legende o Van Huu i raketnoj stolici; nije istorijski dokument."
  },
  {
    "file": "space-race-timeline/02.jpg",
    "commonsName": "Sputnik_1.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Sputnik_1.jpg",
    "credit": "U.S. Air Force",
    "license": "Public domain",
    "alt": "Muzejska replika prvog veštačkog satelita Sputnjik 1."
  },
  {
    "file": "space-race-timeline/03.jpg",
    "commonsName": "Laika_space_suit.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Laika_space_suit.jpg",
    "credit": "James Duncan",
    "license": "CC BY-SA 2.0",
    "alt": "Originalno svemirsko odelo psa Lajke u muzeju; alternativni prikaz misije Sputnjik 2."
  },
  {
    "file": "space-race-timeline/04.jpg",
    "commonsName": "Explorer_1_launch.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Explorer_1_launch.jpg",
    "credit": "NASA",
    "license": "Public domain",
    "alt": "Lansiranje rakete sa američkim satelitom Explorer 1."
  },
  {
    "file": "space-race-timeline/05.png",
    "commonsName": "Luna_1_-_2_Spacecraft.png",
    "source": "https://commons.wikimedia.org/wiki/File:Luna_1_-_2_Spacecraft.png",
    "credit": "NASA / NSSDC",
    "license": "Public domain",
    "alt": "Model sovjetske sonde tipa Luna 1 i Luna 2."
  },
  {
    "file": "space-race-timeline/06.jpg",
    "commonsName": "Luna-3_(Memorial_Museum_of_Astronautics).JPG",
    "source": "https://commons.wikimedia.org/wiki/File:Luna-3_(Memorial_Museum_of_Astronautics).JPG",
    "credit": "Armael",
    "license": "CC0",
    "alt": "Muzejska replika sonde Luna 3 koja je snimila dalju stranu Meseca."
  },
  {
    "file": "space-race-timeline/07.jpg",
    "commonsName": "Памятник_ракетчикам,_погибших_при_взрыве_ракеты_Р-16_24_октября_1960_года_(Байконур).jpg",
    "source": "https://commons.wikimedia.org/wiki/File:%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D1%80%D0%B0%D0%BA%D0%B5%D1%82%D1%87%D0%B8%D0%BA%D0%B0%D0%BC%2C_%D0%BF%D0%BE%D0%B3%D0%B8%D0%B1%D1%88%D0%B8%D1%85_%D0%BF%D1%80%D0%B8_%D0%B2%D0%B7%D1%80%D1%8B%D0%B2%D0%B5_%D1%80%D0%B0%D0%BA%D0%B5%D1%82%D1%8B_%D0%A0-16_24_%D0%BE%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8F_1960_%D0%B3%D0%BE%D0%B4%D0%B0_(%D0%91%D0%B0%D0%B9%D0%BA%D0%BE%D0%BD%D1%83%D1%80).jpg",
    "credit": "Георгий Долгопский",
    "license": "CC BY-SA 4.0",
    "alt": "Spomenik žrtvama eksplozije rakete R-16 na Bajkonuru 1960. godine."
  },
  {
    "file": "space-race-timeline/08.jpg",
    "commonsName": "Gagarin_in_Sofia_1961.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Gagarin_in_Sofia_1961.jpg",
    "credit": "Mos.ru",
    "license": "CC BY 4.0",
    "alt": "Jurij Gagarin tokom posete Sofiji posle prvog orbitalnog leta čoveka."
  },
  {
    "file": "space-race-timeline/09.jpg",
    "commonsName": "Alan_Shepard_seen_inside_Freedom_7.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Alan_Shepard_seen_inside_Freedom_7.jpg",
    "credit": "NASA",
    "license": "Public domain",
    "alt": "Alan Šepard u kapsuli Freedom 7 uoči prvog američkog svemirskog leta."
  },
  {
    "file": "space-race-timeline/10.jpg",
    "commonsName": "Glenn62.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Glenn62.jpg",
    "credit": "NASA",
    "license": "Public domain",
    "alt": "Džon Glen u kapsuli Friendship 7 tokom orbitalnog leta 1962. godine."
  },
  {
    "file": "space-race-timeline/11.jpg",
    "commonsName": "Mariner_2_launch.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Mariner_2_launch.jpg",
    "credit": "NASA",
    "license": "Public domain",
    "alt": "Lansiranje sonde Mariner 2 ka Veneri."
  },
  {
    "file": "space-race-timeline/12.jpg",
    "commonsName": "Valentina_Tereshkova_in_1963_04.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Valentina_Tereshkova_in_1963_04.jpg",
    "credit": "Glavarkhiv Moskvy / Mos.ru",
    "license": "CC BY 4.0",
    "alt": "Valentina Tereškova na grupnoj fotografiji iz 1963. godine."
  },
  {
    "file": "space-race-timeline/13.jpg",
    "commonsName": "Alexey_Leonov_in_1965_01.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Alexey_Leonov_in_1965_01.jpg",
    "credit": "Glavarkhiv Moskvy / Mos.ru",
    "license": "CC BY 4.0",
    "alt": "Aleksej Leonov i Pavel Beljajev pre leta Voshod 2; alternativni prikaz prve šetnje svemirom."
  },
  {
    "file": "space-race-timeline/14.jpg",
    "commonsName": "Mars_(Mariner_4).jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Mars_(Mariner_4).jpg",
    "credit": "NASA",
    "license": "Public domain",
    "alt": "Jedan od prvih snimaka Marsa izbliza koje je načinila sonda Mariner 4."
  },
  {
    "file": "space-race-timeline/15.jpg",
    "commonsName": "Luna-9-1.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Luna-9-1.jpg",
    "credit": "Vadim Kondratyev",
    "license": "CC BY-SA 3.0",
    "alt": "Muzejska replika sovjetske sonde Luna 9, prve koja je meko sletela na Mesec."
  },
  {
    "file": "space-race-timeline/16.jpg",
    "commonsName": "Apollo_1_crew_in_training_b&w.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Apollo_1_crew_in_training_b%26w.jpg",
    "credit": "NASA",
    "license": "Public domain",
    "alt": "Posada Apola 1 tokom treninga pre kobnog požara na lansirnoj rampi."
  },
  {
    "file": "space-race-timeline/17.jpg",
    "commonsName": "Владимир_Комаров.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9A%D0%BE%D0%BC%D0%B0%D1%80%D0%BE%D0%B2.jpg",
    "credit": "Valentin Čeredincev / TASS; Mil.ru",
    "license": "CC BY 4.0",
    "alt": "Portret Vladimira Komarova, kosmonauta koji je poginuo pri povratku Sojuza 1."
  },
  {
    "file": "space-race-timeline/18.jpg",
    "commonsName": "NASA_Earthrise_AS08-14-2383_Apollo_8_1968-12-24.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:NASA_Earthrise_AS08-14-2383_Apollo_8_1968-12-24.jpg",
    "credit": "Bill Anders / NASA; edit Earthsound",
    "license": "Public domain",
    "alt": "Izlazak Zemlje iznad Mesečevog horizonta, snimljen tokom leta Apolo 8."
  },
  {
    "file": "space-race-timeline/19.jpg",
    "commonsName": "Buzz_Aldrin_with_Apollo_11_Lunar_Module_on_the_Moon_MET_DP-15797-039.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Buzz_Aldrin_with_Apollo_11_Lunar_Module_on_the_Moon_MET_DP-15797-039.jpg",
    "credit": "Neil Armstrong / NASA; Metropolitan Museum of Art",
    "license": "CC0",
    "alt": "Baz Oldrin stoji na Mesecu pored lunarnog modula Apola 11."
  },
  {
    "file": "space-race-timeline/20.jpg",
    "commonsName": "Ohsumi_Artificial_Satellite.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Ohsumi_Artificial_Satellite.jpg",
    "credit": "Momotarou2012",
    "license": "CC BY-SA 3.0",
    "alt": "Muzejski model japanskog satelita Osumi."
  },
  {
    "file": "space-race-timeline/21.jpg",
    "commonsName": "DFH-1_Satellite.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:DFH-1_Satellite.jpg",
    "credit": "Brücke-Osteuropa",
    "license": "CC0",
    "alt": "Muzejska replika prvog kineskog satelita Dong Fang Hong 1."
  },
  {
    "file": "space-race-timeline/23.jpg",
    "commonsName": "Lunokhod-1_model.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Lunokhod-1_model.jpg",
    "credit": "Галин Владимир Петрович",
    "license": "Public domain",
    "alt": "Muzejski model sovjetskog mesečevog rovera Lunohod 1."
  },
  {
    "file": "space-race-timeline/24.jpg",
    "commonsName": "Venera-7_spuskaemiy_apparat.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Venera-7_spuskaemiy_apparat.jpg",
    "credit": "Emerezhko",
    "license": "CC BY-SA 4.0",
    "alt": "Muzejska replika spuštajuće kapsule sonde Venera 7."
  },
  {
    "file": "space-race-timeline/25.png",
    "commonsName": "Salyut_1_and_Soyuz_drawing.png",
    "source": "https://commons.wikimedia.org/wiki/File:Salyut_1_and_Soyuz_drawing.png",
    "credit": "NASA",
    "license": "Public domain",
    "alt": "NASA crtež orbitalne stanice Saljut 1 i broda Sojuz; nije fotografija iz orbite."
  },
  {
    "file": "space-race-timeline/26.jpg",
    "commonsName": "Soyuz_11_crew.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Soyuz_11_crew.jpg",
    "credit": "Pošta SSSR-a",
    "license": "Public domain",
    "alt": "Sovjetska spomen marka sa tročlanom posadom Sojuza 11."
  },
  {
    "file": "space-race-timeline/30.jpg",
    "commonsName": "Historic_Handshake_-_GPN-2000-001052.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Historic_Handshake_-_GPN-2000-001052.jpg",
    "credit": "NASA",
    "license": "Public domain",
    "alt": "Rukovanje astronauta Tomasa Staforda i kosmonauta Alekseja Leonova tokom misije Apolo–Sojuz."
  },
  {
    "file": "space-race-timeline/31.jpg",
    "commonsName": "Viking spacecraft.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Viking_spacecraft.jpg",
    "credit": "NASA",
    "license": "Public domain",
    "alt": "NASA image of the Viking orbiter and lander before separation at Mars."
  },
  {
    "file": "space-race-timeline/32.jpg",
    "commonsName": "Jupiter_from_Voyager_1.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Jupiter_from_Voyager_1.jpg",
    "credit": "NASA / JPL-Caltech",
    "license": "Public domain",
    "alt": "Jupiter na snimku sonde Vojadžer 1 iz 1979. godine."
  },
  {
    "file": "space-race-timeline/33.jpg",
    "commonsName": "First_Ariane_launch.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:First_Ariane_launch.jpg",
    "credit": "ESA",
    "license": "CC BY-SA 3.0 IGO",
    "alt": "Prvo lansiranje evropske rakete Arijan 1 u decembru 1979."
  },
  {
    "file": "space-race-timeline/34.jpg",
    "commonsName": "First_Shuttle_Launch.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:First_Shuttle_Launch.jpg",
    "credit": "NASA",
    "license": "Public domain",
    "alt": "Prvo lansiranje spejs šatla Kolumbija tokom misije STS-1."
  },
  {
    "file": "space-race-timeline/35.jpg",
    "commonsName": "Challenger_explosion.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Challenger_explosion.jpg",
    "credit": "NASA",
    "license": "Public domain",
    "alt": "Raspad šatla Čelendžer ubrzo posle lansiranja 1986. godine."
  },
  {
    "file": "space-race-timeline/36.jpg",
    "commonsName": "Mir_on_12_June_1998.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Mir_on_12_June_1998.jpg",
    "credit": "NASA",
    "license": "Public domain",
    "alt": "Svemirska stanica Mir fotografisana u orbiti 1998. godine."
  },
  {
    "file": "space-race-timeline/38.jpg",
    "commonsName": "Hubble_Solar_Array_Deployment_STS-31.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Hubble_Solar_Array_Deployment_STS-31.jpg",
    "credit": "NASA",
    "license": "Public domain",
    "alt": "Razvijanje solarnih panela svemirskog teleskopa Habl tokom misije STS-31."
  },
  {
    "file": "space-race-timeline/40.jpg",
    "commonsName": "Zarya_from_STS-88.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Zarya_from_STS-88.jpg",
    "credit": "NASA",
    "license": "Public domain",
    "alt": "Modul Zarja fotografisan tokom sastavljanja Međunarodne svemirske stanice 1998."
  },
  {
    "file": "space-race-timeline/42.jpg",
    "commonsName": "STS-107_crew_in_orbit.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:STS-107_crew_in_orbit.jpg",
    "credit": "NASA",
    "license": "Public domain",
    "alt": "Posada šatla Kolumbija tokom misije STS-107, pre nesreće pri povratku na Zemlju."
  },
  {
    "file": "space-race-timeline/43.png",
    "commonsName": "Shenzhou_5_landing_01.png",
    "source": "https://commons.wikimedia.org/wiki/File:Shenzhou_5_landing_01.png",
    "credit": "China News Service",
    "license": "CC BY 3.0",
    "alt": "Jang Livej pored kapsule Šendžou 5 posle povratka iz orbite."
  },
  {
    "file": "space-race-timeline/45.jpg",
    "commonsName": "Huygens_surface_color.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Huygens_surface_color.jpg",
    "credit": "ESA / NASA / JPL / University of Arizona",
    "license": "Public domain",
    "alt": "Površina Titana na snimku sonde Hajgens posle sletanja 2005. godine."
  },
  {
    "file": "space-race-timeline/47.png",
    "commonsName": "Hayabusa_return_capsule_atmospheric_reentry.png",
    "source": "https://commons.wikimedia.org/wiki/File:Hayabusa_return_capsule_atmospheric_reentry.png",
    "credit": "NASA Ames Research Center; obrada Huntster",
    "license": "Public domain",
    "alt": "Povratna kapsula japanske sonde Hajabusa ulazi u Zemljinu atmosferu 2010."
  },
  {
    "file": "space-race-timeline/52.jpeg",
    "commonsName": "Philae_waving_–_annotated_ESA17558190.jpeg",
    "source": "https://commons.wikimedia.org/wiki/File:Philae_waving_%E2%80%93_annotated_ESA17558190.jpeg",
    "credit": "ESA / Rosetta / MPS OSIRIS team",
    "license": "CC BY-SA 4.0",
    "alt": "Označena fotografija lendera File na kometi 67P, snimljena 2016. posle sletanja."
  },
  {
    "file": "space-race-timeline/54.jpg",
    "commonsName": "Chang'e_4_lander.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Chang'e_4_lander.jpg",
    "credit": "Jianjun Liu, Xin Ren i saradnici",
    "license": "CC BY-SA 4.0",
    "alt": "Kineski lender Čange 4 na daljoj strani Meseca, snimljen roverom Jutu 2."
  },
  {
    "file": "space-race-timeline/56.jpg",
    "commonsName": "Hayabusa2_dropping_off_sample_return_capsule.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Hayabusa2_dropping_off_sample_return_capsule.jpg",
    "credit": "DLR German Aerospace Center",
    "license": "CC BY 2.0",
    "alt": "Ilustracija sonde Hajabusa 2 pri ispuštanju kapsule sa uzorcima asteroida."
  },
  {
    "file": "space-race-timeline/60.jpg",
    "commonsName": "Tianwen-1_Lander_and_Zhurong_Rover_in_Southern_Utopia_Planitia.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Tianwen-1_Lander_and_Zhurong_Rover_in_Southern_Utopia_Planitia.jpg",
    "credit": "NASA / JPL / University of Arizona",
    "license": "Public domain",
    "alt": "Kineski lender Tjanven 1 i rover Džužung snimljeni iz orbite oko Marsa 2021."
  },
  {
    "file": "space-race-timeline/64.jpg",
    "commonsName": "Chandrayaan_3_lander.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Chandrayaan_3_lander.jpg",
    "credit": "ISRO",
    "license": "GODL-India",
    "alt": "Indijski lender Vikram na Mesecu, snimljen roverom Pragjan tokom misije Čandrajan 3."
  },
  {
    "file": "space-race-timeline/68.jpg",
    "commonsName": "Chang'e_6_lunar_samples_at_IAC_2024_01.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Chang'e_6_lunar_samples_at_IAC_2024_01.jpg",
    "credit": "BugWarp",
    "license": "CC BY-SA 4.0",
    "alt": "Uzorci sa dalje strane Meseca koje je donela misija Čange 6, izloženi 2024."
  },
  {
    "file": "space-race-timeline/69.png",
    "commonsName": "PSLV-C60,_SpaDEx_—_Chaser_(SDX01)_and_Target_(SDX02)_spacecrafts_during_testing.png",
    "source": "https://commons.wikimedia.org/wiki/File:PSLV-C60%2C_SpaDEx_%E2%80%94_Chaser_(SDX01)_and_Target_(SDX02)_spacecrafts_during_testing.png",
    "credit": "ISRO",
    "license": "GODL-India",
    "alt": "Dva indijska satelita misije SpaDeX tokom ispitivanja pre orbitalnog spajanja."
  },
  {
    "file": "space-race-timeline/70.png",
    "commonsName": "Blue_Ghost_Lunar_Lander_Seen_From_Above_(LROC1407_-_content_M1495619099LR_mos_str01_1300p_full_80cm).png",
    "source": "https://commons.wikimedia.org/wiki/File:Blue_Ghost_Lunar_Lander_Seen_From_Above_(LROC1407_-_content_M1495619099LR_mos_str01_1300p_full_80cm).png",
    "credit": "NASA / GSFC / Arizona State University",
    "license": "Public domain",
    "alt": "Lender Blue Ghost na Mesecu snimljen iz lunarne orbite."
  },
  {
    "file": "space-race-timeline/71.jpg",
    "commonsName": "Artemis_II_Launch_(NHQ202604010307).jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Artemis_II_Launch_(NHQ202604010307).jpg",
    "credit": "Bill Ingalls / NASA",
    "license": "Public domain",
    "alt": "Lansiranje misije Artemis II sa četvoro astronauta u aprilu 2026."
  }
];
const mediaByKey=new Map(legacyRaceKeys.map((key,index)=>[key,legacyRaceMedia[index]]));
for(const item of raceAdditions)mediaByKey.set(item.key,item.media);
export const raceMedia=raceKeys.map(key=>mediaByKey.get(key));
