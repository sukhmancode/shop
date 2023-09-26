function Signup(){
    return(
        <div className="form">
          
            <form className="signup-form">
                <h3 className="sign-up-head">Sign Up</h3>
                <label>First Name</label>
                <input type="text" />

                <label>Last Name</label>
                <input type="text" />

                <label>Email</label>
                <input type="email"/>

                <label>Password</label>
                <input type="password"/>

                <label>Phone No.</label>
                <input type='text'/>

                <div className="check">

                <input type="checkbox" />
                <p>Subscribe to our newsletter for our latest news and updates.</p>

                </div>
                
                
            </form>
        </div>
    )

}
export default Signup