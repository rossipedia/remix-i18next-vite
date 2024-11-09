import type { MetaFunction } from '@remix-run/node';
import { useTranslation } from 'react-i18next';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const { t } = useTranslation();
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Welcome to Remix</h1>
      <p>{t('greeting')}</p>
    </div>
  );
}
