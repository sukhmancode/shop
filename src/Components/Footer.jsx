import {BsFacebook,BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {FaWhatsapp} from 'react-icons/fa'
const Footer=()=>{
    return(
        <footer className='footer-section'>
            <div className='footer-about'>
                <h3>ABOUT THE SHOP</h3>
                <p>Satguru Silk Store is your destination for Sikh Style. Started in 1956, we have been serving customers all over the world with our premium quality turbans and accessories. Your style is unique to you and we want to ensure you can create the best version of yourself.</p>
                <div className="social-icons-footer">
                <a href="https://www.instagram.com/satgurusilkstore_mullanpur/" target='blank'>
{<BsFacebook size={22}/>}
</a>
<a href="https://www.youtube.com/c/jamesqquick">
{<BsInstagram size={22}/>}
</a>
<a href='https://wa.me/9814590391'>
    {<FaWhatsapp size={24}/>}
</a>

            </div>
            </div>
            <div className='footer-elements'>
                <h3>PAGES</h3>
                <div className='footer-elements-main'>
                <Link to={'/fullvoile'}>
                <p>Turbans</p>
                </Link>
                <Link to={'/parna'}>
                <p>Parnas</p>
                </Link>
                <Link>
                <p>Kurta Pajamas</p>
                </Link>
                <Link>
                <p>Rumala Sahib</p>
                </Link>

                <Link to={'/cart'}>
                <p>Your Cart</p>
                </Link>
            
                </div>

           
            </div>

            <div className='vip-section'>
                <h3>VIP LIST</h3>
                <p>Subscribe to our VIP List to receive updates, access to exclusive deals, and more.</p>
                <input type='text'
                className='subscribe-vip-input' 
                placeholder='Enter your email address'
                />
                <button>SUBSCRIBE</button>
            </div>
         
        </footer>
    )

}
export default Footer