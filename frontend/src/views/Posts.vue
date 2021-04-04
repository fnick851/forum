<template>
  <Layout>
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <nav class="flex mb-5" aria-label="Breadcrumb">
        <ol class="bg-white rounded-md shadow px-6 flex space-x-4">
          <li class="flex">
            <div class="flex items-center">
              <router-link to="/" class="text-gray-400 hover:text-gray-500">
                <!-- Heroicon name: solid/home -->
                <svg
                  class="flex-shrink-0 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  />
                </svg>
                <span class="sr-only">Home</span>
              </router-link>
            </div>
          </li>
          <li class="flex">
            <div class="flex items-center">
              <svg
                class="flex-shrink-0 w-6 h-full text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <router-link
                to="/posts"
                class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >All Posts</router-link
              >
            </div>
          </li>
        </ol>
      </nav>

      <div class="bg-white px-4 py-5 sm:px-6 rounded-lg shadow">
        <div class="flex space-x-3">
          <div class="min-w-0 flex-1">
            <router-link to="/posts/1">
              <p class="text-sm font-medium text-gray-900">Post Title</p>
              <p class="text-sm text-gray-500">by <span>Post Author</span></p>
            </router-link>
          </div>
          <div class="flex-shrink-0 self-center flex">
            <div class="relative z-30 inline-block text-left">
              <div>
                <button
                  type="button"
                  class="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600"
                  id="menu-1"
                  aria-expanded="false"
                  aria-haspopup="true"
                  @click="isMenuOpen = !isMenuOpen"
                >
                  <span class="sr-only">Open options</span>
                  <!-- Heroicon name: solid/dots-vertical -->
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                    />
                  </svg>
                </button>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <div
                  class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-1"
                  v-if="isMenuOpen"
                >
                  <div role="none">
                    <a
                      href="#"
                      class="flex px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
                      role="menuitem"
                    >
                      <!-- Heroicon name: solid/document-remove -->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-3 h-5 w-5 text-red-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span>Delete the post</span>
                    </a>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts" setup>
import { ref } from '@vue/reactivity'
import Layout from '../components/Layout.vue'

const isMenuOpen = ref(false)
</script>
