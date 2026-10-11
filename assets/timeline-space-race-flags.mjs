// Historical flags are local copies of the named Wikimedia Commons files.
export const raceFlagFiles={
  imperial:{file:'flags/russian-empire-1896.svg',commonsName:'Flag of Russia (1896–1918).svg'},
  us48:{file:'flags/us-48-stars.svg',commonsName:'Flag of the United States (1912-1959).svg'},
  us50:{file:'flags/us-50-stars.svg',commonsName:'Flag of the United States.svg'},
  ussrEarly:{file:'flags/ussr-1936.svg',commonsName:'Flag of the Soviet Union (1936 – 1955).svg'},
  ussr:{file:'flags/ussr-1955.svg',commonsName:'Flag of the Soviet Union (dark version).svg'},
  russia:{file:'flags/russia.svg',commonsName:'Flag of Russia.svg'},
  germanyWartime:{file:'flags/germany-1935.svg',commonsName:'Flag of Germany (1935–1945).svg'},
  china:{file:'flags/china.svg',commonsName:"Flag of the People's Republic of China.svg"},
  japan:{file:'flags/japan.svg',commonsName:'Flag of Japan.svg'},
  india:{file:'flags/india.svg',commonsName:'Flag of India.svg'},
  europe:{file:'flags/europe.svg',commonsName:'Flag of Europe.svg'},
  canada:{file:'flags/canada.svg',commonsName:'Flag of Canada.svg'}
};

export function flagsForRaceEvent(event){
  if(event.key==='1')return []; // Wan Hu is a legend; no attested national flag accompanies it.
  if(event.key==='30')return ['us50','ussr']; // Apollo–Soyuz
  if(event.key==='38')return ['us50','europe']; // Hubble: NASA and ESA
  if(event.key==='40')return ['us50','russia','europe','japan','canada']; // ISS partners
  if(event.country==='Rusko carstvo')return ['imperial'];
  if(event.country==='Nemačka 1933–1945')return ['germanyWartime'];
  const year=Number(event.year.en.match(/\b\d{4}\b/)?.[0]||0);
  if(event.country==='SAD')return [year<1960?'us48':'us50'];
  if(event.country==='SSSR / Rusija')return [year<1955?'ussrEarly':year<1992?'ussr':'russia'];
  if(event.country==='Kina')return ['china'];
  if(event.country==='Japan')return ['japan'];
  if(event.country==='Indija')return ['india'];
  if(event.country==='Evropa / ESA')return ['europe'];
  return [];
}
