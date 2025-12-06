import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import Services from './components/Services';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Maps from './components/Maps';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#D5DBDB] flex flex-col relative">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/maps" element={<Maps />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
