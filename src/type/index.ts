import { SemanticICONS } from 'semantic-ui-react';

export enum EStatusErrorCode {
  GENERAL_ERROR = 500,
  RATE_LIMITER = 429,
  NOT_FOUND = 404,
  // assumed and many others BE error code
}

export enum SCREEN_BREAKPOINT {
  MOBILE_XSS = 375,
  MOBILE_XS = 576,
  MOBILE = 768,
  TABLET = 992,
  DESKTOP = 1200,
}

export interface IMenuItems {
  to: string;
  title: string;
  icon?: SemanticICONS;
}

export type PromiseVoid = Promise<void>;

export type THttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type TGender = 'male' | 'female';
export type TTitle = 'Mr'| 'Mrs' | 'Ms';

interface IDriverData {
  gender: TGender;
  name: {
    title: TTitle;
    first: string;
    last: string;
  },
  location: {
    street: {
      number: number;
      name: string;
    },
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    },
    timezone: {
      offset: number;
      description: string;
    }
  },
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  },
  dob:{
    date: string;
    age: number;
  },
  registered:{
    date: string;
    age: number;
  },
  phone: string;
  cell: string;
  id:{
    name: string;
    value: string | null;
  },
  picture:{
    large: string;
    medium: string;
    thumbnail: string;
  },
  nat: string;
}

export interface IDriverResponse {
  results: IDriverData[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  }
}

export type TDriverManagementData = Pick<
IDriverData,
'dob' | 'name' | 'email' | 'phone' | 'login'
>;
