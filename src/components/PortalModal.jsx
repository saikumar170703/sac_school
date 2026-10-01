import React, { useState } from 'react';
import { 
  X, 
  UserCheck, 
  Lock, 
  User, 
  CheckCircle2, 
  Sparkles,
  BookOpen,
  Award,
  Bell
} from 'lucide-react';

export default function PortalModal({ isOpen, onClose }) {
  const [role, setRole] = useState('student');
  const [username, setUsername] = useState('sai.teja.sac');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleDemoLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
        
        <button
          onClick={() => { setIsLoggedIn(false); onClose(); }}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {!isLoggedIn ? (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto border border-indigo-200">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-['Cinzel']">
                SAC Student & Parent Portal
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Access Class 10/12 Board Marks, IIT-JEE/NEET Mock Test Percentiles, Fee Receipts & Attendance.
              </p>
            </div>

            {/* Role Selection Tabs */}
            <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 text-xs font-bold">
              <button
                onClick={() => { setRole('student'); setUsername('sai.teja.sac'); }}
                className={`py-2 rounded-lg transition-colors ${role === 'student' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Student
              </button>
              <button
                onClick={() => { setRole('parent'); setUsername('parent.venkat'); }}
                className={`py-2 rounded-lg transition-colors ${role === 'parent' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Parent
              </button>
              <button
                onClick={() => { setRole('faculty'); setUsername('dr.satyanarayana'); }}
                className={`py-2 rounded-lg transition-colors ${role === 'faculty' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Faculty
              </button>
            </div>

            {/* Login Form */}
            <form onSubmit={handleDemoLogin} className="space-y-4">
              <div>
                <label className="block text-xs text-slate-700 font-bold mb-1">
                  SAC Student Admission No. / Email
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 font-medium"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-700 font-bold mb-1">
                  Passcode
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="password" 
                    defaultValue="••••••••••••"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 font-medium"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-xs rounded-xl shadow-md transition-transform hover:scale-[1.02]"
              >
                Sign In to Student Dashboard
              </button>
            </form>

            <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-[11px] text-indigo-800 font-semibold flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Demo Mode: Click "Sign In" above to preview student dashboard interface.</span>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="flex items-center space-x-3 border-b border-slate-200 pb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-emerald-700 uppercase font-bold">Authenticated</span>
                <h4 className="text-base font-bold text-slate-900">Namaste, {username}!</h4>
              </div>
            </div>

            <div className="space-y-3 font-semibold">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-slate-700">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>IIT-JEE Mock Rank:</span>
                </div>
                <span className="text-sm font-extrabold text-slate-900">AP State Rank #14</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-slate-700">
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                  <span>Course Batch:</span>
                </div>
                <span className="text-xs font-extrabold text-indigo-700">Class 12 MPC Super-30</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-slate-700">
                  <Bell className="w-4 h-4 text-purple-600" />
                  <span>Attendance Record:</span>
                </div>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-extrabold rounded">98.5% Present</span>
              </div>
            </div>

            <button
              onClick={() => setIsLoggedIn(false)}
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl"
            >
              Sign Out
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
