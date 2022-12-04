import React from "react";
export const LoginBox =()=>{
    return(
        <div>
            <div className="LoginContainer">
                <div className="loginBox">
                    <div className="Signup"><h3>Sign Up !</h3></div>
                    <div className="username">
                        <label>Username </label>
                        <input type="text" placeholder="Username"/>
                        </div>
                    <div className="password">
                        <label>Password  </label>
                        <input type="password" placeholder="Password"/>
                        </div>
                        
                    <div> <p>Forgot Password ?</p></div>
                    <div className="loginbtn"> <button>Sign Up</button></div>

                </div>
                </div>            
        </div>
    )
}