<script lang="ts" setup>
import { ref } from 'vue'
import LoginForm from './LoginForm.vue'

const modalOpen = ref(false)
const loggedIn = ref(false)
</script>

<template>
  <div class="relative h-screen bg-gray-800 overflow-hidden">
    <div class="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
      <svg
        class="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
        width="364"
        height="384"
        viewBox="0 0 364 384"
        fill="none"
      >
        <defs>
          <pattern
            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect
          width="364"
          height="384"
          fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
        />
      </svg>
    </div>
    <div class="relative pt-6 pb-16 sm:pb-24">
      <nav
        class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 mb-6"
        aria-label="Global"
      >
        <div class="flex items-center flex-1">
          <div class="flex items-center justify-between w-full md:w-auto">
            <router-link to="/">
              <span class="sr-only">The Forum</span>
              <span class="text-3xl text-white">forum</span>
            </router-link>
          </div>
        </div>
        <div @click="modalOpen = true" class="flex cursor-pointer">
          <a
            v-if="loggedIn"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
          >
            Log Out
          </a>
          <a
            v-else
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
          >
            Log in
          </a>
        </div>
      </nav>
      <slot />
    </div>
  </div>

  <teleport to="body">
    <LoginForm v-if="modalOpen" />
  </teleport>
</template>
