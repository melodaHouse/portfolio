import react,{useState, useEffect} from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import "../css/about.css";

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="main">
            <Banner route="About" />
            <div className="about">
                <p className="about-title">About Us</p>
                <p className="about-content">Meloda House is a dynamic online platform dedicated to providing high-quality music education, offering a wide range of courses in both instrumental and vocal training. Whether you're passionate about mastering instruments like the tabla, guitar, violin, or piano, or exploring diverse singing styles such as Western, Bollywood, or classical, Meloda House has something for everyone. Our mission is to make music accessible to all, fostering a community where students can learn from experienced instructors and teachers can build rewarding careers in music education.</p>
            </div>
            <div className="story">
                <div className="left">
                    <img src=
                    {
                        require("../images/aboutStory.png")
                    }

                     alt="Our Story" className="story-image" />

                </div>
                <div className="right">
                    <p className="story-title">Story Of Meloda House</p>
                    <p className="story-content">Meloda House was founded in 2020 by a group of music enthusiasts who wanted to create a space where people could learn, share, and appreciate music. Our team includes experienced musicians, educators, and technologists who are passionate about making music education accessible to all. We believe that music has the power to inspire, connect, and transform lives, and we're committed to helping our students unlock their full potential through the power of music.</p>
                </div>
            </div>

            <Footer />
        </div>
    );
}
export default About;
