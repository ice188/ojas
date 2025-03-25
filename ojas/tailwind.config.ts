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
       lato: ["Lato", "sans-serif"],
       noto: ["Noto Sans", "sans-serif"],
       playfair: ["Playfair Display", "serif"],
       salsa: ["Salsa", "serif"],
       montserrat: ["Montserrat", "sans-serif"],
       lora: ["Lora", "serif"],
       charm: ["Charm", "sans-serif"],
       viaoda: ["Viaoda Libre", "serif"],
       
      },
    },
  },
  plugins: [
    
    forms
  ],
}