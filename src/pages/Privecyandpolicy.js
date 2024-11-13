import React, { useEffect } from 'react';

function Privecyandpolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="about">
                <p className="about-title">Privacy Policy</p>
                <p className="about-content">Welcome to Meloda House. This privacy policy explains how we collect, use, and disclose information about you when you access or use our website. By accessing or using our website, you consent to the collection, use, and disclosure of your information in accordance with this privacy policy.</p>
                <label>Information We Collect</label>
                <ul>
                    <li>We collect information about you when you provide it to us, when you use our services, and when other sources provide it to us.</li>
                    <li>Information You Provide to Us: We collect information about you when you create an account, enroll in a course, make a purchase, or otherwise provide it to us.</li>
                    <li>Information About Your Use of Our Services: We collect information about your use of our services, including courses you enroll in, your progress in the courses, and your interactions with instructors and other students.</li>
                    <li>Information from Other Sources: We may receive information about you from other sources, including service providers and third-party services.</li>
                </ul>
                <label>How We Use Your Information</label>
                <ul>
                    <li>We use the information we collect to provide, maintain, and improve our services, to communicate with you, to personalize your experience, and to provide you with targeted advertisements and marketing communications.</li>
                    <li>We may use your information to respond to your inquiries, to send you administrative messages, and to send you marketing communications about our products and services.</li>
                    <li>We may use your information to personalize your experience and to deliver content and product offerings relevant to your interests.</li>
                </ul>
                <label>How We Share Your Information</label>
                <ul>
                    <li>We may share your information with service providers, business partners, and other third parties for the purposes described in this privacy policy.</li>
                    <li>We may share your information with instructors, other students, and other users of our services.</li>
                    <li>We may share your information in response to legal requests, to protect our rights, to protect your safety or the safety of others, and to investigate fraud.</li>
                    <li>We may share your information in connection with a merger, acquisition,
                        reorganization, or sale of assets.</li>
                </ul>

                <label>Your Choices</label>
                <ul>
                    <li>You may update, correct, or delete your account information at any time by logging into your account.</li>
                    <li>You may opt out of receiving marketing communications from us by following the instructions in the communications.</li>
                    <li>You may opt out of targeted advertising by following the instructions in the advertisements.</li>
                </ul>
            </div>
        </div>
    );
}
export default Privecyandpolicy;
