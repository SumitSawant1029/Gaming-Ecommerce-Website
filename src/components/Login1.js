import React from 'react'

function Login1(){
    return(

            <div className="container" >
                <div class="mb-3 row">
                    <label for="inputPassword5" class="form-label">Username</label>
                    <input type="text" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
                </div>
                

                <label for="inputPassword5" class="form-label">Password</label>
                <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
                <div id="passwordHelpBlock" class="form-text">
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>

                <button type="button" class="btn btn-primary">Login</button><hr></hr>
                <button type="button" class="btn btn-primary">SignUp</button>
            </div>
        
    )
}
export default Login1;