// src/i18n.js
import { createI18n } from "vue-i18n";

// Define messages for each locale
const messages = {
  en: {
    home: "HOME",
    about: "ABOUT US",
    services: "SERVICES",
    why: "WHY US",
    team: "TEAM",
    course: "COURSE",
    repository: "REPOSITORY",
    register: "REGISTER",
  },
  khm: {
    home: "ទំព័រដើម",
    about: "អំពីយើង",
    services: "សេវាកម្ម",
    why: "ហេតុអ្វី",
    team: "ក្រុមការងារ",
    course: "វគ្គសិក្សា",
    repository: "កន្លែងផ្ទុក",
    register: "ចុះឈ្មោះ",
  },
};

// Create i18n instance with options
const i18n = createI18n({
  locale: "en", // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
});

export default i18n;
