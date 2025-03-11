import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold">About Me</h1>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="border p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <div className="">
              <img src="/img.jpg" alt="Sameer Pandey" className="bg-gray-200 w-full aspect-square mb-3l" />
              </div>
              <div className="text-center">
                <h3 className="font-medium">Sameer Pandey</h3>
                <p className="text-gray-600">Computer Science</p>
              </div>
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-700 mb-3">
                I am a computer science student with expertise in multiple domains of technology. 
                My journey in computing began with a fascination for how technology solves real-world problems.
              </p>
              <p className="text-gray-700">
                With a strong foundation in computer science principles, I've developed skills across 
                software development, web technologies, database management, and network infrastructure.
              </p>
            </div>
          </div>
        </div>
        
        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border p-6">
            <h2 className="text-xl font-bold mb-4">Education</h2>
            <h3 className="font-medium">Computer Science Degree</h3>
            <p className="text-gray-600 mb-2">Weber State University</p>
          </div>
          
          <div className="border p-6">
            <h2 className="text-xl font-bold mb-4">Experience</h2>
            <h3 className="font-medium"> Developer</h3>
            <p className="text-gray-600">2025 - Present</p>
          </div>
        </div>
        
        {/* Skills */}
        <div className="border p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Technical Skills</h2>
          <ul className="space-y-2">
            <li>Coding</li>
            <li>Web Development</li>
            <li>Database</li>
            <li>Networking</li>
          </ul>
        </div>
        
        {/* CTA */}
        <div className="text-center py-4">
          <Link 
            to="/contact" 
            className="inline-block bg-gray-800 text-white px-5 py-2 rounded"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;