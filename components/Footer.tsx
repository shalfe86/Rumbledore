import React from 'react';
import { Twitter, Instagram, Youtube, Moon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark border-t border-slate-900 py-12 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-2xl font-bold text-slate-200 mb-2 tracking-widest">RUMBLEDORE</h3>
          <p className="font-body text-slate-600 italic">"Nox."</p>
        </div>

        <div className="flex items-center gap-8">
          <a href="#" className="text-slate-500 hover:text-wicked-purple transition-colors hover:scale-110 transform"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="text-slate-500 hover:text-wicked-purple transition-colors hover:scale-110 transform"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-slate-500 hover:text-wicked-purple transition-colors hover:scale-110 transform"><Youtube className="w-5 h-5" /></a>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-600 font-serif">
          <span>Crafted in Shadow</span>
          <Moon className="w-3 h-3 text-wicked-gold" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;