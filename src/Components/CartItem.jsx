import {AiFillDelete} from "react-icons/ai"
import '../css/Cart.css'
import { remove } from '../redux/slices/Cartslice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useLocation } from "react-router-dom";
import { useState } from "react";
const CartItem=({item})=>{
    const dispatch=useDispatch();
    const location=useLocation();
    const [rate,setrate]=useState(70)
    const [total,settotal]=useState(0)
    const [grandtotal,setgrandtotal]=useState([])
    const removefromcart=()=>{
        dispatch(remove(item.id))
        toast.error("Item removed from cart!")
    }
    return(
        <div className="cart-product">
            <div>
            <img className='cart-img' src={item.img}/>
            </div>
            <div className="cart-item-entity">
                <p> <b>Category</b> :  {item.text}</p>
                <p> <b>Description</b>: {item.content.length > 250 ?
    `${item.content.substring(0, 145)}...` : item.content
  }</p>
            </div>
            <div className="price-delete-container">
                <div>
              
              
      <p className="price-cart"> ₹{item.price}</p>
                </div>
            <div className="cart-delete-icon" onClick={removefromcart}> 
                <AiFillDelete color="#991b1b" size={20}/>
            </div>
            </div>
            <div>
                <br></br>
            </div>
          <div className="underline"></div>
        </div>
    )

}
export default CartItem;