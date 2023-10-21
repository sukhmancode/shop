import {AiFillDelete} from "react-icons/ai"
import '../css/Cart.css'
import { remove } from '../redux/slices/Cartslice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
const CartItem=({item})=>{
    const dispatch=useDispatch();
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
                <p>Price is {item.price}</p>
                </div>
            <div className="cart-delete-icon" onClick={removefromcart}> 
          
                <AiFillDelete color="#991b1b" size={20}/>
            </div>
            </div>
          
        </div>
    )

}
export default CartItem;