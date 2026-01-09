// import { Globe, Target, TrendingUp } from 'lucide-react';

// function SectionE() {
//   return (
//     <section id='market-size' className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">Market Size</h2>
//           <p className="text-lg md:text-xl text-slate-600">Massive opportunity in the creator economy</p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
//             <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6">
//               <Globe className="w-8 h-8 text-blue-600" />
//             </div>
//             <div className="mb-4">
//               <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">TAM</span>
//               <h3 className="text-xl md:text-3xl font-bold text-slate-900 mt-2">$2.1 Trillion</h3>
//             </div>
//             <p className="text-slate-600 leading-relaxed">
//               Global creator economy + social media + local commerce
//             </p>
//           </div>

//           <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
//             <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-xl mb-6">
//               <Target className="w-8 h-8 text-emerald-600" />
//             </div>
//             <div className="mb-4">
//               <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">SAM</span>
//               <h3 className="text-xl md:text-3xl font-bold text-slate-900 mt-2">$210 Billion</h3>
//             </div>
//             <p className="text-slate-600 leading-relaxed">
//               Local ads + local marketplace verticals
//             </p>
//           </div>

//           <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
//             <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-xl mb-6">
//               <TrendingUp className="w-8 h-8 text-amber-600" />
//             </div>
//             <div className="mb-4">
//               <span className="text-sm font-semibold text-amber-600 uppercase tracking-wide">SOM</span>
//               <h3 className="text-xl md:text-3xl font-bold text-slate-900 mt-2">$1.5 Billion</h3>
//             </div>
//             <p className="text-slate-600 leading-relaxed">
//               Target share in 5 years
//             </p>
//           </div>
//         </div>

//         <div className='mt-10 flex items-center justify-center'>
//            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold text-lg rounded-full hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105">
//             <span className="flex items-center gap-2">
//               Invest now
//               <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </span>
//           </button>
// </div>
//       </div>
//     </section>
//   );
// }

// export default SectionE;


import { Globe, Target, TrendingUp, BarChart3, PieChart, ArrowRight, Zap, Rocket, Users, DollarSign, Building2 } from 'lucide-react';
import { useState, useEffect } from 'react';

function SectionE() {
  const [activeTab, setActiveTab] = useState('tam');
  const [countUpValue, setCountUpValue] = useState(0);

  const marketData = {
    tam: {
      title: 'Total Addressable Market',
      value: '$2.1T',
      description: 'Global creator economy + social media + local commerce',
      breakdown: [
        { label: 'Creator Economy', value: '$480B', color: 'from-blue-500 to-cyan-500' },
        { label: 'Social Media', value: '$1.2T', color: 'from-purple-500 to-pink-500' },
        { label: 'Local Commerce', value: '$420B', color: 'from-emerald-500 to-teal-500' }
      ],
      icon: Globe,
      gradient: 'from-blue-500 to-purple-500',
      growth: '+15% CAGR',
      years: '2024-2028'
    },
    sam: {
      title: 'Serviceable Available Market',
      value: '$210B',
      description: 'Local advertising + marketplace verticals',
      breakdown: [
        { label: 'Hyper-local Ads', value: '$120B', color: 'from-emerald-500 to-teal-500' },
        { label: 'Local Marketplace', value: '$90B', color: 'from-amber-500 to-orange-500' }
      ],
      icon: Target,
      gradient: 'from-emerald-500 to-cyan-500',
      growth: '+22% CAGR',
      years: '2024-2028'
    },
    som: {
      title: 'Serviceable Obtainable Market',
      value: '$1.5B',
      description: 'Target market share in 5 years',
      breakdown: [
        { label: 'Year 1-2', value: '$150M', color: 'from-amber-500 to-orange-500' },
        { label: 'Year 3-4', value: '$600M', color: 'from-orange-500 to-red-500' },
        { label: 'Year 5+', value: '$1.5B', color: 'from-red-500 to-pink-500' }
      ],
      icon: TrendingUp,
      gradient: 'from-amber-500 to-red-500',
      growth: '+85% YoY',
      years: '5 Year Target'
    }
  };

  useEffect(() => {
    let animationFrame;
    const duration = 2000;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCountUpValue(progress * 100);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const activeData = marketData[activeTab];
  const Icon = activeData.icon;

  return (
    <section id='market-size' className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl opacity-20"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-blue-900/[0.02] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
              Market Analysis
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-gray-900">Massive</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
              Market Opportunity
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The creator economy and local commerce represent a trillion-dollar opportunity waiting to be unlocked
          </p>
        </div>

        {/* Market Size Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {Object.entries(marketData).map(([key, data]) => {
            const DataIcon = data.icon;
            const isActive = activeTab === key;

            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative rounded-2xl p-8 text-left transition-all duration-300 hover:scale-[1.02] ${
                  isActive
                    ? 'bg-gradient-to-br from-white to-blue-50 border-2 border-blue-300 shadow-xl shadow-blue-500/20'
                    : 'bg-white border border-gray-200 hover:border-blue-200 hover:shadow-lg'
                }`}
              >
                {/* Glow effect for active */}
                {isActive && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-50"></div>
                )}
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                    isActive
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                      : `bg-gradient-to-br ${data.gradient}`
                  }`}>
                    <DataIcon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Label */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-sm font-semibold uppercase tracking-wide ${
                      isActive ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {key.toUpperCase()}
                    </span>
                    {isActive && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  
                  {/* Value */}
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    {data.value}
                  </h3>
                  
                  {/* Title */}
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    {data.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {data.description}
                  </p>
                  
                  {/* Growth indicator */}
                  <div className="mt-6 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm font-medium text-emerald-600">{data.growth}</span>
                    <span className="text-xs text-gray-500 ml-auto">{data.years}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Breakdown */}
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl border border-blue-200 p-8 md:p-12 mb-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left: Active Market Details */}
            <div className="lg:w-2/3">
              <div className="flex items-center gap-3 mb-8">
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${activeData.gradient}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{activeData.title}</h3>
                  <p className="text-gray-600">{activeData.description}</p>
                </div>
              </div>
              
              {/* Value display */}
              <div className="mb-10">
                <div className="flex items-baseline gap-3 mb-4">
                  <div className="text-5xl md:text-6xl font-bold text-gray-900">
                    {activeData.value}
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-emerald-600">{activeData.growth}</span>
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${activeData.gradient} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${countUpValue}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Breakdown */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Market Breakdown</h4>
                <div className="space-y-6">
                  {activeData.breakdown.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.color}`}></div>
                        <span className="text-gray-800 font-medium">{item.label}</span>
                      </div>
                      <div className="text-lg font-bold text-gray-900">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right: Market Visual */}
            <div className="lg:w-1/3">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <PieChart className="w-6 h-6 text-blue-600" />
                  <h4 className="text-lg font-semibold text-gray-900">Market Composition</h4>
                </div>
                
                {/* Market segments visual */}
                <div className="relative w-48 h-48 mx-auto mb-8">
                  {/* Segments */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20"></div>
                  
                  {/* Segment 1 */}
                  <div className="absolute inset-0 rounded-full border-[32px] border-blue-500/30"></div>
                  
                  {/* Segment 2 */}
                  <div 
                    className="absolute inset-0 rounded-full border-[32px] border-transparent"
                    style={{
                      borderTopColor: '#8B5CF6',
                      borderRightColor: '#8B5CF6',
                      transform: 'rotate(120deg)'
                    }}
                  ></div>
                  
                  {/* Segment 3 */}
                  <div 
                    className="absolute inset-0 rounded-full border-[32px] border-transparent"
                    style={{
                      borderTopColor: '#10B981',
                      borderRightColor: '#10B981',
                      transform: 'rotate(240deg)'
                    }}
                  ></div>
                  
                  {/* Center */}
                  <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border-4 border-blue-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs text-gray-500">Total</div>
                      <div className="text-lg font-bold text-gray-900">{activeData.value}</div>
                    </div>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Creator Economy</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">23%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Social Media</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">57%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Local Commerce</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">20%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Growth Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mx-auto mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">4.8B+</div>
            <div className="text-sm text-gray-600">Social Media Users</div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-xl mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">$480B</div>
            <div className="text-sm text-gray-600">Creator Economy 2028</div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-amber-50 rounded-xl mx-auto mb-4">
              <Building2 className="w-6 h-6 text-amber-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">10,000+</div>
            <div className="text-sm text-gray-600">Cities Globally</div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-50 rounded-xl mx-auto mb-4">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">45%</div>
            <div className="text-sm text-gray-600">Annual Growth</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="relative inline-block max-w-2xl mx-auto">
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/10 to-emerald-600/10 rounded-3xl blur-xl opacity-50"></div>
            
            <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-10 overflow-hidden">
              {/* Floating elements */}
              <div className="absolute top-6 left-6 opacity-20">
                <Rocket className="w-16 h-16 text-white" />
              </div>
              <div className="absolute bottom-6 right-6 opacity-20">
                <Globe className="w-16 h-16 text-white" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Invest in the Future of City Economies
                </h3>
                
                <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto">
                  Join us in capturing a share of this massive market opportunity
                </p>
                
                <button className="group relative px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center gap-3">
                    Invest Now & Get Equity
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </button>
                
                <p className="mt-6 text-sm text-white/70">
                  Limited early investor positions available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionE;
