<script setup lang="ts">
import { CardComponent, TextComponent } from '@/components/atoms';
import { BadgeComponent, IconComponent, ImageComponent, LabelComponent } from '@/components/molecules';
import { icons } from '@/components/molecules/display/icon/icons';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';

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
                    <div v-for="(icon, key) in icons" :key="key" class="bg-gray p-lg h-fit">
                        <div class="mb-sm flex justify-end">
                            <IconComponent :name="key" variant="regular" subvariant="broken" class="h-xl w-xl" />
                        </div>
                        <TextComponent class="mb-0"> {{ key }} </TextComponent>
                    </div>
                </div>
            </section>
            <!-- End Icon Component Section -->

            <!-- Start Badge Component Section -->
            <section class="border-gray col-span-4 mt-8 rounded-xl border-1 p-8">
                <div class="text-head uppercase">Badge Component</div>
                <div class="text-subhead">
                    The <code class="rounded bg-gray-100 px-1 py-0.5 text-sm">Badge</code> component is used to display status indicators or
                    contextual labels. It supports different <code>status</code> values that automatically apply suitable background and text colors.
                    You can use it with plain text, icons, or both.
                </div>

                <hr class="mt-6 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">Props</div>
                <div class="space-y-2">
                    <h3 class="text-xl font-semibold">Props</h3>
                    <ul class="list-disc space-y-1 pl-5 text-sm text-gray-700">
                        <li><strong>text</strong>: Optional text to be displayed inside the badge</li>
                        <li>
                            <strong>status</strong>: Controls background and text color. Acceptable values: <code>'Primary'</code>,
                            <code>'Secondary'</code>, <code>'Success'</code>, <code>'Info'</code>, <code>'Warning'</code>, <code>'Destructive'</code>,
                            <code>'Accent'</code>, <code>'Muted'</code> – default: <code>'info'</code>
                        </li>
                    </ul>
                </div>

                <hr class="mt-6 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">Usage Example</div>
                <div class="space-y-4">
                    <div>
                        <h3 class="text-xl font-semibold">Full Badge</h3>
                        <div class="space-y-2 rounded border bg-gray-50 p-4 text-sm text-gray-800">
                            <p>import { IconComponent } from '@/components/molecules';</p>
                            <br />
                            <p>&lt;BadgeComponent icon="category" text="Primary" status="primary" /&gt;</p>
                            <p>&lt;BadgeComponent icon="chart-line" text="Secondary" status="secondary" /&gt;</p>
                            <p>&lt;BadgeComponent icon="done-square" text="Success" status="success" /&gt;</p>
                            <p>&lt;BadgeComponent icon="edit-box" text="Info" status="info" /&gt;</p>
                            <p>&lt;BadgeComponent icon="info-sequare" text="Warning" status="warning" /&gt;</p>
                            <p>&lt;BadgeComponent icon="trash" text="Destructive" status="destructive" /&gt;</p>
                            <p>&lt;BadgeComponent icon="message" text="Accent" status="accent" /&gt;</p>
                            <p>&lt;BadgeComponent icon="message" text="Muted" status="muted" /&gt;</p>
                        </div>
                        <div class="space-x-base rounded border bg-white p-4">
                            <BadgeComponent icon="category" text="Primary" status="primary" />
                            <BadgeComponent icon="chart-line" text="Secondary" status="secondary" />
                            <BadgeComponent icon="done-square" text="Success" status="success" />
                            <BadgeComponent icon="edit-box" text="Info" status="info" />
                            <BadgeComponent icon="info-sequare" text="Warning" status="warning" />
                            <BadgeComponent icon="trash" text="Destructive" status="destructive" />
                            <BadgeComponent icon="message" text="Accent" status="accent" />
                            <BadgeComponent icon="message" text="Muted" status="muted" />
                        </div>
                    </div>

                    <div>
                        <h3 class="text-xl font-semibold">Text Badge</h3>
                        <div class="space-y-2 rounded border bg-gray-50 p-4 text-sm text-gray-800">
                            <p>import { IconComponent } from '@/components/molecules';</p>
                            <br />
                            <p>&lt;BadgeComponent text="Primary" status="primary" /&gt;</p>
                            <p>&lt;BadgeComponent text="Secondary" status="secondary" /&gt;</p>
                            <p>&lt;BadgeComponent text="Success" status="success" /&gt;</p>
                            <p>&lt;BadgeComponent text="Info" status="info" /&gt;</p>
                            <p>&lt;BadgeComponent text="Warning" status="warning" /&gt;</p>
                            <p>&lt;BadgeComponent text="Destructive" status="destructive" /&gt;</p>
                            <p>&lt;BadgeComponent text="Accent" status="accent" /&gt;</p>
                            <p>&lt;BadgeComponent text="Muted" status="muted" /&gt;</p>
                        </div>
                        <div class="space-x-base rounded border bg-white p-4">
                            <BadgeComponent text="Primary" status="primary" />
                            <BadgeComponent text="Secondary" status="secondary" />
                            <BadgeComponent text="Success" status="success" />
                            <BadgeComponent text="Info" status="info" />
                            <BadgeComponent text="Warning" status="warning" />
                            <BadgeComponent text="Destructive" status="destructive" />
                            <BadgeComponent text="Accent" status="accent" />
                            <BadgeComponent text="Muted" status="muted" />
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold">Icon Badge</h3>
                        <div class="space-y-2 rounded border bg-gray-50 p-4 text-sm text-gray-800">
                            <p>import { IconComponent } from '@/components/molecules';</p>
                            <br />
                            <p>&lt;BadgeComponent icon="category" status="primary" /&gt;</p>
                            <p>&lt;BadgeComponent icon="chart-line" status="secondary" /&gt;</p>
                            <p>&lt;BadgeComponent icon="done-square" status="success" /&gt;</p>
                            <p>&lt;BadgeComponent icon="edit-box" status="info" /&gt;</p>
                            <p>&lt;BadgeComponent icon="info-sequare" status="warning" /&gt;</p>
                            <p>&lt;BadgeComponent icon="trash" status="destructive" /&gt;</p>
                            <p>&lt;BadgeComponent icon="message" status="accent" /&gt;</p>
                            <p>&lt;BadgeComponent icon="message" status="muted" /&gt;</p>
                        </div>
                        <div class="space-x-base rounded border bg-white p-4">
                            <BadgeComponent icon="category" status="primary" />
                            <BadgeComponent icon="chart-line" status="secondary" />
                            <BadgeComponent icon="done-square" status="success" />
                            <BadgeComponent icon="edit-box" status="info" />
                            <BadgeComponent icon="info-sequare" status="warning" />
                            <BadgeComponent icon="trash" status="destructive" />
                            <BadgeComponent icon="message" status="accent" />
                            <BadgeComponent icon="message" status="muted" />
                        </div>
                    </div>

                    <div>
                        <h3 class="text-xl font-semibold">Empty Badge</h3>
                        <div class="space-y-2 rounded border bg-gray-50 p-4 text-sm text-gray-800">
                            <p>import { IconComponent } from '@/components/molecules';</p>
                            <br />
                            <p>&lt;BadgeComponent/&gt;</p>
                        </div>
                        <div class="space-x-base rounded border bg-white p-4">
                            <BadgeComponent />
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Badge Component Section -->

            <!-- Start Image Component Section -->
            <section class="border-gray col-span-4 mt-8 rounded-xl border-1 p-8">
                <div class="text-head uppercase">Image Component</div>
                <div class="text-subhead">
                    The <code class="rounded bg-gray-100 px-1 py-0.5 text-sm">ImageComponent</code> is a responsive image display component. It fills
                    the container it’s placed in, automatically adjusts to its size, and supports a loading state with a pulsing animation to improve
                    user experience. Optional props include rounded display and loading color.
                </div>

                <hr class="mt-6 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">Props</div>
                <div class="space-y-2">
                    <h3 class="text-xl font-semibold">Props</h3>
                    <ul class="list-disc space-y-1 pl-5 text-sm text-gray-700">
                        <li><strong>src</strong>: <span class="italic">required</span> – the image source URL.</li>
                        <li><strong>alt</strong>: Optional alternative text for accessibility.</li>
                        <li><strong>title</strong>: Optional title that appears on hover and improves SEO.</li>
                        <li><strong>classes</strong>: Optional custom classes to apply directly to the image element.</li>
                    </ul>
                </div>

                <hr class="mt-6 mb-2" />
                <div class="text-callout mb-4 uppercase opacity-50">Usage Example</div>
                <div class="space-y-4">
                    <div>
                        <h3 class="text-xl font-semibold">Default Image</h3>
                        <div class="space-y-2 rounded border bg-gray-50 p-4 text-sm text-gray-800">
                            <p>
                                &lt;ImageComponent src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsbmTZu_uMrmJ0z--CrG-o1UIXytu1OCizQ&s"
                                alt="Sample" title="Avatar Image" classes="h-5xl w-5xl"&gt;
                            </p>
                        </div>
                        <ImageComponent
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsbmTZu_uMrmJ0z--CrG-o1UIXytu1OCizQ&s"
                            alt="Sample"
                            title="Bird Image"
                            classes="h-5xl w-5xl"
                        />
                    </div>

                    <div>
                        <h3 class="text-xl font-semibold">Avatar Image</h3>
                        <div class="space-y-2 rounded border bg-gray-50 p-4 text-sm text-gray-800">
                            <p>
                                &lt;ImageComponent src="/storage/assets/images/people.jpg" alt="Avatar Image" title="Avatar Image" classes="h-5xl
                                w-5xl rounded-full"/&gt;
                            </p>
                        </div>
                        <ImageComponent
                            src="/storage/assets/images/people.jpg"
                            alt="Avatar Image"
                            title="Avatar Image"
                            classes="h-5xl w-5xl rounded-full"
                        />
                    </div>
                </div>
            </section>
            <!-- End Image Component Section -->
        </div>
    </AppLayout>
</template>
