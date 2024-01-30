import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';

interface AboutPageProps {
  className?: string;
}

const AboutPage = memo(({ className }: AboutPageProps) => {
  const { t } = useTranslation();
  return (
    <Page className={classNames('', {}, [className])}>{t('About Page')}</Page>
  );
});

AboutPage.displayName = 'AboutPage';
export default AboutPage;
