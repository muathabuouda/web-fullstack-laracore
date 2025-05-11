<script setup lang="ts">
import { computed } from 'vue';

type Align = keyof typeof alignClasses;

const props = defineProps({
    for: {
        type: String,
        default: null,
        require: true,
    },
    align: {
        type: String as () => Align,
        default: 'left',
    },
});

const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
} as const;

const computedClasses = computed(() => ['block text-small-callout', alignClasses[props.align]]);
</script>

<template>
    <label :for="props.for" :class="computedClasses">
        <slot />
    </label>
</template>
