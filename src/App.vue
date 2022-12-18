<script setup lang="ts">

</script>

<template>
  <nav>
    <span>justin_forlenza</span>
    <div class="nav-links">
      <router-link to="/home">/home</router-link>
      <router-link to="/projects">/projects</router-link>
      <router-link to="/ramblings">/ramblings</router-link>
    </div>
  </nav>
  <main>
    <router-view />
  </main>
  <footer>
    <div>
      <a rel="me" href="https://universeodon.com/@justinf" target="_blank">Mastodon</a>
    </div>
    <div>
      <a href="https://twitter.com/JustinForNYC" target="_blank">Twitter</a>
    </div>
    <div>
      <a href="https://github.com/justinforlenza" target="_blank">GitHub</a>
    </div>
  </footer>
</template>
