import { ConfigProvider, theme as antdTheme } from 'antd';
import esES from 'antd/locale/es_ES';
import enUS from 'antd/locale/en_US';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Header } from './components/organisms/Header/Header';
import { Presentation } from './components/organisms/Presentation/Presentation';
import { Projects } from './components/organisms/Projects/Projects';
import { Technologies } from './components/organisms/Technologies/Technologies';
import { AboutMe } from './components/organisms/AboutMe/AboutMe';
import { Experience } from './components/organisms/Experience/Experience';
import { AppRoutes } from './routes/AppRoutes';
import { dataProjects } from './utils/dataProjectsDefault';

const FONT_FAMILY = "'Oswald', sans-serif";

const AppContent = () => {
  return (
    <>
      <Header />

      <Presentation />

      <Projects dataProjects={dataProjects} />

      <Experience />

      <Technologies />

      <AboutMe />
    </>
  );
};

const ThemedApp = () => {
  const { i18n } = useTranslation();
  const { theme } = useTheme();

  const locale = i18n.language.startsWith('es') ? esES : enUS;
  const algorithm = theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm;

  return (
    <ConfigProvider
      locale={locale}
      theme={{
        algorithm,
        token: {
          fontFamily: FONT_FAMILY,
        },
      }}
    >
      <BrowserRouter>
        <AppRoutes home={<AppContent />} />
      </BrowserRouter>
    </ConfigProvider>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};
