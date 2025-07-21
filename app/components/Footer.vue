<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    &copy;&nbsp;2018 - {{ year }} Rui Pereira
  </footer>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  flex: 0 0 4em;
  align-items: center;
  justify-content: center;
}
</style>
