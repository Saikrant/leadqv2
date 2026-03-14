import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/01_HeroSection';
import LogoBar from '../components/sections/02_LogoBar';
import StickyScrollFeatures from '../components/sections/03_StickyScrollFeatures';
import TestimonialsScroll from '../components/sections/04_TestimonialsScroll';
import Integrations from '../components/sections/05_Integrations';
import AgentFleet from '../components/sections/06_AgentFleet';
import Pricing from '../components/sections/07_Pricing';
import FAQ from '../components/sections/08_FAQ';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main style={{ position: 'relative', zIndex: 2 }}>
        <HeroSection />

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }}>
          <LogoBar />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.9 }}>
          <StickyScrollFeatures />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }}>
          <TestimonialsScroll />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }}>
          <Integrations />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.9 }}>
          <AgentFleet />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }}>
          <Pricing />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }}>
          <FAQ />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
