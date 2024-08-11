import React, { useState } from 'react';
import axios from 'axios';
import image1 from '../assets/image1.jpg'; // 
import animation1 from '../assets/animation1.gif'; // 
import animation3 from '../assets/animation3.gif'; // 
import '../App.css';

const Home = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [aiInsights, setAiInsights] = useState('');
    const [query, setQuery] = useState('');
    const [purpose, setPurpose] = useState('');
    const [concerns, setConcerns] = useState('');

    const handleSearch = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`https://api.patentsview.org/patents/query`, {
                params: {
                    q: `{"_text_any":{"patent_title":"${query}"}}`,
                    f: '["patent_title","patent_abstract","patent_number","patent_date"]',
                    o: '{"per_page":10}'
                },
            });
            const patents = response.data.patents.map((patent) => ({
                id: patent.patent_number,
                title: patent.patent_title,
                description: patent.patent_abstract,
                date: patent.patent_date,
                link: `https://patents.google.com/patent/${patent.patent_number}`
            }));

            const analyzedPatents = await Promise.all(patents.map(async (patent) => {
                const summary = await analyzePatentAbstract(patent.description);
                return { ...patent, summary };
            }));

            setResults(analyzedPatents);

            const insights = await generateAiInsights(query, purpose, concerns);
            setAiInsights(insights);
        } catch (err) {
            console.error('Error fetching data:', err);
            setError('Error fetching data');
        } finally {
            setLoading(false);
        }
    };

    const handleClear = () => {
        setResults([]);
        setAiInsights('');
        setError(null);
        setQuery('');
        setPurpose('');
        setConcerns('');
    };

    const analyzePatentAbstract = async (abstract) => {
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'user',
                            content: `Provide a detailed summary of the following patent abstract. Include potential issues, alternatives, and examples of similar searches: ${abstract}`,
                        },
                    ],
                },
                {
                    headers: {
                        Authorization: `Bearer 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`,
                    },
                }
            );
            if (response.data.choices && response.data.choices.length > 0) {
                return response.data.choices[0].message.content.trim();
            } else {
                return 'No summary available.';
            }
        } catch (error) {
            console.error('Error analyzing patent abstract:', error);
            return 'Analysis not available.';
        }
    };

    const generateAiInsights = async (query, purpose, concerns) => {
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'user',
                            content: `I am searching for patents related to ${query} with the purpose of ${purpose} and have the following concerns: ${concerns}. Please provide detailed insights and suggest additional search terms that might be relevant.`,
                        },
                    ],
                },
                {
                    headers: {
                        Authorization: `Bearer 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`,
                    },
                }
            );
            if (response.data.choices && response.data.choices.length > 0) {
                return response.data.choices[0].message.content.trim();
            } else {
                return 'No insights available.';
            }
        } catch (error) {
            console.error('Error generating AI insights:', error);
            return 'AI insights not available.';
        }
    };

    return (
        <div className="container">
            <nav className="navbar">
               
            </nav>
            <section className="introduction">
                <div>
                    <h3>Welcome to the AI-Powered Patent Due Diligence Platform</h3>
                    <p>
                        Our platform leverages cutting-edge AI technology to streamline the patent due diligence process. 
                        Whether you are a researcher, inventor, or legal professional, our system is designed to provide 
                        comprehensive and actionable insights into patent data.
                    </p>
                </div>
                <img src={image1} alt="AI-powered patent analysis" className="intro-image" />
            </section>
            <h2 id="capabilities" className="section-heading">Our Capabilities</h2>
            <div className="cards-container">
                <div className="card">
                    <h3>Advanced Patent Search</h3>
                    <p>Our advanced search functionality allows you to quickly locate patents using precise keywords and specific topics, saving you valuable time and effort.</p>
                </div>
                <div className="card">
                    <h3>Patent Abstract Analysis</h3>
                    <p>Utilize our AI to thoroughly analyze patent abstracts, delivering detailed and insightful summaries to assist you in understanding complex patent information.</p>
                </div>
                <div className="card">
                    <h3>Challenge Detection</h3>
                    <p>Identify potential challenges in your patent applications with our AI-powered analysis and receive practical suggestions for overcoming these obstacles.</p>
                </div>
                <div className="card">
                    <h3>AI-Driven Insights</h3>
                    <p>Harness the power of AI to gain deep insights and innovative suggestions, guiding you towards new opportunities and enhancing your research and development efforts.</p>
                </div>
                <div className="card">
                    <h3>Comprehensive Document Search</h3>
                    <p>Seamlessly search through your documents and official patent data with SearchAI, using both semantic and keyword-based queries to find exactly what you need.</p>
                </div>
                <div className="card">
                    <h3>Interactive AI Support</h3>
                    <p>Engage with ChatAI, our intelligent chatbot, designed to understand and summarize patent and legal documents, providing you with real-time support and information.</p>
                </div>
            </div>
            <section className="future-capabilities">
                <div>
                    <h3>Future Capabilities</h3>
                    <ul>
                        <li>Engage with an interactive chatbot for real-time assistance with patent searches, offering personalized support and guidance throughout your journey.</li>
                        <li>Access advanced tools for trend analysis and visualize the patent landscape to make well-informed decisions based on the latest data.</li>
                        <li>Assess the market impact of new patents with our comprehensive evaluation tools, helping you understand the potential and risks of your innovations.</li>
                        <li>Integrate with extensive legal databases to perform detailed legal analyses, ensuring your patents are robust and legally sound.</li>
                    </ul>
                </div>
                <img src={animation3} alt="Future capabilities" className="info-image" />
            </section>
            <section className="uses">
                <div>
                    <h3>Uses of the Platform</h3>
                    <ul>
                        <li>Researchers can effortlessly find and analyze patents related to their field, speeding up their research process with accurate and comprehensive data.</li>
                        <li>Inventors can evaluate the uniqueness of their ideas and identify potential issues early on, making the patent application process smoother and more successful.</li>
                        <li>Legal professionals can enhance their due diligence with thorough insights and analyses, streamlining their workflow and improving the quality of their legal assessments.</li>
                        <li>Businesses can explore new patent opportunities and assess risks effectively, enabling strategic decision-making and innovation management.</li>
                    </ul>
                </div>
            </section>
            <div className="guided-search">
                <img src={animation1} alt="Search Animation" className="search-animation" />
                <h3>What are you looking for in a patent search?</h3>
                <input 
                    type="text" 
                    placeholder="Enter patent topic or title" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {results.length > 0 && (
                <div className="results">
                    {results.map((result) => (
                        <div className="result-card" key={result.id}>
                            <h3>{result.title}</h3>
                            <p><strong>Abstract:</strong> {result.description}</p>
                            <p><strong>Date:</strong> {result.date}</p>
                            <p><strong>AI Summary:</strong> {result.summary}</p>
                            <a href={result.link} target="_blank" rel="noopener noreferrer">Read Full Patent</a>
                        </div>
                    ))}
                </div>
            )}
            {aiInsights && (
                <section className="ai-insights">
                    <h3>AI-Generated Insights</h3>
                    <p>{aiInsights}</p>
                </section>
            )}
            <button onClick={handleClear}>Clear</button>
            <footer className="footer">
                <p>&copy; 2024 Patent Due Diligence AI. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;








































