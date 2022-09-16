import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext, FirebaseContext } from '../store/Contexts'
import swal from 'sweetalert';
import './artistreg.css'

function EditProfile() {
    const { firebase } = useContext(FirebaseContext)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [image, setImage] = useState()
    const [img, setImg] = useState([])
    const [upImgURL, setUpImgURL] = useState([])
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
    }, [firebase])
    return (
        <div>
            <div className="artist-reg">
                <div className="filter">
                    <div className="artistreg-content">
                        <div className="artistreg-intro">
                            <h1>Edit Your Artist Profile</h1> <br /><br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> <br /><br />

                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <br /><br /><br />

                                minim veniam, quis nostrud exercitation
                            </p>
                        </div>
                        {info.filter((data) => {
                            // console.log(data.id);
                            if (data.id === user.uid) {
                                // console.log(data);
                                return data
                            }
                            return null
                        }).map((info, index) => {
                            // console.log(info);

                            return (
                                <div className="artist-reg-form" key={index}>
                                    <div className="form-fields">
                                        <form style={disply === "none" ? { display: "flex" } : { display: "none" }}>
                                            <div className='form-input-filed'>
                                                <div>
                                                    <label> Name</label><br />
                                                    <input type="text" name="name" placeholder='Enter Name' required onChange={(e) => {
                                                        setName(e.target.value)
                                                        firebase.firestore().collection('Artist-info').doc(user.uid).update({
                                                            Name: e.target.value
                                                        })
                                                    }} value={info.Name} />
                                                </div>
                                                <div>
                                                    <label> Location</label><br />
                                                    <input type="text" name="name" placeholder='Enter Location' required onChange={(e) => {
                                                        setlocation(e.target.value)
                                                        firebase.firestore().collection('Artist-info').doc(user.uid).update({
                                                            Location: e.target.value
                                                        })
                                                    }} value={info.Location} /><br />
                                                </div>
                                            </div>
                                            <div className='form-input-filed'>
                                                <div>
                                                    <label> Expertise</label><br />
                                                    <input type="text" name="name" placeholder='Enter your Expertise' required onChange={(e) => {
                                                        setExpertise(e.target.value)
                                                        firebase.firestore().collection('Artist-info').doc(user.uid).update({
                                                            Expertise: e.target.value
                                                        })
                                                    }} value={info.Expertise} />
                                                </div>
                                                <div>
                                                    <label> Contact</label><br />
                                                    <input type="text" name="name" placeholder='Enter contact no.' required onChange={(e) => {
                                                        setContact(e.target.value)
                                                        firebase.firestore().collection('Artist-info').doc(user.uid).update({
                                                            Contact: e.target.value
                                                        })
                                                    }} value={info.Contact} /><br />
                                                </div>
                                            </div>
                                            <div className='form-input-filed'>
                                                <div>
                                                    <label> Address</label><br /><br />
                                                    <input type="text" style={{ height: '120px' }} name="name" placeholder='' required onChange={(e) => {
                                                        setAddress(e.target.value)
                                                        firebase.firestore().collection('Artist-info').doc(user.uid).update({
                                                            Address: e.target.value
                                                        })
                                                    }} value={info.Address} />
                                                </div>
                                                <div>
                                                    <label> Work experience <br /><span style={{ fontSize: '10px' }}>(in years)</span></label><br />
                                                    <input type="text" name="name" placeholder='Enter no. of years' required onChange={(e) => {
                                                        setWorkExp(e.target.value)
                                                        firebase.firestore().collection('Artist-info').doc(user.uid).update({
                                                            WorkExperience: e.target.value
                                                        })
                                                    }} value={info.WorkExperience} /><br />
                                                    <div></div>
                                                    <button onClick={(e) => {
                                                        // if (name !== ''&& location !== '' && expertise !== '' && contact !== '' && address !== '' && workExp !== '') {
                                                        // e.preventDefault()
                                                        // setImg([...info.workImgs])
                                                        // console.log(img);
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
                                                    <textarea name="bio" id="bio" placeholder='Enter Name' required onChange={(e) => {
                                                        setAboutMe(e.target.value)
                                                        firebase.firestore().collection('Artist-info').doc(user.uid).update({
                                                            AboutMe: e.target.value
                                                        })
                                                    }} value={info.AboutMe} ></textarea>
                                                </div>
                                            </div>
                                            <label style={{ marginLeft: "10%" }}> Add your photos of work</label><br />
                                            <div className='form-input-filed'>
                                                <div>

                                                    {/* <br /> */}
                                                    <div className="input-img-div">
                                                        <label htmlFor="customFile">Upload here</label>
                                                        <input id="customFile" type="file" onChange={(e) => {
                                                            setImage(e.target.files[0])

                                                            setImg(e ? current  => [...current, URL.createObjectURL(e.target.files[0])] : null)
                                                            // console.log(img);

                                                            // imgurl1 = URL.createObjectURL(e.target.files[0])
                                                            // console.log(imgurl1);
                                                            // setImgname(e.target.files[0].name);

                                                            firebase.storage().ref(`${user.uid}/work/${e.target.files[0].name}/`).put(e.target.files[0]).then(({ ref }) => {
                                                                ref.getDownloadURL().then((url) => {
                                                                    // console.log(url);
                                                                    setUpImgURL(current => [...current,url])
                                                                    firebase.firestore().collection('Artist-info').doc(user.uid).update({
                                                                        workImgs: upImgURL
                                                                    })
                                                                })
                                                            })

                                                            // console.log(e.target.file);
                                                        }} style={{ height: '120px' }} name="name" placeholder='' required />
                                                        {/* <p className='img-p' style={image ? { backgroundImage: `url(${imgURL4})` } : null}></p> */}
                                                    </div>
                                                </div>
                                                <div>
                                                    {/* <br /> */}
                                                    <div className="input-img-div input-pic-div">

                                                        <p className='img-p' style={image ? { backgroundImage: `url(${img[0]})` } : null}></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='form-input-filed'>
                                                <div>
                                                    <br />
                                                    <div className="input-img-div input-pic-div">

                                                        <p className='img-p' style={image ? { backgroundImage: `url(${img[1]})` } : null}></p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <br /><div className="input-img-div input-pic-div">

                                                        <p className='img-p' style={image ? { backgroundImage: `url(${img[2]})` } : null}></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button style={{ width: "90%", margin: "0px auto" }} onClick={(e) => {
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
                                                        workImgs: upImgURL,
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
                                            {/* <div className="form-input-filed">
                                        <div></div>
                                        <button>Next</button>
                                    </div> */}
                                        </form>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EditProfile