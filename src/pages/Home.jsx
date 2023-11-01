import Nav from "../Components/nav";
import Nav2 from "../Components/nav2";
import pagg from '../assests/417fPgrf0-L._AC_UY1100_.jpg'
import checkparna from '../assests/image1-6.jpg'
import kurtaImg from '../assests/kurta-img.png'
import DarbarSahibImg from '../assests/darbar-sahibimg.jpeg'
import { Link} from "react-router-dom";
import BackgroundSlider from "../Components/BackgroundSlider";
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import userData from "../userdata";
import { Swiper, SwiperSlide } from 'swiper/react';

import {ImQuotesLeft,ImQuotesRight,ImCross} from 'react-icons/im'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from "react";
import Shipping from "../Components/shipping";

function Home(){
  const [close,setclose]=useState(true)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return(
        <>
        <div className="cross" onClick={()=>setclose((prev)=>!prev)}>
          <ImCross color='white' size={15} />
        </div>
        {
      close &&  (<Shipping/>)
      }
        <Nav2/>
         
        <div>
         <BackgroundSlider/>
        </div>

         <div className="collection-box">
            <p>FEATURED COLLECTIONS</p>
            <div className="collection-boxes">
             <div className="pagg-img" style={{backgroundImage:`url(${pagg})` }}>
                <div>
               <p>PREMIUM QUALITY TURBANS</p>
               <h1>FULL VOILE</h1>
               <Link to={'/fullvoile'}>
               <button>View PRODUCTS</button>
               </Link>
               </div>
             </div>
          

             <div className="pagg-img" style={{backgroundImage:`url(${checkparna})`}}>
                <div className="parna-text">
               <h1>CHECK PARNAS</h1>
               <Link to={'/parna'}>
               <button>View PRODUCTS</button>
               </Link>
            
               </div>
             </div>

             <div className="kurta-img" style={{backgroundImage:`url(${kurtaImg})`}}>
                <div className="parna-text">
               <h1>KURTA PAJAMAS</h1>
               <Link to={'/kurta'}>
               <button>View PRODUCTS</button>
               </Link>
            
               </div>
             </div>

             <div className="darbarsahib" style={{backgroundImage:`url(${DarbarSahibImg})`}}>
                <div className="parna-text">
               <h1>RUMALA SAHIB</h1>
               <button>View PRODUCTS</button>
                </div>
              </div>
          </div>
   </div>
<div>

</div>

<div className="customer-text">
  <h1>Trusted by <span>1k+ </span> working Proffesional 's & models</h1>
</div>
<div >
       

 
    <Swiper 
      // install Swiper modules
      modules={[Navigation, Pagination ,A11y]}
      breakpoints={{
        0:{
          slidesPerView:1,
          spaceBetween:10,
        },
        480:{
          slidesPerView:2,
          spaceBetween:20
        },
        810:{
          slidesPerView:3,
          spaceBetween:30
        }

      }}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="swipe"
    >
   <div className="swiper-slide">
    {
      userData.map((user)=>(
        <SwiperSlide >
          <div className="user-div">
          <img className="user-img" src={user.img} alt="customer-img"/>
          <i>{user.star}</i>
          <p><ImQuotesLeft opacity={0.8} /> {user.content} <ImQuotesRight opacity={0.8} size={10}/></p>
          <div className="customer-details">
          <p>{user.profession}</p>
          <p>{user.Name}</p>

          </div>
        </div>
        </SwiperSlide> 
      ))
    }
   </div>
      ...
    </Swiper>
  </div>   
</>
    )
}
export default Home;