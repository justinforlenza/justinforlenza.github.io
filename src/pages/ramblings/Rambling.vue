<script setup lang="ts">
import Markdown from 'vue3-markdown-it'

import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

const route = useRoute()
const rambling = ref<Rambling>()

const getRambling = () => {
  fetch('https://api-us-east-1.graphcms.com/v2/ckw7dzak408wm01z25mfy5x76/master', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: `
      {
        rambling(where: {slug: "${route.params.slug}"}) {
          publishedAt
          title
          content
        }
      }
      `
    })
  }).then(r => r.json()).then(({ data }) => rambling.value = data.rambling)
}

onMounted(() => {
  getRambling()
})

</script>

<template>
  <h1><router-link to="/ramblings">/ramblings</router-link>/{{$route.params.slug}}.md</h1>
  <p v-if="rambling !== undefined">{{new Date(rambling.publishedAt).toLocaleString()}}</p>
  <markdown v-if="rambling !== undefined" :source="rambling.content" />
</template>