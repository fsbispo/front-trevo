import { useTranslation } from 'react-i18next';

export default function Users() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('pages.users.title')}</h1>
      <p className="text-gray-600">{t('pages.users.description')}</p>
    </div>
  );
}
