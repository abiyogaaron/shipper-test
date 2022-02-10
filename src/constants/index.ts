import { EStatusErrorCode, IMenuItems } from '../type';
// a Menu List Constant
export const MENU_LIST: IMenuItems[] = [
  {
    title: 'Beranda',
    to: '/',
    icon: 'home',
  },
  {
    title: 'Driver Management',
    to: '/driver-management',
    icon: 'user circle',
  },
  {
    title: 'Pickup',
    to: '/pickup',
    icon: 'calendar alternate outline',
  },
];

// a API URL Constant
export const URL_REQUEST = {
  get_driver: `${process.env.REACT_APP_API}/api/?results=30`,
};

// a Error Msg Constant
export const ERROR_MESSAGE = {
  [EStatusErrorCode.GENERAL_ERROR]: 'Sorry, there are some technical issue right now',
  [EStatusErrorCode.NOT_FOUND]: 'Sorry, the data are not found',
  [EStatusErrorCode.RATE_LIMITER]: 'Sorry our server is busy, Please try again later',
};

export const MAX_DRIVER_PER_PAGE = 5;
