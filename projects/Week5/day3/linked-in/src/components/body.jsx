import React from "react";
import './body.css'

const Body =()=> {

    return (
        <div className="body">
            <div className="profile-section">
                <div className="image-container">
                    <img id= "profile-pic" src="./src/images/profilepic.jpeg"></img>
                    <img id="coverphoto" src="./src/images/coverphoto.jpeg"></img>
                </div>
                <p className="nameinfo">
                    <h1>Anna Scriven</h1>
                    <h4>Student Software Developer || Milspouse <br></br>Enid, Oklahoma, United States</h4>
                    <button id="contact" type="submit">Contact Info</button>    
                </p>
                
            </div>
            <div className="about-section">
                <div className="aboutsection">
                    <h1>About</h1>
                    <p>
                    I love being part of a team and working on a project from start to finish. I am excited to be part of Code Platoon's Fullstack Victor Cohort, and am looking forward to the challenges and growth that lies ahead in this experience. I am also an Air Force Spouse and love connecting with others in the military community and beyond!

                    </p>

                </div>
            </div>
            <div className="education-section">
                <div className="educationinfo">
                    <h1>Education</h1>
                        <ul>
                            <li>
                                <h4> <img src="./src/images/kstatelogo.png" id="kstatelogo"></img>
                                <a href="https://www.k-state.edu/">Kansas State University 2016-2020</a></h4>
                            </li>
                            <li>
                                <h4> <img src="./src/images/codeplatoonlogo.png" id="cplogo"></img>
                                      <a href="https://www.codeplatoon.org/">Code Platoon 2023-Present</a></h4>
                            </li>
                        </ul>
                </div>

            </div>

        </div>
    )
}

export default Body;