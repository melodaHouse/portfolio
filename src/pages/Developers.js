import React from 'react';
import '../css/developers.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import the envelope icon

function Developers() {
    return (
        <div>
            <h1>Developers</h1>
            <div className='developers'>
                <div className='developer'>
                    <div className='developerImage'>
                        <img src={require('../images/akash.jpg')} alt='developer' />
                    </div>
                    <div className='developerInfo'>
                        <h3>Akash Chowdhury</h3>
                        <p>Project Manager, Team Leader, Full Stack Developer</p>
                    </div>
                    <div className='developerContact'>
                        <a href='mailto:emailidakashchowdhury@gmail.com' target='_blank'><FontAwesomeIcon icon={faEnvelope} /></a>
                        <a href='https://www.facebook.com/profile.php?id=100052359583364' target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href='https://www.linkedin.com/in/akash-chowdhury-2b2330249/' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>

                


            </div>
        </div>
    );

}
export default Developers;