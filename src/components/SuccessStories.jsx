import React from 'react';

const stories = [
    {
        src: '/success-stories/story-1.png',
        title: 'Creativity in the classroom',
        caption: 'Participants share original artwork during a foundation workshop—celebrating expression and confidence alongside learning.',
    },
    {
        src: '/success-stories/story-2.png',
        title: 'Pride in every brushstroke',
        caption: 'A young learner presents her landscape painting; our programs make space for both technical and creative growth.',
    },
    {
        src: '/success-stories/story-3.png',
        title: 'Together on community art',
        caption: 'Volunteers and students collaborate on a mural—teamwork, patience, and shared vision on display.',
    },
    {
        src: '/success-stories/story-4.png',
        title: 'Vision for a greener school',
        caption: 'Student poster illustrating care for the environment and our shared mission of education and responsibility.',
    },
    {
        src: '/success-stories/story-community-holi.png',
        title: 'Colour, joy, and togetherness',
        caption: 'Learners celebrate Holi in class—community, culture, and learning in the same room. Real grassroots spaces where childrens people feel they belong.',
    },
];

const SuccessStories = () => {
    return (
        <main className="page-main">
            <header className="page-hero">
                <div className="container">
                    <h1>Success stories</h1>
                    <p className="page-lead">
                        Snapshots from GoTechFuture Foundation activities—real faces, real projects, and the energy of young people building their futures.
                    </p>
                </div>
            </header>
            <section className="section">
                <div className="container">
                    <div className="story-grid">
                        {stories.map((s) => (
                            <article key={s.src} className="story-card card">
                                <div className="story-card-image">
                                    <img src={s.src} alt={s.title} loading="lazy" />
                                </div>
                                <h3>{s.title}</h3>
                                <p>{s.caption}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SuccessStories;
