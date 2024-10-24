import { Announcement } from '@rstack-dev/doc-ui/announcement';
import { NavIcon } from '@rstack-dev/doc-ui/nav-icon';
import Theme from 'rspress/theme';
import { HomeLayout } from './pages';
import './index.scss';
import { NoSSR, useLang, usePageData } from 'rspress/runtime';

const ANNOUNCEMENT_URL = '/community/releases/v1-0';

const Layout = () => {
  const { page } = usePageData();
  const lang = useLang();

  return <Theme.Layout beforeNavTitle={<NavIcon />} />;
};

export default {
  ...Theme,
  Layout,
  HomeLayout,
};

export * from 'rspress/theme';
