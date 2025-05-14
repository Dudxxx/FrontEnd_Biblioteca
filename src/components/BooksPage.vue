<template>
  <div class="flex min-h-screen text-gray-800">
    <!-- Sidebar reutilizável -->
    <Sidebar />

    <!-- Conteúdo Principal -->
    <main class="flex-1 p-6">
      <!-- Filtros de pesquisa -->
      <div class="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h1 class="text-2xl font-bold">Livros</h1>
          <div class="flex gap-2">
            <input
          type="text"
          placeholder="Nome do livro"
          class="border rounded p-2 w-48"
          v-model="search.title"
        />
        <input
          type="text"
          placeholder="Subcategorias"
          class="border rounded p-2 w-48"
          v-model="search.subcategory"
        />
        <input
          type="text"
          placeholder="Gêneros"
          class="border rounded p-2 w-48"
          v-model="search.genre"
        />
        <button
          @click="handleFilter"
          class="px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200"
        >
          Filter
        </button>
        <button
          @click="handleSearch"
          class="px-4 py-2 border rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          Pesquisar
        </button>
          </div>
        </div>
      
      <!-- Grid de livros -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="(book, index) in filteredBooks"
          :key="index"
          class="border border-gray-200 rounded-lg p-4 hover:shadow"
        >
          <!-- Capa do livro -->
          <img
            :src="book.imageUrl"
            alt="Book cover"
            class="w-full h-48 object-cover mb-3"
          />
          <!-- Título e descrição -->
          <h2 class="font-semibold text-lg mb-1">
            {{ book.title }}
          </h2>
          <p class="text-sm text-gray-600">
            {{ book.description }}
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from '../Sidebar.vue'

export default {
  name: 'BooksPage',
  components: {
    Sidebar
  },
  data() {
    return {
      books: [
        {
          title: 'Educação, Tecnologia & Inovação 1',
          description: 'Descrição do livro 1',
          imageUrl: 'https://via.placeholder.com/200x300?text=Book+Cover+1'
        },
        {
          title: 'Educação, Tecnologia & Inovação 2',
          description: 'Descrição do livro 2',
          imageUrl: 'https://via.placeholder.com/200x300?text=Book+Cover+2'
        },
        // Adicione mais livros conforme necessário
      ],
      search: {
        title: '',
        subcategory: '',
        genre: ''
      }
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => {
        const titleMatch = book.title
          .toLowerCase()
          .includes(this.search.title.toLowerCase())
        const subcategoryMatch =
          !this.search.subcategory ||
          book.description.toLowerCase().includes(this.search.subcategory.toLowerCase())
        const genreMatch =
          !this.search.genre ||
          book.description.toLowerCase().includes(this.search.genre.toLowerCase())
        return titleMatch && subcategoryMatch && genreMatch
      })
    }
  },
  methods: {
    handleFilter() {
      console.log('Filtrando com:', this.search)
    },
    handleSearch() {
      console.log('Pesquisando com:', this.search)
    }
  }
}
</script>
