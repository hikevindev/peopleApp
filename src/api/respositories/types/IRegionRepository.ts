import { regionResponse } from '../schemas/region';

export interface IRegionRepository {
  getDataRegionByName(region: string): Promise<regionResponse>;
}
