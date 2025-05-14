import { BadgeMap } from '@/types/components/badge';

export type Badges = keyof typeof badges;

export const badges = {
    primary: {
        bg: 'bg-primary/15',
        fill: 'fill-primary',
    },
    secondary: {
        bg: 'bg-secondary/15',
        fill: 'fill-secondary',
    },
    success: {
        bg: 'bg-success/15',
        fill: 'fill-success',
    },
    accent: {
        bg: 'bg-accent/15',
        fill: 'fill-accent',
    },
    muted: {
        bg: 'bg-black/15',
        fill: 'fill-muted',
    },
    destructive: {
        bg: 'bg-destructive/15',
        fill: 'fill-destructive',
    },
    warning: {
        bg: 'bg-warning/15',
        fill: 'fill-warning',
    },
    info: {
        bg: 'bg-info/15',
        fill: 'fill-info',
    },
} satisfies BadgeMap;
