import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '375px',

      md: '768px',

      lg: '1440px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        '3xl':
          '0 12px 26px 0 rgba(230, 230, 230, 0.1), 0 48px 48px 0 rgba(230, 230, 230, 0.09), 0 107px 64px 0 rgba(230, 230, 230, 0.05), 0 191px 76px 0 rgba(230, 230, 230, 0.01), 0 299px 84px 0 rgba(230, 230, 230, 0)',
      },
    },
  },
  plugins: [],
};
export default config;
