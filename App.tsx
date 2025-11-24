import React from 'react';
import { ThreeCity } from './components/ThreeCity';
import { HUD } from './components/HUD';
import { HoloCard } from './components/HoloCard';
import { Dashboard } from './components/Dashboard';
import { TerminalContact } from './components/TerminalContact';
import { SERVICES, TEAM_MEMBERS } from './constants';
import { ServiceType } from './types';
import { Layers, Grid, Target, Activity, Plus } from 'lucide-react';

const App: React.FC = () => {

  const getIcon = (type: ServiceType) => {
    switch (type) {
      case ServiceType.STRATEGY: return <Target className="w-10 h-10 text-swiss-black mb-6" />;
      case ServiceType.SYSTEMS: return <Grid className="w-10 h-10 text-swiss-black mb-6" />;
      case ServiceType.ARCHITECTURE: return <Layers className="w-10 h-10 text-swiss-black mb-6" />;
      default: return <Activity />;
    }
  };

  return (
    <div className="relative min-h-screen bg-white font-sans text-swiss-black selection:bg-swiss-red selection:text-white">
      <ThreeCity />
      <HUD />

      {/* Hero Section */}
      <header className="relative min-h-screen pt-20 z-10 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
           <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-10">
                <h1 className="text-[15vw] leading-[0.85] font-black tracking-tighter mb-8 mix-blend-multiply">
                  SWISS<br/>GRID
                </h1>
              </div>
              <div className="col-span-12 lg:col-span-2 flex flex-col justify-end pb-4">
                  <div className="w-full h-1 bg-swiss-black mb-4"></div>
                  <p className="font-bold text-sm uppercase tracking-widest mb-2">Est. 1977</p>
                  <p className="text-sm leading-relaxed">
                    Objectivity.<br/>
                    Clarity.<br/>
                    Mathematics.
                  </p>
              </div>
           </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-b-4 border-swiss-black"></div>
      </header>

      {/* Manifesto / Intro */}
      <section className="py-32 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="text-3xl md:text-5xl font-bold leading-tight">
                    Design is not Art.<br/>Design is <span className="text-swiss-red">Organization.</span>
                </div>
                <div className="flex flex-col justify-between">
                    <p className="text-xl leading-relaxed text-gray-600 mb-8">
                        We believe in the grid as the fundamental structure of information. 
                        Chaos is merely order waiting to be deciphered. Our approach removes 
                        the unnecessary, leaving only the essential.
                    </p>
                    <button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                        className="self-start px-8 py-4 border-2 border-swiss-black text-swiss-black font-bold uppercase tracking-widest hover:bg-swiss-black hover:text-white transition-all"
                    >
                        Start Project
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-swiss-offwhite relative z-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-baseline mb-16 border-b border-gray-300 pb-4">
                <span className="text-swiss-red font-bold text-xl mr-4">01.</span>
                <h2 className="text-4xl font-bold uppercase tracking-tight">Expertise</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-gray-200">
            {SERVICES.map((service, idx) => (
                <HoloCard key={idx} className="border-r border-b border-t-0 border-l-0 border-gray-200">
                    <div>
                        {getIcon(service.type)}
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center">
                        <span className="font-mono text-xs text-gray-400">REF. 00{idx + 1}</span>
                        <Plus className="w-4 h-4 text-swiss-red opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </HoloCard>
            ))}
            </div>
        </div>
      </section>

      <Dashboard />

      {/* Team */}
      <section className="py-32 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-baseline mb-16 border-b border-gray-300 pb-4 justify-end">
                <h2 className="text-4xl font-bold uppercase tracking-tight text-right mr-4">Principals</h2>
                <span className="text-swiss-red font-bold text-xl">02.</span>
            </div>
        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TEAM_MEMBERS.map((member) => (
                <div key={member.id} className="group cursor-pointer">
                    <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gray-100">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 bg-white p-4 pr-8">
                            <span className="text-3xl font-bold block">{member.id}</span>
                        </div>
                    </div>
                    <div className="border-l-4 border-swiss-black pl-4 transition-colors group-hover:border-swiss-red">
                        <h3 className="text-2xl font-bold">{member.name}</h3>
                        <p className="text-swiss-red font-medium mb-1">{member.role}</p>
                        <p className="text-sm text-gray-400">Since {member.yearJoined}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* Contact */}
      <div id="contact">
        <TerminalContact />
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-12 bg-swiss-black text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
                <h4 className="text-2xl font-bold mb-4">Werkstatt 77</h4>
                <p className="text-gray-400 max-w-sm">
                    International typographic style design bureau.
                    Zurich — Berlin — New York.
                </p>
            </div>
            <div>
                <h5 className="font-bold uppercase tracking-widest mb-4 text-sm">Connect</h5>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-white">Instagram</a></li>
                    <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                    <li><a href="#" className="hover:text-white">Behance</a></li>
                </ul>
            </div>
            <div>
                <h5 className="font-bold uppercase tracking-widest mb-4 text-sm">Legal</h5>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-white">Imprint</a></li>
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center md:text-left text-xs text-gray-500 uppercase tracking-widest">
            © 2024 Werkstatt 77. Form follows function.
        </div>
      </footer>
    </div>
  );
};

export default App;