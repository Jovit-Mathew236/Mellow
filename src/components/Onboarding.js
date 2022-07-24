import React, { useContext } from 'react'
import Search from '../assets/Search'
import { AuthContext, FirebaseContext } from '../store/Contexts';
import "./onboarding.css"
import "../images/demobg1.jpg"
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Onboarding() {
    const { firebase } = useContext(FirebaseContext)
    const { user ,setUserId} = useContext(AuthContext)
    const navigate = useNavigate()
    const [info, setInfo] = useState([])
    const [userInfo, setUserInfo] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [expertise, setExpertise] = useState('Expertise')
    const [location, setLocation] = useState('Location')
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
    // console.log(user.photoURL);
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

            {/* <div className="nav">
                <img onClick={() => { navigate('/profile') }} src={user ? user.photoURL : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.jpeg"} alt="" />
            </div> */}
            <div className="page">
                <div className="p">
                    <h1>Hire the best freelance <br />
                        artists, online.</h1>
                    <br />
                    <p>Hire and meet over 7,586+ freeance artists in all Kerala</p>
                </div>
                <div className="search">
                    <input type="text" placeholder='Search For Artists...' onChange={(e) => { setSearchTerm(e.target.value) }} />
                    <select name="Section" id="sectionlist" required onChange={e => { setExpertise(e.target.value) }} value={expertise}>
                        <option value="">Expertise</option>
                        {info.map((exp, index) => {
                            return (
                                <option key={index} value="Location1">{exp.Expertise}</option>
                            )
                        })}
                    </select>
                    <select name="Section" id="sectionlist" required onChange={e => { setLocation(e.target.value) }} value={location}>
                        <option value="">Location</option>
                        {info.map((loc, index) => {
                            return (
                                <option key={index} value="Location1">{loc.Location}</option>
                            )
                        })}
                    </select>
                    <button onClick={(e) => {

                    }}><Search /> </button>
                </div>
            </div>
            {user ? null : <div className="pics">
                <div className="firstpic"> </div>
                <div className="secpic"></div>
                <div className="thirdpic"></div>
            </div>}

            {user ? <div className="artists-infos">
                <div className="artist-row">
                    {info.filter((val) => {
                        if (searchTerm === "") {
                            return val
                        } else if (val.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        return null
                    }).map((info, index) => {
                        // console.log(info);
                        return (
                            <div key={index} className="artist" onClick={()=>{
                                setUserId(info.userId)
                                navigate('/userprofileview')
                            }}>

                                <div className="imgs" style={{ backgroundImage: "url('/static/media/demobg1.cc5791e0.jpg')" }}>
                                    {userInfo.filter((userinfo) => {
                                        if (info.userId === userinfo.id) {
                                            // console.log(userinfo.profilePic)
                                            return userinfo
                                        }
                                        return null
                                    }).map((info, index) => {
                                        // console.log(info);
                                        return (
                                            <img key={index} src={info.profilePic ? info.profilePic : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.jpeg"} alt="avathar" className="artist-avathar" />
                                        )
                                    })}

                                </div>
                                <div className="artist-info-content">
                                    <h2>{info.Name}</h2>
                                    <p>{info.Expertise}</p>
                                    <p>{info.WorkExperience} year Experience</p>
                                </div>
                            </div>
                        )

                    })}

                </div>

            </div> : null}
        </div>
    )
}

export default Onboarding