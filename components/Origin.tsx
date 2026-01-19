import React from 'react';
import { motion } from 'framer-motion';
import { Feather, BookOpen } from 'lucide-react';

const Origin: React.FC = () => {
  return (
    <section id="origin" className="py-32 bg-dark relative flex items-center justify-center overflow-hidden">
      {/* Mystical Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.05),transparent_70%)]"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div 
          className="relative bg-dark-surface p-10 md:p-20 border border-slate-800 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
            {/* Elegant Border */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-wicked-green opacity-50"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-wicked-green opacity-50"></div>
            
            <div className="flex flex-col items-center text-center">
                <div className="mb-8">
                    <BookOpen className="w-10 h-10 text-wicked-purple" />
                </div>
                
                <motion.h2 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="font-serif text-4xl md:text-5xl font-bold text-slate-100 mb-10 tracking-wide"
                >
                    The Grimoire
                </motion.h2>

                <div className="prose prose-invert prose-lg max-w-2xl font-body text-slate-400 text-xl leading-relaxed">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="mb-8"
                    >
                        <span className="text-4xl float-left mr-2 font-serif text-wicked-gold">R</span>umbledore was forged in the void between worlds. Not a typical streamer, but a keeper of arcane secrets and high scores.
                    </motion.p>
                    <motion.p 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.6, duration: 1 }}
                    >
                        Here, we do not simply play. We cast spells on the algorithm. We brew chaos. Whether we are speedrunning through cursed dungeons or debating ancient lore, the magic is real.
                    </motion.p>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-12 flex items-center gap-3 text-wicked-gold font-serif italic"
                >
                    <Feather className="w-5 h-5" />
                    <span>Mischief Managed</span>
                </motion.div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Origin;