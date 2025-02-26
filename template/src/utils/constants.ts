import { COUNTRY } from './interface';

export const BASE_URL = '';
export const API_VERSION = 'v1';
export const API_URL = `${BASE_URL}/${API_VERSION}/`;

export const COUNTRIES: COUNTRY[] = [
  {
    name: 'Azerbaijan',
    cc: 'az',
    language: 'Azerbaijani',
    countryCode: '+1',
    nameCode: 'AZ',
    flagUrl: 'https://flagcdn.com/w320/az.png',
    label: 'Azerbaijan',
    value: 'Azerbaijan',
  },
  {
    name: 'United Arab Emirate',
    label: 'United Arab Emirate',
    value: 'United Arab Emirate',
    language: 'Arabic',
    countryCode: '+1',
    nameCode: 'UAE',
    cc: 'ae',
    flagUrl: 'https://flagcdn.com/w320/ae.png',
  },
  {
    name: 'Qatar',
    value: 'Qatar',
    label: 'Qatar',
    countryCode: '+44',
    language: 'Arabic',
    nameCode: 'QA',
    cc: 'qa',
    flagUrl: 'https://flagcdn.com/w320/qa.png',
  },
  {
    name: 'Kazakhstan',
    label: 'Kazakhstan',
    value: 'Kazakhstan',
    language: 'Kazakhstani',
    countryCode: '+61',
    nameCode: 'KZ',
    cc: 'kz',
    flagUrl: 'https://flagcdn.com/w320/kz.png',
  },
  {
    name: 'Bahrain',
    value: 'Bahrain',
    label: 'Bahrain',
    language: 'Arabic',
    countryCode: '+91',
    nameCode: 'BH',
    cc: 'bh',
    flagUrl: 'https://flagcdn.com/w320/bh.png',
  },
  {
    name: 'Uzbekistan',
    label: 'Uzbekistan',
    value: 'Uzbekistan',
    language: 'Arabic',
    countryCode: '+92',
    nameCode: 'UZ',
    cc: 'uz',
    flagUrl: 'https://flagcdn.com/w320/uz.png',
  },
];

export const LANGUAGES = [
  {
    langCode: 'az',
    name: 'Azerbaijani',
    flagUrl: 'https://flagcdn.com/w320/az.png',
  }
];
