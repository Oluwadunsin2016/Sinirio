// import { DollarSign, Shield, Megaphone, Star, Handshake, CheckCircle } from 'lucide-react';

// function SectionF() {
//   const revenueStreams = [
//     {
//       icon: DollarSign,
//       title: 'Engagement Monetization Fees',
//       percentage: '15%',
//       description: 'Cities App retains 15% of creator payout volume',
//       color: 'blue'
//     },
//     {
//       icon: Shield,
//       title: 'Escrow Fees',
//       items: [
//         '2% general items',
//         '4% vehicles',
//         '0.8% property transactions'
//       ],
//       color: 'emerald'
//     },
//     {
//       icon: Megaphone,
//       title: 'Local Business Advertising',
//       description: '$20–$199 per targeted city campaign',
//       color: 'amber'
//     },
//     {
//       icon: Star,
//       title: 'Cities+ Subscription',
//       description: '$4.99/month premium access',
//       color: 'rose'
//     },
//     {
//       icon: Handshake,
//       title: 'Local Vendor Partnership Fees',
//       description: '5–12% commission',
//       color: 'cyan'
//     },
//     {
//       icon: CheckCircle,
//       title: 'AI Verification Services',
//       description: '$0.99–$2.99 per user or merchant verification',
//       color: 'violet'
//     }
//   ];

//   const colorClasses = {
//     blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
//     emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-200' },
//     amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-200' },
//     rose: { bg: 'bg-rose-100', text: 'text-rose-600', border: 'border-rose-200' },
//     cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'border-cyan-200' },
//     violet: { bg: 'bg-violet-100', text: 'text-violet-600', border: 'border-violet-200' }
//   };

//   return (
//     <section id='model' className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">Business Model</h2>
//           <p className="text-lg md:text-xl text-slate-600">Multiple revenue streams for sustainable growth</p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {revenueStreams.map((stream, index) => {
//             const Icon = stream.icon;
//             const colors = colorClasses[stream.color];

//             return (
//               <div
//                 key={index}
//                 className={`bg-white rounded-xl p-6 border-2 ${colors.border} hover:shadow-lg transition-all duration-300`}
//               >
//                 <div className={`flex items-center justify-center w-14 h-14 ${colors.bg} rounded-lg mb-4`}>
//                   <Icon className={`w-7 h-7 ${colors.text}`} />
//                 </div>
//                 <h3 className="text-lg font-bold text-slate-900 mb-3">{stream.title}</h3>
//                 {stream.percentage && (
//                   <div className={`text-3xl font-bold ${colors.text} mb-2`}>{stream.percentage}</div>
//                 )}
//                 {stream.description && (
//                   <p className="text-slate-600 text-sm leading-relaxed">{stream.description}</p>
//                 )}
//                 {stream.items && (
//                   <ul className="space-y-2">
//                     {stream.items.map((item, idx) => (
//                       <li key={idx} className="flex items-start">
//                         <span className={`inline-block w-1.5 h-1.5 ${colors.bg} rounded-full mt-2 mr-2`}></span>
//                         <span className="text-slate-600 text-sm">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             );
//           })}
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

// export default SectionF;


import { DollarSign, Shield, Megaphone, Star, Handshake, CheckCircle, TrendingUp, PieChart, Rocket, Target, ArrowRight } from 'lucide-react';
import { useState } from 'react';

function SectionF() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const revenueStreams = [
    {
      icon: DollarSign,
      title: 'Engagement Monetization',
      percentage: '15%',
      description: 'Cities App retains 15% of creator payout volume',
      subtext: 'Automated from likes, comments, views',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      stats: 'Primary revenue driver'
    },
    {
      icon: Shield,
      title: 'Escrow Fees',
      items: [
        { label: 'General items', value: '2%' },
        { label: 'Vehicles', value: '4%' },
        { label: 'Properties', value: '0.8%' }
      ],
      description: 'Fraud-protected transaction fees',
      subtext: 'Scales with marketplace volume',
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-500',
      stats: 'High margin revenue'
    },
    {
      icon: Megaphone,
      title: 'Local Business Ads',
      price: '$20–$199',
      description: 'Per targeted city advertising campaign',
      subtext: '90% cheaper than traditional ads',
      color: 'amber',
      gradient: 'from-amber-500 to-orange-500',
      stats: 'Recurring revenue'
    },
    {
      icon: Star,
      title: 'Cities+ Subscription',
      price: '$4.99',
      description: 'Monthly premium access fee',
      subtext: 'Priority features and support',
      color: 'rose',
      gradient: 'from-rose-500 to-pink-500',
      stats: 'High retention rate'
    },
    {
      icon: Handshake,
      title: 'Vendor Partnerships',
      percentage: '5–12%',
      description: 'Commission on local vendor sales',
      subtext: 'Direct business integrations',
      color: 'cyan',
      gradient: 'from-cyan-500 to-blue-500',
      stats: 'Strategic partnerships'
    },
    {
      icon: CheckCircle,
      title: 'AI Verification',
      price: '$0.99–$2.99',
      description: 'Per user or merchant verification',
      subtext: 'Builds trust and safety',
      color: 'violet',
      gradient: 'from-violet-500 to-purple-500',
      stats: 'High adoption rate'
    }
  ];

  const totalMetrics = [
    { label: 'Projected Annual Revenue', value: '$48M', change: '+235%' },
    { label: 'Gross Margin', value: '78%', change: 'High' },
    { label: 'Revenue Streams', value: '6', change: 'Diversified' }
  ];

  return (
    <section id='model' className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
            <PieChart className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
              Revenue Model
            </span>
          </div> */}
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-gray-900">Sustainable</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
              Business Model
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple diversified revenue streams designed for scalable growth and high margins
          </p>
        </div>

        {/* Total Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {totalMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {metric.value}
              </div>
              <div className="text-gray-600 mb-3">{metric.label}</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm font-medium text-emerald-600">{metric.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Revenue Streams Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {revenueStreams.map((stream, index) => {
            const Icon = stream.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background glow on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${stream.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
                ></div>
                
                <div className={`relative h-full bg-white rounded-2xl border border-gray-200 p-6 transition-all duration-300 group-hover:border-gray-300 group-hover:shadow-xl group-hover:scale-[1.02] ${
                  isHovered ? 'shadow-lg' : ''
                }`}>
                  {/* Icon with gradient background */}
                  <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stream.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                    
                    {/* Animated ring */}
                    <div className={`absolute inset-0 rounded-xl border-2 border-white/20 ${
                      isHovered ? 'animate-ping' : ''
                    }`}></div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {stream.title}
                  </h3>
                  
                  {/* Price/Percentage */}
                  <div className="mb-3">
                    {(stream.percentage || stream.price) && (
                      <div className={`text-3xl font-bold bg-gradient-to-r ${stream.gradient} bg-clip-text text-transparent`}>
                        {stream.percentage || stream.price}
                      </div>
                    )}
                    
                    {/* Items list for escrow */}
                    {stream.items && (
                      <div className="mt-2 space-y-1">
                        {stream.items.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">{item.label}</span>
                            <span className="text-sm font-semibold text-gray-900">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-700 mb-2 leading-relaxed">
                    {stream.description}
                  </p>
                  
                  {/* Subtext */}
                  {stream.subtext && (
                    <p className="text-sm text-gray-500 mb-4">
                      {stream.subtext}
                    </p>
                  )}
                  
                  {/* Stats badge */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                      <span className="text-xs font-medium text-gray-600">
                        {stream.stats}
                      </span>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gray-200 rounded-tr-xl"></div>
                  
                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <TrendingUp className="w-5 h-5 text-gray-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Model Advantages */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full mb-4">
                <Rocket className="w-4 h-4" />
                <span className="text-sm font-medium">Key Advantages</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Built for Scale & Profitability
              </h3>
              <p className="text-gray-600">
                Our diversified revenue model minimizes risk while maximizing growth potential
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">90%</div>
                <div className="text-sm text-gray-600">Lower CAC</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-1">78%</div>
                <div className="text-sm text-gray-600">Gross Margin</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-1">6x</div>
                <div className="text-sm text-gray-600">Revenue Streams</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-emerald-600/10 rounded-full blur-xl"></div>
            
            <div className="relative bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Invest in a Proven Model
                  </h3>
                  <p className="text-gray-600">
                    Join early investors in a sustainable, high-growth business
                  </p>
                </div>
                
                <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center gap-3">
                    <Target className="w-5 h-5" />
                    Invest Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">Projected ROI: 15-25x</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <span className="text-sm text-gray-600">Monthly Recurring Revenue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <span className="text-sm text-gray-600">Diversified Income</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionF;
