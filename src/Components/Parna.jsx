import Nav from "./nav"
import Nav2 from "./nav2"
import { FaShoppingCart } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { add } from "../redux/slices/Cartslice"
import toast from "react-hot-toast"
import { useState } from "react"
const Parna=(props)=>{
    const ParnaData=props.ParnaData;
    const [parna,setparnaimg]=useState(ParnaData[0])
    const dispatch=useDispatch();
    const addtocart=()=>{
        dispatch(add(parna))
        toast.success("Item added to Cart")
    }

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
                            <div className="stich-area-parna">
                            <select>
                                <option>Select Size(Meters)</option>
                                <option>2</option>
                                <option>2.50</option>
                                <option>3</option>
                                <option>3.50</option>
                                <option>4</option>
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