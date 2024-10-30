import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"

import translationEn from '../locale/en/translation.json'
import translationAr from '../locale/ar/translation.json'
import translationGe from '../locale/ge/translation.json'
import translationFr from '../locale/fr/translation.json'
import translationRu from '../locale/ru/translation.json'
const resources={
    en:{
        translation:translationEn
    },
    ar:{
        translation:translationAr  
    },
    ge:{
        translation:translationGe
    },
    fr:{
        translation:translationFr
    },
    ru:{
        translation:translationRu
    }
};

i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources,
            lng:localStorage.getItem('language')||'en',
            interpolation:{
                escapeValue:false
            },
            react:{
                useSuspense:false
            }
        })
export default i18n