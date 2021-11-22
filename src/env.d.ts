/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue3-markdown-it';

interface GraphQLRamblingResponse {
  ramblingsConnection: {
    aggregate: {
      count: number
    }
    edges: Array<{
      node: Rambling
    }>
    pageInfo: {
      startCursor: string
      endCursor: string
    }
  }
}

interface Rambling {
  slug: string
  title: string
  publishedAt: string
  snippet: string
  content: string
}