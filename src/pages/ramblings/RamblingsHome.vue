<script setup lang="ts">
import { ref, onMounted } from 'vue'

const graphData = ref<GraphQLRamblingResponse>()

const getRamblings = (skip: number = 0) => {
  fetch('https://api-us-east-1.graphcms.com/v2/ckw7dzak408wm01z25mfy5x76/master', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: `
      {
        ramblingsConnection(first: 3, skip:${skip}, orderBy: publishedAt_DESC) {
          aggregate{
            count
          }
          edges {
            node {
              slug
              title
              publishedAt
              snippet
            }
          }
        }
      }
      `
    })
  }).then(r => r.json()).then(({ data }) => graphData.value = data)
}

onMounted(() => {
  getRamblings()
})

</script>

<template>
  <h1>/ramblings</h1>
  <p>Here are some of my ramblings</p>
  <div v-if="graphData !== undefined">
    <router-link
      v-for="{node} in graphData.ramblingsConnection.edges"
      :to="`/ramblings/${node.slug}`"
      :key="node.slug"
      class="rambling"
    >
      <span class="title">{{node.slug}}.md</span>
      <p class="date">{{new Date(node.publishedAt).toLocaleString()}}</p>
      <p>{{node.snippet}}</p>
    </router-link>
  </div>
</template>

<style>

</style>