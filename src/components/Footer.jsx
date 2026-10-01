import React, { useState } from 'react';
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Send, 
  CheckCircle2,
  ArrowUp
} from 'lucide-react';
import { SAC_INFO } from '../data/sacData';

export default function Footer({ onOpenApply, onOpenPortal }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 text-xs pt-16 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Newsletter & Banner Card */}
        <div className="p-8 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center lg:text-left">
            <h3 className="text-xl font-extrabold text-white font-['Cinzel']">
              Stay Connected with SAC English Medium School
            </h3>
            <p className="text-xs text-slate-300 font-medium">
              Receive monthly updates on CBSE board results, IIT-JEE/NEET ranks, and school events.
            </p>
          </div>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex items-center space-x-2 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-72">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  placeholder="Enter parent email ID..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 font-medium"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-md transition-transform hover:scale-105 flex items-center space-x-1.5 shrink-0"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <div className="flex items-center space-x-2 text-emerald-400 font-bold bg-emerald-950/80 border border-emerald-500/40 px-4 py-2.5 rounded-xl">
              <CheckCircle2 className="w-4 h-4" />
              <span>Subscribed! Check your inbox for school updates.</span>
            </div>
          )}
        </div>

        {/* Links & Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-4">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-base sm:text-lg text-white font-['Cinzel'] tracking-tight">
                  SAC <span className="text-indigo-400">ENGLISH MEDIUM SCHOOL</span>
                </span>
                <p className="text-[10px] text-slate-400">Recognized by Govt. of AP & CBSE Affiliated</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-4 font-medium">
              SAC English Medium School (Vijayawada, Andhra Pradesh) is a leading institution dedicated to academic distinction, IIT-JEE & NEET toppers prep, character values, and modern science education.
            </p>

            <div className="space-y-2 text-slate-300 text-xs font-semibold">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>SAC School Campus, MG Road, Vijayawada, Andhra Pradesh - 520010</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Admissions Helpline: +91 (866) 255-SAC1 / +91 94400 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>admissions@sacschool.edu.in</span>
              </div>
            </div>
          </div>

          {/* Col 2: Academics */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Courses</h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#programs" className="hover:text-indigo-300 transition-colors">Class 11-12 MPC (IIT-JEE)</a></li>
              <li><a href="#programs" className="hover:text-indigo-300 transition-colors">Class 11-12 BiPC (NEET)</a></li>
              <li><a href="#programs" className="hover:text-indigo-300 transition-colors">Class 11-12 MEC / CEC</a></li>
              <li><a href="#programs" className="hover:text-indigo-300 transition-colors">Class 6-10 CBSE Foundation</a></li>
              <li><a href="#programs" className="hover:text-indigo-300 transition-colors">Robotics & AI Academy</a></li>
            </ul>
          </div>

          {/* Col 3: Admissions */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Admissions</h4>
            <ul className="space-y-2 font-medium">
              <li><button onClick={onOpenApply} className="hover:text-indigo-300 transition-colors text-left">Apply Online 2026-27</button></li>
              <li><a href="#calculator" className="hover:text-indigo-300 transition-colors">Fee & Scholarship Calculator</a></li>
              <li><a href="#tour" className="hover:text-indigo-300 transition-colors">360° Science Labs Tour</a></li>
              <li><a href="#events" className="hover:text-indigo-300 transition-colors">Vijayawada Open House</a></li>
              <li><button onClick={onOpenPortal} className="hover:text-indigo-300 transition-colors text-left">Student & Parent Portal</button></li>
            </ul>
          </div>

          {/* Col 4: Accreditation */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Affiliations</h4>
            <div className="space-y-2 text-[11px] font-semibold">
              {SAC_INFO.accreditation.map((acc, idx) => (
                <div key={idx} className="flex items-center space-x-1.5 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>{acc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar & Scroll to Top */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4 font-medium">
          <div>
            © {new Date().getFullYear()} SAC English Medium School, Vijayawada, Andhra Pradesh. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-slate-300 hover:text-white bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
