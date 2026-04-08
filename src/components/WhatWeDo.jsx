import React from 'react';

const WhatWeDo = () => {
    return (
        <main className="page-main">
            <header className="page-hero">
                <div className="container">
                    <h1>What we do</h1>
                    <p className="page-lead">
                        GoTechFuture Foundation runs programs that blend technology education, mentoring, and academic preparation—
                        with a strong focus on supporting girls and young women to thrive in school and beyond.
                    </p>
                </div>
            </header>
            <section className="section">
                <div className="container container-sm">
                    <ul className="check-list" style={{ fontSize: '1.05rem', color: 'var(--gray)' }}>
                        <li><strong style={{ color: 'var(--dark)' }}>Teaching coding and digital literacy.</strong> We introduce programming concepts, logical thinking, and creative projects so students can see technology as a tool they can master—not something distant or only for others.</li>
                        <li><strong style={{ color: 'var(--dark)' }}>Career guidance and exploration.</strong> Many young people lack clear information about study paths and jobs. We facilitate workshops, conversations, and mentoring to help them connect their interests to realistic next steps.</li>
                        <li><strong style={{ color: 'var(--dark)' }}>Supporting girls to prepare for education.</strong> We work to reduce barriers by building confidence, study habits, and peer support, so girls feel ready to pursue further study—including in STEM fields.</li>
                        <li><strong style={{ color: 'var(--dark)' }}>Helping students plan for future study.</strong> From choosing subjects to understanding scholarships and admissions, we help learners and families navigate decisions about secondary and higher education.</li>
                        <li><strong style={{ color: 'var(--dark)' }}>Arts, community, and wellbeing.</strong> Creative activities—painting, murals, and group projects—reinforce teamwork, expression, and a sense of belonging alongside technical learning.</li>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default WhatWeDo;
