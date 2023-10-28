import { useState } from "react"
import Nav from "./nav"
import axios from "axios"

function Signup(){
    const [firstname,setfirstname]=useState('')
    const [lastname,setlastname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [phoneno,setphoneno]=useState('')

    let submit=async(e)=>{
        e.preventDefault();
        try{
            alert("submitted")
            await axios.post("https://localhost:8000/",{
                firstname,lastname,email,password,phoneno
            })
        }catch(e){
            console.log(e)
        }

    }
    return(
        <div>
         <Nav/>
<div className="underline"></div>
        <div className="form">

            <form className="signup-form" action="POST">
            <img className="shop-logo-signup" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpD0cheIHwInQSnihzRJVNOypJj_E3Ifp3sw&usqp=CAU' alt="shop-logo"/>
                <h3 className="sign-up-head">Sign Up</h3>
                <label>First Name<span className="asterisk">*</span></label>
                <input type="text" onChange={(e)=>{setfirstname(e.target.value)}} />

                <label>Last Name<span className="asterisk">*</span></label>
                <input type="text" onChange={(e)=>{setlastname(e.target.value)}} />

                <label>Email<span className="asterisk">*</span></label>
                <input type="email" onChange={(e)=>{setemail(e.target.value)}}/>

                <label>Password <span className="asterisk">*</span></label>
                <input type="password" onChange={(e)=>{setpassword(e.target.value)}}/>

                <label>Phone No.<span className="asterisk">*</span></label>
                <input type='text' onChange={(e)=>{setphoneno(e.target.value)}}/>

                <div className="check">
                    <button onClick={submit} className="signin-btn">Sign up</button>
                </div>
            </form>
        </div>
        </div>
    )

}
export default Signup