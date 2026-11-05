const wiki='https://commons.wikimedia.org/wiki/File:';
const files=[
  ['term-iodine.jpg','Iodine_crystals.jpg','Kristali joda','Kristali joda','Iodine crystals'],
  ['term-thyroid.png','Thyroid.png','Anatomski prikaz štitne žlezde','Anatomski prikaz ščitnice','Anatomical view of the thyroid'],
  ['term-thyroxine.png','Thyroxine.svg','Hemijska struktura tiroksina','Kemijska zgradba tiroksina','Chemical structure of thyroxine'],
  ['term-pituitary.png','Pituitary_Gland.png','Položaj hipofize u mozgu','Lega hipofize v možganih','Pituitary gland in the brain'],
  ['term-tsh.png','Thyroid_hormone_synthesis.png','Šema sinteze hormona štitne žlezde','Shema sinteze ščitničnih hormonov','Diagram of thyroid hormone synthesis'],
  ['term-goiter.jpg','Struma_001.jpg','Fotografija uvećane štitne žlezde','Fotografija povečane ščitnice','Photograph of an enlarged thyroid'],
  ['term-fetus.png','Pregnant_Human_and_Fetus_in_Uterus_(NIH_BioArt_420_-_633834).svg','Prikaz ploda u materici','Prikaz ploda v maternici','Fetus in the uterus'],
  ['term-iodide.png','Potassium-iodide-3D-ionic.png','Model kristala kalijum-jodida','Model kristala kalijevega jodida','Potassium iodide crystal model'],
  ['term-iodized-salt.jpg','Iodised_salt.JPG','Pakovanje jodirane soli','Zavitek jodirane soli','A packet of iodized salt'],
  ['term-trh.png','Thyrotropin-releasing_hormone.svg','Hemijska struktura tireoliberina','Kemijska zgradba tireoliberina','Chemical structure of thyrotropin-releasing hormone']
].map(([file,page,sr,sl,en])=>({
  src:`iodine/${file}`,source:wiki+page,credit:'Wikimedia Commons · autor i licenca navedeni na stranici slike',
  caption:'Wikimedia Commons',alt:{sr,sl,en}
}));
const entry=(title,aliases,description,i)=>({title,aliases,description,image:files[i]});

export const iodineGlossary={
 sr:[
  entry('Jod',['jod','joda','jodom'],'Jod je hemijski element sa atomskim brojem 53. Štitna žlezda ga koristi za proizvodnju hormona T3 i T4. U hrani ga najčešće unosimo kao jodid, dok čist jod u laboratoriji može biti štetan pri nepravilnom rukovanju.',0),
  entry('Štitna žlezda',['štitna žlezda','štitne žlezde','štitnu žlezdu'],'Štitna žlezda je organ na prednjoj strani vrata. Njeni hormoni utiču na potrošnju energije, rast i razvoj. Za njihovu sintezu potreban je jod, a rad žlezde regulišu signali iz mozga.',1),
  entry('Tiroksin',['tiroksin','T4','T3'],'Tiroksin, označen kao T4, jedan je od glavnih hormona štitne žlezde. Njegova molekula sadrži četiri atoma joda, dok hormon T3 sadrži tri. U tkivima se deo T4 pretvara u aktivniji T3.',2),
  entry('Hipofiza',['hipofiza','hipofize'],'Hipofiza je mala žlezda ispod mozga. Ona luči TSH, signal koji podstiče štitnu žlezdu da stvara hormone. Njeno lučenje zavisi od signala hipotalamusa i nivoa hormona u krvi.',3),
  entry('TSH',['TSH','tireostimulišući hormon'],'TSH je hormon hipofize koji podstiče rad štitne žlezde. Kada tiroidnih hormona u krvi nema dovoljno, njegov nivo često raste. Lekari ga mere zajedno s drugim nalazima, jer sam broj ne objašnjava svaki uzrok poremećaja.',4),
  entry('Gušavost',['gušavost','gušavosti','gušavosti','gušavost'],'Gušavost znači uvećanje štitne žlezde. Nedostatak joda je važan mogući uzrok, ali postoje i drugi, poput zapaljenja ili čvorova. Zato se uzrok ne može utvrditi samo pogledom na vrat.',5),
  entry('Fetalni razvoj',['fetalna štitna žlezda','plod','ploda'],'Plod se razvija u materici i tokom ranog razvoja zavisi od majčinih hormona štitne žlezde. Njegova sopstvena štitna žlezda postepeno sazreva tokom trudnoće. Zato je odgovarajuća količina joda posebno važna pre trudnoće i tokom nje.',6),
  entry('Jodid',['jodid','jodida','kalijum-jodid','kalijum-jodida'],'Jodid je negativno naelektrisan oblik joda koji telo može da iskoristi. Kalijum-jodid je jedno od jedinjenja koja se koriste za obogaćivanje kuhinjske soli. On nije isto što i čist jod, i količine u soli su strogo odmerene.',7),
  entry('Jodirana so',['jodirana so','jodirane soli','jodiranu so'],'Jodirana so je obična so kojoj je dodat odmeren izvor joda. Programi njenog korišćenja smanjuju rizik od nedostatka joda u čitavim zajednicama. Ona nije razlog da se jede više soli, jer prevelik unos natrijuma i dalje šteti zdravlju.',8),
  entry('TRH',['TRH','tireoliberin'],'TRH ili tireoliberin je hormon koji luči hipotalamus. On podstiče hipofizu da oslobodi TSH, koji zatim deluje na štitnu žlezdu. Ova povratna veza pomaže telu da uskladi proizvodnju tiroidnih hormona sa potrebama.',9)
 ],
 sl:[
  entry('Jod',['jod','joda','jodom'],'Jod je kemijski element z atomskim številom 53. Ščitnica ga potrebuje za tvorbo hormonov T3 in T4. V hrani ga večinoma dobimo kot jodid; s čistim jodom v laboratoriju pa je treba ravnati previdno.',0),
  entry('Ščitnica',['ščitnica','ščitnice','ščitnico'],'Ščitnica je žleza na sprednji strani vratu. Njeni hormoni vplivajo na porabo energije, rast in razvoj. Za njihovo tvorbo je potreben jod, delovanje žleze pa uravnavajo signali iz možganov.',1),
  entry('Tiroksin',['tiroksin','T4','T3'],'Tiroksin oziroma T4 je eden glavnih ščitničnih hormonov. Njegova molekula vsebuje štiri atome joda, hormon T3 pa tri. V tkivih se del T4 pretvori v dejavnejši T3.',2),
  entry('Hipofiza',['hipofiza','hipofize'],'Hipofiza je majhna žleza pod možgani. Izloča TSH, signal za tvorbo ščitničnih hormonov. Na njeno delovanje vplivajo hipotalamus in ravni hormonov v krvi.',3),
  entry('TSH',['TSH','tirotropin'],'TSH je hormon hipofize, ki spodbuja ščitnico. Kadar ščitničnih hormonov ni dovolj, se njegova raven pogosto zviša. Zdravniki ga presojajo skupaj z drugimi izvidi, saj ena vrednost ne pove vsega.',4),
  entry('Golša',['golša','golše','golšo'],'Golša pomeni povečano ščitnico. Pomanjkanje joda je eden pomembnih možnih vzrokov, vendar so mogoči tudi drugi. Sam videz vratu zato še ne zadošča za ugotovitev vzroka.',5),
  entry('Razvoj ploda',['plod','ploda','plodova ščitnica'],'Plod se razvija v maternici in je zgodaj odvisen od materinih ščitničnih hormonov. Njegova lastna ščitnica se med nosečnostjo postopno razvija. Zato je zadosten vnos joda posebej pomemben pred nosečnostjo in med njo.',6),
  entry('Jodid',['jodid','jodida','kalijev jodid','kalijevega jodida'],'Jodid je negativno nabita oblika joda, ki jo telo lahko uporabi. Kalijev jodid je ena od snovi za obogatitev soli. Ne gre za čisti jod, dodane količine pa so skrbno odmerjene.',7),
  entry('Jodirana sol',['jodirana sol','jodirane soli'],'Jodirana sol je navadna sol z odmerjenim dodatkom joda. Njena uporaba pomaga preprečevati pomanjkanje v prebivalstvu. To ni razlog za večje uživanje soli, saj je treba vnos natrija omejevati.',8),
  entry('TRH',['TRH','tireoliberin'],'TRH ali tireoliberin je hormon hipotalamusa. Hipofizo spodbudi k izločanju TSH, ta pa nato deluje na ščitnico. Povratna zanka usklajuje tvorbo hormonov s potrebami telesa.',9)
 ],
 en:[
  entry('Iodine',['iodine','iodide in food'],'Iodine is chemical element 53. The thyroid uses it to make the hormones T3 and T4. In food it is usually present as iodide, whereas concentrated elemental iodine requires careful handling.',0),
  entry('Thyroid gland',['thyroid gland','thyroid'],'The thyroid is a gland at the front of the neck. Its hormones help regulate energy use, growth and development. Iodine is needed to make them, while signals from the brain help control the gland.',1),
  entry('Thyroxine',['thyroxine','T4','T3'],'Thyroxine, or T4, is a major thyroid hormone. Its molecule contains four iodine atoms, while T3 contains three. Some T4 is converted in body tissues into the more active T3.',2),
  entry('Pituitary gland',['pituitary gland','pituitary'],'The pituitary is a small gland beneath the brain. It releases TSH, which stimulates thyroid hormone production. Its output responds to the hypothalamus and to hormone levels in the blood.',3),
  entry('TSH',['TSH','thyroid-stimulating hormone'],'TSH is a pituitary hormone that stimulates the thyroid. Its level often rises when too little thyroid hormone circulates. Clinicians interpret it with other findings because one result alone does not identify every cause.',4),
  entry('Goiter',['goiter','goiters'],'A goiter is an enlarged thyroid gland. Iodine deficiency can cause it, but inflammation and nodules are among other possibilities. Its cause cannot be established by appearance alone.',5),
  entry('Fetal development',['fetal thyroid','fetus','fetal'],'The fetus develops in the uterus and initially relies on maternal thyroid hormones. Its own thyroid gradually matures during pregnancy. Adequate iodine before and during pregnancy therefore matters for healthy development.',6),
  entry('Iodide',['iodide','potassium iodide'],'Iodide is a negatively charged form of iodine that the body can use. Potassium iodide is one compound used to fortify salt. It is distinct from pure iodine and is added in carefully measured amounts.',7),
  entry('Iodized salt',['iodized salt','iodised salt'],'Iodized salt is ordinary salt fortified with a measured source of iodine. Population programmes use it to lower the risk of iodine deficiency. It does not justify eating more salt, since excess sodium remains harmful.',8),
  entry('TRH',['TRH','thyrotropin-releasing hormone'],'TRH is a hormone released by the hypothalamus. It stimulates the pituitary to release TSH, which then acts on the thyroid. This feedback system helps match thyroid hormone production to the body’s needs.',9)
 ]
};
