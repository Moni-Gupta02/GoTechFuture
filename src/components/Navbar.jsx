import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <>
        {menuOpen && (
            <div
                className="nav-backdrop"
                onClick={() => setMenuOpen(false)}
                aria-hidden="true"
            />
        )}
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="logo">
                    <Link to="/" onClick={() => setMenuOpen(false)} className="nav-logo-link">
                        <div className="nav-logo">
                            <div className="nav-logo-title">
                                <span className="nav-logo-go">Go</span>
                                <span className="nav-logo-tech">Tech</span>
                                <span className="nav-logo-future">Future</span>
                            </div>
                            <div className="nav-logo-sub">FOUNDATION</div>
                        </div>
                    </Link>
                </div>
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                    <li><NavLink to="/what-we-do" onClick={() => setMenuOpen(false)}>What we do</NavLink></li>
                    <li><NavLink to="/impact" onClick={() => setMenuOpen(false)}>Our impact</NavLink></li>
                    <li><NavLink to="/success-stories" onClick={() => setMenuOpen(false)}>Success stories</NavLink></li>
                    <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About us</NavLink></li>
                    <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact us</NavLink></li>
                </ul>
                <div
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setMenuOpen(!menuOpen); }}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                >
                    <span></span><span></span><span></span>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
