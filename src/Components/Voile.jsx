import { useState } from 'react'
import Nav from './nav';
import Nav2 from './nav2';
const price=70;
const Voile = (props) =>{
    const images=props.images;
    const [image,setimages]=useState(images[0]);

    return(
    
    <div>
        <Nav/>
      <Nav2/>
     <div className='voile-text-parent'>
        <p className='full-voile-head'>{images[0].text}</p>
        <p className='voile-text'>{images[0].content}</p>
<p className='voile-text'>Brought to you by The <b>SSS - Mullanpur</b> 1st online turban store.</p>
     </div>
    <div className='turban-area'> 
      <div className='turban-image'>
        <img src={image.img} alt='main-img'/>

     </div>
        <div className='turban-img'>
     
        <div className='prices-list'>
          <p className='original-price'>₹{price}<span> Price per meter</span></p>
       
        <p className='fake-price'>₹82.60 </p>
        <p className='text'>Shades</p>
 
        </div>
       
        <div className='turban-images'>
            {
                images.map((imga,index)=>(
                <img src={imga.img} key={index} alt="turban-img" onClick={()=>{
                (setimages(imga))
                }}/> 
            ))
            }
            <div className='underline'></div>
        </div>
        <div className='flex'>
        <p>Enter the meters you need (m)</p>
        <select>
          <option>1</option>
          <option>2</option>
          <option>2.5</option>
          <option>3</option>
          <option>3.5</option>
          <option>4</option>
          <option>4.5</option>
          <option>5</option>
          <option>5.5</option>
          <option>6</option>
          <option>7</option>
          <option>7.5</option>
          <option>8</option>
          <option>8.5</option>
          <option>9</option>
        </select>
        </div>
        <p>Product Price <span className='original-price'>₹{price}</span></p>
     </div>
  </div>
</div>
    )
}
export default Voile;