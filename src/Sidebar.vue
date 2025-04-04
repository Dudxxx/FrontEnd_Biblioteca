<template>
    <aside class="w-64 bg-white border-r border-gray-200 p-4">
      <h1 class="text-2xl font-bold mb-6">BIG BEG AVIARAS</h1>
      <nav>
        <ul class="space-y-2">
          <li>
            <!-- Se desejar que "Browse" leve para outra rota, ajuste o "to" -->
            <router-link to="/" class="block py-2 px-4 rounded hover:bg-gray-100">
              Browse
            </router-link>
          </li>
          <li>
            <router-link to="/books" class="block py-2 px-4 rounded hover:bg-gray-100">
              Books
            </router-link>
          </li>
          <li>
            <router-link to="/users" class="block py-2 px-4 rounded hover:bg-gray-100">
              Users
            </router-link>
          </li>
          <li>
            <!-- Se não tiver rota para Borrowing, você pode configurar depois -->
            <router-link to="/borrowing" class="block py-2 px-4 rounded hover:bg-gray-100">
              Borrowing
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar'
  }
  </script>
  