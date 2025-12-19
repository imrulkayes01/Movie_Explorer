<template>
  <section class="bg-gray-900 text-gray-100">
    <div class="max-w-[1280px] mx-auto px-6 py-10 sm:py-12">
      <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
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
            <span class="text-xl font-semibold tracking-tight">MovieExplorer</span>
          </a>
          <p class="mt-3 text-sm text-gray-300">
            Discover movies, read reviews, and keep track of your favourites.
            Curated recommendations every week.
          </p>
        </div>

        <!-- Link groups -->
        <nav class="grid grid-cols-2 sm:grid-cols-3 gap-6 flex-1" aria-label="Section navigation">
          <div>
            <h4 class="text-sm font-medium text-gray-200 mb-3">Explore</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" class="hover:text-white transition-colors">Popular</a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">Top Rated</a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">New Releases</a>
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
                <a href="#" class="hover:text-white transition-colors">Contact</a>
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
                <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">Cookies</a>
              </li>
            </ul>
          </div>
        </nav>

        <!-- Social -->
        <div class="flex flex-col items-start gap-3">
          <h4 class="text-sm font-medium text-gray-200">Follow us</h4>
          <div class="flex items-center space-x-3">
            <a href="https://x.com/imrulkayes_01" target="_blank" rel="noopener noreferrer"
              class="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors" aria-label="Twitter">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a href="https://www.facebook.com/imrul.kayes101" target="_blank" rel="noopener noreferrer"
              class="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors" aria-label="Facebook">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            <a href="https://www.instagram.com/imrulkayes_01/" target="_blank" rel="noopener noreferrer"
              class="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors" aria-label="Instagram">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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
