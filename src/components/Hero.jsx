import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <header className="hero" id="home">
            <div className="hero-container">
                <div className="hero-content">
                    <h1>Code, guidance, and brighter futures for every learner</h1>
                    <p>
                        GoTechFuture Foundation teaches coding, offers career mentoring, and helps girls prepare for further study—
                        so young people can grow skills, confidence, and a clear path forward.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/what-we-do" className="btn btn-primary" style={{ borderRadius: '8px', padding: '1rem 2rem' }}>What we do</Link>
                        <Link to="/contact" className="btn btn-outline" style={{ borderRadius: '8px', padding: '1rem 2rem' }}>Get in touch</Link>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <img
                        src="/success-stories/story-1.png"
                        alt="Students presenting artwork at a GoTechFuture Foundation workshop"
                        className="hero-img hero-img--home"
                    />
                </div>
            </div>
        </header>
    );
};

export default Hero;
