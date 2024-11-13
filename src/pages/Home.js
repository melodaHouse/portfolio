import React, { useRef, useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import YouTube from 'react-youtube';
import { db, storage } from '../Firebase/FirebaseConfig'
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Footer from '../components/Footer';
import Banner from '../components/Banner';
// import css
import '../css/home.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CountUp from 'react-countup';

import { render } from "react-dom";

import { Dots, Spinner } from "react-activity";
import "react-activity/dist/library.css";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    const isVerySmallScreen = window.matchMedia("(max-width: 480px)").matches;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const submitContactForm = async (e) => {
        // e.preventDefault();
        // validate name email and message
        if (name === '' || email === '' || message === '') {
            alert('Please fill all the fields');
            return;
        }
        // validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email');
            return;
        }
        // validate name as full name or halfname or withous any number
        const namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if (!namePattern.test(name)) {
            alert('Please enter a valid name');
            return;
        }
        // send the form data to the server
        setLoading(true);

        try {
            // Get current date and time
            const datetime = new Date().toISOString();

            // Add data to Firebase Firestore
            await addDoc(collection(db, "contact"), {
                name: name,
                email: email,
                message: message,
                datetime: datetime,
            });

            console.log('Data successfully saved to Firebase!');
            alert('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
            setLoading(false);
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('An error occurred. Please try again later.');
            setLoading(false);
        }



    }

    useEffect(() => {
        console.log('name', name);
        console.log('email', email);
        console.log('message', message);
    }, [name, email, message]);


    useEffect(() => {
        // Check if the URL contains a hash
        if (window.location.hash === '#support') {
            const supportElement = document.getElementById('submitButton');
            if (supportElement) {
                supportElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);
    const carouselResponsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const singleCarouselResponsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const [isCounterVisible, setIsCounterVisible] = useState(false);
    const countRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsCounterVisible(true);
                    observer.disconnect(); // Stop observing after the first trigger
                }
            },
            { threshold: 0.1 } // Adjust this value as needed
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, []);

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
            <Banner route="Home" />
            {/* =======================who we are=================== */}
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
                    <p className="title">Who We Are</p>
                    <p className="subTitle">
                        Meloda House, we are a passionate community of musicians, educators, and
                        music enthusiasts dedicated to making the world of music accessible to
                        everyone.
                    </p>
                </div>
                <img
                    src={require("../images/tablaHand.jpeg")}
                    alt="whoweare"
                    style={{
                        position: "absolute",
                        top: "30%",
                        right: "-10%",
                        width: "90%",
                        height: "auto",
                        zIndex: 1,
                        display: isSmallScreen ? 'none' : 'block'
                    }}
                />
            </div>
            {/* ==============================why meloda================= */}
            <div className="whyMeloda">
                <div className="textContent">
                    <p className="title">Why Meloda</p>
                    <p className="subTitle">
                        Meloda House is a place where you can learn, play, and create music. We
                        offer a wide range of courses, workshops, and events for all ages and
                        skill levels.
                    </p>
                </div>
                {/* ---2nd */}
                <svg
                    width="100%"   //-- Ensures the SVG takes up the full width of its container -->
                    height="auto"  //</div>!-- Automatically adjusts the height based on the width to maintain aspect ratio -->
                    viewBox="0 0 1408 650"  //<!-- Defines the coordinate system of the SVG -->
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        position: "absolute",  //< !--Positions the SVG absolutely within its container -->
                        bottom: "-17px",  //<!-- Adjusts the bottom positioning -->
                        left: "0",  //<!-- Aligns the SVG to the left -->
                        zIndex: 2,  //<!-- Ensures the SVG is on top of other elements -->
                        display: isVerySmallScreen ? 'none' : 'block',  //<!-- Hides the SVG on very small screens -->
                        maxWidth: "100%",  //<!-- Prevents the SVG from exceeding its container's width -->
                        height: "auto",  //<!-- Makes the height responsive -->
                    }}
                    preserveAspectRatio="xMinYMin meet"  //<!-- Scales the SVG while keeping its aspect ratio -->
                >
                    <path d="M1423 739H-21V479.158C-21 479.158 227.797 767.011 587.607 543.254C587.607 543.254 622.364 535.179 812.467 337.676C1020.93 87.0111 1079.08 40.7909 1155.04 11.4543C1204.35 -1.31635 1264.04 -6.1311 1321.22 11.4543C1381.85 30.1034 1385.4 32.4157 1402.44 40.791C1419.49 49.1662 1423 40.7909 1423 84.2089C1423 127.627 1421.94 734.231 1423 739Z" fill="#F1F5F9" />
                </svg>




            </div>
            {/* =========================counter===================== */}
            <div className="counter">
                <div className="mainCounter">
                    <div className="count" ref={countRef}>
                        <img className="countImage" src={require("../images/counter1.png")} alt="counter1" />
                        <p className="countNumber">
                            {isCounterVisible && (
                                <CountUp
                                    start={0}
                                    end={15}
                                    duration={2}
                                />
                            )}
                            +</p>
                        <p className="countText">User Countries</p>
                    </div>
                    <div className="count">
                        <img className="countImage" src={require("../images/counter2.png")} alt="counter1" />
                        <p className="countNumber">
                            {isCounterVisible && (
                                <CountUp
                                    start={0}
                                    end={200}
                                    duration={2}
                                />
                            )}
                            +</p>
                        <p className="countText">Valued teacher</p>
                    </div>
                    <div className="count">
                        <img className="countImage" src={require("../images/counter3.png")} alt="counter1" />
                        <p className="countNumber">
                            {isCounterVisible && (
                                <CountUp
                                    start={0}
                                    end={1500}
                                    duration={2}
                                />
                            )}
                            +</p>
                        <p className="countText">Happy Students</p>
                    </div>
                </div>
            </div>
            {/* =======================courses=================== */}
            <div className="courses">
                <p className="title">COURSES</p>
                <div className="mainCourses">
                    <div className="coursesDevide coursesLeft">
                        <p className="subTitle">Instruments</p>
                        <div className="coursesList">
                            <div className="course">
                                <img
                                    src={require("../images/guitarCourse.png")}
                                    className="courseImage"
                                    alt="guitar"
                                />
                                <div className="right">
                                    <p className="courseName">Guitar</p>
                                    <p className="courseDescription">
                                        Learn to play the guitar with our expert instructors.
                                    </p>
                                    {/* <a href="about.html" className="courseButton">
                                        Learn More
                                    </a> */}
                                    <Link to="/Courses" className="courseButton">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                            <div className="course">
                                <img
                                    src={require("../images/piano.jpg")}
                                    className="courseImage"
                                    alt="guitar"
                                />
                                <div className="right">
                                    <p className="courseName">Piano</p>
                                    <p className="courseDescription">
                                        Learn to play the piano with our expert instructors.
                                    </p>
                                    <Link to="/Courses" className="courseButton">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                            <div className="course">
                                <img
                                    src={require("../images/tabla.png")}
                                    className="courseImage"
                                    alt="guitar"
                                />
                                <div className="right">
                                    <p className="courseName">Tabla</p>
                                    <p className="courseDescription">
                                        Learn to play the tabla with our expert instructors.
                                    </p>
                                    <Link to="/Courses" className="courseButton">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="coursesDevide coursesRight">
                        <p className="subTitle">Singing</p>
                        <div className="coursesList">
                            <div className="course">
                                <img
                                    src={require("../images/hindustanVocal.webp")}
                                    className="courseImage"
                                    alt="guitar"
                                />
                                <div className="right">
                                    <p className="courseName">Hindustani Vocal</p>
                                    <p className="courseDescription">
                                        Learn to sing the Hindustani Vocal with our expert instructors.
                                    </p>
                                    <Link to="/Courses" className="courseButton">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                            <div className="course">
                                <img
                                    src={require("../images/bollywoodvocal.jpg")}
                                    className="courseImage"
                                    alt="guitar"
                                />
                                <div className="right">
                                    <p className="courseName">Bollywood Vocal</p>
                                    <p className="courseDescription">
                                        Learn to sing the Bollywood Vocal with our expert instructors.
                                    </p>
                                    <Link to="/Courses" className="courseButton">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                            {/* <div className="course">
                                <img
                                    src={require("../images/guitarCourse.png")}
                                    className="courseImage"
                                    alt="guitar"
                                />
                                <div className="right">
                                    <p className="courseName">Guitar</p>
                                    <p className="courseDescription">
                                        Learn to play the guitar with our expert instructors.
                                    </p>
                                    <Link to="/Courses" className="courseButton">
                                        Learn More
                                    </Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* =========How it works========== */}
            <div className="howItWorks">
                <div className="title">How It Works</div>
                <div className="steps">
                    <div className="step" id="step1">
                        <img src={require("../images/step1.png")} />
                        <p className="stepTitle">Enroll</p>
                    </div>
                    <div className="step" id="step2">
                        <img src={require("../images/step2.png")} />
                        <p className="stepTitle">Get 1-1 training</p>
                    </div>
                    <div className="step" id="step3">
                        <img src={require("../images/step3.png")} />
                        <p className="stepTitle">Certified as musician</p>
                    </div>
                </div>
            </div>
            {/* =====================rising stars==================== */}
            <div className="risingStars">
                <p className="title">Our Rising Stars</p>
                <div className="mainRisingStars">
                    <div className="risingStar" id="star1">
                        <YouTube videoId="A4KlijX4Ha0" opts={{
                            height: '500',
                            width: '300',
                            playerVars: {
                                // https://developers.google.com/youtube/player_parameters
                                autoplay: 0,
                                rel: 0,  // Prevents related videos from other channels
                                modestbranding: 1,  // Minimizes YouTube branding
                                showinfo: 0,  // Deprecated, but might still reduce info visibility
                                iv_load_policy: 3,  // Hides video annotations
                            },
                        }} />
                        <p className='starName'>Safina Khan</p>
                        <p className='location'>Kolkata, India</p>
                    </div>
                    <div className="risingStar" id="star1">
                        <YouTube videoId="0C2B7sLaqvU" opts={{
                            height: '500',
                            width: '300',
                            playerVars: {
                                // https://developers.google.com/youtube/player_parameters
                                autoplay: 0,
                                rel: 0,  // Prevents related videos from other channels
                                modestbranding: 1,  // Minimizes YouTube branding
                                showinfo: 0,  // Deprecated, but might still reduce info visibility
                                iv_load_policy: 3,  // Hides video annotations
                            },
                        }} />
                        <p className='starName'>Sagar Chawla</p>
                        <p className='location'>Vancouver, Canada</p>
                    </div>
                    <div className="risingStar" id="star1">
                        <YouTube videoId="_8V4zqgqQrA" opts={{
                            height: '500',
                            width: '300',
                            playerVars: {
                                // https://developers.google.com/youtube/player_parameters
                                autoplay: 0,
                                rel: 0,  // Prevents related videos from other channels
                                modestbranding: 1,  // Minimizes YouTube branding
                                showinfo: 0,  // Deprecated, but might still reduce info visibility
                                iv_load_policy: 3,  // Hides video annotations
                            },
                        }} />
                        <p className='starName'>Safina Khan</p>
                        <p className='location'>Kolkata, India</p>
                    </div>
                </div>
            </div>

            {/* =====================about our teachers================*/}
            <div className='aboutOurTeachers'>
                <p className='title'>About Our Teachers</p>
                <div className='mainAboutOurTeachers'>
                    <Carousel responsive={singleCarouselResponsive}

                    >
                        <div className='teacher'>
                            <div className='teacherSpeech'>
                                <p className='teacherSubject'>
                                Indian Vocal

                                </p>
                                <p className='teacherSpeechText'>
                                "Meloda has been a revelation! The platform's dedication to preserving Indian classical music and providing accessible education is truly inspiring. As a teacher, I appreciate the flexibility and interactive tools that enable me to connect with students worldwide. Meloda's commitment to quality and cultural preservation aligns with my own values, making it an ideal partnership."

                                </p>
                            </div>
                            <div className='teacherdetails'>
                                <div className='left'>
                                    <img src={require('../images/ShaliniDe.jpg')} alt='student' />
                                </div>
                                <div className='right'>
                                    <p className='teacherName'>Shalini De</p>
                                    <p className='teacherLocation'>Kolkata, India</p>
                                </div>
                            </div>

                        </div>

                        <div className='teacher'>
                            <div className='teacherSpeech'>
                                <p className='teacherSubject'>
                                    Tabla
                                </p>
                                <p className='teacherSpeechText'>
                                "The quality of education on Meloda is top-notch. Students appreciate the individualized attention and rapid progress they make during 1:1 lessons. As a teacher, the platform is user-friendly, and the management team is always ready to assist, making the whole experience enjoyable for both students and teachers."ssion for this rich and ancient tradition. She has trained under some of the most respected gurus and brings a wealth of knowledge in ragas, talas, and the intricate nuances of Hindustani music. She will guide you with patience, expertise, and a genuine love for the music. Let's embark on this musical journey together!"
                                </p>
                            </div>
                            <div className='teacherdetails'>
                                <div className='left'>
                                    <img src={require('../images/AsifKhan.jpg')} alt='student' />
                                </div>
                                <div className='right'>
                                    <p className='teacherName'>Asif Khan</p>
                                    <p className='teacherLocation'>Kolkata, India</p>
                                </div>
                            </div>

                        </div>

                        <div className='teacher'>
                            <div className='teacherSpeech'>
                                <p className='teacherSubject'>
                                    Indian Vocal
                                </p>
                                <p className='teacherSpeechText'>
                                "Teaching at Meloda has been a delightful experience. The platform's user-friendly interface and technical support ensure seamless lessons. I'm impressed by the students' enthusiasm and dedication, which motivates me to share my knowledge. Meloda's vision of spreading Indian classical music globally resonates deeply with me."

                                </p>
                            </div>
                            <div className='teacherdetails'>
                                <div className='left'>
                                    <img src={require('../images/MahasswetaJana.jpg')} alt='student' />
                                </div>
                                <div className='right'>
                                    <p className='teacherName'>Mahasweta Jana</p>
                                    <p className='teacherLocation'>Kolkata, India</p>
                                </div>
                            </div>

                        </div>

                        <div className='teacher'>
                            <div className='teacherSpeech'>
                                <p className='teacherSubject'>
                                    Guitar
                                </p>
                                <p className='teacherSpeechText'>
                                "Meloda's innovative approach to music education has revolutionized the way I teach guitar. The platform's interactive features and recording tools allow students to learn at their own pace. I appreciate Meloda's focus on both technical skill and artistic expression, enabling students to grow as musicians."

                                </p>
                            </div>
                            <div className='teacherdetails'>
                                <div className='left'>
                                    <img src={require('../images/Raj.jpg')} alt='student' />
                                </div>
                                <div className='right'>
                                    <p className='teacherName'>Raj Das</p>
                                    <p className='teacherLocation'>Kolkata, India</p>
                                </div>
                            </div>

                        </div>

                        <div className='teacher'>
                            <div className='teacherSpeech'>
                                <p className='teacherSubject'>
                                    Piano
                                </p>
                                <p className='teacherSpeechText'>
                                "Meloda's comprehensive curriculum and expert faculty make it an ideal institution for piano students. I value the platform's emphasis on musicality, technique, and creativity. The online format enables me to reach students worldwide, sharing my passion for piano music."
                                </p>
                            </div>
                            <div className='teacherdetails'>
                                <div className='left'>
                                    <img src={require('../images/Abhisek.jpg')} alt='student' />
                                </div>
                                <div className='right'>
                                    <p className='teacherName'>Abhisek Suratkal</p>
                                    <p className='teacherLocation'>Bengalore, India</p>
                                </div>
                            </div>

                        </div>

                        {/* <div className='teacher'>
                            <div className='teacherSpeech'>
                                <p className='teacherSubject'>
                                    Guitar
                                </p>
                                <p className='teacherSpeechText'>
                                    " Jane Doe a distinguished Hindustani classical music teacher with years of experience and a deep passion for this rich and ancient tradition. She has trained under some of the most respected gurus and brings a wealth of knowledge in ragas, talas, and the intricate nuances of Hindustani music. She will guide you with patience, expertise, and a genuine love for the music. Let's embark on this musical journey together!""
                                </p>
                            </div>
                            <div className='teacherdetails'>
                                <div className='left'>
                                    <img src={require('../images/student1.jpeg')} alt='student' />
                                </div>
                                <div className='right'>
                                    <p className='teacherName'>John Doe</p>
                                    <p className='teacherLocation'>Kolkata, Westbengal, India</p>
                                </div>
                            </div>

                        </div> */}

                    </Carousel>

                </div>
            </div>

            {/* =====================what students say================= */}
            <div className="whatStudentsSay">
                <p className="title">What Students Say</p>


                <div className='mainWhatStudentsSay'>
                    <Carousel responsive={carouselResponsive} >
                        <div className='student'>
                            <div className='studentSpeech'>
                                <p className='studentSpeechText'>
                                "Meloda has been a game-changer for me! The expert vocal faculty helped me improve my tone, pitch, and control. The personalized feedback and interactive sessions made me feel like I'm learning from the best. I've gained confidence in my singing, and I'm excited to perform on stage soon!
                                "
                                </p>
                            </div>
                            <div className='studentdetails'>
                                <div className='left'>
                                    <img src={require('../images/Anmol.jpg')} alt='student' />
                                </div>
                                <div className='right'>
                                    <p className='studentName'>Anmol Sharma</p>
                                    <p className='studentLocation'>
                                        Melbourne, Australia
                                    </p>
                                </div>
                            </div>

                        </div>
                        
                        <div className='student'>
                            <div className='studentSpeech'>
                                <p className='studentSpeechText'>
                                "Learning Kathak from Samraggi Ghosh ji at Meloda has been an incredible experience! Her guidance, patience, and expertise have helped me master intricate footwork and expressions. The digital platform allows me to revisit sessions, ensuring I perfect each step.
"
                                </p>
                            </div>
                            <div className='studentdetails'>
                                <div className='left'>
                                    <img src={require('../images/Rajshree.jpg')} alt='student' />
                                </div>
                                <div className='right'>
                                    <p className='studentName'>Rajshree Shrestha</p>
                                    <p className='studentLocation'>
                                        Washington, USA
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className='student'>
                            <div className='studentSpeech'>
                                <p className='studentSpeechText'>
                                "I was struggling to find a guitar teacher who understood my style. Meloda's faculty not only understood but also helped me refine my skills. The online sessions are flexible and convenient, allowing me to learn from anywhere. I've improved significantly, and I'm now composing my own music!"                                </p>
                            </div>
                            <div className='studentdetails'>
                                <div className='left'>
                                    <img src={require('../images/Sagar.jpg')} alt='student' />
                                </div>
                                <div className='right'>
                                    <p className='studentName'>Sagar Chawla</p>
                                    <p className='studentLocation'>
                                        Vancouver, Canada
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className='student'>
                            <div className='studentSpeech'>
                                <p className='studentSpeechText'>
                                "I joined Meloda for Hindustani Vocal, but the flexibility allowed me to explore Guitar too! The faculty's enthusiasm and encouragement helped me balance both interests. Meloda's supportive community inspires me to push boundaries and explore fusion music.
                                "
                                </p>
                            </div>
                            <div className='studentdetails'>
                                <div className='left'>
                                    <img src={require('../images/Snehal.webp')} alt='student' />
                                </div>
                                <div className='right'>
                                    <p className='studentName'>Snehal Mayekar</p>
                                    <p className='studentLocation'>
                                        Pune, India
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* <div className='student'>
                            <div className='studentSpeech'>
                                <p className='studentSpeechText'>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                </p>
                            </div>
                            <div className='studentdetails'>
                                <div className='left'>
                                    <img src={require('../images/student1.jpeg')} alt='student' />
                                </div>
                                <div className='right'>
                                    <p className='studentName'>John Doe</p>
                                    <p className='studentLocation'>Kolkata, Westbengal, India</p>
                                </div>
                            </div>

                        </div> */}

                    </Carousel>


                </div>

            </div>

            {/* ==============contact us============ */}
            <div className="contactUs" id="contact">

                <div className="form" id="form">
                    <p className="title">Contact Us</p>
                    {/* <p className="subTitle">For further questions, including partnership opportunities, please email hello@creative-
                        tim.com or contact using our contact form.</p> */}
                    <div className='inputs'>
                        <div className='nameandmails'>
                            <div className='input'>
                                <label for='name'>Name</label><br />
                                <input type='text' id='name' placeholder='Enter your name'
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }
                                    }
                                />
                            </div>
                            <div className='input'>
                                <label for='email'>Email</label><br />
                                <input type='email' id='email' placeholder='Enter your email'
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className='textArea'>
                            {/* <label for='message'>Message</label><br/> */}
                            <textarea id='message' placeholder='Enter your message'
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                            ></textarea>
                        </div>
                        <button id="submitButton"
                            onClick={() => {
                                submitContactForm();
                            }}
                        >submit</button>
                    </div>
                </div>
                {/* ------3rd */}
                <svg
                    width="100%"
                    height="auto"
                    viewBox="0 0 1408 284"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: 0,
                        display: isVerySmallScreen ? 'none' : 'block',
                        maxWidth: "100%",  // Ensures the SVG doesn't exceed its container width
                        height: "auto",  // Makes the height responsive
                        preserveAspectRatio: "xMidYMid meet",  // Ensures the SVG scales proportionally
                    }}
                >
                    <path
                        d="M1426 283.022C862.925 283.022 547.232 283.022 -15.8428 283.022V211.28C-15.8428 211.28 -16 101.09 344 211.28C704 321.47 1265.12 -56.4574 1426 8.53455V242.833V283.022Z"
                        fill="#475569"
                    />
                </svg>


            </div>


            {/* ==================Footer================== */}
            <Footer />



        </div >
    );
};
export default Home;