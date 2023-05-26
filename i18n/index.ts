import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

import en from './en.json';
import ptbr from './pt-BR.json';
import es from './es.json';

const Lng = new I18n({
    "en-US": en,
    "pt-BR": ptbr,
    "es": es
});

Lng.enableFallback = true;

Lng.locale = Localization.locale;

Lng.defaultLocale = "en-US"

export default Lng;