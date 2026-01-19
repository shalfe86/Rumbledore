import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Play, Twitch, Flame } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      id="stream" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 perspective-2000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {/* Background Ambience */}
      <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[500px] h-[500px] bg-wicked-green/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-wicked-purple/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left relative">
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
                <div className="h-[1px] w-12 bg-wicked-gold"></div>
                <h2 className="text-wicked-gold font-serif font-semibold tracking-[0.2em] text-sm uppercase">
                  Established 2024
                </h2>
            </div>

            {/* Main Logo Image with Pulsing Glow */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mb-10 inline-block"
            >
              {/* Note: Ensure 'logo.png' is in your public folder */}
              <motion.img 
                src="/logo.png" 
                alt="Rumbledore" 
                className="w-full max-w-[500px] h-auto mx-auto lg:mx-0 drop-shadow-2xl"
                animate={{ 
                  filter: [
                    "drop-shadow(0 0 10px rgba(16, 185, 129, 0.2))", 
                    "drop-shadow(0 0 30px rgba(16, 185, 129, 0.6))", 
                    "drop-shadow(0 0 10px rgba(16, 185, 129, 0.2))"
                  ] 
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Optional sparkle effects around logo */}
              <div className="absolute -top-4 -right-4 w-4 h-4 bg-wicked-gold rounded-full blur-sm animate-pulse"></div>
              <div className="absolute bottom-10 -left-4 w-2 h-2 bg-wicked-purple rounded-full blur-sm animate-pulse delay-75"></div>
            </motion.div>
            
            <p className="font-body text-slate-400 text-xl md:text-2xl mb-12 max-w-lg mx-auto lg:mx-0 italic border-l-2 border-wicked-green/30 pl-6">
              "We do not merely play the game. We bind it to our will."
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-12 py-4 bg-transparent border border-wicked-green text-wicked-green font-serif font-bold uppercase tracking-widest overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-300">
                  <Play className="fill-current w-4 h-4" />
                  Enter The Void
                </span>
                <div className="absolute inset-0 bg-wicked-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.button>
              
              <a href="#" className="flex items-center gap-3 text-slate-500 hover:text-wicked-purple transition-colors font-serif uppercase text-sm tracking-widest group">
                <Twitch className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.8)]" />
                <span>Join the Coven</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* 3D Visual Element */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="lg:w-1/2 w-full max-w-xl relative"
        >
          {/* Floating 'Mirror' Frame */}
          <div className="relative aspect-video bg-dark-surface border border-slate-700 shadow-2xl transform-gpu overflow-hidden">
             
             {/* Magical Glow */}
             <div className="absolute inset-0 bg-gradient-to-tr from-wicked-green/20 via-transparent to-wicked-purple/20 opacity-50"></div>

             {/* Corner Ornaments */}
             <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-wicked-gold"></div>
             <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-wicked-gold"></div>
             <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-wicked-gold"></div>
             <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-wicked-gold"></div>

             <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center group cursor-pointer">
                   <div className="relative inline-block mb-6">
                     <div className="absolute inset-0 bg-wicked-green blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-1000"></div>
                     <Flame className="relative w-16 h-16 text-slate-600 group-hover:text-wicked-green transition-colors duration-500 animate-pulse-slow" />
                   </div>
                   <p className="font-serif text-3xl text-slate-400 group-hover:text-slate-200 transition-colors">Offline</p>
                   <p className="font-body italic text-slate-500 mt-2">The scrying glass is dark.</p>
                </div>
             </div>
          </div>
          
          {/* Floating Runes behind */}
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -z-10 -top-8 -right-8 w-32 h-32 border border-slate-800 rounded-full flex items-center justify-center opacity-40"
          >
             <div className="w-24 h-24 border border-slate-700 rounded-full"></div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;