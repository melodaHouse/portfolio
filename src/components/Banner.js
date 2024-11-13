import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./banner.css";
function Banner({ route }) {

    const [showResponsiveNav, setShowResponsiveNav] = useState(false);

    var title = "Where Every Note Finds a Home";
    var subTitle = "Learn, Play, and Create with Meloda House";
    var bannerImage = require("../images/banner-home.png");

    switch (route) {
        case "Home":
            title = "Where Every Note Finds a Home";
            subTitle = "Learn, Play, and Create with Meloda House";
            bannerImage = require("../images/banner-home.png");
            break;
        case "Courses":
            title = "Discover Your Rhythm with Meloda House";
            subTitle = "Learn, Play, and Create with Meloda House";
            bannerImage = require("../images/banner-courses1.jpg");
            break;
        case "Blog":
            title = "Harmonize Your Journey, Master Your Craft";
            subTitle = "Discover Insights and Stories at Meloda House";
            bannerImage = require("../images/banner-blog.jpg");
            break;
        case "Career":
            title = "Spread Your Rhythm with Meloda House.";
            subTitle = "Build a Musical Career with Meloda House";
            bannerImage = require("../images/banner-career.png");
            break;
        case "Support":
            title = "Support";
            subTitle = "We are here to help you";
            bannerImage = require("../images/banner-home.png");
            break;
        case "About":
            title = "Discover the Heartbeat of Music";
            subTitle = "Learn, Grow, and Create with Meloda House.";
            bannerImage = require("../images/banner-about.png");
            break;
        default:
            title = "Where Every Note Finds a Home";
            subTitle = "Learn, Play, and Create with Meloda House";
            bannerImage = require("../images/banner-home.png");
    }

    return (
        <div className="banner" style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundColor: (route != "Home") ? "rgba(0,0,0,0.5)" : "transparent",
            backgroundBlendMode: (route != "Home") ? "multiply" : "unset"
        }}>
            <div className="nav">
                <Link to="/" className="logo">
                    <img src=
                        {require("../images/white_logo.png")}
                        id="nav_logo"
                        alt="banner" />
                </Link>
                <ul className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Courses">Courses</Link>
                    </li>
                    <li>
                        <Link to="/Blog">Blog</Link>
                    </li>
                    {/* <li>
                        <Link to="/Support">Support</Link>
                    </li> */}
                    {/* link of gmail id */}
                    
                    <li>
                    <a href="mailto:supprt.meloda@gmail.com"
                    style={{
                    }}>
                        Support
                    </a>
                    </li>
                    <li>
                        <Link to="/Career">Career</Link>
                    </li>
                    {/* <li>
                        <a href="contact.html" id="loginButton">
                            Login
                        </a>
                    </li> */}
                    <li>
                        <Link to="/Trial" id="bookFreeButton">
                            Book free trial
                        </Link>
                    </li>
                </ul>
                <img
                    src={require("../images/responsive_nav_threedot.png")}
                    id="responsive_nav_threedot"
                    alt="menu"
                    onClick={() => {
                        setShowResponsiveNav(true);
                    }}
                />

            </div>

            <div className="textContent">
                <p className="title">{title}</p>
                <p className="subTitle">{
                    subTitle
                }</p>
                {
                    route != "Career" ? <Link to="/Trial" id="bookFreeTrialButton">book free trial</Link> : null
                }
            </div>
            {
                showResponsiveNav ?
                    <div class="responsiveNav">
                        <div class="responsiveNavTop">
                            <Link to="/">
                                <img src=
                                    {require("../images/white_logo.png")}
                                    id="responsiveNavLogo"
                                    alt="banner" />
                            </Link>
                            <img src={require("../images/cancel.png")} id="responsiveNavClose" alt="close" onClick={() => {
                                setShowResponsiveNav(false);
                            }} />

                        </div>
                        <ul class="responsiveMenu">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                            <li>
                                <Link to="/Courses">Courses</Link>
                            </li>
                            <li>
                                <Link to="/Blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/Support">Support</Link>
                            </li>
                            <li>
                                <Link to="/Career">Career</Link>
                            </li>
                            <li>
                                <Link to="/Trial" id="responsiveNavBookFreeTrialButton">Book Free Trial</Link>
                            </li>
                        </ul>
                    </div> : null
            }
        </div >
    )
}
export default Banner;