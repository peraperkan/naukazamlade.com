import {astronomyKeys,astronomyBaseKeys} from './timeline-astronomy.mjs';
import {astronomyAdditions} from './timeline-astronomy-additions.mjs';
const baseMedia=[
  {
    "file": "astronomy-timeline/02.jpg",
    "commonsName": "Stonehenge at Sunrise.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Stonehenge_at_Sunrise.jpg",
    "credit": "Stonehenge Stone Circle",
    "license": "CC BY 2.0",
    "alt": "Stonehenge silhouetted against a sunrise."
  },
  {
    "file": "astronomy-timeline/01.png",
    "commonsName": "Nebra sky disk.png",
    "source": "https://commons.wikimedia.org/wiki/File:Nebra_sky_disk.png",
    "credit": "Dbachmann; Theway",
    "license": "CC BY-SA 4.0",
    "alt": "Bronze Age Nebra sky disc with gold celestial symbols."
  },
  {
    "file": "astronomy-timeline/03.jpg",
    "commonsName": "Venus Tablet of Ammisaduqa.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Venus_Tablet_of_Ammisaduqa.jpg",
    "credit": "Fæ; British Museum object",
    "license": "CC BY-SA 3.0",
    "alt": "Cuneiform clay tablet preserving Babylonian records of Venus."
  },
  {
    "file": "astronomy-timeline/05.webp",
    "commonsName": "Antikythera Fragment A (Front).webp",
    "source": "https://commons.wikimedia.org/wiki/File:Antikythera_Fragment_A_(Front).webp",
    "credit": "Logg Tandy",
    "license": "CC BY 4.0",
    "alt": "Front of Fragment A of the ancient Antikythera mechanism."
  },
  {
    "file": "astronomy-timeline/04.jpg",
    "commonsName": "Dendara zodiac.JPG",
    "source": "https://commons.wikimedia.org/wiki/File:Dendara_zodiac.JPG",
    "credit": "LassiHu",
    "license": "CC BY-SA 3.0",
    "alt": "Astronomical ceiling at the Dendera temple in Egypt."
  },
  {
    "file": "astronomy-timeline/06.png",
    "commonsName": "Ptolemaic system (PSF).png",
    "source": "https://commons.wikimedia.org/wiki/File:Ptolemaic_system_(PSF).png",
    "credit": "Pearson Scott Foresman",
    "license": "Public domain",
    "alt": "Line-art diagram of the Earth-centered Ptolemaic model."
  },
  {
    "file": "astronomy-timeline/07.jpg",
    "commonsName": "1836 CE purchase, Surya siddhanta, Whish manuscript collection, Kahle-Austin Foundation, Sanskrit, Grantha script.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:1836_CE_purchase%2C_Surya_siddhanta%2C_Whish_manuscript_collection%2C_Kahle-Austin_Foundation%2C_Sanskrit%2C_Grantha_script.jpg",
    "credit": "Ms Sarah Welch",
    "license": "CC BY-SA 4.0",
    "alt": "Palm-leaf manuscript of the Sanskrit astronomical text Sūryasiddhānta."
  },
  {
    "file": "astronomy-timeline/08.jpg",
    "commonsName": "Dunhuang Star Chart BLX273 OR8210S3326R2 8.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Dunhuang_Star_Chart_BLX273_OR8210S3326R2_8.jpg",
    "credit": "International Dunhuang Project; British Library",
    "license": "CC0",
    "alt": "North polar section of the Dunhuang star chart."
  },
  {
    "file": "astronomy-timeline/09.jpg",
    "commonsName": "Al Sufi - Book of Fixed Stars - Ursa Major (The Great Bear) - Bodleian Library - Marsh 144.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Al_Sufi_-_Book_of_Fixed_Stars_-_Ursa_Major_(The_Great_Bear)_-_Bodleian_Library_-_Marsh_144.jpg",
    "credit": "Abd al-Rahman al-Sufi; Bodleian Libraries",
    "license": "Public domain",
    "alt": "Ursa Major illustration in a manuscript of al-Sufi's Book of Fixed Stars."
  },
  {
    "file": "astronomy-timeline/10.jpg",
    "commonsName": "Astrolabe of ‘Umar ibn Yusuf ibn ‘Umar al-Muzaffari MET DP170386.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Astrolabe_of_%E2%80%98Umar_ibn_Yusuf_ibn_%E2%80%98Umar_al-Muzaffari_MET_DP170386.jpg",
    "credit": "The Metropolitan Museum of Art",
    "license": "CC0",
    "alt": "Historical Islamic planispheric astrolabe."
  },
  {
    "file": "astronomy-timeline/11.jpg",
    "commonsName": "Ulugh Beg Observatory 01.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Ulugh_Beg_Observatory_01.jpg",
    "credit": "Bgag",
    "license": "CC0",
    "alt": "Modern view of Ulugh Beg's observatory in Samarkand."
  },
  {
    "file": "astronomy-timeline/12.png",
    "commonsName": "De revolutionibus 1543.png",
    "source": "https://commons.wikimedia.org/wiki/File:De_revolutionibus_1543.png",
    "credit": "Johannes Petreius edition; crop by Matthead",
    "license": "Public domain",
    "alt": "Title page of the 1543 edition of Copernicus's De revolutionibus."
  },
  {
    "file": "astronomy-timeline/13.jpg",
    "commonsName": "Tycho-supernova-xray.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Tycho-supernova-xray.jpg",
    "credit": "NASA / Chandra X-ray Observatory",
    "license": "Public domain",
    "alt": "X-ray image of the remnant of the supernova observed by Tycho Brahe in 1572."
  },
  {
    "file": "astronomy-timeline/14.svg",
    "commonsName": "Kepler laws diagram.svg",
    "source": "https://commons.wikimedia.org/wiki/File:Kepler_laws_diagram.svg",
    "credit": "Hankwang",
    "license": "CC BY 2.5",
    "alt": "Diagram of elliptical planetary orbits and equal swept areas."
  },
  {
    "file": "astronomy-timeline/15.png",
    "commonsName": "Galileo's sketches of the moon.png",
    "source": "https://commons.wikimedia.org/wiki/File:Galileo's_sketches_of_the_moon.png",
    "credit": "Galileo Galilei",
    "license": "Public domain",
    "alt": "Galileo's 1610 sketches of the Moon's surface."
  },
  {
    "file": "astronomy-timeline/16.svg",
    "commonsName": "Phases-of-Venus.svg",
    "source": "https://commons.wikimedia.org/wiki/File:Phases-of-Venus.svg",
    "credit": "Nichalp",
    "license": "Public domain",
    "alt": "Diagram showing the phases of Venus around the Sun."
  },
  {
    "file": "astronomy-timeline/17.jpg",
    "commonsName": "Huygens ring of Saturn.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Huygens_ring_of_Saturn.jpg",
    "credit": "Christiaan Huygens; Leiden University Libraries",
    "license": "Public domain",
    "alt": "Huygens's drawing and description of Saturn's ring."
  },
  {
    "file": "astronomy-timeline/18.png",
    "commonsName": "Newton's Principia title page.png",
    "source": "https://commons.wikimedia.org/wiki/File:Newton's_Principia_title_page.png",
    "credit": "Isaac Newton; 1687 edition",
    "license": "Public domain",
    "alt": "Title page of the first edition of Newton's Principia."
  },
  {
    "file": "astronomy-timeline/19.jpg",
    "commonsName": "Jaipur, India, Jantar Mantar.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Jaipur%2C_India%2C_Jantar_Mantar.jpg",
    "credit": "Vyacheslav Argenberg",
    "license": "CC BY 4.0",
    "alt": "Architectural astronomy instruments at Jantar Mantar in Jaipur."
  },
  {
    "file": "astronomy-timeline/20.jpg",
    "commonsName": "HerschelTelescope.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:HerschelTelescope.jpg",
    "credit": "Mike Young",
    "license": "Public domain",
    "alt": "Model of William Herschel's seven-foot telescope used to discover Uranus."
  },
  {
    "file": "astronomy-timeline/21.svg",
    "commonsName": "Fraunhofer lines.svg",
    "source": "https://commons.wikimedia.org/wiki/File:Fraunhofer_lines.svg",
    "credit": "Cepheiden and earlier diagram contributors",
    "license": "Public domain",
    "alt": "Diagram of dark Fraunhofer lines across the visible solar spectrum."
  },
  {
    "file": "astronomy-timeline/22.jpg",
    "commonsName": "John W Draper-The first Moon Photograph 1840.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:John_W_Draper-The_first_Moon_Photograph_1840.jpg",
    "credit": "John William Draper",
    "license": "Public domain",
    "alt": "John William Draper's 1840 daguerreotype of the Moon."
  },
  {
    "file": "astronomy-timeline/23.jpg",
    "commonsName": "Neptune Full (original).jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Neptune_Full_(original).jpg",
    "credit": "NASA/JPL",
    "license": "Public domain",
    "alt": "Voyager 2 full-disc view of Neptune with its Great Dark Spot, photographed in 1989."
  },
  {
    "file": "astronomy-timeline/24.jpg",
    "commonsName": "1851 07 28 Berkowski.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:1851_07_28_Berkowski.jpg",
    "credit": "Johann Julius Friedrich Berkowski",
    "license": "Public domain",
    "alt": "1851 daguerreotype of a total solar eclipse and the solar corona."
  },
  {
    "file": "astronomy-timeline/25.png",
    "commonsName": "Hertzsprung-russel diagram.png",
    "source": "https://commons.wikimedia.org/wiki/File:Hertzsprung-russel_diagram.png",
    "credit": "R. J. Hall",
    "license": "CC BY-SA 3.0",
    "alt": "Modern Hertzsprung–Russell diagram showing the main sequence and evolved stars."
  },
  {
    "file": "astronomy-timeline/26.png",
    "commonsName": "Leavitt 1912 figures 1&2.png",
    "source": "https://commons.wikimedia.org/wiki/File:Leavitt_1912_figures_1%262.png",
    "credit": "Henrietta Swan Leavitt; William Pickering",
    "license": "Public domain",
    "alt": "Leavitt's 1912 graphs relating Cepheid periods and brightness."
  },
  {
    "file": "astronomy-timeline/27.jpg",
    "commonsName": "1919 eclipse negative.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:1919_eclipse_negative.jpg",
    "credit": "F. W. Dyson; A. S. Eddington; C. Davidson",
    "license": "Public domain",
    "alt": "Negative of the 1919 Sobral solar-eclipse photograph used in a test of general relativity."
  },
  {
    "file": "astronomy-timeline/28.jpg",
    "commonsName": "Snapshots of the star that changed the Universe (opo1115d).jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Snapshots_of_the_star_that_changed_the_Universe_(opo1115d).jpg",
    "credit": "NASA; ESA; Z. Levay (STScI); Hubble Heritage Team",
    "license": "CC BY 4.0",
    "alt": "2011 collage including Hubble's 1923 Andromeda photographic plate marked VAR."
  },
  {
    "file": "astronomy-timeline/29.png",
    "commonsName": "Hubble's law original 1929.png",
    "source": "https://commons.wikimedia.org/wiki/File:Hubble's_law_original_1929.png",
    "credit": "Edwin Hubble",
    "license": "Public domain",
    "alt": "Original 1929 graph of galaxy distance against radial velocity."
  },
  {
    "file": "astronomy-timeline/30.jpg",
    "commonsName": "Green Banks - Jansky Antena.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Green_Banks_-_Jansky_Antena.jpg",
    "credit": "Jarek Tuszyński",
    "license": "CC BY-SA 3.0",
    "alt": "Full-size replica of Karl Jansky's early radio astronomy antenna."
  },
  {
    "file": "astronomy-timeline/31.jpg",
    "commonsName": "Green Banks - Ewen-Purcell Horn Antenna.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Green_Banks_-_Ewen-Purcell_Horn_Antenna.jpg",
    "credit": "Jarek Tuszyński",
    "license": "CC BY-SA 3.0",
    "alt": "Original Ewen–Purcell horn antenna used to detect the hydrogen 21-centimeter line."
  },
  {
    "file": "astronomy-timeline/32.jpg",
    "commonsName": "Quasar 3C 273.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Quasar_3C_273.jpg",
    "credit": "NASA; A. Martel and Hubble team; ESA",
    "license": "Public domain",
    "alt": "Later Hubble Space Telescope image of quasar 3C 273 and its jet."
  },
  {
    "file": "astronomy-timeline/33.jpg",
    "commonsName": "Bell Labs Horn Antenna Crawford Hill NJ.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Bell_Labs_Horn_Antenna_Crawford_Hill_NJ.jpg",
    "credit": "Fabioj",
    "license": "CC BY-SA 3.0",
    "alt": "Holmdel horn antenna used to discover the cosmic microwave background."
  },
  {
    "file": "astronomy-timeline/34.jpg",
    "commonsName": "Chart Showing Radio Signal of First Identified Pulsar.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Chart_Showing_Radio_Signal_of_First_Identified_Pulsar.jpg",
    "credit": "Billthom",
    "license": "CC BY-SA 4.0",
    "alt": "Photograph of the paper chart on which the first pulsar signal was recognized."
  },
  {
    "file": "astronomy-timeline/35.png",
    "commonsName": "COBE cmb fluctuations.png",
    "source": "https://commons.wikimedia.org/wiki/File:COBE_cmb_fluctuations.png",
    "credit": "NASA Goddard Space Flight Center; COBE Science Working Group",
    "license": "Public domain",
    "alt": "COBE sky map showing tiny temperature variations in the cosmic microwave background."
  },
  {
    "file": "astronomy-timeline/36.jpg",
    "commonsName": "Artist impression of the exoplanet 51 Pegasi b.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Artist_impression_of_the_exoplanet_51_Pegasi_b.jpg",
    "credit": "ESO; M. Kornmesser; Nick Risinger",
    "license": "CC BY 4.0",
    "alt": "Artist's impression of the hot Jupiter exoplanet 51 Pegasi b."
  },
  {
    "file": "astronomy-timeline/37.jpg",
    "commonsName": "The Hubble Deep Field (opo9601a1).jpg",
    "source": "https://commons.wikimedia.org/wiki/File:The_Hubble_Deep_Field_(opo9601a1).jpg",
    "credit": "Robert Williams; Hubble Deep Field Team; NASA/ESA",
    "license": "Public domain",
    "alt": "Hubble Deep Field mosaic containing hundreds of distant galaxies."
  },
  {
    "file": "astronomy-timeline/38.jpg",
    "commonsName": "Expansion of the Universe over time (opo0312d).jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Expansion_of_the_Universe_over_time_(opo0312d).jpg",
    "credit": "NASA/ESA; A. Feild (STScI)",
    "license": "Public domain",
    "alt": "Later illustration explaining how Type Ia supernovae trace cosmic expansion."
  },
  {
    "file": "astronomy-timeline/39.jpg",
    "commonsName": "Kepler186f-ArtistConcept-20140417.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Kepler186f-ArtistConcept-20140417.jpg",
    "credit": "NASA Ames; SETI Institute; JPL-Caltech",
    "license": "Public domain",
    "alt": "2014 artist's concept of Earth-sized exoplanet Kepler-186f."
  },
  {
    "file": "astronomy-timeline/40.png",
    "commonsName": "GW150914 Strain-diagrams.png",
    "source": "https://commons.wikimedia.org/wiki/File:GW150914_Strain-diagrams.png",
    "credit": "Caltech; MIT; LIGO Lab",
    "license": "CC0",
    "alt": "Plots of the first detected gravitational-wave signal at two LIGO observatories."
  },
  {
    "file": "astronomy-timeline/41.jpg",
    "commonsName": "Black hole - Messier 87.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Black_hole_-_Messier_87.jpg",
    "credit": "Event Horizon Telescope Collaboration",
    "license": "CC BY 4.0",
    "alt": "First image of the shadow of the black hole M87*, released in 2019."
  },
  {
    "file": "astronomy-timeline/42.jpg",
    "commonsName": "Webb's First Deep Field.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Webb's_First_Deep_Field.jpg",
    "credit": "NASA; ESA; CSA; STScI",
    "license": "Public domain",
    "alt": "James Webb Space Telescope's first deep-field image of galaxy cluster SMACS 0723."
  },
  {
    "file": "astronomy-timeline/43.png",
    "commonsName": "MoM-z14 in the COSMOS Legacy Field as seen by the NIRCam instrument aboard the JWST.png",
    "source": "https://commons.wikimedia.org/wiki/File:MoM-z14_in_the_COSMOS_Legacy_Field_as_seen_by_the_NIRCam_instrument_aboard_the_JWST.png",
    "credit": "NASA, ESA, CSA, STScI, Rohan Naidu (MIT); processing: Joseph DePasquale (STScI)",
    "license": "Public domain",
    "alt": "Webb image highlighting the distant galaxy MoM-z14 in the COSMOS field."
  }
];
const byKey=new Map(astronomyBaseKeys.map((key,i)=>[key,baseMedia[i]]));
for(const item of astronomyAdditions)byKey.set(item.key,item.media);
export const astronomyMedia=astronomyKeys.map(key=>byKey.get(key));
