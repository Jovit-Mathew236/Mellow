import React, { useContext, useEffect, useState } from 'react'
import Option from '../assets/icons/Option'
import { AuthContext, FirebaseContext } from '../store/Contexts'
import "./onboarding.css"
import "./admin.css"

function Admin() {
  const { firebase } = useContext(FirebaseContext)
  const { user } = useContext(AuthContext)
  const [info, setInfo] = useState([])
  const [show, setShow] = useState(false)
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
  }, [firebase])
  return (
    <div>
      <div className="nav">
        <img src={user ? user.photoURL : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.jpeg"} alt="" />
      </div>
      <br />
      <div className="all-freelancer">
        <h2>All freelancers</h2>
        <div className="freelancers">
          {info.map((exp, index) => {
            return (
              <div key={index} className="freelancer">
                <p className="profile-pic" style={user ? { backgroundImage: `url(${user.photoURL})` } : null}></p>
                <p className='name'>{exp.Name}</p>
                <div className='freelancer-option-btn' onClick={() => setShow(!show)}>
                  <p className='freelancer-option'><Option /></p>
                  {show ? <div key={index} className="option-content">
                    <p>Restrict</p>
                    <p>Ban</p>
                    <p>Download profile</p>
                  </div> : null}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <br />
      <div className="reported-all-freelancers">
        <h2>Reported Profiles</h2>
        <div className="freelancers">
          {info.map((exp, index) => {
            return (
              <div key={index} className="freelancer">
                <p className="profile-pic" style={user ? { backgroundImage: `url(${user.photoURL})` } : null}></p>
                <p className='name'>{exp.Name}</p>
                <div className='freelancer-option-btn'>
                  <p className='freelancer-option'><Option /></p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Admin