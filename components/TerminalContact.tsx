import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToRonin } from '../services/geminiService';
import { LogMessage } from '../types';
import { ArrowRight } from 'lucide-react';

export const TerminalContact: React.FC = () => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<LogMessage[]>([
    { id: '0', text: 'Werkstatt 77 Virtual Assistant online. How may I assist with your project?', sender: 'SYSTEM', timestamp: Date.now() }
  ]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const chatHistory = useRef<{role: string, parts: {text: string}[]}[]>([]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: LogMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'USER',
      timestamp: Date.now()
    };
    
    setLogs(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const responseText = await sendMessageToRonin(chatHistory.current, userMsg.text);
    
    chatHistory.current.push({ role: 'user', parts: [{ text: userMsg.text }] });
    chatHistory.current.push({ role: 'model', parts: [{ text: responseText }] });

    const systemMsg: LogMessage = {
      id: (Date.now() + 1).toString(),
      text: responseText,
      sender: 'SYSTEM',
      timestamp: Date.now()
    };

    setLogs(prev => [...prev, systemMsg]);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-white border-t-4 border-swiss-black">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold uppercase tracking-tight mb-2">Consultation</h2>
          <div className="w-24 h-1 bg-swiss-red mx-auto"></div>
        </div>

        <div className="bg-swiss-offwhite p-8 md:p-12">
          {/* Chat Window */}
          <div className="h-[500px] overflow-y-auto mb-8 space-y-8 pr-4">
            {logs.map((log) => (
              <div key={log.id} className={`flex ${log.sender === 'USER' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${log.sender === 'USER' ? 'bg-swiss-black text-white' : 'bg-white border border-gray-200 text-swiss-black'} p-6 shadow-sm`}>
                  <div className="text-[10px] uppercase tracking-widest mb-2 opacity-50">
                    {log.sender === 'USER' ? 'Client' : 'Werkstatt 77'}
                  </div>
                  <div className="text-sm md:text-base leading-relaxed font-medium">
                    {log.text}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                 <div className="bg-white border border-gray-200 p-6">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-swiss-red animate-bounce"></div>
                      <div className="w-2 h-2 bg-swiss-red animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-swiss-red animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                 </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="relative">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-white border-2 border-swiss-black p-6 pr-16 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-swiss-red focus:border-transparent placeholder-gray-400"
              placeholder="Type your inquiry here..."
            />
            <button 
              type="submit"
              disabled={loading || !input.trim()}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-swiss-black text-white hover:bg-swiss-red transition-colors disabled:opacity-50"
            >
              <ArrowRight size={24} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};