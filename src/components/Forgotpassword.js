import react from "react";
import "../components/Forgotpassword.css";

function Forgot()
{ return(
    <div className="box-forgot">
        <div className="section" >

         <h1>FORGOT YOUR PASSWORD?</h1>
         <p>Enter your email address and we will send you instructions on how to create a new password.</p>
         <input type="text" placeholder="Email" className="mail" style={{ width: "500px", height: "30px", marginTop: "30px"}} />

         <div className="but-forgot">
          
          <a href="/Resetpassword"  > <button>SUBMIT</button></a>
          <br></br>
          
          <div className="backtologin">
                 <a href="/Login"> <p> Back to Login </p> </a> 
               </div>
         </div>
       
        </div>
    </div>


);

}
export default Forgot;