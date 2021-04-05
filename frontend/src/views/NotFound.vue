<script lang="ts" setup>
import Layout from '../components/Layout.vue'
</script>

<template>
  <Layout>
    <div class="px-4 sm:px-6 mx-auto max-w-7xl">
      <div class="bg-gray-200 overflow-hidden rounded-lg mt-20">
        <div class="p-5 sm:py-20 text-center text-indigo-900">
          <h1 class="text-9xl">404</h1>
          <h2 class="text-5xl">Nothing to see here.</h2>
          <router-link
            to="/"
            class="mt-20 underline inline-flex itemns-center hover:text-indigo-600"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 inline-block mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              /></svg
            >Home</router-link
          >
        </div>
      </div>
    </div>
  </Layout>
</template>
