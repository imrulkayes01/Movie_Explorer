<template>
  <section class="bg-gray-900 text-gray-100">
    <div class="max-w-[1280px] mx-auto px-6 py-10 sm:py-12">
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-start gap-8"
      >
        <!-- Brand / About -->
        <div class="flex-1 min-w-0">
          <a href="#">
            <!-- class="inline-flex items-center gap-3" -->
            <!-- <svg
              class="w-8 h-8 text-amber-400"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 2L15 8l6 1-4.5 4 1 6L12 17l-5.5 3 1-6L3 9l6-1 3-6z"
                fill="currentColor"
              />
            </svg> -->
            <span class="text-xl font-semibold tracking-tight"
              >MovieExplorer</span
            >
          </a>
          <p class="mt-3 text-sm text-gray-300">
            Discover movies, read reviews, and keep track of your favourites.
            Curated recommendations every week.
          </p>
        </div>

        <!-- Link groups -->
        <nav
          class="grid grid-cols-2 sm:grid-cols-3 gap-6 flex-1"
          aria-label="Section navigation"
        >
          <div>
            <h4 class="text-sm font-medium text-gray-200 mb-3">Explore</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Popular</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Top Rated</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >New Releases</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-medium text-gray-200 mb-3">Company</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" class="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Contact</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-medium text-gray-200 mb-3">Legal</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Privacy Policy</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Terms of Service</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Cookies</a
                >
              </li>
            </ul>
          </div>
        </nav>

        <!-- Social -->
        <div class="flex flex-col items-start gap-3">
          <h4 class="text-sm font-medium text-gray-200">Follow us</h4>
          <div class="flex items-center space-x-3">
            <a
              href="#"
              class="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Twitter"
            >
              <svg
                class="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M22 5.92c-.7.31-1.46.52-2.26.61a3.93 3.93 0 0 0 1.72-2.16 7.86 7.86 0 0 1-2.5.96 3.92 3.92 0 0 0-6.69 3.57A11.13 11.13 0 0 1 3 4.87a3.92 3.92 0 0 0 1.21 5.23 3.88 3.88 0 0 1-1.78-.49v.05a3.92 3.92 0 0 0 3.14 3.84c-.48.13-.99.2-1.52.08a3.92 3.92 0 0 0 3.66 2.72A7.87 7.87 0 0 1 2 19.54a11.12 11.12 0 0 0 6.03 1.77c7.24 0 11.2-6 11.2-11.2v-.51A7.98 7.98 0 0 0 22 5.92z"
                />
              </svg>
            </a>

            <a
              href="#"
              class="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Facebook"
            >
              <svg
                class="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H20l-.5 3h-2.9v7A10 10 0 0 0 22 12z"
                />
              </svg>
            </a>

            <a
              href="#"
              class="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Instagram"
            >
              <svg
                class="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.3A4.7 4.7 0 1 0 16.7 13 4.7 4.7 0 0 0 12 8.3zm6.3-3.6a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1zM12 10a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <footer class="text-center mt-8 border-t border-gray-800 pt-6">
        <p class="mt-4 text-sm text-gray-400">
          &copy; {{ year }} MovieExplorer. All rights reserved.
        </p>
      </footer>
    </div>
  </section>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
svg[aria-hidden="true"] {
  filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.6));
}
</style>
