import React from 'react';

const pillars = [
    {
        title: 'Coding & digital skills',
        text: 'We teach programming in small, friendly steps. Learners try things on the keyboard, fix mistakes, and see that technology is something they can use—not only watch.',
    },
    {
        title: 'Career & study guidance',
        text: 'We run workshops and one-to-one conversations about subjects, courses, and jobs. We help map simple next steps so the future feels less confusing.',
    },
    {
        title: 'Supporting girls in STEM',
        text: 'We create safe groups, mentoring, and clear information—including help with school admission and study plans, plus awareness of helplines such as 1090 and 1098 and other support.',
    },
    {
        title: 'Community & creativity',
        text: 'Murals, art, and team projects sit next to tech skills—so young people build confidence, friendship, and pride in their community.',
    },
];

const WhatWeDo = () => {
    return (
        <main className="page-main page-what-we-do">
            <header className="page-hero page-hero--brand page-hero--wordmark-tech">
                <div className="container page-hero-inner">
                    <p className="page-hero-eyebrow">Programs</p>
                    <h1 className="page-hero-title">What we do</h1>
                    <p className="page-lead page-hero-lead">
                        We run hands-on programs in schools and neighbourhoods. We mix coding, mentoring, and honest conversations about school
                        and safety so young people—especially girls—can learn, plan, and feel supported.
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
