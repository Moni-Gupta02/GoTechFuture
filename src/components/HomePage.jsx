import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';

const HomePage = () => {
    return (
        <>
            <Hero />
            <section className="section bg-light">
                <div className="container">
                    <div className="section-block text-center mb-8">
                        <h2 className="section-title">What We Stand For</h2>
                        <p className="section-subtitle mx-auto max-w-2xl">
                            We believe every young person deserves simple, honest help: learn how technology works, ask questions about
                            school and jobs, and get support when the path feels unclear. We focus on girls and young women because
                            extra encouragement and the right information can change what feels possible.
                        </p>
                    </div>
                    <div className="card-grid-3 home-pillars">
                        <div className="card text-center">
                            <h3>Code &amp; digital skills</h3>
                            <p>We teach coding in plain language—small steps, lots of practice, and room to ask questions.</p>
                            <Link to="/what-we-do" className="btn btn-outline btn-block mt-4">Learn more</Link>
                        </div>
                        <div className="card text-center">
                            <h3>Career guidance</h3>
                            <p>We help students think about what they enjoy, what they can study next, and how to plan one step at a time.</p>
                            <Link to="/what-we-do" className="btn btn-outline btn-block mt-4">Learn more</Link>
                        </div>
                        <div className="card text-center">
                            <h3>Girls&apos; education</h3>
                            <p>We mentor girls and share clear information—from school admission steps to safety and helpline numbers when they need it.</p>
                            <Link to="/what-we-do" className="btn btn-outline btn-block mt-4">Learn more</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container split-layout" style={{ maxWidth: '1100px' }}>
                    <div>
                        <h2 className="section-title" style={{ textAlign: 'left' }}>Our impact</h2>
                        <p style={{ color: 'var(--gray)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                            We are still growing, but we already have stories to tell: more than <strong>20 girls</strong> have received hands-on
                            help to move forward with <strong>school admission and study plans</strong>. We have also guided girls and women on
                            important <strong>helpline numbers</strong>—including <strong>1090</strong> and <strong>1098</strong>—and many other ways to stay safe and get support.
                            Workshops, art, and community projects still sit at the heart of how we learn together.
                        </p>
                        <Link to="/impact" className="btn btn-primary">See our impact</Link>
                    </div>
                    <div className="rounded-img shadow-lg overflow-hidden">
                        <img src="/success-stories/story-3.png" alt="Participants working on a community mural" style={{ width: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </section>
            <section className="section bg-light">
                <div className="container text-center">
                    <h2 className="section-title">Success stories</h2>
                    <p className="section-subtitle mx-auto">Photos and moments from our classes and community work—where ideas turn into confidence.</p>
                    <Link to="/success-stories" className="btn btn-primary">View stories</Link>
                </div>
            </section>
        </>
    );
};

export default HomePage;
