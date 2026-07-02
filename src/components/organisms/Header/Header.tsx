import { Layout, Button, theme as antdTheme } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { ArrowLeft, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ImageAtom } from '@/components/atoms/Image/Image';
import { useTheme } from '@/context/ThemeContext';
import { ensureLanguageBundle } from '@/i18n';
import { ButtonLanguage, ButtonTheme } from './Header.styled';
import styles from './Header.module.css';

import LogoImg from '@/assets/favicon/android-chrome-192x192.png';
import { useLocation, useNavigate } from 'react-router-dom';

const { Header: HeaderAntd } = Layout;

export const Header = () => {
  const { token } = antdTheme.useToken();
  const { i18n, t } = useTranslation();

  const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isDarkMode = theme === 'dark';
  const isEnglish = i18n.language.startsWith('en');
  const shouldShowBackButton = pathname !== '/';

  const toggleLanguage = async () => {
    const nextLanguage = isEnglish ? 'es' : 'en';
    await ensureLanguageBundle(nextLanguage);
    await i18n.changeLanguage(nextLanguage);
  };

  return (
    <HeaderAntd className={styles.header}>
      <ImageAtom src={LogoImg} alt="Logo" className={styles.imageAtom} />

      <div className={styles.containerHeader}>
        <ButtonLanguage
          icon={<Languages className={styles.languageIcon} />}
          onClick={toggleLanguage}
          type="text"
          $token={token}
          aria-label={t('header.changeLanguage')}
        >
          {isEnglish ? 'EN' : 'ES'}
        </ButtonLanguage>

        <ButtonTheme
          icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
          onClick={toggleTheme}
          type="text"
          $token={token}
          aria-label={isDarkMode ? t('header.switchThemeToLight') : t('header.switchThemeToDark')}
        />

        {shouldShowBackButton && (
          <Button
            key="back"
            className={styles.buttonBack}
            onClick={() => navigate('/')}
            icon={<ArrowLeft className={styles.iconBack} />}
          />
        )}
      </div>
    </HeaderAntd>
  );
};
