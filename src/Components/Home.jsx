import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-4">Sameer Pandey</h1>
          <h2 className="text-2xl mb-6">Computer Science</h2>
          <p className="text-lg mb-6">
            Passionate developer specializing in coding, web development, 
            database management, and networking solutions.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-gray-800 px-5 py-2 rounded"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Core Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border p-6">
            <h3 className="text-lg font-medium mb-2">Coding</h3>
            <p className="text-gray-600">
              Programming languages and software development.
            </p>
          </div>
          
          <div className="border p-6">
            <h3 className="text-lg font-medium mb-2">Web Development</h3>
            <p className="text-gray-600">
              Responsive and intuitive web applications.
            </p>
          </div>
          
          <div className="border p-6">
            <h3 className="text-lg font-medium mb-2">Database</h3>
            <p className="text-gray-600">
              Database design and optimization.
            </p>
          </div>
          
          <div className="border p-6">
            <h3 className="text-lg font-medium mb-2">Networking</h3>
            <p className="text-gray-600">
              Secure network infrastructure solutions.
            </p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
          <div className="mt-4">
            <Link 
              to="/contact" 
              className="bg-gray-800 text-white px-5 py-2 rounded"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;