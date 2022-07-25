import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import Arrow from '../assets/Arrow'
import Facebook from '../assets/icons/Facebook'
import Linkedin from '../assets/icons/Linkedin'
import SignOut from '../assets/icons/SignOut'
import Twitter from '../assets/icons/Twitter'
import { AuthContext, FirebaseContext } from '../store/Contexts'
import './home.css'

function Home() {
    const { firebase } = useContext(FirebaseContext)
    const { user,setUserStatus } = useContext(AuthContext)
    const navigate = useNavigate()
    // const [info, setInfo] = useState([])
    const [userInfo, setUserInfo] = useState([])
    // const test = user ? user.displayName : 'not worked'
    // console.log(test);
    // console.log(firebase);
    useEffect(() => {
        firebase.firestore().collection('user').get().then((snapshot) => {
            const alldocs = snapshot.docs.map((infos) => {
                return {
                    ...infos.data(),
                    id: infos.id
                }
            })
            setUserInfo(alldocs)
        })
    }, [firebase])
    return (
        <div>
            {/* Main intro section */}
            <div className="main-page-one">
                <div className="nav-bar">
                {user ? userInfo.filter((data) => {
                    // console.log(data.id);
                    if (data.id === user.uid) {
                        // console.log(data);
                        return data
                    }
                    return null
                }).map((info, index) => {
                    // console.log(info);

                    return (
                        <button style={user ? null : {justifyContent:"center"}} onClick={() => user ? navigate('/') : navigate('/signup')}>{user ? <p className='profile-pic-home' style={user ? {backgroundImage:`url(${info.profilePic})`} : null}></p> : null} {user ? 'Welcome ' + info.username : 'Login'} </button>
                        )
                    }):<button style={user ? null : {justifyContent:"center"}} onClick={() => user ? navigate('/') : navigate('/signup')}>{user ? <p className='profile-pic-home' style={user ? {backgroundImage:`url(${user.photoURL})`} : null}></p> : null} {user ? 'Welcome ' + user.displayName : 'Login'} </button>}
                    {/* <button style={user ? null : {justifyContent:"center"}} onClick={() => user ? navigate('/') : navigate('/login')}>{user ? <p className='profile-pic-home' style={user ? {backgroundImage:`url(${user.photoURL})`} : null}></p> : null} {user ? 'Welcome ' + user.displayName : 'Login'} </button> */}
                    {user ? <div className='logout-btn'>
                        <p className='dropdown'><SignOut/> </p>
                        <div className="dropdown-content">
                            <p onClick={() => {
                                firebase.auth().signOut()
                            }}>LogOut</p>
                        </div>
                    </div> : null}
                </div>
                {/* <div className="dropdown-content">
                    <p>LogOut</p>
                </div> */}
                <div className="intro-header">
                    <div>
                        <h1>BEST <span>HIRING</span> <br /> PLATFORM</h1>
                        <br />
                        <h3>#1 Hiring platform in india</h3>
                        <br />
                        <p>If you're looking for the best SEO company for your business, <br />
                            PageTraffic is the perfect choice.
                        </p> <br /> <br />
                        <div className="btns-introsection">
                            <button onClick={()=>{user ? navigate('/onboarding') : navigate('/signup'); setUserStatus('Employer')}}>I want an artist</button>
                            <button onClick={()=>{user ? navigate('/artistregistration') : navigate('/signup') ; setUserStatus('Participent')}}>I’m an artist</button>
                        </div>
                    </div>
                    <div className="pic-main-intro">
                        <p className="picture"></p>
                    </div>
                </div>
            </div>

            {/* Why us page  */}
            <div className="why-us-page">
                <div className="div-container-flex">
                    <div className="content-why-us">
                        <h1>WHY US</h1> <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                        <br /><br />
                        <ul>
                            <li> eiusmod tempor incididunt ut labore et dolore </li><br />
                            <li> eiusmod tempor incididunt ut labore et dolore </li><br />
                            <li> eiusmod tempor incididunt ut labore et dolore </li><br />
                            <li> eiusmod tempor incididunt ut labore et dolore </li><br />
                        </ul>
                        <br /><br />
                        <div className="data">
                            <div className="artists">
                                <h3>10K+</h3>
                                <p>Total Artists</p>
                            </div>
                            <div className="project">
                                <h3>3K</h3>
                                <p>Complete Project</p>
                            </div>
                        </div>
                        <br /><br />
                        <button>Hire Now</button>
                    </div>

                    <div className="box-why-us">
                        <div className='box-sec-one'>
                            <div className="box">
                                <p className="box-img-odd"></p>
                                <h2>doloremque </h2>
                                <p>tis unde omnis iste natus error sit voluptatem</p>
                                <p className="view-btn">view more</p>
                            </div>
                            <div className="box box-even">
                                <p className="box-img"></p>
                                <h2>doloremque </h2>
                                <p>tis unde omnis iste natus error sit voluptatem</p>
                                <p className="view-btn">view more</p>
                            </div>
                        </div>
                        <div className='box-sec-two'>
                            <div className="box box-even">
                                <p className="box-img"></p>
                                <h2>doloremque </h2>
                                <p>tis unde omnis iste natus error sit voluptatem</p>
                                <p className="view-btn">view more</p>
                            </div>
                            <div className="box">
                                <p className="box-img-odd"></p>
                                <h2>doloremque </h2>
                                <p>tis unde omnis iste natus error sit voluptatem</p>
                                <p className="view-btn">view more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-about">
                        <h1>Mellow</h1>
                        <p>Discover 2500+ Registration designs on Dribbble. Your resource to discover and ... Sign Up Form design registration sign in sign up ui ux. View Sign Up Form.</p>
                        <div className="contact-icons">
                            <div className="ico"> <Facebook /></div>
                            <div className="ico"><Twitter /></div>
                            <div className="ico"><Linkedin /></div>

                        </div>
                    </div>
                    <div className="sitemap">
                        <h1>Sitemap</h1>
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ol>
                    </div>
                    <div className="terms">
                        <h1>Terms</h1>
                        <ol>
                            <li><a href="https://">Privacy Policy</a></li>
                            <li><a href="https://">Terms and Conditions</a></li>
                            <li><a href="https://">Copyright Policy</a></li>
                            <li><a href="https://">Fees and Charges</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home