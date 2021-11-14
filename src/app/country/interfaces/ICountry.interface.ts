export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  flags: Flags;
}

interface Currencies {
  PEN: Pen;
}

interface Pen {
  name: string;
  symbol: string;
}

interface Demonyms {
  eng: Eng;
  fra: Eng;
}

interface Eng {
  f: string;
  m: string;
}

interface Flags {
  svg: string;
  png: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Languages {
  aym: string;
  que: string;
  spa: string;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  aym: Translation;
  que: Translation;
  spa: Translation;
}

interface Translation {
  official: string;
  common: string;
}
