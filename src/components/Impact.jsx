import React from 'react';

const Impact = () => {
    return (
        <main className="page-main page-impact">
            <header className="page-hero page-hero--brand">
                <div className="container page-hero-inner">
                    <p className="page-hero-eyebrow">Our work in numbers</p>
                    <h1 className="page-hero-title">Our impact</h1>
                    <p className="page-lead page-hero-lead">
                        We keep showing up where young people learn and live. Every workshop, conversation, and follow-up call is a chance
                        to make school, safety, and hope feel a little clearer.
                    </p>
                </div>
            </header>
            <section className="section impact-metrics-section">
                <div className="container">
                    <p className="impact-metrics-intro">
                        These are a few signals of what we are building—real girls, real plans, and knowledge that can protect and empower.
                    </p>
                    <div className="impact-metric-grid">
                        <article className="impact-metric-card impact-metric-card--go">
                            <div className="impact-metric-card__accent" aria-hidden="true" />
                            <div className="impact-metric-card__value">20+</div>
                            <h2 className="impact-metric-card__title">Girls moving forward in school</h2>
                            <p className="impact-metric-card__text">
                                More than twenty girls have received hands-on help with admission steps, forms, and study plans—and we are
                                still counting.
                            </p>
                        </article>
                        <article className="impact-metric-card impact-metric-card--tech">
                            <div className="impact-metric-card__accent" aria-hidden="true" />
                            <div className="impact-metric-card__value impact-metric-card__value--lines">
                                <span className="impact-metric-card__num">1090</span>
                                <span className="impact-metric-card__sep">·</span>
                                <span className="impact-metric-card__num">1098</span>
                            </div>
                            <h2 className="impact-metric-card__title">Numbers that can save a day</h2>
                            <p className="impact-metric-card__text">
                                We talk openly about helplines—women&apos;s helpline <strong>1090</strong>, Childline <strong>1098</strong>, and
                                others—so girls and women know who to call when they need help.
                            </p>
                        </article>
                        <article className="impact-metric-card impact-metric-card--future">
                            <div className="impact-metric-card__accent" aria-hidden="true" />
                            <div className="impact-metric-card__value impact-metric-card__value--word">Whole learner</div>
                            <h2 className="impact-metric-card__title">Skills, heart, and community</h2>
                            <p className="impact-metric-card__text">
                                Coding and career tips sit beside art, teamwork, and local projects—because confidence grows when the whole
                                person is seen.
                            </p>
                        </article>
                    </div>
                    <div className="impact-prose">
                        <p>
                            For us, impact is not only a chart. It is a girl who finally understands how to apply for school. It is someone who
                            remembers <strong>1090</strong> or <strong>1098</strong> in a frightening moment. It is a family that feels heard.
                            Our volunteers and partner schools help us stay close and keep learning what communities need next.
                        </p>
                        <p>
                            We will keep sharing stories and numbers as we grow—thank you for being part of the journey.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Impact;
