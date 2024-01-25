import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';

import { getProfileData } from '../getProfileData/getProfileData';

export const getCanEdit = createSelector(
  [getUserAuthData, getProfileData],
  (authData, profile) => {
    if (authData && profile) {
      return authData?.id === profile?.id;
    }
    return false;
  }
);
