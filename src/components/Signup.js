import React, { useState, useContext } from 'react'
import { Firebase } from '../firebase/config';
import { FirebaseContext } from '../store/Contexts'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/compat/auth';
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


function Signup() {
    const { firebase } = useContext(FirebaseContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    var provider = new Firebase.auth.GoogleAuthProvider()
    return (
        <div>
            <div className="head">
                <div className="form">
                    <form autoComplete='off' action='/onboarding' method='NONE'>
                        <div className='form-inp-field'>
                            <h2>Sign Up</h2>
                            <label> User name:</label>
                            <input type="text" name="name" placeholder='username' required onChange={(e) => setName(e.target.value)} value={name} />
                            <label> Email:</label>
                            <input type="email" name="name" placeholder='yourname@gmail.com' required onChange={(e) => setEmail(e.target.value)} value={email} />
                            <label> Password:</label>
                            <input type="password" name="name" placeholder='password' required onChange={(e) => setPassword(e.target.value)} value={password} />

                            <input type="submit" value="SignUp" id='submit' onClick={(e) => {
                                e.preventDefault()
                                firebase.auth().createUserWithEmailAndPassword(email, password)
                                    .then((result) => {
                                        console.log('Success');
                                        result.user.updateProfile({ displayName: name }).then(() => {
                                            firebase.firestore().collection('user').add({
                                                id: result.user.uid,
                                                username: name,
                                                email:email
                                            }).then(() => {
                                                swal("Good job!", "You successfully Sign uped😋!", "success");
                                                navigate('/login')
                                            })
                                        })
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
                        <button className="g-btn" onClick={() => {
                            firebase.auth().signInWithPopup(provider).then((result) => {
                                console.log("success");
                                firebase.firestore().collection('user').add({
                                    id: result.user.uid,
                                    username: result.user.displayName,
                                    email: result.user.email,
                                    profilePic:result.user.photoURL
                                }).then(() => {
                                    swal("Good job!", "You successfully Sign uped😋!", "success");
                                    navigate('/')
                                })
                            }).catch((error) => {
                                var errorMessage = error.message;
                                console.log(errorMessage);
                            });
                        }}><p className='g-logo'></p>Continue with Google</button>
                    </div>

                    <p className='signup-p'>Already have an account? <a className='signup-link' href="/login">Log In</a> Now</p>

                </div>

                <div className='signup-pic-div'>
                    {/* <div className="pic"></div> */}
                    <div className="box">
                        <h1>Join and <span>grow</span> with <span>Mellow</span></h1>
                        <p>Welecome to new life with <span>Mellow</span></p>
                    </div>


                </div>
            </div>
        </div >
    )
}

export default Signup