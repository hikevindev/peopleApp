import { countrySchema } from '../api/respositories/schemas/region';

export type regionSlice = {
  asia: Array<countrySchema>;
  africa: Array<countrySchema>;
  northAmerica: Array<countrySchema>;
  southAmerica: Array<countrySchema>;
  europe: Array<countrySchema | null>;
  oceania: Array<countrySchema | null>;
};
