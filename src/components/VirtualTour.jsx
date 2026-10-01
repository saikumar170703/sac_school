import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Eye, 
  CheckCircle2, 
  ArrowRight,
  Building
} from 'lucide-react';
import { CAMPUS_HOTSPOTS } from '../data/sacData';

export default function VirtualTour({ onOpenApply }) {
  const [activeSpot, setActiveSpot] = useState(CAMPUS_HOTSPOTS[0]);
  const [is360Mode, setIs360Mode] = useState(false);

  return (
    <section id="tour" className="py-24 relative bg-white border-t border-slate-200 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-xs font-bold">
            <Compass className="w-3.5 h-3.5 text-purple-600" />
            <span>Interactive 360° Campus Experience</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-['Cinzel']">
            Explore <span className="gradient-text-blue">SAC Campus Grounds</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Navigate our 120-acre sustainable campus, cutting-edge quantum laboratories, and state-of-the-art arts & sports complexes.
          </p>
        </div>

        {/* Hotspot Selection Bar */}
        <div className="mt-10 flex items-center justify-center space-x-2 overflow-x-auto pb-2 no-scrollbar">
          {CAMPUS_HOTSPOTS.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setActiveSpot(spot)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 whitespace-nowrap transition-all duration-300 ${
                activeSpot.id === spot.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <MapPin className={`w-3.5 h-3.5 ${activeSpot.id === spot.id ? 'text-amber-300' : 'text-indigo-600'}`} />
              <span>{spot.name}</span>
            </button>
          ))}
        </div>

        {/* Interactive Tour Display Card */}
        <div className="mt-8 glass-card rounded-3xl overflow-hidden border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Main Visual Display (Left 7 Cols) */}
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[480px] bg-slate-900 group">
            <img 
              src={activeSpot.image} 
              alt={activeSpot.name}
              className={`w-full h-full object-cover transition-transform duration-700 ${is360Mode ? 'scale-110 blur-[1px]' : 'group-hover:scale-105'}`}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/20"></div>

            {/* Mode Switch Controls */}
            <div className="absolute top-4 left-4 flex items-center space-x-2">
              <button
                onClick={() => setIs360Mode(!is360Mode)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold backdrop-blur-md transition-all flex items-center space-x-1.5 border shadow-md ${
                  is360Mode 
                    ? 'bg-amber-400 text-slate-950 border-amber-300' 
                    : 'bg-white/90 text-slate-900 border-white hover:bg-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{is360Mode ? '360° Panorama Active' : 'Switch to 360° View'}</span>
              </button>
            </div>

            {/* Interactive Hotspot Map Pins overlay on image */}
            <div className="absolute inset-0 pointer-events-none">
              {CAMPUS_HOTSPOTS.map((pin) => (
                <div 
                  key={pin.id} 
                  style={{ top: pin.y, left: pin.x }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                >
                  <button
                    onClick={() => setActiveSpot(pin)}
                    className={`relative group/pin flex items-center justify-center p-2 rounded-full transition-transform duration-300 hover:scale-125 ${
                      activeSpot.id === pin.id ? 'bg-amber-400 text-slate-950 shadow-xl ring-4 ring-amber-300/60' : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-md'
                    }`}
                    title={pin.name}
                  >
                    <MapPin className="w-4 h-4" />
                    
                    {/* Tooltip on hover */}
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover/pin:block px-2.5 py-1 bg-slate-900 text-white text-[10px] font-bold rounded whitespace-nowrap border border-slate-700 shadow-xl">
                      {pin.name}
                    </span>
                  </button>
                </div>
              ))}
            </div>

            {/* Bottom Overlay Title on Image */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-1">
                Facility Spotlight
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Cinzel']">
                {activeSpot.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-medium">
                {activeSpot.tagline}
              </p>
            </div>

          </div>

          {/* Detailed Info Sidebar (Right 5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-indigo-700 font-bold text-xs uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>Campus Infrastructure Specs</span>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                {activeSpot.description}
              </p>

              {/* Specs & Highlights */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Key Facilities & Equipment:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeSpot.specs.map((spec, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-xs text-slate-800 font-semibold">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-200 space-y-3">
              <button
                onClick={onOpenApply}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl text-xs font-bold shadow-md flex items-center justify-center space-x-2 transition-transform hover:scale-[1.02]"
              >
                <span>Book In-Person Campus Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-slate-500 font-medium">
                Next Public Campus Tour: <strong className="text-indigo-700">Oct 24, 2026 @ 10:00 AM EST</strong>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
