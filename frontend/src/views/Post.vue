<template>
  <Layout
    ><div class="mx-auto max-w-7xl px-4 sm:px-6">
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
                >Post Title</router-link
              >
            </div>
          </li>
        </ol>
      </nav>

      <div class="bg-white p-10 rounded-lg shadow mb-5">
        <div>
          <div class="text-sm">
            <p class="font-medium text-gray-900 text-lg">Post Title</p>
          </div>
          <p class="mt-0.5 text-sm text-gray-500">Author Name</p>
        </div>
        <div class="mt-2 text-sm text-gray-700">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et
            diam cursus quis sed purus nam.
          </p>
        </div>
      </div>

      <div class="bg-gray-300 px-10 py-5 rounded-lg shadow">
        <ul class="divide-y divide-gray-700">
          <li>
            <div class="my-5">
              <p class="mt-0.5 text-sm text-gray-500">Commenter Name</p>
              <div class="mt-2 text-sm text-gray-700">
                <p>
                  1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt nunc ipsum tempor purus vitae id. Morbi in
                  vestibulum nec varius. Et diam cursus quis sed purus nam.
                  Scelerisque amet elit non sit ut tincidunt condimentum. Nisl
                  ultrices eu venenatis diam.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="my-5">
              <p class="mt-0.5 text-sm text-gray-500">Commenter Name</p>
              <div class="mt-2 text-sm text-gray-700">
                <p>
                  2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt nunc ipsum tempor purus vitae id. Morbi in
                  vestibulum nec varius. Et diam cursus quis sed purus nam.
                  Scelerisque amet elit non sit ut tincidunt condimentum. Nisl
                  ultrices eu venenatis diam.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="my-5">
              <p class="mt-0.5 text-sm text-gray-500">Commenter Name</p>
              <div class="mt-2 text-sm text-gray-700">
                <p>
                  3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt nunc ipsum tempor purus vitae id. Morbi in
                  vestibulum nec varius. Et diam cursus quis sed purus nam.
                  Scelerisque amet elit non sit ut tincidunt condimentum. Nisl
                  ultrices eu venenatis diam.
                </p>
              </div>
            </div>
          </li>
        </ul>

        <button
          type="submit"
          class="block mx-auto mt-10 mb-5 py-2 px-10 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add a comment
        </button>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from '../components/Layout.vue'
</script>
