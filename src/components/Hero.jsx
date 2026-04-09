import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <header className="hero" id="home">
            <div className="hero-container">
                <div className="hero-content">
                    <h1>Coding, school support, and guidance for girls and youth</h1>
                    <p>
                        GoTechFuture Foundation is a non-profit that teaches coding, answers career and study questions, and walks with
                        girls and young women step by step. We want every learner to feel ready for school, work, and life—not alone, and
                        never without clear information.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/what-we-do" className="btn btn-hero-wordmark-tech hero-btn-pill">What we do</Link>
                        <Link to="/contact" className="btn btn-hero-wordmark-go hero-btn-pill">Get in touch</Link>
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
