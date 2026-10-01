import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ApplicationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentGrade: 'Class 9',
    track: 'Class 11-12 MPC (IIT-JEE)',
    term: 'Academic Year 2026-27',
    needFinancialAid: true,
    visitDate: '2026-10-24'
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const resetForm = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={resetForm}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header & Step Indicator */}
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold border border-indigo-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>SAC English Medium School Admissions</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-['Cinzel']">
                Online Student Registration 2026-27
              </h3>
            </div>

            {/* Stepper Bar */}
            <div className="grid grid-cols-3 gap-2 my-6">
              {[1, 2, 3].map((s) => (
                <div 
                  key={s} 
                  className={`h-1.5 rounded-full transition-colors ${s <= step ? 'bg-indigo-600' : 'bg-slate-200'}`}
                />
              ))}
            </div>

            <form onSubmit={step === 3 ? handleFinalSubmit : (e) => { e.preventDefault(); setStep(step + 1); }}>
              
              {/* STEP 1: Personal Info */}
              {step === 1 && (
                <div className="space-y-4 font-medium">
                  <h4 className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Step 1: Student Information</h4>
                  
                  <div>
                    <label className="block text-xs text-slate-700 font-semibold mb-1">Student Full Name *</label>
                    <input 
                      type="text"
                      name="fullName"
                      placeholder="e.g. K. Sai Teja / Ananya Chowdary"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:border-indigo-600"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-700 font-semibold mb-1">Parent Email ID *</label>
                      <input 
                        type="email"
                        name="email"
                        placeholder="parent@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:border-indigo-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-700 font-semibold mb-1">Mobile / WhatsApp Number *</label>
                      <input 
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:border-indigo-600"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-700 font-semibold mb-1">Applying For Class</label>
                    <select 
                      name="currentGrade"
                      value={formData.currentGrade}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:border-indigo-600"
                    >
                      <option value="Class 1-5">Class 1 to 5 (Primary School)</option>
                      <option value="Class 6-8">Class 6 to 8 (High School Foundation)</option>
                      <option value="Class 9-10">Class 9 & 10 (CBSE Board Exam)</option>
                      <option value="Class 11 MPC">Class 11 MPC (IIT-JEE Integrated)</option>
                      <option value="Class 11 BiPC">Class 11 BiPC (NEET Integrated)</option>
                      <option value="Class 11 MEC">Class 11 MEC / CEC (Commerce)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 2: Academic Program Choice */}
              {step === 2 && (
                <div className="space-y-4 font-medium">
                  <h4 className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Step 2: Course Track & Transport/Hostel</h4>
                  
                  <div>
                    <label className="block text-xs text-slate-700 font-semibold mb-1">Primary Course Choice</label>
                    <select 
                      name="track"
                      value={formData.track}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:border-indigo-600"
                    >
                      <option value="Class 11-12 MPC (IIT-JEE)">Class 11-12 MPC (IIT-JEE Main & Advanced Integrated)</option>
                      <option value="Class 11-12 BiPC (NEET)">Class 11-12 BiPC (NEET Medical Integrated)</option>
                      <option value="Class 11-12 MEC/CEC">Class 11-12 MEC / CEC (Commerce & CA Foundation)</option>
                      <option value="Class 6-10 CBSE Olympiad">Class 6 to 10 CBSE Foundation & Olympiad Academy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-700 font-semibold mb-1">Academic Year</label>
                    <select 
                      name="term"
                      value={formData.term}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:border-indigo-600"
                    >
                      <option value="Academic Year 2026-27">Academic Year 2026 - 2027 (June 2026 Start)</option>
                    </select>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-3">
                    <input 
                      type="checkbox"
                      id="needFinancialAid"
                      name="needFinancialAid"
                      checked={formData.needFinancialAid}
                      onChange={handleChange}
                      className="w-4 h-4 rounded accent-indigo-600"
                    />
                    <label htmlFor="needFinancialAid" className="text-xs text-slate-700 cursor-pointer font-medium">
                      I wish to appear for SAC Pratibha Merit Scholarship Test for fee concession.
                    </label>
                  </div>
                </div>
              )}

              {/* STEP 3: Campus Visit & Confirmation */}
              {step === 3 && (
                <div className="space-y-4 font-medium">
                  <h4 className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Step 3: Campus Visit Date</h4>
                  
                  <div>
                    <label className="block text-xs text-slate-700 font-semibold mb-1">Select Open House / Campus Visit Date</label>
                    <input 
                      type="date"
                      name="visitDate"
                      value={formData.visitDate}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:border-indigo-600"
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 space-y-2 text-xs text-slate-800">
                    <div className="font-bold text-amber-700 flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Registration Summary</span>
                    </div>
                    <div>Applicant: <strong>{formData.fullName || 'Student'}</strong></div>
                    <div>Applied Course: <strong>{formData.track}</strong></div>
                    <div>Academic Year: <strong>{formData.term}</strong></div>
                    <div>Scholarship Test Requested: <strong>{formData.needFinancialAid ? 'Yes' : 'No'}</strong></div>
                  </div>
                </div>
              )}

              {/* Button Controls */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-900"
                  >
                    Back
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center space-x-2"
                >
                  <span>{step === 3 ? 'Submit Application' : 'Next Step'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 animate-scaleUp">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-500 shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 font-['Cinzel']">
              Registration Successful!
            </h3>

            <p className="text-slate-700 text-sm max-w-md mx-auto leading-relaxed font-medium">
              Congratulations, <strong>{formData.fullName}</strong>! Your registration for <strong>{formData.track}</strong> at SAC English Medium School has been received.
            </p>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto space-y-1 font-semibold">
              <div>Registration No: <strong className="text-indigo-700 font-mono">SAC-AP-2026-9842</strong></div>
              <div>An SMS & Email confirmation has been sent to <strong className="text-slate-900">{formData.email}</strong></div>
            </div>

            <button
              onClick={resetForm}
              className="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-md"
            >
              Return to Homepage
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
