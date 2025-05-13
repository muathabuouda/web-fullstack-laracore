<script setup lang="ts">
import { CardComponent, TextComponent } from '@/components/atoms';
import { IconComponent, LabelComponent } from '@/components/molecules';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
import { icons } from '@/components/molecules/display/icon/icons';
import { IconsMap } from '@/types/components/icon';

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
                            <strong>cstyle</strong>: Text Custom Style – <code>'title'</code>, <code>'head'</code>, <code>'subhead'</code>,
                            <code>'body'</code>, <code>'callout'</code>, <code>'small-callout'</code>, <code>'caption'</code>,
                            <code>'small-caption'</code>, default:
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
                <div class="mt-6 space-y-2">
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

            <!-- Start Card Component Section -->
            <section class="border-gray col-span-4 mt-8 rounded-xl border-1 p-8">
                <div class="text-head uppercase">Card Component</div>
                <div class="text-subhead">
                    The <code class="rounded bg-gray-100 px-1 py-0.5 text-sm">CardComponent</code> is a flexible container used to display content
                    with customizable padding, radius, shadow, and background color. It's designed for consistent layout and visual structure.
                </div>

                <hr class="mt-6 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">Props</div>
                <div class="space-y-2">
                    <h3 class="text-xl font-semibold">Props</h3>
                    <ul class="list-disc space-y-1 pl-5 text-sm text-gray-700">
                        <li>
                            <strong>border</strong>: Controls border radius – <code>'none'</code>, <code>'default'</code>, <code>'strong'</code>, –
                            default: <code>none</code>
                        </li>
                    </ul>
                </div>

                <hr class="mt-6 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">Usage Example</div>
                <div class="space-y-2">
                    <h3 class="text-xl font-semibold">Default Example</h3>
                    <div class="space-y-2 rounded border bg-gray-50 p-4 text-sm text-gray-800">
                        <p>&lt;CardComponent&gt;</p>
                        <p class="pl-4">&lt;TextComponent cstyle="subhead"&gt;Card Title&lt;/TextComponent&gt;</p>
                        <p class="pl-4">&lt;TextComponent color="muted"&gt;Card content goes here.&lt;/TextComponent&gt;</p>
                        <p>&lt;/CardComponent&gt;</p>
                    </div>
                    <!-- Live Preview -->
                    <div class="rounded border bg-white p-4">
                        <CardComponent>
                            <TextComponent size="lg" weight="semibold">Card Title</TextComponent>
                            <TextComponent size="base" color="muted">Card content goes here.</TextComponent>
                        </CardComponent>
                    </div>
                </div>
                <div class="mt-6 space-y-2">
                    <h3 class="text-xl font-semibold">Example With Border</h3>
                    <div class="space-y-2 rounded border bg-gray-50 p-4 text-sm text-gray-800">
                        <p>&lt;CardComponent <span class="text-info"> border="strong"</span>&gt;</p>
                        <p class="pl-4">&lt;TextComponent cstyle="subhead"&gt;Card Title&lt;/TextComponent&gt;</p>
                        <p class="pl-4">&lt;TextComponent color="muted"&gt;Card content goes here.&lt;/TextComponent&gt;</p>
                        <p>&lt;/CardComponent&gt;</p>
                    </div>
                    <!-- Live Preview -->
                    <div class="rounded border bg-white p-4">
                        <CardComponent border="strong">
                            <TextComponent cstyle="subhead">Card Title</TextComponent>
                            <TextComponent color="muted">Card content goes here.</TextComponent>
                        </CardComponent>
                    </div>
                </div>
            </section>
            <!-- End Card Component Section -->

            <!-- Start Label Component Section -->
            <section class="border-gray col-span-4 mt-8 rounded-xl border-1 p-8">
                <div class="text-head uppercase">Label Component</div>
                <div class="text-subhead">
                    The <code class="rounded bg-gray-100 px-1 py-0.5 text-sm">LabelComponent</code> is used to identify form fields or UI elements
                    with consistent styling. It supports customization for text size, color, and alignment, and handles required or error states for
                    accessibility and clarity.
                </div>

                <hr class="mt-6 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">Props</div>
                <div class="space-y-2">
                    <h3 class="text-xl font-semibold">Props</h3>
                    <ul class="list-disc space-y-1 pl-5 text-sm text-gray-700">
                        <li><strong>for</strong>: The <code>id</code> of the form field this label is associated with – required</li>
                        <li>
                            <strong>align</strong>: Text alignment – <code>'left'</code>, <code>'center'</code>, <code>'right'</code>,
                            <code>'justify'</code> – default: <code>left</code>
                        </li>
                    </ul>
                </div>
                <hr class="mt-6 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">Usage Example</div>
                <div class="space-y-2">
                    <h3 class="text-xl font-semibold">Default Example</h3>
                    <div class="space-y-2 rounded border bg-gray-50 p-4 text-sm text-gray-800">
                        <p>&lt;LabelComponent for="email" align="left"&gt;</p>
                        <p class="pl-4">Email Label</p>
                        <p>&lt;/LabelComponent&gt;</p>
                        <p>&lt;Input id="email" type="email" required :tabindex="2" autocomplete="email" placeholder="email@example.com"&gt;</p>
                    </div>
                    <!-- Live Preview -->
                    <div class="rounded border bg-white p-4">
                        <LabelComponent for="email" align="left">Email Label</LabelComponent>
                        <Input id="email" type="email" required :tabindex="2" autocomplete="email" placeholder="email@example.com" />
                    </div>
                </div>
            </section>
            <!-- End Label Component Section -->

            <!-- Start Icon Component Section -->
            <section class="border-gray col-span-4 mt-8 rounded-xl border-1 p-8">
                <div class="text-head uppercase">Icon Component</div>
                <div class="text-subhead">
                    The <code class="rounded bg-gray-100 px-1 py-0.5 text-sm">IconComponent</code> dynamically renders SVG icons based on a provided
                    name, variant, and subvariant. It supports tree-shaking by loading only the used icons at runtime using
                    <code>defineAsyncComponent</code>.
                </div>

                <hr class="mt-6 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">Props</div>
                <div class="space-y-2">
                    <h3 class="text-xl font-semibold">Props</h3>
                    <ul class="list-disc space-y-1 pl-5 text-sm text-gray-700">
                        <li><strong>name</strong>: Icon name (e.g., <code>'user'</code>, <code>'home'</code>) – required</li>
                        <li>
                            <strong>variant</strong>: Icon variant (e.g., <code>'regular'</code>, <code>'bold'</code>) – default:
                            <code>'regular'</code>
                        </li>
                        <li>
                            <strong>subvariant</strong>: Sub-style of the icon (e.g., <code>'broken'</code>, <code>'solid'</code>) – default:
                            <code>'solid'</code>
                        </li>
                        <li><strong>class</strong>: Custom classes to style size, color, etc. – optional</li>
                    </ul>
                </div>

                <hr class="mt-6 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">Usage Example</div>
                <div class="space-y-2">
                    <h3 class="text-xl font-semibold">Default Example</h3>
                    <div class="space-y-2 rounded border bg-gray-50 p-4 text-sm text-gray-800">
                        <p>&lt;IconComponent name="add" variant="regular" subvariant="broken" class="fill-primary h-6 w-6" /&gt;</p>
                    </div>
                    <!-- Live Preview -->
                    <div class="rounded border bg-white p-4">
                        <IconComponent name="add" variant="regular" subvariant="broken" class="fill-primary h-6 w-6" />
                    </div>
                </div>
                <hr class="mt-6 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">Available Icons</div>
                <div class="gap-base grid grid-cols-8">               
                    <div v-for="(icon, key) in icons" class="bg-gray p-lg h-fit">
                        <div class="mb-sm flex justify-end">
                            <IconComponent :name="key" variant="regular" subvariant="broken" class="h-xl w-xl" />
                        </div>
                        <TextComponent class="mb-0"> {{ key }} </TextComponent>
                    </div>
                </div>
            </section>
            <!-- End Icon Component Section -->
        </div>
    </AppLayout>
</template>
