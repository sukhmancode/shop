import { useState } from 'react'
import Nav from './nav';
import Nav2 from './nav2';
const Voile = (props) =>{
    const images=props.images;
    const [image,setimages]=useState(images[0]);
    const [rate,setrate]=useState(70)
    
    const selectedVal=[
      {text:1}, {text:2}, {text:3}, {text:4}, {text:5}, {text:6}, {text:7}, {text:8},
    ]

    const selectrate=()=>{

    }
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
          <p className='original-price'>₹{rate}<span> Price per meter</span></p>
       
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
        {
          selectedVal.map((select,index)=>(
            <option onSelect={selectrate()} key={index}>{select.text}</option>
          ))
        }
        </select>
        </div>
        <div className='product-price-list'>
        <p>Product Price</p>
        <p className='original-price'>₹{rate}</p>
        </div>
     </div>
  </div>
</div>
    )
}
export default Voile;