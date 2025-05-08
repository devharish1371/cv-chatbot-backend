import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Chatbot from "./components/Chatbot";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<Chatbot />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 