<script setup lang="ts">
const route = useRoute()

const pageTitle = () => {
  const title = route.meta.title
  return title ? `${title} - Rui Pereira` : 'Rui Pereira'
}

const pageDescription = () => {
  const description = route.meta.description
  return description ? `${description}` : 'Full-Stack Developer'
}

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogImage: 'https://ruipereira.dev/assets/img/avatar.png',
  ogUrl: 'https://ruipereira.dev',
  ogType: 'website',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: 'https://ruipereira.dev/assets/img/avatar.png',
  twitterCard: 'summary'
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
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style lang="scss">
.page-leave-active {
  transition: all 0.4s;
}

.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.page-enter-active {
  animation-duration: 1s;
  animation-fill-mode: both;
  opacity: 0;
}

.page-enter-to {
  animation-name: fadeInUp;
}

@keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
