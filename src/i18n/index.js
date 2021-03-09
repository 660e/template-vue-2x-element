import Vue from 'vue';
import I18n from 'vue-i18n';

import elementEnLocale from 'element-ui/lib/locale/lang/en.js';
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN.js';
import enLocale from './lang/en.js';
import zhLocale from './lang/zh-cn.js';

Vue.use(I18n);

function getLanguage() {
  const language = window.localStorage.getItem('language');
  return language ? language : 'zh-cn';
}

export default new I18n({
  locale: getLanguage(),
  messages: {
    'en': {
      ...elementEnLocale,
      ...enLocale
    },
    'zh-cn': {
      ...elementZhLocale,
      ...zhLocale
    }
  }
});
