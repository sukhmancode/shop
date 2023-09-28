import Nav from "../Components/nav";
import Nav2 from "../Components/nav2";
import pagg from '../assests/417fPgrf0-L._AC_UY1100_.jpg'
import checkparna from '../assests/image1-6.jpg'
import kurtaImg from '../assests/kurta-img.png'
import DarbarSahibImg from '../assests/darbar-sahibimg.jpeg'
import { Link} from "react-router-dom";
import BackgroundSlider from "../Components/BackgroundSlider";
function Home(){
    return(
      /*  <div className="heading-container">
            <h1 className="main-heading">Welcome To The World Of Fast Color Turbans</h1>
            <p><b>Satguru Silk Store(SSS)</b> is operating Since 1953 and still leading in providing best quality fast color turbans in Mullanpur City. We have fantastic quality in Full Voile, Rubia Voile,Rumala.We also have Various varieties in Ladies Suits like RameshTax,SahibFabrics and many more.It's fully secured website & has Original Product Images.So Buy with Ease.</p>
         </div> */
        <>
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
               <button>View PRODUCTS</button>
            
               </div>
             </div>

             <div className="kurta-img" style={{backgroundImage:`url(${kurtaImg})`}}>
                <div className="parna-text">
               <h1>KURTA PAJAMAS</h1>
               <button>View PRODUCTS</button>
            
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
        </>
    )
}
export default Home;