<template>
    <section class="bg-[#1F2937] min-h-screen">
        <div class="max-w-[1280px] mx-auto px-5 lg:pt-[8rem] pt-[8rem] lg:pb-[4rem] pb-[4rem]">
            <div class="text-center mb-12">
                <h1 class="text-2xl lg:text-6xl md:text-5xl text-white mb-4">
                    Contact Us
                </h1>
                <p class="text-gray-400 text-sm lg:text-xl max-w-3xl mx-auto">
                    Have questions or feedback? We'd love to hear from you!
                </p>
            </div>

            <div class="max-w-2xl mx-auto">
                <!-- Contact Form -->
                <div class="bg-gray-800 rounded-lg p-8 border border-gray-700 mb-8">
                    <h2 class="text-2xl font-bold text-white mb-6">Send us a Message</h2>

                    <form @submit.prevent="handleSubmit" class="space-y-6">
                        <div>
                            <label for="name" class="block text-gray-300 mb-2">Name</label>
                            <input v-model="form.name" type="text" id="name" required
                                class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#746799] transition"
                                placeholder="Your name" />
                        </div>

                        <div>
                            <label for="email" class="block text-gray-300 mb-2">Email</label>
                            <input v-model="form.email" type="email" id="email" required
                                class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#746799] transition"
                                placeholder="your.email@example.com" />
                        </div>

                        <div>
                            <label for="subject" class="block text-gray-300 mb-2">Subject</label>
                            <input v-model="form.subject" type="text" id="subject" required
                                class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#746799] transition"
                                placeholder="What's this about?" />
                        </div>

                        <div>
                            <label for="message" class="block text-gray-300 mb-2">Message</label>
                            <textarea v-model="form.message" id="message" rows="6" required
                                class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#746799] transition resize-none"
                                placeholder="Your message here..."></textarea>
                        </div>

                        <button type="submit" :disabled="isSubmitting"
                            class="w-full bg-[#7E72AC] disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                            <span v-if="!isSubmitting">Send Message</span>
                            <span v-else class="flex items-center justify-center gap-2">
                                <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                                Sending...
                            </span>
                        </button>

                        <div v-if="submitMessage"
                            :class="submitMessage.type === 'success' ? 'bg-green-900/50 border-green-700 text-green-200' : 'bg-red-900/50 border-red-700 text-red-200'"
                            class="p-4 rounded-lg border text-sm">
                            {{ submitMessage.text }}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

// Page metadata
useHead({
    title: 'Contact - Movie Explorer',
    meta: [
        { name: 'description', content: 'Get in touch with Movie Explorer. Send us your questions, feedback, or suggestions.' }
    ]
});

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const isSubmitting = ref(false);
const submitMessage = ref(null);

const handleSubmit = async () => {
    isSubmitting.value = true;
    submitMessage.value = null;

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        isSubmitting.value = false;
        submitMessage.value = {
            type: 'success',
            text: 'Thank you for your message! We\'ll get back to you soon.'
        };

        // Reset form
        form.value = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };

        // Clear message after 5 seconds
        setTimeout(() => {
            submitMessage.value = null;
        }, 5000);
    }, 1500);
};
</script>

<style scoped></style>
