import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from "../utils/constant";

const Header = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const user=useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
         
          const {uid,email,displayName,photoURL}= user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse");
         
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });
      //Unsubscribe when component unmounts
      return () => unsubscribe();
},[])

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
  {user && <div className="flex p-2">
      <img
        className="flex w-12 h-12"
        src={user.photoURL}
        alt="usericon"
      ></img>
      <button onClick={handleSignOut} className="font-bold text-white">
        (Signout)
      </button>
    </div>}
    </div>
  );
};

export default Header;
