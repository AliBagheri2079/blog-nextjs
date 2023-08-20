import shadcnPlugin from './lib/shadcn/tw-plugin';
import animatePlugin from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    './features/**/*.{js,jsx}',
    './layout/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  plugins: [shadcnPlugin, animatePlugin],
};

module.exports = tailwindConfig;
