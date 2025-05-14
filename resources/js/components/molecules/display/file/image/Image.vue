<script setup lang="ts">
import { ImageComponentProps } from '@/types/components/image';
import { ref, watch } from 'vue';

const { src, alt, title, classes } = defineProps<ImageComponentProps>();

const isLoaded = ref(false);

watch(
    () => src,
    () => {
        isLoaded.value = false;
    },
);

</script>

<template>
    <div class="overflow-hidden" :class="classes">
        <div v-if="!isLoaded" class="bg-gray/20 absolute inset-0 z-0 animate-pulse"></div>
        <img
            loading="lazy"
            :src="src"
            :alt="alt"
            :title="title"
            @load="isLoaded = true"
            class="h-full w-full object-cover transition-opacity duration-300"
            :class="{ 'opacity-0': !isLoaded, 'opacity-100': isLoaded }"
        />
    </div>
</template>
