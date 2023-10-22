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
            <div>
                <p> Category :  {item.text}</p>
                <p> Description: {item.content.length > 250 ?
    `${item.content.substring(0, 145)}...` : item.content
  }</p>
            </div>
            <div className="price-delete-container">
                <div >
              
                <select className='drop-box' value={total} onChange={(e)=>settotal(e.target.value)}>
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={2.5}>2.5</option>
        <option value={3}>3</option>
        <option>3.5</option>
        <option>4</option>
        <option>4.5</option>
        <option>5</option>
        <option>5.5</option>
        <option>6</option>
        <option>6.5</option>
        <option>7</option>
        <option>7.5</option>
        <option>8</option>
        <option>8.5</option>
        <option>9</option>
        <option>9.5</option>
        <option>10</option>
      </select>
      <p className="price-cart"> ₹{item.price*total}</p>
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