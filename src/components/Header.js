import React, { useEffect } from 'react'
import logo from "../logo.png"
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser,addUser } from '../utils/userSlice'

const Header = () => {
  const dispatch=useDispatch();
 
  const navigate=useNavigate();
  const user=useSelector(store => store.user);
  

  const handleSignOut=()=>{
    signOut(auth).then(() => {
    
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  useEffect(()=>{
  
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        
       const {uid,email,displayName,photoURL}=user;
       dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      
        navigate("/browse")
      } else {
        // User is signed out
       dispatch(removeUser());
      navigate("/")
     
      }
    });
    return ()=>unsubscribe();
  },[])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className="w-44" src={logo} alt='logo'></img>
       {user &&
        (<div className='flex items-center p-2'>
        <img 
          className='w-12 h-12' 
          src={user?.photoURL} 
          alt='user_icon' 
        />
          <button onClick={handleSignOut} className=' text-white font-bold'>Sign Out</button>
        </div>)

       }
    </div>

  )
}

export default Header