import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  type ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';

const reducers: ReducersList = { profile: profileReducer };

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>{t('PROFILE PAGE')}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
