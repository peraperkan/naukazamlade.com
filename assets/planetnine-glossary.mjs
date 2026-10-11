const t=(sr,sl,en)=>({sr,sl,en});
const photo=(src,credit,source,license,alt)=>({src,credit:`${credit} · ${license}`,source,alt:t(...alt)});

const concepts=[
  {
    title:t('IRAS','IRAS','IRAS'),
    aliases:t(['IRAS'],['IRAS'],['IRAS']),
    description:t(
      'IRAS je skraćenica za Infrared Astronomical Satellite, prvi svemirski teleskop koji je sistematski pregledao skoro celo nebo u infracrvenom svetlu. Radio je 1983. godine. Detektori su mu bili hlađeni da sopstvena toplota ne prikrije slabe signale. U ovom istraživanju njegove stare kataloške položaje porede sa kasnijim podacima.',
      'IRAS je kratica za Infrared Astronomical Satellite, vesoljski teleskop, ki je leta 1983 v infrardeči svetlobi pregledal skoraj vse nebo. Detektorji so bili ohlajeni, da lastna toplota ne bi preglasila šibkih signalov. Njegov katalog hrani položaje zaznanih virov. V tej raziskavi jih primerjajo s poznejšimi podatki.',
      'IRAS stands for Infrared Astronomical Satellite. In 1983 it surveyed almost the whole sky in infrared light. Its detectors were cooled so that their own heat would not drown out faint signals. This study compares positions in its catalogue with a later survey.'),
    image:photo('serial-astronomy/glossary-part5/part5-58.jpg','NASA/JPL-Caltech','https://commons.wikimedia.org/wiki/File:IRAS_testing.jpg','public domain',['Satelit IRAS tokom testiranja','Satelit IRAS med preizkušanjem','IRAS satellite during testing'])
  },
  {
    title:t('AKARI','AKARI','AKARI'),
    aliases:t(['AKARI','AKARI-ja'],['AKARI'],['AKARI']),
    description:t(
      'AKARI je japanski svemirski teleskop za infracrveno posmatranje neba, lansiran 2006. godine. Njegovo ime na japanskom znači svetlost. Snimio je pregled neba više od dve decenije posle IRAS-a. Poređenje dve epohe može pokazati da li se izvor pomerio, ali podudaranje tek treba potvrditi.',
      'AKARI je japonski vesoljski teleskop za infrardeče opazovanje neba, izstreljen leta 2006. Njegovo ime v japonščini pomeni svetloba. Nebo je pregledal več kot dve desetletji po IRAS-u. Primerjava obeh obdobij lahko razkrije premik vira, vendar je treba povezavo še potrditi.',
      'AKARI was a Japanese infrared space telescope launched in 2006. Its name means “light” in Japanese. It surveyed the sky more than two decades after IRAS. Comparing the surveys can reveal an apparent move, although the proposed match still needs confirmation.'),
    image:photo('planet-nine/akari-glossary-web.jpg','ISAS/JAXA; original illustration by NEC','https://commons.wikimedia.org/wiki/File:ASTRO-F_%27AKARI%27_illust.jpg','CC BY 4.0; resized for web',['Umetnička ilustracija teleskopa AKARI','Umetniška ilustracija teleskopa AKARI','Illustration of the AKARI telescope'])
  },
  {
    title:t('Infracrveno zračenje','Infrardeče sevanje','Infrared radiation'),
    aliases:t(['infracrvene','infracrvenog','infracrvenom','infracrveni','infracrveno'],['infrardečih','infrardeče','infrardeča'],['infrared']),
    description:t(
      'Infracrveno zračenje je elektromagnetno zračenje talasnih dužina većih od vidljive crvene svetlosti. Oko ga ne vidi, ali instrumenti mogu da mere njegovu energiju. I hladna tela i prašina mogu se u njemu istaći drugačije nego na običnoj fotografiji. Signal ipak zavisi od temperature, veličine i udaljenosti izvora.',
      'Infrardeče sevanje je elektromagnetno sevanje z daljšimi valovnimi dolžinami od vidne rdeče svetlobe. Oko ga ne vidi, instrumenti pa lahko izmerijo njegovo energijo. Hladna telesa in prah se lahko v njem pokažejo drugače kot na običajni fotografiji. Signal je odvisen od temperature, velikosti in oddaljenosti vira.',
      'Infrared radiation has longer wavelengths than visible red light. Human eyes cannot see it, but suitable instruments can measure it. Cool objects and dust can stand out differently in infrared than in ordinary photographs. The signal still depends on an object’s temperature, size and distance.'),
    image:photo('serial-astronomy/glossary-part3/infrared.png','Wikimedia Commons','https://commons.wikimedia.org/wiki/File:Ir_girl.png','CC BY-SA 3.0',['Infracrvena slika osobe','Infrardeča slika osebe','Infrared image of a person'])
  },
  {
    title:t('Astronomska jedinica (AJ)','Astronomska enota (AE)','Astronomical unit (au)'),
    aliases:t(['astronomskih jedinica','astronomska jedinica','AJ'],['astronomske enote','astronomska enota','AE'],['astronomical unit','au']),
    description:t(
      'Astronomska jedinica je mera dužine jednaka približno srednjem rastojanju Zemlje od Sunca. Njena dogovorena vrednost je tačno 149.597.870.700 metara. Korisna je za poređenje rastojanja u Sunčevom sistemu bez nizova velikih brojeva. U ovom tekstu 500 AJ znači oko 500 puta više od tog osnovnog rastojanja.',
      'Astronomska enota je dolžinska mera, približno enaka povprečni razdalji med Zemljo in Soncem. Njena dogovorjena vrednost je natanko 149.597.870.700 metrov. Z njo lažje primerjamo razdalje v Osončju. Petsto takih enot pomeni približno petstokratno osnovno razdaljo.',
      'An astronomical unit is a unit of length close to the average Earth–Sun distance. Its defined value is exactly 149,597,870,700 metres. It is convenient for comparing Solar System distances without unwieldy numbers. A distance of 500 au is about 500 times that baseline.'),
    image:photo('planet-nine/astronomska-jedinica.svg','Maxmath12','https://commons.wikimedia.org/wiki/File:Astronomical_unit_diagram.svg','CC0; unchanged',['Dijagram rastojanja Zemlje od Sunca od jedne astronomske jedinice','Diagram razdalje ene astronomske enote med Zemljo in Soncem','Diagram of one astronomical unit between Earth and Sun'])
  },
  {
    title:t('Paralaksa','Paralaksa','Parallax'),
    aliases:t(['paralaksa','paralaksu'],['paralaksa','paralakso'],['parallax']),
    description:t(
      'Paralaksa je prividni pomak objekta u odnosu na dalju pozadinu kada se promeni položaj posmatrača. Možete je uočiti ako naizmenično zatvorite jedno pa drugo oko i gledate blizak predmet. U astronomiji Zemljino kretanje menja pravac gledanja udaljenog tela tokom meseci. Zato deo pomaka ne mora poticati od kruženja samog tela oko Sunca.',
      'Paralaksa je navidezni premik objekta glede na oddaljeno ozadje, ko opazovalec spremeni položaj. Poskusite izmenično zapreti levo in desno oko med pogledom na bližnji predmet. V astronomiji Zemljino gibanje skozi mesece spremeni smer pogleda na oddaljeno telo. Del opaženega premika zato ne izvira iz njegovega lastnega kroženja.',
      'Parallax is an apparent shift against a distant background when an observer changes position. You can see a small version by closing one eye and then the other while looking at a nearby object. Earth’s motion changes our viewing direction over months. Some apparent movement therefore comes from the observer rather than the distant body’s own orbit.'),
    image:photo('serial-astronomy/glossary-part3/parallax.png','JustinWick','https://commons.wikimedia.org/wiki/File:Parallax_Example.png','CC BY-SA 3.0',['Dijagram prividnog pomaka usled paralakse','Diagram navideznega premika zaradi paralakse','Diagram of apparent shift due to parallax'])
  }
];

export const planetNineGlossary = Object.fromEntries(['sr','sl','en'].map(lang=>[lang,concepts.map(c=>({title:c.title[lang],aliases:c.aliases[lang],description:c.description[lang],image:c.image}))]));
