import {
  EditableProfileCard,
  fetchProfileData,
  profileReducer,
} from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  type ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { classNames } from 'shared/lib/classNames/classNames';

const reducers: ReducersList = { profile: profileReducer };

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useInitialEffect(() => {
    if (id) {
      void dispatch(fetchProfileData(id));
    }
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <EditableProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
