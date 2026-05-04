/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: '#252222',
        darker: '#171515',
        ashes: '#C0C8D1',
        'ashes-light': '#D2DAE3',
        'ashes-dark': '#8597A7',
        accent: '#8597A7',
        'accent-light': '#C0C8D1',
        'accent-dark': '#576876',
        charcoal: '#576876',
        bark: '#3D3E44',
        gold: '#8597A7',
        gray: {
          850: '#2B2C31',
          900: '#1D1A1A',
          950: '#171515',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
