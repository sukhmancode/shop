import Nav from "./nav"
import Nav2 from "./nav2"
import { FaShoppingCart } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { add } from "../redux/slices/Cartslice"
import toast from "react-hot-toast"
import { useEffect, useState } from "react"
const Parna=(props)=>{
    const ParnaData=props.ParnaData;
    const [parna,setparnaimg]=useState(ParnaData[0])
    const [total,settotal]=useState(0)
    const [rate,setrate]=useState(50)
    const dispatch=useDispatch();
    const addtocart=()=>{
        if(total===0){
            toast.error("Please select size of Parna")
            return false;
        }
        dispatch(add(parna))
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
                    ParnaData.map((parna,idx)=>(
                        <div>
                     <div>
                            <img onMouseEnter={()=>setparnaimg(parna)} key={idx} src={parna.img} width={300} height={300}/>
                    </div>
                        <div className="parna-description">
                            <p>{parna.color}</p>
                            <p><span className="original-price">₹{parna.price}</span> Price per (m)  </p>
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

                            <select>
                                <option>Select Stiching</option>
                                <option>No Stich</option>
                                <option> Stiching</option>
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
export default Parna