import react,{useState, useEffect} from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import "../css/blog.css";
import YouTube from 'react-youtube';

function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [showFullText, setShowFullText] = useState(false);

    const toggleTextDisplay = () => {
        setShowFullText(!showFullText);
    };



    const blogContents = [
        {
            name: "Mahassweta",
            designation: "Music Teacher & Dancer",
            date: "12th July 2019",
            videoId: "9mWwVztFBeU",
            title: ""
        },
        {
            name: "Sagar Chawla",
            designation: "Music Student",
            date: "6th June 2023",
            videoId: "MT1-NUBFOG4",
            title: ""
        },
        {
            name: "Asif Khan",
            designation: "Music Teacher",
            date: "17th May 2021",
            videoId: "PAUwdfQxaUY",
            title: ""
        },
        {
            name: "Shalini De",
            designation: "Music Teacher",
            date: "21st December 2021",
            videoId: "ZQHsi36JnDU",
            title: "Breaking Down the Magic of 'Ba Khuda' by Shalini De - In the ever-evolving world of music production, creating a sound that resonates with listeners across genres and backgrounds is no small feat. At Meloda, our mission is to empower artists to push the boundaries of their creativity, and Shalini De’s recent release, 'Ba Khuda', is a shining example of that vision in action. With an ear for complex rhythms and an instinct for soulful melodies, Shalini De has crafted a track that feels both intimate and expansive, capturing the listener’s attention from the very first beat. But what exactly goes into making a song like this one stand out in today’s crowded digital music landscape? - Exploring the Essence of 'Ba Khuda' - 'Ba Khuda' is a melodic journey that explores themes of self-discovery, resilience, and authenticity. Shalini De’s lyrics tell a powerful story that many can relate to—one of finding and embracing one’s true self. Every chord and beat in this track is carefully chosen to create an emotional impact, pulling listeners into a place of reflection and inspiration. One of the standout qualities in Shalini’s work is her ability to layer sounds in a way that each instrument seems to tell its own story, yet seamlessly contributes to the track’s overall narrative. In 'Ba Khuda', her vocal layering brings a haunting quality that draws listeners closer, inviting them to connect not just with the sound, but with the message itself. - A Look at the Production Techniques - For students and fellow artists at Meloda, 'Ba Khuda' offers a masterclass in modern music production. The song showcases a mix of live and digital instruments, paired with vocal effects that feel organic rather than overpowering. Shalini uses reverb and subtle delay to give her vocals a sense of spaciousness, creating a dreamlike quality that makes the song linger in the mind long after it ends. The production also highlights the importance of mixing and mastering to polish a track’s sound without sacrificing its raw emotion. Shalini’s attention to the sonic details ensures that each instrument maintains its clarity, even as they build into a fuller, more complex soundscape. - Why 'Ba Khuda' Matters for Today’s Artists - In today’s music industry, authenticity is more than a buzzword; it’s a necessity. Shalini De’s 'Ba Khuda' reminds artists at Meloda and beyond that true impact comes from embracing your voice and using it to tell your unique story. For aspiring musicians learning the ropes here at Meloda, her work is a testament to the power of personal expression and skillful production. So, whether you’re a beginner just starting to explore digital production or an experienced artist looking for fresh inspiration, dive into 'Ba Khuda' and let it remind you of the endless possibilities in music creation. By understanding Shalini’s creative process and techniques, we hope that you, too, are inspired to push the limits of your sound and bring your authentic voice to the world. At Meloda, we’re thrilled to witness more artists like Shalini De leaving their mark on the digital music landscape."
        },
        {
            name: "Asif Khan",
            designation: "Music Teacher",
            date: "17th May 2021",
            videoId: "DfXD2s8IsP4",
            title: ""
        }
    ]

    const isVerySmallScreen = window.matchMedia("(max-width: 480px)").matches;
    return (
        <div className="main">
            <Banner route="Blog" />

            <div className="blogs">
                {blogContents.map((blog, index) => {
                    return (
                        <div className="blog"
                            key={index}
                        >
                            <div className="blog-video">
                                <YouTube videoId={
                                    blog.videoId
                                } opts={{
                                    height: isVerySmallScreen ? '200' : '400',
                                    width: isVerySmallScreen ? '280' : '500',
                                    playerVars: {
                                        // https://developers.google.com/youtube/player_parameters
                                        autoplay: 0,
                                        rel: 0,  // Prevents related videos from other channels
                                        modestbranding: 1,  // Minimizes YouTube branding
                                        showinfo: 0,  // Deprecated, but might still reduce info visibility
                                        iv_load_policy: 3,  // Hides video annotations
                                    },
                                }} />
                            </div>
                            <div className="blog-texts">
                                <p className="name">{blog.name}</p>
                                <p className="designation">{blog.designation}</p>
                                <p className="date">{blog.date}</p>
                                <p className="title">
                                    {
                                        blog.title.length < 600 ? blog.title : showFullText ? blog.title : blog.title.slice(0, 600)
                                        
                                    }
                                    {blog.title.length > 600 && (
                                        <span onClick={toggleTextDisplay} style={{ color: 'blue', cursor: 'pointer' }}>
                                            {showFullText ? ' Show Less' : ' See More'}
                                        </span>
                                    )}
                                </p>
                            </div>


                        </div>
                    );
                })}
            </div>
            <Footer />
        </div>
    );
}
export default Blog;