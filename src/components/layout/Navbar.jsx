import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `/#${targetId}`);
        }
      }, 100); // give router time to mount home page
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${targetId}`);
      }
    }
  };

  return (
    <nav className={`fixed top-0 z-[100] w-full transition-all duration-300 ${scrolled ? 'bg-[rgba(0,0,0,0.95)] border-b border-border backdrop-blur-[24px]' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[80px] flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link to="/" onClick={(e) => {
          e.preventDefault();
          if (location.pathname !== '/') {
            navigate('/');
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          window.history.pushState(null, '', '/');
        }} className="flex items-center gap-1 group cursor-pointer">
          <div className="w-8 h-8 rounded bg-purple flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(76,40,220,0.6)]">
            L
          </div>
          <span className="text-white font-bold text-[18px]">LeadQ</span>
          <span className="shimmer font-bold text-[18px]">.AI</span>
        </Link>

        {/* Right Container: Links + CTA */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Links */}
          <div className="flex gap-6 items-center">
            {['About', 'Features', 'Agents', 'Pricing'].map(link => (
              <a href={`/#${link.toLowerCase()}`} key={link} onClick={(e) => handleNavClick(e, link.toLowerCase())} className="text-[#A1A1AA] text-[13px] hover:text-white transition-colors cursor-pointer">
                {link}
              </a>
            ))}
          </div>

          {/* CTA Group */}
          <div className="flex items-center gap-6">
            <a href="/#signin" onClick={(e) => handleNavClick(e, 'signin')} className="text-[#A1A1AA] text-[13px] hover:text-white transition-colors cursor-pointer">
              Sign In
            </a>
            <Link to="/contact" className="flex items-center justify-center bg-[#4C28DC] hover:bg-[#5B4FBE] text-white rounded-lg px-4 h-[34px] text-[13px] font-medium transition-colors shadow-[0_0_15px_rgba(76,40,220,0.4)]">
              Book Your Demo
            </Link>
          </div>
        </div>

        <button className="lg:hidden text-steel hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className="lg:hidden bg-[rgba(0,0,0,0.98)] backdrop-blur-2xl w-full py-6 px-6 absolute top-full left-0 border-b border-border shadow-2xl"
          >
            <div className="flex flex-col gap-5 text-[16px]">
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-steel hover:text-white">About</a>
              <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="text-steel hover:text-white">Features</a>
              <a href="#agents" onClick={(e) => handleNavClick(e, 'agents')} className="text-steel hover:text-white">Agents</a>
              <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="text-steel hover:text-white">Pricing</a>
              <a href="#changelog" className="text-steel hover:text-white flex items-center" onClick={() => setMobileMenuOpen(false)}>
                Changelog <span className="ml-[6px] bg-[rgba(34,197,94,0.15)] text-[#22C55E] border border-[rgba(34,197,94,0.3)] rounded-full px-1.5 py-0.5 text-[10px] font-semibold">New</span>
              </a>
              <hr className="border-border my-2" />
              <a href="#signin" onClick={(e) => handleNavClick(e, 'signin')} className="text-steel hover:text-white">Sign In</a>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full flex justify-center items-center h-[44px] px-5 bg-purple hover:bg-purple-light text-white rounded-full text-[16px] font-semibold transition-all">
                Book Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
