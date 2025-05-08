import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="hero-section">
        <h1 className="text-4xl font-bold mb-4">Welcome to My CV Chatbot</h1>
        <p className="text-xl mb-8">Get to know me through an interactive conversation</p>
        <button
          onClick={() => navigate('/chat')}
          className="start-chat-btn"
        >
          Start Chat
        </button>
      </div>
      
      <div className="features-section">
        <div className="feature-card">
          <h3>Professional Experience</h3>
          <p>Learn about my work history and skills</p>
        </div>
        <div className="feature-card">
          <h3>Academic Background</h3>
          <p>Discover my educational journey</p>
        </div>
        <div className="feature-card">
          <h3>Personal Interests</h3>
          <p>Get to know me beyond my resume</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 