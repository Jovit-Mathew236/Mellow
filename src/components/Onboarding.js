import React from 'react'
import Search from '../assets/Search'
import "./onboarding.css"

function Onboarding() {
    return (
        <div>
            <div className="page">
                <div className="p">
                    <h1>Hire the best freelance <br />
                        artists, online.</h1>
                    <br />
                    <p>Hire and meet over 7,586+ freeance artists in all Kerala</p>
                </div>
                <div className="search">
                    <input type="text" placeholder='Search For Artists...' />
                    <select name="Section" id="sectionlist" required>
                        <option value="">Expertise</option>
                        <option value="Expertise1">Expertise1</option>
                        <option value="Expertise2">Expertise2</option>
                        <option value="Expertise3">Expertise3</option>
                        <option value="Expertise4">Expertise4</option>
                    </select>
                    <select name="Section" id="sectionlist" required>
                        <option value="">Location</option>
                        <option value="Location1">Location1</option>
                        <option value="Location2">Location2</option>
                        <option value="Location3">Location3</option>
                        <option value="Location4">Location4</option>
                    </select>
                    <button><Search /> </button>
                </div>
            </div>
            <div className="pics">
                <div className="firstpic"> </div>
                <div className="secpic"></div>
                <div className="thirdpic"></div>



            </div>
        </div>
    )
}

export default Onboarding