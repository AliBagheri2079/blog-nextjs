import shadcnPlugin from './lib/shadcn/tw-plugin';
import animatePlugin from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  plugins: [shadcnPlugin, animatePlugin],
};

export default config;
