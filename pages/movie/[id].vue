<template>
    <section class="bg-[#1F2937] min-h-screen">
        <div v-if="isLoading" class="flex items-center justify-center min-h-screen">
            <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
        </div>

        <div v-else-if="error" class="max-w-[1280px] mx-auto px-5 pt-[8rem] pb-[4rem]">
            <div class="bg-red-900/50 border border-red-700 rounded-lg p-6 text-red-200 text-center">
                <h2 class="text-2xl font-bold mb-2">Error Loading Movie</h2>
                <p>{{ error }}</p>
                <NuxtLink to="/" class="mt-4 inline-block text-blue-400 hover:text-blue-300 underline">
                    Go back to Home
                </NuxtLink>
            </div>
        </div>

        <div v-else-if="movie" class="max-w-[1280px] mx-auto px-5 lg:pt-[8rem] pt-[8rem] lg:pb-[4rem] pb-[4rem]">
            <!-- Back Button -->
            <NuxtLink to="/"
                class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 18l-6-6 6-6" />
                </svg>
                Back to Home
            </NuxtLink>

            <!-- Movie Details -->
            <div class="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                <div class="lg:flex">
                    <!-- Movie Poster -->
                    <div class="lg:w-1/3">
                        <img :src="getMoviePosterUrl(movie.poster_path)" :alt="movie.title"
                            class="w-full h-auto lg:h-full object-cover" @error="handleImageError" />
                    </div>

                    <!-- Movie Info -->
                    <div class="lg:w-2/3 p-6 lg:p-8">
                        <h1 class="text-3xl lg:text-5xl font-bold text-white mb-4">
                            {{ movie.title }}
                        </h1>

                        <div class="flex flex-wrap items-center gap-4 mb-6">
                            <div class="flex items-center gap-2">
                                <span class="text-yellow-400 text-lg">⭐</span>
                                <span class="text-white font-semibold">{{ movie.vote_average ?
                                    movie.vote_average.toFixed(1) : 'N/A' }}</span>
                                <span class="text-gray-400">/ 10</span>
                            </div>
                            <span class="text-gray-400">•</span>
                            <span class="text-gray-300">{{ formatDate(movie.release_date) }}</span>
                            <span v-if="movie.runtime" class="text-gray-400">•</span>
                            <span v-if="movie.runtime" class="text-gray-300">{{ movie.runtime }} min</span>
                        </div>

                        <!-- Genres -->
                        <div v-if="movie.genres && movie.genres.length > 0" class="flex flex-wrap gap-2 mb-6">
                            <span v-for="genre in movie.genres" :key="genre.id"
                                class="bg-[#7E72AC] text-white px-3 py-1 rounded-full text-sm">
                                {{ genre.name }}
                            </span>
                        </div>

                        <!-- Overview -->
                        <div class="mb-6">
                            <h2 class="text-xl font-bold text-white mb-3">Overview</h2>
                            <p class="text-gray-300 leading-relaxed">
                                {{ movie.overview || 'No overview available.' }}
                            </p>
                        </div>

                        <!-- Additional Info -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div v-if="movie.production_companies && movie.production_companies.length > 0">
                                <h3 class="text-lg font-semibold text-white mb-2">Production Companies</h3>
                                <p class="text-gray-300">
                                    {{movie.production_companies.map(company => company.name).join(', ')}}
                                </p>
                            </div>

                            <div v-if="movie.production_countries && movie.production_countries.length > 0">
                                <h3 class="text-lg font-semibold text-white mb-2">Production Countries</h3>
                                <p class="text-gray-300">
                                    {{movie.production_countries.map(country => country.name).join(', ')}}
                                </p>
                            </div>

                            <div v-if="movie.spoken_languages && movie.spoken_languages.length > 0">
                                <h3 class="text-lg font-semibold text-white mb-2">Languages</h3>
                                <p class="text-gray-300">
                                    {{movie.spoken_languages.map(lang => lang.name).join(', ')}}
                                </p>
                            </div>

                            <div v-if="movie.budget">
                                <h3 class="text-lg font-semibold text-white mb-2">Budget</h3>
                                <p class="text-gray-300">${{ formatCurrency(movie.budget) }}</p>
                            </div>

                            <div v-if="movie.revenue">
                                <h3 class="text-lg font-semibold text-white mb-2">Revenue</h3>
                                <p class="text-gray-300">${{ formatCurrency(movie.revenue) }}</p>
                            </div>

                            <div v-if="movie.status">
                                <h3 class="text-lg font-semibold text-white mb-2">Status</h3>
                                <p class="text-gray-300">{{ movie.status }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const route = useRoute();
const movieId = route.params.id;

const movie = ref(null);
const isLoading = ref(true);
const error = ref("");

const { getMovieDetails, getMoviePosterUrl, isApiKeySet } = useMovieApi();

// Page metadata
useHead({
    title: movie.value ? `${movie.value.title} - Movie Explorer` : 'Movie Details - Movie Explorer',
    meta: [
        { name: 'description', content: movie.value ? movie.value.overview : 'Movie details page' }
    ]
});

const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const formatCurrency = (amount) => {
    if (!amount) return '0';
    return amount.toLocaleString('en-US');
};

const handleImageError = (event) => {
    const img = event.target;
    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="750"%3E%3Crect fill="%23333" width="500" height="750"/%3E%3Ctext fill="%23999" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
};

// Fetch movie details
onMounted(async () => {
    if (!isApiKeySet()) {
        error.value = "API key is not set. Please configure your API key.";
        isLoading.value = false;
        return;
    }

    try {
        const data = await getMovieDetails(movieId);
        if (data) {
            movie.value = data;
            // Update page title
            useHead({
                title: `${data.title} - Movie Explorer`,
                meta: [
                    { name: 'description', content: data.overview || 'Movie details' }
                ]
            });
        } else {
            error.value = "Movie not found. Please try again.";
        }
    } catch (err) {
        error.value = "An error occurred while loading movie details.";
        console.error(err);
    } finally {
        isLoading.value = false;
    }
});
</script>

<style scoped></style>
