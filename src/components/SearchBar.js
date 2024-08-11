import React, { useState } from 'react';
import '../App.css';

const SearchBar = ({ onSearch, onClear }) => {
    const [query, setQuery] = useState('');
    const [purpose, setPurpose] = useState('');
    const [concerns, setConcerns] = useState('');
    const suggestions = [
        "Innovation in renewable energy",
        "Medical devices and patents",
        "AI and machine learning patents",
        "Consumer electronics",
        "Automotive technology"
    ];

    const handleSearch = () => {
        onSearch({ query, purpose, concerns });
    };

    const handleClear = () => {
        setQuery('');
        setPurpose('');
        setConcerns('');
        onClear();
    };

    return (
        <div className="search-bar">
            <h3>Patent Search</h3>
            <input 
                type="text" 
                placeholder="Enter patent topic or title" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Purpose of search (e.g., research, development, legal)" 
                value={purpose} 
                onChange={(e) => setPurpose(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Any specific concerns or focus areas?" 
                value={concerns} 
                onChange={(e) => setConcerns(e.target.value)} 
            />
            <button onClick={handleSearch}>Search</button>
            <button onClick={handleClear}>Clear</button>
            <div className="suggestions">
                <h4>Search Suggestions</h4>
                <ul>
                    {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => setQuery(suggestion)}>{suggestion}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchBar;








