/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gray-50': '#f9fafb',
        'gray-100': '#f2f4f7',
        'gray-200': '#eaecf0',
        'gray-300': '#d0d5dd',
        'gray-600': '#475467',
        'gray-700': '#344054',
        'gray-900': '#101828',
        'primary-50': '#f9f5ff',
        'primary-100': '#f4ebff',
        'primary-600': '#7f56d9',
        'primary-700': '#FF77EF',
      },
      boxShadow: {
        'header': '0px 4px 4px rgba(0, 0, 0, 0.25);',
        'xs': '0px 1px 2px rgba(16, 24, 40, 0.05);',
      },
      fontFamily: {
        'Balgin': 'Balgin',
        'Balgin-Expanded': 'Balgin Expanded'
      }
    },
  },
  plugins: [],
}
