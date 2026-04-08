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
                            We combine hands-on coding lessons, career guidance, and academic support so young people—especially girls—can build real skills and plan confident futures.
                        </p>
                    </div>
                    <div className="card-grid-3 home-pillars">
                        <div className="card text-center">
                            <h3>Code &amp; digital skills</h3>
                            <p>Practical programming and problem-solving in a supportive classroom environment.</p>
                            <Link to="/what-we-do" className="btn btn-outline btn-block mt-4">Learn more</Link>
                        </div>
                        <div className="card text-center">
                            <h3>Career guidance</h3>
                            <p>Helping students explore interests, set goals, and understand pathways into work and higher study.</p>
                            <Link to="/what-we-do" className="btn btn-outline btn-block mt-4">Learn more</Link>
                        </div>
                        <div className="card text-center">
                            <h3>Girls&apos; education</h3>
                            <p>Mentoring and preparation so girls can pursue further study and technology with confidence.</p>
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
                            From creative workshops to community murals and student-led projects, we measure success by confidence gained, skills learned, and doors opened for the next generation.
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
                    <p className="section-subtitle mx-auto">Moments from our classrooms and community programs—creativity, pride, and growth in action.</p>
                    <Link to="/success-stories" className="btn btn-primary">View stories</Link>
                </div>
            </section>
        </>
    );
};

export default HomePage;
