export const printingSectionsSr = [
  {
    "h": "Pravljenje dodavanjem, umesto oduzimanjem materijala",
    "p": [
      "Kada od drvenog bloka pravimo figuru, višak materijala odsecamo. Većina 3D štampača radi obrnuto: materijal dodaje samo tamo gde je potreban i gradi predmet sloj po sloj. Zato se postupak stručno zove aditivna proizvodnja. Ne postoji jedan univerzalni „3D štampač“: neki istiskuju rastopljenu plastiku, neki svetlošću očvršćavaju tečnu smolu, a neki laserom spajaju čestice praha.",
      "Svima je zajedničko da polaze od digitalnog opisa oblika. Ako je taj opis neispravan, ako su podešavanja loša ili materijal nije prikladan, čak ni skup uređaj neće automatski napraviti dobar predmet. Štampač precizno ponavlja zadate korake, ali ne zna čemu će deo služiti."
    ]
  },
  {
    "h": "Prvi korak: model koji računar razume",
    "p": [
      "Predmet se najčešće nacrta u programu za CAD, preuzme iz biblioteke modela ili dobije 3D skeniranjem. U CAD programu možemo tačno zadati mere: prečnik rupe za vijak, debljinu zida ili ugao pod kojim će stalak držati telefon. Sken pak beleži površinu postojećeg predmeta, ali dobijeni model često mora da se popravi pre štampe.",
      "Datoteka STL obično čuva geometriju površine kao mrežu sitnih trouglova. Praktična je i široko podržana, ali sama po sebi ne govori mnogo o boji, materijalu i drugim podacima. Noviji format 3MF može da prenese dodatne informacije, mada njihova upotreba zavisi od programa i štampača. Nijedna od tih datoteka još ne predstavlja gotove komande za kretanje glave: to je tek opis predmeta koji želimo.",
      "Model mora da opisuje zatvoreno telo bez rupa kroz koje bi zamišljena unutrašnjost „curila“. Zatim treba proveriti da li su tanki zidovi zaista dovoljno debeli za izabranu mašinu, da li predmet staje na radnu ploču i koji delovi će ostati bez oslonca dok nastaju."
    ]
  },
  {
    "h": "Drugi korak: digitalni model postaje niz tankih preseka",
    "p": [
      "Model se otvara u programu za sečenje modela, često nazvanom slicer. Program ga deli na veliki broj horizontalnih preseka. Za svaki presek računa gde treba napraviti spoljašnje zidove, gde unutrašnju ispunu, kojom brzinom će se glava pomerati i gde su potrebne potporne strukture. Rezultat je, kod mnogih uređaja, skup instrukcija u G-kodu.",
      "Visina sloja utiče na izgled i vreme izrade: tanji slojevi mogu bolje da prate sitne promene oblika, ali ih treba napraviti više. Podešavaju se i širina zidova, temperatura, hlađenje, brzina, kao i položaj predmeta na ploči. Uspravno i položeno štampan isti deo neće nužno biti jednako čvrst. Spoj između slojeva može biti slabija tačka, pa se predmet okreće tako da očekivano opterećenje ne razdvaja slojeve.",
      "Primer: stalak za telefon. Najpre izmerimo širinu telefona i debljinu maske, nacrtamo žleb sa malom rezervom, pa proverimo da li je oslonac stabilan. U programu za sečenje odlučimo kako da stalak položimo, koliko će zidova imati i da li neki njegov deo zahteva potporu. Odštampamo probni primerak, proverimo da li telefon zaista pristaje i tek tada menjamo model. Zato je 3D štampa naročito korisna za prototipe: iz jedne ideje brzo učimo šta u stvarnosti radi, a šta ne."
    ]
  },
  {
    "h": "Šta se događa u najčešćem kućnom štampaču?",
    "p": [
      "Kod postupka FDM/FFF — štampe taloženjem rastopljenog materijala, odnosno izradom od plastične niti — motor potiskuje tu nit, filament, kroz zagrejani deo glave. Tu materijal omekša i kroz usku mlaznicu izlazi na radnu ploču. Glava ili ploča pomeraju se po osama X, Y i Z. Mlaznica prvo iscrta putanju jednog sloja, zatim se relativni položaj po visini promeni i nastaje sledeći sloj. Plastika se hladi i vezuje za prethodni sloj.",
      "Prvi sloj je presudan. Ako je mlaznica predaleko od ploče, niti se možda neće zalepiti; ako je preblizu, materijal se može previše spljoštiti ili protok postati nepravilan. Kod nekih materijala zagrejana ploča pomaže prijanjanju i usporava neravnomerno hlađenje. Temperatura mlaznice, ploče i hlađenje biraju se prema materijalu i proizvođaču, a ne prema jednoj univerzalnoj vrednosti.",
      "Da bi predmet ostao celina, tek položena linija mora dovoljno dobro da se spoji sa susednim linijama i prethodnim slojem. Ako se nova plastika prebrzo ohladi, veza može biti slaba; ako temperatura ili protok nisu dobro podešeni, površina može postati neuredna. Zbog toga čvrstoća 3D štampanog dela nije samo osobina plastike navedena na pakovanju. Zavisi i od geometrije, smera slojeva, širine zidova i načina na koji je štampač radio.",
      "Visok prevjes, na primer ispružena ruka figurice, ne može dugo da se gradi u vazduhu. Program zato može dodati privremene potpore koje se kasnije uklanjaju. Drugi čest problem je krivljenje: ako se različiti delovi plastike hlade i skupljaju različitom brzinom, ivice predmeta mogu se odlepiti od ploče. Vidljive linije slojeva i ograničena čvrstoća između njih takođe su deo prirode ovog postupka."
    ]
  },
  {
    "h": "Smola i prah: dva druga načina da nastane isti oblik",
    "p": [
      "Kod stereolitografije (SLA) i srodnih postupaka sa digitalnom projekcijom slike (DLP) osnova je tečna fotopolimerna smola. Svetlost selektivno očvršćava određena mesta svakog sloja: laser može da iscrtava putanju, a projektor ili ekran da osvetli čitav presek. Tako mogu nastati veoma fini detalji, ali vrsta smole određuje da li će gotov deo biti krut, savitljiv ili otporan na određene uslove. Predmet posle štampe obično treba oprati od ostataka smole i dodatno očvrsnuti prema uputstvu za materijal. Neočvrsla smola traži pažljivo rukovanje i odgovarajuću zaštitu.",
      "Kod selektivnog laserskog sinterovanja (SLS) valjak ili sličan mehanizam nanosi tanak sloj polimernog praha, a laser zagreva i spaja čestice na mestima gde treba da bude predmet. Posle svakog sloja ponavlja se nanos praha. Nespojeni prah okružuje predmet i može da mu bude oslonac, pa se mnogi složeni oblici prave bez posebnih potpora kakve koristi FDM. Nakon hlađenja predmeti se vade iz praha i čiste. Sličan princip rada sa prahom postoji i za metale, ali su mašine, energija, materijali i bezbednosni zahtevi drugačiji. Nijedna od ove tri metode nije najbolja za svaki zadatak: sitni detalji, čvrstoća, cena i obrada posle štampe stalno se odmeravaju jedni prema drugima."
    ]
  },
  {
    "h": "Od čega štampati — i za šta se predmet sme koristiti?",
    "p": [
      "Za kućne uređaje čest je PLA, plastika koja se lako štampa, ali nije dobar izbor za svaki predmet koji trpi toplotu ili veliko opterećenje. PETG i ABS imaju drugačije mehaničke i temperaturne osobine, kao i drugačije zahteve pri štampi. Smole, najlon u prahu i metalne legure otvaraju druge mogućnosti, ali pripadaju različitim procesima i ne mogu se jednostavno sipati ili ubaciti u svaki uređaj. O izboru odlučuju namena, potrebna preciznost, sila koju deo trpi, uslovi rada i mogućnost bezbedne obrade.",
      "Odštampana medicinska naprava, deo automobila ili predmet koji dodiruje hranu ne postaje pouzdan samo zato što je lepo ispao. Za takve namene potrebni su odgovarajući materijali, kontrolisan proces i provera gotovog dela. U medicini se 3D štampa koristi, na primer, za određena pomagala i implantate prilagođene pacijentima; tvrdnja da se već rutinski štampaju potpuno funkcionalni ljudski organi bila bi preterivanje."
    ]
  },
  {
    "h": "Koliko je odštampan predmet zaista precizan?",
    "p": [
      "Često se mešaju dve stvari: rezolucija, odnosno najmanji korak ili detalj koji mašina može da napravi, i tačnost, odnosno koliko se stvarna mera poklapa sa zamišljenom. Štampač može praviti tanke slojeve, a ipak ostaviti otvor za šraf nešto užim nego što piše u modelu. Materijal se širi kada je topao, skuplja pri hlađenju, a mlaznica ima svoju širinu. Zato se kod delova koji treba da se spoje obično predvidi zazor i napravi probni primerak.",
      "Kvalitet se ne ocenjuje samo gledanjem gornje površine. Treba proveriti dimenzije, ravnost, stanje potpora, spoj slojeva i način na koji se deo ponaša pod opterećenjem. Za ukrasnu figuricu mala greška može biti nevažna; za deo koji drži težak predmet ista greška može biti presudna. Postupak je zato više nalik maloj proizvodnji sa kontrolom kvaliteta nego običnom štampanju dokumenta."
    ]
  },
  {
    "h": "Bezbednost u radionici i učionici",
    "p": [
      "Mlaznica i radna ploča mogu biti veoma vruće, a pokretni delovi mogu povrediti ruku ako ih dodirnemo tokom rada. Pri radu sa nekim filamentima nastaju sitne čestice i isparljive supstance, pa štampač treba koristiti u dobro provetrenom prostoru i prema uputstvu proizvođača; zatvoreno kućište i odvođenje vazduha mogu dodatno pomoći. Kod smolnih štampača treba izbegavati dodir neočvrsle smole s kožom i postupati prema uputstvima za zaštitne rukavice, pranje, očvršćavanje i odlaganje otpada. U školi je zato važno da se radi uz odgovarajući nadzor.",
      "Pravo da preuzmemo neki model ne znači automatski i pravo da ga prodajemo, menjamo ili koristimo tuđi zaštićeni dizajn. Pre deljenja i štampanja tuđih modela treba pogledati licencu i pravila koja važe za konkretnu upotrebu. To je naročito važno kada predmet treba da ima bezbednosnu funkciju ili da se koristi u javnosti."
    ]
  },
  {
    "h": "Zašto je ova tehnologija važna?",
    "p": [
      "Najveća prednost 3D štampe često nije to što će zameniti fabriku, već što nam omogućava da brzo napravimo jednu verziju, uočimo problem i nacrtamo bolju. Inženjer može proveriti kako se delovi uklapaju, učenik može držati model molekula u ruci, a lekar može koristiti model anatomije pri planiranju pojedinih postupaka. Za masovnu proizvodnju jednostavnih predmeta drugi postupci često ostaju brži i jeftiniji. Zato pitanje nije „može li ovo da se odštampa?“, nego „da li je štampa najbolji način da se napravi predmet koji će zaista raditi?“"
    ]
  }
];
