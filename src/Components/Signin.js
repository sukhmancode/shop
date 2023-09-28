import { Link } from "react-router-dom"
function Signin(){
    return(
        
        <div className="form1">
        <img className="shop-logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpD0cheIHwInQSnihzRJVNOypJj_E3Ifp3sw&usqp=CAU' alt="shop-logo"/>
            <form className="form2">
                <h3 className="sign-up-head">Sign In </h3>
                <small className="access-txt">to access SSS Store</small>
                <input type="email" placeholder="Email Address"/>

                <button className="signin-btn">
                    Next
                </button>

                <p>Don't have an account? 
                 <Link to='/signup'>
                <span className="sign-up-text">  Sign Up</span>
                </Link>
                </p>
            </form>
          
        </div>
    )

}
export default Signin