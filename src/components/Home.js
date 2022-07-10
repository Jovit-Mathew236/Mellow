import React from 'react'
import Facebook from '../assets/icons/Facebook'
import Linkedin from '../assets/icons/Linkedin'
import Twitter from '../assets/icons/Twitter'
import './home.css'

function Home() {
    return (
        <div>
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
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="#">Contact</a></li>
                        </ol>
                    </div>
                    <div className="terms">
                        <h1>Terms</h1>
                        <ol>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Copyright Policy</a></li>
                            <li><a href="#">Fees and Charges</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home