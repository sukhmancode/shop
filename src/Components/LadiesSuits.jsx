import Nav2 from "./nav2"


const LadiesSuits=(props)=>{
    const SuitsData=props.suits
    return(
        <div>
           <Nav2></Nav2>
           <div className="suit-area">
            {
                SuitsData.map((suit,idx)=>(
                    <div>
                    <img src={suit.img} key={idx}/>
                    
                    <div className="suit-content">
                    <p className="discount">50% off</p>
                    <p>{suit.content}</p>
                    <div className="suit-original-price">
                    <p className="suit-content-price">₹{suit.price}.00</p>
                    <p>₹{suit.originalprice}.00</p>
                    </div>
                    </div>
                    </div>

                ))
            }
           </div>
           <div>
            <br></br>
            <br/>
           </div>
        </div>
    )

}
export default LadiesSuits