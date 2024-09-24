import React, { useState } from 'react'
import Header from './Header'
import bgimage from "../bgimage.png"

const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);
    const toogleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
       <div className='absolute'>
       <img src={bgimage} alt='bgimage'></img>
       </div>
       <form className='absolute w-3/12 p-12 bg-black bg my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
    <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
      {!isSignInForm&&( <input type='text' placeholder='Full Name' className='my-4 p-4 w-full bg-gray-700'/>)

      }
        <input type='text' placeholder='Email Address' className='my-4 p-4 w-full bg-gray-700'/>
        <input type='password' placeholder='Password' className='my-4 p-4 w-full bg-gray-700'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className='p-4 cursor-pointer' onClick={toogleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already Had Account? Sign In"}</p>
       </form>
    </div>
  )
}

export default Login