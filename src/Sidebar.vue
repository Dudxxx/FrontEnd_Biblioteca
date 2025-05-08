<template>
  <aside class="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold dark:text-gray-100">BIG BEG AVIARAS</h1>
      <button @click="toggleDarkMode" class="focus:outline-none">
        <span v-if="darkMode" class="sr-only">Light mode</span>
        <span v-else class="sr-only">Dark mode</span>
        <svg v-if="darkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <!-- Sun icon -->
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12h-1m12.02-5.02l-.7.7M6.04 17.96l-.7.7m12.02 0l-.7-.7M6.04 6.04l-.7-.7M12 5a7 7 0 000 14 7 7 0 000-14z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <!-- Moon icon -->
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        </svg>
      </button>
    </div>

    <nav class="flex-1">
      <ul class="space-y-2">
        <li>
          <router-link
            to="/books"
            class="block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            active-class="bg-gray-200 dark:bg-gray-700">
            Books
          </router-link>
        </li>
        <li>
          <router-link
            to="/users"
            class="block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            active-class="bg-gray-200 dark:bg-gray-700">
            Users
          </router-link>
        </li>
        <li>
          <router-link
            to="/borrowing"
            class="block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            active-class="bg-gray-200 dark:bg-gray-700">
            Borrowing
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      darkMode: false
    }
  },
  created() {
    // Checa localStorage ou preferência do sistema
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      this.darkMode = saved === 'true'
    } else {
      this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    this.applyMode()
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      localStorage.setItem('darkMode', this.darkMode)
      this.applyMode()
    },
    applyMode() {
      document.documentElement.classList.toggle('dark', this.darkMode)
    }
  }
}
</script>

<style scoped>
/* Se precisar de ajustes específicos, coloque aqui */
</style>
