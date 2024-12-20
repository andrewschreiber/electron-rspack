import { Hero as BaseHero } from '@rstack-dev/doc-ui/hero';
import { useI18n, useNavigate } from 'rspress/runtime';
import { useI18nUrl } from './utils';
import './Hero.module.scss';

import logoUrl from '@assets/electron-rspack-icon.svg';

export function Hero() {
  const navigate = useNavigate();
  const tUrl = useI18nUrl();
  const t = useI18n<typeof import('i18n')>();
  const handleClickGetStarted = () => {
    navigate(tUrl('/guide/start/index'));
  };
  const handleClickLearnMore = () => {
    navigate(tUrl('/guide/start/quick-start'));
  };
  return (
    <BaseHero
      showStars
      onClickGetStarted={handleClickGetStarted}
      onClickLearnMore={handleClickLearnMore}
      title="Electron-Rspack"
      subTitle={t('subtitle')}
      description={t('slogan')}
      logoUrl={logoUrl}
      getStartedButtonText={t('introduction')}
      learnMoreButtonText={t('quickStart')}
    />
  );
}
