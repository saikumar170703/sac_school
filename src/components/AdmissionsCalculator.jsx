import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  Award, 
  ShieldCheck, 
  ArrowRight,
  TrendingDown
} from 'lucide-react';

export default function AdmissionsCalculator({ onOpenApply }) {
  const [selectedGrade, setSelectedGrade] = useState('mpc-iit');
  const [boardingType, setBoardingType] = useState('day');
  const [aidPercentage, setAidPercentage] = useState(25);
  const [selectedAddons, setSelectedAddons] = useState(['robotics']);

  const gradeOptions = [
    { id: 'mpc-iit', name: 'Class 11-12 MPC (IIT-JEE Main & Advanced)', basePrice: 65000 },
    { id: 'bipc-neet', name: 'Class 11-12 BiPC (NEET Medical Integrated)', basePrice: 62000 },
    { id: 'mec-cec', name: 'Class 11-12 MEC / CEC (Commerce & CA Foundation)', basePrice: 48000 },
    { id: 'foundation', name: 'Class 6 to 10 CBSE Foundation & Olympiad Academy', basePrice: 42000 },
  ];

  const boardingOptions = [
    { id: 'day', name: 'Day Scholar (School Bus Facility)', fee: 12000, desc: 'Includes AC bus transport across Vijayawada & lunch' },
    { id: 'weekly', name: '5-Day Hostel Boarding', fee: 35000, desc: 'Monday to Friday AC dormitory & balanced meals' },
    { id: 'full', name: 'Full Residential Campus Hostel', fee: 55000, desc: '7-day full campus housing & evening study hours' },
  ];

  const addonsList = [
    { id: 'robotics', name: 'Autonomous Robotics & AI Lab Pass', fee: 4500 },
    { id: 'arts', name: 'Kuchipudi Classical Dance & Music Academy', fee: 3500 },
    { id: 'sports', name: 'Turf Cricket & Sports Coaching Academy', fee: 5000 },
    { id: 'abacus', name: 'Abacus & Vedic Mathematics Certification', fee: 2500 },
  ];

  const currentGrade = gradeOptions.find(g => g.id === selectedGrade) || gradeOptions[0];
  const currentBoarding = boardingOptions.find(b => b.id === boardingType) || boardingOptions[0];
  
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const item = addonsList.find(a => a.id === addonId);
    return sum + (item ? item.fee : 0);
  }, 0);

  const subtotal = currentGrade.basePrice + currentBoarding.fee + addonsTotal;
  const estimatedAidAmount = Math.round(subtotal * (aidPercentage / 100));
  const finalNetTuition = subtotal - estimatedAidAmount;
  const termPayment = Math.round(finalNetTuition / 3);

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(item => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  return (
    <section id="calculator" className="py-24 relative bg-slate-50 border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Fee & Scholarship Estimator</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-['Cinzel']">
            Estimate Your <span className="gradient-text-gold">SAC Fee & Pratibha Scholarship</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium">
            SAC English Medium School provides affordable quality education with merit scholarships based on our SAC Talent Exam.
          </p>
        </div>

        {/* Calculator Grid Container */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6 glass-card p-6 sm:p-8 rounded-3xl border border-slate-200">
            
            {/* Step 1: Academic Track Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-indigo-700 mb-3">
                1. Select Academic Course Track
              </label>
              <div className="space-y-2">
                {gradeOptions.map((grade) => (
                  <button
                    key={grade.id}
                    onClick={() => setSelectedGrade(grade.id)}
                    className={`w-full p-3.5 rounded-xl text-left border transition-all duration-200 flex items-center justify-between ${
                      selectedGrade === grade.id
                        ? 'bg-indigo-50 border-indigo-500 text-slate-900 shadow-sm font-bold'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-xs sm:text-sm">{grade.name}</span>
                    <span className="text-xs font-extrabold text-indigo-700">₹{grade.basePrice.toLocaleString('en-IN')}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Residence / Transport Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-indigo-700 mb-3">
                2. Transport / Hostel Boarding Option
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {boardingOptions.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setBoardingType(b.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all duration-200 ${
                      boardingType === b.id
                        ? 'bg-purple-50 border-purple-500 text-slate-900 shadow-sm font-bold'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-bold">{b.name}</div>
                    <div className="text-xs text-purple-700 font-extrabold mt-1">
                      +₹{b.fee.toLocaleString('en-IN')}/yr
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">{b.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Merit Scholarship Slider */}
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center space-x-1.5">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>3. SAC Talent Exam / Pratibha Merit Scholarship Match</span>
                </label>
                <span className="text-base font-extrabold text-amber-700">{aidPercentage}% Scholarship</span>
              </div>

              <input 
                type="range"
                min="0"
                max="75"
                step="5"
                value={aidPercentage}
                onChange={(e) => setAidPercentage(Number(e.target.value))}
                className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />

              <div className="flex justify-between text-[10px] text-amber-800 font-semibold">
                <span>0% (Standard)</span>
                <span>25% (Merit Rank)</span>
                <span>50% (State Ranker)</span>
                <span>75% (Pratibha Topper)</span>
              </div>
            </div>

            {/* Step 4: Specialized Extracurricular Add-ons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-indigo-700 mb-3">
                4. Elective Specialization Academies
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isChecked 
                          ? 'bg-indigo-50 border-indigo-500 text-slate-900 font-bold' 
                          : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${isChecked ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300'}`}>
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs font-semibold">{addon.name}</span>
                      </div>
                      <span className="text-xs font-bold text-indigo-700">+₹{addon.fee.toLocaleString('en-IN')}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Summary Box (Right 5 Cols) */}
          <div className="lg:col-span-5 sticky top-24 glass-card p-6 sm:p-8 rounded-3xl border border-amber-200 bg-white shadow-xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Personalized Estimate</span>
                <h3 className="text-2xl font-extrabold text-slate-900 font-['Cinzel']">Fee Breakdown</h3>
              </div>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 border border-amber-300 text-xs font-extrabold rounded-full">
                2026-2027 Academic Year
              </span>
            </div>

            {/* Price Line Items */}
            <div className="space-y-3 text-xs sm:text-sm font-medium">
              <div className="flex justify-between text-slate-700">
                <span>Base Tuition Fee:</span>
                <span className="font-extrabold text-slate-900">₹{currentGrade.basePrice.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Transport / Hostel Plan:</span>
                <span className="font-extrabold text-slate-900">₹{currentBoarding.fee.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Elective Academies ({selectedAddons.length}):</span>
                <span className="font-extrabold text-slate-900">₹{addonsTotal.toLocaleString('en-IN')}</span>
              </div>

              <div className="pt-2 border-t border-slate-200 flex justify-between text-slate-500 font-bold">
                <span>Subtotal Gross Fee:</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>

              {/* Scholarship Grant Discount Highlight */}
              {estimatedAidAmount > 0 && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-between text-emerald-800 font-bold">
                  <div className="flex items-center space-x-1.5 text-xs">
                    <TrendingDown className="w-4 h-4 text-emerald-600" />
                    <span>Est. Pratibha Scholarship ({aidPercentage}%):</span>
                  </div>
                  <span className="text-sm">-₹{estimatedAidAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
            </div>

            {/* Net Total Box */}
            <div className="pt-4 border-t border-slate-200">
              <div className="text-xs text-slate-500 uppercase font-bold">Estimated Net Annual Cost</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-700 mt-1 font-['Cinzel']">
                ₹{finalNetTuition.toLocaleString('en-IN')} <span className="text-xs font-normal text-slate-500">/ academic year</span>
              </div>
              <div className="text-xs text-indigo-700 font-bold mt-1">
                Flexible Term Installments: ~₹{termPayment.toLocaleString('en-IN')} per term (3 terms)
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={onOpenApply}
                className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <span>Apply With Scholarship Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-500 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Transparent Fee Structure • No Hidden Charges</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
