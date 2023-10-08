import {BsFacebook,BsInstagram} from 'react-icons/bs'
const Footer=()=>{
    return(
        <footer className='footer-section'>
            <div className='footer-about'>
                <h3>ABOUT THE SHOP</h3>
                <p>Satguru Silk Store is your destination for Sikh Style. Started in 1956, we have been serving customers all over the world with our premium quality turbans and accessories. Your style is unique to you and we want to ensure you can create the best version of yourself.</p>
                <div className="social-icons-footer">
                <BsFacebook size={20}/>
                <BsInstagram size={20}/>

                </div>
            </div>
            <div className='footer-elements'>
                <h3>PAGES</h3>
                <p>Turbans</p>
                <p>Parnas</p>
                <p>Kurta Pajamas</p>
                <p>Rumala Sahib</p>
           
            </div>

            <div>
                <h3>VIP LIST</h3>
                <p>Subscribe to our VIP List to receive updates, access to exclusive deals, and more.</p>
            </div>
         
        </footer>
    )

}
export default Footer