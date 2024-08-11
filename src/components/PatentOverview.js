import React from 'react';
import '../App.css';

const PatentOverview = () => {
    return (
        <div className="container">
            <section className="introduction">
                <div>
                    <center><h3>Understanding Patents: A Simple Guide</h3></center>
                    <p>
                        Patents are like the legal armor for your inventions. They help you protect your bright ideas, ensuring that no one else can copy them. Whether you're an inventor, a curious thinker, or just someone interested in innovation, understanding patents can open up a world of opportunities.
                    </p>
                </div>
            </section>

            <section className="future-capabilities">
                <div>
                    <h3>Different Types of Patents</h3>
                    <ul>
                        <li><strong>Utility Patents:</strong> These are the most common patents. They cover new inventions or discoveries that are useful, like a new machine or a unique chemical formula.</li>
                        <li><strong>Design Patents:</strong> These protect the unique visual qualities of a product. Think of the sleek design of a smartphone or the distinctive shape of a car.</li>
                        <li><strong>Plant Patents:</strong> Yes, you can even patent plants! If you've created a new, reproducible plant variety, a plant patent is what you need.</li>
                    </ul>
                </div>
                <img src={require('../assets/animation3.gif')} alt="Patent types" className="info-image" />
            </section>

            <section className="uses">
                <div>
                    <h3>Why Patents Matter</h3>
                    <p>
                        Patents aren't just about protecting ideas; they're about encouraging innovation. By securing a patent, you're not just safeguarding your invention—you're also paving the way for future advancements. Here’s how patents make a difference:
                    </p>
                    <ul>
                        <li><strong>Encouraging Investment:</strong> With a patent, investors are more likely to back your ideas, knowing they’re protected.</li>
                        <li><strong>Protecting Your Creations:</strong> A patent ensures that your hard work and creativity can’t be legally copied by others.</li>
                        <li><strong>Sharing Knowledge:</strong> Patents add to the pool of public knowledge, inspiring others to innovate and improve upon existing ideas.</li>
                    </ul>
                </div>
            </section>

            <section className="additional-insights">
                <div>
                    <h3>The Journey of Getting a Patent</h3>
                    <p>
                        Getting a patent is a journey that starts with a simple idea. It involves detailed research, documentation, and sometimes, a bit of patience. But in the end, it's all worth it. Whether you're at the beginning of this journey or just exploring, remember that every great invention starts with a small spark of inspiration.
                    </p>
                </div>
            </section>

            <section className="friendly-reminder">
                <div>
                    <h3>A Friendly Reminder</h3>
                    <p>
                        Remember, patents are powerful tools, but they're also part of a larger picture. They work best when combined with creativity, persistence, and a genuine desire to make the world a better place.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default PatentOverview;
