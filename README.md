﻿# React


npm create vite@latest


Tailwind

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p


https://tailwindcss.com/docs/guides/vite


In Tailwind.config:

content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],



in Css:
@tailwind base;
@tailwind components;
@tailwind utilities;
