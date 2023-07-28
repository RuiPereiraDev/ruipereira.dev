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
