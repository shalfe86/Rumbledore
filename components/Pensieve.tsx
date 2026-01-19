import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Skull, Scroll, Star, Eye } from 'lucide-react';
import { Movie, TriviaQuestion } from '../types';

const moviesData: Movie[] = [
  { id: 1, title: 'The Half-Blood Prince', image: 'https://picsum.photos/seed/hbp/300/450' },
  { id: 2, title: 'Order of the Phoenix', image: 'https://picsum.photos/seed/ootp/300/450' },
  { id: 3, title: 'Deathly Hallows Pt 2', image: 'https://picsum.photos/seed/dh2/300/450' },
];

const triviaData: TriviaQuestion = {
  question: "What potion grants liquid luck?",
  answer: "Felix Felicis"
};

const Pensieve: React.FC = () => {
  const [activeMovies, setActiveMovies] = useState<Movie[]>(moviesData);
  const [winner, setWinner] = useState<Movie | null>(null);
  const [isTriviaFlipped, setIsTriviaFlipped] = useState(false);

  const handleMovieClick = (selected: Movie) => {
    if (winner) return;
    setWinner(selected);
    setActiveMovies([selected]);
  };

  const resetGame = () => {
    setActiveMovies(moviesData);
    setWinner(null);
  };

  return (
    <section id="archives" className="py-32 bg-dark relative overflow-hidden">
      {/* Subtle Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-5xl md:text-6xl font-bold text-slate-200 mb-4"
            >
                Dark Echoes
            </motion.h2>
            <div className="flex items-center justify-center gap-4">
                <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-wicked-green to-transparent"></div>
                <p className="font-serif text-wicked-green text-sm uppercase tracking-[0.3em]">
                    Memories & Tests
                </p>
                <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-wicked-green to-transparent"></div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Feature A: The Sacrifice */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
                <h3 className="font-serif text-2xl text-slate-300 flex items-center gap-3">
                    <Skull className="text-wicked-purple w-6 h-6" />
                    The Unforgivable Choice
                </h3>
                {winner && (
                    <button 
                        onClick={resetGame}
                        className="text-sm font-serif text-slate-500 hover:text-wicked-gold transition-colors italic"
                    >
                        Cast "Revertis" (Reset)
                    </button>
                )}
            </div>
            
            <p className="text-slate-500 font-body italic text-lg mb-8">
               {winner ? "The survivor stands alone." : "Select one. Banished memories turn to dust."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[400px] items-center">
              <AnimatePresence mode='popLayout'>
                {activeMovies.map((movie, index) => (
                  <motion.div
                    key={movie.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0.8, 
                      filter: 'grayscale(100%) blur(5px)',
                      y: 50,
                      transition: { duration: 0.6 } 
                    }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleMovieClick(movie)}
                    className="relative cursor-pointer group perspective-1000"
                  >
                     <motion.div 
                        whileHover={{ y: -10 }}
                        className={`relative aspect-[2/3] overflow-hidden rounded-sm shadow-2xl transition-all duration-500 ${
                            winner?.id === movie.id ? 'ring-2 ring-wicked-gold shadow-[0_0_30px_rgba(212,175,55,0.2)]' : 'ring-1 ring-slate-800'
                        }`}
                     >
                        <img 
                            src={movie.image} 
                            alt={movie.title} 
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-90"></div>
                        
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                            <h4 className="font-serif text-lg text-slate-200 group-hover:text-wicked-gold transition-colors">{movie.title}</h4>
                        </div>

                        {/* Hover Overlay */}
                        {!winner && (
                            <div className="absolute inset-0 bg-wicked-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-wicked-green/50"></div>
                        )}
                     </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Feature B: The Riddle */}
          <div className="lg:col-span-1 flex flex-col justify-center">
            <h3 className="font-serif text-2xl text-slate-300 mb-8 flex items-center gap-3 border-b border-slate-800 pb-4">
               <Eye className="text-wicked-green w-6 h-6" />
               The Riddle
            </h3>
            
            <div 
              className="perspective-2000 w-full aspect-[3/4] cursor-pointer group"
              onClick={() => setIsTriviaFlipped(!isTriviaFlipped)}
            >
              <motion.div
                className="w-full h-full relative preserve-3d transition-transform duration-1000"
                animate={{ rotateY: isTriviaFlipped ? 180 : 0 }}
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-dark-surface border border-slate-700 p-8 flex flex-col items-center justify-center shadow-2xl">
                    <div className="absolute inset-0 border-2 border-slate-800 m-2"></div>
                    <Scroll className="w-16 h-16 text-slate-600 mb-6 group-hover:text-wicked-green transition-colors" />
                    <p className="font-serif text-xl text-center text-slate-300 mb-4">
                        "Reveal Your Wisdom"
                    </p>
                    <p className="text-center font-body text-slate-500 italic">
                        {triviaData.question}
                    </p>
                    <p className="mt-8 text-xs font-serif text-wicked-green tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                        Tap to Reveal
                    </p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-wicked-purple/10 border border-wicked-purple p-8 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.2)]">
                  <div className="absolute inset-0 border-2 border-wicked-purple/30 m-2"></div>
                  <Star className="w-12 h-12 text-wicked-gold mb-6 animate-pulse" />
                  <p className="font-serif text-sm text-wicked-purple uppercase tracking-widest mb-2">
                    The Answer
                  </p>
                  <p className="text-center font-serif text-3xl font-bold text-slate-100">
                    {triviaData.answer}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pensieve;