import { commonsImages } from './commons-media.mjs';

export const L=(sr,sl,en)=>({sr,sl,en});
export const S=items=>items.map(([h,...p])=>({h,p}));

export function photo(file,alt,caption){
  const original=commonsImages[file];
  if(!original) throw new Error(`Missing Wikimedia Commons image metadata: ${file}`);
  return {...original,alt,caption};
}

export function feature({id,category,rubrics,hero,images,source,translations,read=9,readByLang=null,tags=[]}){
  const first=photo(...hero);
  return {id,category,rubrics,image:`commons-${id}`,kind:'evergreen',date:null,source,translations,read,readByLang,level:'medium',tags,
    media:{hero:first.src,credit:first.credit,source:first.source,license:first.license,alt:first.alt,caption:first.caption,
      inlines:images.map(([file,alt,caption,afterSection])=>({...photo(file,alt,caption),afterSection}))}};
}
