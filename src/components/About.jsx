import React from 'react';

const ValueIcon = ({ children }) => (
    <div className="value-card-icon" aria-hidden="true">
        {children}
    </div>
);

const About = () => {
    return (
        <main className="page-main page-about">
            <header className="page-hero page-hero--brand">
                <div className="container page-hero-inner">
                    <p className="page-hero-eyebrow">Our story</p>
                    <h1 className="page-hero-title">About us</h1>
                    <p className="page-lead page-hero-lead">
                        GoTechFuture Foundation is here so young people—especially girls—can learn technology, ask honest questions about
                        school and careers, and find support in one welcoming place.
                    </p>
                </div>
            </header>

            <section className="section about-mission-section">
                <div className="container">
                    <div className="about-mission-grid">
                        <article className="about-prose-card">
                            <h2 className="about-section-heading">Our mission</h2>
                            <p>
                                Many students do not get enough clear advice about what to study next, how to apply for school, or how
                                technology can fit into their lives. Some feel shy, stuck, or unsure whom to trust.
                            </p>
                            <p>
                                We start with simple skills—coding and using digital tools—and we listen. We help learners connect what they
                                enjoy with real next steps: subjects, courses, and practical goals. No one needs a perfect plan on day one;
                                we walk beside them as they grow.
                            </p>
                            <p className="about-prose-card__last">
                                We give extra attention to girls and young women: mentoring, safe group learning, and help with school admission
                                and study planning. We also share information about important helplines—such as <strong>1090</strong> and{' '}
                                <strong>1098</strong> in Vilages—and other support options, so people know where to turn in difficult moments.
                            </p>
                        </article>
                        <aside className="about-aside">
                            <div className="about-highlight-card">
                                <span className="about-highlight-label">What we believe</span>
                                <p className="about-highlight-text">
                                    Every young person deserves a fair chance to learn, to ask questions without fear, and to build a future they help choose.
                                </p>
                            </div>
                            <ul className="about-pill-list">
                                <li>Coding &amp; digital literacy</li>
                                <li>Career &amp; study guidance</li>
                                <li>Mentoring for girls &amp; youth</li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="about-quote-strip">
                <div className="container">
                    <blockquote className="about-quote">
                        <p>When young people see a clear next step—and know someone believes in them—they can move forward one day at a time.</p>
                    </blockquote>
                </div>
            </section>

            <section className="section about-values-section">
                <div className="container">
                    <div className="about-values-header text-center">
                        <h2 className="section-title about-values-title">What drives us</h2>
                        <p className="about-values-sub">
                            Principles that shape every workshop, classroom, and conversation.
                        </p>
                    </div>
                    <div className="value-cards">
                        <article className="value-card">
                            <ValueIcon>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    <path d="M9 12l2 2 4-4" />
                                </svg>
                            </ValueIcon>
                            <h3>Equity in learning</h3>
                            <p>Opportunity should not depend on where someone lives or what their family earns. We bring programs to places that need extra support.</p>
                        </article>
                        <article className="value-card">
                            <ValueIcon>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </svg>
                            </ValueIcon>
                            <h3>Skills that last</h3>
                            <p>We focus on coding fundamentals, critical thinking, and habits that help in school and in working life.</p>
                        </article>
                        <article className="value-card">
                            <ValueIcon>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </ValueIcon>
                            <h3>Whole young people</h3>
                            <p>Arts, teamwork, and community projects sit alongside tech—because confidence and wellbeing matter as much as any syllabus.</p>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
