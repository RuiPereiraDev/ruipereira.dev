<script setup lang="ts">

</script>

<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <NuxtLink to="/">> ruipereira.dev</NuxtLink>
    </div>

    <div class="navbar-right">
      <NuxtLink to="/about">About</NuxtLink>
      <span class="separator">//</span>
      <NuxtLink to="/projects">Projects</NuxtLink>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '~/scss/mixins';

.navbar {
  width: 100vw;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  padding: 0.5rem 1rem;
  flex: 0 0 5em;

  .navbar-brand {
    font-weight: bold;
    font-size: 1.125rem;
    white-space: nowrap;
  }

  .navbar-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  a.router-link-active {
    color: var(--link-hover-color);
  }

  .separator {
    margin: 0 12px;
  }

  @include mixins.lg {
    width: 75vw;
    @include mixins.xl {
      width: 60vw;
    }
    margin: auto;
  }
}
</style>
