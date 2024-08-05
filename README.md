
# Netflix GPT

I developed Netflix-GPT Built In React Js, leveraging OpenAI for interactive movie suggestions. Users can log in via Firebase, access features such as movie details, and have created a huge redux-store for allover state management.

# Use a VPN As the TMDB Movie Api doesnt work in india but working on some of the ISP instead of jio
Live Demo : [Live Demo](https://netflix-with-ai-search-le8bcjwkd-sumukh-srivastavas-projects.vercel.app/ "Live Demo")

## Screen Shot


- Signin Page

  ![Signin Page](https://github.com/jardani1/Netflix-With-AI-Search/blob/main/src/Screenshot%202024-08-05%20155034.png)

- Signup Page

  ![Signup Page](https://github.com/jardani1/Netflix-With-AI-Search/blob/main/src/Screenshot%202024-08-05%20160122.png)

- Browse Page

  ![Browse Page](https://github.com/jardani1/Netflix-With-AI-Search/blob/main/src/Screenshot%202024-08-05%20160809.png)

- Open AI Search

  ![Search Page](https://github.com/jardani1/Netflix-With-AI-Search/blob/main/src/Screenshot%202024-08-05%20155019.png)
## Setup

- Install react app using create-react-app (CRA)

```js
npx create-react-app netflix-gpt
```

- Create `.env` file and put configure

```js
REACT_APP_BASE_URL = YOUR_APPLICATION_BASE_URL; // http://localhost:300
REACT_APP_OPENAI_KEY = YOUR_API_KEY_WILL_HERE;
REACT_APP_TMDB_KEY = YOUR_API_KEY_WILL_HERE;
```

- Install and init tailwind css

```js
npm install -D tailwindcss
npx tailwindcss init
```

- Configure tailwind css in your project

  `npx tailwindcss init` command will create a file `tailwind.config.js` in your project's root directory.
  Open `tailwind.config.js` and replace all content with below code.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Now you created a react app with tailwind css successfully. Now run the below command on your terminal to start your local development server.

```js
npm start
```

## Features

- Home Page (is user !authorised)

  - Signin/Signup Page
    - SignInForm / SignUpForm

- Browse Page

  - Navbar
  - Showcase
  - Trendings
  - MoviesSuggestion
    - MoviesList \* N

- NetflixGPT
  - Search
  - MoviesSuggestion






create creact app from terminal 

- tailwind install
- header
- routing of application
- login form
- signup form
- form validation - regex
- use ref hook
- firebase setup
- Deploying our app to production
- Create SignUp User Account using the createUserWithEmailAndPassword api firebase
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile api of fire base is implemmented and updated the store with the new values like diplay and photo
- moved the authchange to header
- bug fix signup user displayName nad profile picture updated
- bug fix - if the user not logged in redirect browse page to login page and vice versa
- Unsubscribed to onAuthStateChanged callback
- add hardcoded const values to the urls
- git hub push - new repo
- we will fetch movie data from tmdb api / tmdn username -> sumukh1
- custm hook for now playing movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContainer And secoundry container
- fetch data fot the Trailer video and filterng the video from the array
- Update the store with trailer video
- Embedded the youtube video and make it autoplay and mute
- Tailwind Classes to make main container look awesome

Build Movie List
build Movie Card
TMDB Image CDN URL
Made the Browsre page amazing with Tailwind CSS
usePopularMovies Custom hook


# we will have to install npm openai library to get helperfunction which will help us to mak api calls easily / tailwind / react router dom , redux - 2 things in that
