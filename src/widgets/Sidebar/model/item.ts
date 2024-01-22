import AboutIcon from 'shared/assets/icons/about.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.FC<React.SVGAttributes<SVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  { path: RoutePath.main, text: 'Main', Icon: MainIcon },
  { path: RoutePath.about, text: 'About', Icon: AboutIcon },
  {
    path: RoutePath.profile,
    text: 'Profile',
    Icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    text: 'Articles',
    Icon: ArticleIcon,
    authOnly: true,
  },
];
