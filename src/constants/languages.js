export const LANGUAGES = [
  { code: "en", native: "English",    english: "English"    },
  { code: "hi", native: "हिन्दी",     english: "Hindi"      },
  { code: "mr", native: "मराठी",      english: "Marathi"    },
  { code: "ta", native: "தமிழ்",      english: "Tamil"      },
  { code: "te", native: "తెలుగు",     english: "Telugu"     },
  { code: "kn", native: "ಕನ್ನಡ",      english: "Kannada"   },
  { code: "ml", native: "മലയാളം",     english: "Malayalam"  },
  { code: "gu", native: "ગુજરાતી",    english: "Gujarati"   },
  { code: "bn", native: "বাংলা",      english: "Bengali"    },
  { code: "pa", native: "ਪੰਜਾਬੀ",    english: "Punjabi"    },
  { code: "ur", native: "اردو",       english: "Urdu"       },
  { code: "or", native: "ଓଡ଼ିଆ",     english: "Odia"       },
  { code: "ne", native: "नेपाली",     english: "Nepali"     },
  { code: "si", native: "සිංහල",      english: "Sinhala"    },
  { code: "fr", native: "Français",   english: "French"     },
  { code: "es", native: "Español",    english: "Spanish"    },
  { code: "de", native: "Deutsch",    english: "German"     },
  { code: "ar", native: "العربية",    english: "Arabic"     },
  { code: "zh", native: "中文",        english: "Chinese"    },
  { code: "ja", native: "日本語",      english: "Japanese"   },
  { code: "pt", native: "Português",  english: "Portuguese" },
  { code: "ru", native: "Русский",    english: "Russian"    },
  { code: "ko", native: "한국어",     english: "Korean"     },
  { code: "it", native: "Italiano",   english: "Italian"    },
  { code: "tr", native: "Türkçe",     english: "Turkish"    },
  { code: "th", native: "ภาษาไทย",   english: "Thai"       },
  { code: "vi", native: "Tiếng Việt", english: "Vietnamese" },
  { code: "id", native: "Indonesia",  english: "Indonesian" },
];

export const INDIAN_CODES = ["hi","mr","ta","te","kn","ml","gu","bn","pa","ur","or","ne","si"];

export const INDIAN_LANGUAGES = LANGUAGES.filter(l => INDIAN_CODES.includes(l.code));
export const GLOBAL_LANGUAGES = LANGUAGES.filter(l => !INDIAN_CODES.includes(l.code));

export function findLanguage(code) {
  return LANGUAGES.find(l => l.code === code) || LANGUAGES[0];
}
