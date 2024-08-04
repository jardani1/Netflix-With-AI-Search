import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,signInAnonymously
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

import { photoURL } from "../utils/constants";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setrrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch();

  const guestLogin =()=>{
    signInAnonymously(auth)
  .then(() => {
    // Signed in..
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
  }

  const handelButtonClick = () => {
    // console.log(email.current.value);
    // vailidate the data
    const message = checkValidData(email.current.value, password.current.value);
    // console.log(message);
    setrrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // write the sign up code

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user)

          // after i have have signed in ill update the the profile to diplay the name...
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: photoURL,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser; // we use auth.currentUser not user as we want the updated profile value

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayname: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setrrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setrrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      // write the sign in code
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setrrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/10f8d166-7c8c-499a-b16f-57c3740cdeae/IN-en-20240624-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Backgroung"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-black opacity-95 border-2 border-white"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-black opacity-95 border-2 border-white"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-black opacity-95 border-2 border-white"
        ></input>
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-3 bg-red-700 w-full rounded-lg"
          onClick={handelButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <button
          className="p-2 my-1 bg-red-700 w-32 ml-20 rounded-lg bold font-bold"
          onClick={guestLogin}
        >
          GUEST LOG-IN
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInform}>
          {" "}
          {isSignInForm
            ? "New User? Sign Up"
            : "Account is already Registred! Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
