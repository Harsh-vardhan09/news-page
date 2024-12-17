import React from 'react';
import Navbar from './components/Navbar';
import NewsList from './components/NewsList';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <NewsList />
        <VideoSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
