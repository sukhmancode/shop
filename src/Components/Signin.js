import { Link } from "react-router-dom"
function Signin(){
    return(
        <div className="form1">
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