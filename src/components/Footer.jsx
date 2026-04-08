import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content text-center">
                    <div style={{ marginBottom: '0.75rem', textAlign: 'center' }}>
                        <div style={{ fontWeight: '800', fontSize: '1.5rem', letterSpacing: '-0.5px', lineHeight: 1.15 }}>
                            <span style={{ color: 'var(--secondary)' }}>Go</span>
                            <span style={{ color: 'var(--primary)' }}>Tech</span>
                            <span style={{ color: 'var(--accent)' }}>Future</span>
                        </div>
                        <div style={{
                            fontSize: '0.7rem',
                            letterSpacing: '5px',
                            textTransform: 'uppercase',
                            color: 'rgba(255, 255, 255, 0.75)',
                            marginTop: '0.2rem',
                        }}>
                            FOUNDATION
                        </div>
                    </div>
                    <p>Teaching coding, guiding careers, and helping young people—especially girls—prepare for education and the future.</p>
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
                        <a href="https://www.youtube.com/@gotechfuture" target="_blank" rel="noopener noreferrer">YouTube</a>
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
