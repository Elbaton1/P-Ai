import React from 'react';
import '../App.css';

const Results = ({ data }) => {
    return (
        <div className="results">
            {data.map((result) => (
                <div className="result-card" key={result.id}>
                    <h3>{result.title}</h3>
                    <p><strong>Abstract:</strong> {result.description}</p>
                    <p><strong>Date:</strong> {result.date}</p>
                    <p><strong>AI Summary:</strong> {result.summary}</p>
                    <a href={result.link} target="_blank" rel="noopener noreferrer">Read Full Patent</a>
                </div>
            ))}
        </div>
    );
};

export default Results;





