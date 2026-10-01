import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  UserCheck, 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';
import { SAC_INFO } from '../data/sacData';

export default function Navbar({ onOpenApply, onOpenPortal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeBanner, setActiveBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Urgent Announcement Bar */}
      {activeBanner && (
        <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-700 text-white text-xs sm:text-sm py-2 px-4 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2 truncate">
              <span className="bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full font-extrabold text-[10px] tracking-wide uppercase shadow-sm">
                Admissions 2026-2027
              </span>
              <span className="truncate font-medium">
                🚀 Priority Admissions Open for Classes 1 to 12 | Open House & Pratibha Test: <strong>Oct 24, 2026</strong>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={onOpenApply} 
                className="hidden md:inline-flex items-center space-x-1 font-bold text-amber-300 hover:text-white transition-colors underline decoration-amber-300 underline-offset-4 text-xs"
              >
                <span>Register Online</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => setActiveBanner(false)}
                className="text-indigo-100 hover:text-white p-0.5 rounded focus:outline-none"
                aria-label="Close Announcement"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation Header */}
      <nav className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3' 
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/60 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Name */}
            <a href="#" className="flex items-center space-x-3 group">
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 text-white" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 font-['Cinzel']">
                    SAC <span className="text-indigo-600">ENGLISH MEDIUM SCHOOL</span>
                  </span>
                  <span className="hidden xl:inline-block px-1.5 py-0.5 text-[9px] font-extrabold tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200 rounded">
                    CBSE & AP BOARD
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 font-semibold tracking-wide">
                  Vijayawada, Andhra Pradesh • Est. 1984
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7 text-sm font-semibold">
              <a href="#programs" className="text-slate-700 hover:text-indigo-600 transition-colors py-1">
                Courses & IIT/NEET
              </a>
              <a href="#tour" className="text-slate-700 hover:text-indigo-600 transition-colors py-1 flex items-center space-x-1">
                <span>Campus & Labs</span>
                <span className="bg-purple-100 text-purple-700 text-[10px] px-1.5 py-0.2 rounded font-bold border border-purple-200">VR</span>
              </a>
              <a href="#calculator" className="text-slate-700 hover:text-indigo-600 transition-colors py-1">
                Fee & Scholarship
              </a>
              <a href="#events" className="text-slate-700 hover:text-indigo-600 transition-colors py-1">
                Events
              </a>
              <a href="#alumni" className="text-slate-700 hover:text-indigo-600 transition-colors py-1">
                Toppers & Ranks
              </a>
              <a href="#news" className="text-slate-700 hover:text-indigo-600 transition-colors py-1">
                News
              </a>
            </div>

            {/* Action Controls & Modal Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={onOpenPortal}
                className="flex items-center space-x-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200 transition-all duration-200"
              >
                <UserCheck className="w-3.5 h-3.5 text-indigo-600" />
                <span>Student Portal</span>
              </button>

              <button
                onClick={onOpenApply}
                className="relative group overflow-hidden px-4 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-md shadow-indigo-600/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Apply 2026-27</span>
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={onOpenApply}
                className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-indigo-600 rounded-lg shadow-sm"
              >
                Apply
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-xl">
            <a 
              href="#programs" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-indigo-50 hover:text-indigo-600"
            >
              Academic Courses (MPC, BiPC, MEC)
            </a>
            <a 
              href="#tour" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-indigo-50 hover:text-indigo-600"
            >
              360° Virtual Campus & Science Labs
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-indigo-50 hover:text-indigo-600"
            >
              Fee Structure & Scholarship Calculator
            </a>
            <a 
              href="#events" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-indigo-50 hover:text-indigo-600"
            >
              Science Expos & Cultural Events
            </a>
            <a 
              href="#alumni" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-indigo-50 hover:text-indigo-600"
            >
              IIT-JEE & NEET Rankers Hall of Fame
            </a>
            <a 
              href="#news" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-indigo-50 hover:text-indigo-600"
            >
              School News & Announcements
            </a>

            <div className="pt-4 border-t border-slate-200 flex flex-col space-y-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenPortal(); }}
                className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-slate-100 text-slate-800 font-bold text-sm"
              >
                <UserCheck className="w-4 h-4 text-indigo-600" />
                <span>Student & Parent Portal</span>
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenApply(); }}
                className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm shadow-md"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Start Admission Application</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
