<script setup></script>

<template>
  <div class="bg-white shadow dark:bg-gray-900 py-20">
    <div class="w-2/5 bg-white shadow dark:bg-gray-800 p-10 mx-auto">
      <form class="w-full">
        <div class="mb-5">
          <label
            for="username-success"
            class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
            >Your Username</label
          >
          <input
            type="text"
            id="username-success"
            class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="Bonnie Green"
          />
          <p class="mt-2 text-sm text-green-600 dark:text-green-500">
            <span class="font-medium">Alright!</span> Username available!
          </p>
        </div>
        <div class="mb-5">
          <label
            for="username-error"
            class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
            >Your Email</label
          >
          <input
            type="text"
            id="username-error"
            class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
            placeholder="Bonnie Green"
          />
          <p class="mt-2 text-sm text-red-600 dark:text-red-500">
            <span class="font-medium">Oops!</span> Username already taken!
          </p>
        </div>
        <div class="mb-5">
          <label
            for="username-error"
            class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
            >Password</label
          >
          <input
            type="text"
            id="username-error"
            class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
            placeholder="Bonnie Green"
          />
          <p class="mt-2 text-sm text-red-600 dark:text-red-500">
            <span class="font-medium">Oops!</span> Username already taken!
          </p>
        </div>
        <div class="mb-5">
          <label
            for="username-error"
            class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
            >Confirm Password</label
          >
          <input
            type="text"
            id="username-error"
            class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
            placeholder="Bonnie Green"
          />
          <p class="mt-2 text-sm text-red-600 dark:text-red-500">
            <span class="font-medium">Oops!</span> Username already taken!
          </p>
        </div>
        <div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
