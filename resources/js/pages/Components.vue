<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
import { TextComponent } from '@/components/atoms';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Components Library',
        href: '/components-library',
    },
];
</script>

<template>
    <Head title="Components Library" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="grid h-fit w-full grid-cols-4 gap-4 px-8">
            <!-- Start Text Component Section -->
            <section class="border-gray col-span-4 mt-8 rounded-xl border-1 p-8">
                <div class="text-head uppercase">Text Component</div>
                <div class="text-subhead">
                    The <code class="rounded bg-gray-100 px-1 py-0.5 text-sm">TextComponent</code> is a flexible and reusable element for displaying
                    text with consistent styling. It supports multiple tags, sizes, weights, alignments, and integrates seamlessly with your color
                    system.
                </div>
                <hr class="mt-6 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">Props</div>
                <div class="space-y-2">
                    <h3 class="text-xl font-semibold">Props</h3>
                    <ul class="list-disc space-y-1 pl-5 text-sm text-gray-700">
                        <li>
                            <strong>tag</strong>: HTML tag to render (e.g. <code>p</code>, <code>h1</code>, <code>span</code>) – default:
                            <code>p</code>
                        </li>
                        <li><strong>size</strong>: Text size – <code>'xs'</code> to <code>'4xl'</code> – default: <code>base</code></li>
                        <li>
                            <strong>cstyle</strong>: Text Custom Style – <code>'title'</code>, <code>'head'</code>, <code>'subhead'</code>, <code>'body'</code>, <code>'callout'</code>, <code>'small-callout'</code>, <code>'caption'</code>, <code>'small-caption'</code>, default:
                            <code>body</code>
                        </li>
                        <li>
                            <strong>weight</strong>: Font weight – <code>'normal'</code>, <code>'bold'</code>, etc. – default: <code>normal</code>
                        </li>
                        <li>
                            <strong>align</strong>: Text alignment – <code>'left'</code>, <code>'center'</code>, <code>'right'</code>,
                            <code>'justify'</code> – default: <code>left</code>
                        </li>
                        <li><strong>color</strong>: Color key (from CSS variables) – default: <code>text</code></li>
                    </ul>
                </div>
                <hr class="mt-6 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">Usage Example</div>
                <div class="space-y-2">
                    <h3 class="text-xl font-semibold">Default Example</h3>
                    <div class="space-y-2 rounded border bg-gray-50 p-4 text-sm text-gray-800">
                        <p>&lt;TextComponent tag="h1" size="xl" weight="bold" color="black" align="left"&gt;</p>
                        <p class="pl-4">Welcome to Our Platform</p>
                        <p>&lt;/TextComponent&gt;</p>
                    </div>
                    <!-- Live Preview -->
                    <div class="rounded border bg-white p-4">
                        <TextComponent tag="h1" size="xl" weight="bold" color="black" align="left"> Welcome to Our Platform </TextComponent>
                        <TextComponent tag="p" size="base" color="muted">
                            This is a paragraph explaining how the component works within the system.
                        </TextComponent>
                    </div>
                </div>
                <div class="space-y-2 mt-6">
                    <h3 class="text-xl font-semibold">Example Using A Predefined Custom Style</h3>
                    <div class="space-y-2 rounded border bg-gray-50 p-4 text-sm text-gray-800">
                        <p>&lt;TextComponent tag="h1" <span class="text-info">cstyle="title"</span> color="red" align="left"&gt;</p>
                        <p class="pl-4">Title Platform</p>
                        <p>&lt;/TextComponent&gt;</p>
                    </div>
                    <!-- Live Preview -->
                    <div class="rounded border bg-white p-4">
                        <TextComponent tag="h1" cstyle="title" color="info" align="left"> Title Platform </TextComponent>
                        <TextComponent tag="p" size="base" color="muted">
                            This is a custom style explaining how the component works within the system.
                        </TextComponent>
                    </div>
                </div>
            </section>
            <!-- End Text Component Section -->
        </div>
    </AppLayout>
</template>
