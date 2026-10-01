import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Bell
} from 'lucide-react';
import { EVENTS_CALENDAR } from '../data/sacData';

export default function EventsSection({ onOpenApply }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [rsvpedEvents, setRsvpedEvents] = useState([]);
  const [toastMessage, setToastMessage] = useState('');

  // Countdown timer for next flagship event (Oct 24, 2026)
  const [timeLeft, setTimeLeft] = useState({ days: 22, hours: 14, mins: 38, secs: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: 59, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const categories = ['All', 'Admissions', 'STEM & Tech', 'Arts & Culture', 'Athletics'];

  const filteredEvents = EVENTS_CALENDAR.filter(evt => 
    activeCategory === 'All' || evt.category === activeCategory
  );

  const toggleRsvp = (eventId, title) => {
    if (rsvpedEvents.includes(eventId)) {
      setRsvpedEvents(rsvpedEvents.filter(id => id !== eventId));
      showToast(`Cancelled RSVP for ${title}`);
    } else {
      setRsvpedEvents([...rsvpedEvents, eventId]);
      showToast(`🎉 RSVP Confirmed! Calendar pass sent for ${title}`);
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  return (
    <section id="events" className="py-24 relative bg-white border-t border-slate-200">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-amber-400 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 animate-slideUp">
          <Bell className="w-5 h-5 text-amber-400 animate-bounce" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-800 text-xs font-bold">
            <Calendar className="w-3.5 h-3.5 text-indigo-600" />
            <span>Campus Life & Events</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-['Cinzel']">
            Upcoming <span className="gradient-text-blue">SAC Events & Summits</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Join our open houses, scientific symposiums, classical concerts, and athletic championships.
          </p>
        </div>

        {/* Flagship Countdown Banner */}
        <div className="mt-10 glass-card p-6 sm:p-8 rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-50/80 via-white to-purple-50/80 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 text-[11px] font-extrabold uppercase rounded-md tracking-wider">
              Flagship Event
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Cinzel']">
              SAC Global Open House & Immersion Day
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-medium">
              Experience sample quantum lab sessions, tour dormitories, meet department deans, and get your tuition grant evaluated on site.
            </p>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center space-x-3 text-center">
            <div className="bg-white border border-slate-200 rounded-xl p-3 min-w-[65px] shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-amber-600 font-mono">{timeLeft.days}</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Days</div>
            </div>
            <div className="text-slate-400 text-xl font-bold">:</div>
            <div className="bg-white border border-slate-200 rounded-xl p-3 min-w-[65px] shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Hours</div>
            </div>
            <div className="text-slate-400 text-xl font-bold">:</div>
            <div className="bg-white border border-slate-200 rounded-xl p-3 min-w-[65px] shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">{String(timeLeft.mins).padStart(2, '0')}</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Mins</div>
            </div>
            <div className="text-slate-400 text-xl font-bold">:</div>
            <div className="bg-white border border-slate-200 rounded-xl p-3 min-w-[65px] shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-indigo-600 font-mono">{String(timeLeft.secs).padStart(2, '0')}</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Secs</div>
            </div>
          </div>

          <button
            onClick={onOpenApply}
            className="px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md hover:scale-105 transition-transform shrink-0"
          >
            Reserve Open House Pass
          </button>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex items-center justify-center space-x-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((evt) => {
            const isRsvped = rsvpedEvents.includes(evt.id);
            return (
              <div
                key={evt.id}
                className="glass-card rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {evt.category}
                    </span>
                    <span className="text-xs font-bold text-amber-600">{evt.status}</span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 leading-snug">
                    {evt.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {evt.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-2 border-t border-slate-200 font-semibold">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 sm:col-span-2">
                      <MapPin className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span className="truncate">{evt.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500 font-medium">
                    Host: <strong className="text-slate-900">{evt.speakers[0]}</strong>
                  </div>

                  <button
                    onClick={() => toggleRsvp(evt.id, evt.title)}
                    className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center space-x-1.5 ${
                      isRsvped
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                        : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white border border-indigo-200'
                    }`}
                  >
                    {isRsvped ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>RSVPed</span>
                      </>
                    ) : (
                      <>
                        <Bell className="w-3.5 h-3.5" />
                        <span>RSVP / Remind</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
