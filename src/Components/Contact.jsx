import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold">Contact Me</h1>
        </div>
      </div>
      
      {/* Contact Info Section */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto border p-6">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-1">Email</h3>
            <a 
                href="mailto:vivekkapar@mail.weber.edu" 
                className="text-xl text-purple-700 hover:text-purple-900 font-semibold transition"
              >
                vivekkappar@mail.weber.edu
              </a>          
              </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;