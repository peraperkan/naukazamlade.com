// A distinct, contextual image for each physics milestone. See the linked file pages for rights.
const commons = (file, name, credit, license, alt) => ({
  file:`timeline/${file}`,
  commonsName:name,
  source:`https://commons.wikimedia.org/wiki/File:${encodeURIComponent(name)}`,
  credit,
  license,
  alt
});

export const physicsMedia = [
  commons('archimedes.svg','Auftrieb_Archimedes_1.svg','Werneuchen','Public domain','Diagram of buoyant force on an immersed object'),
  commons('copernicus-1543.png','De_revolutionibus_1543.png','Johannes Petreius / Matthead','Public domain','Title page of Copernicus’s 1543 book'),
  commons('kepler-1609.jpg','Kepler_astronomia_nova.jpg','Johannes Kepler','Public domain','Page from Kepler’s Astronomia nova'),
  {file:'commons/galileo-telescope-full.jpg',source:'https://commons.wikimedia.org/wiki/File:Galileo_galilei,_telescopi_del_1609-10_ca..JPG',credit:'Sailko',license:'CC BY-SA 3.0',alt:'Galileo’s early telescopes'},
  commons('romer-1676.jpg',"Illustration_from_1676_article_on_Ole_Rømer's_measurement_of_the_speed_of_light.jpg",'Ole Rømer','Public domain','Contemporary diagram of Rømer’s light-speed measurement'),
  commons('newton-1687.jpg',"Newton's_Principia.jpg",'Isaac Newton','Public domain','Title page of Newton’s Principia'),
  commons('volta-1800.png','Voltaic_pile_battery.png','Adolphe Ganot','Public domain','Historical drawing of a voltaic pile'),
  commons('oersted-1820.png','Oersted_experiment.png','A. Privat-Deschanel','Public domain','Diagram of Ørsted’s compass experiment'),
  commons('faraday-1831.svg','Faraday_emf_experiment.svg','InverseHypercube','CC0','Diagram of Faraday’s induction experiment'),
  commons('maxwell-1865.jpg','James_Clerk_Maxwell_gravure.jpg','Engraving after a photograph by Fergus','CC0','Portrait of James Clerk Maxwell'),
  commons('roentgen-1895.jpg',"First_medical_X-ray_by_Wilhelm_Röntgen_of_his_wife_Anna_Bertha_Ludwig's_hand_-_18951222.jpg",'Wilhelm Röntgen','Public domain','Early X-ray image of a hand'),
  commons('becquerel-1896.jpg','Becquerel_plate.jpg','Henri Becquerel','Public domain','Becquerel’s photographic plate'),
  commons('thomson-1897.png','JJ_Thomson_Cathode_Ray_Tube_1.png','J. J. Thomson','Public domain','Diagram of a cathode-ray tube'),
  commons('planck-1900.svg','Blackbody_radiation.svg','Maxmath12','CC0','Modern blackbody radiation diagram'),
  {file:'commons/einstein-portrait.png',source:'https://commons.wikimedia.org/wiki/File:Albert_Einstein_by_Mishkin,_1921.png',credit:'Herman Mishkin',license:'Public domain',alt:'Albert Einstein in a 1921 portrait'},
  commons('rutherford-1911.svg','Rutherford_gold_foil_experiment_results.svg','Fastfission','Public domain','Diagram of the gold-foil scattering experiment'),
  commons('einstein-1915.jpg','GeneralRelativityTheoryManuscript.jpg','Albert Einstein','Public domain','Manuscript on general relativity'),
  commons('heisenberg-1925.jpg','Portrait_of_Werner_Heisenberg.jpg','American Institute of Physics','Free use with attribution','Werner Heisenberg in a 1927 portrait'),
  commons('chadwick-1932.png','Chadwick_Neutron_Discovery.png','Bdushaw','CC BY-SA 4.0','Diagram of Chadwick’s neutron experiment'),
  commons('chicago-pile-1942.jpg','Stagg_Field_reactor.jpg','U.S. Department of Energy','Public domain','Illustration of Chicago Pile-1'),
  commons('higgs-1964.png','Mecanismo_de_Higgs_PH.png','Gonis','CC BY-SA 3.0','Modern diagram of a Higgs-field potential'),
  commons('cmb-1965.jpeg','Horn_Antenna-in_Holmdel,_New_Jersey.jpeg','NASA','Public domain','Holmdel horn antenna used in the CMB discovery'),
  commons('wz-1983.jpg','UA2_UA1_press_conference,_25_January_1983.jpg','CERN','CC BY 4.0','1983 CERN press conference on the W boson'),
  commons('bec-1995.png','Bose_Einstein_condensate.png','NIST / JILA / University of Colorado Boulder','Public domain','Images showing formation of a Bose–Einstein condensate'),
  commons('higgs-2012.png','CMS-PHO-EVENTS-2012-007-1.png','CMS Collaboration / CERN','CC BY 4.0','2012 Higgs-boson candidate event display'),
  commons('ligo-2015.png','GW150914_Strain-diagrams_whitebg.png','Caltech / MIT / LIGO Lab','CC0','LIGO detector signals from GW150914'),
  commons('nif-2022.jpg','NIF_implosion_converging_beams.jpg','Lawrence Livermore National Laboratory','Public domain','Diagram of laser beams converging on a fusion target'),
  {file:'timeline/nanograv-2023.jpg',downloadUrl:'https://nanograv.org/sites/default/files/2023-06/NANOGrav_PTA_GWB_15yr_wide.jpg',source:'https://nanograv.org/press/image-gallery',credit:'Aurore Simonnet / NANOGrav',license:'Used with attribution',alt:'Artist’s view of pulsars and gravitational waves'}
];
