import { IMenuItems } from '../interface';

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

export enum SCREEN_BREAKPOINT {
  MOBILE_XSS = 375,
  MOBILE_XS = 576,
  MOBILE = 768,
  TABLET = 992,
  DESKTOP = 1200,
}
