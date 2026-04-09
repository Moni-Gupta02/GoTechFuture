import React, { useState, useRef } from 'react';

const CONTACT_EMAIL = 'guptamoni002@gmail.com';
const FORMSUBMIT_AJAX = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const submitLockRef = useRef(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (submitLockRef.current) return;
        submitLockRef.current = true;

        setError(null);
        setSubmitting(true);

        const form = e.currentTarget;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        try {
            const res = await fetch(FORMSUBMIT_AJAX, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    _replyto: email,
                    _subject: `${name} — GoTechFuture Foundation contact`,
                    _template: 'table',
                }),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok || data.success === false) {
                throw new Error(data.message || 'Something went wrong. Please try again.');
            }

            setSubmitted(true);
            form.reset();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Could not send your message. Please try again or email us directly.');
        } finally {
            setSubmitting(false);
            submitLockRef.current = false;
        }
    };

    return (
        <main className="page-main page-contact">
            <header className="page-hero page-hero--brand">
                <div className="container page-hero-inner">
                    <p className="page-hero-eyebrow">Get in touch</p>
                    <h1 className="page-hero-title">Contact us</h1>
                    <p className="page-lead page-hero-lead">
                        Whether you are a student, parent, educator, or partner—we would love to hear from you.
                    </p>
                </div>
            </header>

            <section className="section contact-section">
                <div className="container contact-layout">
                    <aside className="contact-aside" aria-label="Contact options">
                        <div className="contact-info-card">
                            <h2 className="contact-info-heading">Email us</h2>
                            <a className="contact-email-link" href={`mailto:${CONTACT_EMAIL}`}>
                                {CONTACT_EMAIL}
                            </a>
                            <p className="contact-info-hint">We read every message and aim to reply as soon as we can.</p>
                        </div>
                        <div className="contact-info-card">
                            <h2 className="contact-info-heading">Follow along</h2>
                            <ul className="contact-social-list">
                                <li>
                                    <a href="https://www.youtube.com/@GoTechFutureFoundation" target="_blank" rel="noopener noreferrer">YouTube</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/go-tech-future-foundation/?viewAsMember=true" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/gotechfuture?igsh=djFwM3kxNWI3YnBj" target="_blank" rel="noopener noreferrer">Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div className="contact-info-card contact-info-card--accent">
                            <p className="contact-accent-text">
                                Prefer email? Use the form or write to us directly—we are happy either way.
                            </p>
                        </div>
                    </aside>

                    <div className="contact-form-column">
                        <div className="contact-card contact-card--elevated">
                            {submitted ? (
                                <div className="contact-success" role="status">
                                    <div className="contact-success-icon" aria-hidden="true">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <h2 className="contact-success-title">Thank you</h2>
                                    <p className="contact-success-text">
                                        We have received your message and will contact you soon.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <div className="contact-form-intro">
                                        <h2 className="contact-form-title">Send a message</h2>
                                        <p className="contact-form-sub">Fill in your details below. All fields are required.</p>
                                    </div>
                                    <form className="contact-form" onSubmit={handleSubmit}>
                                        {error && (
                                            <p className="form-error" role="alert">{error}</p>
                                        )}
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input id="name" name="name" type="text" required autoComplete="name" disabled={submitting} placeholder="Your full name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input id="email" name="email" type="email" required autoComplete="email" disabled={submitting} placeholder="you@example.com" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea id="message" name="message" rows="5" required placeholder="How can we help?" disabled={submitting} />
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block contact-submit-btn" disabled={submitting}>
                                            {submitting ? 'Sending…' : 'Send message'}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
