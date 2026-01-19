import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 20, stiffness: 400 }; // Softer, ghostlier spring
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    
    const mouseDown = () => setIsClicking(true);
    const mouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden mix-blend-screen">
      {/* Wand Tip - Glowing Green */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-wicked-green shadow-[0_0_15px_#10b981]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isClicking ? 1.5 : 1,
          opacity: isClicking ? 1 : 0.8,
        }}
      />

      {/* Trailing Magic Dust */}
      <motion.div
        className="absolute w-8 h-8 rounded-full border border-wicked-green opacity-40 blur-[1px]"
        style={{ x: cursorX, y: cursorY }}
        transition={{ duration: 0.1 }}
      />
      
      {/* Secondary Trail */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-wicked-purple opacity-60 blur-[2px]"
        style={{ x: cursorX, y: cursorY }}
        animate={{ 
            x: mousePosition.x - 20, 
            y: mousePosition.y - 20,
            transition: { type: "tween", ease: "backOut", duration: 0.3 }
        }}
      />
      
      {/* Cast Spell Shockwave */}
      {isClicking && (
         <motion.div 
            initial={{ scale: 0, opacity: 0.8, borderColor: '#10b981' }}
            animate={{ scale: 4, opacity: 0, borderColor: '#7c3aed' }}
            transition={{ duration: 0.6 }}
            className="absolute w-8 h-8 border-2 rounded-full"
            style={{
                left: mousePosition.x - 16,
                top: mousePosition.y - 16,
            }}
         />
      )}
    </div>
  );
};

export default Cursor;