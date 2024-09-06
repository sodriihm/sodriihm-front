import './assets/main.css'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import messageEn from './locales/en'
import messageFr from './locales/fr'

import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: messageEn,
    fr: messageFr,
  }
})

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: 'light',
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'
      }
    }
  }
});

app.mount('#app')
