import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3';
import { createI18n } from 'vue-i18n';

import messageEn from '../src/locale/en'
import messageFr from '../src/locale/fr'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

setup((app) => {
  const i18n = createI18n({
    locale: 'en',
    messages: {
      en: messageEn,
      fr: messageFr,
    }
  })

  app.use(i18n);
});

export default preview
