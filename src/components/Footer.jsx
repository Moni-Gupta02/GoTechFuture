import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content text-center">
                    <div className="footer-wordmark">
                        <div className="nav-logo">
                            <div className="nav-logo-title">
                                <span className="nav-logo-go">Go</span>
                                <span className="nav-logo-tech">Tech</span>
                                <span className="nav-logo-future">Future</span>
                            </div>
                            <div className="nav-logo-sub">FOUNDATION</div>
                        </div>
                    </div>
                    <p className="footer-tagline">
                        Teaching coding, guiding careers, and helping young people—especially girls—prepare for education and the future.
                    </p>
                    <nav className="footer-nav" aria-label="Footer">
                        <Link to="/what-we-do">What we do</Link>
                        <span aria-hidden="true"> · </span>
                        <Link to="/impact">Our impact</Link>
                        <span aria-hidden="true"> · </span>
                        <Link to="/success-stories">Success stories</Link>
                        <span aria-hidden="true"> · </span>
                        <Link to="/contact">Contact</Link>
                    </nav>
                    <div className="social-links">
                        <a href="https://www.youtube.com/@GoTechFutureFoundation" target="_blank" rel="noopener noreferrer">YouTube</a>
                        <a href="https://www.linkedin.com/company/go-tech-future-foundation/?viewAsMember=true" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://www.instagram.com/gotechfuture?igsh=djFwM3kxNWI3YnBj" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                    <p className="copyright">&copy; {new Date().getFullYear()} GoTechFuture Foundation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
