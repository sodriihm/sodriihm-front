<script setup lang="ts">
import Select from 'primevue/select';
import { RouterView } from 'vue-router'

</script>

<template>
  <header>
    <p>Open common</p>
    <div class="locale-changer">
      <Select v-model="$i18n.locale" :options="$i18n.availableLocales" />
    </div>
  </header>

  <RouterView />
</template>
