import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {IoIosArrowBack} from 'react-icons/io'
import CartItem from "../Components/CartItem";
import { Link, useNavigate} from "react-router-dom";
import Nav2 from "../Components/nav2";
import toast from "react-hot-toast";
const Cart=()=>{
 const [totalAmount,settotalAmount]=useState(0)
    const {cart}=useSelector((state)=>state)
    const navigate=useNavigate();
 
    useEffect(()=>{
        settotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0))
    },[cart])

    const checkOut=()=>{
        if(cart.length===0){
            toast.error("Please Add Something to your cart")
            return false;
        }
        else{
            navigate('/signin')
        }
    }
    return(
        <div>
            <Nav2/>
            <div className="underline"></div>
            <IoIosArrowBack className="arrow-back" cursor={PointerEvent} size={40} onClick={()=>navigate(-1)}/>
            <div className="carts">
            {
                cart.length > 0 ? (
                
                    <div>
                        {cart.map((item,index)=>(
                            <CartItem key={item.id} item={item} itemidx={index}/>
                    )
               )
            }             
                </div>
                )
                 :(<div className="cart-empty"><p>Your cart is empty!</p>
                 <Link to={'/'}>
                <button className="shop-now-btn">Shop Now</button>
                </Link>
                </div>)
            }
               <div className="cart-entity">
                <p>Your Cart</p>
                <p>Summary</p>
                <p>Total Items : {cart.length}</p>
                <p>Total Amount :₹{totalAmount}</p>
                <div className="checkout-btn">
                    <button onClick={checkOut} className="shop-now-btn">CHECKOUT NOW!</button>
                </div>
                </div>
             
            </div>
            </div>
       
    )

}
export default Cart;