<script lang="ts" setup>
import Modal from './Modal.vue'
</script>

<template>
  <Modal
    ><form action="#" method="POST" class="space-y-6">
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
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Log In
        </button>
      </div>
    </form></Modal
  >
</template>
