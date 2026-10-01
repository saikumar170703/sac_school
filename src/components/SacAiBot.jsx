import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  X, 
  Bot, 
  User
} from 'lucide-react';
import { AI_BOT_FAQS } from '../data/sacData';

export default function SacAiBot({ onOpenApply }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "👋 Hello! I am SAC Smart Assistant. How can I help you regarding SAC Academy admissions, tuition grants, STEM programs, or campus tours today?",
      time: "Just now"
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const suggestionChips = [
    "How do I apply for 2026?",
    "Tuition fee & financial aid",
    "What STEM programs exist?",
    "Book a campus tour",
    "Sports & athletics"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    // Add User Message
    const userMsg = { sender: 'user', text: query, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');

    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      let botAnswer = "I would be delighted to assist you! For detailed official guidance, please feel free to start an online application or schedule a campus visit with our Admissions office.";
      
      const lowerQuery = query.toLowerCase();
      
      for (const faq of AI_BOT_FAQS) {
        if (faq.keywords.some(kw => lowerQuery.includes(kw))) {
          botAnswer = faq.answer;
          break;
        }
      }

      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: botAnswer,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center space-x-2.5 px-4.5 py-3.5 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <Bot className="w-5 h-5 text-amber-300" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
            <span className="text-xs tracking-wide">Ask SAC AI</span>
          </button>
        )}
      </div>

      {/* Chatbot Window Modal / Drawer */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[92vw] sm:w-[380px] bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[520px] animate-slideUp">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-700 p-4 flex items-center justify-between text-white shadow-md">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-white/20 text-amber-300 flex items-center justify-center border border-white/30">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <h4 className="text-sm font-extrabold font-['Cinzel']">SAC Smart AI</h4>
                  <span className="px-1.5 py-0.2 bg-emerald-400/30 text-emerald-100 text-[9px] font-extrabold rounded border border-emerald-300/40">Live</span>
                </div>
                <p className="text-[10px] text-indigo-100 font-medium">24/7 Admissions & Campus Advisor</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-indigo-100 hover:text-white rounded-lg hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs font-medium">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex space-x-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 border border-indigo-200">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-none shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm'
                  }`}
                >
                  <p className="leading-relaxed">{msg.text}</p>
                  <span className="block text-[9px] opacity-70 text-right mt-1">{msg.time}</span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 border border-purple-200">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 text-slate-500 text-xs py-1 font-semibold">
                <Bot className="w-4 h-4 text-indigo-600 animate-spin" />
                <span>SAC AI is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion Chips */}
          <div className="p-2 bg-white border-t border-slate-200 flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
            {suggestionChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(chip)}
                className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-indigo-50 text-[10px] font-bold text-slate-700 hover:text-indigo-700 border border-slate-200 whitespace-nowrap transition-colors"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="Ask about SAC admissions, fees, courses..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 font-medium"
            />
            <button
              type="submit"
              className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-md transition-transform active:scale-95"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
