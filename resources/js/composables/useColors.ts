import { ref, onMounted } from 'vue';

export function useColors() {
  const colors = ref<Record<string, string>>({});

  const colorKeys = [
    '--color-primary',
    '--color-secondary',
    '--color-background',
    '--color-foreground',
    '--color-surface',
    '--color-text',
    '--color-muted',
    '--color-accent',
    '--color-success',
    '--color-error',
    '--color-destructive',
    '--color-warning',
    '--color-info',
    '--color-green',
    '--color-red',
    '--color-black',
    '--color-white',
    '--color-gray',
    '--color-yallow',
    '--color-blue',
    '--color-orange',
  ];

  function hexToRgb(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  }

  function rgbToHex(r: number, g: number, b: number) {
    const toHex = (n: { toString: (arg0: number) => string; }) => n.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  function mixColors(color1: string, color2: string, percentage: number) {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);

    const r = Math.round(rgb1.r * percentage + rgb2.r * (1 - percentage));
    const g = Math.round(rgb1.g * percentage + rgb2.g * (1 - percentage));
    const b = Math.round(rgb1.b * percentage + rgb2.b * (1 - percentage));

    return rgbToHex(r, g, b);
  }

  onMounted(() => {
    const styles = getComputedStyle(document.documentElement);
    const result: Record<string, string> = {};

    colorKeys.forEach((key) => {
      const formatted = key.replace('--color-', '');
      let colorValue = styles.getPropertyValue(key).trim();

      if (colorValue.includes('color-mix')) {
        const match = colorValue.match(/color-mix\(in srgb, ([^ ]+) (\d+)%?, transparent\)/);
        if (match) {
          const baseColor = match[1];
          const percentage = parseInt(match[2]) / 100;
          colorValue = mixColors(baseColor, '#ffffff', percentage);
        }
      }

      const colorName = formatted.replace('brand-', '');

      result[colorName] = colorValue;
    });

    colors.value = result;
  });

  return {
    colors,
  };
}
