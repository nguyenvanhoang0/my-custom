// import { IconNameTypes } from '../../shared/components/icon/icon.types';

import { IconName } from '../../shared/components/icon/icon.type';

export const MAIN_ROUTES: IRoute[] = [
  {
    title: 'Core',
    icon: 'home',
    route: '/core',
    children: [
      {
        title: 'Guard ',
        icon: 'tag',
        route: '/core/guard',
        children: [
          {
            title: 'interceptors ',
            icon: 'tag',
            route: '/core/interceptors',
            children: [
              {
                title: 'interceptorssâsa',
                icon: 'tag',
                route: '/core/interceptors',
              },
            ],
          },
        ],
      },
      {
        title: 'Interceptors ',
        icon: 'tag',
        route: '/core/interceptors',
      },
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
      {
        title: 'Interceptors ',
        icon: 'tag',
        route: '/core/interceptors',
      },
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
      {
        title: 'Interceptors ',
        icon: 'tag',
        route: '/core/interceptors',
      },
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
      {
        title: 'Interceptors ',
        icon: 'tag',
        route: '/core/interceptors',
      },
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
      {
        title: 'Interceptors ',
        icon: 'tag',
        route: '/core/interceptors',
      },
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
    title: 'Components',
    icon: 'bell',
    route: 'components',
    children: [
      {
        title: 'components overview',
        icon: 'tag',
        route: '/components/overview',
      },
    ],
  },
];

export type IRoute = {
  route?: string;
  title: string;
  icon?: IconName;
  children?: IRoute[];
  level?: number;
  opened?: boolean;
  activated?: boolean;
};
