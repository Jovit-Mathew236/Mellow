import React, { useContext, useState } from 'react'
import Facebook from '../assets/icons/Facebook'
import Linkedin from '../assets/icons/Linkedin'
import Twitter from '../assets/icons/Twitter'
import { AuthContext, FirebaseContext } from '../store/Contexts'
import "./onboarding.css"
import "./profile.css"
import "./home.css"

function Profile() {
  const { firebase } = useContext(FirebaseContext)
  const { user } = useContext(AuthContext)
  return (
    <div>
      <div className="nav">
        <img src={user ? user.photoURL : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.jpeg"} alt="" />
      </div>
      <br />
      <div className="user-profile-contents">
        <div className="user-profile-banner">
          <p className="banner" style={{ backgroundImage: `url(${'/static/media/user-banner.783996bc.png'})` }}><button>Edit profile</button></p>
        </div>
        <div className="profile-about-flex">

          <div className="profile-div">
            <p className="profile-pic" style={{ backgroundImage: `url(${user.photoURL})` }}></p> <br />
            <h2 className="name">{user.displayName}</h2>
            <p className="user-expertise">Photographer  ·  3+ Years of experience</p>
            <p className="location">Kottayam, Kerala</p>
            <div className="user-contact">
              <div className="contact-ph"></div>
              <div className="contact-whatsapp"></div>
              <div className="contact-email"></div>
            </div>
          </div>

          <div className="about-div">
            <h2>About me</h2>
            <p>Discover 2500+ Registration designs on Dribbble. Your resource to discover and ... Sign Up Form design registration sign in sign up ui ux. View Sign Up Form.</p>
            <br />
            <h2>Specialities</h2>
            <div className="speciality">
              <p>Wedding photography</p>
              <p>Product photography</p>
              <p>Event photography</p>
            </div>
          </div>
        </div>
        <br /><br /><br />
        <div className="user-work">
          <h2>Work</h2>
          <div className="work-contents">
            <div className="big-pic-work"></div>
            <div className="small-work-pics">
              <div className="pics"></div>
              <div className="pics"></div>
              <div className="pics"></div>
              <div className="pics"></div>
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

export default Profile