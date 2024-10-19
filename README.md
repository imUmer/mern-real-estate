
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

creating pages like Home, About, Signin etc

## Create Header Component
using React-router-dom lib to create dynamic routing between pages
created header component

## Connecting Database
install mongoose and setup the db
created .env file, setup connection string there

## creating model

```
import mongoose, { Schema } from 'mongoose'

const <name-schema> = new Schema({
    <attribute>: {
        <type>: <datatype>,
    },
    .
    .
    .
}, {timestamps: true});

const <model-name> = mongoose.model('<model-name>', <model-name>);

export default <model-name>;

```
## create and test API

create model and controller seperately in api folder

## creating signup api route


