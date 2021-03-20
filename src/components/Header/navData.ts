import {
  CONTRIBUTE_LINK,
  DISCORD_INVITE_LINK,
  GITHUB_LINK,
} from '../../constants';
import { data } from '../../data';

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Templates',
    children: Object.keys(data).map((category) => ({
      label: data[category].name,
      subLabel: data[category].subLabel,
      href: `/${category}/${Object.keys(data[category].children)[0]}`,
    })),
  },
  {
    label: 'Contribute',
    href: CONTRIBUTE_LINK,
  },
  {
    label: 'GitHub',
    href: GITHUB_LINK,
  },
  {
    label: 'Discord',
    href: DISCORD_INVITE_LINK,
  },
];
