import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'shared/ui/Page/Page';

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  const { t } = useTranslation('main');

  return (
    <Page className={classNames('', {}, [className])}>{t('Main page')}</Page>
  );
};

export default MainPage;
