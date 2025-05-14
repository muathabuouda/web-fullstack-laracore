<script setup lang="ts">
import { TextComponent } from '@/components/atoms';
import { BadgeComponentProps } from '@/types/components/badge';
import { computed } from 'vue';
import { IconComponent } from '../..';
import { badges } from './badges';

const { icon, text, status } = defineProps<BadgeComponentProps>();

const badge = computed(() => badges[status!]);
</script>

<template>
    <div class="gap-sm inline-flex items-center rounded-full" :class="text || icon ? badge.bg + ' px-md py-xs' : 'bg-red'">
        <div v-if="!text && !icon" class="bg-red rounded-full h-sm w-sm px-0 py-0 animate-ping"></div>
        <div v-if="icon">
            <IconComponent :name="icon" class="w-base" :class="badge.fill" />
        </div>
        <div v-if="text">
            <TextComponent cstyle="caption" :color="status">
                <span class="font-bold">{{ text }}</span>
            </TextComponent>
        </div>
    </div>
</template>
