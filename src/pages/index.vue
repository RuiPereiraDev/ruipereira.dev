<script setup lang="ts">
import { RiGithubLine, RiAtLine, RiInstagramLine, RiSteamLine, RiDiscordLine } from "@remixicon/vue";
</script>

<template>
  <main class="main">
    <NuxtImg src="/assets/img/avatar.svg" width="138" height="138"/>

    <h1 class="title">Hi, I'm <strong>Rui Pereira</strong></h1>
    <p class="description">Full-Stack Developer</p>

    <div class="icons">
      <a href="https://github.com/r4g3baby" target="_blank" aria-label="GitHub" data-wenk="GitHub">
        <RiGithubLine/>
      </a>
      <a href="mailto:me@ruipereira.dev" aria-label="Email" data-wenk="Email">
        <RiAtLine/>
      </a>
      <a href="https://instagram.com/ruipereira.dev" target="_blank" aria-label="Instagram" data-wenk="Instagram">
        <RiInstagramLine/>
      </a>
      <a href="https://steamcommunity.com/id/r4g3baby" target="_blank" aria-label="Steam" data-wenk="Steam">
        <RiSteamLine/>
      </a>
      <a href="https://discord.gg/cJnzTDGphE" target="_blank" aria-label="Discord" data-wenk="Discord">
        <RiDiscordLine/>
      </a>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: var(--header-height);

  img {
    margin: 0 0 10px;
    border: 3px solid #c33131;
    border-radius: 50%;
    height: 138px;
    width: auto;
  }

  .title {
    margin: 0;

    strong {
      color: #c33131;
    }
  }

  .description {
    margin: 6px 0 6px;
  }

  .icons {
    a {
      margin: 0 6px;
      font-size: 1.75rem;

      svg {
        vertical-align: middle;
        height: 1.75rem;
        width: 1.75rem;

        fill: #efefef;

        &:hover {
          fill: #c33131;
        }
      }
    }
  }
}
</style>
