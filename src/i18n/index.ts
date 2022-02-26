import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ko from 'locales/ko.json';
import en from 'locales/en.json';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: en,
			},
			ko: {
				translation: ko,
			},
		},
		fallbackLng: 'ko', // 기본 언어
		ns: ['translation'],
		defaultNS: 'translation',
		detection: {
			order: ['sessionStorage', 'navigator'],
		},
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
