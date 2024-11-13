import React, { useRef, useState, useEffect } from 'react';
import { db, storage } from '../Firebase/FirebaseConfig'
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import TrialCss from "../css/Trial.module.css";

import { render } from "react-dom";

import { Dots, Spinner } from "react-activity";
import "react-activity/dist/library.css";

function Trial() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [category, setCategory] = useState("");
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(name);
        console.log(email);
        console.log(gender);
        console.log(category);
    }, [name, email, gender, category]);

    const submitTrialForm = async () => {
        // Validate all variables
        if (name === "" || email === "" || gender === "" || category === "none") {
            alert("Please fill all the fields");
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
            // Get current date and time
            const datetime = new Date().toISOString();

            // Create a new document in the "trials" collection
            await addDoc(collection(db, "trials"), {
                name: name,
                email: email,
                gender: gender,
                category: category,
                datetime: datetime
            });

            // Show success message
            alert("Trial form submitted successfully!");

            // Clear form fields after submission
            setName('');
            setEmail('');
            setGender('');
            setCategory('none');
            setLoading(false);

        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Failed to submit form. Please try again.");
            setLoading(false);
        }
    };
    return (
        <div className={TrialCss.main}>
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
            <div className={TrialCss.left}>
                <p className={TrialCss.title}>Book a free trial</p>
                <p className={TrialCss.subTitle}>Learn, Play, and Create with Meloda House</p>
            </div>
            <div className={TrialCss.right}>
                <div className={TrialCss.form}>
                    <div className={TrialCss.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name here"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={TrialCss.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter your email address here"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={TrialCss.formGroup}>
                        <label>Gender</label>
                        {/* Create a custom gender selector */}
                        <div className={TrialCss.genderSelecter}>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                id="male"
                                className="radioInput"
                                onChange={(e) => setGender(e.target.value)} // Set gender to "male"
                            />
                            <label htmlFor="male">Male</label>

                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                id="female"
                                className="radioInput"
                                onChange={(e) => setGender(e.target.value)} // Set gender to "female"
                            />
                            <label htmlFor="female">Female</label>

                            <input
                                type="radio"
                                name="gender"
                                value="others"
                                id="others"
                                className="radioInput"
                                onChange={(e) => setGender(e.target.value)} // Set gender to "others"
                            />
                            <label htmlFor="others">Others</label>

                            {/* <p>Selected Gender: {gender}</p> Display the selected gender */}
                        </div>
                    </div>
                    <div className={TrialCss.formGroup}>
                        <label>Category</label>
                        <select name="category" id={TrialCss.courses}
                            value={category} // Bind the selected value
                            onChange={(e) => setCategory(e.target.value)} // Update state on change
                        >
                            <option value="none">Select</option>
                            <option value="hindustanivocal
                            ">Hindustani Vocal</option>
                            <option value="bollywoodvocal
                            ">Bollywood Vocal</option>
                            <option value="piano">Piano</option>
                            <option value="guitar">Guitar</option>
                            <option value="tabla">Tabla</option>
                        </select>
                    </div>
                    <input
                        type="submit"
                        id={TrialCss.submitButton}
                        value="Send"
                        onClick={() => {
                            submitTrialForm();
                        }
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Trial;
