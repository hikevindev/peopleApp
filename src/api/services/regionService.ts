import { RegionRepository } from '../respositories/regionRepository';
import { regionResponse } from '../respositories/schemas/region';

export class RegionService {
  private countryRepo: RegionRepository;

  constructor(regionRepository: RegionRepository) {
    this.countryRepo = regionRepository;
  }

  async getCountryByName(country: string): Promise<regionResponse> {
    const countryData = await this.countryRepo.getDataRegionByName(country);
    return countryData;
  }
}
