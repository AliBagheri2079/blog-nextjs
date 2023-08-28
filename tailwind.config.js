import animatePlugin from 'tailwindcss-animate';
import shadcnPlugin from './lib/plugin/shadcn.plugin';

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
