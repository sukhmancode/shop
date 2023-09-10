import React from 'react';
import { Link } from 'react-router-dom';
import {BsFacebook,BsInstagram} from 'react-icons/bs'

function Nav(){
   return(
<nav>
 <div className='icons'>
{<BsFacebook size={15}/>}
{<BsInstagram size={15}/>}
 </div>

<div className='sign-btn'>
   <p>Sign In</p>
   <p>Sign Up</p>
</div>
 
</nav>
   )
}
export default Nav;