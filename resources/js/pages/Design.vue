<script setup lang="ts">
import { useColors } from '@/composables/useColors';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Design Pattern',
        href: '/design-pattern',
    },
];

const { colors } = useColors();
</script>

<template>
    <Head title="Design Pattern" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="grid h-fit w-full grid-cols-4 gap-4 px-8">
            <!-- Start Typography Section -->
            <section class="border-gray col-span-4 mt-8 rounded-xl border-1 p-8">
                <div class="text-head uppercase">typography</div>
                <div class="text-subhead">A scalable, consistent text style guide ensuring clarity, hierarchy, and readability across the UI.</div>
                <hr class="mt-6 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">Primary Typeface</div>
                <div class="text-title mb-4">JF Flate</div>
                <div class="mb-6 grid grid-cols-4 gap-4">
                    <div class="rounded-xl border-1 p-4">
                        <div class="mb-2 text-[4rem] font-normal">Aa</div>
                        <div class="flex items-center justify-between">
                            <div class="text-callout font-normal">Regular</div>
                            <div class="text-caption font-normal">400</div>
                        </div>
                    </div>
                    <div class="rounded-xl border-1 p-4">
                        <div class="mb-2 text-[4rem] font-bold">Aa</div>
                        <div class="flex items-center justify-between">
                            <div class="text-callout font-bold">Bold</div>
                            <div class="text-caption font-bold">800</div>
                        </div>
                    </div>
                </div>
                <hr class="mt-4 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">More Typefaces</div>
                <div class="text-title mb-4">Changa</div>
                <div class="mb-6 grid grid-cols-4 gap-4">
                    <div class="rounded-xl border-1 p-4">
                        <div class="mb-2 text-[4rem] font-extralight">Aa</div>
                        <div class="flex items-center justify-between">
                            <div class="text-callout font-extralight">Extra Light</div>
                            <div class="text-caption font-extralight">200</div>
                        </div>
                    </div>
                    <div class="rounded-xl border-1 p-4">
                        <div class="mb-2 text-[4rem] font-light">Aa</div>
                        <div class="flex items-center justify-between">
                            <div class="text-callout font-light">Light</div>
                            <div class="text-caption font-light">300</div>
                        </div>
                    </div>
                    <div class="rounded-xl border-1 p-4">
                        <div class="mb-2 text-[4rem] font-normal">Aa</div>
                        <div class="flex items-center justify-between">
                            <div class="text-callout font-normal">Regular</div>
                            <div class="text-caption font-normal">400</div>
                        </div>
                    </div>
                    <div class="rounded-xl border-1 p-4">
                        <div class="mb-2 text-[4rem] font-medium">Aa</div>
                        <div class="flex items-center justify-between">
                            <div class="text-callout font-medium">Medium</div>
                            <div class="text-caption font-medium">500</div>
                        </div>
                    </div>
                    <div class="rounded-xl border-1 p-4">
                        <div class="mb-2 text-[4rem] font-semibold">Aa</div>
                        <div class="flex items-center justify-between">
                            <div class="text-callout font-semibold">Semibold</div>
                            <div class="text-caption font-semibold">600</div>
                        </div>
                    </div>
                    <div class="rounded-xl border-1 p-4">
                        <div class="mb-2 text-[4rem] font-bold">Aa</div>
                        <div class="flex items-center justify-between">
                            <div class="text-callout font-bold">Bold</div>
                            <div class="text-caption font-bold">700</div>
                        </div>
                    </div>
                    <div class="rounded-xl border-1 p-4">
                        <div class="mb-2 text-[4rem] font-extrabold">Aa</div>
                        <div class="flex items-center justify-between">
                            <div class="text-callout font-extrabold">Extrbold</div>
                            <div class="text-caption font-extrabold">800</div>
                        </div>
                    </div>
                </div>
                <hr class="mt-4 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">hierarchy</div>
                <table class="min-w-full table-auto text-left text-sm">
                    <thead>
                        <tr class="bg-gray-200 text-black">
                            <th class="px-4 py-3 font-semibold">Type</th>
                            <th class="px-4 py-3 font-semibold">Attribute</th>
                            <th class="px-4 py-3 font-semibold">Size</th>
                            <th class="px-4 py-3 font-semibold">Weight</th>
                            <th class="px-4 py-3 font-semibold">Usage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white">
                            <td class="text-title px-4 py-3">Title</td>
                            <td class="px-4 py-3">text-title</td>
                            <td class="px-4 py-3">24px (1.5rem)</td>
                            <td class="px-4 py-3">Extra Bold</td>
                            <td class="text-small-callout px-4 py-3 text-gray-600">Onboarding , Auth , Content Details Title</td>
                        </tr>
                        <tr class="bg-gray-100">
                            <td class="text-head px-4 py-3">Head</td>
                            <td class="px-4 py-3">text-head</td>
                            <td class="px-4 py-3">20px (1.25rem)</td>
                            <td class="px-4 py-3">Bold</td>
                            <td class="text-small-callout px-4 py-3 text-gray-600">List Titles</td>
                        </tr>
                        <tr class="bg-white">
                            <td class="text-subhead px-4 py-3">Subhead</td>
                            <td class="px-4 py-3">text-subhead</td>
                            <td class="px-4 py-3">16px (1rem)</td>
                            <td class="px-4 py-3">Medium</td>
                            <td class="text-small-callout px-4 py-3 text-gray-600">Subtitle</td>
                        </tr>
                        <tr class="bg-gray-100">
                            <td class="text-body px-4 py-3">Body</td>
                            <td class="px-4 py-3">text-body</td>
                            <td class="px-4 py-3">14px (0.875rem)</td>
                            <td class="px-4 py-3">Regular</td>
                            <td class="text-small-callout px-4 py-3 text-gray-600">Onboarding Body , Content Details Body</td>
                        </tr>
                        <tr class="bg-white">
                            <td class="text-callout px-4 py-3">Callout</td>
                            <td class="px-4 py-3">text-callout</td>
                            <td class="px-4 py-3">14px (0.875rem)</td>
                            <td class="px-4 py-3">Medium</td>
                            <td class="text-small-callout px-4 py-3 text-gray-600">Buttons</td>
                        </tr>
                        <tr class="bg-gray-100">
                            <td class="text-small-callout px-4 py-3">Small Callout</td>
                            <td class="px-4 py-3">text-small-callout</td>
                            <td class="px-4 py-3">12px (0.75rem)</td>
                            <td class="px-4 py-3">Regular</td>
                            <td class="text-small-callout px-4 py-3 text-gray-600">Navbar Actions</td>
                        </tr>
                        <tr class="bg-white">
                            <td class="text-caption px-4 py-3">Caption</td>
                            <td class="px-4 py-3">text-caption</td>
                            <td class="px-4 py-3">12px (0.75rem)</td>
                            <td class="px-4 py-3">Light</td>
                            <td class="text-small-callout px-4 py-3 text-gray-600">Caption , Small Body Text , Input Header</td>
                        </tr>
                        <tr class="bg-gray-100">
                            <td class="text-small-caption px-4 py-3">Small Caption</td>
                            <td class="px-4 py-3">text-small-caption</td>
                            <td class="px-4 py-3">10px (0.625rem)</td>
                            <td class="px-4 py-3">Extra Light</td>
                            <td class="text-small-callout px-4 py-3 text-gray-600">Validation Text</td>
                        </tr>
                    </tbody>
                </table>
                <hr class="mt-4 mb-2" />
                <div class="grid grid-cols-3 gap-4">
                    <div>
                        <div class="text-callout mb-4 uppercase opacity-50">Font Style Format</div>
                        <div>Hybrid Tailwind Approach</div>
                        <div class="text-small-callout">Utility-First CSS / Atomic CSS</div>
                        <div class="text-small-callout">Tailwind Preset / Theme-Based Tokens</div>
                    </div>
                    <div>
                        <div class="text-callout mb-4 uppercase opacity-50">Colors</div>
                        <div class="grid grid-cols-2">
                            <div>Black</div>
                            <div>--black</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div>White</div>
                            <div>--white</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div>Gray</div>
                            <div>--gray</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div>Primary</div>
                            <div>--Primary</div>
                        </div>
                        <br />
                        <div class="grid grid-cols-2">
                            <div>Status</div>
                            <div>--[status]</div>
                        </div>
                    </div>
                    <div>
                        <div class="text-callout mb-4 uppercase opacity-50">Font Style Format</div>
                        <div>Left</div>
                        <div>Center</div>
                        <div>Right</div>
                    </div>
                </div>
                <hr class="mt-4 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">Example</div>
                <div class="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-800">
                    <h2 class="text-subhead mb-2 font-bold text-gray-900 dark:text-white">Getting Started</h2>
                    <p class="mb-4 text-[0.875rem] leading-relaxed text-gray-700 dark:text-gray-300">
                        This card demonstrates the typography system you're building with Tailwind and custom tokens.
                    </p>
                    <div class="text-[0.75rem] text-gray-500 dark:text-gray-400">Last updated: <span class="font-semibold">May 7, 2025</span></div>
                </div>
            </section>
            <!-- End Typography Section -->

            <!-- Start Color Palette Section -->
            <section class="border-gray col-span-4 mt-8 rounded-xl border-1 p-8">
                <div class="text-head uppercase">Color Palette</div>
                <div class="text-subhead">
                    It includes brand colors, neutral tones, and semantic roles (such as success, warning, and error) to ensure clarity,
                    accessibility, and cohesive design throughout the interface
                </div>
                <hr class="mt-6 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">Colors</div>
                <div class="grid grid-cols-8">
                    <div class="flex flex-col items-center justify-center">
                        <div class="bg-green mb-2 h-30 w-20 rounded-full"></div>
                        <div>{{ colors.green }}</div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <div class="bg-red mb-2 h-30 w-20 rounded-full"></div>
                        <div>{{ colors.red }}</div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <div class="mb-2 h-30 w-20 rounded-full bg-black"></div>
                        <div>{{ colors.black }}</div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <div class="bg-gray mb-2 h-30 w-20 rounded-full"></div>
                        <div>{{ colors.gray }}</div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <div class="border-gray mb-2 h-30 w-20 rounded-full border bg-white"></div>
                        <div>{{ colors.white }}</div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <div class="bg-yallow mb-2 h-30 w-20 rounded-full"></div>
                        <div>{{ colors.yallow }}</div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <div class="bg-orange mb-2 h-30 w-20 rounded-full"></div>
                        <div>{{ colors.orange }}</div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <div class="bg-blue mb-2 h-30 w-20 rounded-full"></div>
                        <div>{{ colors.blue }}</div>
                    </div>
                </div>
                <hr class="mt-6 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">Color Transparency</div>
                <div class="grid grid-cols-8">
                    <div class="flex flex-col items-center justify-center">
                        <div class="bg-green mb-2 h-30 w-20 rounded-full opacity-15"></div>
                        <div>15%</div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <div class="bg-green mb-2 h-30 w-20 rounded-full opacity-25"></div>
                        <div>25%</div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <div class="bg-green mb-2 h-30 w-20 rounded-full opacity-50"></div>
                        <div>50%</div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <div class="bg-green mb-2 h-30 w-20 rounded-full opacity-75"></div>
                        <div>75%</div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <div class="bg-green mb-2 h-30 w-20 rounded-full"></div>
                        <div>100%</div>
                    </div>
                    <div class="item-center col-span-3 flex flex-col justify-center">
                        This is the transparency percentage of the colors used and applies to all colors.
                    </div>
                </div>
                <hr class="mt-6 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">Usage Colors</div>
                <table class="w-full table-fixed text-sm">
                    <thead>
                        <tr class="border-b text-left">
                            <th class="w-1/3 py-2">Color Use</th>
                            <th class="w-1/3 py-2">Light Mode</th>
                            <th class="w-1/3 py-2">Dark Mode</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y">
                        <tr>
                            <td class="py-3">Primary</td>
                            <td><div class="bg-green h-5 w-5 rounded-full"></div></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="py-3">Secondary</td>
                            <td><div class="bg-red h-5 w-5 rounded-full"></div></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="py-3">Background</td>
                            <td><div class="border-muted h-5 w-5 rounded-full border bg-white"></div></td>
                            <td><div class="h-5 w-5 rounded-full bg-black"></div></td>
                        </tr>
                        <tr>
                            <td class="py-3">Foreground</td>
                            <td><div class="h-5 w-5 rounded-full bg-black"></div></td>
                            <td><div class="border-muted h-5 w-5 rounded-full border bg-white"></div></td>
                        </tr>
                        <tr>
                            <td class="py-3">Surface</td>
                            <td><div class="bg-gray h-5 w-5 rounded-full"></div></td>
                            <td><div class="h-5 w-5 rounded-full bg-black"></div></td>
                        </tr>
                        <tr>
                            <td class="py-3">Text</td>
                            <td><div class="bg-text h-5 w-5 rounded-full"></div></td>
                            <td><div class="border-muted h-5 w-5 rounded-full border bg-white"></div></td>
                        </tr>
                        <tr>
                            <td class="py-3">Accent</td>
                            <td><div class="bg-green h-5 w-5 rounded-full"></div></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="py-3">Muted</td>
                            <td><div class="h-5 w-5 rounded-full bg-black"></div></td>
                            <td><div class="bg-muted h-5 w-5 rounded-full"></div></td>
                        </tr>
                        <tr>
                            <td class="py-3">Destructive</td>
                            <td><div class="bg-destructive h-5 w-5 rounded-full"></div></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="py-3">Success</td>
                            <td><div class="bg-success h-5 w-5 rounded-full"></div></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="py-3">Error</td>
                            <td><div class="bg-error h-5 w-5 rounded-full"></div></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="py-3">Warning</td>
                            <td><div class="bg-warning h-5 w-5 rounded-full"></div></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="py-3">Info</td>
                            <td><div class="bg-info h-5 w-5 rounded-full"></div></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <!-- End Color Palette Section -->
        </div>
    </AppLayout>
</template>
