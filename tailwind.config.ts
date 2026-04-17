import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // This line below ensures your multi-tenant pages are styled!
    "./src/app/sites/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
theme: {
  extend: {
    typography: {
      DEFAULT: {
        css: {
          color: '#000000', // Forces p tags to black
          maxWidth: 'none',
          h1: { color: '#000000' },
          h2: { color: '#000000' },
          h3: { color: '#000000' },
          h4: { color: '#000000' },
          strong: { color: '#000000' },
          b: { color: '#000000' },
          li: { color: '#000000' },
          'ul > li::marker': { color: '#000000' }, // Even the bullet points
          'ol > li::marker': { color: '#000000' }, // Even the numbers
          blockquote: { color: '#000000', borderLeftColor: '#000000' },
        },
      },
    },
  },
},
  plugins: [require('@tailwindcss/typography')],
};
export default config;