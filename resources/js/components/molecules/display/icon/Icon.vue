<script setup lang="ts">
import { computed } from 'vue';
import { IconComponentProps } from '@/types/components/icon';
import { icons } from './icons';

const {
  name,
  variant = 'regular',
  subvariant = 'broken',
  class: className = ''
} = defineProps<IconComponentProps>();

const icon = computed(() => icons[name]?.[variant]?.[subvariant]);

</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        :viewBox="icon.viewbox"
        :class="className ?? 'h-6 w-6 fill-black'"
    >
        <g>
            <g class="fills">
                <path :d="icon.d" fill-rule="evenodd" clip-rule="evenodd" />
            </g>
        </g>
    </svg>
</template>
