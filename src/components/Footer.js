import React from "react";
import { Link } from "react-router-dom";
import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className='footerTop'>
                <div className='footerTopCol' id="footerTopColLogo">
                    <ul className='footerMenu'>
                        <li className='footerMenuItem'>
                            <Link to="/" style={{
                            }}>
                                <img src={require('../images/white_logo.png')} alt='logo' id="footer_logo" />

                            </Link>
                        </li>
                    </ul>

                </div>
                <div className='footerTopCol'>
                    <ul className='footerMenu'>
                        <li className='footerMenuItem'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='footerMenuItem'>
                            <Link to="/Courses">Courses</Link>
                        </li>
                        <li className='footerMenuItem'>
                            <Link to="/Blog">Blog</Link>
                        </li>
                        <li className='footerMenuItem'>
                        <a href='
                            mailto:supprt.meloda@gmail.com
                            '>
                            Support
                        </a>
                        </li>
                        <li className='footerMenuItem'>
                            <Link to="/Career">Career</Link>
                        </li>

                    </ul>
                </div>
                <div className='footerTopCol'>
                    <ul className='footerMenu'>
                        <li className='footerMenuItem'>
                            <a href='https://www.instagram.com/melodahouse/'    target="_blank" 
                             >Links</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='https://www.facebook.com/profile.php?id=61564278136131' target="_blank" >Facebook</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='https://www.instagram.com/melodahouse/' target="_blank" >Instagram</a>
                        </li>

                    </ul>
                </div>
                {/* <div className='footerTopCol'>
                    <ul className='footerMenu'>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Courses</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Instruments</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Singing</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Tutorials</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>FAQ</a>
                        </li>

                    </ul>
                </div> */}
                <div className='footerTopCol'>
                    <ul className='footerMenu'>
                        <li className='footerMenuItem'>
                        <Link to="/#support">Support</Link>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='
                            mailto:supprt.meloda@gmail.com
                            '>Send E-Mail</a>
                        </li>
                        {/* <li className='footerMenuItem'>
                            <Link to="/Developers">Developers</Link>
                        </li> */}
                        <li className='footerMenuItem'>
                            <a href='https://www.linkedin.com/in/akash-chowdhury-2b2330249/'>Contact with Tech Team Lead(Developer)</a>
                        </li>
                        {/* <li className='footerMenuItem'>
                            <a href='index.html'>Integrations</a>
                        </li> */}

                    </ul>
                </div>
                <div className='footerTopCol'>
                    <ul className='footerMenu'>
                        <li className='footerMenuItem'>
                            <a href='https://melodahouse.com' target="_blank" >Company</a>
                        </li>
                        <li className='footerMenuItem'>
                            <Link to="/About">About</Link>
                        </li>
                        <li className='footerMenuItem'>
                            <Link to="/Blog">Blogs</Link>
                        </li>
                        <li className='footerMenuItem'>
                            <Link to="/Career">Career</Link>
                        </li>
                        <li className='footerMenuItem'>
                            <Link to="/Trial">Request demo</Link>
                        </li>

                    </ul>
                </div>

            </div>
            <div className='footerBottom'>
                <div className='footerBottomLeft'>
                    <p className='footerBottomText'>© 2024 Meloda House. All rights reserved</p>
                </div>
                <div className='footerBottomRight'>
                    <ul className='footerBottomMenu'>
                        <li className='footerBottomMenuItem'>
                            <Link to="/Termsandcondition">Terms and Conditions</Link>
                        </li>
                        <li className='footerBottomMenuItem'>
                            <Link to="/Privecyandpolicy">Privacy Policy</Link>
                        </li>
                        {/* <li className='footerBottomMenuItem'>
                            <a href='index.html'>Contact</a>
                        </li> */}
                    </ul>
                </div>

            </div>
        </div>
    );
}
export default Footer;
