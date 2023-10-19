import {FcDeleteDatabase} from 'react-icons/fc'
import images from '../voiledata';
import { remove } from '../redux/slices/Cartslice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
const CartItem=({item})=>{
    const dispatch=useDispatch();
    const removefromcart=()=>{
        dispatch(remove(item.id))
        toast.error("Item removed")

    }
    return(
        <div>
            <div>
                <img src={item.img}/>
            </div>
            <div onClick={removefromcart}> 
                <FcDeleteDatabase size={20}/>
            </div>
        </div>
    )

}
export default CartItem;