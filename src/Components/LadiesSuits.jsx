import { useDispatch } from "react-redux";
import Nav2 from "./nav2"
import { add } from "../redux/slices/Cartslice";
import toast from "react-hot-toast";
import { useState } from "react";
import {HiOutlineShoppingBag} from 'react-icons/hi'


const LadiesSuits=(props)=>{
    const SuitsData=props.suits;
    const dispatch=useDispatch();
    const [suit,setsuit]=useState(SuitsData[0])

    const addtocart=()=>{
    dispatch(add(suit))
    toast.success("Item Added to Cart")

    }
    return(
        <div>
           <Nav2></Nav2>
           <div className="underline"></div>
           <div className="suit-area">
            {
                SuitsData.map((suit,idx)=>(
                    <div>
                    <img onMouseEnter={()=>setsuit(suit)} key={idx} src={suit.img} alt="ladies"/>
                    
                    <div className="suit-content">
                    <p className="discount">50% off</p>
                    <p>{suit.content}</p>
                    <div className="suit-original-price">
                    <p className="suit-content-price">₹{suit.price}.00</p>
                    <p>₹{suit.originalprice}.00</p>
               
                    </div>
                    <div className="cart-btn">
                    <button onClick={addtocart}>Add to Cart! <HiOutlineShoppingBag size={20}/></button>
                    </div>
                    </div>
                    </div>

                ))
            }
           </div>
           <div>
            <br></br>
            <br/> <br/> <br/> <br/> <br/> <br/>
           </div>
        </div>
    )

}
export default LadiesSuits