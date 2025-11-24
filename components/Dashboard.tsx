import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const generateData = () => {
  return Array.from({ length: 10 }, (_, i) => ({
    name: `0${i + 1}`,
    efficiency: Math.floor(Math.random() * 40) + 60,
    output: Math.floor(Math.random() * 100)
  }));
};

export const Dashboard: React.FC = () => {
  const [data] = useState(generateData());

  return (
    <section className="py-20 border-b border-gray-200 bg-swiss-offwhite relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
          {/* Text Column */}
          <div className="lg:col-span-4">
            <h2 className="text-5xl font-bold tracking-tight mb-8 leading-none">SYSTEM<br/>METRICS.</h2>
            <p className="text-lg font-light text-gray-600 mb-8">
              Objective analysis of production output and efficiency ratings. Data is visualized without ornamentation to ensure clarity and immediate comprehension.
            </p>
            <div className="border-t-2 border-swiss-black pt-4">
               <div className="flex justify-between mb-2">
                   <span className="font-bold">STATUS</span>
                   <span className="text-swiss-red">OPTIMAL</span>
               </div>
               <div className="flex justify-between">
                   <span className="font-bold">UPTIME</span>
                   <span>99.9%</span>
               </div>
            </div>
          </div>

          {/* Charts Column */}
          <div className="lg:col-span-8 grid grid-cols-1 gap-8">
            
            {/* Chart 1 */}
            <div className="bg-white p-8 border border-gray-200 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Efficiency Index</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="0" vertical={false} stroke="#e5e5e5" />
                    <XAxis dataKey="name" stroke="#999" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                    <YAxis stroke="#999" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #000', borderRadius: 0 }}
                        itemStyle={{ color: '#000', fontSize: '12px', fontWeight: 'bold' }}
                    />
                    <Line type="linear" dataKey="efficiency" stroke="#111111" strokeWidth={2} dot={false} />
                    <Line type="linear" dataKey="output" stroke="#ff3333" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

             {/* Chart 2 */}
             <div className="bg-white p-8 border border-gray-200 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Resource Allocation</h3>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="0" vertical={false} stroke="#e5e5e5" />
                    <XAxis dataKey="name" hide />
                    <Tooltip 
                        cursor={{fill: '#f4f4f4'}}
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #000', borderRadius: 0 }}
                    />
                    <Bar dataKey="output" fill="#111111" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};