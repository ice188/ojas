/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';

module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}', 
    './src/components/**/*.{ts,tsx}', 
    './src/layout.tsx', 
    './src/pages/**/*.{ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nurrito)'],
      },
    },
  },
  plugins: [
    
    forms
  ],
}