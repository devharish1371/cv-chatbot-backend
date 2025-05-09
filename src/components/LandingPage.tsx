import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Welcome to My CV Chatbot
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => navigate('/chat')}
          >
            <img src="/images/academic.png" alt="Academic" className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">Academic Background</h3>
            <p className="text-gray-600 text-center">Learn about my education and research experience</p>
          </div>
          <div 
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => navigate('/chat')}
          >
            <img src="/images/professional.png" alt="Professional" className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">Professional Experience</h3>
            <p className="text-gray-600 text-center">Discover my work history and skills</p>
          </div>
          <div 
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => navigate('/chat')}
          >
            <img src="/images/get to know me.webp" alt="Personal" className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">Get to Know Me</h3>
            <p className="text-gray-600 text-center">Chat about my interests and hobbies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 