import { CurrencyAPI } from './currency-api';
import { LanguageAPI } from './language-api';
import { TranslationAPI } from './translation-api';
import { RegionalBlockAPI } from './regional-block-api';

export class CountryAPI {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    currencies: CurrencyAPI[];
    languages: LanguageAPI[];
    translations: TranslationAPI;
    flag: string;
    regionalBlocks: RegionalBlockAPI[];
    cioc: string;    
}