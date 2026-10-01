import React, { useState } from 'react';
import { 
  Quote, 
  GraduationCap, 
  ChevronRight,
  X
} from 'lucide-react';
import { ALUMNI_SPOTLIGHT } from '../data/sacData';

export default function AlumniShowcase() {
  const [activeAlum, setActiveAlum] = useState(null);

  return (
    <section id="alumni" className="py-24 relative bg-slate-50 border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-800 text-xs font-bold">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
            <span>Alumni Hall of Fame & Placement</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-['Cinzel']">
            SAC <span className="gradient-text-blue">Pioneers & Global Leaders</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Our graduates lead breakthroughs in quantum computing, bioengineering, venture capital, and international diplomacy across the world's finest universities.
          </p>
        </div>

        {/* Alumni Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {ALUMNI_SPOTLIGHT.map((alum) => (
            <div
              key={alum.id}
              className="glass-card rounded-3xl p-6 border border-slate-200 hover:border-indigo-300 flex flex-col justify-between group transition-all"
            >
              <div className="space-y-4">
                
                {/* Header Profile Info */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={alum.avatar} 
                    alt={alum.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-indigo-200 shadow-md group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {alum.name}
                    </h3>
                    <div className="text-xs text-amber-700 font-bold mt-0.5">
                      {alum.university}
                    </div>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-indigo-50 text-indigo-800 text-[10px] font-extrabold rounded border border-indigo-200">
                      {alum.achievement}
                    </span>
                  </div>
                </div>

                {/* Quote Box */}
                <div className="relative p-4 rounded-2xl bg-slate-50 border border-slate-200 italic text-xs text-slate-700 leading-relaxed font-medium">
                  <Quote className="w-6 h-6 text-indigo-400/20 absolute -top-2 -left-1" />
                  <p className="relative z-10 pl-2">
                    "{alum.quote}"
                  </p>
                </div>

                <div className="text-xs text-slate-600 font-medium">
                  Current Role: <strong className="text-slate-900">{alum.currentRole}</strong>
                </div>

              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">SAC Alum</span>
                <button
                  onClick={() => setActiveAlum(alum)}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1"
                >
                  <span>Read Profile</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Profile Detail Modal */}
      {activeAlum && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setActiveAlum(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-4">
              <img src={activeAlum.avatar} alt={activeAlum.name} className="w-20 h-20 rounded-2xl object-cover border-2 border-indigo-500 shadow-md" />
              <div>
                <span className="text-xs font-bold text-amber-600">{activeAlum.achievement}</span>
                <h3 className="text-xl font-extrabold text-slate-900 font-['Cinzel']">{activeAlum.name}</h3>
                <div className="text-xs text-indigo-700 font-bold">{activeAlum.university}</div>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm text-slate-700 leading-relaxed font-medium">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 italic">
                "{activeAlum.quote}"
              </div>
              <p>
                <strong>Current Position:</strong> {activeAlum.currentRole}
              </p>
              <p className="text-xs text-slate-500">
                During their tenure at SAC Academy, {activeAlum.name} participated in Advanced STEM Research & Model United Nations, securing early admittance to top tier Ivy League institutions.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-right">
              <button
                onClick={() => setActiveAlum(null)}
                className="px-5 py-2 bg-indigo-600 text-white font-bold rounded-xl text-xs"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
