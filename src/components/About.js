import React from 'react';
import '../App.css';

const About = () => {
    return (
        <div className="container">
            <h3>About This Project</h3>
            <p>
                This website was made by Michael O'Brien and Adam Sparkes for our final project. We created it to help people find and understand patents more easily using AI.
            </p>
            <p>
                The site helps users search for patents, read summaries, and get useful insights—all in one place. We wanted to make the process simple and easy to use.
            </p>

            <section className="our-roles">
                <h4>Our Roles</h4>
                <p><strong>Michael O'Brien:</strong> Focused on the AI integration and overall architecture of the site.</p>
                <p><strong>Adam:</strong> Worked on the front-end design and user experience to make the site look great and easy to use.</p>
            </section>

            <section className="tech-used">
                <h4>Technology Used</h4>
                <ul>
                    <li>React for building the user interface</li>
                    <li>React Router for navigating between pages</li>
                    <li>CSS for styling the site</li>
                    <li>OpenAI API for generating AI insights</li>
                    <li>Axios for making API requests</li>
                </ul>
            </section>

            <section className="challenges">
                <h4>Challenges We Faced</h4>
                <p>One of the biggest challenges was integrating the AI features. We had to make sure the data was processed correctly and that the site was user-friendly.</p>
                <p>We also worked hard to ensure the design was responsive and looked good on all devices.</p>
            </section>

            <section className="future-improvements">
                <h4>Future Improvements</h4>
                <p>We plan to add more features like a user dashboard and enhanced search filters to make the site even more useful.</p>
                <p>We also want to improve the AI's ability to provide more detailed insights and recommendations.</p>
            </section>
        </div>
    );
};

export default About;
