import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext, FirebaseContext } from '../store/Contexts'
import swal from 'sweetalert';
import './artistreg.css'

function Artistreg() {
    const { firebase } = useContext(FirebaseContext)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const [artistRegStatus, setartistRegStatus] = useState(true)
    const [info, setInfo] = useState([])
    // const [userInfo, setUserInfo] = useState([])
    const [image, setImage] = useState()
    const [imgURL4, setImgURL4] = useState('')
    const [imgURL1, setImgURL1] = useState('')
    const [imgURL2, setImgURL2] = useState('')
    const [imgURL3, setImgURL3] = useState('')
    const [upImgURL, setUpImgURL] = useState([])
    const [name, setName] = useState('')
    const [location, setlocation] = useState('')
    const [expertise, setExpertise] = useState('')
    const [contact, setContact] = useState('')
    const [address, setAddress] = useState('')
    const [workExp, setWorkExp] = useState('')
    const [aboutMe, setAboutMe] = useState('')
    const [disply, setDisply] = useState("none")

    const date = new Date()
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
    })
    // info.filter((data) => {
    //     // console.log(data.id);
    //     if (data.id === user.uid) {
    //         console.log(data);
    //         setUserInfo(data)
    //         return data
    //     }
    //     return null
    // })
    // console.log(image);
    return (
        <div>
            <div className="artist-reg">
                <div className="filter">
                    <div className="artistreg-content">
                        <div className="artistreg-intro">
                            <h1>Register as an artist</h1> <br /><br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> <br /><br />

                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <br /><br /><br />

                                minim veniam, quis nostrud exercitation
                            </p>
                        </div>
                        {info.filter((data) => {
                            // console.log(data.id);
                            if (data.id === user.uid) {
                                // console.log(data);
                                setartistRegStatus(false)
                                navigate('/profile')
                                return null
                            }
                            return null

                        })}
                        {artistRegStatus ? <div className="artist-reg-form" >
                            <div className="form-fields">
                                <form style={disply === "none" ? { display: "flex" } : { display: "none" }}>
                                    <div className='form-input-filed'>
                                        <div>
                                            <label> Name</label><br />
                                            <input type="text" name="name" placeholder='Enter Name' required onChange={(e) => setName(e.target.value)} value={name} />
                                        </div>
                                        <div>
                                            <label> Location</label><br />
                                            <input type="text" name="name" placeholder='Enter Location' required onChange={(e) => setlocation(e.target.value)} value={location} /><br />
                                        </div>
                                    </div>
                                    <div className='form-input-filed'>
                                        <div>
                                            <label> Expertise</label><br />
                                            <input type="text" name="name" placeholder='Enter your Expertise' required onChange={(e) => setExpertise(e.target.value)} value={expertise} />
                                        </div>
                                        <div>
                                            <label> Contact</label><br />
                                            <input type="number" name="name" placeholder='Enter contact no.' required onChange={(e) => setContact(e.target.value)} value={contact} /><br />
                                        </div>
                                    </div>
                                    <div className='form-input-filed'>
                                        <div>
                                            <label> Address</label><br /><br />
                                            <textarea type="text" style={{ height: '90px', padding: '20px' }} name="name" placeholder='' required onChange={(e) => setAddress(e.target.value)} value={address} ></textarea>
                                        </div>
                                        <div>
                                            <label> Work experience <br /><span style={{ fontSize: '10px' }}>(in years)</span></label><br />
                                            <input type="number" name="name" placeholder='Enter no. of years' required onChange={(e) => setWorkExp(e.target.value)} value={workExp} /><br />
                                            <div></div>
                                            <button onClick={(e) => {
                                                // if (name !== ''&& location !== '' && expertise !== '' && contact !== '' && address !== '' && workExp !== '') {
                                                e.preventDefault()
                                                //     user ? firebase.firestore().collection('Artist-info').add({
                                                //         Name: name,
                                                //         Location: location,
                                                //         Expertise: expertise,
                                                //         Contact: contact,
                                                //         Address: address,
                                                //         WorkExperience: workExp,
                                                //         CreatedDate: date.toDateString(),
                                                //         userId: user.uid
                                                //     }).catch((error) => {
                                                //         console.log(error.message);
                                                //     }).then(()=>{
                                                //         swal("Good job!", "You successfully  Submited!", "success");
                                                //         navigate('/onboarding')
                                                //     }) : navigate('/login')
                                                // }else{
                                                //     alert('Fill all the filed')
                                                // }
                                                setDisply(disply === "none" ? "block" : "none")

                                            }}>Next</button>
                                        </div>
                                    </div>
                                    {/* <div className="form-input-filed">
                                            <div></div>
                                            <button>Next</button>
                                        </div> */}
                                </form>


                                <form style={disply === "none" ? { display: "none" } : { display: "flex" }}>
                                    <div className='form-input-filed'>
                                        <div style={{ width: "80%" }}>
                                            <label> Your Bio</label><br />
                                            <textarea name="bio" id="bio" placeholder='Enter Name' onChange={(e) => setAboutMe(e.target.value)} value={aboutMe} required></textarea>
                                        </div>
                                    </div>
                                    <div className='form-input-filed'>
                                        <div>
                                            <label> Add your photos of work</label><br />
                                            <br />
                                            <label htmlFor="customFile">Upload here</label>
                                            <input id="customFile" type="file" onChange={(e) => {
                                                setImage(e.target.files[0])
                                                setImgURL4(URL.createObjectURL(e.target.files[0]))
                                                // imgurl1 = URL.createObjectURL(e.target.files[0])
                                                // console.log(imgurl1);
                                                // setImgname(e.target.files[0].name);
                                                firebase.storage().ref(`${user.uid}/work/${e.target.files[0].name}/`).put(e.target.files[0]).then(({ ref }) => {
                                                    ref.getDownloadURL().then((url) => {
                                                        // console.log(url);
                                                        setUpImgURL(...upImgURL, url)
                                                        firebase.firestore().collection('Artist-info').doc(user.uid).update({
                                                            workImgs: upImgURL
                                                        })
                                                    })
                                                })
                                                // console.log(e.target.file);
                                            }} style={{ height: '120px' }} name="name" placeholder='' required />
                                            <p className='img-p' style={image ? { backgroundImage: `url(${imgURL4})` } : null}></p>
                                        </div>
                                        <div>
                                            <br /><br />
                                            <label htmlFor="customFile">Upload here</label>
                                            <input id="customFile" type="file" onChange={(e) => {
                                                setImage(e.target.files[0])
                                                setImgURL1(URL.createObjectURL(e.target.files[0]))
                                                // imgurl2 = URL.createObjectURL(e.target.files[0])
                                                // setImgname(e.target.files[0].name);
                                                firebase.storage().ref(`${user.uid}/work/${e.target.files[0].name}/`).put(e.target.files[0]).then(({ ref }) => {
                                                    ref.getDownloadURL().then((url) => {
                                                        // console.log(url);
                                                        setUpImgURL(...upImgURL, url)
                                                        firebase.firestore().collection('Artist-info').doc(user.uid).update({
                                                            workImgs: upImgURL
                                                        })
                                                    })
                                                })
                                                // console.log(e.target.file);
                                            }} style={{ height: '120px' }} name="name" placeholder='' required />
                                            <p className='img-p' style={image ? { backgroundImage: `url(${imgURL1})` } : null}></p>
                                        </div>
                                    </div>
                                    <div className='form-input-filed'>
                                        <div>
                                            <br /><br />
                                            <label htmlFor="customFile">Upload here</label>
                                            <input id="customFile" type="file" onChange={(e) => {
                                                setImage(e.target.files[0])
                                                setImgURL2(URL.createObjectURL(e.target.files[0]))
                                                // imgurl3 = URL.createObjectURL(e.target.files[0])
                                                // setImgname(e.target.files[0].name);
                                                firebase.storage().ref(`${user.uid}/work/${e.target.files[0].name}/`).put(e.target.files[0]).then(({ ref }) => {
                                                    ref.getDownloadURL().then((url) => {
                                                        // console.log(url);
                                                        setUpImgURL(...upImgURL, url)
                                                        firebase.firestore().collection('Artist-info').doc(user.uid).update({
                                                            workImgs: upImgURL
                                                        })
                                                    })
                                                })
                                                // console.log(e.target.file);
                                                
                                            }} style={{ height: '120px' }} name="name" placeholder='' required />
                                            <p className='img-p' style={image ? { backgroundImage: `url(${imgURL2})` } : null}></p>
                                        </div>
                                        <div>
                                            <br /><br />
                                            <label htmlFor="customFile">Upload here</label>
                                            <input id="customFile" type="file" onChange={(e) => {
                                                setImage(e.target.files[0])
                                                setImgURL3(URL.createObjectURL(e.target.files[0]))
                                                // imgurl4 = URL.createObjectURL(e.target.files[0])
                                                // setImgname(e.target.files[0].name);
                                                firebase.storage().ref(`${user.uid}/work/${e.target.files[0].name}/`).put(e.target.files[0]).then(({ ref }) => {
                                                    ref.getDownloadURL().then((url) => {
                                                        // console.log(url);
                                                        setUpImgURL(...upImgURL, url)
                                                        firebase.firestore().collection('Artist-info').doc(user.uid).update({
                                                            workImgs: upImgURL
                                                        })
                                                    })
                                                })
                                                // console.log(e.target.file);
                                            }} style={{ height: '120px' }} name="name" placeholder='' required />
                                            <p className='img-p' style={image ? { backgroundImage: `url(${imgURL3})` } : null}></p>.
                                        </div>
                                    </div>
                                    <div className='sub-btn'>
                                        <button style={{ margin: "0px auto" }} onClick={(e) => {
                                            if (name !== '' && location !== '' && expertise !== '' && contact !== '' && address !== '' && workExp !== '') {
                                                e.preventDefault()
                                                user ? firebase.firestore().collection('Artist-info').doc(user.uid).set({
                                                    Name: name,
                                                    Location: location,
                                                    Expertise: expertise,
                                                    Contact: contact,
                                                    Address: address,
                                                    WorkExperience: workExp,
                                                    AboutMe: aboutMe,
                                                    CreatedDate: date.toDateString(),
                                                    userId: user.uid
                                                }).catch((error) => {
                                                    console.log(error.message);
                                                }).then(() => {
                                                    swal("Good job!", "You successfully  Submited!", "success");
                                                    navigate('/profile')
                                                }) : navigate('/login')
                                            } else {
                                                alert('Fill all the filed')
                                            }

                                        }}>Submit</button>
                                    </div>
                                    {/* <div className="form-input-filed">
                                            <div></div>
                                            <button>Next</button>
                                        </div> */}
                                </form>

                            </div>
                        </div> : null}







                    </div>
                </div>

            </div>
        </div>
    )
}

export default Artistreg