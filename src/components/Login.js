import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setSignInForm]=useState(true);
  const toggleSignInForm = () =>{
      setSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute'> 
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg' alt='logo'/>
      </div>
      <form className='absolute bg-black p-12 w-3/12 my-36 mx-auto left-0 right-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4' >{isSignInForm ? "Sign In":"Sign Up"}</h1>
        {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700'/>)}
        <input type='text' placeholder='Email Address' className='p-2 my-2 w-full bg-gray-700'/>
        <input type='password' placeholder='Password' className='p-2 my-2 w-full  bg-gray-700'/>
        <button className='p-2 my-4 bg-red-700 w-full rounded-lg cursor-pointer'>{isSignInForm ? "Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already registered? Sign In Now"}</p>
      </form>
      </div>
  )
}

export default Login