import React from 'react';
import { Link } from 'react-router-dom';
import { SocialFooterLinks } from './SocialLinks';

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
                        We teach coding, guide study and career steps, and stand with girls and young women—including help with school admission
                        and knowing important helplines like 1090 and 1098.
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
                    <SocialFooterLinks />
                    <p className="copyright">&copy; {new Date().getFullYear()} GoTechFuture Foundation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
