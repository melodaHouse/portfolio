import React, { useEffect } from 'react';
import '../css/terms.css'

function Termsandcondition() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="about">
                <p className="about-title">Terms & Conditions</p>
                <p className="about-content">Welcome to Meloda House. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use our services.</p>
                <label>User Accounts </label>
                <ul>
                    <li>When you create an account with us, you must provide us with accurate, complete, and up-to-date information. Failure to do so constitutes a breach of the terms, which may result in immediate termination of your account on our service.</li>
                    <li>You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password, whether your password is with our service or a third-party service.</li>
                    <li>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
                </ul>
                <label>Use of Services</label>
                <ul>
                    <li>Our services are intended for personal, non-commercial use only. You may not use our services for any illegal or unauthorized purpose, including but not limited to copyright
                        infringement, intellectual property rights violation, or any other activity that violates the law.</li>
                    <li>You may not use our services to transmit any worms, viruses, or any code of a destructive nature.</li>
                    <li>You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the service, use of the service, or access to the service without our express written permission.</li>
                    <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
                </ul>
                <label>Course Enrollment and Payment</label>
                <ul>
                    <li>When you enroll in a course, you agree to pay the fees associated with the course. You are responsible for the timely payment of all fees and for providing us with a valid payment method for payment of the fees.</li>
                    <li>We reserve the right to change the fees for our services at any time. We will provide you with notice of any changes to the fees.</li>
                    <li>Refunds will be provided in accordance with our refund policy.</li>
                </ul>

                
            </div>

        </div>
    );
}
export default Termsandcondition;