import { useEffect, useState } from 'react'
import Spinner from './Spinner';

const Voile = (props) =>{
    const images=props.images;
    const text="Full Voile"
    const [image,setimages]=useState(images[0]);
    const [loading,setloading]=useState(false)

    return(
    <div>
     <div>
        <h1 className='full-voile-head'>{text}</h1>
     </div>
    <div className='turban-area'> 
      <div className='turban-image'>
        <img src={image.img} alt='main-img'/>
    
     </div>
        <div className='turban-img'>
        <p className='text'>Shades</p>
            {
                images.map((imga,index)=>(
                <img src={imga.img} key={index} alt="turban-img" onClick={()=>{{
                    loading ? (<Spinner/>) : (setimages(imga))
                }}}/> 
            ))
            }
     </div>
    </div>
</div>
    )
}
export default Voile;