import { CountryDetail } from '../schemas/countries';

export interface ICountriesRepository {
  getCountryByName(country: string): Promise<CountryDetail>;
}
