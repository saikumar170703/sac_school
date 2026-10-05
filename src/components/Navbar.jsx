import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  UserCheck, 
  Menu, 
  X, 
  ChevronRight,
  MapPin
} from 'lucide-react';

export default function Navbar({ onOpenApply, onOpenPortal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeBanner, setActiveBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-purple-900 text-white text-xs sm:text-sm py-2 px-4 shadow-sm border-b border-indigo-600/30">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center space-x-2 truncate">
              <span className="bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full font-extrabold text-[10px] tracking-wider uppercase shadow-sm shrink-0 animate-pulse">
                Admissions 2026-27
              </span>
              <span className="truncate font-medium text-slate-100">
                🚀 Priority Admissions Open for Classes 1 to 12 | Open House & Pratibha Test: <strong className="text-amber-300">Oct 24, 2026</strong>
              </span>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <button 
                onClick={onOpenApply} 
                className="hidden md:inline-flex items-center space-x-1 font-bold text-amber-300 hover:text-white transition-colors underline decoration-amber-300 underline-offset-4 text-xs"
              >
                <span>Register Online</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => setActiveBanner(false)}
                className="text-indigo-200 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors focus:outline-none"
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
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90 py-2.5' 
          : 'bg-white/85 backdrop-blur-sm border-b border-slate-200/70 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Name */}
            <a href="#" className="flex items-center space-x-3 group shrink-0">
              <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-transform duration-300 border border-white/20">
                <GraduationCap className="w-6 h-6 text-white" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="font-extrabold text-2xl tracking-tight text-indigo-700 font-['Cinzel'] leading-none">
                    SAC
                  </span>
                  <span className="font-extrabold text-xs sm:text-sm tracking-wider text-slate-900 uppercase font-sans">
                    ENGLISH MEDIUM SCHOOL
                  </span>
                  <span className="hidden xl:inline-block px-2 py-0.5 text-[9px] font-extrabold tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200/80 rounded-md uppercase">
                    CBSE & AP BOARD
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 text-[10px] text-slate-500 font-semibold mt-0.5">
                  <MapPin className="w-3 h-3 text-indigo-600 shrink-0" />
                  <span>Vijayawada, Andhra Pradesh • Est. 1984</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 text-xs sm:text-sm font-bold text-slate-700">
              <a 
                href="#programs" 
                className="px-3 py-2 rounded-xl hover:text-indigo-600 hover:bg-indigo-50/80 transition-all"
              >
                Courses & IIT/NEET
              </a>
              <a 
                href="#tour" 
                className="px-3 py-2 rounded-xl hover:text-indigo-600 hover:bg-indigo-50/80 transition-all flex items-center space-x-1"
              >
                <span>Campus & Labs</span>
                <span className="bg-purple-100 text-purple-700 text-[9px] px-1.5 py-0.2 rounded-md font-extrabold border border-purple-200">VR</span>
              </a>
              <a 
                href="#calculator" 
                className="px-3 py-2 rounded-xl hover:text-indigo-600 hover:bg-indigo-50/80 transition-all"
              >
                Fee & Scholarship
              </a>
              <a 
                href="#events" 
                className="px-3 py-2 rounded-xl hover:text-indigo-600 hover:bg-indigo-50/80 transition-all"
              >
                Events
              </a>
              <a 
                href="#alumni" 
                className="px-3 py-2 rounded-xl hover:text-indigo-600 hover:bg-indigo-50/80 transition-all"
              >
                Toppers & Ranks
              </a>
              <a 
                href="#news" 
                className="px-3 py-2 rounded-xl hover:text-indigo-600 hover:bg-indigo-50/80 transition-all"
              >
                News
              </a>
            </div>

            {/* Action Controls & Modal Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={onOpenPortal}
                className="flex items-center space-x-1.5 px-3.5 py-2 text-xs font-bold text-slate-800 bg-slate-100/90 hover:bg-slate-200/80 rounded-xl border border-slate-200 transition-all duration-200 shadow-xs active:scale-95"
              >
                <UserCheck className="w-4 h-4 text-indigo-600" />
                <span>Student Portal</span>
              </button>

              <button
                onClick={onOpenApply}
                className="relative group overflow-hidden px-4 py-2.5 text-xs font-extrabold text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-600/35 hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
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
                className="sm:hidden px-3 py-1.5 text-xs font-extrabold text-white bg-indigo-600 rounded-lg shadow-sm active:scale-95"
              >
                Apply
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-2xl">
            <a 
              href="#programs" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              Academic Courses (MPC, BiPC, MEC)
            </a>
            <a 
              href="#tour" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              360° Virtual Campus & Science Labs
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              Fee Structure & Scholarship Calculator
            </a>
            <a 
              href="#events" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              Science Expos & Cultural Events
            </a>
            <a 
              href="#alumni" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              IIT-JEE & NEET Rankers Hall of Fame
            </a>
            <a 
              href="#news" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              School News & Announcements
            </a>

            <div className="pt-4 border-t border-slate-200 flex flex-col space-y-2.5">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenPortal(); }}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-slate-100 text-slate-900 font-bold text-sm border border-slate-200"
              >
                <UserCheck className="w-4 h-4 text-indigo-600" />
                <span>Student & Parent Portal</span>
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenApply(); }}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-extrabold text-sm shadow-md"
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
