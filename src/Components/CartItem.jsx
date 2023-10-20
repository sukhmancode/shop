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
            <div className="cart-delete-icon" onClick={removefromcart}> 
                <AiFillDelete color="#991b1b" size={20}/>
            </div>
            <p>{item.content}</p>
        </div>
    )

}
export default CartItem;