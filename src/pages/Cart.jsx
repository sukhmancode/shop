import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";
const Cart=()=>{
    const [totalAmount,settotalAmount]=useState(0)
    const {cart}=useSelector((state)=>state)
    
    useEffect(()=>{
        settotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0))
    },[cart])
    
    return(
        <div>
            {
                cart.length > 0 ? (<div>
                    <div>
                        {cart.map((item,index)=>(
                            <CartItem key={item.id} item={item} itemidx={index}/>
                        ))}
                    </div>
                </div>)
                 :(<div><p>cart empty</p>
                 <Link to={'/'}>
                <button>Shop Now</button>
                </Link></div>)
            }
            <div>
                <p>Your Cart</p>
                <p>Summary</p>
                <p>Total Items : {cart.length}</p>
            </div>

            <div>
                <p>Total Amount :{totalAmount}</p>
            </div>

        </div>
    )

}
export default Cart;