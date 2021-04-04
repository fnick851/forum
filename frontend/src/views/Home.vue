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
        class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div class="flex items-center flex-1">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <img
                class="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="flex">
          <a
            href="#"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
          >
            Log in
          </a>
        </div>
      </nav>

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
                  Made with Vue.js, Nest.js, and TailwindCSS, for the 💓 love 💓
                  of the stack.
                </p>
              </div>
            </div>
            <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
              <div
                class="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden"
              >
                <div class="px-4 py-8 sm:px-10">
                  <div class="mt-6 relative">
                    <div
                      class="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                      <span class="px-2 bg-white text-gray-500">Sign Up</span>
                    </div>
                  </div>

                  <div class="mt-6">
                    <form action="#" method="POST" class="space-y-6">
                      <div>
                        <label for="name" class="sr-only">Full name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autocomplete="name"
                          placeholder="Full name"
                          required
                          class="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div>
                        <label for="mobile-or-email" class="sr-only"
                          >Mobile number or email</label
                        >
                        <input
                          type="text"
                          name="mobile-or-email"
                          id="mobile-or-email"
                          autocomplete="email"
                          placeholder="Mobile number or email"
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
                          autocomplete="current-password"
                          required
                          class="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div>
                        <button
                          type="submit"
                          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Create your account
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  class="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10"
                >
                  <p class="text-xs leading-5 text-gray-500">
                    Check out the creator's
                    <a
                      href="https://noah-song.com/"
                      class="font-medium text-gray-900 hover:underline"
                      >blog</a
                    >
                    and
                    <a
                      href="https://portfolio.noah-song.com/"
                      class="font-medium text-gray-900 hover:underline"
                      >portfolio</a
                    >.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
