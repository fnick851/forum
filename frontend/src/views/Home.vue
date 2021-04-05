<script lang="ts" setup>
import Layout from '../components/Layout.vue'
</script>

<template>
  <Layout>
    <main class="mt-16 sm:mt-32">
      <div class="mx-auto max-w-7xl">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div
            class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
          >
            <div>
              <h1
                class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
              >
                <span class="md:block">The Spectacular</span>
                <span class="text-indigo-400 md:block">web forum</span>
              </h1>
              <p
                class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
              >
                A forum on the web for anything. It means you can post and reply
                to whatever you like.
              </p>
            </div>
          </div>
          <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
            <div
              class="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden"
            >
              <div class="px-4 py-8 sm:px-10">
                <div class="mt-1">
                  <div>
                    <router-link
                      to="/posts"
                      class="w-full inline-flex justify-center py-2 px-4 border border-indigo-200 rounded-md shadow-sm bg-indigo-200 text-sm font-medium text-gray-700 hover:bg-indigo-300"
                    >
                      Browse the forum
                    </router-link>
                  </div>
                </div>

                <div class="mt-6 relative">
                  <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div class="w-full border-t border-gray-300"></div>
                  </div>
                  <div class="relative flex justify-center text-sm">
                    <span class="px-2 bg-white text-gray-500">Or</span>
                  </div>
                </div>

                <div class="mt-6">
                  <form action="#" method="POST" class="space-y-6">
                    <div>
                      <label for="name" class="sr-only">Username</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autocomplete="name"
                        placeholder="Username"
                        required
                        class="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div>
                      <label for="password" class="sr-only">Password</label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        class="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div>
                      <label for="confirm-password" class="sr-only"
                        >Confirm password</label
                      >
                      <input
                        id="confirm-password"
                        name="confirm-password"
                        type="password"
                        placeholder="Confirm password"
                        required
                        class="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Create an account
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                class="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10"
              >
                <p class="text-xs leading-5 text-gray-500">
                  Learn more about the creator
                  <a
                    href="https://noah-song.com/"
                    target="_blank"
                    class="font-medium text-gray-900 hover:underline"
                    >here</a
                  >.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>
