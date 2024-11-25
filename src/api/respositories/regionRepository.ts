import axios from 'axios';
import { BASE_URL } from '../config/apiConfig';
import { IRegionRepository } from './types/IRegionRepository';
import { regionResponse, regionResponseSchema } from './schemas/region';

export class RegionRepository implements IRegionRepository {
  private axios = axios.create({
    baseURL: BASE_URL,
    headers: {
      [`Authorization`]: `Bearer 1680|UyABdwk3EZ9K8k0lQ2Lmwsk5fwZGVFZhIQwua5qZ`,
    },
  });

  async getDataRegionByName(region: string): Promise<regionResponse> {
    const response = await this.axios.get('/countries', {
      params: {
        continent: region,
      },
    });
    return regionResponseSchema.parse(response.data);
  }
}
