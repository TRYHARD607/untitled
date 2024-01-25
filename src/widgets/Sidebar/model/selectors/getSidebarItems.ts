import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import AboutIcon from 'shared/assets/icons/about.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { type SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
  const sidebarItemsList: SidebarItemType[] = [
    { path: RoutePath.main, text: 'Main', Icon: MainIcon },
    { path: RoutePath.about, text: 'About', Icon: AboutIcon },
  ];

  if (authData) {
    sidebarItemsList.push(
      {
        path: RoutePath.profile + authData?.id,
        text: 'Profile',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        text: 'Articles',
        Icon: ArticleIcon,
        authOnly: true,
      }
    );
  }
  return sidebarItemsList;
});
