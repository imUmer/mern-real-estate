
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

## work on pages and routes

create pages folder and create pages 
- Home 
- About 
- Signin etc

## Create Header Component
using React-router-dom lib to create dynamic routing between pages
created header component

## Connecting Database
install mongoose and setup the db
created .env file, setup connection string there

## create model

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

## create signup api route

create signup and routes for it.
- index.js 
- auth.route.js
- auth.controller.js


## create middleware and function to handle possible error

- index.js 
- auth.route.js
- auth.controller.js 
- errorHandler
- utils -> error.js

## work on Sign up UI 

- pages -> Signup.js

## work on Sign up functionality

- pages -> Signup.js
- make server proxy in vite.config
- add data to mongodb and handle error 
- loading while data added to db 

## work on Sign in functionality and route and hide feature

### Route
- pages -> Signin.js
- api -> controllers -> auth.controller.js - for email password validation 
- env - path to T
- api -> routes -> auth.routes.js - added route for signin
- auth.controller.js ...rest to hide the password - 

### Functionality
- pages -> Signin.js just as Signup.js

# Redux Toolkit

## redux store
- client -> redux -> store.js
- main.js ->  
- client -> redux -> -> user -> userSlice.js
- useDispatch in Signin.js
- use redux toolkit and redux
