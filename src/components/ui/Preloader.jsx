import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hold the preloader for 2.5 seconds to build anticipation and play the scan animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-bg overflow-hidden"
        >
          {/* Ambient background glow for the preloader */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple/10 rounded-full blur-[80px]" />

          {/* Business Card Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateX: 45 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[280px] h-[160px] sm:w-[320px] sm:h-[180px] bg-[#0A0A0E] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-between p-5 sm:p-6"
            style={{
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}
          >
            {/* Logo/Name */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded bg-purple flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(76,40,220,0.6)]">
                  L
                </div>
                <span className="text-white font-bold text-xl tracking-tight">LeadQ<span className="text-purple-light">.AI</span></span>
              </div>
              <div className="text-steel text-sm font-medium tracking-wide">AUTONOMOUS REVENUE OPERATIONS</div>
            </div>

            {/* Bottom Tech Details */}
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <div className="h-1.5 w-16 bg-white/10 rounded-full" />
                <div className="h-1.5 w-24 bg-white/10 rounded-full" />
                <div className="h-1.5 w-12 bg-white/10 rounded-full" />
              </div>
              
              {/* Fake QR/Chip */}
              <div className="w-10 h-10 border border-white/20 rounded grid grid-cols-2 gap-0.5 p-1">
                 <div className="bg-white/20 rounded-sm" />
                 <div className="bg-white/20 rounded-sm" />
                 <div className="bg-white/20 rounded-sm" />
                 <div className="bg-purple/50 rounded-sm" />
              </div>
            </div>

            {/* Scanning Laser Line */}
            <motion.div
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 2, ease: "linear", repeat: Infinity }}
              className="absolute left-0 w-full h-[2px] bg-[#2DD4BF] shadow-[0_0_15px_#2DD4BF,0_0_30px_#2DD4BF] z-10"
              style={{ top: 0 }}
            />
            
            {/* Scan Overlay Gradient */}
            <motion.div
              animate={{ top: ['-50%', '50%', '-50%'] }}
              transition={{ duration: 2, ease: "linear", repeat: Infinity }}
              className="absolute left-0 w-full h-[150px] bg-gradient-to-b from-transparent via-[#2DD4BF]/10 to-transparent pointer-events-none"
            />
          </motion.div>

          {/* Loading Text */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-12 flex flex-col items-center gap-3"
          >
             <div className="text-steel text-[13px] uppercase tracking-[0.2em] font-medium flex items-center gap-2">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-light"></span>
                </span>
               Deploying Agents
             </div>
             {/* Progress Bar */}
             <div className="w-[120px] h-[2px] bg-white/10 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: "0%" }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 2.2, ease: "easeInOut" }}
                 className="h-full bg-purple"
               />
             </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
