import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="bg-gray-100 border-b">
          <div className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <div>
                <Link to="/" className="font-bold">Sameer Pandey</Link>
              </div>
              <div className="flex space-x-6">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        
        {/* Footer */}
        <footer className="bg-gray-100 border-t py-4">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <p className="font-medium">Sameer Pandey</p>
                <p className="text-gray-600">Computer Science</p>
              </div>
              <div>
                <p className="text-gray-600">&copy; {new Date().getFullYear()} Sameer Pandey</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;