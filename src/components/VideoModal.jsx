import React from 'react';
import { X, Play, Sparkles, GraduationCap } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0f172a] border border-slate-700 rounded-3xl max-w-3xl w-full p-4 sm:p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-3 mb-4">
          <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>SAC Campus Documentary</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white font-['Cinzel']">
            SAC Academy: A Day in the Life of a Scholar
          </h3>
        </div>

        {/* Video Preview Container */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 shadow-inner group">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" 
            title="SAC Campus Tour Film"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
          <span>Duration: 2:45 • High Definition 4K</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl"
          >
            Close Video
          </button>
        </div>
      </div>
    </div>
  );
}
