import React, { useContext, useEffect, useState } from 'react'
import Facebook from '../assets/icons/Facebook'
import Linkedin from '../assets/icons/Linkedin'
import Twitter from '../assets/icons/Twitter'
import { AuthContext, FirebaseContext } from '../store/Contexts'
import "./onboarding.css"
import "./profile.css"
import "./home.css"
import { useNavigate } from 'react-router-dom'
import Camere from '../assets/Camere'
import SignOut from '../assets/icons/SignOut'
import Phone from '../assets/icons/Phone'
import Whatsapp from '../assets/icons/Whatsapp'
import Mail from '../assets/icons/Mail'

function Profile() {
  const { firebase } = useContext(FirebaseContext)
  const { user, userStatus } = useContext(AuthContext)
  const navigate = useNavigate()
  const [info, setInfo] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [image, setImage] = useState()
  // const [imgname, setImgname] = useState('')
  // var userid = userId
  // console.log(userid);
  useEffect(() => {
    firebase.firestore().collection('Artist-info').get().then((snapshot) => {
      const alldocs = snapshot.docs.map((infos) => {
        return {
          ...infos.data(),
          id: infos.id
        }
      })
      setInfo(alldocs)
    })
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
  // console.log(imgname);
  return (
    <div>

      <div className="nav" >

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
            <img key={index} src={image ? URL.createObjectURL(image) : info.profilePic} alt="" />
          )
        }) : navigate('/')}
        {user ? <div className='logout-btn' style={{ margin: "4px -30px 4px 20px" }}>
          <p className='dropdown'><SignOut /> </p>
          <div className="dropdown-content">
            <p onClick={() => {
              firebase.auth().signOut()
            }}>LogOut</p>
          </div>
        </div> : null}
      </div>


      <br />
      <div className="user-profile-contents">
        <div className="user-profile-banner">
          <p className="banner" style={{ backgroundImage: `url(${'/static/media/user-banner.783996bc.png'})` }}>{userStatus === "Participent" ? <button onClick={() => { navigate('/editprofile') }}>Edit profile</button> : null}</p>
        </div>
        <div className="profile-about-flex">
          {user ? info.filter((data) => {
            // console.log(data.id);
            if (data.id === user.uid) {
              // console.log(data);
              return data
            }
            return null
          }).map((info, index) => {
            // console.log(info);
            // console.log(image);
            return (
              <div className="profile-div" key={index}>
                {userInfo.filter((data) => {
                  // console.log(data.id);
                  if (data.id === user.uid) {
                    // console.log(data);
                    return data
                  }
                  return null
                }).map((info, index) => {
                  // console.log(info === null ? "nop": "yeah");

                  return (
                    <p key={index} className="profile-pic" style={image ? { backgroundImage: `url(${URL.createObjectURL(image)})` } : { backgroundImage: `url(${info.profilePic})` }}>
                      <div className='image-input'>
                        <label htmlFor="customFile" className="custom-file-upload"><Camere /> </label>
                        <input id="customFile" onChange={(e) => {
                          setImage(e.target.files[0])
                          // setImgname(e.target.files[0].name);
                          firebase.storage().ref(`${user.uid}/profile/${e.target.files[0].name}/`).put(e.target.files[0]).then(({ ref }) => {
                            ref.getDownloadURL().then((url) => {
                              console.log(url);
                              firebase.firestore().collection('user').doc(user.uid).update({
                                profilePic: url
                              })
                            })
                          })
                          // console.log(e.target.file);
                        }} type="file" />
                      </div>
                    </p>
                  )
                })}

                <br />
                <h2 className="name">{info.Name}</h2>
                <p className="user-expertise">{info.Expertise}  ·  {info.WorkExperience}+ Years of experience</p>
                <p className="location">{info.Location}</p>
                <div className="user-contact">
                  <a href={`tel:+91${info.Contact}`}><div className="contact-ph"><Phone /> Contact</div></a>
                  <a href={`https://wa.me/${info.Contact}`}><div className="contact-whatsapp"><Whatsapp /> </div></a>
                  <a href={`mailto:${''}`}><div className="contact-email"><Mail /></div></a>
                </div>
              </div>
            )
          }) : navigate('/')}

          {user ?info.filter((data) => {
            // console.log(data.id);
            if (data.id === user.uid) {
              // console.log(data);
              return data
            }
            return null
          }).map((info, index) => {
            // console.log(info);
            return (
              <div className="about-div" key={index}>
                <h2>About me</h2>
                <p>{info.AboutMe}</p>
                <br />
                <h2>Specialities</h2>
                <div className="speciality">
                  <p>Wedding photography</p>
                  <p>Product photography</p>
                  <p>Event photography</p>
                </div>
              </div>
            )
          }): navigate('/')}

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