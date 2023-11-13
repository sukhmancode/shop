import imageSlide from "../ImageSlide";
import { useEffect, useState } from "react";
const BackgroundSlider=()=>{
    const [background,setbackground]=useState(0)
    useEffect(()=>{
        const timer=setTimeout(()=>{
            if(background===2){
                setbackground(0)
            }else{
                setbackground(background+1)
            }
          
        },5000)
        return ()=>clearTimeout(timer)

    },[background])
    const bgimage={
       backgroundImage:`url(${imageSlide[background].url})`,
       backgroundPosition:"center",
       backgroundSize:'contain',
       backgroundRepeat:'no-repeat',
       height:"100%",
    }
    const gotonext=()=>{
        setbackground(background)
    }
    return(
        <div>
             <div className="bgimage">
            <div style={bgimage}>
                
            </div>
            <div className="carousel">
                {
                    imageSlide.map((image,background)=>(
                        <span key={background} onClick={()=>gotonext(background)}></span>
                    ))
                }
            </div>
         </div>

        </div>
    )
}
export default BackgroundSlider