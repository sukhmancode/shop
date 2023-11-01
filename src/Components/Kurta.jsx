
import Nav2 from "./nav2"
import { FaShoppingCart } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { add } from "../redux/slices/Cartslice"
import toast from "react-hot-toast"
import { useEffect, useState } from "react"
const Kurta=(props)=>{
    const KurtaData=props.kurtadata;
    const [kurta,setkurtaimg]=useState(KurtaData[0])
    const [total,settotal]=useState(0)
    const [rate,setrate]=useState(480)
    const dispatch=useDispatch();
    const addtocart=()=>{
        if(total===0){
            toast.error("Please select size of Kurta Pajama")
            return false;
        }
        dispatch(add(kurta))
        toast.success("Item added to Cart")
    }
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div className="parna-nav">
            <Nav2/>
            <div className="parna-img">
                {
                    KurtaData.map((kurta,idx)=>(
                        <div>
                     <div>
                            <img loading="lazy" onMouseEnter={()=>setkurtaimg(kurta)} key={idx} src={kurta.img} width={300} height={300}/>
                    </div>
                        <div className="parna-description">
                            <p>{kurta.color}</p>
                            <p><span className="original-price">₹{kurta.price}</span> Price per (m)  </p>
                            <div className="stich-area-parna">
                            <select value={total} onChange={(e)=>settotal(e.target.value)}>
                                <option>Select Size(Meters)</option>
                                <option value={2}>2</option>
                                <option value={2.50}>2.50</option>
                                <option value={3}>3</option>
                                <option value={3.50}>3.50</option>
                                <option value={4}>4</option>
                                <option>4.50</option>
                                <option>5</option>
                                <option>5.50</option>
                                <option>6</option>
                            </select>

                            <div className="parna-rate">
                                <p> ₹{total*rate}</p>
                            </div>
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
export default Kurta