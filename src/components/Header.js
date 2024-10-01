import React, { useEffect } from 'react'
import logo from "../logo.png"
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser,addUser } from '../utils/userSlice'
import { toggleGptSearchView } from '../utils/gptSlice'
import { SUPPORTED_LANGUAGES } from '../utils/constants'
import { changeLanguage } from '../utils/configSlice'


const Header = () => {
  const dispatch=useDispatch();
 
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);

  const navigate=useNavigate();
  const user=useSelector(store => store.user);
  

  const handleSignOut=()=>{
    signOut(auth).then(() => {
    
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  
  const hadleGptSearchClick=()=>{
    dispatch(toggleGptSearchView())
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


  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
    
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className="w-44" src={logo} alt='logo'></img>
       {user &&
        (<div className='flex items-center p-2'>
          {
            showGptSearch&&(
              <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang=>
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            )}
            
          
          </select>
            )
          }
          <button className='py-2 px-4 my-2 mx-4 bg bg-purple-800 text-white rounded-lg' onClick={hadleGptSearchClick}>{ showGptSearch? "Homepage":"GPT Search"}</button>
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