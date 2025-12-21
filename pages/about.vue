<template>
  <section class="bg-[#1F2937] min-h-screen">
    <div
      class="max-w-[1280px] mx-auto px-5 lg:pt-[8rem] pt-[8rem] lg:pb-[4rem] pb-[4rem]"
    >
      <div class="text-center mb-12">
        <h1 class="text-2xl lg:text-6xl md:text-5xl text-white mb-4">
          About Movie Explorer
        </h1>
      </div>

      <div class="max-w-4xl mx-auto space-y-8">
        <!-- Mission Section -->
        <div class="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h2
            class="text-2xl font-bold text-white mb-4 flex items-center gap-3"
          >
            <span>🎯</span>
            Our Mission
          </h2>
          <p class="text-gray-300 leading-relaxed">
            Movie Explorer is designed to help movie enthusiasts discover,
            explore, and learn about their favorite films. We provide a seamless
            experience to search through thousands of movies, view details,
            ratings, and more.
          </p>
        </div>

        <!-- Features Section -->
        <div class="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h2
            class="text-2xl font-bold text-white mb-4 flex items-center gap-3"
          >
            <span>✨</span>
            Features
          </h2>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-start gap-3">
              <span class="text-blue-400 mt-1">•</span>
              <span
                >Search through thousands of movies using our powerful search
                engine</span
              >
            </li>
            <li class="flex items-start gap-3">
              <span class="text-blue-400 mt-1">•</span>
              <span
                >View detailed information including ratings, release dates, and
                descriptions</span
              >
            </li>
            <li class="flex items-start gap-3">
              <span class="text-blue-400 mt-1">•</span>
              <span>Explore featured movies and discover new favorites</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-blue-400 mt-1">•</span>
              <span>Responsive design that works on all devices</span>
            </li>
          </ul>
        </div>

        <!-- Data Source Section -->
        <div class="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h2
            class="text-2xl font-bold text-white mb-4 flex items-center gap-3"
          >
            <span>📊</span>
            Data Source
          </h2>
          <p class="text-gray-300 leading-relaxed">
            Movie data is powered by
            <a
              href="#"
              target="_blank"
              class="text-blue-400 hover:text-blue-300 underline"
              >The Movie Database (TMDB)</a
            >, providing accurate and up-to-date information about movies from
            around the world.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Page metadata
useHead({
  title: "About - Movie Explorer",
  meta: [
    {
      name: "description",
      content:
        "Learn more about Movie Explorer and our mission to help you discover amazing movies.",
    },
  ],
});
</script>

<style scoped></style>
