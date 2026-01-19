import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pensieve from './components/Pensieve';
import Loot from './components/Loot';
import Origin from './components/Origin';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-slate-300 selection:bg-wicked-green selection:text-black cursor-none">
      {/* Fog Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden opacity-30">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(16,185,129,0.05)_0%,transparent_60%)] animate-smoke"></div>
        <div className="absolute top-[-20%] left-[20%] w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(124,58,237,0.05)_0%,transparent_60%)] animate-float" style={{animationDuration: '10s'}}></div>
      </div>
      
      <Cursor />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Pensieve />
        <Loot />
        <Origin />
      </main>
      <Footer />
    </div>
  );
};

export default App;