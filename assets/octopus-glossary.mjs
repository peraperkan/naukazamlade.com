const root='octopus-mirror-20261001/';
const c='https://commons.wikimedia.org/wiki/File:';
const image=(file,page,credit,license,alt)=>({src:root+file,source:c+page,credit,license,alt});
const pictures=[
  image('species-glossary.jpg','CaliforniaTwoSpotOctopus2.jpg','Jeremy Selan (Jeremyse)','https://commons.wikimedia.org/wiki/Commons:Public_domain','Young California two-spot octopus.'),
  image('suckers.jpg','CU_octopus_suckers_0459.jpg','Betty Wills (Atsme)','https://creativecommons.org/licenses/by-sa/4.0/','Suckers on an octopus arm.'),
  image('mirror-test.jpg','Mirror_Test_on_Octopus_vulgaris.jpg','CaptainDarwin','https://creativecommons.org/licenses/by-sa/4.0/','An octopus facing a mirror in another experiment.'),
  image('evolution-eye.svg','Evolution_eye_2.svg','Caerbannog, based on Jerry Crimson Mann','https://creativecommons.org/licenses/by-sa/3.0/','Comparison of vertebrate and octopus eyes.')
];
const entry=(title,aliases,description,picture)=>({title,aliases,description,image:pictures[picture]});
export const octopusGlossary={
  sr:[
    entry('Kalifornijska dvotačkasta hobotnica',['kalifornijske dvotačkaste hobotnice','kalifornijska dvotačkasta hobotnica','kalifornijske hobotnice'],'Octopus bimaculoides je vrsta hobotnice koja živi uz pacifičku obalu Severne Amerike. Prepoznaje se po upadljivim plavim kružnim pegama blizu očiju. Upravo tri jedinke ove vrste učestvovale su u ogledu sa ogledalom. Kao i druge hobotnice, ima osam krakova i pripada glavonošcima.',0),
    entry('Hemoreceptori',['hemoreceptori'],'Hemoreceptori su čulne ćelije koje reaguju na hemijske supstance u okolini. Na prijanjaljkama hobotničinih krakova omogućavaju joj da dodirivanjem otkriva i hemijski sastav površine. Zbog njih bi pravi rak mogao da oda svoj položaj bez ogledala. Istraživači su zato koristili projekciju raka.',1),
    entry('Test ogledala',['testu ogledala','test ogledala'],'Test ogledala proverava da li životinja koristi odraz da uoči oznaku postavljenu na sopstveno telo. Ako oznaku ispituje na sebi, to može biti dokaz jednog oblika samoprepoznavanja. Tumačenje zavisi od čula i ponašanja konkretne vrste. Ogled sa zaklonjenim rakom nije bio ovaj test i ne dokazuje samoprepoznavanje hobotnica.',2),
    entry('Konvergentna evolucija',['konvergentna evolucija'],'Konvergentna evolucija znači da udaljene evolutivne grane nezavisno razviju slične osobine pri rešavanju sličnih problema. Oči hobotnica i kičmenjaka primer su približno sličnih optičkih rešenja. Važni detalji njihove građe ipak se razlikuju. Moguće je da se i neka prostorna rešenja nezavisno razvijaju, ali to tek treba ispitati.',3)
  ],
  sl:[
    entry('Kalifornijska dvopikasta hobotnica',['kalifornijske dvopikaste hobotnice','kalifornijska dvopikasta hobotnica','kalifornijske hobotnice'],'Octopus bimaculoides živi ob pacifiški obali Severne Amerike. Prepoznamo jo po modrih okroglih lisah blizu oči. V poskusu z ogledalom so sodelovale tri živali te vrste. Tako kot druge hobotnice ima osem lovk in spada med glavonožce.',0),
    entry('Kemoreceptorji',['kemoreceptorji'],'Kemoreceptorji so čutne celice, ki zaznajo kemijske snovi v okolici. Na priseskih lovk pomagajo hobotnici zaznavati sestavo dotaknjenih površin. Pravi rak bi zato morda razkril svoj položaj tudi brez ogledala. Raziskovalci so to možnost odstranili s projekcijo raka.',1),
    entry('Zrcalni preizkus',['zrcalnem preizkusu','zrcalni preizkus'],'Zrcalni preizkus preverja, ali žival z odsevom opazi oznako na lastnem telesu. Dotik oznake na sebi lahko podpira sklep o neki obliki samoprepoznavanja. Razlaga je odvisna od čutil in vedenja posamezne vrste. Poskus s skritim rakom ni bil tak preizkus in ne dokazuje samoprepoznavanja hobotnic.',2),
    entry('Konvergentna evolucija',['konvergentna evolucija'],'Konvergentna evolucija pomeni, da oddaljene živalske skupine neodvisno razvijejo podobne lastnosti ob podobnih izzivih. Oči hobotnic in vretenčarjev so primer približno podobnih optičnih rešitev. Pomembne podrobnosti njihove zgradbe se razlikujejo. Ali so tudi nekatere prostorske spretnosti tak primer, je treba še raziskati.',3)
  ],
  en:[
    entry('California two-spot octopus',['California two-spot octopus','California two-spot octopuses'],'Octopus bimaculoides lives along the Pacific coast of North America. Blue circular marks near its eyes help identify it. Three individuals of this species took part in the mirror experiment. Like other octopuses, it has eight arms and belongs to the cephalopods.',0),
    entry('Chemoreceptors',['chemoreceptors'],'Chemoreceptors are sensory cells that respond to chemicals in their surroundings. On octopus suckers they help the animal detect the chemistry of a touched surface. A real crab might therefore reveal its position without a mirror. The researchers used a projected image to remove that alternative cue.',1),
    entry('Mirror mark test',['mirror mark test','mark test'],'A mirror mark test asks whether an animal uses its reflection to notice a mark on its own body. Touching the mark on itself may support one form of self-recognition. Interpretation depends on the species’ senses and behavior. The hidden-crab experiment was not this test and does not establish self-recognition.',2),
    entry('Convergent evolution',['convergent evolution'],'Convergent evolution occurs when distant lineages independently evolve similar traits while facing similar problems. Octopus and vertebrate eyes provide an example of broadly similar optical solutions. Important details of their anatomy still differ. Whether some spatial skills are another example remains to be tested.',3)
  ]
};
