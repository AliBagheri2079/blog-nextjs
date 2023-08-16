import shadcnPlugin from './lib/shadcn/tw-plugin';
import animatePlugin from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  plugins: [shadcnPlugin, animatePlugin],
};

module.exports = tailwindConfig;
