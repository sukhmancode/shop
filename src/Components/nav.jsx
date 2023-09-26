import React from 'react';
import {BsFacebook,BsInstagram} from 'react-icons/bs'
import { NavLink } from 'react-router-dom';


function Nav(){
   return(
<nav>
 <div className='icons'>
 <a href="https://www.instagram.com/satgurusilkstore_mullanpur/" target='blank'>
{<BsFacebook size={15}/>}
</a>
<a href="https://www.youtube.com/c/jamesqquick">
{<BsInstagram size={15}/>}
</a>
 </div>

 <div className='sign-btn-wrapper'>
<NavLink to='/signin'>
  
<div className='sign-btn'>
   <p>Sign In</p>
   </div>
   </NavLink>

   <NavLink to='/signup'>
<div className='sign-btn'>
   <p>Sign Up</p>
   </div>
   </NavLink>
   </div>
</nav>
   )
}
export default Nav;