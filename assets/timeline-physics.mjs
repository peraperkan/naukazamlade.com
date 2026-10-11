// Years refer to the discovery, experiment or publication named in each label.
// Approximate dates are marked explicitly. Source sites are credited on the page.
export const physicsEvents = [
  ['oko 250. p. n. e.','oko 250 pr. n. št.','c. 250 BCE','Arhimed objašnjava potisak u tečnosti.','Arhimed pojasni vzgon v tekočini.','Archimedes explains buoyancy in fluids.'],
  ['1543.','1543','1543','Kopernik objavljuje heliocentrični model.','Kopernik objavi heliocentrični model.','Copernicus publishes the heliocentric model.'],
  ['1609.','1609','1609','Kepler opisuje eliptične putanje planeta.','Kepler opiše eliptične tirnice planetov.','Kepler describes elliptical planetary orbits.'],
  ['1610.','1610','1610','Galilej posmatra Jupiterove mesece.','Galilej opazuje Jupitrove lune.','Galileo observes Jupiter’s moons.'],
  ['1676.','1676','1676','Remer nalazi dokaz konačne brzine svetlosti.','Rømer najde dokaz končne hitrosti svetlobe.','Rømer finds evidence that light has finite speed.'],
  ['1687.','1687','1687','Njutn objavljuje zakone kretanja i gravitacije.','Newton objavi zakone gibanja in gravitacije.','Newton publishes laws of motion and gravity.'],
  ['1800.','1800','1800','Volta pravi prvu električnu bateriju.','Volta izdela prvo električno baterijo.','Volta builds the first electric battery.'],
  ['1820.','1820','1820','Ersted povezuje struju i magnetizam.','Ørsted poveže električni tok in magnetizem.','Ørsted links current and magnetism.'],
  ['1831.','1831','1831','Faradej otkriva elektromagnetnu indukciju.','Faraday odkrije elektromagnetno indukcijo.','Faraday discovers electromagnetic induction.'],
  ['1865.','1865','1865','Maksvel objedinjuje elektricitet, magnetizam i svetlost.','Maxwell združi elektriko, magnetizem in svetlobo.','Maxwell unifies electricity, magnetism and light.'],
  ['1895.','1895','1895','Rendgen otkriva X-zrake.','Röntgen odkrije rentgenske žarke.','Röntgen discovers X-rays.'],
  ['1896.','1896','1896','Bekerel otkriva prirodnu radioaktivnost.','Becquerel odkrije naravno radioaktivnost.','Becquerel discovers natural radioactivity.'],
  ['1897.','1897','1897','Tomson identifikuje elektron.','Thomson prepozna elektron.','Thomson identifies the electron.'],
  ['1900.','1900','1900','Plank uvodi kvante energije.','Planck uvede energijske kvante.','Planck introduces energy quanta.'],
  ['1905.','1905','1905','Ajnštajn objavljuje specijalnu relativnost.','Einstein objavi posebno relativnost.','Einstein publishes special relativity.'],
  ['1911.','1911','1911','Raderford otkriva malo, gusto atomsko jezgro.','Rutherford odkrije majhno, gosto atomsko jedro.','Rutherford reveals the small, dense atomic nucleus.'],
  ['1915.','1915','1915','Ajnštajn dovršava opštu relativnost.','Einstein dokonča splošno relativnost.','Einstein completes general relativity.'],
  ['1925.','1925','1925','Hajzenberg razvija matričnu kvantnu mehaniku.','Heisenberg razvije matrično kvantno mehaniko.','Heisenberg develops matrix quantum mechanics.'],
  ['1932.','1932','1932','Čedvik otkriva neutron.','Chadwick odkrije nevtron.','Chadwick discovers the neutron.'],
  ['1942.','1942','1942','Pokrenuta prva kontrolisana nuklearna lančana reakcija.','Steče prva nadzorovana jedrska verižna reakcija.','The first controlled nuclear chain reaction runs.'],
  ['1964.','1964','1964','Predložen je mehanizam Higzovog polja.','Predlagan je mehanizem Higgsovega polja.','The Higgs field mechanism is proposed.'],
  ['1965.','1965','1965','Objavljeno otkriće kosmičkog mikrotalasnog zračenja.','Objavljeno je odkritje kozmičnega mikrovalovnega sevanja.','Cosmic microwave background discovery is published.'],
  ['1983.','1983','1983','CERN otkriva W i Z bozone.','CERN odkrije bozona W in Z.','CERN discovers the W and Z bosons.'],
  ['1995.','1995','1995','Stvoren prvi Boze–Ajnštajnov kondenzat.','Ustvarjen je prvi Bose–Einsteinov kondenzat.','The first Bose–Einstein condensate is made.'],
  ['2012.','2012','2012','CERN potvrđuje otkriće Higzovog bozona.','CERN potrdi odkritje Higgsovega bozona.','CERN confirms discovery of the Higgs boson.'],
  ['2015.','2015','2015','LIGO prvi put direktno detektuje gravitacione talase.','LIGO prvič neposredno zazna gravitacijske valove.','LIGO directly detects gravitational waves.'],
  ['2022.','2022','2022','NIF postiže fuziono paljenje laserskog cilja.','NIF doseže fuzijski vžig laserske tarče.','NIF achieves laser-target fusion ignition.'],
  ['2023.','2023','2023','Pulsari pružaju dokaz pozadinskih gravitacionih talasa.','Pulzarji ponudijo dokaz ozadja gravitacijskih valov.','Pulsars reveal evidence of a gravitational-wave background.']
].map(([srYear,slYear,enYear,sr,sl,en])=>({year:{sr:srYear,sl:slYear,en:enYear},text:{sr,sl,en}}));

export const physicsSources = [
  'MacTutor History of Mathematics', 'NASA Science', 'American Physical Society',
  'NobelPrize.org', 'CERN', 'U.S. Department of Energy', 'LIGO', 'NANOGrav'
];
