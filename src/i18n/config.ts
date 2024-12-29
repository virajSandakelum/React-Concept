import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from "./content/en.json";
import translationSI from "./content/si.json";
import translationTA from "./content/ta.json";

const selectedLanguage = localStorage.getItem("selected_language") || "en";

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: selectedLanguage,
        debug: true,
        resources: {
            en: {
                translations: translationEN,
            },
            si: {
                translations: translationSI,
            },
            ta: {
                translations: translationTA,
            }
        },
        ns: ['translations', 'common'],
        defaultNS: 'translations',
        interpolation: {
            escapeValue: false // Allows usage of HTML tags
        }
    });

i18n.languages = ['en', 'si', 'ta'];

export default i18n;
