import { useState } from 'react'
import Nav from './nav';
import Nav2 from './nav2';
import { FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
const Voile = (props) =>{
    const images=props.images;
    const [image,setimages]=useState(images[0]);
    const [rate,setrate]=useState(70)
    const [total,settotal]=useState([])
    const [grandtotal,setgrandtotal]=useState([])


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
        <select className='drop-box' value={total} onChange={(e)=>settotal(e.target.value)}>
        <option value={0}>0</option>
        
        <option value={1}>1</option>

        <option value={2}>2</option>
        <option value={2.5}>2.5</option>
        <option value={3}>3</option>
        <option>3.5</option>
        <option>4</option>
        <option>4.5</option>
        <option>5</option>
        <option>5.5</option>
        <option>6</option>
        <option>6.5</option>
        <option>7</option>
        <option>7.5</option>
        <option>8</option>
        <option>8.5</option>
        <option>9</option>
        <option>9.5</option>
        <option>10</option>
        </select>
        </div>
        <div className='product-price-list'>
        <p>Product Price</p>
        <p className='original-price'>₹{total*rate}</p>
        </div>


        <div className='underline'></div>
        <div className='stitching-section'>
          <h3>Stitching</h3>
          <p>Add stitching to your turban</p>
          <div className='seam-area'>
          <p>Seam on the cut sides (+₹20.00)</p>
          <select className='drop-box' value={grandtotal} onChange={(e)=>{setgrandtotal(e.target.value)}}>
            <option value={20}>Yes</option>
            <option value={0}>No</option>
          </select>
          </div>

        </div>
        <div className='underline'></div>

        <div className='grand-total'>
          <p>Grand Total</p>
          <p className='grand-total-price'>₹{total*rate + '+' + grandtotal}</p>
        </div>
        <div className='button-cart'>

        <button>Add to Cart <FaShoppingCart scale={19.5}/></button>
        </div>
     </div>
  </div>
</div>
    )
}
export default Voile;