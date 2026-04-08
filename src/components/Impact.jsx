import React from 'react';

const Impact = () => {
    return (
        <main className="page-main">
            <header className="page-hero">
                <div className="container">
                    <h1>Our impact</h1>
                    <p className="page-lead">
                        We grow impact through consistent presence in classrooms and communities—measuring progress in skills, confidence, and new opportunities for young people.
                    </p>
                </div>
            </header>
            <section className="section">
                <div className="container">
                    <div className="stats-box" style={{ maxWidth: '900px', margin: '0 auto', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', display: 'grid' }}>
                        <div className="stat text-center">
                            <h3>100%</h3>
                            <p>Dedication to inclusive, supportive learning</p>
                        </div>
                        <div className="stat text-center">
                            <h3>Focus</h3>
                            <p>Girls and underserved youth in technology &amp; education</p>
                        </div>
                        <div className="stat text-center">
                            <h3>Holistic</h3>
                            <p>Code, career guidance, arts, and community projects</p>
                        </div>
                    </div>
                    <div className="mt-8" style={{ maxWidth: '720px', margin: '3rem auto 0', color: 'var(--gray)', lineHeight: 1.75 }}>
                        <p>
                            Our programs create ripple effects: students gain technical vocabulary and problem-solving practice; mentors and volunteers build lasting relationships with schools; and families see clearer pathways to further study and meaningful work.
                        </p>
                        <p className="mt-4">
                            We continue to document outcomes through participation, project completion, and feedback from learners and educators—as we expand, we will publish more detailed metrics here.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Impact;
