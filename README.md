# install React + Vite and Tailwind.css 

## Installation
```
npm create vite@latest client
cd client
```

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## tailwindcss
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## index.jsx
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## App.js
```
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

```
npm run dev
```



## working on pages and routes