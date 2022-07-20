import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../store/Contexts'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
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
    const { firebase } = useContext(FirebaseContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div>
            <div className="head">
                <div className="form">
                    <form autoComplete='off' action='/onboarding' method='NONE'>
                        <div className='form-inp-field'>
                            <h2>Login</h2>

                            <label> Email</label><br />
                            <input type="email" name="name" placeholder='yourname@gmail.com' required onChange={(e) => setEmail(e.target.value)} value={email} /><br />
                            <label> Password</label><br />
                            <input type="password" name="name" placeholder='password' required onChange={(e) => setPassword(e.target.value)} value={password} /><br />

                            <input type="submit" value="Login" id='submit' onClick={(e) => {
                                e.preventDefault()
                                firebase.auth().signInWithEmailAndPassword(email, password)
                                    .then((result) => {
                                        console.log('Succsses');
                                        // result.user.updateProfile({displayName:name}).then(()=>{
                                        //     firebase.firestore().collection('user').add({
                                        //         id:result.user.uid,
                                        //         username:name
                                        //     }).then(()=>{
                                        swal("Good job!", "You successfully  Logined😋!", "success");
                                        navigate('/')
                                        // })
                                        // })
                                        // Signed in 
                                        // var user = userCredential.user;
                                        // ...
                                    })
                                    .catch((error) => {
                                        // var errorCode = error.code;
                                        var errorMessage = error.message;
                                        alert(errorMessage);
                                        // ..
                                    });
                            }} />
                        </div>

                    </form>
                    <div className='flex-hr'>
                        <ColoredLine color="#E0E0E0" width="45%" /><p>or</p> <ColoredLine color="#E0E0E0" width="45%" />
                    </div>

                    <div className="g-btn-div">
                        <button className="g-btn"><p className='g-logo'></p>Continue with Google</button>
                    </div>

                    <p className='signup-p'>New to the platform? <a className='signup-link' href="/signup">Sign Up</a> Now</p>

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