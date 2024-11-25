import { CountryRepo } from '../respositories/countryRepository';
import { CountryDetail } from '../respositories/schemas/countries';

export class CountryService {
  private countryRepo: CountryRepo;

  constructor(countryRepository: CountryRepo) {
    this.countryRepo = countryRepository;
  }

  async getCountryByName(country: string): Promise<CountryDetail> {
    const countryData = await this.countryRepo.getCountryByName(country);

    return countryData;
  }
}
