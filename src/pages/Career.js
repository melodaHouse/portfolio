import React, { useRef, useState, useEffect } from 'react';
import { db, storage } from '../Firebase/FirebaseConfig'
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "../css/career.css";
import Banner from "../components/Banner";
import Footer from "../components/Footer";


import { render } from "react-dom";

import { Dots, Spinner } from "react-activity";
import "react-activity/dist/library.css";
const Career = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    const isVerySmallScreen = window.matchMedia("(max-width: 480px)").matches;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('No file chosen');
    
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0] ? e.target.files[0].name : 'No file chosen');
    };

    const submitForm = async () => {
        // Validate fields
        if (!name || !email || !message || !file) {
            alert('Please fill all the fields and attach a resume.');
            return;
        }

        // validate name as full name or halfname or withous any number
        const namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if (!namePattern.test(name)) {
            alert('Please enter a valid name');
            return;
        }
        // validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email');
            return;
        }

        setLoading(true);

        try {
            // Upload the file to Firebase Storage
            const fileRef = ref(storage, `resumes/${file.name}`);
            await uploadBytes(fileRef, file);
            const fileUrl = await getDownloadURL(fileRef);

            // Get current date and time
            const datetime = new Date().toISOString();

            // Save form data to Firestore, including file URL
            await addDoc(collection(db, 'teacherapplications'), {
                name: name,
                email: email,
                message: message,
                fileUrl: fileUrl,
                datetime: datetime,
            });

            alert('Application submitted successfully!');
            setName('');
            setEmail('');
            setMessage('');
            setFile(null);
            setFileName('No file chosen');
            setLoading(false);
        } catch (error) {
            console.error('Error submitting form: ', error);
            alert('Failed to submit the form. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div className="main">
            <div style={{
                display: loading ? 'block' : 'none',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 10,
                background: 'rgba(0, 0, 0, 0.7)',
            }}>
                <Spinner color="#fff" size={32} speed={1} animating={true} style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }} />

            </div>
            <Banner route="Career" />
            <div className="whoWeAre">
                {/* ---------1st */}

                <svg
                    width="100%"   // Ensures the SVG takes up the full width of its container
                    height="auto"  // Automatically adjusts height based on width to maintain aspect ratio
                    viewBox="0 0 1408 739"  // Defines the coordinate system and aspect ratio
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        position: "absolute",  // Positions the SVG absolutely within its container
                        top: "0",  // Adjust based on your layout
                        left: "0",  // Aligns the SVG to the left
                        zIndex: 2,  // Ensures the SVG is on top of other elements
                        display: isVerySmallScreen ? 'none' : 'block',  // Hides the SVG on very small screens
                        maxWidth: "150%",  // Increase the maximum width of the SVG
                        height: "auto",  // Maintains aspect ratio by adjusting height
                        overflow: "hidden",  // Ensures no overflow from the SVG
                    }}
                    preserveAspectRatio="xMidYMid meet"  // Keeps the SVG centered and maintains its aspect ratio
                >
                    <path
                        d="M-15 -5.87697e-05H1429V259.842V504.785C1429 504.785 1180.2 -28.0107 820.393 195.746C820.393 195.746 785.636 203.821 595.533 401.324C387.068 651.989 328.919 698.209 252.957 727.546C203.655 740.316 143.959 745.131 86.782 727.546C26.1469 708.897 22.6014 706.584 5.55695 698.209C-11.4875 689.834 -14.9999 698.209 -15 654.791C-15.0001 611.373 -13.9421 4.76936 -15 -5.87697e-05Z"
                        fill="#F1F5F9"
                    />
                </svg>







                <div className="textContent">
                    <p className="title">Career Guidance</p>
                    <p className="subTitle">
                        Meloda House, we are a passionate community of musicians, educators, and music enthusiasts dedicated to making the world of music accessible to everyone.
                    </p>
                </div>
                <img
                    src={require("../images/career_guidance.jpeg")}
                    alt="whoweare"
                    style={{
                        position: "absolute",
                        top: "10%",
                        right: "-10%",
                        width: "100%",
                        // height: "100%",
                        zIndex: 1,
                        display: isSmallScreen ? 'none' : 'block'
                    }}
                />
            </div>

            {/* =========howitworks */}

            <div className="howItWorks">
                <div className="title">How It Works</div>
                <div className="steps">
                    <div className="step" id="step1">
                        <img src={require("../images/careerHowItWorks1.png")} />
                        <p className="stepTitle">Register</p>
                    </div>
                    <div className="step" id="step2">
                        <img src={require("../images/careerHowItWorks2.png")} />
                        <p className="stepTitle">Verification</p>
                    </div>
                    <div className="step" id="step3">
                        <img src={require("../images/careerHowItWorks3.png")} />
                        <p className="stepTitle">Take classes</p>
                    </div>
                </div>
            </div>

            {/* ==============contact us============ */}
            <div className="contactUs" id="contact">
                <div className="form">
                    <p className="title">Application</p>
                    <p className="subTitle">
                        Write an application with the proper name and email and also attach your resume with it.
                    </p>
                    <div className='inputs'>
                        <div className='nameandmails'>
                            <div className='input'>
                                <label htmlFor='name'>Name</label><br />
                                <input
                                    type='text'
                                    id='name'
                                    placeholder='Enter your name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='input'>
                                <label htmlFor='email'>Email</label><br />
                                <input
                                    type='email'
                                    id='email'
                                    placeholder='Enter your email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='textArea'>
                            <textarea
                                id='message'
                                placeholder='Enter your message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <input
                            type="file"
                            id="file"
                            onChange={handleFileChange}
                            style={{ display: 'none' }} // Hide the file input
                        />
                        <button id="fileButton" onClick={() => document.getElementById('file').click()}>
                            Attach Resume
                        </button>
                        <p id="fileName">{fileName}</p>
                        <button id="submitButton" onClick={submitForm}>Submit</button>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    );
}
export default Career;