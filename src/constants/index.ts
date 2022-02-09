import { EStatusErrorCode, IMenuItems } from '../type';

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

export const URL_REQUEST = {
  get_driver: 'https://randomuser.me/api/?results=30',
};

export const ERROR_MESSAGE = {
  [EStatusErrorCode.GENERAL_ERROR]: 'Sorry, there are some technical issue right now',
  [EStatusErrorCode.NOT_FOUND]: 'Sorry, the data are not found',
  [EStatusErrorCode.RATE_LIMITER]: 'Sorry our server is busy, Please try again later',
};

export const MAX_DRIVER_PER_PAGE = 5;
