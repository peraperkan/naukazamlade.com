import {part4GlossaryImages as p4} from './serial-astronomy-glossary-images-part4.mjs';
import {part3GlossaryImages as p3} from './serial-astronomy-glossary-images-part3.mjs';
import {astronomyPart5Glossary as p5} from './serial-astronomy-glossary-part5.mjs';
import {astronomyMedia} from './timeline-astronomy-media.mjs';
import {astronomyKeys} from './timeline-astronomy.mjs';

const reuse=image=>({...image,license:image.license||'Licenca navedena na stranici originalne datoteke'});
const timeline=key=>{const source=astronomyMedia[astronomyKeys.indexOf(key)];return {src:source.file,alt:{sr:source.alt},caption:source.alt,credit:source.credit,source:source.source,license:source.license};};
const old=title=>reuse(p5.find(entry=>entry.title===title).image);
const term=(title,aliases,description,image)=>({title,aliases,description,image:reuse(image)});

export const astronomyPart6Glossary=[
  term('Rotaciona kriva galaksije',['rotacione krive','rotacionu krivu','rotaciona kriva'],
    'Rotaciona kriva prikazuje brzinu zvezda ili gasa u zavisnosti od udaljenosti od centra galaksije. Astronomi je određuju merenjem pomeraja spektralnih linija sa različitih mesta u galaksiji. Ako brzina na rubu ostaje velika, gravitacija vidljive materije sama ne objašnjava lako rezultat. Takva merenja su jedan od važnih dokaza za tamnu materiju.',p4.andromeda),
  term('Supernova tipa Ia',['Supernove tipa Ia','Supernova tipa Ia','supernove tipa Ia'],
    'Supernova tipa Ia je termonuklearna eksplozija belog patuljka u zvezdanom sistemu. Postoji više mogućih puteva do eksplozije, uključujući prenos materije i spajanje belih patuljaka. Njihove krive sjaja nisu potpuno iste, ali se mogu kalibrisati. Zato služe za merenje velikih kosmičkih udaljenosti.',timeline('38')),
  term('Tamna energija',['tamna energija','tamnoj energiji','tamne energije'],
    'Tamna energija je naziv za nepoznatu komponentu povezanu sa ubrzanim širenjem svemira. U najjednostavnijem kosmološkom modelu opisuje se kosmološkom konstantom, koja se ne razređuje širenjem prostora. Još ne znamo da li je to svojstvo vakuuma ili znak da naš opis gravitacije treba dopuniti. Merenja supernova i kosmičkog pozadinskog zračenja ograničavaju njena moguća svojstva.',p4['hubble-law']),
  term('Kosmičko mikrotalasno pozadinsko zračenje',['Kosmičkom mikrotalasnom pozadinskom zračenju','kosmičkog mikrotalasnog pozadinskog zračenja','pozadinsko zračenje'],
    'To je svetlost oslobođena kada je rani svemir postao dovoljno hladan da se elektroni vežu za jezgra atoma. Danas je zbog širenja prostora vidimo u mikrotalasnom delu spektra. Sitne razlike u njenoj temperaturi nose tragove ranih razlika u gustini. One su pomogle da se odrede parametri kosmološkog modela.',p4.cmb),
  term('COBE',['COBE'],
    'COBE je NASA satelit lansiran 1989. da proučava kosmičko mikrotalasno pozadinsko zračenje. Izmerio je njegov gotovo savršen spektar crnog tela. Godine 1992. objavljene su i sitne temperaturne razlike između smerova na nebu. To je bio veliki korak ka preciznoj kosmologiji.',p4.cobe),
  term('Gravitacioni talasi',['gravitacionih talasa','gravitacioni talasi','gravitacionog talasa'],
    'Gravitacioni talasi su promene u zakrivljenosti prostora i vremena koje se šire brzinom svetlosti. Nastaju kada se masivna tela ubrzano kreću na nesimetričan način, naročito pri spajanju kompaktnih objekata. Dok stignu do Zemlje, veoma su slabi. LIGO je 2015. prvi put direktno registrovao talas od spajanja dve crne rupe.',timeline('40')),
  term('LIGO',['LIGO-a','LIGO'],
    'LIGO je mreža američkih opservatorija za gravitacione talase u Hanfordu i Livingstonu. Svaka koristi laserski interferometar sa dva duga vakuumska kraka. Poređenjem signala dva udaljena detektora razlikuje se kosmički talas od lokalnih smetnji. Skraćenica potiče od engleskog naziva Laser Interferometer Gravitational-Wave Observatory.',{src:'review-20261001/term-ligo.svg',alt:{sr:'Šema LIGO interferometra'},caption:'Šema LIGO interferometra',credit:'US National Science Foundation',source:'https://commons.wikimedia.org/wiki/File:LIGO_schematic_(multilang).svg',license:'Public domain'}),
  term('Neutronska zvezda',['neutronskih zvezda','neutronske zvezde','neutronska zvezda'],
    'Neutronska zvezda je veoma gust ostatak posle smrti masivne zvezde. Masa uporediva sa Sunčevom sabijena je u telo prečnika od nekoliko desetina kilometara. U dvojnom sistemu dve takve zvezde mogu spiralno da se približavaju i na kraju spoje. Takav sudar može proizvesti gravitacione talase i svetlost različitih talasnih dužina.',p4['neutron-star']),
  term('Event Horizon Telescope',['Event Horizon Telescope','EHT mrežom','EHT'],
    'Event Horizon Telescope je međunarodna mreža radio-teleskopa koji istovremeno posmatraju isti objekat. Kombinovanjem podataka postiže ugaonu rezoluciju približnu teleskopu veličine Zemlje. Godine 2019. objavio je sliku prstena svetlosti oko M87*, a 2022. sličnu sliku Sagittarius A*. Na slikama se vidi sjajna okolina i tamna senka, ne površina same crne rupe.',{src:'review-20261001/term-eht.jpg',alt:{sr:'Opservatorije mreže EHT'},caption:'Opservatorije mreže EHT',credit:'ESO/M. Kornmesser',source:'https://commons.wikimedia.org/wiki/File:Montage_of_the_Event_Horizon_Telescope_observatories_(day)_(eso2208-eht-mwf).jpg',license:'CC BY 4.0'}),
  term('Interferometrija veoma duge baze',['interferometrije sa veoma dugom bazom','VLBI'],
    'Interferometrija veoma duge baze, VLBI, spaja radio-mere sa antena razdvojenih hiljadama kilometara. Precizni atomski satovi omogućavaju da se signali kasnije usklade. Efektivna rezolucija zavisi od najvećeg rastojanja među antenama. EHT koristi ovu tehniku za posmatranje veoma malih detalja oko crnih rupa.',p4['radio-astronomy']),
  term('Crveni pomak',['crveni pomak','crvenog pomaka'],
    'Crveni pomak je pomeranje spektralnih osobina svetlosti ka većim talasnim dužinama. Kod udaljenih galaksija uglavnom nastaje zato što se prostor širi dok svetlost putuje. Iz pomaka se uz kosmološki model procenjuje koliko se prostor proširio. Zbog njega je svetlost ranih galaksija danas često u infracrvenom delu spektra.',p4.redshift),
  term('L2 Lagranžova tačka',['L2 Lagranžove tačke','L2 tačke','L2'],
    'L2 je oblast na oko 1,5 miliona kilometara od Zemlje, na strani suprotnoj od Sunca. Tu se Sunčevo i Zemljino gravitaciono delovanje u pokretnom sistemu mogu iskoristiti za stabilno osmatranje. Teleskop Veb ne miruje u samoj tački, već leti po širokoj halo orbiti oko nje. Takav položaj olakšava zaštitu instrumenta od Sunčeve toplote.',p3['lagrange-points']),
  term('Tranzitna spektroskopija',['transmisione spektroskopije','tranzitu planete','tranzitna spektroskopija'],
    'Kada planeta prođe ispred svoje zvezde, deo zvezdine svetlosti prolazi kroz njenu atmosferu. Gasovi upijaju određene talasne dužine, pa astronomi porede spektar tokom tranzita sa spektrom van tranzita. Signal je veoma slab i može ga ometati aktivnost same zvezde. Zbog toga identifikacija molekula zahteva ponovljena merenja i pažljivu analizu.',old('Tranzitna metoda')),
  term('Infracrveno zračenje',['infracrveno zračenje','infracrveni deo spektra','infracrvenom spektru'],
    'Infracrveno zračenje je elektromagnetna svetlost talasnih dužina dužih od crvene vidljive svetlosti. Ljudi je ne vide očima, ali je mere odgovarajući detektori. Vebov teleskop je projektovan da posmatra upravo u tom području. To mu pomaže da vidi udaljene galaksije čija je svetlost rastegnuta širenjem svemira.',old('Infracrveno zračenje'))
];
