import {astronomyKeys,astronomyBaseKeys} from './timeline-astronomy.mjs';
import {astronomyAdditions} from './timeline-astronomy-additions.mjs';
const baseDetails=[
  {
    "sr": "Stounhendž je građen u više faza. Veliki središnji kamenovi postavljeni su oko 2500. godine pre nove ere. Njihov raspored prati izlaske i zalaske Sunca oko solsticija. To pokazuje pažljivo posmatranje godišnjeg kretanja Sunca. Tačna namena spomenika nije poznata.",
    "sl": "Stonehenge so gradili v več fazah. Velike osrednje kamne so postavili okoli leta 2500 pred našim štetjem. Njihova razporeditev je usklajena s Sončevimi vzhodi in zahodi ob solsticijih. To kaže na skrbno opazovanje letnega gibanja Sonca. Natančen namen spomenika ni znan.",
    "en": "Stonehenge was built in several stages. Its large central stones were erected around 2500 BCE. Their arrangement aligns with solstice sunrises and sunsets. This shows careful attention to the Sun's yearly motion. The monument's exact purpose is unknown."
  },
  {
    "sr": "Nebeski disk iz Nebre napravljen je oko 1800. godine pre nove ere. Zakopan je oko 1600. godine pre nove ere. Bronza nosi zlatne prikaze nebeskih pojava. Među njima se obično prepoznaju Mesec, Sunce i Plejade. Tačno značenje svih znakova ostaje predmet tumačenja.",
    "sl": "Nebesni disk iz Nebre je nastal okoli leta 1800 pred našim štetjem. Zakopali so ga okoli leta 1600 pred našim štetjem. Na bronasti površini so zlati prikazi nebesnih pojavov. Med njimi običajno prepoznamo Luno, Sonce in Plejade. Natančen pomen vseh znakov ostaja predmet razlag.",
    "en": "The Nebra Sky Disc was made around 1800 BCE. It was buried around 1600 BCE. Gold shapes depict celestial phenomena on its bronze surface. They are commonly interpreted as the Moon, Sun, and Pleiades. The precise meaning of every symbol remains debated."
  },
  {
    "sr": "Venerina tablica vezuje opažanja planete za vladavinu kralja Amisaduke. Beleži kada se Venera pojavljuje i nestaje na nebu. Sačuvani primerak je novoasirski prepis starijih podataka. Opažanja su povezana i sa astrološkim predskazanjima. Tablica pokazuje dugotrajno praćenje planetarnih ciklusa.",
    "sl": "Venerina tablica povezuje opazovanja planeta z vladavino kralja Amisaduqe. Beleži, kdaj se Venera pojavi in izgine z neba. Ohranjeni primerek je novoasirski prepis starejših podatkov. Opazovanja so povezana tudi z astrološkimi napovedmi. Tablica priča o dolgotrajnem spremljanju planetnih ciklov.",
    "en": "The Venus Tablet links planetary observations to King Ammisaduqa's reign. It records when Venus appears and disappears in the sky. The surviving tablet is a Neo-Assyrian copy of older material. Its observations are also tied to astrological omens. It shows sustained tracking of planetary cycles."
  },
  {
    "sr": "Mehanizam sa Antikitere nastao je u antičkoj Grčkoj. Njegovi zupčanici prikazuju složene kalendarske i nebeske cikluse. Jedan brojčanik označava mogućnosti pomračenja prema Sarosovom ciklusu. Uređaj nije neposredno posmatrao nebo. Sačuvani delovi ne otkrivaju svaki detalj njegovog rada.",
    "sl": "Mehanizem z Antikitere je nastal v antični Grčiji. Njegovi zobniki prikazujejo zapletene koledarske in nebesne cikle. Ena številčnica označuje možnosti mrkov po Sarosovem ciklu. Naprava neba ni neposredno opazovala. Ohranjeni deli ne razkrivajo vseh podrobnosti njenega delovanja.",
    "en": "The Antikythera Mechanism was made in ancient Greece. Its gears represented complex calendar and celestial cycles. One dial marked eclipse possibilities using the Saros cycle. The device did not observe the sky directly. Its surviving fragments do not reveal every aspect of its operation."
  },
  {
    "sr": "Denderski zodijak potiče iz Egipta oko 50. godine pre nove ere. Ukrašavao je plafon kapele u hramu Hator. Prikazuje zodijačka sazvežđa i druge nebeske motive. Na njemu su predstavljene i tada poznate planete. To je prikaz antičkog neba, a ne mapa savremenih astronomskih koordinata.",
    "sl": "Zodiak iz Dendere izvira iz Egipta okoli leta 50 pred našim štetjem. Krasil je strop kapele v Hatorinem templju. Prikazuje zodiakalna ozvezdja in druge nebesne motive. Na njem so predstavljeni tudi tedaj znani planeti. Gre za upodobitev antičnega neba, ne za zemljevid sodobnih astronomskih koordinat.",
    "en": "The Dendera Zodiac was made in Egypt around 50 BCE. It decorated a chapel ceiling in the Temple of Hathor. It depicts zodiac constellations and other celestial motifs. It also represents the planets known at the time. It is an ancient sky image rather than a modern coordinate chart."
  },
  {
    "sr": "Ptolemej je oko 150. godine sastavio Almagest. U njemu su geometrijski modeli predviđali položaje Sunca, Meseca i planeta. Delo je koristilo i starija grčka i vavilonska opažanja. Njegov model je Zemlju držao blizu središta kosmosa. Predviđanja su bila korisna iako taj fizički model nije tačan.",
    "sl": "Ptolemaj je okoli leta 150 sestavil Almagest. Geometrijski modeli v njem so napovedovali položaje Sonca, Lune in planetov. Delo je uporabljalo tudi starejša grška in babilonska opazovanja. Njegov model je Zemljo postavil blizu središča vesolja. Napovedi so bile uporabne, čeprav ta fizikalni model ni pravilen.",
    "en": "Ptolemy compiled the Almagest around 150 CE. Its geometric models predicted positions of the Sun, Moon, and planets. It also drew on earlier Greek and Babylonian observations. His model placed Earth near the center of the cosmos. Its predictions were useful although its physical picture was wrong."
  },
  {
    "sr": "Arijabhata je 499. godine napisao Arijabatiju. Opisao je Zemlju kao sferu koja se okreće oko svoje ose. Pomračenje Meseca objasnio je Zemljinom senkom. Astronomiju je povezao s preciznim matematičkim proračunima. Njegov model nije bio savremeni heliocentrični sistem.",
    "sl": "Arjabhata je leta 499 napisal Arjabhatijo. Zemljo je opisal kot kroglo, ki se vrti okoli svoje osi. Lunin mrk je pojasnil z Zemljino senco. Astronomijo je povezal z natančnimi matematičnimi izračuni. Njegov model ni bil sodobni heliocentrični sistem.",
    "en": "Aryabhata wrote the Aryabhatiya in 499 CE. He described Earth as a sphere rotating on its axis. He explained lunar eclipses through Earth's shadow. His astronomy relied on careful mathematical calculation. His model was not the modern heliocentric system."
  },
  {
    "sr": "Zvezdana karta iz Dunhuanga potiče iz druge polovine sedmog veka. Sačuvana je u rukopisu iz kineske tradicije. Prikazuje brojne zvezde i kineske asterizme. Jedna je od najstarijih sačuvanih rukopisnih mapa neba. Njena starost ne znači da su tada prvi put mapirane zvezde.",
    "sl": "Zvezdna karta iz Dunhuanga izvira iz druge polovice sedmega stoletja. Ohranjena je v rokopisu kitajske tradicije. Prikazuje številne zvezde in kitajske asterizme. Spada med najstarejše ohranjene rokopisne zemljevide neba. Njena starost ne pomeni, da so zvezde prvič kartirali šele tedaj.",
    "en": "The Dunhuang Star Chart dates from the later seventh century. It survives in a manuscript from the Chinese tradition. It shows many stars and Chinese asterisms. It is among the oldest surviving manuscript sky maps. Its age does not mean stars were first mapped then."
  },
  {
    "sr": "Al Sufi je oko 964. godine sastavio Knjigu nepokretnih zvezda. Povezao je Ptolemejev katalog sa arapskim zvezdanim imenima. Opisao je položaje, sjaj i slike sazvežđa. Njegov atlas je vekovima prepisivan i proučavan. Andromedu je video kao mutan objekat, ne kao zasebnu galaksiju.",
    "sl": "Al Sufi je okoli leta 964 sestavil Knjigo nepremičnih zvezd. Ptolemajev katalog je povezal z arabskimi imeni zvezd. Opisal je položaje, sij in podobe ozvezdij. Njegov atlas so stoletja prepisovali in preučevali. Andromedo je opazil kot meglen objekt, ne kot samostojno galaksijo.",
    "en": "Al-Sufi compiled the Book of Fixed Stars around 964. He combined Ptolemy's catalogue with Arabic star names. He described stellar positions, brightness, and constellation figures. His atlas was copied and studied for centuries. He saw Andromeda as a fuzzy object, not a separate galaxy."
  },
  {
    "sr": "Srednjovekovni astrolab je prenosiva mapa vidljivog neba. Njegove ploče odgovarale su određenim geografskim širinama. Pomični delovi pomagali su u računanju vremena i položaja zvezda. Islamski i evropski majstori razvijali su različite primerke. Astrolab je računarski instrument, a ne teleskop.",
    "sl": "Srednjeveški astrolab je prenosni zemljevid vidnega neba. Njegove plošče so ustrezale določenim zemljepisnim širinam. Premični deli so pomagali računati čas in položaje zvezd. Islamski in evropski mojstri so izdelovali različne primerke. Astrolab je računska naprava, ne teleskop.",
    "en": "A medieval astrolabe is a portable map of the visible sky. Its plates were made for particular latitudes. Moving parts helped calculate time and stellar positions. Islamic and European makers developed varied examples. An astrolabe is a calculating instrument, not a telescope."
  },
  {
    "sr": "Ulug Beg je u Samarkandu podigao veliku opservatoriju. Oko 1437. godine njegov tim je sastavio katalog skoro hiljadu zvezda. Veliki zidani instrumenti omogućili su precizna ugaona merenja. Rad je obavljen pre pronalaska teleskopa. Katalog je rezultat saradnje astronoma, a ne rada jednog čoveka.",
    "sl": "Ulug Beg je v Samarkandu zgradil veliko opazovalnico. Okoli leta 1437 je njegova skupina sestavila katalog skoraj tisoč zvezd. Veliki zidani instrumenti so omogočali natančne meritve kotov. Delo je nastalo pred izumom teleskopa. Katalog je rezultat sodelovanja astronomov, ne dela enega človeka.",
    "en": "Ulugh Beg built a major observatory in Samarkand. Around 1437 his team compiled a catalogue of nearly a thousand stars. Large masonry instruments enabled precise angular measurements. This work preceded the invention of the telescope. The catalogue was a collaborative achievement, not one person's work."
  },
  {
    "sr": "Kopernik je 1543. godine objavio delo O kruženjima nebeskih sfera. U njegovom modelu Zemlja je planeta koja obilazi Sunce. Time je jednostavnije objasnio prividno kretanje planeta unazad. Zadržao je kružne orbite i dodatne geometrijske konstrukcije. Predlog nije odmah postao prihvaćena činjenica.",
    "sl": "Kopernik je leta 1543 objavil delo O kroženju nebesnih sfer. V njegovem modelu je Zemlja planet, ki kroži okoli Sonca. Tako je preprosteje pojasnil navidezno vzvratno gibanje planetov. Ohranil je krožne tirnice in dodatne geometrijske konstrukcije. Predlog ni bil takoj sprejet kot dejstvo.",
    "en": "Copernicus published On the Revolutions of the Heavenly Spheres in 1543. His model made Earth a planet orbiting the Sun. It gave a simpler account of the planets' apparent backward motion. He retained circular orbits and extra geometric devices. The proposal was not immediately accepted as fact."
  },
  {
    "sr": "Tiho Brahe je u novembru 1572. pažljivo pratio novu sjajnu tačku u sazvežđu Kasiopeje. Nije uočio merljivu promenu njenog položaja kakva bi se očekivala za blisku atmosfersku pojavu. Zaključio je da se nalazi daleko od Zemlje, u oblasti koju su mnogi smatrali nepromenljivom. Danas znamo da je posmatrao supernovu, eksploziju zvezde. Prikazana slika pokazuje ostatak te eksplozije snimljen mnogo vekova kasnije.",
    "sl": "Tycho Brahe je novembra 1572 skrbno opazoval novo svetlo točko v ozvezdju Kasiopeje. Ni zaznal merljive spremembe njene lege, kakršno bi pričakoval pri bližnjem atmosferskem pojavu. Sklepal je, da leži daleč od Zemlje, na območju, ki so ga mnogi imeli za nespremenljivo. Danes vemo, da je opazoval supernovo, eksplozijo zvezde. Prikazana slika kaže ostanek te eksplozije, posnet mnogo stoletij pozneje.",
    "en": "In November 1572, Tycho Brahe carefully observed a bright new point in Cassiopeia. He found no measurable shift in its position of the kind expected for a nearby atmospheric phenomenon. He concluded that it lay far from Earth in a region many people had regarded as unchanging. We now know he observed a supernova, an exploding star. The displayed image shows the remnant photographed many centuries later."
  },
  {
    "sr": "Kepler je koristio Braheova precizna opažanja Marsa. Godine 1609. objavio je da se planete kreću po elipsama. Pokazao je i da planeta menja brzinu tokom obilaska. Godine 1619. povezao je period obilaska sa veličinom orbite. Njegovi zakoni opisivali su kretanje, ali nisu objasnili gravitaciju.",
    "sl": "Kepler je uporabil Brahejeva natančna opazovanja Marsa. Leta 1609 je objavil, da se planeti gibljejo po elipsah. Pokazal je tudi, da planet med kroženjem spreminja hitrost. Leta 1619 je povezal obhodni čas z velikostjo tirnice. Njegovi zakoni so opisovali gibanje, niso pa pojasnili gravitacije.",
    "en": "Kepler used Brahe's precise observations of Mars. In 1609 he published the finding that planets follow elliptical orbits. He also showed that a planet changes speed along its orbit. In 1619 he linked orbital period to orbital size. His laws described motion without explaining gravity."
  },
  {
    "sr": "Galilej je 1609. godine usmerio teleskop ka Mesecu. Video je svetle i tamne oblasti koje je tumačio kao reljef. Njegovi crteži prikazali su planine, udubljenja i neravnu površinu. To je osporilo predstavu o savršeno glatkom nebeskom telu. Mesecovo lice samo po sebi nije dokazalo heliocentrizam.",
    "sl": "Galilej je leta 1609 usmeril teleskop proti Luni. Opazil je svetla in temna območja, ki jih je razložil kot relief. Njegove risbe so prikazale gore, vdolbine in neravno površje. To je omajalo predstavo o popolnoma gladkem nebesnem telesu. Lunino površje samo po sebi ni dokazalo heliocentrizma.",
    "en": "Galileo pointed a telescope at the Moon in 1609. He saw bright and dark regions that he interpreted as relief. His drawings showed mountains, hollows, and an uneven surface. This challenged the idea of a perfectly smooth celestial body. The lunar surface alone did not prove heliocentrism."
  },
  {
    "sr": "Galilej je teleskopom pratio promene Venerinog osvetljenog dela. Uočio je čitav niz faza, sličan Mesečevim fazama. One pokazuju da Venera obilazi Sunce. To je bilo protivno klasičnom Ptolemejevom rasporedu planeta. Fazama je mogao odgovarati i Braheov geoheliocentrični model.",
    "sl": "Galilej je s teleskopom spremljal spremembe osvetljenega dela Venere. Opazil je celoten niz faz, podoben Luninim fazam. Te kažejo, da Venera kroži okoli Sonca. To je nasprotovalo klasični Ptolemajevi razporeditvi planetov. Fazam je lahko ustrezal tudi Brahejev geoheliocentrični model.",
    "en": "Galileo used a telescope to track Venus's changing illuminated face. He observed a full sequence of phases like the Moon's. These phases show that Venus orbits the Sun. They contradicted the classical Ptolemaic arrangement. Brahe's geoheliocentric model could also accommodate them."
  },
  {
    "sr": "Kristijan Hajgens je 1655. godine protumačio neobičan izgled Saturna. Zaključio je da planetu okružuje prsten. Promena ugla pod kojim ga vidimo objašnjava njegovo prividno nestajanje. Iste godine otkrio je Saturnov mesec Titan. Fina građa prstenova otkrivena je mnogo kasnije.",
    "sl": "Christiaan Huygens je leta 1655 pojasnil nenavadni videz Saturna. Sklenil je, da planet obdaja obroč. Sprememba kota opazovanja pojasni njegovo navidezno izginjanje. Istega leta je odkril Saturnovo luno Titan. Podrobna zgradba obročev je bila odkrita veliko pozneje.",
    "en": "Christiaan Huygens explained Saturn's unusual appearance in 1655. He concluded that a ring surrounded the planet. Our changing viewing angle explains why it sometimes seems to vanish. He also discovered Saturn's moon Titan that year. The rings' detailed structure was discovered much later."
  },
  {
    "sr": "Njutn je 1687. godine objavio Principiju. Isti zakoni kretanja primenjeni su na zemaljska i nebeska tela. Univerzalna gravitacija objasnila je Keplerove planetarne zakone. Time su orbite dobile fizičko objašnjenje. Opšta relativnost kasnije je proširila ovaj opis gravitacije.",
    "sl": "Newton je leta 1687 objavil Principio. Isti zakoni gibanja so veljali za zemeljska in nebesna telesa. Univerzalna gravitacija je pojasnila Keplerjeve planetne zakone. Tirnice so tako dobile fizikalno razlago. Splošna relativnost je pozneje ta opis gravitacije razširila.",
    "en": "Newton published the Principia in 1687. The same laws of motion applied to earthly and celestial bodies. Universal gravitation explained Kepler's planetary laws. Orbits thereby gained a physical explanation. General relativity later extended this account of gravity."
  },
  {
    "sr": "Džantar Mantar u Džajpuru građen je tokom prve polovine osamnaestog veka. Džaj Sing Drugi okupio je astronome i graditelje. Veliki zidani instrumenti merili su vreme i položaje nebeskih tela. Projekat je koristio znanja indijske, islamske i evropske astronomije. Gradnja je trajala godinama, pa jedan datum ne označava celo delo.",
    "sl": "Džantar Mantar v Džajpurju so gradili v prvi polovici osemnajstega stoletja. Džaj Sing Drugi je zbral astronome in graditelje. Veliki zidani instrumenti so merili čas in položaje nebesnih teles. Projekt je uporabljal znanje indijske, islamske in evropske astronomije. Gradnja je trajala več let, zato je ne opredeljuje en sam datum.",
    "en": "Jantar Mantar in Jaipur was built during the first half of the eighteenth century. Jai Singh II gathered astronomers and builders. Large masonry instruments measured time and celestial positions. The project drew on Indian, Islamic, and European astronomy. Construction spanned years, so no single date covers the whole complex."
  },
  {
    "sr": "Vilijam Heršel je 1781. godine uočio neobičan objekat tokom pregleda zvezda. Isprva je mislio da je reč o kometi. Naknadna posmatranja pokazala su da je to planeta Uran. Time se poznati planetarni sistem proširio izvan Saturna. Raniji posmatrači su Uran beležili kao zvezdu.",
    "sl": "William Herschel je leta 1781 med pregledovanjem zvezd opazil nenavaden objekt. Sprva je menil, da je komet. Poznejša opazovanja so pokazala, da gre za planet Uran. Znani planetni sistem se je tako razširil onkraj Saturna. Prejšnji opazovalci so Uran zapisovali kot zvezdo.",
    "en": "William Herschel noticed an unusual object during a star survey in 1781. He initially thought it was a comet. Later observations established that it was the planet Uranus. The known planetary system thus expanded beyond Saturn. Earlier observers had recorded Uranus as a star."
  },
  {
    "sr": "Jozef fon Fraunhofer je oko 1814. godine pažljivo mapirao tamne linije u Sunčevom spektru. Slične linije bile su opažene i ranije. On ih je pretvorio u precizne oznake za merenje svetlosti. Njihova veza s hemijskim elementima objašnjena je kasnije. Spektroskopija je zatim postala ključna za proučavanje zvezda.",
    "sl": "Joseph von Fraunhofer je okoli leta 1814 skrbno kartiral temne črte v Sončevem spektru. Podobne črte so opazili že prej. Spremenil jih je v natančne oznake za merjenje svetlobe. Njihova povezava s kemijskimi elementi je bila pojasnjena pozneje. Spektroskopija je nato postala ključna za proučevanje zvezd.",
    "en": "Joseph von Fraunhofer carefully mapped dark lines in the Sun's spectrum around 1814. Similar lines had been seen before. He turned them into precise reference marks for measuring light. Their connection to chemical elements was explained later. Spectroscopy then became central to the study of stars."
  },
  {
    "sr": "Džon Vilijam Drejper je 1840. godine snimio Mesec dagerotipijom. Na slici su se razaznavale tamne površinske oblasti. Ona je među najranijim sačuvanim fotografijama Meseca. Raniji pokušaji fotografisanja ne znače da su sačuvane njihove slike. Fotografija je astronomiji dala trajni zapis za poređenje.",
    "sl": "John William Draper je leta 1840 posnel Luno z dagerotipijo. Na sliki so bila razločljiva temna površinska območja. Spada med najzgodnejše ohranjene fotografije Lune. Obstajali so zgodnejši poskusi, vendar se njihove slike niso ohranile. Fotografija je astronomiji dala trajen zapis za primerjavo.",
    "en": "John William Draper photographed the Moon by daguerreotype in 1840. Dark surface markings were discernible in the image. It is among the earliest surviving lunar photographs. Earlier attempts were made, but their images did not survive. Photography gave astronomy a lasting record for comparison."
  },
  {
    "sr": "Neptun je otkriven 23. septembra 1846. Urban Leverije je njegov položaj predvideo iz poremećaja Uranove putanje. Johan Gale i Hajnrih d'Arest posmatrali su planetu u Berlinu. Voyager 2 je pored Neptuna proletela 1989. Prikazana fotografija NASA/JPL nastala je tokom te kasnije misije.",
    "sl": "Neptun so odkrili 23. septembra 1846. Urbain Le Verrier je njegovo lego napovedal iz motenj Uranove tirnice. Johann Galle in Heinrich d'Arrest sta planet opazovala v Berlinu. Voyager 2 je mimo Neptuna poletel leta 1989. Prikazana fotografija NASA/JPL je nastala med to poznejšo odpravo.",
    "en": "Neptune was discovered on 23 September 1846. Urbain Le Verrier predicted its position from perturbations in Uranus's orbit. Johann Galle and Heinrich d'Arrest observed the planet in Berlin. Voyager 2 flew past Neptune in 1989. The displayed NASA/JPL photograph comes from that later mission."
  },
  {
    "sr": "Potpuno pomračenje Sunca dogodilo se 28. jula 1851. Johan Julijus Fridrih Berkowski snimio ga je u Kenigsbergu. Koristio je dagerotipski postupak. Snimak prikazuje Sunčevu koronu oko Mesečevog tamnog diska. Prikazana slika potiče iz samog perioda događaja.",
    "sl": "Popolni Sončev mrk je nastopil 28. julija 1851. Johann Julius Friedrich Berkowski ga je posnel v Königsbergu. Uporabil je dagerotipski postopek. Posnetek prikazuje Sončevo korono okoli temnega Luninega diska. Prikazana slika izhaja iz časa samega dogodka.",
    "en": "A total solar eclipse occurred on 28 July 1851. Johann Julius Friedrich Berkowski photographed it in Königsberg. He used the daguerreotype process. The image shows the solar corona around the Moon's dark disk. This image dates from the event itself."
  },
  {
    "sr": "Ejnar Hercšprung i Henri Noris Rasel razvili su dijagrame zvezda početkom 20. veka. Dijagram povezuje sjaj zvezde s njenom bojom ili temperaturom. Većina zvezda nalazi se na glavnom nizu. Njime se prikazuju i džinovi i beli patuljci. Priloženi crtež je savremena ilustracija, a ne originalni dijagram iz 1910-ih.",
    "sl": "Ejnar Hertzsprung in Henry Norris Russell sta v začetku 20. stoletja razvila diagrame zvezd. Diagram povezuje svetilnost zvezde z njeno barvo ali temperaturo. Večina zvezd leži na glavni veji. Prikazuje tudi orjakinje in bele pritlikavke. Priložena risba je sodobna ponazoritev in ne izvirni diagram iz 1910-ih.",
    "en": "Ejnar Hertzsprung and Henry Norris Russell developed stellar diagrams in the early 20th century. The diagram relates a star's luminosity to its color or temperature. Most stars fall on the main sequence. It also shows giants and white dwarfs. The displayed drawing is a modern illustration, not an original 1910s chart."
  },
  {
    "sr": "Henrijeta Levit objavila je 1912. analizu 25 promenljivih zvezda u Malom Magelanovom oblaku. Utvrdila je vezu između perioda pulsiranja i sjaja cefeida. Duži periodi odgovaraju većem stvarnom sjaju. Taj odnos omogućio je merenje velikih kosmičkih rastojanja. Prikazana su dva grafikona iz njenog rada iz 1912.",
    "sl": "Henrietta Leavitt je leta 1912 objavila analizo 25 spremenljivih zvezd v Malem Magellanovem oblaku. Ugotovila je povezavo med periodo utripanja in svetilnostjo kefeid. Daljše periode ustrezajo večji dejanski svetilnosti. To razmerje je omogočilo merjenje velikih vesoljskih razdalj. Prikazana sta dva grafa iz njenega dela iz leta 1912.",
    "en": "Henrietta Leavitt published a study of 25 variable stars in the Small Magellanic Cloud in 1912. She found a relation between Cepheid pulsation period and luminosity. Longer periods correspond to greater intrinsic brightness. This relation enabled measurements of large cosmic distances. The image reproduces two graphs from her 1912 paper."
  },
  {
    "sr": "Potpuno pomračenje Sunca 29. maja 1919. omogućilo je merenje prividnih položaja zvezda blizu Sunca. Ekspedicije su posmatrale iz Sobrala i s ostrva Prinsipe. Rezultati su podržali Ajnštajnovo predviđanje savijanja svetlosti. Prikazan je negativ snimljen u Sobralu. Reprodukcija je objavljena u naučnom izveštaju 1920.",
    "sl": "Popolni Sončev mrk 29. maja 1919 je omogočil merjenje navideznih leg zvezd blizu Sonca. Odpravi sta opazovali v Sobralu in na otoku Príncipe. Rezultati so podprli Einsteinovo napoved ukrivljanja svetlobe. Prikazan je negativ, posnet v Sobralu. Reprodukcija je bila objavljena v znanstvenem poročilu leta 1920.",
    "en": "The total solar eclipse of 29 May 1919 allowed measurements of apparent star positions near the Sun. Expeditions observed from Sobral and Príncipe. Their results supported Einstein's prediction that gravity bends light. The displayed negative was taken at Sobral. Its reproduction appeared in a scientific report in 1920."
  },
  {
    "sr": "Edvin Habl je 1923. na fotografskim pločama Andromede prepoznao cefeidu V1. Na ploči je precrtao oznaku „N“ i napisao „VAR“. Period cefeide poslužio je za procenu rastojanja. Merenje je pokazalo da je Andromeda izvan Mlečnog puta. Prikazani kolaž objavljen je 2011. i sadrži kopiju istorijske ploče.",
    "sl": "Edwin Hubble je leta 1923 na fotografskih ploščah Andromede prepoznal kefeido V1. Na plošči je prečrtal oznako »N« in napisal »VAR«. Perioda kefeide je omogočila oceno razdalje. Meritev je pokazala, da je Andromeda zunaj Rimske ceste. Prikazani kolaž je bil objavljen leta 2011 in vsebuje kopijo zgodovinske plošče.",
    "en": "Edwin Hubble identified the Cepheid V1 on Andromeda photographic plates in 1923. He crossed out an “N” on the plate and wrote “VAR.” The Cepheid's period allowed a distance estimate. The measurement showed that Andromeda lies beyond the Milky Way. The displayed 2011 collage includes a copy of the historic plate."
  },
  {
    "sr": "Edvin Habl objavio je 1929. odnos između rastojanja galaksija i njihovih radijalnih brzina. Udaljenije galaksije u uzorku uglavnom su imale veće brzine udaljavanja. Grafikon je postao važan dokaz širenja svemira. U radu su korišćena i ranija merenja crvenog pomaka drugih astronoma. Prikazana slika je grafikon iz Hablovog rada iz 1929.",
    "sl": "Edwin Hubble je leta 1929 objavil razmerje med razdaljami galaksij in njihovimi radialnimi hitrostmi. Bolj oddaljene galaksije v vzorcu so se večinoma oddaljevale hitreje. Graf je postal pomemben dokaz za širjenje vesolja. Delo je uporabilo tudi starejše meritve rdečega premika drugih astronomov. Prikazana slika je graf iz Hubblovega članka iz leta 1929.",
    "en": "Edwin Hubble published a relation between galaxy distance and radial velocity in 1929. More distant galaxies in his sample generally had larger recession speeds. The plot became important evidence for cosmic expansion. His work also used earlier redshift measurements by other astronomers. The displayed image is the graph from Hubble's 1929 paper."
  },
  {
    "sr": "Karl Janski je 1932. otkrio radio-zračenje koje dolazi iz svemira. Radio je na anteni u laboratorijama Bel. Utvrdio je da signal dolazi iz pravca Mlečnog puta. Otkriće je otvorilo radio-astronomiju. Prikazana fotografija iz 2009. prikazuje repliku antene u Grin Benku.",
    "sl": "Karl Jansky je leta 1932 odkril radijsko sevanje iz vesolja. Delal je z anteno v Bellovih laboratorijih. Ugotovil je, da signal prihaja iz smeri Rimske ceste. Odkritje je začelo radijsko astronomijo. Prikazana fotografija iz leta 2009 kaže repliko antene v Green Banku.",
    "en": "Karl Jansky discovered radio emission from space in 1932. He worked with an antenna at Bell Laboratories. He traced the signal toward the Milky Way. The discovery opened the field of radio astronomy. The displayed 2009 photograph shows a replica antenna at Green Bank."
  },
  {
    "sr": "Harold Iven i Edvard Persel detektovali su 1951. radio-liniju neutralnog vodonika na 21 centimetru. Posmatranje je izvedeno na Harvardu. Signal potiče od vodonika u Mlečnom putu. Linija je postala važan alat za mapiranje galaktičkog gasa. Prikazana fotografija iz 2009. pokazuje originalnu antenu sačuvanu u Grin Benku.",
    "sl": "Harold Ewen in Edward Purcell sta leta 1951 zaznala 21-centimetrsko radijsko črto nevtralnega vodika. Opazovanje je potekalo na Harvardu. Signal prihaja od vodika v Rimski cesti. Črta je postala pomembno orodje za kartiranje galaktičnega plina. Prikazana fotografija iz leta 2009 kaže izvirno anteno, ohranjeno v Green Banku.",
    "en": "Harold Ewen and Edward Purcell detected the 21-centimeter radio line of neutral hydrogen in 1951. The observation was made at Harvard. The signal came from hydrogen in the Milky Way. The line became a key tool for mapping galactic gas. The displayed 2009 photograph shows the original antenna preserved at Green Bank."
  },
  {
    "sr": "Marten Šmit je 1963. identifikovao veliki crveni pomak izvora 3C 273. Izvor je izgledao gotovo kao zvezda. Njegov crveni pomak pokazao je da je izuzetno daleko. 3C 273 je postao prvi identifikovani kvazar. Prikazani snimak napravio je Hablov svemirski teleskop mnogo kasnije, 2003.",
    "sl": "Maarten Schmidt je leta 1963 določil velik rdeči premik vira 3C 273. Vir je bil videti skoraj kot zvezda. Rdeči premik je pokazal, da je izjemno oddaljen. 3C 273 je postal prvi prepoznani kvazar. Prikazani posnetek je Hubblov vesoljski teleskop izdelal precej pozneje, leta 2003.",
    "en": "Maarten Schmidt identified the large redshift of 3C 273 in 1963. The source looked almost star-like. Its redshift showed that it was extraordinarily distant. 3C 273 became the first identified quasar. The displayed Hubble Space Telescope image was taken much later, in 2003."
  },
  {
    "sr": "Arno Penzias i Robert Vilson otkrili su kosmičko mikrotalasno pozadinsko zračenje radeći s Holmdel antenom. Merenje je izvedeno 1964, a objavljeno 1965. Signal je stizao iz svih pravaca neba. Otkriće je pružilo snažnu podršku modelu Velikog praska. Prikazana fotografija antene snimljena je 2007, decenijama kasnije.",
    "sl": "Arno Penzias in Robert Wilson sta med delom s Holmdelovo anteno odkrila kozmično mikrovalovno sevanje ozadja. Meritev je bila opravljena leta 1964, objavljena pa leta 1965. Signal je prihajal iz vseh smeri neba. Odkritje je močno podprlo model velikega poka. Prikazana fotografija antene je nastala leta 2007, desetletja pozneje.",
    "en": "Arno Penzias and Robert Wilson discovered the cosmic microwave background using the Holmdel antenna. Their measurement was made in 1964 and published in 1965. The signal arrived from all directions in the sky. The discovery strongly supported the Big Bang model. The displayed antenna photograph was taken decades later, in 2007."
  },
  {
    "sr": "Džoslin Bel Bernel je 1967. u podacima radio-teleskopa primetila ponavljajući signal. Izvor je dobio oznaku PSR B1919+21. Kratki radio-impulsi ponavljali su se pravilno. Pulsari su rotirajuće neutronske zvezde. Prikazana fotografija originalnog papirnog zapisa snimljena je 2019.",
    "sl": "Jocelyn Bell Burnell je leta 1967 v podatkih radijskega teleskopa opazila ponavljajoči se signal. Vir je dobil oznako PSR B1919+21. Kratki radijski impulzi so se ponavljali pravilno. Pulzarji so vrteče se nevtronske zvezde. Prikazana fotografija izvirnega papirnega zapisa je bila posneta leta 2019.",
    "en": "Jocelyn Bell Burnell noticed a repeating signal in radio telescope data in 1967. The source was designated PSR B1919+21. Its short radio pulses recurred regularly. Pulsars are rotating neutron stars. The displayed photograph of the original paper chart was taken in 2019."
  },
  {
    "sr": "Satelit COBE merio je kosmičko mikrotalasno pozadinsko zračenje. Njegov instrument DMR otkrio je male temperaturne razlike na nebu. Rezultat je objavljen 1992. Te razlike ukazuju na početne neravnomernosti iz kojih su nastale velike kosmičke strukture. Prikazana NASA mapa sastavljena je iz COBE podataka prikupljenih od 1990. do 1992.",
    "sl": "Satelit COBE je meril kozmično mikrovalovno sevanje ozadja. Njegov instrument DMR je odkril majhne temperaturne razlike na nebu. Rezultat so objavili leta 1992. Razlike kažejo začetne neenakomernosti, iz katerih so nastale velike vesoljske strukture. Prikazana NASA-ina karta temelji na podatkih COBE, zbranih med letoma 1990 in 1992.",
    "en": "The COBE satellite measured the cosmic microwave background. Its DMR instrument detected small temperature differences across the sky. The result was announced in 1992. These differences trace early irregularities from which large cosmic structures grew. The displayed NASA map uses COBE data collected from 1990 to 1992."
  },
  {
    "sr": "Mišel Major i Didije Keloz otkrili su 51 Pegasi b 1995. To je bila prva potvrđena planeta oko zvezde slične Suncu. Pronašli su je merenjem promene brzine matične zvezde. Planeta je vreli gasni džin u bliskoj orbiti. Prikazana ESO slika iz 2015. umetnička je interpretacija, a ne fotografija planete.",
    "sl": "Michel Mayor in Didier Queloz sta leta 1995 odkrila 51 Pegasi b. To je bil prvi potrjeni planet ob zvezdi, podobni Soncu. Odkrila sta ga z merjenjem sprememb hitrosti matične zvezde. Planet je vroč plinski velikan v tesni tirnici. Prikazana slika ESO iz leta 2015 je umetniška upodobitev in ne fotografija planeta.",
    "en": "Michel Mayor and Didier Queloz discovered 51 Pegasi b in 1995. It was the first confirmed planet orbiting a Sun-like star. They found it through changes in the host star's radial velocity. The planet is a hot gas giant in a close orbit. The displayed 2015 ESO image is an artist's impression, not a photograph of the planet."
  },
  {
    "sr": "Hablov svemirski teleskop posmatrao je mali deo neba tokom deset dana u decembru 1995. Ekspozicije su spojene u Hablovo duboko polje. Slika je objavljena u januaru 1996. Na njoj se vide stotine udaljenih galaksija. Prikazana slika potiče iz tih posmatranja, a nije kasnija ilustracija.",
    "sl": "Hubblov vesoljski teleskop je decembra 1995 deset dni opazoval majhen del neba. Posnetke so združili v Hubblovo globoko polje. Sliko so objavili januarja 1996. Na njej je vidnih na stotine oddaljenih galaksij. Prikazana slika temelji na teh opazovanjih in ni poznejša ilustracija.",
    "en": "The Hubble Space Telescope observed a tiny patch of sky over ten days in December 1995. The exposures were combined into the Hubble Deep Field. The image was released in January 1996. It reveals hundreds of distant galaxies. The displayed image comes from those observations, rather than a later illustration."
  },
  {
    "sr": "Dva nezavisna tima su 1998. iz merenja udaljenih supernova tipa Ia zaključila da se širenje svemira ubrzava. Supernove tipa Ia služe kao pokazatelji kosmičkih rastojanja. Daleke supernove bile su tamnije nego što se očekivalo u modelu usporavanja. Tamna energija je naziv za moguće objašnjenje ubrzanja. Prikazana NASA/ESA ilustracija iz 2003. objašnjava metod i nastala je posle otkrića.",
    "sl": "Dve neodvisni skupini sta leta 1998 iz meritev oddaljenih supernov tipa Ia sklepali, da se širjenje vesolja pospešuje. Supernove tipa Ia služijo kot kazalniki vesoljskih razdalj. Oddaljene supernove so bile temnejše od pričakovanj pri upočasnjujočem se širjenju. Temna energija je ime za možno razlago pospeška. Prikazana ilustracija NASA/ESA iz leta 2003 pojasnjuje metodo in je nastala po odkritju.",
    "en": "Two independent teams concluded in 1998 from distant Type Ia supernovae that cosmic expansion is accelerating. Type Ia supernovae serve as indicators of cosmic distance. Distant supernovae appeared dimmer than expected in a decelerating universe. Dark energy names a possible explanation for the acceleration. The displayed NASA/ESA illustration dates from 2003 and explains the method after the discovery."
  },
  {
    "sr": "Misija Kepler objavila je otkriće Kepler-186f 2014. Planeta je približno veličine Zemlje. Kruži oko crvenog patuljka u zoni gde je moguća tečna voda na površini. Otkriće samo po sebi ne dokazuje da na planeti ima vode ili života. Prikazana NASA ilustracija iz 2014. umetnička je predstava, a ne fotografija planete.",
    "sl": "Misija Kepler je leta 2014 objavila odkritje Kepler-186f. Planet je približno velik kot Zemlja. Kroži okoli rdeče pritlikavke v območju, kjer bi na površju lahko obstajala tekoča voda. Odkritje samo po sebi ne dokazuje prisotnosti vode ali življenja. Prikazana NASA-ina ilustracija iz leta 2014 je umetniška upodobitev in ne fotografija planeta.",
    "en": "The Kepler mission announced Kepler-186f in 2014. The planet is roughly Earth-sized. It orbits a red dwarf in a zone where surface liquid water could be possible. Its discovery does not establish that water or life exists there. The displayed 2014 NASA artwork is an artist's concept, not a photograph of the planet."
  },
  {
    "sr": "LIGO je 14. septembra 2015. zabeležio gravitacione talase GW150914. Signal je potekao od spajanja dve crne rupe. Detektori u Luizijani i Vašingtonu zabeležili su isti događaj. Otkriće je objavljeno u februaru 2016. Prikazani grafikon predstavlja stvarna merenja i modelovani talasni oblik iz tog događaja.",
    "sl": "LIGO je 14. septembra 2015 zaznal gravitacijske valove GW150914. Signal je nastal ob zlitju dveh črnih lukenj. Detektorja v Louisiani in Washingtonu sta zabeležila isti dogodek. Odkritje so objavili februarja 2016. Prikazani graf vsebuje dejanske meritve in modelirano obliko vala tega dogodka.",
    "en": "LIGO detected the gravitational wave event GW150914 on 14 September 2015. The signal came from two merging black holes. Detectors in Louisiana and Washington recorded the same event. The discovery was announced in February 2016. The displayed plots show measured data and modeled waveforms for that event."
  },
  {
    "sr": "Saradnja Event Horizon Telescope objavila je 10. aprila 2019. prvu sliku senke crne rupe. Meta je bila M87* u središtu galaksije Mesije 87. Podaci su prikupljeni 2017. mrežom radio-teleskopa širom sveta. Svetli prsten potiče od vrelog materijala oko tamne senke. Prikazana slika rekonstruisana je iz tih stvarnih posmatranja.",
    "sl": "Skupina Event Horizon Telescope je 10. aprila 2019 objavila prvo sliko sence črne luknje. Tarča je bila M87* v središču galaksije Messier 87. Podatke so leta 2017 zbrali z mrežo radijskih teleskopov po svetu. Svetel obroč izvira iz vroče snovi okoli temne sence. Prikazana slika je bila rekonstruirana iz teh dejanskih opazovanj.",
    "en": "The Event Horizon Telescope collaboration released the first image of a black-hole shadow on 10 April 2019. Its target was M87* at the center of Messier 87. A worldwide radio telescope network gathered the data in 2017. The bright ring comes from hot material around the dark shadow. The displayed image was reconstructed from those real observations."
  },
  {
    "sr": "Prva Vebova duboka slika u boji objavljena je 11. jula 2022. Na njoj je jato galaksija SMACS 0723. Teleskop je snimao u infracrvenom delu spektra. Gravitacija jata uvećava i deformiše slike udaljenijih galaksija. Prikazana fotografija potiče iz Vebovih posmatranja iz 2022.",
    "sl": "Prvo Webbovo barvno globoko polje je bilo objavljeno 11. julija 2022. Prikazuje jato galaksij SMACS 0723. Teleskop je opazoval v infrardečem delu spektra. Gravitacija jate poveča in popači podobe bolj oddaljenih galaksij. Prikazana slika temelji na Webbovih opazovanjih iz leta 2022.",
    "en": "Webb's first full-color deep field was released on 11 July 2022. It shows the galaxy cluster SMACS 0723. The telescope observed in infrared light. The cluster's gravity magnifies and distorts images of more distant galaxies. The displayed image comes from Webb observations in 2022."
  },
  {
    "sr": "Svemirski teleskop Džejms Veb potvrdio je 2026. galaksiju MoM-z14 spektroskopskim merenjem. Njen crveni pomak iznosi 14,44. Vidimo je onakvu kakva je bila približno 280 miliona godina posle Velikog praska. Nalaz pomera granice proučavanja ranog stvaranja galaksija. Prikazana slika zasnovana je na Vebovim podacima i označava položaj te galaksije.",
    "sl": "Vesoljski teleskop James Webb je leta 2026 s spektroskopijo potrdil galaksijo MoM-z14. Njen rdeči premik znaša 14,44. Vidimo jo približno 280 milijonov let po velikem poku. Odkritje širi možnosti raziskovanja zgodnjega nastanka galaksij. Prikazana slika temelji na Webbovih podatkih in označuje položaj te galaksije.",
    "en": "The James Webb Space Telescope spectroscopically confirmed galaxy MoM-z14 in 2026. Its redshift is 14.44. We see it as it was about 280 million years after the Big Bang. The result extends the study of very early galaxy formation. The displayed Webb image marks the location of this galaxy."
  }
];
const byKey=new Map(astronomyBaseKeys.map((key,i)=>[key,baseDetails[i]]));
for(const item of astronomyAdditions)byKey.set(item.key,item.detail);
export const astronomyDetails=astronomyKeys.map(key=>byKey.get(key));
