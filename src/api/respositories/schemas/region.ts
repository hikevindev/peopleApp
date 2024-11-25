import { z } from 'zod';

const covid19Schema = z.object({
  total_case: z.string(),
  total_deaths: z.string(),
  last_updated: z.string().datetime(),
});

const presidentSchema = z.object({
  name: z.string(),
  gender: z.string(),
  appointment_start_date: z.string().datetime(),
  appointment_end_date: z.string().nullable(),
  description: z.string().nullable(),
  picture: z.string().url(),
  href: z.object({
    self: z.string().url(),
    country: z.string().url(),
  }),
});

const linksSchema = z.object({
  first: z.string().url(),
  last: z.string().url(),
  next: z.string().url().nullable(),
  prev: z.string().url().nullable(),
});

const metaSchema = z.object({
  current_page: z.number(),
  from: z.number(),
  last_page: z.number(),
  path: z.string().url(),
  per_page: z.number(),
  to: z.number(),
  total: z.number(),
});

const hrefSchema = z.object({
  self: z.string().url(),
  presidents: z.string().url(),
  states: z.string().url(),
});

const countrySchema = z.object({
  name: z.string(),
  full_name: z.string(),
  capital: z.string(),
  continent: z.string(),
  iso2: z.string().length(2),
  iso3: z.string().length(3),
  phone_code: z.string(),
  currency: z.string(),
  population: z.string(),
  size: z.string(),
  flag: z.string().url(),
  independence_date: z.string().nullable(),
  covid19: covid19Schema,
  current_president: presidentSchema,
  href: hrefSchema,
});

export const regionResponseSchema = z.object({
  data: z.any(),
  links: linksSchema,
  meta: metaSchema,
});

export type regionResponse = z.infer<typeof regionResponseSchema>;
