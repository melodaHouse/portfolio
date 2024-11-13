import react,{useState, useEffect} from "react";
import '../css/courses.css'
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Courses() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Banner route="Courses" />
            <div className="coursesPagecourses">
                <p className="coursesPagetitle">COURSES</p>
                <div className="coursesPagemainCourses">
                    <div className="coursesPagecoursesDevide coursesLeft">

                        <p className="coursesPagesubTitle">Instruments</p>
                        <div className="coursesPagecoursesList">
                            <div className="coursesPagecourse">
                                <img
                                    src={require("../images/guitarCourse.png")}
                                    className="coursesPagecourseImage"
                                    alt="guitar"
                                />
                                <div className="coursesPageright">
                                    <p className="coursesPagecourseName">Guitar</p>
                                    <p className="coursesPagecourseDescription">
                                        Learn to play the guitar with our expert instructors.
                                        <br/>Please book a free trial class to know more <br /> about  the course, fees structure and timings with our experts.
                                    </p>
                                    
                                    <Link to="/trial" className="coursesPagecourseButton">
                                    Get a trial
                                    </Link>
                                </div>
                            </div>

                            <div className="coursesPagecourse">
                                <img
                                    src={require("../images/piano.jpg")}
                                    className="coursesPagecourseImage"
                                    alt="Piano"
                                />
                                <div className="coursesPageright">
                                    <p className="coursesPagecourseName">Piano</p>
                                    <p className="coursesPagecourseDescription">
                                        Learn to play the Piano with our expert instructors.
                                        <br/>Please book a free trial class to know more <br /> about  the course, fees structure and timings with our experts.
                                    </p>
                                    <Link to="/trial" className="coursesPagecourseButton">
                                    Get a trial
                                    </Link>
                                </div>
                            </div>

                            <div className="coursesPagecourse">
                                <img
                                    src={require("../images/tabla.png")}
                                    className="coursesPagecourseImage"
                                    alt="Tabla"
                                />
                                <div className="coursesPageright">
                                    <p className="coursesPagecourseName">Tabla</p>
                                    <p className="coursesPagecourseDescription">
                                        Learn to play the Tabla with our expert instructors.
                                        <br/>Please book a free trial class to know more <br /> about  the course, fees structure and timings with our experts.
                                    </p>
                                    <Link to="/trial" className="coursesPagecourseButton">
                                    Get a trial
                                    </Link>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="coursesPagecoursesDevide coursesRight">
                        <p className="coursesPagesubTitle">Singing</p>
                        <div className="coursesPagecoursesList">
                            <div className="coursesPagecourse">
                                <img
                                    src={require("../images/hindustanVocal.webp")}
                                    className="coursesPagecourseImage"
                                    alt="guitar"
                                />
                                <div className="coursesPageright">
                                    <p className="coursesPagecourseName">Hindustani Vocal</p>
                                    <p className="coursesPagecourseDescription">
                                        Learn to sing the Hindustani Vocal with our expert instructors.
                                        <br/>Please book a free trial class to know more <br /> about  the course, fees structure and timings with our experts.
                                    </p>
                                    <Link to="/trial" className="coursesPagecourseButton">
                                    Get a trial
                                    </Link>
                                </div>
                            </div>
                            <div className="coursesPagecourse">
                                <img
                                    src={require("../images/bollywoodvocal.jpg")}
                                    className="coursesPagecourseImage"
                                    alt="guitar"
                                />
                                <div className="coursesPageright">
                                    <p className="coursesPagecourseName">Bollywood Vocal</p>
                                    <p className="coursesPagecourseDescription">
                                        Learn to sing the Bollywood Vocal with our expert instructors.
                                        <br/>Please book a free trial class to know more <br /> about  the course, fees structure and timings with our experts.
                                    </p>
                                    <Link to="/trial" className="coursesPagecourseButton">
                                    Get a trial
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
export default Courses;