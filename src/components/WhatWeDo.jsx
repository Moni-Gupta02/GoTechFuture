import React from 'react';

const pillars = [
    {
        title: 'Coding & digital skills',
        text: 'Hands-on programming and logical thinking so learners see technology as something they can use—not only watch.',
    },
    {
        title: 'Career & study guidance',
        text: 'Workshops and mentoring to connect interests with realistic next steps: subjects, courses, and opportunities.',
    },
    {
        title: 'Supporting girls in STEM',
        text: 'Safe spaces, peer support, and confidence-building so girls can aim for further study in tech and science.',
    },
    {
        title: 'Community & creativity',
        text: 'Murals, art, and group projects alongside tech—for teamwork, expression, and belonging.',
    },
];

const WhatWeDo = () => {
    return (
        <main className="page-main page-what-we-do">
            <header className="page-hero page-hero--brand">
                <div className="container page-hero-inner">
                    <p className="page-hero-eyebrow">Programs</p>
                    <h1 className="page-hero-title">What we do</h1>
                    <p className="page-lead page-hero-lead">
                        We run practical programs in schools and communities—blending coding, mentoring, and preparation
                        so young people, especially girls, can thrive in school and beyond.
                    </p>
                </div>
            </header>
            <section className="section what-we-do-section">
                <div className="container">
                    <div className="what-we-do-grid">
                        {pillars.map((item) => (
                            <article key={item.title} className="what-we-do-card">
                                <div className="what-we-do-card-icon" aria-hidden="true">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h2 className="what-we-do-card-title">{item.title}</h2>
                                <p className="what-we-do-card-text">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default WhatWeDo;
