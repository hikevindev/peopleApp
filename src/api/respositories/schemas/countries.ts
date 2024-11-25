import { z } from 'zod';

export const countryDetailSchema = z.object({
  name: z.string(),
  full_name: z.string().nullable(),
  capital: z.string(),
  continent: z.string(),
  population: z.string(),
  size: z.string(),
  currency: z.string(),
  phone_code: z.string(),
  iso2: z.string(),
  iso3: z.string(),
  flag: z.string().url().optional(),
  independence_date: z.string().nullable(),
  current_president: z.string().nullable(),
  covid19: z.object({
    total_case: z.string(),
    total_deaths: z.string(),
    last_updated: z.string().datetime(),
  }),
  href: z.object({
    self: z.string().url(),
    presidents: z.string().url(),
    states: z.string().url(),
  }),
});

// Tipo derivado del esquema
export type CountryDetail = z.infer<typeof countryDetailSchema>;
