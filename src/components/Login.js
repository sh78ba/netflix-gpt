import React, { useRef, useState } from 'react'
import Header from './Header'
import bgimage from "../bgimage.png"
import { checkValidData } from '../utils/Validate';

import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';



const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const [errorMessage,setErrorMessage]=useState(null);


   const dispatch=useDispatch();

    const toogleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick=()=>{
       

        //validate form data;
       const message= checkValidData(email.current.value,password.current.value);
       setErrorMessage(message);
        if(message)return;
        if(!isSignInForm){
            //sign up logic
   createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
        displayName:name.current.value,photoURL:"https://avatars.githubusercontent.com/u/110539009?s=40&v=4"
      }).then(() => {
        const {uid,email,displayName,photoURL}=auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        console.log(user);
      }).catch((error) => {
        setErrorMessage(error.message)
      });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+''+errorMessage);
    // ..
  });
        }else{
 // Signed in 
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
   
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+''+errorMessage);
  });
        }
        
    }

  return (
    <div>
        <Header/>
       <div className='absolute'>
       <img src={bgimage} alt='bgimage'></img>
       </div>
       <form onSubmit={(e)=>e.preventDefault()} className='absolute w-3/12 p-12 bg-black bg my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
    <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
      {!isSignInForm&&( <input ref={name} type='text' placeholder='Full Name' className='my-4 p-4 w-full bg-gray-700 outline-none'/>)

      }
        <input type='email' ref={email} placeholder='Email Address' className='my-4 p-4 w-full bg-gray-700 outline-none'/>
        <input type='password' ref={password} placeholder='Password' className='my-4 p-4 w-full bg-gray-700 outline-none'/>
        {errorMessage && (
                    <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                )}
        <button onClick={handleButtonClick}  className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up" }</button>
        <p className='p-4 cursor-pointer' onClick={toogleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already Had Account? Sign In"}</p>
       </form>
    </div>
  )
}

export default Login