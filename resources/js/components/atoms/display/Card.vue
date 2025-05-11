<script setup lang="ts">
import { computed } from 'vue';

type Border = keyof typeof borderClasses;

const props = defineProps({
    border: {
        type: String as () => Border,
        default: 'none',
    },
});

const borderClasses = {
    none: '',
    default: 'border border-forgraound',
    strong: 'border border-2 border-foreground',
} as const;

const computedClasses = computed(() => [
    'card',
    borderClasses[props.border]
]);
</script>

<template>
    <div :class="computedClasses">
        <slot />
    </div>
</template>
