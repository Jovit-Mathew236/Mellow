import React from 'react'
import "./login.css"
const ColoredLine = ({ color, width }) => (
    <hr
        style={{
            color: color,
            border: 1,
            borderColor: color,
            backgroundColor: color,
            height: 2,
            marginTop: 0,
            width: width
        }}
    />
);
function Login() {
    return (
        <div>
            <div className="head">
                <div className="form">
                    <form autoComplete='off'>
                        <div className='form-inp-field'>
                            <h2>Login</h2>

                            <label> Email:</label><br />
                            <input type="email" name="name" placeholder='yourname@gmail.com' required /><br />
                            <label> Password:</label><br />
                            <input type="password" name="name" placeholder='password' required /><br />

                            <input type="submit" value="Submit" id='submit' />
                        </div>

                    </form>
                    <div className='flex-hr'>
                        <ColoredLine color="#E0E0E0" width="45%" /><p>or</p> <ColoredLine color="#E0E0E0" width="45%" />
                    </div>

                    <div className="g-btn-div">
                        <button className="g-btn"><p className='g-logo'></p>Continue with Google</button>
                    </div>

                    <p className='signup-p'>New to the platform? <a className='signup-link' href="#">Sign Up</a> Now</p>

                </div>

                <div className='pic-div'>
                    <div className="pic">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login