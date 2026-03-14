import React from 'react';
import { motion } from 'framer-motion';

export default function AuroraBackground({ style }) {
  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-transparent will-change-transform"
      style={{
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 20%, black 50%, black 100%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 20%, black 50%, black 100%)',
        ...style
      }}
    >
      {/* 
        Hardware-Accelerated CSS Aurora Streaks.
        Instead of SVG vector blurring (which destroys GPU performance on scroll),
        we use massive squashed border-radius Ovals with box-shadow glows.
        The browser natively accelerates transform/opacity on divs.
      */}
      
      {/* Container for Streaks */}
      <div className="absolute inset-0 w-full h-[150%] top-[-25%] left-0 opacity-80 blur-[8px]">
        {/* Streak 1 */}
        <motion.div
          animate={{
            transform: [
              "rotate(-12deg) translateY(0) scaleX(1)",
              "rotate(-5deg) translateY(-50px) scaleX(1.1)",
              "rotate(-12deg) translateY(0) scaleX(1)"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute border-[3px] border-white/60 rounded-[50%] will-change-transform"
          style={{
            width: '180vw',
            height: '400px',
            top: '20%',
            left: '-40vw',
            boxShadow: 'inset 0 20px 40px -20px rgba(168,85,247,0.6), 0 -20px 50px rgba(76,40,220,0.8)'
          }}
        />

        {/* Streak 2 */}
        <motion.div
          animate={{
            transform: [
              "rotate(15deg) translateY(0) scaleX(1)",
              "rotate(8deg) translateY(60px) scaleX(1.05)",
              "rotate(15deg) translateY(0) scaleX(1)"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute border-[2px] border-white/50 rounded-[50%] will-change-transform"
          style={{
            width: '200vw',
            height: '500px',
            top: '30%',
            left: '-50vw',
            boxShadow: 'inset 0 30px 60px -20px rgba(217,70,239,0.4), 0 -15px 40px rgba(139,92,246,0.6)'
          }}
        />

        {/* Streak 3 */}
        <motion.div
          animate={{
            transform: [
              "rotate(-5deg) translateY(0)",
              "rotate(-10deg) translateY(40px)",
              "rotate(-5deg) translateY(0)"
            ]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute border-[2px] border-white/40 rounded-[50%] will-change-transform"
          style={{
            width: '150vw',
            height: '300px',
            top: '45%',
            left: '-25vw',
            boxShadow: 'inset 0 10px 30px -10px rgba(76,40,220,0.5), 0 -10px 30px rgba(168,85,247,0.5)'
          }}
        />
      </div>

      {/* Volumetric Light Hotspots (Lens Flares) */}
      <motion.div 
        animate={{ y: [0, -40, 0], scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[25%] w-[400px] h-[400px] rounded-full mix-blend-screen bg-[radial-gradient(circle,rgba(168,85,247,0.6)_0%,transparent_70%)] will-change-transform" 
      />
      <motion.div 
        animate={{ y: [0, 50, 0], x: [0, -30, 0], scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full mix-blend-screen bg-[radial-gradient(circle,rgba(76,40,220,0.5)_0%,transparent_70%)] will-change-transform" 
      />
      
      {/* Intense White Core Flare */}
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.4, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[38%] left-[45%] w-[200px] h-[100px] rounded-full mix-blend-screen bg-[radial-gradient(ellipse,rgba(255,255,255,0.8)_0%,rgba(168,85,247,0.4)_40%,transparent_80%)] will-change-transform" 
      />
    </div>
  );
}
