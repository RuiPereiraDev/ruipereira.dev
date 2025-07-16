<template>
  <header class="header">
    <div class="header-inner">
      <div class="logo">
        <NuxtLink to="/">> ruipereira.dev</NuxtLink>
      </div>
      <div class="navigation">
        <NuxtLink to="/about">About</NuxtLink>
        <span class="separator">//</span>
        <NuxtLink to="/projects">Projects</NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  height: var(--header-height);
  width: 100%;

  .header-inner {
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    --link-color: var(--header-text-color);
    --link-hover-color: var(--header-text-color);
    background-color: var(--header-background-color);

    .logo {
      font-weight: bold;
      font-size: 1.125rem;
      white-space: nowrap;
    }

    .navigation {
      --link-hover-decoration: underline;

      .separator {
        margin: 0 12px;
      }
    }
  }
}
</style>
