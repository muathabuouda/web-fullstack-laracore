<script setup lang="ts">
import { computed } from 'vue';

type Tags = keyof typeof tagNames;
type Size = keyof typeof sizeClasses;
type Style = keyof typeof customStyleClasses;
type Weight = keyof typeof weightClasses;
type Align = keyof typeof alignClasses;
type Color = keyof typeof colorClasses;

const props = defineProps({
    tag: {
        type: String as () => Tags | null,
        default: null,
    },
    cstyle: {
        type: String as () => Style | null,
        default: null,
    },
    size: {
        type: String as () => Size | null,
        default: null,
    },
    weight: {
        type: String as () => Weight | null,
        default: null,
    },
    align: {
        type: String as () => Align,
        default: 'left',
    },
    color: {
        type: String as () => Color,
        default: 'text',
    },
});

const computedSize = computed(() => {
    return props.cstyle && customStyleClasses[props.cstyle] ? 'default' : (props.size ?? 'base');
});

const computedWeight = computed(() => {
    return props.cstyle && customStyleClasses[props.cstyle] ? 'default' : (props.weight ?? 'normal');
});

const computedTag = computed(() => {
    if (props.tag) return props.tag;
    return props.cstyle && TagOfPredefinedStyle[props.cstyle] ? TagOfPredefinedStyle[props.cstyle] : tagNames.default;
});

const tagSpacingClass = computed(() => {
    const spacing = tagSpacing[props.tag as keyof typeof tagSpacing];
    return spacing ?? 'mb-2';
});

const computedClasses = computed(() => [
    'leading-relaxed',
    computedSize ? sizeClasses[computedSize.value] : '',
    props.cstyle ? customStyleClasses[props.cstyle] : '',
    computedWeight ? weightClasses[computedWeight.value] : '',
    alignClasses[props.align],
    colorClasses[props.color],
    tagSpacing[tagSpacingClass.value as keyof typeof tagSpacing] ?? 'mb-2',
]);

const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    default: '',
} as const;

const customStyleClasses = {
    title: 'text-title',
    head: 'text-head',
    subhead: 'text-subhead',
    body: 'text-body',
    callout: 'text-callout',
    'small-callout': 'text-small-callout',
    caption: 'text-caption',
    'small-caption': 'text-small-caption',
    default: '',
} as const;

const weightClasses = {
    thin: 'font-thin',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    default: '',
} as const;

const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
} as const;

const tagNames = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    p: 'p',
    div: 'div',
    span: 'span',
    small: 'small',
    default: 'p',
} as const;

const TagOfPredefinedStyle = {
    title: 'h1',
    head: 'h2',
    subhead: 'h3',
    body: 'p',
    callout: 'span',
    'small-callout': 'span',
    caption: 'small',
    'small-caption': 'small',
    default: 'p',
} as const;

const tagSpacing = {
    h1: 'mb-6',
    h2: 'mb-5',
    h3: 'mb-4',
    h4: 'mb-3',
    h5: 'mb-2',
    h6: 'mb-2',
    p: 'mb-2',
    div: 'mb-2',
    span: '',
    small: '',
} as const;

const colorClasses = {
    green: 'text-green',
    red: 'text-red',
    black: 'text-black',
    white: 'text-white',
    gray: 'text-gray',
    orange: 'text-orange',
    yellow: 'text-yellow',
    blue: 'text-blue',
    primary: 'text-primary',
    secondary: 'text-secondary',
    background: 'text-background',
    foreground: 'text-foreground',
    surface: 'text-surface',
    text: 'text-text',
    accent: 'text-accent',
    muted: 'text-muted',
    destructive: 'text-destructive',
    success: 'text-success',
    error: 'text-error',
    warning: 'text-warning',
    info: 'text-info',
} as const;
</script>

<template>
    <component :is="computedTag" :class="computedClasses">
        <slot />
    </component>
</template>
