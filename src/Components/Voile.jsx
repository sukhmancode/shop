import { useState } from 'react'
import Nav from './nav';
import Nav2 from './nav2';

const Voile = (props) =>{
    const images=props.images;
    const [image,setimages]=useState(images[0]);

    return(
    
    <div>
        <Nav/>
      <Nav2/>
     <div className='voile-text-parent'>
        <p className='full-voile-head'>FULL VOILE</p>
        <p className='voile-text'>Sourced from only the highest quality mills in Northern India, our Full Voile turbans are our premium quality turbans and are made of 100% cotton. This material is comfortable to wear and soft to touch. Stand tall, and stand proud knowing you are wearing one of these immaculate crowns.</p>
<p className='voile-text'>Brought to you by The <b>SSS - Mullanpur</b> 1st online turban store.</p>
     </div>
    <div className='turban-area'> 
      <div className='turban-image'>
        <img src={image.img} alt='main-img'/>

     </div>
        <div className='turban-img'>
        <p className='text'>Shades</p>
        <div className='prices-list'>
          <p className='original-price'>₹70</p>
        <p className='fake-price'>₹82.60 </p>
        </div>
        <div className='turban-images'>
            {
                images.map((imga,index)=>(
                <img src={imga.img} key={index} alt="turban-img" onClick={()=>{
                (setimages(imga))
                }}/> 
            ))
            }
            </div>
     </div>
  </div>
</div>
    )
}
export default Voile;