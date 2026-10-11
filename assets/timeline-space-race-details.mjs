import {raceAdditions} from './timeline-space-race-additions.mjs';
import {legacyRaceKeys,raceKeys} from './timeline-space-race.mjs';
const legacyRaceDetails=[
  {
    "sr": "Priča o Van Huu smešta pokušaj leta u Kinu šesnaestog veka. Prema legendi, pričvrstio je rakete na stolicu. Pomoćnici su navodno upalili rakete istovremeno. Nema pouzdanog dokaza da se takav let dogodio. Priča pokazuje ranu maštu o raketnom letu, a ne potvrđen podvig.",
    "sl": "Zgodba o Van Huju umešča poskus poleta na Kitajsko v šestnajstem stoletju. Po legendi je na stol pritrdil rakete. Pomočniki naj bi rakete prižgali hkrati. Zanesljivih dokazov, da se je tak polet zgodil, ni. Zgodba kaže zgodnjo domišljijo o raketnem poletu, ne potrjenega dosežka.",
    "en": "The Wan Hu story places a flight attempt in sixteenth-century China. According to legend, he attached rockets to a chair. Assistants supposedly lit the rockets at once. There is no reliable evidence that such a flight occurred. The story illustrates an early dream of rocket flight, not a verified achievement."
  },
  {
    "sr": "Sovjetski Sputnjik 1 lansiran je 4. oktobra 1957. Postao je prvi veštački satelit u Zemljinoj orbiti. Njegov radio-signal mogao se primati na Zemlji. Let je pokazao da raketa može postaviti predmet u orbitu. Satelit nije nosio čoveka niti je bio namenjen povratku.",
    "sl": "Sovjetski Sputnik 1 so izstrelili 4. oktobra 1957. Postal je prvi umetni satelit v Zemljini orbiti. Njegov radijski signal so lahko sprejemali na Zemlji. Polet je pokazal, da lahko raketa ponese predmet v orbito. Satelit ni prevažal človeka in ni bil namenjen vrnitvi.",
    "en": "The Soviet Sputnik 1 launched on 4 October 1957. It became the first artificial satellite in Earth orbit. Its radio signal could be received on the ground. The flight showed that a rocket could place an object in orbit. The satellite carried no human and was not designed to return."
  },
  {
    "sr": "Lajka je poletela na Sputnjiku 2 u novembru 1957. Bila je prvo živo biće koje je obišlo Zemlju. Letelica nije imala sistem za povratak. Lajka nije preživela misiju. Let je otvorio i ozbiljna pitanja o postupanju prema životinjama u istraživanjima.",
    "sl": "Lajka je novembra 1957 poletela s Sputnikom 2. Bila je prvo živo bitje, ki je obkrožilo Zemljo. Plovilo ni imelo sistema za vrnitev. Lajka misije ni preživela. Polet je odprl tudi resna vprašanja o ravnanju z živalmi v raziskavah.",
    "en": "Laika flew aboard Sputnik 2 in November 1957. She became the first living creature to orbit Earth. The spacecraft had no return system. Laika did not survive the mission. The flight also raised serious questions about the treatment of research animals."
  },
  {
    "sr": "Explorer 1 lansiran je 31. januara 1958. Bio je prvi uspešni satelit Sjedinjenih Država. Nosio je detektor kosmičkih zraka i druga merenja. Njegovi podaci pomogli su otkriću Van Alenovih radijacionih pojaseva. Kasniji sateliti potvrdili su prirodu tih pojaseva.",
    "sl": "Explorer 1 so izstrelili 31. januarja 1958. Bil je prvi uspešni satelit Združenih držav. Nosil je detektor kozmičnih žarkov in druge merilnike. Njegovi podatki so pomagali odkriti Van Allenova sevalna pasova. Poznejši sateliti so potrdili naravo teh pasov.",
    "en": "Explorer 1 launched on 31 January 1958. It was the first successful United States satellite. It carried a cosmic-ray detector and other instruments. Its data helped reveal the Van Allen radiation belts. Later satellites confirmed the nature of those belts."
  },
  {
    "sr": "Luna 2 poletela je ka Mesecu u septembru 1959. Udarenjem u njegovu površinu postala je prva ljudska naprava na drugom nebeskom telu. Nije se meko spustila niti je slala fotografije sa tla. Kontakt je završen pri udaru. Datum udara je 13. septembar po univerzalnom vremenu, a 14. septembar u Moskvi.",
    "sl": "Luna 2 je septembra 1959 poletela proti Luni. S trkom ob površje je postala prva človeška naprava na drugem nebesnem telesu. Ni mehko pristala in ni pošiljala fotografij s tal. Ob trku se je stik z njo končal. Datum trka je 13. september po univerzalnem času in 14. september v Moskvi.",
    "en": "Luna 2 flew toward the Moon in September 1959. Its impact made it the first human-made object to reach another celestial body. It did not land softly or send pictures from the ground. Contact ended at impact. The impact date was 13 September in Universal Time and 14 September in Moscow."
  },
  {
    "sr": "Sovjetska Luna 3 snimila je udaljenu stranu Meseca 7. oktobra 1959. Letelica je prošla kraj Meseca i fotografisala osunčanu površinu. Snimci su prvi put prikazali oblast nevidljivu sa Zemlje. Pokazali su manje tamnih mora nego na nama okrenutoj strani. Naziv udaljena strana ne znači da je stalno u mraku.",
    "sl": "Sovjetska Luna 3 je 7. oktobra 1959 posnela oddaljeno stran Lune. Plovilo je poletelo mimo Lune in fotografiralo osvetljeno površje. Posnetki so prvič pokazali območje, ki ga z Zemlje ne vidimo. Pokazali so manj temnih morij kot na bližnji strani. Ime oddaljena stran ne pomeni, da je vedno v temi.",
    "en": "The Soviet Luna 3 photographed the Moon's far side on 7 October 1959. The craft flew past the Moon and imaged its sunlit surface. The pictures first revealed the region hidden from Earth. They showed fewer dark maria than on the near side. Far side does not mean permanently dark."
  },
  {
    "sr": "Sovjetska raketa R-16 eksplodirala je na lansirnoj rampi u Bajkonuru 24. oktobra 1960. Osoblje je radilo blizu potpuno napunjene rakete. Poginule su desetine ljudi, uključujući maršala Nedeljina. Bio je to vojni raketni test, a ne let s posadom. Nesreća je pokazala koliko su opasne pripreme na lansirnoj rampi.",
    "sl": "Sovjetska raketa R-16 je 24. oktobra 1960 eksplodirala na izstrelišču v Bajkonurju. Osebje je delalo blizu povsem napolnjene rakete. Umrlo je več deset ljudi, med njimi maršal Nedelin. Šlo je za vojaški raketni preizkus, ne za polet s posadko. Nesreča je pokazala nevarnost priprav na izstrelišču.",
    "en": "A Soviet R-16 rocket exploded on the Baikonur launch pad on 24 October 1960. Workers were operating close to the fully fueled rocket. Dozens died, including Marshal Nedelin. This was a military rocket test, not a crewed flight. The disaster exposed the dangers of launch-pad preparations."
  },
  {
    "sr": "Jurij Gagarin poleteo je u Vostoku 1 12. aprila 1961. Postao je prvi čovek u svemiru. Njegova letelica jednom je obišla Zemlju. Let je trajao oko 108 minuta. Uspeh je pokazao da čovek može preživeti orbitalni svemirski let.",
    "sl": "Jurij Gagarin je 12. aprila 1961 poletel z Vostokom 1. Postal je prvi človek v vesolju. Njegovo plovilo je enkrat obkrožilo Zemljo. Polet je trajal približno 108 minut. Uspeh je pokazal, da lahko človek preživi orbitalni vesoljski polet.",
    "en": "Yuri Gagarin flew aboard Vostok 1 on 12 April 1961. He became the first human in space. His spacecraft circled Earth once. The flight lasted about 108 minutes. It showed that a human could survive orbital spaceflight."
  },
  {
    "sr": "Alan Šepard poleteo je letelicom Freedom 7 5. maja 1961. Postao je prvi Amerikanac u svemiru. Njegov let trajao je oko petnaest minuta. Putanja je bila suborbitalna, pa nije obišao Zemlju. Kapsula se padobranom vratila u Atlantski okean.",
    "sl": "Alan Shepard je 5. maja 1961 poletel s plovilom Freedom 7. Postal je prvi Američan v vesolju. Njegov polet je trajal približno petnajst minut. Pot je bila suborbitalna, zato ni obkrožil Zemlje. Kapsula se je s padalom vrnila v Atlantski ocean.",
    "en": "Alan Shepard flew Freedom 7 on 5 May 1961. He became the first American in space. His flight lasted about fifteen minutes. Its path was suborbital, so he did not circle Earth. The capsule returned by parachute to the Atlantic Ocean."
  },
  {
    "sr": "Džon Glen lansiran je u letelici Friendship 7 20. februara 1962. Postao je prvi Amerikanac koji je obišao Zemlju. Napravio je tri orbite za skoro pet sati. Posada je tada brojala samo jednog astronauta. Kapsula se bezbedno spustila u okean.",
    "sl": "John Glenn je 20. februarja 1962 poletel v plovilu Friendship 7. Postal je prvi Američan, ki je obkrožil Zemljo. V skoraj petih urah je opravil tri obhode. Posadko je sestavljal samo en astronavt. Kapsula je varno pristala v oceanu.",
    "en": "John Glenn launched aboard Friendship 7 on 20 February 1962. He became the first American to orbit Earth. He completed three orbits in nearly five hours. The crew consisted of just one astronaut. The capsule splashed down safely in the ocean."
  },
  {
    "sr": "Mariner 2 prošao je pored Venere 14. decembra 1962. Bio je prva uspešna međuplanetarna misija. Instrumenti su izmerili veoma tople uslove na Veneri. Letelica nije nosila kameru. Zato sa ovog preleta nema fotografija Venere iz blizine.",
    "sl": "Mariner 2 je 14. decembra 1962 poletel mimo Venere. Bil je prva uspešna medplanetarna misija. Instrumenti so izmerili zelo vroče razmere na Veneri. Plovilo ni imelo kamere. Zato s tega preleta ni bližnjih fotografij Venere.",
    "en": "Mariner 2 flew past Venus on 14 December 1962. It was the first successful interplanetary mission. Its instruments measured Venus's extremely hot conditions. The spacecraft carried no camera. This flyby therefore produced no close-up photographs of Venus."
  },
  {
    "sr": "Valentina Tereškova lansirana je u Vostoku 6 16. juna 1963. Postala je prva žena u svemiru. Tokom leta obišla je Zemlju 48 puta. Misija je trajala skoro tri dana. Letela je sama, dok je Vostok 5 takođe bio u orbiti.",
    "sl": "Valentina Tereškova je 16. junija 1963 poletela z Vostokom 6. Postala je prva ženska v vesolju. Med poletom je Zemljo obkrožila 48-krat. Misija je trajala skoraj tri dni. Letela je sama, medtem ko je bil Vostok 5 prav tako v orbiti.",
    "en": "Valentina Tereshkova launched aboard Vostok 6 on 16 June 1963. She became the first woman in space. She orbited Earth 48 times. The mission lasted nearly three days. She flew alone while Vostok 5 was also in orbit."
  },
  {
    "sr": "Aleksej Leonov izašao je iz Voshoda 2 18. marta 1965. Izveo je prvu svemirsku šetnju. Iz letelice je izašao kroz vazdušnu komoru. Za vreme izlaska bio je vezan za letelicu. Podvig je pokazao mogućnost rada izvan svemirske kapsule.",
    "sl": "Aleksej Leonov je 18. marca 1965 izstopil iz Voshoda 2. Opravil je prvi vesoljski sprehod. Iz plovila je izstopil skozi zračno zaporo. Med izstopom je bil privezan na plovilo. Dosežek je pokazal možnost dela zunaj vesoljske kapsule.",
    "en": "Aleksei Leonov left Voskhod 2 on 18 March 1965. He performed the first spacewalk. He exited through an airlock. A tether connected him to the spacecraft. The feat demonstrated that people could work outside a space capsule."
  },
  {
    "sr": "Mariner 4 proleteo je pored Marsa 14. jula 1965. Poslao je prve snimke druge planete iz neposredne blizine. Kamera je napravila 21 potpunu sliku i deo dvadeset druge. Na snimljenom području videli su se brojni krateri. Slike su prikazale samo mali deo Marsa.",
    "sl": "Mariner 4 je 14. julija 1965 poletel mimo Marsa. Poslal je prve bližnje posnetke drugega planeta. Kamera je naredila 21 celotnih slik in del dvaindvajsete. Na posnetem območju so bili vidni številni kraterji. Slike so prikazale le majhen del Marsa.",
    "en": "Mariner 4 flew past Mars on 14 July 1965. It returned the first close-up images of another planet. Its camera produced 21 complete images and part of a twenty-second. Many craters appeared in the photographed terrain. The images covered only a small part of Mars."
  },
  {
    "sr": "Sovjetska Luna 9 spustila se na Mesec 3. februara 1966. Bila je prva letelica koja je meko sletela i preživela na Mesecu. Sa površine je poslala prve fotografije lunarnog pejzaža. Snimci su prikazali oblast Okeana bura. Misija nije donela mesečeve uzorke na Zemlju.",
    "sl": "Sovjetska Luna 9 je 3. februarja 1966 pristala na Luni. Bila je prvo plovilo, ki je mehko pristalo in preživelo na Luni. S površja je poslala prve fotografije lunarne pokrajine. Posnetki so prikazali območje Oceana viharjev. Misija ni prinesla luninih vzorcev na Zemljo.",
    "en": "The Soviet Luna 9 landed on the Moon on 3 February 1966. It was the first spacecraft to survive a soft landing there. It sent back the first photographs from the lunar surface. The images showed a region of Oceanus Procellarum. The mission did not bring lunar samples to Earth."
  },
  {
    "sr": "Požar je izbio u komandnoj kabini Apola 1 tokom probe 27. januara 1967. Astronauti Gas Grisom, Ed Vajt i Rodžer Čafi izgubili su život. Letelica se nalazila na lansirnoj rampi. Planirani let nikada nije izveden. Nesreća je pokrenula promene u konstrukciji i bezbednosnim postupcima programa Apolo.",
    "sl": "Med preizkusom 27. januarja 1967 je v poveljniškem modulu Apolla 1 izbruhnil požar. Astronavti Gus Grissom, Ed White in Roger Chaffee so izgubili življenje. Plovilo je bilo na izstrelišču. Načrtovani polet ni nikoli vzletel. Nesreča je sprožila spremembe zasnove in varnostnih postopkov programa Apollo.",
    "en": "A fire broke out inside the Apollo 1 command module during a test on 27 January 1967. Astronauts Gus Grissom, Ed White, and Roger Chaffee died. The spacecraft was on the launch pad. The planned flight never launched. The disaster led to changes in Apollo's design and safety procedures."
  },
  {
    "sr": "Vladimir Komarov poleteo je sam u Sojuzu 1 23. aprila 1967. Tokom misije pojavili su se ozbiljni problemi sa letelicom. Pri povratku 24. aprila padobran se nije pravilno otvorio. Kapsula je udarila u tlo i Komarov je poginuo. Bio je prvi čovek koji je poginuo tokom svemirske misije.",
    "sl": "Vladimir Komarov je 23. aprila 1967 sam poletel s Sojuzom 1. Med misijo so se pojavile resne težave s plovilom. Pri vrnitvi 24. aprila se padalo ni pravilno odprlo. Kapsula je trčila ob tla in Komarov je umrl. Bil je prvi človek, ki je umrl med vesoljsko misijo.",
    "en": "Vladimir Komarov launched alone aboard Soyuz 1 on 23 April 1967. Serious spacecraft problems developed during the mission. On return the next day, the parachute failed to deploy properly. The capsule struck the ground and Komarov died. He was the first person killed during a space mission."
  },
  {
    "sr": "Apolo 8 lansiran je 21. decembra 1968 sa tri astronauta. Bio je prvi ljudski let koji je napustio Zemljinu orbitu. Posada je 24. decembra ušla u orbitu oko Meseca. Frenk Borman, Džim Lavel i Bil Anders obišli su Mesec deset puta. Nisu sleteli na mesečevu površinu.",
    "sl": "Apollo 8 je 21. decembra 1968 vzletel s tremi astronavti. Bil je prvi človeški polet zunaj Zemljine orbite. Posadka je 24. decembra vstopila v orbito okoli Lune. Frank Borman, Jim Lovell in Bill Anders so Luno obkrožili desetkrat. Na luninem površju niso pristali.",
    "en": "Apollo 8 launched with three astronauts on 21 December 1968. It was the first human flight beyond Earth orbit. The crew entered lunar orbit on 24 December. Frank Borman, Jim Lovell, and Bill Anders circled the Moon ten times. They did not land on the lunar surface."
  },
  {
    "sr": "Apolo 11 lansiran je 16. jula 1969. Nil Armstrong i Baz Oldrin sleteli su na Mesec 20. jula. Armstrong je prvi kročio na mesečevu površinu. Majkl Kolins je ostao u orbiti u komandnom modulu. Posada je donela oko 20 kilograma mesečevog materijala na Zemlju.",
    "sl": "Apollo 11 je vzletel 16. julija 1969. Neil Armstrong in Buzz Aldrin sta 20. julija pristala na Luni. Armstrong je prvi stopil na lunino površje. Michael Collins je ostal v orbiti v poveljniškem modulu. Posadka je na Zemljo prinesla približno 20 kilogramov luninega gradiva.",
    "en": "Apollo 11 launched on 16 July 1969. Neil Armstrong and Buzz Aldrin landed on the Moon on 20 July. Armstrong became the first person to step onto its surface. Michael Collins remained in lunar orbit in the command module. The crew returned about 20 kilograms of lunar material to Earth."
  },
  {
    "sr": "Japan je lansirao satelit Osumi 11. februara 1970. Bio je prvi japanski veštački satelit u Zemljinoj orbiti. Lansiran je raketom L-4S iz Učinoure. Mali satelit služio je proveri tehnologije lansiranja. Nije nosio ljude.",
    "sl": "Japonska je 11. februarja 1970 izstrelila satelit Ohsumi. Bil je prvi japonski umetni satelit v Zemljini orbiti. Iz Uchinoure ga je ponesla raketa L-4S. Majhen satelit je bil namenjen preverjanju izstrelitvene tehnologije. Ni prevažal ljudi.",
    "en": "Japan launched the Ohsumi satellite on 11 February 1970. It became Japan's first artificial satellite in Earth orbit. An L-4S rocket launched it from Uchinoura. The small satellite helped test launch technology. It carried no people."
  },
  {
    "sr": "Kina je lansirala Dongfanghong 1 24. aprila 1970. Bio je prvi kineski veštački satelit. U orbitu ga je odnela raketa Dugi marš 1. Satelit je emitovao radio-signale i melodiju Istočnocrveno. Njegov let pokazao je kinesku sposobnost orbitalnog lansiranja.",
    "sl": "Kitajska je 24. aprila 1970 izstrelila Dongfanghong 1. Bil je prvi kitajski umetni satelit. V orbito ga je ponesla raketa Dolgi pohod 1. Satelit je oddajal radijske signale in melodijo Vzhod je rdeč. Polet je pokazal kitajsko sposobnost orbitalnega izstreljevanja.",
    "en": "China launched Dongfanghong 1 on 24 April 1970. It was the country's first artificial satellite. A Long March 1 rocket carried it into orbit. The satellite transmitted radio signals and the tune The East Is Red. Its flight demonstrated China's orbital launch capability."
  },
  {
    "sr": "Sovjetska Luna 17 spustila je Lunohod 1 na Mesec 17. novembra 1970. Bio je prvi robotski rover koji je istraživao površinu drugog sveta. Operateri na Zemlji upravljali su njegovim kretanjem. Rover je slao snimke i podatke o tlu. Radio je oko jedanaest lunarnih dana.",
    "sl": "Sovjetska Luna 17 je 17. novembra 1970 dostavila Lunohod 1 na Luno. Bil je prvi robotski rover, ki je raziskoval površje drugega sveta. Operaterji na Zemlji so upravljali njegovo vožnjo. Rover je pošiljal posnetke in podatke o tleh. Deloval je približno enajst lunarnih dni.",
    "en": "The Soviet Luna 17 delivered Lunokhod 1 to the Moon on 17 November 1970. It was the first robotic rover to explore the surface of another world. Controllers on Earth directed its movements. The rover returned images and soil data. It operated for about eleven lunar days."
  },
  {
    "sr": "Sovjetska Venera 7 stigla je na Veneru 15. decembra 1970. Izvela je prvo uspešno meko sletanje na drugu planetu. Sa površine je poslala podatke na Zemlju. Signal je potvrdio da je preživela spuštanje. Nije poslala fotografije venerinog pejzaža.",
    "sl": "Sovjetska Venera 7 je 15. decembra 1970 dosegla Venero. Opravila je prvi uspešen mehak pristanek na drugem planetu. S površja je poslala podatke na Zemljo. Signal je potrdil, da je preživela spust. Fotografij Venerine pokrajine ni poslala.",
    "en": "The Soviet Venera 7 reached Venus on 15 December 1970. It made the first successful soft landing on another planet. It transmitted data from the surface to Earth. The signal confirmed that the spacecraft had survived its descent. It did not send photographs of the Venusian landscape."
  },
  {
    "sr": "Sovjetski Saljut 1 lansiran je 19. aprila 1971. Postao je prva svemirska stanica u Zemljinoj orbiti. Posada Sojuza 10 nije uspela da uđe u stanicu. Posada Sojuza 11 prva je živela i radila u njoj. Stanica je služila i za naučne eksperimente.",
    "sl": "Sovjetski Saljut 1 so izstrelili 19. aprila 1971. Postal je prva vesoljska postaja v Zemljini orbiti. Posadki Sojuza 10 ni uspelo vstopiti vanjo. Posadka Sojuza 11 je prva živela in delala v njej. Postaja je bila namenjena tudi znanstvenim poskusom.",
    "en": "The Soviet Salyut 1 launched on 19 April 1971. It became the first space station in Earth orbit. The Soyuz 10 crew could not enter it. The Soyuz 11 crew became its first occupants. The station also supported scientific experiments."
  },
  {
    "sr": "Posada Sojuza 11 boravila je na stanici Saljut 1 u junu 1971. Georgij Dobrovoljski, Vladislav Volkov i Viktor Pacajev krenuli su nazad ka Zemlji. Pri povratku se kabina iznenada razhermetizovala. Sva trojica su umrla pre sletanja 30. juna. Posle nesreće uvedena su zaštitna odela za lansiranje i povratak Sojuza.",
    "sl": "Posadka Sojuza 11 je junija 1971 bivala na postaji Saljut 1. Georgij Dobrovolski, Vladislav Volkov in Viktor Pacajev so se odpravili nazaj na Zemljo. Med vrnitvijo je kabina nenadoma izgubila tlak. Vsi trije so umrli pred pristankom 30. junija. Po nesreči so uvedli tlačne obleke za izstrelitev in vrnitev Sojuza.",
    "en": "The Soyuz 11 crew lived aboard Salyut 1 in June 1971. Georgi Dobrovolski, Vladislav Volkov, and Viktor Patsayev headed back to Earth. Their cabin suddenly lost pressure during the return. All three died before landing on 30 June. After the accident, pressure suits were introduced for Soyuz launch and landing."
  },
  {
    "sr": "Apolo i Sojuz spojili su se u Zemljinoj orbiti 17. jula 1975. godine. Američka i sovjetska posada prešle su iz jedne letelice u drugu. Zajedno su izvodile naučne oglede i razgovarale preko zajedničkog komunikacionog sistema. Misija je proverila spojni mehanizam napravljen za saradnju dveju zemalja. Susret je postao simbol popuštanja napetosti tokom Hladnog rata.",
    "sl": "Apollo in Sojuz sta se 17. julija 1975 združila v Zemljini orbiti. Ameriška in sovjetska posadka sta prehajali med ploviloma. Skupaj so izvajali znanstvene poskuse in komunicirali po skupnem sistemu. Odprava je preizkusila združevalni mehanizem za sodelovanje obeh držav. Srečanje je postalo simbol popuščanja napetosti med hladno vojno.",
    "en": "Apollo and Soyuz docked in Earth orbit on 17 July 1975. American and Soviet crew members moved between the two spacecraft. They conducted joint scientific experiments and used a shared communications system. The mission tested a docking mechanism built for cooperation between the two countries. The encounter became a symbol of détente during the Cold War."
  },
  {
    "sr": "Viking 1 spustio se na Mars 20. jula 1976. godine. Mesto sletanja nalazilo se u ravnici Hrisa. Lender je poslao fotografije kamenitog tla i merenja Marsove okoline. Njegovi instrumenti istraživali su i moguće tragove života. Misija je ostvarila prvo potpuno uspešno sletanje na Mars.",
    "sl": "Viking 1 je na Mars pristal 20. julija 1976. Pristajalno mesto je ležalo na ravnini Chryse Planitia. Pristajalnik je poslal fotografije kamnitih tal in meritve marsovskega okolja. Njegovi instrumenti so iskali tudi morebitne znake življenja. Odprava je dosegla prvi povsem uspešen pristanek na Marsu.",
    "en": "Viking 1 landed on Mars on 20 July 1976. Its landing site was in Chryse Planitia. The lander returned images of rocky ground and measurements of the Martian environment. Its instruments also investigated possible signs of life. The mission achieved the first fully successful Mars landing."
  },
  {
    "sr": "Vojadžer 1 lansiran je 5. septembra 1977. godine. Proleteo je pored Jupitera 1979. i Saturna 1980. godine. Snimci i merenja otkrili su nove podatke o planetama, njihovim prstenovima i mesecima. Letelica je 2012. prešla granicu međuzvezdanog prostora. I dalje nosi Zlatnu ploču sa zapisima o Zemlji.",
    "sl": "Voyager 1 so izstrelili 5. septembra 1977. Mimo Jupitra je poletel leta 1979, mimo Saturna pa leta 1980. Posnetki in meritve so razkrili nove podatke o planetih, njunih obročih in lunah. Leta 2012 je plovilo doseglo medzvezdni prostor. Še vedno nosi zlato ploščo z zapisi o Zemlji.",
    "en": "Voyager 1 launched on 5 September 1977. It flew past Jupiter in 1979 and Saturn in 1980. Its images and measurements revealed new information about the planets, their rings and moons. The spacecraft entered interstellar space in 2012. It still carries the Golden Record with sounds and images from Earth."
  },
  {
    "sr": "Raketa Arijan 1 prvi put je poletela 24. decembra 1979. godine. Lansirana je iz evropskog svemirskog centra u Kuru u Francuskoj Gvajani. Probni let uspešno je postavio korisni teret u orbitu. Program je Evropi obezbedio sopstveni način lansiranja satelita. Kasnije rakete iz porodice Arijan nastavile su tu ulogu.",
    "sl": "Raketa Ariane 1 je prvič poletela 24. decembra 1979. Izstrelili so jo iz evropskega vesoljskega centra v Kourouju v Francoski Gvajani. Poskusni polet je uspešno utiril tovor. Program je Evropi zagotovil lasten način izstreljevanja satelitov. Poznejše rakete družine Ariane so nadaljevale to nalogo.",
    "en": "Ariane 1 made its first flight on 24 December 1979. It launched from Europe's spaceport at Kourou in French Guiana. The test flight successfully placed its payload in orbit. The programme gave Europe its own way to launch satellites. Later Ariane rockets continued that role."
  },
  {
    "sr": "Kolumbija je poletela 12. aprila 1981. na misiji STS-1. Džon Jang i Robert Kripen činili su dvočlanu posadu. Bio je to prvi orbitalni let spejs šatla. Letelica je obišla Zemlju 37 puta. Sletanje 14. aprila pokazalo je da se orbiter može vratiti i koristiti ponovo.",
    "sl": "Columbia je 12. aprila 1981 poletela na odpravo STS-1. Dvočlansko posadko sta sestavljala John Young in Robert Crippen. To je bil prvi orbitalni polet raketoplana. Plovilo je Zemljo obkrožilo 37-krat. Pristanek 14. aprila je pokazal, da se orbiter lahko vrne in ponovno uporabi.",
    "en": "Columbia launched on the STS-1 mission on 12 April 1981. John Young and Robert Crippen formed its two-person crew. It was the first orbital flight of a space shuttle. The vehicle orbited Earth 37 times. Its landing on 14 April showed that the orbiter could return for reuse."
  },
  {
    "sr": "Čelendžer se raspao 28. januara 1986. ubrzo posle lansiranja. Poginulo je svih sedmoro članova posade. Otkazivanje zaptivke na desnom pomoćnom raketnom motoru omogućilo je prodor vrelih gasova. Hladno vreme doprinelo je neuspehu zaptivanja. Nesreća je dovela do obustave letova šatla i preispitivanja bezbednosti.",
    "sl": "Challenger je razpadel 28. januarja 1986 kmalu po izstrelitvi. Umrlo je vseh sedem članov posadke. Odpoved tesnila na desnem pomožnem raketnem motorju je omogočila uhajanje vročih plinov. Hladno vreme je prispevalo k odpovedi tesnila. Nesreča je povzročila prekinitev poletov raketoplanov in pregled varnosti.",
    "en": "Challenger broke apart shortly after launch on 28 January 1986. All seven crew members died. A failed seal in the right solid rocket booster allowed hot gas to escape. Cold weather contributed to the seal failure. The disaster grounded the shuttle fleet and prompted a review of safety."
  },
  {
    "sr": "Osnovni modul Mira lansiran je 19. februara 1986. godine. Postao je jezgro sovjetske orbitalne stanice. Kasnije su mu dodati moduli za istraživanje i boravak posade. Astronauti iz više zemalja radili su na Miru tokom njegovog dugog veka. Stanica je ostala u upotrebi do 2001. godine.",
    "sl": "Osnovni modul Mira so izstrelili 19. februarja 1986. Postal je jedro sovjetske orbitalne postaje. Pozneje so mu dodali module za raziskave in bivanje posadke. Astronavti iz več držav so delali na Miru v času njegove dolge uporabe. Postaja je delovala do leta 2001.",
    "en": "Mir's core module launched on 19 February 1986. It became the centre of the Soviet orbital station. More modules for research and crew living were added later. Astronauts from several countries worked aboard Mir during its long life. The station remained in operation until 2001."
  },
  {
    "sr": "Svemirski teleskop Habl lansiran je 24. aprila 1990. šatlom Diskaveri. Posada ga je pustila u Zemljinoj orbiti narednog dana. Položaj iznad atmosfere omogućio mu je oštra posmatranja kosmosa. Greška na glavnom ogledalu ispravljena je servisnom misijom 1993. godine. Habl je zatim snimio udaljene galaksije i mnoga druga nebeska tela.",
    "sl": "Vesoljski teleskop Hubble je 24. aprila 1990 poletel z raketoplanom Discovery. Posadka ga je naslednji dan namestila v Zemljino orbito. Lega nad ozračjem mu je omogočila ostro opazovanje vesolja. Napako na glavnem zrcalu je servisna odprava odpravila leta 1993. Hubble je nato posnel oddaljene galaksije in številna druga nebesna telesa.",
    "en": "The Hubble Space Telescope launched aboard Discovery on 24 April 1990. The crew deployed it into Earth orbit the next day. Its position above the atmosphere enabled sharp views of the universe. A servicing mission corrected a flaw in its main mirror in 1993. Hubble later imaged distant galaxies and many other celestial objects."
  },
  {
    "sr": "Ruski modul Zarja lansiran je 20. novembra 1998. godine. Bio je prvi deo Međunarodne svemirske stanice u orbiti. Modul je na početku obezbeđivao električnu energiju i upravljanje položajem. Američki modul Juniti priključen je ubrzo zatim. Tako je počelo sklapanje velike stanice uz saradnju više zemalja.",
    "sl": "Ruski modul Zarja so izstrelili 20. novembra 1998. Bil je prvi del Mednarodne vesoljske postaje v orbiti. Modul je sprva zagotavljal električno energijo in nadzor položaja. Ameriški modul Unity so kmalu zatem priključili nanj. S tem se je začelo sestavljanje velike postaje v sodelovanju več držav.",
    "en": "The Russian Zarya module launched on 20 November 1998. It was the first part of the International Space Station in orbit. Initially, the module supplied electrical power and attitude control. The American Unity module was attached soon afterward. This began assembly of a large station through international cooperation."
  },
  {
    "sr": "Kolumbija se raspala pri povratku na Zemlju 1. februara 2003. godine. Poginulo je svih sedmoro astronauta misije STS-107. Komad izolacione pene pri lansiranju je oštetio levu stranu krila. Tokom povratka, vreli gasovi su prodrli kroz oštećenje. Istraga je dovela do velikih promena u bezbednosnim postupcima šatla.",
    "sl": "Columbia je med vrnitvijo na Zemljo razpadla 1. februarja 2003. Umrlo je vseh sedem astronavtov odprave STS-107. Kos izolacijske pene je ob izstrelitvi poškodoval levo krilo. Med vrnitvijo so vroči plini prodrli skozi poškodovano mesto. Preiskava je privedla do velikih sprememb varnostnih postopkov raketoplanov.",
    "en": "Columbia broke apart during its return to Earth on 1 February 2003. All seven astronauts on mission STS-107 died. Insulating foam struck and damaged the left wing during launch. Hot gases entered through the damage during reentry. The investigation led to major changes in shuttle safety procedures."
  },
  {
    "sr": "Šendžou 5 lansiran je 15. oktobra 2003. godine. Jang Livej postao je prvi kineski astronaut u svemiru. Sam je obišao Zemlju 14 puta. Posle približno 21 sata kapsula se vratila u Unutrašnju Mongoliju. Kina je time postala treća zemlja koja je samostalno poslala čoveka u orbitu.",
    "sl": "Shenzhou 5 so izstrelili 15. oktobra 2003. Yang Liwei je postal prvi kitajski astronavt v vesolju. Sam je Zemljo obkrožil 14-krat. Po približno 21 urah se je kapsula vrnila v Notranjo Mongolijo. Kitajska je s tem postala tretja država, ki je sama poslala človeka v orbito.",
    "en": "Shenzhou 5 launched on 15 October 2003. Yang Liwei became the first Chinese astronaut in space. He orbited Earth 14 times alone. After about 21 hours, the capsule landed in Inner Mongolia. China thus became the third country to send a human into orbit independently."
  },
  {
    "sr": "Evropska sonda Hajgens sletela je na Titan 14. januara 2005. godine. Odvojila se od letelice Kasini pre ulaska u Titanovu atmosferu. Spuštanje padobranom trajalo je skoro dva i po sata. Sonda je snimila kanale i površinu sa ledenim oblucima. Bio je to prvi uspešan silazak na telo u spoljašnjem Sunčevom sistemu.",
    "sl": "Evropska sonda Huygens je 14. januarja 2005 pristala na Titanu. Pred vstopom v Titanovo ozračje se je ločila od plovila Cassini. Spuščanje s padalom je trajalo skoraj dve uri in pol. Sonda je posnela kanale in površje z ledenimi prodniki. To je bil prvi uspešen pristanek na telesu v zunanjem Osončju.",
    "en": "Europe's Huygens probe landed on Titan on 14 January 2005. It had separated from the Cassini spacecraft before entering Titan's atmosphere. Its parachute descent lasted nearly two and a half hours. The probe imaged channels and a surface strewn with icy pebbles. It was the first successful landing on a body in the outer Solar System."
  },
  {
    "sr": "Japanska sonda Hajabusa vratila je kapsulu na Zemlju 13. juna 2010. godine. Kapsula je sletela u australijskoj oblasti Vumera. U njoj su pronađene sitne čestice asteroida Itokava. Hajabusa je prethodno obišla asteroid i dvaput dodirnula njegovu površinu. Uzorci su omogućili neposrednu analizu građe asteroida.",
    "sl": "Japonska sonda Hayabusa je 13. junija 2010 vrnila kapsulo na Zemljo. Kapsula je pristala na avstralskem območju Woomera. V njej so našli drobne delce asteroida Itokawa. Hayabusa je pred tem raziskala asteroid in se dvakrat dotaknila njegovega površja. Vzorci so omogočili neposredno analizo sestave asteroida.",
    "en": "Japan's Hayabusa probe returned a capsule to Earth on 13 June 2010. The capsule landed in the Woomera area of Australia. Tiny particles from asteroid Itokawa were found inside. Hayabusa had surveyed the asteroid and touched its surface twice. The samples allowed direct analysis of asteroid material."
  },
  {
    "sr": "Lender File prvi put je dotakao kometu 67P 12. novembra 2014. godine. Na površinu ga je spustila evropska letelica Rozeta. Zbog neuspelog pričvršćivanja odskočio je posle prvog dodira. Zaustavio se tek posle još dva dodira sa kometom. Uprkos tome, njegovi instrumenti poslali su naučne podatke.",
    "sl": "Pristajalnik Philae se je 12. novembra 2014 prvič dotaknil kometa 67P. Na površje ga je poslala evropska sonda Rosetta. Ker se ni pritrdil, se je po prvem dotiku odbil. Ustavil se je šele po še dveh dotikih s kometom. Njegovi instrumenti so kljub temu poslali znanstvene podatke.",
    "en": "The Philae lander first touched comet 67P on 12 November 2014. Europe's Rosetta spacecraft had delivered it to the surface. Failed anchoring caused it to bounce after the first touchdown. It settled only after two more contacts with the comet. Despite this, its instruments returned scientific data."
  },
  {
    "sr": "Čang’e 4 sleteo je 3. januara 2019. na udaljenu stranu Meseca. Bio je to prvi uspešan meki doskok na toj hemisferi. Mesto sletanja nalazi se u krateru Fon Karman. Rover Jutu 2 zatim je istraživao okolni teren. Komunikaciju sa Zemljom omogućio je relejni satelit Ćuećiao.",
    "sl": "Chang’e 4 je 3. januarja 2019 pristal na oddaljeni strani Lune. To je bil prvi uspešen mehak pristanek na tej polobli. Pristajalno mesto leži v kraterju Von Kármán. Rover Yutu 2 je nato raziskoval okoliški teren. Komunikacijo z Zemljo je omogočal relejni satelit Queqiao.",
    "en": "Chang'e 4 landed on the Moon's far side on 3 January 2019. It was the first successful soft landing on that hemisphere. The landing site lies in Von Kármán crater. The Yutu 2 rover then explored the surrounding terrain. The Queqiao relay satellite enabled communication with Earth."
  },
  {
    "sr": "Kapsula misije Hajabusa 2 vratila se na Zemlju 6. decembra 2020. godine. Sletela je u Australiji sa uzorcima asteroida Rjugu. Sonda je prikupila materijal sa površine i iz sloja ispod nje. Uzorci su doprineli proučavanju ranog Sunčevog sistema. Glavna letelica nastavila je putovanje posle ispuštanja kapsule.",
    "sl": "Kapsula odprave Hayabusa2 se je 6. decembra 2020 vrnila na Zemljo. V Avstraliji je pristala z vzorci asteroida Ryugu. Sonda je zbrala snov s površja in iz plasti pod njim. Vzorci so prispevali k raziskovanju zgodnjega Osončja. Glavno plovilo je po izpustitvi kapsule nadaljevalo potovanje.",
    "en": "The Hayabusa2 mission's capsule returned to Earth on 6 December 2020. It landed in Australia carrying samples from asteroid Ryugu. The probe collected material from the surface and from a subsurface layer. The samples have helped researchers study the early Solar System. The main spacecraft continued its journey after releasing the capsule."
  },
  {
    "sr": "Kineska misija Tianven 1 spustila je lender na Mars 15. maja 2021. godine. Sletanje se dogodilo u ravnici Utopija Planicija. Rover Džurong kasnije je sišao sa platforme na tlo. Ispitivao je geologiju i uslove u okolini mesta sletanja. To je bilo prvo uspešno kinesko sletanje na drugu planetu.",
    "sl": "Kitajska odprava Tianwen 1 je 15. maja 2021 spustila pristajalnik na Mars. Pristanek se je zgodil na ravnini Utopia Planitia. Rover Zhurong se je pozneje s ploščadi zapeljal na tla. Raziskoval je geologijo in razmere v okolici pristanka. To je bil prvi uspešen kitajski pristanek na drugem planetu.",
    "en": "China's Tianwen-1 mission landed a spacecraft on Mars on 15 May 2021. The touchdown occurred in Utopia Planitia. The Zhurong rover later drove off the landing platform. It investigated the geology and conditions around the landing site. This was China's first successful landing on another planet."
  },
  {
    "sr": "Indijski lender Vikram sleteo je na Mesec 23. avgusta 2023. godine. Deo je misije Čandrajan 3. Spustio se u južnim visokim geografskim širinama Meseca. Rover Pragjan zatim je sišao na površinu i obavio merenja. Indija je tako postala četvrta zemlja koja je izvela meko sletanje na Mesec.",
    "sl": "Indijski pristajalnik Vikram je 23. avgusta 2023 pristal na Luni. Bil je del odprave Chandrayaan-3. Spustil se je v južnih visokih geografskih širinah Lune. Rover Pragyan je nato zapeljal na površje in opravil meritve. Indija je tako postala četrta država z mehkim pristankom na Luni.",
    "en": "India's Vikram lander touched down on the Moon on 23 August 2023. It was part of the Chandrayaan-3 mission. It landed at high southern lunar latitudes. The Pragyan rover then drove onto the surface and made measurements. India thus became the fourth country to achieve a soft landing on the Moon."
  },
  {
    "sr": "Kapsula Čang’e 6 vratila se na Zemlju 25. juna 2024. godine. Donela je prve uzorke sa udaljene strane Meseca. Materijal je prikupljen u oblasti bazena Južni pol–Ejtken. Uzorci su težili približno 1,94 kilograma. Naučnici ih proučavaju da bi bolje razumeli geološku razliku između dve strane Meseca.",
    "sl": "Kapsula Chang’e 6 se je 25. junija 2024 vrnila na Zemljo. Prinesla je prve vzorce z oddaljene strani Lune. Snov je bila zbrana na območju kotline Južni pol–Aitken. Vzorci so tehtali približno 1,94 kilograma. Znanstveniki jih preučujejo za boljše razumevanje geoloških razlik med obema stranema Lune.",
    "en": "The Chang'e 6 capsule returned to Earth on 25 June 2024. It brought back the first samples from the Moon's far side. The material was collected in the South Pole–Aitken basin region. The samples weighed about 1.94 kilograms. Scientists are studying them to understand geological differences between the Moon's two sides."
  },
  {
    "sr": "Indija je spojila dva satelita misije SpaDeX 16. januara 2025. godine. Letelice su se zvale SDX-01 i SDX-02. Pre spajanja morale su da se približe i usklade kretanje u orbiti. Uspeh je pokazao sposobnost autonomnog spajanja indijskih letelica. Takva tehnologija važna je za buduće orbitalne stanice i složenije misije.",
    "sl": "Indija je 16. januarja 2025 združila satelita odprave SpaDeX. Plovili sta se imenovali SDX-01 in SDX-02. Pred združitvijo sta se morali približati in uskladiti gibanje v orbiti. Uspeh je pokazal sposobnost samodejnega združevanja indijskih plovil. Takšna tehnologija je pomembna za prihodnje orbitalne postaje in zahtevnejše odprave.",
    "en": "India docked the two SpaDeX satellites on 16 January 2025. The spacecraft were named SDX-01 and SDX-02. Before docking, they had to approach and match their motion in orbit. The success demonstrated autonomous docking capability for Indian spacecraft. This technology matters for future orbital stations and more complex missions."
  },
  {
    "sr": "Lender Blu Gost kompanije Fajerflaj sleteo je na Mesec 2. marta 2025. godine. Uspravno je dospeo u oblast Mare Krisijum. Nosio je deset naučnih instrumenata za NASA. Tokom rada na površini ispitivao je lunarno okruženje. Misija je pokazala da komercijalna letelica može uspešno obaviti planirani lunarni rad.",
    "sl": "Pristajalnik Blue Ghost podjetja Firefly je 2. marca 2025 pristal na Luni. Pokončno je dosegel območje Mare Crisium. Za Naso je nosil deset znanstvenih instrumentov. Med delovanjem na površju je raziskoval lunarno okolje. Odprava je pokazala, da lahko komercialno plovilo uspešno opravi načrtovano delo na Luni.",
    "en": "Firefly's Blue Ghost lander reached the Moon on 2 March 2025. It touched down upright in Mare Crisium. It carried ten scientific instruments for NASA. During surface operations, it studied the lunar environment. The mission showed that a commercial spacecraft could complete its planned work on the Moon."
  },
  {
    "sr": "Artemis II lansiran je 1. aprila 2026. sa četvoro astronauta. Posadu su činili Rid Vajzman, Viktor Glover, Kristina Koh i Džeremi Hansen. Letelica Orion proletela je pored Meseca 6. aprila. Bio je to prvi let ljudi do Mesečeve okoline posle programa Apolo. Posada se bezbedno vratila na Zemlju 10. aprila.",
    "sl": "Artemis II so izstrelili 1. aprila 2026 s štirimi astronavti. Posadko so sestavljali Reid Wiseman, Victor Glover, Christina Koch in Jeremy Hansen. Plovilo Orion je 6. aprila poletelo mimo Lune. To je bil prvi polet ljudi v bližino Lune po programu Apollo. Posadka se je 10. aprila varno vrnila na Zemljo.",
    "en": "Artemis II launched with four astronauts on 1 April 2026. Its crew comprised Reid Wiseman, Victor Glover, Christina Koch and Jeremy Hansen. The Orion spacecraft flew past the Moon on 6 April. It was the first human journey to the Moon's vicinity since Apollo. The crew returned safely to Earth on 10 April."
  }
];
// Additional details from the supplied chronology, checked against NASA and ESA histories.
const extraFacts={
  '2':{sr:'Njegovi prepoznatljivi kratki radio-signali mogli su se čuti širom sveta.',sl:'Njegove prepoznavne kratke radijske signale je bilo mogoče slišati po vsem svetu.',en:'Its distinctive short radio beeps could be heard around the world.'},
  '3':{sr:'Kasnije objavljeni podaci pokazali su da je uginula nekoliko sati posle lansiranja zbog pregrevanja.',sl:'Pozneje objavljeni podatki so pokazali, da je zaradi pregrevanja poginila nekaj ur po izstrelitvi.',en:'Records released later showed that she died from overheating a few hours after launch.'},
  '5':{sr:'Letelica je nosila metalne zastavice sa sovjetskim obeležjima koje su se rasule pri udaru.',sl:'Plovilo je nosilo kovinske zastavice s sovjetskimi oznakami, ki so se ob trku raztresle.',en:'The spacecraft carried metal pennants bearing Soviet symbols that scattered on impact.'},
  '8':{sr:'Pri povratku se Gagarin katapultirao iz kapsule i spustio padobranom.',sl:'Ob vrnitvi se je Gagarin izstrelil iz kapsule in pristal s padalom.',en:'On return, Gagarin ejected from the capsule and descended by parachute.'},
  '9':{sr:'Ceo Šepardov suborbitalni let trajao je oko petnaest minuta.',sl:'Celoten Shepardov suborbitalni polet je trajal približno petnajst minut.',en:'Shepard’s entire suborbital flight lasted about fifteen minutes.'},
  '10':{sr:'Glen je tokom leta tri puta obišao Zemlju.',sl:'Glenn je med poletom trikrat obkrožil Zemljo.',en:'Glenn orbited Earth three times during the flight.'},
  '12':{sr:'U letelici Vostok 6 obišla je Zemlju 48 puta tokom gotovo tri dana.',sl:'V plovilu Vostok 6 je v skoraj treh dneh Zemljo obkrožila 48-krat.',en:'Aboard Vostok 6, she orbited Earth 48 times over nearly three days.'},
  '13':{sr:'Skafander mu se u vakuumu naduo, pa je morao da ispusti deo vazduha da bi se vratio u letelicu.',sl:'Skafander se mu je v vakuumu napihnil, zato je moral izpustiti nekaj zraka, da se je lahko vrnil v plovilo.',en:'His spacesuit inflated in the vacuum, so he had to release some air to reenter the spacecraft.'},
  '15':{sr:'Njene fotografije dale su prve panoramske poglede sa Mesečeve površine.',sl:'Njene fotografije so dale prve panoramske poglede z Luninega površja.',en:'Its photographs provided the first panoramic views from the lunar surface.'},
  '18':{sr:'Tokom misije Vilijam Anders snimio je čuvenu fotografiju izlaska Zemlje nad Mesecom.',sl:'Med odpravo je William Anders posnel znamenito fotografijo vzhoda Zemlje nad Luno.',en:'During the mission, William Anders took the famous Earthrise photograph.'}
};
for(const [key,facts] of Object.entries(extraFacts)){
  const detail=legacyRaceDetails[legacyRaceKeys.indexOf(key)];
  if(!detail)throw Error(`Missing space-race detail for ${key}`);
  for(const lang of ['sr','sl','en'])detail[lang]+=' '+facts[lang];
}
const detailByKey=new Map(legacyRaceKeys.map((key,index)=>[key,legacyRaceDetails[index]]));
for(const item of raceAdditions)detailByKey.set(item.key,item.details);
export const raceDetails=raceKeys.map(key=>detailByKey.get(key));
