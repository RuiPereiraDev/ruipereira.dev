<template>
  <Navbar/>
  <main class="main">
    <slot/>
  </main>
  <Footer/>
</template>

<style scoped lang="scss">
.main {
  height: auto;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
</style>
