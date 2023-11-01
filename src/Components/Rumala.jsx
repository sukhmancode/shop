import { useDispatch } from "react-redux";
import Nav2 from "./nav2";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { add } from "../redux/slices/Cartslice";
import { FaShoppingCart } from "react-icons/fa";

const RumalaSahib=(props)=>{
    const Rumaladata=props.rumaladata;
    const [rumala,setrumalaimg]=useState(Rumaladata[0])
    const dispatch=useDispatch();
    const addtocart=()=>{
        dispatch(add(rumala))
        toast.success("Item added to Cart")
    }
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div className="parna-nav">
            <Nav2/>
            <div className="voile-text-parent">
            <p className="full-voile-head">{Rumaladata[0].text}</p>
            <p className="voile-text">{Rumaladata[0].content}</p>
            </div>
            <div className="rumala-img">
                {
                    Rumaladata.map((rumala,idx)=>(
                        <div>
                          
                     <div>
            
                            <img loading="lazy" onMouseEnter={()=>setrumalaimg(rumala)} key={idx} src={rumala.img} width={300} height={300}/>
                    </div>
                        <div className="parna-description">
                        <p>Rumala Sahib</p>
                            <p><span className="original-price">₹{rumala.price}</span></p>
                            <div className="stich-area-parna">
                            <div className='button-parna'>
        <button onClick={addtocart}>Add to Cart <FaShoppingCart scale={1.5}/></button>
        </div>
                            </div>
                      </div>
                     </div>
                    ))
}
            </div>                
        </div>
    )


}
export default RumalaSahib;