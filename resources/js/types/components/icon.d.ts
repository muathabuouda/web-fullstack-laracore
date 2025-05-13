import {type Names, type Variants, type Subvariants } from "@/components/molecules/display/icon/icons";

export type IconsMap = {
    [name: string]: {
        [variant: string]: {
            [subvariant: string]: {
                d: string;
                viewbox: string;
            };
        };
    };
};

export type VariantsMap = {
    [name: string]: string;
};

export type SubvariantsMap = {
    [name: string]: string;
};

export interface IconComponentProps {
    name: Names;
    variant?: Variants;
    subvariant?: Subvariants;
    class?: string;
}