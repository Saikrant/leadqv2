import React from 'react';
import Navbar from '../components/layout/Navbar';
import AuroraBackground from '../components/ui/AuroraBackground';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary selection-bg selection-text font-sans scroll-smooth overflow-x-hidden relative flex flex-col">
      <Navbar />

      <main className="flex-1 relative pt-32 pb-24 flex items-center justify-center">
        <AuroraBackground style={{ opacity: 0.6 }} />

        <div className="relative z-10 w-full max-w-[640px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-white text-[clamp(2.5rem,6vw,4.2rem)] font-[800] leading-[1.1] tracking-tight">
              Book your demo{' '}
              <span className="font-serif italic text-white/90">today.</span>
            </h1>
            <p className="mt-4 text-[#A1A1AA] text-[15px] leading-[1.6]">
              See how LeadQ can streamline your operations and help you grow. Schedule a personalized demo to discover how we can support your business goals.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex flex-col gap-5 text-left border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] p-6 sm:p-10 rounded-[24px] shadow-2xl backdrop-blur-md"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[12px] font-medium text-[#FAFAFA]">First Name</label>
                <input type="text" placeholder="Peter" className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[12px] px-4 py-3.5 text-[14px] text-white placeholder:text-[#52525B] focus:outline-none focus:border-[rgba(255,255,255,0.2)] transition-colors" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[12px] font-medium text-[#FAFAFA]">Last Name</label>
                <input type="text" placeholder="Parker" className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[12px] px-4 py-3.5 text-[14px] text-white placeholder:text-[#52525B] focus:outline-none focus:border-[rgba(255,255,255,0.2)] transition-colors" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2 relative">
              <label className="text-[12px] font-medium text-[#FAFAFA]">Email</label>
              <input type="email" placeholder="peter@parker.com" className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[12px] px-4 py-3.5 text-[14px] text-white placeholder:text-[#52525B] focus:outline-none focus:border-[rgba(255,255,255,0.2)] transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-medium text-[#FAFAFA]">Website</label>
              <input type="url" placeholder="www.parker.com" className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[12px] px-4 py-3.5 text-[14px] text-white placeholder:text-[#52525B] focus:outline-none focus:border-[rgba(255,255,255,0.2)] transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-medium text-[#FAFAFA]">Tell us about your business?</label>
              <textarea placeholder="What does your business sell or offer?" rows={4} className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[12px] px-4 py-3.5 text-[14px] text-white placeholder:text-[#52525B] focus:outline-none focus:border-[rgba(255,255,255,0.2)] transition-colors resize-none"></textarea>
            </div>
            
            <button type="button" className="mt-4 h-[44px] w-full bg-[#4C28DC] hover:bg-[#5B4FBE] text-white rounded-[10px] text-[15px] font-medium transition-colors shadow-[0_0_20px_rgba(76,40,220,0.5)]">
              Book Demo
            </button>
          </motion.form>
        </div>
      </main>

      <footer className="border-t border-[rgba(255,255,255,0.05)] py-6 text-center text-[#A1A1AA] text-[13px] relative z-10 w-full">
        © {new Date().getFullYear()} LeadQ.AI — All rights reserved.
      </footer>
    </div>
  );
}
