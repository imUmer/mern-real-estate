
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
- npm i @reduxjs/toolkit react-redux
- client -> redux -> store.js
- main.js ->  
- client -> redux -> -> user -> userSlice.js
- useDispatch in Signin.js
- use redux toolkit and redux

## Redux persist + hold up date after refreshing the page 
- npm i redux-persist
- store.js - make persistConfig etc
- main.js PersistGate - persistor 

## Google OAuth functionality
- OAuth button component
- Firebase account 
- conneted firebase with webapp
- add redux in OAuth.js
- api/routes/auth.route.js - add route for google in Back-End
- api/controllers/auth.controller.js - add controller for google in Back-End

## User profile in Header and private mode
- src -> components -> Header.js
- create PrivateRoute component   
- create profile page 
- handle redirect to sign-in when user is loged-out  

## User profile Ui
- src -> pages -> Profile.jsx
- Complete the profile page

## Work on uploading image to profile
- make image cliclable to change image using useRef hook
- firebase storage
- maake uplaod image function
  
## Work on update user info in profile
- user.controller.js
- user.route.js
- cookie-parser
- create verifyUser.js

## Work on update user info in profile
- Pages -> Profile.jsx update feature 
- add updateUser functions in redux 
- user.route.js
- userRouter index.js

## Work on delete user 
- user.routes.js
- Profile.jsx 
- delete user profile
- delete cookie data in user.controller.js

## Work on signout user
- sign out in Profile.jsx 
- auth.routes.js make route for sign out
- auth.controller.js to make controller for sign out
- add redux functions 