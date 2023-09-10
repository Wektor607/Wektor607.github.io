import ChatBot from './components/ChatBot';
import AboutPage from './components/AboutPage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div>
            <ChatBot/>
            <Routes>
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
