<template>
  <section class="bg-[#1F2937] min-h-screen">
    <div class="max-w-[1280px] mx-auto flex flex-col items-center px-5 lg:pt-[8rem] pt-[8rem] lg:pb-[4rem] pb-[4rem]">
      <h1 class="text-2xl text-center lg:text-6xl md:text-3xl pb-4 lg:pb-6 text-white">
        Explorer Popular Movies
      </h1>

      <div
        class="flex items-center gap-2 bg-gray-800 text-white px-4 py-3 rounded-full w-auto lg:w-[520px] md:w-[400px] border border-gray-700 focus-within:border-blue-500 transition mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" class="text-gray-300">
          <circle cx="11" cy="11" r="5.5" />
          <path stroke-linecap="round" stroke-linejoin="round" d="m15 15l4 4" />
        </svg>

        <input v-model="searchQuery" @input="handleSearch" type="text" placeholder="Search movies..."
          class="bg-transparent outline-none text-[16px] placeholder-gray-400 w-full" />

        <div v-if="isLoading" class="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
      </div>

      <!-- Error Message -->
      <div v-if="error"
        class="mt-6 p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-200 max-w-[520px] w-full">
        {{ error }}
      </div>

      <!-- API Key Warning -->
      <div v-if="!isApiKeySet()"
        class="mt-6 p-6 bg-yellow-900/50 border border-yellow-700 rounded-lg text-yellow-200 max-w-[600px] w-full">
        <div class="flex items-start gap-3">
          <span class="text-2xl">⚠️</span>
          <div class="flex-1">
            <h3 class="text-lg font-bold mb-2">API Key Required</h3>
            <p class="text-sm mb-3">Movie search API key</p>
            <div class="text-sm space-y-2 bg-yellow-900/30 p-3 rounded">
              <p class="font-semibold">API Key Add</p>
              <ol class="list-decimal list-inside space-y-1 ml-2">
                <li>
                  <a href="https://www.themoviedb.org/settings/api" target="_blank"
                    class="text-blue-400 underline">link</a>
                  free API key
                </li>
                <li>
                  Project folder
                  <code class="bg-gray-800 px-1 rounded">.env</code> file
                </li>
                <li>
                  <code class="bg-gray-800 px-1 rounded">NUXT_PUBLIC_MOVIE_API_KEY=</code>
                  API key paste
                </li>
                <li>
                  <strong>Dev server restart </strong> (Ctrl+C stop

                  <code class="bg-gray-800 px-1 rounded">yarn dev</code>
                  run)
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <!-- Search Results -->
      <div v-if="movies.length > 0" class="mt-12 w-full">
        <h2 class="text-2xl font-bold text-white mb-6">
          Search Results ({{ totalResults }} movies found)
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="movie in movies" :key="movie.id"
            class="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 cursor-pointer"
            @click="goToMovie(movie.id)">
            <img :src="getMoviePosterUrl(movie.poster_path)" :alt="movie.title" class="w-full h-[400px] object-cover"
              @error="handleImageError" />
            <div class="p-4">
              <h3 class="text-white font-bold text-lg mb-2 line-clamp-2">
                {{ movie.title }}
              </h3>
              <p class="text-gray-400 text-sm mb-3 line-clamp-3">
                {{ movie.overview }}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-yellow-400 text-sm">{{
                  movie.release_date
                }}</span>
                <span class="text-blue-400 text-sm">⭐ {{ movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-if="
        searchQuery &&
        !isLoading &&
        movies.length === 0 &&
        !error &&
        isApiKeySet()
      " class="mt-12 text-center text-gray-400">
        <p class="text-xl">No movies found for "{{ searchQuery }}"</p>
        <p class="text-sm mt-2">Try searching for a different movie</p>
      </div>

      <!-- Static Featured Movies (Bottom Grid) -->
      <div class="w-full mt-16">
        <h2 class="text-2xl font-bold text-white mb-6">
          Featured Movies
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="item in img_data" :key="item.id"
            class="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 cursor-pointer">
            <img :src="item.image" :alt="item.name" class="w-full h-[400px] object-cover" />
            <div class="p-4">
              <h3 class="text-white font-semibold text-lg mb-1 line-clamp-2">
                {{ item.name }}
              </h3>
              <p class="text-gray-400 text-sm line-clamp-2">
                {{ item.description }}
              </p>
              <div v-if="item.Date || item.date" class="mt-2 text-sm text-yellow-400">
                {{ item.Date || item.date }}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import img_data from "@/json/img_data.json";
const searchQuery = ref("");
const movies = ref([]);
const isLoading = ref(false);
const error = ref("");
const totalResults = ref(0);

const { searchMovies, getMoviePosterUrl, isApiKeySet } = useMovieApi();

// Debounce search function
let searchTimeout = null;

const handleSearch = () => {
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }

  if (!searchQuery.value.trim()) {
    movies.value = [];
    error.value = "";
    return;
  }

  isLoading.value = true;
  error.value = "";

  searchTimeout = setTimeout(async () => {
    try {
      const results = await searchMovies(searchQuery.value);

      if (results) {
        movies.value = results.results;
        totalResults.value = results.total_results;
      } else {
        if (isApiKeySet()) {
          error.value = "Failed to search movies. Please try again.";
        }
        movies.value = [];
      }
    } catch (err) {
      error.value = "An error occurred while searching movies.";
      movies.value = [];
    } finally {
      isLoading.value = false;
    }
  }, 500); // Wait 500ms after user stops typing
};

const handleImageError = (event) => {
  const img = event.target;
  img.src =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="750"%3E%3Crect fill="%23333" width="500" height="750"/%3E%3Ctext fill="%23999" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
};

const router = useRouter();

const goToMovie = (movieId) => {
  if (movieId) {
    router.push(`/movie/${movieId}`);
  }
};
</script>

<style></style>
