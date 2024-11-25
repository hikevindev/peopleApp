import axios from 'axios';
import { API_TOKEN, BASE_URL } from '../config/apiConfig';
import { ICountriesRepository } from './types/ICountriesRepository';
import { CountryDetail, countryDetailSchema } from './schemas/countries';

export class CountryRepo implements ICountriesRepository {
  private axios = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer 1680|UyABdwk3EZ9K8k0lQ2Lmwsk5fwZGVFZhIQwua5qZ`,
    },
  });

  async getCountryByName(country: string): Promise<CountryDetail> {
    const response = await this.axios.get(`/countries/${country}`);
    return countryDetailSchema.parse(response.data.data);
  }
}
