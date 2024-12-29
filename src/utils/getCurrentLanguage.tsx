import i18n from 'i18next';


export const getCurrentLanguage = () => {
    return i18n.language ||
        (typeof window !== 'undefined' && window.localStorage.i18nextLng) || 'en';
};

export const languageConvert = (language: string) => {
    if (language === "en") {
        return "English";
    } else if (language === "si") {
        return "Sinhala";
    } else if (language === "ta") {
        return "Tamil";
    }
}
