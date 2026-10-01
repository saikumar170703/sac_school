import React, { useState } from 'react';
import { 
  Newspaper, 
  Clock, 
  ArrowRight, 
  X
} from 'lucide-react';
import { SAC_NEWS } from '../data/sacData';

export default function NewsSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="news" className="py-24 relative bg-white border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-800 text-xs font-bold">
            <Newspaper className="w-3.5 h-3.5 text-indigo-600" />
            <span>SAC Research & Newsroom</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-['Cinzel']">
            Latest <span className="gradient-text-blue">Campus News & Discoveries</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Stay informed with student innovations, scientific achievements, and institutional announcements.
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SAC_NEWS.map((article) => (
            <div
              key={article.id}
              className="glass-card rounded-3xl overflow-hidden border border-slate-200 hover:border-indigo-300 flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-extrabold text-amber-700 border border-slate-200 shadow-sm">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-3 text-[11px] text-slate-500 font-semibold">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-indigo-600" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-medium">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="w-full py-2.5 px-4 bg-slate-100 hover:bg-indigo-600 hover:text-white text-slate-800 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>Read Full Press Release</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">{selectedArticle.category}</span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1 font-['Cinzel']">{selectedArticle.title}</h3>
            
            <div className="text-xs text-slate-500 mt-2 mb-4 font-semibold">
              Published {selectedArticle.date} • {selectedArticle.readTime}
            </div>

            <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-64 object-cover rounded-2xl mb-4 border border-slate-200 shadow-sm" />

            <div className="space-y-3 text-sm text-slate-700 leading-relaxed font-medium">
              <p className="font-bold text-slate-900">{selectedArticle.summary}</p>
              <p>
                SAC Academy continues to push boundaries in educational leadership, empowering scholars with hands-on research and world-class faculty support.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-between items-center">
              <span className="text-xs text-slate-500 font-semibold">SAC Communications Office</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 bg-indigo-600 text-white font-bold rounded-xl text-xs"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
