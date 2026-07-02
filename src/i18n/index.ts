import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { translations } from './translations'

const resources = {
    en: { translation: translations.en },
    es: { translation: translations.es },
}

export const ensureLanguageBundle = async (language: string): Promise<void> => {
    if (!i18n.hasResourceBundle(language, 'translation')) {
        const bundle = language === 'en' ? translations.en : translations.es
        i18n.addResourceBundle(language, 'translation', bundle)
    }
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
