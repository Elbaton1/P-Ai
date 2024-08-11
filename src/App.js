import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import PatentOverview from './components/PatentOverview';
import About from './components/About'; // Import the new About component
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/overview" element={<PatentOverview />} />
                    <Route path="/about" element={<About />} /> {/* New route for About page */}
                    {/* Add more routes as needed */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;





