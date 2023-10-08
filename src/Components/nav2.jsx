import {FaShoppingCart} from 'react-icons/fa'
import {RiArrowDropDownFill} from 'react-icons/ri'
import DropTurban from './DropdownTur'
import { useState } from 'react'
import { NavLink} from 'react-router-dom'
import { useRef } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'


function Nav2(){
    const navref=useRef();
    const [open,setopen]=useState(false)
    // changing color when scrolling
    const [navcolor,setnavcolor]=useState(false)

    const showNav=()=>{
        navref.current.classList.toggle('responsive-nav')
    }
    const changeColor=()=>{
        if(window.scrollY>=90){
            setnavcolor(true)
        }else{
            setnavcolor(false)
        }
    }
    window.addEventListener('scroll',changeColor)
return(     
<div className={navcolor ? 'nav2 nav2-bg' :'nav2'}>
   <div className="logo-container">
    <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpD0cheIHwInQSnihzRJVNOypJj_E3Ifp3sw&usqp=CAU" loading='lazy' width={70} height={70} alt='shop-logo'/>
    
<div className="shop-name">
    <h1>SATGURU</h1>
    <p>Silk Store</p>
 </div>
    </div>
    <div className="nav-items" ref={navref}>
        <NavLink to={'/'}>
          <p>Home</p>
        </NavLink>
        <p onClick={()=>setopen((prev)=>!prev)}>Turbans{<RiArrowDropDownFill/>}</p>
{
    open && (<DropTurban/>)
}
        <p>Kurta Pajama{<RiArrowDropDownFill/>} </p>
        <p>Ladies Suits{<RiArrowDropDownFill/>}</p>
        <p>Gurudwara Sahib Items</p>
       
        {<FaShoppingCart className='cart' size={22} />}
 
        <FaTimes className='nav-btn  nav-close' onClick={showNav }/>
    
      
    </div>
    <FaBars className='nav-btn' onClick={showNav } />
   
   
</div>

    )
}
export default Nav2