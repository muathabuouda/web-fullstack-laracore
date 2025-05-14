import { type Badges } from '@/components/molecules/display/badge/badges';
import { type Names } from '@/components/molecules/display/icon/icons';

export type BadgeMap = {
    [type: string]: {
        [attribute: string]: string;
    };
};

export interface BadgeComponentProps {
    icon?: Names;
    text?: string;
    status?: Badges;
}
