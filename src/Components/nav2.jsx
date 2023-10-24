import {FaShoppingCart} from 'react-icons/fa'
import {RiArrowDropDownFill} from 'react-icons/ri'
import DropTurban from './DropdownTur'
import { useState } from 'react'
import { Link, NavLink, useNavigate} from 'react-router-dom'
import { useRef } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { useSelector } from 'react-redux'


function Nav2(){
    const navigate=useNavigate();
    const navref=useRef();
    const [open,setopen]=useState(false)
    // changing color when scrolling
    const [navcolor,setnavcolor]=useState(false)
    const {cart} = useSelector((state) => state);

    const showNav=()=>{
        navref.current.classList.toggle('responsive-nav')
    }
    const changeColor=()=>{
        if(window.scrollY>=300){
            setnavcolor(true)
        }else{
            setnavcolor(false)
        }
    }
    window.addEventListener('scroll',changeColor)
return(     
<div className={navcolor ? 'nav2 nav2-b' :'nav2'}>
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

        <Link to={'/kurta'}>
        <p>Kurta Pajama </p>
        </Link>
        <Link to={'/suit'}>
        <p>Ladies Suits</p>
        </Link>
        <Link to={'/rumalasahib'}>
        <p>Rumala Sahib</p>
        </Link>
      
        <div className='cart-length-parent'>
        {<FaShoppingCart onClick={()=>navigate("/cart")} onMouseOver={({target})=>target.style.color="#4ade80"}
        onMouseOut={({target})=>target.style.color="black"} className='cart' size={22}/>}
        <div className='cart-length'>
        <p>{cart.length}</p>
        </div>
        </div>
     
        <FaTimes className='nav-btn  nav-close' onClick={showNav}/>
    </div>
    <FaBars className='nav-btn' onClick={showNav} />
   
   
</div>


    )
}
export default Nav2