import { SemanticICONS } from 'semantic-ui-react';

export enum EStatusErrorCode {
  GENERAL_ERROR = 500,
  RATE_LIMITER = 429,
  NOT_FOUND = 404,
  // assumed and many others BE error code
}

export interface IMenuItems {
  to: string;
  title: string;
  icon?: SemanticICONS;
}
