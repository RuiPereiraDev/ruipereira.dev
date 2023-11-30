<script setup lang="ts">
definePageMeta({
  title: 'About'
})
</script>

<template>
  <main class="main">
    <div class="about">
      <h1>About</h1>
      <div class="desc">
        <NuxtImg src="/assets/img/avatar.svg" width="138" height="138"/>
        <div>Hello there! I'm Rui Pereira, a passionate Full-Stack Developer with a flair for crafting digital wonders. Born on November 20, 1999, I have always been captivated by the art of programming, which I embarked on at a remarkably young age. My initial curiosity was sparked by the fascination of exploring Minecraft servers, and before long, I was immersed in the world of coding, igniting a lifelong passion for software development.</div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;

  .about {
    width: 760px;
    max-width: 100%;
    padding: 6% 16px 0;

    h1 {
      text-align: left;
      border-bottom: 1px;
      border-bottom-style: solid;
      border-bottom-color: white;
    }

    .desc {
      display: flex;
      flex-direction: row;
      padding: 10px;

      img {
        border: 3px solid #c33131;
        border-radius: 50%;
        height: 138px;
        width: auto;

        margin-right: 10px;
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    p {
      text-align: left;
      font-size: 1.25rem;
      line-height: 1.30rem;
      padding: 8px;
    }
  }
}
</style>
