const summaries={
  'gravitacioni-talasi-od-ajnstajna-do-lise':{
    sr:'Ajnštajn je predvideo gravitacione talase u okviru opšte teorije relativnosti. Prvi snažan posredni dokaz došao je iz praćenja pulsara u dvojnom sistemu. LIGO je 2015. prvi put direktno izmerio talase nastale spajanjem crnih rupa. Buduća misija LISA trebalo bi da prati sporije talase pomoću lasera između tri letelice.',
    sl:'Einstein je gravitacijske valove napovedal v splošni teoriji relativnosti. Prvi močan posredni dokaz je prineslo opazovanje pulzarja v dvojnem sistemu. LIGO je leta 2015 prvič neposredno izmeril valove ob združitvi črnih lukenj. Prihodnja odprava LISA naj bi počasnejše valove merila z laserji med tremi plovili.',
    en:'Einstein predicted gravitational waves within general relativity. Monitoring a pulsar in a binary system gave the first strong indirect evidence. In 2015, LIGO directly detected waves from merging black holes for the first time. The planned LISA mission will use lasers between three spacecraft to study slower waves.'
  },
  'prve-egzoplanete-kako-otkrivamo-druge-svetove':{
    sr:'Prve potvrđene planete izvan Sunčevog sistema otkrivene su 1992. oko pulsara. Planeta 51 Pegasi b, otkrivena 1995, bila je prva potvrđena oko zvezde slične Suncu. Pomeranje zvezdinih spektralnih linija otkriva njenu radijalnu brzinu, a tranzit planete pokazuje njen poluprečnik. Spektar svetlosti tokom tranzita može dati tragove o sastavu atmosfere, ali ne i neposredan dokaz života.',
    sl:'Prve potrjene planete zunaj Osončja so leta 1992 odkrili ob pulzarju. Planet 51 Pegasi b, odkrit leta 1995, je bil prvi potrjeni ob Soncu podobni zvezdi. Premik spektralnih črt razkriva radialno hitrost zvezde, prehod planeta pa omogoča oceno njegovega polmera. Spekter svetlobe med prehodom lahko pokaže sledi plinov v atmosferi, ne dokazuje pa življenja.',
    en:'The first confirmed planets beyond the Solar System were found around a pulsar in 1992. Discovered in 1995, 51 Pegasi b was the first confirmed planet around a Sun-like star. Shifts in a star’s spectral lines reveal its radial velocity, while a transit helps estimate a planet’s radius. The light spectrum during a transit can reveal atmospheric gases, but it cannot by itself prove life.'
  },
  'prve-slike-crnih-rupa':{
    sr:'Crna rupa sama ne svetli, ali vreli gas oko nje može da zrači. Mreža radio-teleskopa EHT spojila je merenja udaljenih opservatorija u virtualni teleskop veličine Zemlje. Prva slika senke crne rupe M87* objavljena je 2019, a slika Sagittarius A* 2022. Svetli prsten pokazuje zračenje okoline, dok je tamno središte senka povezana sa savijanjem svetlosti i horizontom događaja.',
    sl:'Črna luknja sama ne sveti, vroč plin okoli nje pa lahko seva. Mreža radijskih teleskopov EHT je združila meritve oddaljenih observatorijev v navidezni teleskop velikosti Zemlje. Prva slika sence črne luknje M87* je izšla leta 2019, slika Sagittarius A* pa leta 2022. Svetel obroč prikazuje sevanje okolice, temno središče pa senco, povezano z ukrivljanjem svetlobe in dogodkovnim obzorjem.',
    en:'A black hole does not emit light, but hot gas around it can radiate. The EHT combined measurements from distant radio observatories into a virtual Earth-sized telescope. The first image of the M87* black-hole shadow appeared in 2019, followed by Sagittarius A* in 2022. The bright ring shows radiation from the surroundings, while the dark centre is a shadow shaped by light bending and the event horizon.'
  },
  'sta-smo-nasledili-od-neandertalaca':{
    sr:'Savremeni ljudi i neandertalci dele mnogo DNK zato što potiču od zajedničkih predaka. Pored toga, genomi mnogih današnjih ljudi nose varijante nasleđene mešanjem populacija pre više desetina hiljada godina. Izdvajanje drevne DNK zahteva zaštitu fosilnih uzoraka od savremene kontaminacije. Neke nasleđene varijante povezane su sa osobinama ili rizicima od bolesti, ali njihov uticaj zavisi od mnogo drugih gena i okruženja.',
    sl:'Sodobni ljudje in neandertalci si delimo veliko DNK zaradi skupnih prednikov. Genomi mnogih današnjih ljudi vsebujejo tudi različice, podedovane po mešanju populacij pred več deset tisoč leti. Pri pridobivanju starodavne DNK morajo raziskovalci fosilne vzorce zaščititi pred sodobno kontaminacijo. Nekatere podedovane različice so povezane z lastnostmi ali tveganji za bolezni, njihov vpliv pa je odvisen od številnih drugih genov in okolja.',
    en:'Modern humans and Neanderthals share much DNA because they had common ancestors. Many people today also carry variants inherited through interbreeding tens of thousands of years ago. Extracting ancient DNA requires careful protection of fossil samples against modern contamination. Some inherited variants are associated with traits or disease risks, but their effects depend on many other genes and the environment.'
  }
};

export function polishReviewFeatures(features){
  for(const feature of features){
    for(const lang of ['sr','sl','en'])feature.translations[lang].remember=summaries[feature.id][lang];
  }
  const waves=features.find(feature=>feature.id==='gravitacioni-talasi-od-ajnstajna-do-lise');
  const headings={sr:'Kako nastaje kosmički signal?',sl:'Kako nastane vesoljski signal?',en:'How does a cosmic signal form?'};
  for(const lang of ['sr','sl','en']){
    const sections=waves.translations[lang].sections;
    sections.splice(1,0,{h:headings[lang],p:sections[0].p.splice(2)});
  }
  for(const inline of waves.media.inlines)if(inline.afterSection>=1)inline.afterSection++;
}
