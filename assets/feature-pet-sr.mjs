export const petSr={
  "lead": "PET ne pokazuje samo kako organ izgleda, već gde se u njemu nalazi pažljivo odabrana obeležena supstanca. U paru sa CT-om povezuje hemijsku aktivnost tkiva sa njegovom anatomijom. Put od jednog radioaktivnog atoma do medicinske slike vodi kroz nuklearnu fiziku, biologiju ćelije i računarsku obradu miliona signala.",
  "sections": [
    {
      "h": "Šta PET zapravo meri?",
      "p": [
        "Rendgenski snimak i kompjuterizovana tomografija (CT) pokazuju kako različita tkiva slabe X-zrake. Magnetna rezonanca (MR) koristi ponašanje atomskih jezgara u magnetnom polju i može prikazati izuzetno mnogo detalja o mekim tkivima. PET, skraćeno od pozitronska emisiona tomografija, polazi od drugog pitanja: gde je završio radiofarmak i koliko ga se nakupilo u pojedinim delovima tela? Zato se naziva funkcionalnim ili molekularnim oslikavanjem.",
        "Na PET snimku ne vide se pojedinačne ćelije, niti kamera neposredno posmatra njihovu unutrašnjost. Vidi se prostorna raspodela signala koju daje veliki broj molekula obeleženih radioaktivnim atomom. Ta raspodela može govoriti o potrošnji glukoze, protoku krvi ili prisustvu nekog proteina, zavisno od izabranog radiofarmaka. Rezolucija kliničkog PET-a meri se milimetrima; sitne promene, posebno uz organe koji prirodno snažno preuzimaju tragač, mogu ostati nevidljive.",
        "Tvrdnja da PET uvek nalazi bolest „pre CT-a“ bila bi pogrešna. Nekada se molekularna promena zaista uoči pre jasne promene oblika tkiva, ali to zavisi od bolesti, tragača, veličine promene i kvaliteta snimanja. CT i MR takođe mogu pružiti funkcionalne informacije kroz posebne protokole. Lekar zato bira metodu prema konkretnom kliničkom pitanju."
      ]
    },
    {
      "h": "Od ciklotrona do ćelije: zašto je FDG toliko važan?",
      "p": [
        "Mnogi radiofarmaci imaju dva dela: molekul koji učestvuje u određenom biološkom procesu ili se vezuje za cilj u tkivu, i radionuklid koji emituje pozitron. Brojni PET radionuklidi nastaju u ciklotronu, uređaju koji ubrzava naelektrisane čestice. U najčešće korišćenom tragaču, ¹⁸F-FDG, atom fluora-18 vezan je za molekul sličan glukozi. Fizičko poluvreme raspada fluora-18 iznosi približno 110 minuta: toliko je potrebno da se radioaktivnost uzorka smanji na polovinu, nezavisno od toga kako telo tragač izlučuje.",
        "FDG ulazi u mnoge ćelije kroz transportere glukoze. Enzim heksokinaza zatim mu dodaje fosfatnu grupu. Dobijeni FDG-6-fosfat mnogo teže napušta ćeliju i ne prolazi uobičajeno kroz sledeći korak glikolize. Zbog tog „metaboličkog zarobljavanja“ tkiva koja preuzimaju više FDG-a često daju jači PET signal. Ovo je korisna aproksimacija potrošnje glukoze, ali signal nije prosto broj živih ili malignih ćelija: zavisi i od dostave krvi, rada transportera, vremena snimanja i drugih faktora.",
        "Mnogi tumori imaju pojačano preuzimanje glukoze i izraženu glikolizu čak i kada kiseonika ima dovoljno. To se povezuje sa Varburgovim efektom, ali ne postoji univerzalno pravilo da svaki tumor troši „trideset puta više“ glukoze. Spororastuće promene mogu imati slab FDG signal, dok aktivne imunske ćelije u infekciji ili upali mogu svetleti veoma snažno. FDG je, dakle, dobar tragač za određene procese, a ne molekul koji prepoznaje isključivo rak."
      ]
    },
    {
      "h": "Kako pozitron postaje tačka na slici?",
      "p": [
        "Jezgro fluora-18 raspada se procesom beta-plus raspada: jedan proton pretvara se u neutron, a emituju se pozitron i neutrino. Pozitron ima istu masu kao elektron, ali suprotan naboj. Pre nego što se zaustavi u tkivu, prelazi kratku udaljenost; njen raspon zavisi od energije radionuklida i doprinosi ograničenju oštrine PET slike.",
        "Kada se usporeni pozitron sretne sa elektronom, nastaje anihilacija. Energija njihove mase uglavnom se pojavljuje kao dva gama-fotona, svaki energije 511 kiloelektronvolti. Oni lete gotovo, ali ne matematički savršeno, u suprotnim smerovima. Ta mala odstupanja, kao i put pozitrona pre anihilacije, jedan su od razloga što PET ne može da pokaže događaj s beskonačnom preciznošću.",
        "Prsten detektora oko pacijenta registruje fotone. Kada dva detektora u vrlo kratkom vremenskom prozoru zabeleže odgovarajući par, sistem beleži koincidenciju i povlači zamišljenu liniju između detektora — liniju odgovora. Jedna takva linija ne otkriva tačnu tačku anihilacije; milionima linija iz više uglova algoritam rekonstruiše trodimenzionalnu raspodelu tragača. Moderni detektori koriste sintilacione kristale koji svetlosnim bljeskom odgovaraju na gama-foton, a elektronika beleži vreme i energiju događaja.",
        "Tehnika „vremena leta“ (TOF) meri sićušnu razliku između vremena dolaska dva fotona. Ako jedan stigne malo ranije, događaj je verovatno bio bliže tom detektoru. TOF ne ukida sve neodređenosti, ali sužava deo linije duž kojeg je događaj mogao nastati i poboljšava odnos signala i šuma u rekonstruisanoj slici."
      ]
    },
    {
      "h": "Zašto PET gotovo uvek ide zajedno sa CT-om?",
      "p": [
        "PET može pokazati područje snažnog preuzimanja tragača, ali bez jasne anatomske mape nije uvek lako odrediti da li signal pripada limfnom čvoru, organu ili susednom tkivu. U hibridnom PET/CT uređaju pacijent ostaje na istom stolu i prolazi kroz CT i PET deo aparata. Softver zatim poravnava slike i prikazuje metaboličku aktivnost preko detaljne CT anatomije. CT se obično snima prvi. Tako lekar može da poveže žarište sa konkretnom strukturom, a ne samo sa približnim mestom u telu.",
        "CT radi još jedan važan posao: služi za korekciju atenuacije. Deo gama-fotona oslabi ili se raspe dok prolazi kroz tkivo, pa bi bez korekcije duboki delovi tela na PET-u delovali veštački manje aktivno. CT procenjuje kroz koja tkiva fotoni prolaze, a računar na osnovu te mape koriguje PET podatke. Pošto se CT dobija X-zracima druge energije od PET fotona, softver CT podatke mora odgovarajuće preračunati. Ako se pacijent pomeri između dva snimanja, nastaje greška poravnanja koja može stvoriti lažan utisak o mestu ili intenzitetu žarišta.",
        "CT deo pregleda može biti niskodozni, namenjen pre svega korekciji i lokalizaciji, ili dijagnostički sa većom količinom informacija, ponekad i sa kontrastnim sredstvom. To nije isto zračenje niti ista doza za svakog pacijenta. Kombinacija PET/MR postoji za odabrane indikacije i može dati izvanredan prikaz mekih tkiva, ali je dostupnost ograničenija i ne zamenjuje automatski PET/CT u svim slučajevima."
      ]
    },
    {
      "h": "Kako izgleda pregled i šta se čita na snimku?",
      "p": [
        "Priprema zavisi od radiofarmaka i pitanja na koje pregled treba da odgovori. Za čest onkološki pregled sa ¹⁸F-FDG pacijent najčešće ne jede nekoliko sati, a vodu sme da pije; tim proverava nivo glukoze, lekove, dijabetes, moguću trudnoću i druge važne okolnosti. Vežbanje prethodnog dana može pojačati potrošnju glukoze u mišićima i promeniti snimak. Kod osoba sa dijabetesom uputstva se prilagođavaju terapiji i vremenu pregleda; niko ne treba samostalno da menja insulin ili druge lekove prema opštem tekstu na internetu.",
        "Posle venske injekcije obično sledi miran period od oko 30 do 60 minuta, potreban da se tragač rasporedi. Pacijent zatim leži nepomično dok sto prolazi kroz uređaj. Samo PET snimanje često traje dvadesetak do tridesetak minuta, ali postupak može biti kraći ili duži. Uputstvo da se ne govori ili ne čita posebno je važno kod nekih snimanja mozga; za sve preglede nije propisano isto „apsolutno mirovanje“ u zamračenoj sobi. Posle pregleda osoblje daje posebna uputstva o vodi, mokrenju i kontaktu sa drugim osobama kada su potrebna.",
        "Na obojenom PET prikazu „topla“ boja označava veće nakupljanje izabranog tragača u odnosu na skalu prikaza. To nije automatski tumor. Mozak prirodno snažno koristi glukozu; srčani mišić može imati promenljivo preuzimanje; bubrezi i mokraćna bešika često svetle jer izlučuju FDG. Lekar procenjuje obrazac, intenzitet, CT sliku, ranije nalaze i kliničku priču. Broj nazvan SUV, standardizovana vrednost preuzimanja, pomaže poređenju, ali nije test „maligno ili benigno“ i zavisi od vremena snimanja i protokola."
      ]
    },
    {
      "h": "Onkologija: stadijum bolesti, odgovor na terapiju i zamke",
      "p": [
        "PET/CT je naročito koristan kada treba otkriti da li se tumor proširio na limfne čvorove ili udaljene organe, proceniti odgovor na lečenje ili razjasniti sumnju na povratak bolesti. Njegova uloga zavisi od vrste tumora. Kod brojnih FDG-avidnih limfoma PET/CT je deo standardne procene stadijuma i odgovora; u određenim situacijama koristi se i kod raka pluća. Na primer, kod Hodgkinovog limfoma nalaz posle određenog broja ciklusa terapije može pomoći lekarima da prilagode naredne korake. Za neke limfome odgovor se ocenjuje Deauvilleovom skalom, koja aktivnost žarišta poredi sa referentnim signalom medijastinalnog krvotoka i jetre.",
        "Ako se posle terapije masa na CT-u i dalje vidi, ali je njen FDG signal značajno opao, to može značiti da je metabolički aktivna bolest nestala i da je ostalo fibrozno tkivo. Obrnuto, nova svetla tačka nije dokaz recidiva: infekcija, upala posle operacije, zračenje i imunoterapija mogu menjati signal. Zato se u važnim ili nejasnim slučajevima nalaz potvrđuje drugim pregledima ili biopsijom. PET ne zamenjuje mikroskopski pregled tkiva.",
        "Metoda nije jednako dobra za svaki karcinom. Neki tumori slabo preuzimaju FDG, a mikroskopska žarišta mogu biti ispod granice detekcije. Za određene slučajeve karcinoma prostate koriste se tragači koji se vezuju za PSMA, protein često pojačano prisutan na ćelijama tog tumora. Tada pitanje nije „koliko se troši glukoza“, već „gde se nalazi ciljni protein“. PET celog tela zato nije opravdan opšti skrining zdravih ljudi: mogući su slučajni nalazi, dodatne procedure i nepotrebno izlaganje zračenju."
      ]
    },
    {
      "h": "Kardiologija: protok krvi i „uspavani“ srčani mišić",
      "p": [
        "U srcu se PET često koristi za merenje perfuzije — dotoka krvi u srčani mišić. Tragači kao što su rubidijum-82, amonijak obeležen azotom-13 i voda obeležena kiseonikom-15 omogućavaju snimke u mirovanju i pri opterećenju ili farmakološki izazvanom povećanju protoka. Poređenjem se otkrivaju delovi miokarda koji pri opterećenju ne dobijaju dovoljno krvi. Kvantitativno se može proceniti i ukupni protok, kao i rezerva protoka, što je korisno kada problem leži u sitnim krvnim sudovima, a ne samo u velikoj suženoj koronarnoj arteriji.",
        "Drugo pitanje glasi: da li je slabo pokretni deo srca posle dugotrajnog manjka krvi trajno ožiljan ili još sadrži živo, „hibernirajuće“ tkivo? Upoređuju se snimak dotoka krvi i FDG snimak metabolizma. Ako je dotok nizak, a ćelije i dalje preuzimaju FDG, deo miokarda može biti živ. Ako su oba signala niska, ožiljak je verovatniji. Nalaz može pomoći odluci o revaskularizaciji, ali ne garantuje da će se funkcija oporaviti nakon stenta ili bajpasa; važni su i stanje pacijenta, anatomija krvnih sudova i dokazi o koristi zahvata. FDG PET se koristi i u odabranim slučajevima srčane sarkoidoze, pri čemu se traže znaci aktivne upale."
      ]
    },
    {
      "h": "Neurologija: različiti tragači postavljaju različita pitanja",
      "p": [
        "FDG PET mozga prikazuje obrazac korišćenja glukoze. Kod nekih neurodegenerativnih bolesti određene regije imaju smanjenu aktivnost; nalaz može pomoći u razjašnjavanju uzroka kognitivnih tegoba zajedno sa pregledom, neuropsihološkim testovima, MR-om i drugim biomarkerima. Kod farmakorezistentne epilepsije FDG PET između napada može pokazati regiju snižene aktivnosti koja doprinosi planiranju dodatnih ispitivanja pred operaciju. Sam PET ne određuje automatski tačno mesto za operaciju i ne garantuje izlečenje.",
        "Posebni tragači mogu da se vežu za amiloidne naslage, a drugi za tau promene povezane sa Alchajmerovom bolešću. Važno je ne pomešati ih: Amyvid (florbetapir) je amiloidni tragač, a ne tragač koji istovremeno meri i tau. Pozitivan amiloidni PET pokazuje prisustvo naslaga, ali sam po sebi nije dokaz da su baš one uzrok simptoma; sličan nalaz moguć je i kod ljudi bez demencije. Zbog toga se ovakvi pregledi naručuju kada rezultat zaista može promeniti dijagnostičku ili terapijsku odluku."
      ]
    },
    {
      "h": "Doza, ograničenja i nova generacija uređaja",
      "p": [
        "PET koristi jonizujuće zračenje iz radiofarmaka, a PET/CT dodaje i dozu CT-a. Ukupna doza zavisi od tragača, ubrizgane aktivnosti, veličine pacijenta i CT protokola; zato nije pošteno navesti jednu brojku koja važi za sve. Lekari vagaju očekivanu dijagnostičku korist i rizik, prilagođavaju protokol i izbegavaju nepotrebna ponavljanja. Trudnoća, dojenje i zdravstvena stanja koja utiču na pripremu zahtevaju razgovor sa timom pre pregleda. Kratko poluvreme radioizotopa smanjuje trajanje aktivnosti, ali ne znači da zračenja nema.",
        "Konvencionalni PET prsten pokriva ograničen deo tela u jednom trenutku, pa se sto postepeno pomera. Uređaji sa dugim aksijalnim vidnim poljem, kao što je uEXPLORER, zahvataju mnogo veći deo tela odjednom i hvataju više korisnih parova fotona. Prvi radovi pokazali su da se taj dobitak može iskoristiti za bolju sliku, kraće snimanje, manju ubrizganu aktivnost ili duže praćenje tragača — ali ne sve te prednosti u punoj meri istovremeno. U eksperimentalnim protokolima dobijeni su i kvalitetni snimci uz vrlo malu aktivnost ili za približno jedan minut; to ne znači da svaki današnji klinički pregled traje minut niti da je izloženost svakog pacijenta smanjena za fiksnih 90 procenata.",
        "Istovremeno praćenje tragača kroz mnoge organe posebno je zanimljivo za istraživanje kako se lek raspoređuje i izlučuje. Paralelno se razvija teranostika: isti molekularni cilj može se iskoristiti prvo za PET prikaz, a zatim, uz drugačiji radionuklid, za ciljanu terapiju. U lečenju određenih pacijenata sa PSMA-pozitivnim karcinomom prostate to je već klinička stvarnost. Terapijsko zračenje ipak može delovati i na zdrava tkiva, pa „gađa samo tumor“ nije tačan opis.",
        "PET je najkorisniji kada se postavi jasno pitanje: gde se bolest nalazi, koliko je aktivna, kako se menja pod terapijom ili kakav je protok kroz organ? Odgovor nastaje iz zajedničkog čitanja fizičkog signala, CT ili MR anatomije, prethodnih nalaza i kliničkog konteksta. Upravo zato je ovo moćan instrument medicine — i zato jedna svetla tačka na slici nikada nije cela dijagnoza."
      ]
    }
  ]
};
