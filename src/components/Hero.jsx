import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Compass, 
  Calculator, 
  Play, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  GraduationCap,
  Cpu
} from 'lucide-react';
import { SAC_INFO } from '../data/sacData';

export default function Hero({ onOpenApply, onOpenTour, onOpenVideoModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const headlines = [
    "Excellence in IIT-JEE, NEET & Global Education.",
    "Nurturing Future Leaders of Andhra Pradesh.",
    "Top Rankers in CBSE & AP State Boards.",
    "Where Knowledge Meets Values & Innovation."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [headlines.length]);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-6 pb-16 bg-gradient-to-b from-indigo-50/60 via-slate-50 to-white">
      {/* Background Decorative Soft Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-indigo-200/40 via-purple-200/30 to-amber-200/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-sky-200/30 rounded-full blur-[90px] pointer-events-none"></div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e125_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e125_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Hero Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill Badges */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-ping"></span>
              <Award className="w-4 h-4 text-amber-500" />
              <span>Ranked #1 English Medium School in Andhra Pradesh</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] font-['Cinzel']">
                SAC <span className="gradient-text-blue">ENGLISH MEDIUM SCHOOL</span>
              </h1>
              
              <div className="min-h-[60px] sm:min-h-[80px] flex items-center justify-center lg:justify-start">
                <p className="text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-amber-600 font-sans transition-all duration-700">
                  {headlines[currentSlide]}
                </p>
              </div>

              <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                SAC English Medium School (Vijayawada, AP) empowers students from Class 1 to 12 with CBSE/AP Board excellence, integrated IIT-JEE & NEET entrance coaching, robotics labs, and Indian cultural values.
              </p>
            </div>

            {/* Quick Feature Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs sm:text-sm font-semibold text-slate-700 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>CBSE & AP Board Recognized</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>IIT-JEE & NEET Coaching</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>142+ National Top Ranks</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenApply}
                className="w-full sm:w-auto px-8 py-4 text-sm font-extrabold text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-xl shadow-indigo-600/20 transition-all duration-300 hover:scale-[1.03] flex items-center justify-center space-x-3"
              >
                <span>Apply for 2026-27</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#programs"
                className="w-full sm:w-auto px-7 py-4 text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 shadow-sm transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Compass className="w-4 h-4 text-indigo-600" />
                <span>Explore Courses</span>
              </a>

              <a
                href="#calculator"
                className="w-full sm:w-auto px-6 py-4 text-sm font-bold text-indigo-700 hover:text-indigo-900 bg-indigo-50/80 hover:bg-indigo-100 rounded-xl border border-indigo-200 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Calculator className="w-4 h-4 text-amber-600" />
                <span>Fee Calculator</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-center lg:justify-start space-x-6 text-xs text-slate-500">
              <span className="font-bold text-slate-400 uppercase tracking-wider text-[11px]">Recognitions:</span>
              {SAC_INFO.accreditation.slice(0, 3).map((item, idx) => (
                <span key={idx} className="flex items-center space-x-1.5 text-slate-700 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                  <span>{item}</span>
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-400 via-purple-300 to-amber-300 opacity-40 blur-lg animate-pulse-slow"></div>
              
              <div className="relative rounded-2xl bg-white border border-slate-200/90 p-3 shadow-2xl overflow-hidden">
                
                {/* Hero Image Container */}
                <div className="relative h-96 sm:h-[420px] rounded-xl overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80" 
                    alt="SAC English Medium School Campus" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-black/20"></div>

                  {/* Play Video Trigger Button Overlay */}
                  <button 
                    onClick={onOpenVideoModal}
                    className="absolute inset-0 flex items-center justify-center group/btn"
                    aria-label="Play SAC Campus Film"
                  >
                    <div className="w-16 h-16 rounded-full bg-indigo-600/90 hover:bg-indigo-500 text-white flex items-center justify-center shadow-2xl backdrop-blur-md group-hover/btn:scale-110 transition-transform duration-300 border-2 border-white">
                      <Play className="w-7 h-7 fill-white translate-x-0.5" />
                    </div>
                  </button>

                  {/* Top Badge Overlay */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-lg px-3 py-1.5 flex items-center space-x-2 shadow-md">
                    <Cpu className="w-4 h-4 text-indigo-600" />
                    <span className="text-xs font-bold text-slate-800">Vijayawada Main Campus</span>
                  </div>

                  {/* Floating Live Stat Card 1 */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-4 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center border border-indigo-200">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 font-medium">IIT-JEE & NEET Selections</div>
                          <div className="text-lg font-extrabold text-slate-900">142+ Ranks (2025-26)</div>
                        </div>
                      </div>
                      <a 
                        href="#tour"
                        onClick={onOpenTour}
                        className="px-3 py-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200 transition-colors"
                      >
                        Campus Tour
                      </a>
                    </div>
                  </div>
                </div>

                {/* Sub Features Grid below image */}
                <div className="grid grid-cols-2 gap-3 mt-3 pt-1">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left">
                    <div className="text-xs text-slate-500 font-medium">Board Exam Results</div>
                    <div className="text-base font-extrabold text-amber-600">99.8% Pass Rate</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left">
                    <div className="text-xs text-slate-500 font-medium">Mentorship Ratio</div>
                    <div className="text-base font-extrabold text-indigo-700">15:1 Student Ratio</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Global Key Stats Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SAC_INFO.stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl text-center lg:text-left relative overflow-hidden group">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Cinzel']">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-indigo-600 mt-1">{stat.label}</div>
              <div className="text-xs text-slate-500 mt-0.5 font-medium">{stat.description}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
