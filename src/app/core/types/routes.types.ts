// import { IconNameTypes } from '../../shared/components/icon/icon.types';

export const MAIN_ROUTES: IRoute[] = [
  {
    title: 'Core',
    icon: 'tags',
    route: '/core',
    children: [
      {
        title: 'Guard ',
        icon: 'tag',
        route: '/core/guard',
      },
      {
        title: 'Interceptors ',
        icon: 'tag',
        route: '/core/interceptors',
      },
    ],
  },
  {
    title: 'todo',
    icon: 'calendar',
    route: 'todo',
  },
];

export type IRoute = {
  route?: string;
  title: string;
  icon?: string;
  children?: IRoute[];
  level?: number;
  opened?: boolean;
  activated?: boolean;
};
