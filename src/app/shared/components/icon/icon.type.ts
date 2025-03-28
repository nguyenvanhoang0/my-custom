import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faUser,
  faCog,
  faSignOutAlt,
  faTrash,
  faEdit,
  faPlus,
  faSearch,
  faCheck,
  faTimes,
  faBell,
  faEnvelope,
  faHeart,
  faStar,
  faShoppingCart,
  faTag,
  faArrowDown,
  faChevronRight,
  faCopy,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
export type IconName =
  | 'home'
  | 'user'
  | 'settings'
  | 'logout'
  | 'delete'
  | 'edit'
  | 'add'
  | 'search'
  | 'check'
  | 'close'
  | 'bell'
  | 'mail'
  | 'heart'
  | 'star'
  | 'cart'
  | 'tag'
  | 'arrowDown'
  | 'copy'
  | 'chevronRight'
  | 'bars';

export const ICONS: Record<IconName, IconDefinition> = {
  home: faHome,
  user: faUser,
  settings: faCog,
  logout: faSignOutAlt,
  delete: faTrash,
  edit: faEdit,
  add: faPlus,
  search: faSearch,
  check: faCheck,
  close: faTimes,
  bell: faBell,
  mail: faEnvelope,
  heart: faHeart,
  star: faStar,
  cart: faShoppingCart,
  tag: faTag,
  arrowDown: faArrowDown,
  chevronRight: faChevronRight,
  copy: faCopy,
  bars: faBars,
};
