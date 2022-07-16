import React, { useContext } from 'react'
import Facebook from '../assets/icons/Facebook'
import Linkedin from '../assets/icons/Linkedin'
import Twitter from '../assets/icons/Twitter'
import { AuthContext } from '../store/Contexts'
import './home.css'

function Home() {
    const { user } = useContext(AuthContext)
    // const test = user ? user.displayName : 'not worked'
    // console.log(test);
    return (
        <div>
            {/* Main intro section */}
            <div className="main-page-one">
                <div className="nav-bar">
                    <button>{user ? 'Welcome ' + user.displayName : 'Login'}</button>
                </div>
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
                            <button>I want an artist</button>
                            <button>I’m an artist</button>
                        </div>
                    </div>
                    <div className="pic-main-intro">
                        <p className="picture"></p>
                    </div>
                </div>
            </div>

            {/* Why us page  */}
            <div className="why-us-page">

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
                            <li><a href="https://">Home</a></li>
                            <li><a href="https://">About</a></li>
                            <li><a href="demo/login">Login</a></li>
                            <li><a href="https://">Contact</a></li>
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