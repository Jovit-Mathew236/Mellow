import React, { useContext, useEffect, useState } from 'react'
import Option from '../assets/icons/Option'
import { AuthContext, FirebaseContext } from '../store/Contexts'
import "./onboarding.css"
import "./admin.css"
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom'

function Admin() {
  const { firebase } = useContext(FirebaseContext)
  const { user, setUserId } = useContext(AuthContext)
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState([])
  const [info, setInfo] = useState([])
  const [myStyle, setMyStyle] = useState({});
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
  }, firebase)

  const handleClick = (id) => {
    setMyStyle((prevState) => ({
      ...myStyle,
      [id]: !prevState[id]
    }));
  };

  return (
    <div>
      <div className="nav" >

        {userInfo.filter((data) => {
          // console.log(data.id);
          if (data.id === user.uid) {
            // console.log(data);
            return data
          }
          return null
        }).map((info, index) => {
          // console.log(info);

          return (
            <img key={index} onClick={() => { navigate('/profile') }} src={user ? info.profilePic : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.jpeg"} alt="" />
          )
        })}
      </div>
      <br />
      <div className="all-freelancer">
        <h2>All freelancers</h2>
        <div className="freelancers">
          {info.map((exp, index) => {
            return (
              <div key={index} className="freelancer">
                {userInfo.filter((userinfo) => {
                  if (exp.userId === userinfo.id) {
                    // console.log(userinfo.profilePic)
                    return userinfo
                  }
                  return null
                }).map((info, index) => {
                  // console.log(info);
                  return (
                    <p key={index} className="profile-pic" style={user ? { backgroundImage: `url(${info.profilePic})` } : null}></p>
                  )
                })}
                {/* <p className="profile-pic" style={user ? { backgroundImage: `url(${user.photoURL})` } : null}></p> */}
                <p className='name'>{exp.Name}</p>
                <div className='freelancer-option-btn' onClick={(

                ) => handleClick(index)}>
                  <p className='freelancer-option'><Option /></p>
                  <div className="option-content" style={{ opacity: myStyle[`${index}`] ? "100%" : "0%" }}>
                    <p onClick={() => {
                      // exp.updateUser(exp.userId, { disabled: true })
                      // console.log(!exp.Restriction_status);
                      firebase.firestore().collection('Artist-info').doc(exp.userId).update({
                        Restriction_status: !exp.Restriction_status
                      }).catch((error) => {
                        console.log(error.message);
                      }).then(() => {
                        swal("Good job!", "You successfully  restricted!", "success");
                      })

                    }}>{exp.Restriction_status === true ? "Unrestrict" : "Restrict"}</p>
                    <p onClick={() => {
                      firebase.firestore().collection('Artist-info').doc(exp.userId).delete().catch((error) => {
                        console.log(error.message);
                      }).then(() => {
                        firebase.firestore().collection('user').doc(exp.userId).delete().catch((error) => {
                          console.log(error.message);
                        })
                      }).then(() => {
                        swal("Good job!", "You successfully  restricted!", "success");
                      })

                    }}>Ban</p>
                    <p onClick={() => {
                      setUserId(exp.userId)
                      navigate('/userprofileview')
                    }}>Download profile</p>
                  </div>
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

              userInfo.filter((userinfo) => {
                if (exp.userId === userinfo.id) {
                  // console.log(exp.Restriction_status)
                  return exp.Restriction_status === true ? userinfo : null
                }
                return null
              }).map((info, index) => {
                // console.log(info);
                return (
                  <div key={index} className="freelancer">
                    <p key={index} className="profile-pic" style={user ? { backgroundImage: `url(${info.profilePic})` } : null}></p>
                    <p className='name'>{exp.Name}</p>
                    <div className='freelancer-option-btn'>
                      <p className='freelancer-option'><Option /></p>
                    </div>
                  </div>
                )
              })

            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Admin