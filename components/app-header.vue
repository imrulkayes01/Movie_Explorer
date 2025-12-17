<template>
  <header class="bg-gray-800 text-white">
    <div class="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-4">
      <!-- Logo -->
      <NuxtLink to="/" @click="scrollToTop">
        <h1 class="text-lg font-[600] tracking-wide cursor-pointer">
          🎬 MOVIE EXPLORER
        </h1>
      </NuxtLink>

      <!-- Desktop Menu -->
      <nav class="hidden md:block">
        <ul class="flex gap-8 text-[18px]">
          <li>
            <NuxtLink to="/" @click="scrollToTop" class="hover:text-gray-300 cursor-pointer transition-colors">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" @click="scrollToTop" class="hover:text-gray-300 cursor-pointer transition-colors">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" @click="scrollToTop" class="hover:text-gray-300 cursor-pointer transition-colors">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Mobile Menu Button -->
      <button class="md:hidden text-white focus:outline-none" @click="isMenuOpen = !isMenuOpen">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" class="w-7 h-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" class="w-7 h-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <nav v-if="isMenuOpen" class="md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4">
        <ul class="flex flex-col gap-4 text-lg">
          <li>
            <NuxtLink to="/" @click="handleHomeClick" class="hover:text-gray-300 cursor-pointer transition-colors">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" @click="handleMenuClick" class="hover:text-gray-300 cursor-pointer transition-colors">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" @click="handleMenuClick"
              class="hover:text-gray-300 cursor-pointer transition-colors">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
const isMenuOpen = ref(false);

const scrollToTop = () => {
  if (process.client) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const handleHomeClick = () => {
  scrollToTop();
  isMenuOpen.value = false; // Close mobile menu after clicking
};

const handleMenuClick = () => {
  scrollToTop();
  isMenuOpen.value = false; // Close mobile menu after clicking
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
