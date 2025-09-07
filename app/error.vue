<script setup lang="ts">
const props = defineProps({
  error: Object
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon'},
    {rel: 'icon', href: '/favicon.ico', type: 'image/x-icon'}
  ]
})

useSeoMeta({
  title: 'Oops! - Rui Pereira',
  description: props.error?.message,
  robots: 'noindex, nofollow'
})

const handleError = () => clearError({redirect: '/'})
</script>

<template>
  <main class="main">
    <h1 class="title">{{ props.error?.message }}</h1>
    <p class="description">Oops! <a @click="handleError" href="/">Click here</a> to go back home.</p>
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  color: #c33131;
}

.description {
  padding: 8px 0;
}
</style>
