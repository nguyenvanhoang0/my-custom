// import { IconNameTypes } from '../../shared/components/icon/icon.types';

export const MAIN_ROUTES: IRoute[] = [
  {
    route: 'me',
    icon: 'user',
    title: 'MY_PROFILE',
  },
  {
    title: 'TODO',
    icon: 'calendar',
    route: 'todo',
  },
  {
    title: 'core',
    icon: 'tags',
    route: '/core',
    children: [
      {
        title: 'guard ',
        icon: 'tag',
        route: '/core/guard',
      },
      {
        title: 'input ',
        icon: 'tag',
        route: 'components/input-component',
      },
      {
        title: 'count down',
        icon: 'clock-circle',
        route: 'components/count-down',
      },
      {
        title: 'Calendar',
        icon: 'calendar',
        route: 'components/calendar',
      },
      {
        title: 'select',
        icon: 'tag',
        route: 'components/select',
      },
    ],
  },
  {
    title: 'Directives',
    icon: 'tags',
    route: 'directives',
    children: [
      {
        title: 'Button directive',
        icon: 'tag',
        route: 'directives/button-directive',
      },
    ],
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
