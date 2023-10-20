import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";
import Nav2 from "../Components/nav2";
const Cart=()=>{
    const [totalAmount,settotalAmount]=useState(0)
    const {cart}=useSelector((state)=>state)
    
    useEffect(()=>{
        settotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0))
    },[cart])
    return(
        <div>
            <Nav2/>
            <div className="underline"></div>
            <div className="cart">
            {
                cart.length > 0 ? (<div>
                    <div className="car">
                        {cart.map((item,index)=>(
                            <CartItem key={item.id} item={item} itemidx={index}/>
                        ))}
                        </div>

                <div className="cart-entity">
                <p>Your Cart</p>
                <p>Summary</p>
                <p>Total Items : {cart.length}</p>
            <div>
                <p>Total Amount :{totalAmount}</p>
            </div>
            
        </div>
                </div>)
                
                 :(<div className="cart-empty"><p>Your cart is empty!</p>
                 <Link to={'/'}>
                <button className="shop-now-btn">Shop Now</button>
                </Link>
                </div>)
            }
            </div>
        </div>
    )

}
export default Cart;