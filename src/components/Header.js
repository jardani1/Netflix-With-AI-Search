import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { Logo, SUPPORTED_LANGUAGES } from "../utils/constants";

import { useState } from "react";

const Header = () => {
  const [marginValue, setmarginValue] = useState("mt-20");

  const user = useSelector((store) => store.user);
  // console.log(user);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handelSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  // we outh to put this code in a comonent which is always there when the wesite loads so header s that as we need aur authcahnge event listner to be always on the website thats why earlier we were searching for the root component
  useEffect(() => {
    // we have used useEffect because we only want this kind of eventlistner to setup only once after render to listen
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      //  onAuthStateChanged it is kind of eventlistner that will works on sign in and sign out
      if (user) {
        //sign in

        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayname: displayName,
            photoURL: photoURL,
          })
        );

        // console.log("Login Detected");
        navigate("/browse"); // as soon as the user signs in i want to take him to the another page in the website so we use this hook
      } else {
        // sign out
        dispatch(removeUser());
        // console.log("LogOUT Detected");
        navigate("/");
        //  the authchange always checks for the the auth vhange so you cannot directly to the browse page with the change in the url and go back to the login page it constany checks for the authchange  and moves to the desired page
      }
    });

    // unsuscribe when the componets unmounts we do this bacue in the app the header component will be loaded a lot and so the use effect will mount the component on every render so there is a need to unmount this as it is a event listner so we unsuscribe this

    return () => unsuscribe();
  }, []);

  const handleGptSeachClick = () => {
    dispatch(toggleGptSearchView());
    if (marginValue === "mt-20") {
      setmarginValue("mt-0");
    } else {
      setmarginValue("mt-20");
    }
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div
      className={`absolute w-screen bg-gradient-to-b from-black z-40 flex justify-between ${marginValue}`}
    >
    <div className=" bg-black w-screen mx-auto text-center py-7  text-red-600 absolute z-30 -mt-[5rem]">
        <p className="text-2xl">
          Disclaimer: This project is for educational purposes only and was built to learn web development with React. It is not affiliated with Netflix.
        </p>
      </div>
      <img className="w-44" src={Logo} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-black text-red-600 rounded-lg"
            onClick={handleGptSeachClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img className="w-12 h-12 rounded-lg" alt="logos" src={AVATAR} />
          <button onClick={handelSignout} className="font-bold text-white">
            Sign Out
          </button>
        </div>)}

    </div>
  );
};

export default Header;
