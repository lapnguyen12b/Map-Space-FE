import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary-black': 'rgb(60, 72, 85)',
      'primary-blacker': 'rgb(45, 50, 54)',
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        raleway: ['var(--font-raleway)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        trace: "url('/img/footer-sec.jpg')",
        banner: 'url(/img/header-bg-home.jpg)',
        mapbanner: 'url(/img/map-banner.jpg)',
        leasebtn: 'url(/icon/btn-yellow.svg)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
export default config;
