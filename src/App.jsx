import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProgramExplorer from './components/ProgramExplorer';
import VirtualTour from './components/VirtualTour';
import AdmissionsCalculator from './components/AdmissionsCalculator';
import EventsSection from './components/EventsSection';
import AlumniShowcase from './components/AlumniShowcase';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import SacAiBot from './components/SacAiBot';
import PortalModal from './components/PortalModal';
import ApplicationModal from './components/ApplicationModal';
import VideoModal from './components/VideoModal';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Primary Navigation Bar */}
      <Navbar 
        onOpenApply={() => setIsApplyModalOpen(true)}
        onOpenPortal={() => setIsPortalModalOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero 
          onOpenApply={() => setIsApplyModalOpen(true)}
          onOpenTour={() => {
            document.getElementById('tour')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenVideoModal={() => setIsVideoModalOpen(true)}
        />

        {/* Academic Program Catalog Explorer */}
        <ProgramExplorer 
          onOpenApply={() => setIsApplyModalOpen(true)}
        />

        {/* 360° Virtual Campus Tour & Hotspot Map */}
        <VirtualTour 
          onOpenApply={() => setIsApplyModalOpen(true)}
        />

        {/* Interactive Admissions & Financial Aid Calculator */}
        <AdmissionsCalculator 
          onOpenApply={() => setIsApplyModalOpen(true)}
        />

        {/* Campus Life & Events Calendar */}
        <EventsSection 
          onOpenApply={() => setIsApplyModalOpen(true)}
        />

        {/* Alumni Hall of Fame & University Destinations */}
        <AlumniShowcase />

        {/* Campus News & Research Press Releases */}
        <NewsSection />

      </main>

      {/* Comprehensive Footer */}
      <Footer 
        onOpenApply={() => setIsApplyModalOpen(true)}
        onOpenPortal={() => setIsPortalModalOpen(true)}
      />

      {/* Floating SAC AI Admissions Advisor Assistant Widget */}
      <SacAiBot 
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* Interactive Portal Preview Modal */}
      <PortalModal 
        isOpen={isPortalModalOpen}
        onClose={() => setIsPortalModalOpen(false)}
      />

      {/* Multi-Step Admissions Application Modal */}
      <ApplicationModal 
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />

      {/* Video Preview Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

    </div>
  );
}
