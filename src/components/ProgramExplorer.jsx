import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  X,
  Award
} from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../data/sacData';

export default function ProgramExplorer({ onOpenApply }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(null);

  const categories = ['All', 'STEM & Robotics', 'Global IB', 'Arts & Humanities', 'Business & Leadership', 'AP Honors'];

  const filteredPrograms = ACADEMIC_PROGRAMS.filter(prog => {
    const matchesCat = activeCategory === 'All' || prog.category === activeCategory;
    const matchesSearch = prog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prog.careerPaths.some(cp => cp.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="programs" className="py-24 relative bg-slate-50 border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-800 text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
            <span>Academic Curriculum & Tracks</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-['Cinzel']">
            Explore <span className="gradient-text-blue">SAC Academic Tracks</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Immerse yourself in world-renowned IB, AP, STEM, and Fine Arts curricula tailored for future innovators, researchers, and global visionaries.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search AI, IB, Arts, Pre-Med..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 transition-colors font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs font-bold"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Programs Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.length > 0 ? (
            filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between relative group border border-slate-200 hover:border-indigo-300"
              >
                <div>
                  {/* Top Badge & Level */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {program.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-bold">
                      {program.level} • {program.duration}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                    {program.title}
                  </h3>
                  
                  <p className="text-xs font-extrabold text-amber-600 mt-1 mb-3">
                    {program.tagline}
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {program.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-4 space-y-2">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Modules:</div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {program.features.slice(0, 4).map((feat, idx) => (
                        <div key={idx} className="flex items-center space-x-1.5 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer details & Action */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Est. Annual Tuition</div>
                    <div className="text-sm font-extrabold text-slate-900">
                      ${program.tuitionEstimate.toLocaleString()} <span className="text-[10px] text-slate-500 font-normal">/ yr</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProgram(program)}
                    className="px-4 py-2 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-600 hover:text-white rounded-xl border border-indigo-200 transition-all duration-200 flex items-center space-x-1"
                  >
                    <span>View Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16 bg-white rounded-2xl border border-slate-200">
              <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-slate-900">No Programs Match Your Search</h4>
              <p className="text-slate-500 text-sm mt-1">Try resetting category filters or searching for keywords like "Robotics" or "Arts".</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-md"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Detail Modal for Selected Academic Program */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 text-xs font-bold text-indigo-600 uppercase tracking-widest">
              <Award className="w-4 h-4 text-amber-500" />
              <span>{selectedProgram.category} • {selectedProgram.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-['Cinzel']">
              {selectedProgram.title}
            </h3>

            <p className="text-sm font-extrabold text-amber-600 mt-1">
              {selectedProgram.tagline}
            </p>

            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm leading-relaxed font-medium">
              {selectedProgram.description}
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="text-xs font-bold text-indigo-700 uppercase tracking-wider mb-2">Program Highlights</h4>
                <ul className="space-y-1.5">
                  {selectedProgram.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="text-xs font-bold text-indigo-700 uppercase tracking-wider mb-2">Career & College Pathways</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProgram.careerPaths.map((cp, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-indigo-50 text-indigo-800 text-xs rounded-md border border-indigo-200 font-bold">
                      {cp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500 font-medium">Estimated Academic Fee</div>
                <div className="text-xl font-extrabold text-slate-900">${selectedProgram.tuitionEstimate.toLocaleString()} / year</div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
                <button
                  onClick={() => { setSelectedProgram(null); onOpenApply(); }}
                  className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-xs font-bold shadow-md hover:scale-[1.02] transition-transform"
                >
                  Apply For This Track
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
